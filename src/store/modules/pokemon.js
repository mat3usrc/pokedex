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
  async ({ search }) => {
    const pokemon = await apiService.getPokemon(search);
    return pokemon;
  }
);

const initialState = {
  pokemons: [],
  pokemon: {
    name: '',
    types: [],
    stats: [],
    evolution_chain: {},
  },
  page: 1,
  perPage: 10,
  next: null,
  previous: null,
  detailsModal: false,
  detailsError: false,
  loading: false,
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
    setDetailsError: (state, { payload }) => {
      state.detailsError = payload;
    },
  },
  extraReducers: {
    [fetchPokemons.fulfilled]: (state, action) => {
      const { results, next, previous } = action.payload;
      state.pokemons = results;
      state.next = next;
      state.previous = previous;
    },
    [fetchPokemon.pending]: (state) => {
      state.loading = true;
    },
    [fetchPokemon.fulfilled]: (state, action) => {
      state.loading = false;
      state.pokemon = action.payload;
      state.detailsModal = true;
    },
    [fetchPokemon.rejected]: (state) => {
      state.loading = false;
      state.detailsError = true;
    },
  },
});

export const {
  increment,
  decrement,
  setDetailsModal,
  setDetailsError,
} = slice.actions;

export default slice.reducer;
