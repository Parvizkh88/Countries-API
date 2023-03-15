import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useAppSelector} from '../app/hooks'

import { CountryT } from '../types/CountryTypes'
import Country from './Country'
// import { v4 as uuidv4 } from 'uuid'

interface CountriesProps {
    countries:CountryT[]
   data:CountryT[]
}

function Countries () {
  const {countries} = useAppSelector((state)=> state.countriesR)


  //  const [cities, setCities] = useState([]);
  // const [draft, setDraft] = useState('London');

const handleDetail = (xx:string)=> {
     console.log(xx)
  }

  // async function fetchData() {
  //   try {
  //     const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
  //     setCities(response.data)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // })


  const allCountries =  countries.map((data,index:number) => (
    <tr key={index}>
    {/* <td>{index}</td> */}
    <td><img src={data.flags.svg} alt='' style={{width:'40px'}} /></td>
    <td>{data.name.common}</td>
    <td>{data.region}</td>
    <td>{data.population.toLocaleString() }</td>
    {/* <td>{data.languages}</td> */}
    {data.languages && <ul>
           {(Object.values(data.languages)).map((language, index:number)=>
          <li key={index}>{language}</li>
          )}
         </ul>}
    
    <td><button>Bookmark</button></td>
    {/* <td><button className=‘’ onClick={(event: string) => {deleteHandler}}>Delete</button></td> */}
    <td><button onClick={()=>handleDetail(data.region)}>More</button></td>
 </tr>
  ))
  return (
    <div className='container'>
            Search Country
            <div>
            <input type='search' placeholder='Search' />
            </div>
            <div>
          <table>
            <thead>
              <tr>
                {/* <td>number </td>
                 <td>flags</td> */}
                 <th>name</th>
                 <th>region</th>
                 <th>population</th>
                 <th>language</th>
              </tr>
            </thead>
            <tbody>
              {allCountries}
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default Countries


