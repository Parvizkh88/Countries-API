import React from 'react'
import {CountryT} from '../types/CountryTypes'

type CountryProps = {
    country : CountryT
}

function Country({Country}:CountryProps) {
  return (
    <div>
        <p>{Country.area}</p>
        </div>
  )
}

export default Country