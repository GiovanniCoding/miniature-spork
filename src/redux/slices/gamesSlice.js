import { createSlice } from '@reduxjs/toolkit'

export const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    query: '',
    searchFocus: false,
    gamesOptions: []
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload
    },
    setGamesOptions: (state, action) => {
      state.gamesOptions = action.payload
    },
    setSearchFocus: (state, action) => {
      state.searchFocus = action.payload
    }
  }
})

export const { setQuery, setGamesOptions, setSearchFocus } = gamesSlice.actions

export default gamesSlice.reducer