import React, { useState } from 'react'
import { useLocation } from 'react-router'
// import {CountryT} from '../types/CountryTypes'


const Favorites = () => {
  
  const country = useLocation();
  console.log(country);
    return (
    <div className='countryDetailCard'>
      <h1>These are favorites</h1>
      <img style={{width:'200px'}} src={country.state.theCountryFlags}/>
      <h2>{country.state.theCountryName}</h2>
      <h2>{country.state.theCountryRegion}</h2>
      <h2>{country.state.theCountryPopulation}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Alias eum laudantium saepe suscipit facilis omnis cupiditate
         voluptates distinctio excepturi earum!</p>
      </div>
  )
}

export default Favorites