import React from 'react'
import { CountryT } from '../types/CountryTypes'
import Country from './Country'

interface CountriesProps {
    countries:CountryT[]
}

function Countries ({countries}:CountriesProps) {
  return (
    <div>
        Countries
        <div>
            {countries.map((country)=>(<Country country={country} />))}
        </div>
    </div>
  )
}

export default Countries