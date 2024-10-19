import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { handleGameEvents } from "./events/GameEvents";

// Initialize Express and HTTP server
const app = express();
const httpServer = createServer(app);

// Initialize Socket.IO
const io = new Server(httpServer, {
  cors: {
    origin: "*",  // Allow cross-origin requests (adjust as needed)
  },
});

// Setup a basic route to test the server
app.get("/", (req, res) => {
  res.send("101 Mania game server is running.");
});

// Handle Socket.IO connections
io.on("connection", (socket: Socket) => {
  console.log("A user connected:", socket.id);

  // Handle game events
  handleGameEvents(socket, io);

  // Disconnect event
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Start the server
const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
