import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import BookCard from "../Shared/BookCard/BookCard";
import LeftSide from "../Shared/LeftSide/LeftSide";

const Category = () => {
  const Categorybook = useLoaderData();
  console.log(Categorybook);
  return (
    <Container>
      <Row>
        <Col lg="2">
          <LeftSide></LeftSide>
        </Col>
        <Col lg="10">
          <h4 className="mb-4">
            Total {Categorybook.length} Book in this Category
          </h4>
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 ">
            {Categorybook.map((book) => (
              <BookCard key={book._id} book={book}></BookCard>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
