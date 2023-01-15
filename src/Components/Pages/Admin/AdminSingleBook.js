import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const AdminSingleBook = () => {
  const book = useLoaderData();
  const [mybook, setMybook] = useState(book);
  // Updating book
  const handleSubmit = (event) => {
    // Sending data to server
    event.preventDefault();
    fetch(
      `https://b610-lerning-platform-server-side-mdgalibhossai-mdgalibhossain1.vercel.app/updatebook/${mybook?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(mybook),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newbook = { ...mybook };
    newbook[field] = value;
    setMybook(newbook);
  };
  return (
    <>
      <div className="mx-auto card card-custom lg:card-side my-5 bg-base-100 shadow-xl">
        <Link
          to="/admin"
          className="btn btn-outline-success mb-3"
          style={{ width: "6rem" }}
        >
          Back
        </Link>

        <figure>
          <img className="img-fluid" src={book?.image} alt="Album" />
        </figure>

        <Form onSubmit={handleSubmit} className="custom-form mt-10  ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={handleInputChange}
              style={{ height: "5rem" }}
              className="fw-bold fs-4"
              name="name"
              type="text"
              placeholder="Enter your Book name"
              defaultValue={book?.name}
            />
            <Form.Control
              onChange={handleInputChange}
              style={{ height: "8rem" }}
              name="body"
              as="textarea"
              placeholder="Enter your Book text"
              defaultValue={book?.body}
            />
          </Form.Group>

          <Button
            variant="outline-success"
            type="submit"
            className="w-full mt-2"
          >
            Update
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AdminSingleBook;
