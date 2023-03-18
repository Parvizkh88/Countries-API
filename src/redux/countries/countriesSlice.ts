import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { CountriesState, CountryT } from '../../types/CountryTypes'


const baseURL = 'https://restcountries.com/v3.1/all'

const initialState :CountriesState ={
   countries:[],
   countrySearched:[],
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


// search to direct to detail page ---------------------------
const searchByName = createAsyncThunk( 'countries/searchByName',
 async (name, thunkAPI) => {
    let response = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`) 
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
    // Search by country to direct to detail page builders -----------
      builder.addCase(searchByName.fulfilled, (state, action)=>{
      // state.countries= action.payload
      state.countrySearched = action.payload
      state.isLoading = false
      state.isError = false
      state.message = 'Countriy detail successful'
    })
      builder.addCase(searchByName.rejected, (state, action) => {
      // state.countries = []
       state.countrySearched = []
      state.isError = true
      state.isLoading = false
      state.message = 'Error in Countriy detail'
    })
     builder.addCase(searchByName.pending, (state, action) => {
      state.isLoading = true
      state.message = 'Loading...'
    })
  },
})


export  { fetchCountries, searchByName } 
export default countriesSlice.reducer
