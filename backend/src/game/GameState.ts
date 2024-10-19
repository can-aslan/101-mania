
enum TileColor {
  YELLOW,
  BLUE,
  RED,
  BLACK
}

type Tile = {
  number: Number,
  color: TileColor
}

type PlayerState = {
  hand: Tile[],
  characterId: Number // meaningful when there will be unique characters
  hasOpened: Boolean,
  openedDouble: Boolean
  droppedTiles: Tile[]
  // Double tile array showing each vector being a 'per' opened in front of the player. Others can add to this player's per
  openedTiles: Tile[][]
}

type GameState101 = {
  playerStates: PlayerState[], // Player index 0,2 and 1,3 will be teammates
  centerTiles: Tile[],
  score1: Number,
  score2: Number
}
