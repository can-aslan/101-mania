import { Server, Socket } from "socket.io";
import { DISCONNECT, JOIN_TABLE, LEAVE_TABLE, MAKE_MOVE, MOVE_MADE, PLAYER_LEFT } from "./EventDefinitions";

// In-memory storage for game rooms (tables)
const tables: Record<string, string[]> = {};

export function handleGameEvents(socket: Socket, io: Server) {
  // Event for creating/joining a table
  socket.on(JOIN_TABLE, (tableId: string) => {
    if (!tables[tableId]) {
      tables[tableId] = [];  // Create a new table if it doesn't exist
    }

    // Join the table (room)
    socket.join(tableId);
    tables[tableId].push(socket.id);

    console.log(`User ${socket.id} joined table ${tableId}`);
    io.to(tableId).emit("playerJoined", tables[tableId]);  // Notify all players in the room
  });

  // Event for making a move in the game
  socket.on(MAKE_MOVE, (tableId: string, move: string) => {
    console.log(`Move made by ${socket.id} in table ${tableId}: ${move}`);

    // Broadcast the move to all players in the same table
    io.to(tableId).emit(MOVE_MADE, { playerId: socket.id, move });
  });

  // Event for leaving the table
  socket.on(LEAVE_TABLE, (tableId: string) => {
    socket.leave(tableId);
    tables[tableId] = tables[tableId].filter(id => id !== socket.id);

    console.log(`User ${socket.id} left table ${tableId}`);
    io.to(tableId).emit(PLAYER_LEFT, tables[tableId]);  // Notify others
  });

  // Handle disconnection
  socket.on(DISCONNECT, () => {
    for (const [tableId, players] of Object.entries(tables)) {
      if (players.includes(socket.id)) {
        tables[tableId] = players.filter(id => id !== socket.id);
        io.to(tableId).emit(PLAYER_LEFT, tables[tableId]);
        console.log(`User ${socket.id} disconnected from table ${tableId}`);
      }
    }
  });
}
