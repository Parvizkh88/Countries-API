import React, { useEffect } from 'react'
// import { Counter } from './components/Counter'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import Countries from './components/Countries'

import { fetchCountries} from './redux/countries/countriesSlice'

function App() {

const {countries} = useAppSelector((state)=> state.countriesR)
const dispatch = useAppDispatch()

useEffect(() => {
  dispatch(fetchCountries)
   }, [dispatch])


  return (
    <div>
      {/* <Counter /> */}
      <h1>Countries</h1>
      <Countries countries={countries}/>
    </div>
  )
}

export default App
