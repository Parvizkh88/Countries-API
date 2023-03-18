import React, { useEffect } from 'react'
// import { Counter } from './components/Counter'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import Countries from './components/Countries'
import { CountryT } from './types/CountryTypes'
import { fetchCountries} from './redux/countries/countriesSlice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from './pages/Detail'
// import Navbar from './components/Navbar'

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

// console.log(countries);

  return (
    <div>
      <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Countries />}/>
        <Route path='/detail' element={<Detail />} />
        <Route path='/:region' element={<Detail />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
