import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import countriesReducer from '../redux/countries/countriesSlice'

export const store = configureStore({
  reducer: {
    
    countriesR: countriesReducer,
  },
  preloadedState: {
    isDarkMode: false as boolean,
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
