import React from "react";
import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Header.css";
import LeftSide from "../LeftSide/LeftSide";

const Header = () => {
  const [ChangeColor, setChangeColor] = useState(false);
  const changeBackground = () => {
    setChangeColor(!ChangeColor);
  };
  return (
    <Navbar className="mb-4" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Link className="navLogo" to="/">
            <img
              alt=""
              src={
                "	https://i.pinimg.com/564x/b3/d0/f8/b3d0f80577c33445be9cd2ba76741992.jpg"
              }
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            <h2 className="d-inline-block ms-2">e-learning</h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="navLink">
              <Nav.Link>Courses</Nav.Link>
            </Link>
            <Link className="navLink">
              <Nav.Link>Faq</Nav.Link>
            </Link>
            <Link className="navLink">
              <Nav.Link>Blog</Nav.Link>
            </Link>
            <button onClick={changeBackground}>Change Background</button>
          </Nav>
          <Nav>
            <ButtonGroup>
              <Link>
                <Button className="headerButton" variant="outline-warning">
                  Login
                </Button>
              </Link>
              <Link>
                <Button className="headerButton" variant="outline-dark">
                  Signup
                </Button>
              </Link>
            </ButtonGroup>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png" />
              </div>
            </div>
            <div className="d-lg-none">
              <LeftSide></LeftSide>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
