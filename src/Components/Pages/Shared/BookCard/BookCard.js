import React from "react";
import { Link } from "react-router-dom";
import "./BookCard.css";

const BookCard = ({ book }) => {
  return (
    <div className="card card-custom lg:card-side mb-5 bg-base-100 shadow-xl">
      <figure>
        <img className="img-fluid" src={book?.image} alt="Album" />
      </figure>
      <div className="card-body">
        <h5>${book?.bookprice}</h5>
        <h2 className="card-title">Book Name: {book?.name}</h2>
        <p>
          {book?.body?.length > 100 ? (
            <p>
              {book?.body?.slice(0, 50) + "..."}
              <Link to={`/Books/${book?._id}`}>Read More</Link>
            </p>
          ) : (
            <p> {book?.body}</p>
          )}
        </p>

        <div className=" card-actions justify-end">
          <Link to={`/checkout/${book._id}`}>
            <button className=" btn btn-warning">Order Book</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
