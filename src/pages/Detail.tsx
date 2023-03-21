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

useEffect(()=>{
   dispatch(searchByName(name))
  }, [dispatch, name])

  console.log(countrySearched);

  return (
    <div>
      <h1>detail pageee</h1>
     <h3>{countrySearched[0].region}</h3>
        </div>
  )
}

export default Detail