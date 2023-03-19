import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoritesState } from "../../types/CountryTypes";
import { CountryT } from "../../types/CountryTypes";

const initialState :FavoritesState= {
    favoriteCountries :[]
}

const favoriteSlice = createSlice({
    name:'favorites',
    initialState,
    reducers:{
    addToFavorites(state, action:PayloadAction<CountryT>){
        state.favoriteCountries.push(action.payload)
      },
    },
});

export const {addToFavorites} = favoriteSlice.actions;

export default favoriteSlice.reducer;