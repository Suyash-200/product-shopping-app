// store/slices/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite(state, action) {
      if (!state.ids.includes(action.payload)) {
        state.ids.push(action.payload)
      }
    },
    removeFavorite(state, action) {
      state.ids = state.ids.filter(id => id !== action.payload)
    },
  },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions

export const selectFavoritesIds = (state) => state.favorites.ids
export const selectFavoritesCount = (state) => state.favorites.ids.length  // ✅ added

export default favoritesSlice.reducer
