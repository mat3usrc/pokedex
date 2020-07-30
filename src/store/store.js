import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './modules/pokemon';

export default configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
