import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { FaAngleLeft } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Favorites = () => {
  
  const country = useLocation();
  console.log(country);
    return (
     <Card style={{ width: '18rem', marginLeft:'35rem', marginTop:'10rem'}}>
      <Card.Img variant="top" src={country.state.theCountryFlags} />
      <Card.Body>
        <Card.Title>{country.state.theCountryName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{country.state.theCountryRegion}</Card.Subtitle>
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
}

export default Favorites




