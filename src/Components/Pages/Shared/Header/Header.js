import React from "react";
import { useState } from "react";
import { Button, ButtonGroup, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Header.css";
import LeftSide from "../LeftSide/LeftSide";
import { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const [ChangeColor, setChangeColor] = useState(false);
  const changeBackground = () => {
    setChangeColor(!ChangeColor);
  };
  return (
    <Navbar className="mb-4" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
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
            <Nav.Link>
              <Link to="/courses" className="navLink">
                All Courses
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navLink">Faq</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/blog" className="navLink">
                Blog
              </Link>
            </Nav.Link>
            <button onClick={changeBackground}>Change Background</button>
          </Nav>
          <Nav>
            <Nav.Link>
              {user?.uid ? (
                <>
                  <Button
                    onClick={handleLogOut}
                    className="headerButton"
                    variant="light"
                  >
                    Logout
                  </Button>

                  <span>{user?.displayName}</span>
                </>
              ) : (
                <>
                  <ButtonGroup>
                    <Link to="/login">
                      <Button
                        className="headerButton"
                        variant="outline-warning"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link to="/signup">
                      <Button className="headerButton" variant="outline-dark">
                        Signup
                      </Button>
                    </Link>
                  </ButtonGroup>
                </>
              )}
            </Nav.Link>
            <Nav.Link>
              {user?.photoURL ? (
                <a title={user?.displayName}>
                  <Image
                    style={{ height: "40px" }}
                    roundedCircle
                    src={user.photoURL}
                  ></Image>
                </a>
              ) : (
                <FaUser />
              )}
            </Nav.Link>

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
