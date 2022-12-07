import React from "react";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import LeftSide from "../Pages/Shared/LeftSide/LeftSide";

const Main = () => {
  const { color } = useContext(AuthContext);
  return (
    <div className={`bg-${color ? "black" : "white"}`}>
      <Header></Header>
      <Container>
        <Row>
          <Outlet>
            <Col lg="2" className="d-none d-lg-block">
              <LeftSide></LeftSide>
            </Col>
            <Col lg="10"></Col>
          </Outlet>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
