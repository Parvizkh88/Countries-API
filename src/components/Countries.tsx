import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector} from '../app/hooks'
import { CountryT } from '../types/CountryTypes'
import Country from './Country'
 import { addToFavorites } from '../redux/countries/favoriteSlice';
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
// const navigate = useNavigate()
 const dispatch = useAppDispatch();
const handleAddToFavorites = (data:CountriesProps)=>{
    dispatch(addToFavorites(data));
    //  navigate('/favorites')
    };
  //  const [cities, setCities] = useState([]);
  // const [draft, setDraft] = useState('London');
   const [region, setRegion] = useState('Africa');
   

const handleDetail = ()=> {
    //  console.log(xx)
    // navigate('/detail')
    // setRegion(xx)
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

 
  const allCountries =  countries?.map((data,index:number) => {
    
    return(
    <tr key={index}>
    {/* <td>{index}</td> */}
    <td><img src={data.flags.svg} alt='' style={{width:'40px'}} /></td>
    <Link to={`/${data.name.official}`}>
    <td>{data.name.official}</td>
    </Link>
        <td>{data.region}</td>
    <td>{data.population.toLocaleString() }</td>
    {/* <td>{data.languages}</td> */}
    {data.languages && <ul>
           {(Object.values(data.languages)).map((language, index:number)=>
          <li key={index}>{language}</li>
          )}
         </ul>}
    <Link to='/favorites' 
    state={{theCountryName:data.name.official, theCountryRegion: data.region}}> 
     <td><button onClick={()=>handleAddToFavorites(data) }>Bookmark</button></td>
    </Link>
       {/* <td><button className=‘’ onClick={(event: string) => {deleteHandler}}>Delete</button></td> */}
     <Link to={data.name.official} state={data.name.official}> 
    <button onClick={handleDetail}>More</button>
    </Link>
 </tr>)
  })
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

