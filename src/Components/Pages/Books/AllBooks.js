import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import BookCard from "../Shared/BookCard/BookCard";

const AllBooks = () => {
  const Books = useLoaderData();
  const { loading } = useContext(AuthContext);
  return (
    <div>
      <h2>All Books :{Books.length}</h2>
      <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-4">
        {loading == true
          ? Books.map((book) => (
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
          : Books.map((book) => (
              <BookCard key={book._id} book={book}></BookCard>
            ))}
      </div>
    </div>
  );
};

export default AllBooks;
