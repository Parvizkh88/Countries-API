import React, { useState } from 'react'
import { useLocation } from 'react-router'
import {CountryT} from '../types/CountryTypes'

// type CountriesProps = {
//     countries:CountryT[]
//    data:CountryT[]
//     readonly flags: { png: string; svg: string };
//     readonly languages: { [key: string]: string };
//         readonly name: {
//       common: string;
//       official:string
//           };
//     readonly population: number;
//     readonly region: string;
// }


const Favorites = () => {
  
  const country = useLocation();
  console.log(country);
  // {data.name.official}
  // const [countryName, setcountryName] = useState({data.name.official})
  return (
    <div>
      <h1>These are favorites</h1>
      {/* <h3>{countryName}</h3> */}
      <h2>{country.state.theCountryName}</h2>
      <h2>{country.state.theCountryRegion}</h2>
      </div>
  )
}

export default Favorites