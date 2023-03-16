import { useLocation, useParams } from "react-router"
import { useAppSelector } from "../app/hooks"



const Detail = () => {
 
const {countries} = useAppSelector((state)=> state.countriesR)
const {region } = useParams() 
// console.log(params);
const location = useLocation()
console.log(location.state);


//  const allCountries =  countries.map((data,index:number) => (
//     <tr key={index}>
//       <td>{data.name.common}</td>
//    </tr>
//   ))





  return (
    <div>
      <h1>{region}</h1>
      {/* <h2>{name.common}</h2> */}
    
{/* <p>{allCountries}</p> */}
    </div>
  )
}

export default Detail