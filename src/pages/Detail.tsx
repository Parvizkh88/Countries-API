import { useAppSelector } from "../app/hooks"



const Detail = () => {
 
const {countries} = useAppSelector((state)=> state.countriesR)



 const allCountries =  countries.map((data,index:number) => (
    <tr key={index}>
      <td>{data.name.common}</td>
   </tr>
  ))





  return (
    <div>
      <h1>Detail</h1>
       
<p>{allCountries}</p>
    </div>
  )
}

export default Detail