import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '../redux/counter/counterSlice'
import countriesReducer from '../redux/countries/countriesSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    countriesR:countriesReducer,
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
