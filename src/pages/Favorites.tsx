import React, { useState } from "react";
import { useLocation } from "react-router";
import { FaAngleLeft } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { CountryT } from "../types/CountryTypes";

const Favorites = () => {
  type CountriesProps = {
    countries: CountryT[];
    data1: CountryT[];
    readonly flags: { png: string; svg: string };
    readonly languages: { [key: string]: string };
    readonly name: {
      common: string;
      official: string;
    };
    readonly population: number;
    readonly region: string;
  };

  const { favorites } = useAppSelector((state) => state.countriesR);

  const renderFav = favorites?.map((data1, index: number) => {
    return (
      <Card style={{ width: "18rem", marginLeft: "35rem", marginTop: "10rem" }}>
        <Card.Img variant="top" src={data1.flags.svg} />
        <Card.Body>
          <Card.Title className="custom-card">{data1.name.official}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {data1.region}
          </Card.Subtitle>
          <Card.Text className="custom-card">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/">
            <FaAngleLeft />
          </Link>
        </Card.Body>
      </Card>
    );
  });
  return <div>{renderFav}</div>;
};

export default Favorites;
