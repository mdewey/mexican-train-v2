import { configureStore } from '@reduxjs/toolkit';

import { createPlayer, Player } from '../app/utils/player/factory';

import storage from "redux-persist";



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
    case "LOAD_GAME":
      return action.payload;
    case 'REMOVE_PLAYER':
      return {
        ...state,
        players: state
          .players
          .filter((player: Player) => player.id !== action.payload.id)
      };
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

const localStorageSaver =
  (state: any = initialState, action: any): GameState => {
    const newState = gameReducer(state, action);
    localStorage.setItem("gameState", JSON.stringify(newState));
    localStorage.setItem("gameStateVersion", "1.0.0");
    localStorage.setItem("gameStateTimestamp", new Date().toISOString());
    return newState;
  };

export const store = configureStore({
  reducer: {
    game: localStorageSaver,
  },
  devTools: process.env['NODE_ENV'] !== 'production',
  preloadedState: {
    game: JSON.parse(localStorage.getItem("gameState") || "{}")
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch