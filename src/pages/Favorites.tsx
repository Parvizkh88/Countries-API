import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { FaAngleLeft } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { CountryT } from '../types/CountryTypes';

const Favorites = () => {
  
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

  const country = useLocation();
  // const [state, setState] = useState(country);
  // console.log(country);

   const {favorites} = useAppSelector((state)=> state.countriesR)
  //  console.log(favorites);
   const renderFav= favorites.map((data,index:number) => { const{common}=data.name 
     return
        (
   <Card style={{ width: '18rem', marginLeft:'35rem', marginTop:'10rem'}}>
      <Card.Img variant="top" src={data.flags.svg} />
      <Card.Body>
        <Card.Title>{data.name.official}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{data.region}</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to='/'>
       <FaAngleLeft /> 
        </Link>
             </Card.Body>
    </Card>

    )
  })

    return (
  <div> 
    {renderFav}
  </div>
  )
}

export default Favorites

// {/* <button onClick={() => dispatch(addToFavorate(data))}>favourite </button> */}


