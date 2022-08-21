import { configureStore } from '@reduxjs/toolkit';

import { createPlayer, Player } from '../app/utils/player/factory';

export interface GameState {
  players: Array<Player>
  totalRounds: number,
  topScores: { lowestFoundScore: number, highestFoundScore: number }
}

const initialState: GameState = {
  players: [],
  totalRounds: 12,
  topScores: { lowestFoundScore: -1, highestFoundScore: -1 }
};


const gameReducer = (state: any = initialState, action: any): GameState => {
  switch (action.type) {
    case 'SET_TOP_SCORES':
      return {
        ...state,
        topScores: action.payload
      };
    case 'ADD_PLAYER':
      return {
        ...state,
        players: [
          ...state.players,
          createPlayer(action.payload.name, state.players.length + 1)
        ]
      };
    case "SET_TOTAL_ROUNDS":
      return {
        ...state,
        totalRounds: action.payload.totalRounds
      };
    case "UPDATE_SCORE":
      // get the player by id
      return {
        ...state,
        players: [...state.players].map(p => {
          if (p.id === action.payload.player.id) {
            return {
              ...p,
              scores: {
                ...p.scores,
                [action.payload.round]: parseInt(action.payload.score)
              }
            };
          }
          return p;
        })
      };
    default:
      return state;
  }
};


export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch