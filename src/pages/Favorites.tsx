import React, { useState } from 'react'
import { useLocation } from 'react-router'
// import {CountryT} from '../types/CountryTypes'


const Favorites = () => {
  
  const country = useLocation();
  console.log(country);
    return (
    <div>
      <h1>These are favorites</h1>
            <h2>{country.state.theCountryName}</h2>
      <h2>{country.state.theCountryRegion}</h2>
      </div>
  )
}

export default Favorites