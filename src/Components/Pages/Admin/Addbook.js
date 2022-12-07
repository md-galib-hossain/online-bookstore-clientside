import React from "react";
import { Button, Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Addbook = () => {
  const books = useLoaderData();
  //   UseTitle("Add book");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.bookname.value;
    const details = form.bookdetails.value;
    const url = form.bookurl.value;
    const price = form.bookprice.value;
    const book = {
      idno: books.length + 1,
      name: name,
      body: details,
      image: url,
      bookprice: price,
    };
    // sending data to server
    fetch(
      "https://b610-lerning-platform-server-side-mdgalibhossai-mdgalibhossain1.vercel.app/adminaddbook",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(book),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          //   toast("You books have been added");
          form.reset();
        }
      })

      .catch((er) => console.error(er));
  };
  return (
    <div>
      <div style={{ width: "68rem" }} className="mx-auto my-4">
        <Form onSubmit={handleSubmit} className="custom-form mt-36  ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>bookname</Form.Label>
            <Form.Control
              name="bookname"
              type="text"
              placeholder="Enter your book name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>bookdetails</Form.Label>
            <Form.Control
              name="bookdetails"
              as="textarea"
              type="text"
              placeholder="Enter your book details"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>bookurl</Form.Label>
            <Form.Control
              name="bookurl"
              type="text"
              placeholder="Enter your image url"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>bookprice</Form.Label>
            <Form.Control
              name="bookprice"
              type="text"
              placeholder="Enter your book price"
            />
          </Form.Group>

          <Button
            variant="outline-primary"
            type="submit"
            className="w-full mt-2"
          >
            POST book
          </Button>
        </Form>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Addbook;
