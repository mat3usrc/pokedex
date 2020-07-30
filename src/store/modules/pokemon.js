import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../api';

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async ({ limit, offSet }) => {
    const response = await apiService.getPokemons(limit, offSet);
    return response.results;
  }
);

const initialState = {
  pokemons: [],
  status: 'idle',
  error: null,
};

export const slice = createSlice({
  name: 'pokemon',
  initialState,
  extraReducers: {
    [fetchPokemons.fulfilled]: (state, action) => {
      state.status = 'success';
      state.pokemons = state.pokemons.concat(action.payload);
    },
  },
});

export const selectAllPokemons = (state) => state.pokemon.pokemons;

export default slice.reducer;
