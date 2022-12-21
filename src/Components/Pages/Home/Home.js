import React from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "../Shared/BookCard/BookCard";
import { FaUserAlt } from "react-icons/fa";
import LeftSide from "../Shared/LeftSide/LeftSide";
import { Col, Container, Row } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Home = () => {
  const books = useLoaderData();
  const { loading } = useContext(AuthContext);

  return (
    <Container>
      <Row>
        <Col lg="2">
          <LeftSide></LeftSide>
        </Col>
        <Col lg="10">
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 ">
            {loading == true
              ? books.map((book) => (
                  <div class="border my-28 border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                      <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 bg-slate-700 rounded"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                            <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                          </div>
                          <div class="h-2 bg-slate-700 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : books.map((book) => (
                  <BookCard key={book._id} book={book}></BookCard>
                ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
