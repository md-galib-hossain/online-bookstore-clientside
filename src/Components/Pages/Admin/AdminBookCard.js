import React from "react";
import { Link } from "react-router-dom";
import "./AdminBookCard.css";

const AdminBookCard = ({ book }) => {
  return (
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
        <Link to={`/deletebook/${book._id}`}>
          <div className="  justify-end">
            <button className=" btn btn-danger">Delete Book</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminBookCard;
