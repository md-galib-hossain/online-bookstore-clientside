import React from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "../Shared/BookCard/BookCard";
import { FaUserAlt } from "react-icons/fa";
import LeftSide from "../Shared/LeftSide/LeftSide";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const books = useLoaderData();

  return (
    <Container>
      <Row>
        <Col lg="2">
          <LeftSide></LeftSide>
        </Col>
        <Col lg="10">
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 ">
            {books.map((book) => (
              <BookCard key={book._id} book={book}></BookCard>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
