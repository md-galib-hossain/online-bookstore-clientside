import React from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "../Shared/BookCard/BookCard";

const AllBooks = () => {
  const Books = useLoaderData();
  return (
    <div>
      <h2>All Books :{Books.length}</h2>
      <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-4">
        {Books.map((book) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
