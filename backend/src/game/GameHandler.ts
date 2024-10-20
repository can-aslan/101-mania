import { Tile, TileColor } from "./GameStates"
const LIAR_OKEY: Tile = {
  number: 0,
  color: TileColor.BLACK
}

function createTiles(): Tile[] {

  const colors = [TileColor.RED, TileColor.BLUE, TileColor.BLACK, TileColor.YELLOW]
  let tiles = []
  for (let i = 1; i <= 13; i++) {
    for (let color of colors) {
      let tile: Tile = { number: i, color: color }
      tiles.push(tile)
      tiles.push({ ...tile })
    }
  }

  tiles.push({ ...LIAR_OKEY })
  tiles.push({ ...LIAR_OKEY })

  return tiles
}


function shuffleTiles(tiles: Tile[], shuffleCount: number): Tile[] {

  for (let shuffleIteration = 0; shuffleIteration < shuffleCount; shuffleIteration++) {
    for (let i = 0; i < tiles.length; i++) {
      const j = Math.floor(Math.random() * (tiles.length - 1));
      [tiles[i], tiles[j]] = [tiles[j], tiles[i]]

    }
  }
  return tiles

}

let tiles = createTiles()
let shuffleCount = 10
tiles = shuffleTiles(tiles, shuffleCount)
console.log(tiles)
