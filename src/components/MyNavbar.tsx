// import React from 'react'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
import { BiFontSize, BiWorld } from "react-icons/bi";
import SearchComponent from "./SeachComponent";
import { useAppSelector } from "../app/hooks";
import { CountryT } from "../types/CountryTypes";
import { fontWeight } from "@mui/system";

interface MyNavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const MyNavbar: React.FC<MyNavbarProps> = ({ isDarkMode, setIsDarkMode }) => {
  const { favorites } = useAppSelector((state) => state.countriesR);
  let favoriteCount = favorites.length;

  return (
    <Navbar className="navbar" expand="lg">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand href="#">
            <FaHome />
          </Navbar.Brand>
        </Link>
        <Link to="/">
          <Navbar.Brand href="#">
            <BiWorld />
          </Navbar.Brand>
        </Link>
        <Link to="/favorites">
          <Navbar.Brand href="#">
            <FaHeart />
          </Navbar.Brand>
        </Link>
        <p
          className="custom-card"
          style={{
            marginLeft: "-15px",
            marginRight: "10px",
            marginBottom: "-18px",
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
          {favoriteCount}
        </p>
        <Form>
          <Form.Check
            style={{ marginTop: "0.5rem", fontWeight: "bold" }}
            type="switch"
            id="custom-switch"
            label="Dark mode"
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
          />
        </Form>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <SearchComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
