import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../api';

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async (_, thunkApi) => {
    const state = thunkApi.getState();

    const { page, perPage } = state.pokemon;
    const offSet = (page - 1) * perPage;
    const response = await apiService.getPokemons(perPage, offSet);
    return response;
  }
);

const initialState = {
  pokemons: [],
  error: null,
  page: 1,
  perPage: 10,
  next: null,
  previous: null,
};

export const slice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    increment: (state) => {
      state.page += 1;
    },
    decrement: (state) => {
      state.page -= 1;
    },
  },
  extraReducers: {
    [fetchPokemons.fulfilled]: (state, action) => {
      const { results, next, previous } = action.payload;
      state.pokemons = results;
      state.next = next;
      state.previous = previous;
    },
  },
});

export const { increment, decrement } = slice.actions;

export default slice.reducer;
