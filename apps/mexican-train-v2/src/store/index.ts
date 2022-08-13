import { configureStore } from '@reduxjs/toolkit'

import { createPlayer, Player } from '../app/utils/player/factory'

export interface GameState {
  players: Array<Player>
  totalRounds: number
}

const initialState: GameState = {
  players: [],
  totalRounds: 12
}

const gameReducer = (state: any = initialState, action: any): GameState => {
  console.log({ state, action });
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        ...state,
        players: [...state.players, createPlayer(action.payload.name, state.players.length + 1)]
      }
    case "SET_TOTAL_ROUNDS":
      return {
        ...state,
        totalRounds: action.payload.totalRounds
      }
    default:
      return state
  }
}


export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch