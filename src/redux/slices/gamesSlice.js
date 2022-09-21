import { createSlice } from '@reduxjs/toolkit'

export const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    favoriteGame: {
      id: '',
      title: ''
    },
    recommendedGames: [],
  },
  reducers: {
    setFavoriteGame: (state, action) => {
      state.favoriteGame = action.payload
    },
    setEecommendedGames: (state, action) => {
      state.recommendedGames = action.payload
    },
  }
})

export const { setFavoriteGame, setEecommendedGames } = gamesSlice.actions

export default gamesSlice.reducer