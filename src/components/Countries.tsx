import React from 'react'
import axios from 'axios';
import { FaHeart } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Table from 'react-bootstrap/Table';

import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector} from '../app/hooks'
import { CountryT } from '../types/CountryTypes'
import Country from './Country'
//  import { addToFavorites } from '../redux/countries/favoriteSlice';
 import { addToFavorites } from '../redux/countries/countriesSlice'
import { Link } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid'

type CountriesProps = {
    countries:CountryT[]
   data:CountryT[]
    readonly flags: { png: string; svg: string };
    readonly languages: { [key: string]: string };
        readonly name: {
      common: string;
      official:string
          };
    readonly population: number;
    readonly region: string;
}

function Countries () {
  const {countries} = useAppSelector((state)=> state.countriesR)
//  const navigate = useNavigate()
 const dispatch = useAppDispatch();
const handleAddToFavorites = (data:CountriesProps)=>{
    dispatch(addToFavorites(data));
            //  navigate('/favorites')
    };
  
  const allCountries =  countries?.map((data,index:number) => {
    
    return(
      // <section >
<tr key={index}>
    {/* <td>{index}</td> */}
    <td><img src={data.flags.svg} alt='' style={{width:'40px'}} /></td>
    <Link to={`/${data.name.official}`}>
    <td>{data.name.official}</td>
    </Link>
        <td>{data.region}</td>
    <td>{data.population.toLocaleString() }</td>
    {/* <td>{data.languages}</td> */}
    <td>
{data.languages && <ul>
           {(Object.values(data.languages)).map((language, index:number)=>
          <li key={index}>{language}</li>
          )}
         </ul>}
    </td>
    <section style={{display:'flex', justifyContent:'space-between'}}>
      <Link to='/favorites' 
    state={{theCountryName:data.name.official, theCountryRegion: data.region,
    theCountryFlags:data.flags.svg, theCountryPopulation:data.population.toLocaleString() }}> 
     <td><FaHeart onClick={()=>handleAddToFavorites(data) }/></td>
    </Link>
       {/* <td><button className=‘’ onClick={(event: string) => {deleteHandler}}>Delete</button></td> */}
     <Link to={data.name.official} state={data.name.official}> 
     <td><FaAngleRight /></td>
        </Link>
    </section>
   </tr>
      // </section>
     )
  })
  return (
   
       <table style={{width:'90vw', marginLeft:'1rem'}}>
            <thead>
              <tr  >             
                 <th style={{paddingRight:'2rem'}}>flags</th> 
                 <th >names</th>
                 <th>region</th>
                 <th>population</th>
                 <th>language</th>
              </tr>
            </thead>
            <tbody>
              {allCountries}
            </tbody>
          </table>
               )
}

export default Countries
