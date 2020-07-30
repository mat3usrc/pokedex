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

export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async ({ url }) => {
    const response = await apiService.getPokemon(url);
    return response;
  }
);

const initialState = {
  pokemons: [],
  pokemon: {},
  error: null,
  page: 1,
  perPage: 10,
  next: null,
  previous: null,
  detailsModal: false,
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
    setDetailsModal: (state, { payload }) => {
      state.detailsModal = payload;
    },
  },
  extraReducers: {
    [fetchPokemons.fulfilled]: (state, action) => {
      const { results, next, previous } = action.payload;
      state.pokemons = results;
      state.next = next;
      state.previous = previous;
    },
    [fetchPokemon.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.pokemon = action.payload;
      state.detailsModal = true;
    },
  },
});

export const { increment, decrement, setDetailsModal } = slice.actions;

export default slice.reducer;
