import React, { useEffect } from 'react'
// import { Counter } from './components/Counter'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import Countries from './components/Countries'
import { CountryT } from './types/CountryTypes'
import { fetchCountries} from './redux/countries/countriesSlice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from './pages/Detail'
import Navbar from './components/Navbar'
import Favorites from './pages/Favorites'
// import Footer from './components/Footer'

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
      <Navbar />
      <Routes>
        <Route path='/' element={<Countries />}/>
        {/* <Route path='/detail' element={<Detail />} /> */}
        <Route path='/:official' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
      {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
