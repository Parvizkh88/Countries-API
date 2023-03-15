import React from 'react'
import { useAppSelector} from '../app/hooks'
import { CountryT } from '../types/CountryTypes'
import Country from './Country'


// interface CountriesProps {
//     countries:CountryT[]
//    data:CountryT[]
// }

function Countries () {
  const {countries} = useAppSelector((state)=> state.countriesR)
  const allCountries =  countries.map((data,index:number) => (
    <tr key={index}>
    {/* <td>{index}</td> */}
    <td><img src={data.flags.svg} alt='' style={{width:'40px'}} /></td>
    <td>{data.name.common}</td>
    <td>{data.region}</td>
    <td>{data.population}</td>
    {/* <td>{data.languages}</td> */}


    <td><button className='' >Bookmark</button></td>
    {/* <td><button className=‘’ onClick={(event: string) => {deleteHandler}}>Delete</button></td> */}
    <td><button className='' >More</button></td>
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
                 {/* <th>language</th> */}
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


