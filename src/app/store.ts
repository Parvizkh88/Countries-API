import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import countriesReducer from '../redux/countries/countriesSlice'
// import favoritesReducer from '../redux/countries/favoriteSlice'

export const store = configureStore({
  reducer: {
    countriesR:countriesReducer,
    // favoritesR: favoritesReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
