import { useLocation } from "react-router"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {searchByName} from '../redux/countries/countriesSlice'
import Countries from "../components/Countries"
import { CountriesState } from "../types/CountryTypes"

const Detail = () => {
 
const {countries, isError, message, isLoading, countrySearched} =
 useAppSelector((state)=> state.countriesR);
const dispatch = useAppDispatch();
type NameParams = {
  name: string;
};
const {name} = useParams<NameParams>();
// console.log(params);
// let name = params.official;
useEffect(()=>{
   dispatch(searchByName(name))
  }, [dispatch, name])

  // const searchedCountry = useAppSelector((state)=> state.countriesR)
  console.log(countrySearched);
  

// Trying to receive states in the detail page ----------
// const {region } = useParams() 
// console.log(params);
// const location = useLocation()
// console.log(location.state);
// ---------------------------------------

//  const allCountries =  countries.map((data,index:number) => (
//     <tr key={index}>
//       <td>{data.name.common}</td>
//    </tr>
//   ))

  return (
    <div>
      <h1>detail pageee</h1>
     <h3>{countrySearched[0].region}</h3>
      {/* <h2>{name.common}</h2> */}
    
{/* <p>{allCountries}</p> */}
    </div>
  )
}

export default Detail