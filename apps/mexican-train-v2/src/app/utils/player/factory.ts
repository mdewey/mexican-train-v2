import { animalNames } from './data'

export interface GameScores {
  [key: string]: number
}

export interface Player {
  name: string
  id: number
  scores: GameScores
}

const generateScoresForPlayer = () => {
  return {
    '1': Math.floor(Math.random() * 100),
    '2': Math.floor(Math.random() * 100),
    '3': Math.floor(Math.random() * 100),
    '4': Math.floor(Math.random() * 100),
    '5': Math.floor(Math.random() * 100),
    '6': Math.floor(Math.random() * 100),
    '7': Math.floor(Math.random() * 100),
    '8': Math.floor(Math.random() * 100),
    '9': Math.floor(Math.random() * 100),
    '10': Math.floor(Math.random() * 100),
    '11': Math.floor(Math.random() * 100),
    '12': Math.floor(Math.random() * 100),
  }
}


const createPlayer = (name: string, id: number, generateScores = false): Player => {
  const playerName = name || animalNames[Math.floor(Math.random() * animalNames.length)]
  return {
    name: playerName,
    id: id || Math.floor(Math.random() * 100),
    scores: generateScores ? generateScoresForPlayer() : {}
  }
}

export {
  createPlayer
}