import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaHeart } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Table from "react-bootstrap/Table";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { CountryT } from "../types/CountryTypes";

import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/countries/countriesSlice";
import { Link } from "react-router-dom";
import Loading from "./Loading";

type CountriesProps = {
  countries: CountryT[];
  data: CountryT[];
  readonly flags: { png: string; svg: string };
  readonly languages: { [key: string]: string };
  readonly name: {
    common: string;
    official: string;
  };
  readonly population: number;
  readonly region: string;
};

function Countries() {
  const { countries, searchInput, favorites, isLoading } = useAppSelector(
    (state) => state.countriesR
  );

  const dispatch = useAppDispatch();

  const handleAddToFavorites = (data: CountriesProps) => {
    if (favorites.includes(data)) {
      dispatch(removeFromFavorites(data));
      toast("Country removed from favorites");
    } else {
      dispatch(addToFavorites(data));
      toast("Country added to favorites");
    }
  };

  const searchedData = countries.filter((searchedItem) =>
    searchedItem.name.common.toLowerCase().includes(searchInput)
  );

  return (
    <div>
      {isLoading && <Loading />}
      <ToastContainer />
      <Table bordered hover className="custom-table">
        <thead>
          <th>flag</th>
          <th>name</th>
          <th>region</th>
          <th>population</th>
          <th>language</th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          {searchedData?.map((data, index: number) => {
            return (
              <tr key={index}>
                <td>
                  <img src={data.flags.svg} alt="" style={{ width: "40px" }} />
                </td>
                <td>
                  <Link className="custom-table" to={`/${data.name.official}`}>
                    {data.name.official}
                  </Link>
                </td>
                <td>{data.region}</td>
                <td>{data.population.toLocaleString()}</td>
                <td>
                  {data.languages && (
                    <ul>
                      {Object.values(data.languages).map(
                        (language, index: number) => (
                          <li key={index}>{language}</li>
                        )
                      )}
                    </ul>
                  )}
                </td>
                <td>
                  <Link
                    to="/"
                    state={{
                      theCountryName: data.name.official,
                      theCountryRegion: data.region,
                      theCountryFlags: data.flags.svg,
                      theCountryPopulation: data.population.toLocaleString(),
                    }}
                  >
                    <FaHeart
                      onClick={() => handleAddToFavorites(data)}
                      style={{
                        color: favorites.includes(data) ? "green" : "#0d6efd",
                      }}
                    />
                  </Link>
                </td>
                <td>
                  <Link to={data.name.official} state={data.name.official}>
                    <FaAngleRight />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Countries;
