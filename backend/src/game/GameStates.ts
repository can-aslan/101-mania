enum TileColor {
  YELLOW,
  BLUE,
  RED,
  BLACK,
}

type Tile = {
  number: number
  color: TileColor
}

type PlayerState = {
  playerId: string
  nickname?: string
  hand: Tile[]
  characterId?: number // meaningful when there will be unique characters
  hasOpened: boolean
  openedDouble: boolean
  droppedTiles?: Tile[]
  // Double tile array showing each vector being a 'per' opened in front of the player. Others can add to this player's per
  openedTiles?: Tile[][]
}

type GameState = {
  playerStates: PlayerState[] // Player index 0,2 and 1,3 will be teammates
  centerTiles: Tile[]
  okey: Tile
  score1: number
  score2: number
}
