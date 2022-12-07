import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

import AdminBookCard from "./AdminBookCard";

const Admin = () => {
  const Books = useLoaderData();
  const [displaybooks, setDisplaybooks] = useState(Books);
  // Deleting review
  const handleDelete = (book) => {
    const agree = window.confirm(`are you confirm to delete: ${book?.name}`);
    if (agree) {
      // sending data to server
      fetch(
        `https://b610-lerning-platform-server-side-mdgalibhossai-mdgalibhossain1.vercel.app/delete/${book._id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("book deleted");
            const remainingbooks = displaybooks.filter(
              (bk) => bk._id != book._id
            );
            setDisplaybooks(remainingbooks);
          }
        });
    }
  };
  return (
    <div className="container text-center">
      <h1 className="text-center">Admin Panel</h1>
      <h3 className="text-center">Total Books: {displaybooks.length}</h3>
      <Link to="/adminaddbook" className="btn btn-outline-success  my-3">
        Add Book
      </Link>
      {displaybooks.map((book) => (
        <div className="mx-auto card card-custom lg:card-side my-5 bg-base-100 shadow-xl">
          <figure>
            <img className="img-fluid" src={book?.image} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Book Name: {book?.name}</h2>
            <p>
              {/* {book?.body?.length > 100 ? (
              <p>
                {book?.body?.slice(0, 50) + "..."}
                <Link to={`/Books/${book?._id}`}>Read More</Link>
              </p>
            ) : (
              <p> {book?.body}</p>
            )} */}
              {book?.body}
            </p>
            <div className="d-flex gap-2">
              <Button
                className="w-1/2"
                onClick={() => handleDelete(book)}
                variant="danger"
              >
                Delete
              </Button>

              <Link
                to={`/adminsinglebook/${book?._id}`}
                className="btn btn-outline-success w-1/2"
              >
                Edit
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Admin;
