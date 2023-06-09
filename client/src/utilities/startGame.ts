import { state } from "../state"
import { GamePiece } from "../types"
import { getRandomPiece } from "./getRandomPiece"
import { defaultScore, pageContentsValues } from "../constants"

export const startGame = (level:number) => {
    state.occupiedTiles = []
    state.score = defaultScore
    state.lines = 0
    state.level = level
    state.dropPoints = 0
    let startingPiece = getRandomPiece()
    if (startingPiece === false) startingPiece = getRandomPiece(true) as GamePiece
    state.activePieceTiles = startingPiece.defaultPosition
    state.pieceType = startingPiece.name
    let nextPiece = getRandomPiece()
    if (nextPiece === false) nextPiece = getRandomPiece(true) as GamePiece
    state.nextPieceTiles = nextPiece.defaultPosition
    state.nextPieceType = nextPiece.name
    state.previewPieceTiles = nextPiece.previewPosition
    state.gameId = Date.now()
    state.pageContent = pageContentsValues.game
  }
