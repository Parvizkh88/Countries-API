import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Counter } from './components/Counter'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import Countries from './components/Countries'
import { CountryT } from './types/CountryTypes'
import { fetchCountries} from './redux/countries/countriesSlice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from './pages/Detail'
import Favorites from './pages/Favorites'
import MyNavbar from './components/MyNavbar';

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
      <MyNavbar />
          <Routes>
        <Route path='/' element={<Countries />}/>
        <Route path='/:name' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
              </Routes>
      {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
