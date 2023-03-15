import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { CountriesState, CountryT } from '../../types/CountryTypes'

const baseURL = 'https://restcountries.com/v3.1/all'

const initialState :CountriesState ={
   countries:[],
       isLoading:false,
       isError: false,
       message:''
}

const fetchCountries = createAsyncThunk( 'countries/fetchCountries',
 async () => {
    let response = await axios.get(baseURL) 
    let data:CountryT[]= await response.data
    return data
  }
)

 const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
      },
 
   extraReducers: (builder) => {
       builder.addCase(fetchCountries.fulfilled, (state, action)=>{
      state.countries= action.payload
      state.isLoading = false
      state.isError = false
      state.message = 'Countries fetched successfully'
    })
      builder.addCase(fetchCountries.rejected, (state, action) => {
      state.countries = []
      state.isError = true
      state.isLoading = false
      state.message = 'Error fetching countries'
    })
     builder.addCase(fetchCountries.pending, (state, action) => {
      state.isLoading = true
      state.message = 'Loading...'
    })
  },
})


export  { fetchCountries } 
export default countriesSlice.reducer
