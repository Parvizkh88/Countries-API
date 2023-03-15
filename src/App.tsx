import React, { useEffect } from 'react'
// import { Counter } from './components/Counter'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import Countries from './components/Countries'
import { CountryT } from './types/CountryTypes'
import { fetchCountries} from './redux/countries/countriesSlice'

// interface CountriesProps {
//     countries:CountryT[]
//    data:CountryT[]
// }

function App() {

const {countries} = useAppSelector((state)=> state.countriesR)
const dispatch = useAppDispatch()

useEffect(() => {
  dispatch(fetchCountries())
     }, [dispatch])

console.log(countries);

  return (
    <div>
      {/* <Counter /> */}
      <h1>Countries</h1>
      <Countries />
    </div>
  )
}

export default App
