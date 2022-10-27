import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Courses = () => {
  const course = useLoaderData();

  const { _id, body, image, idno } = course;
  return (
    <div className="card lg:card-side mb-5 bg-base-100 shadow-xl">
      <figure>
        <img className="img-fluid" src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{course.name}</h2>
        <p>{body}</p>
        <div className="card-actions justify-end">
          {/* show more on this category */}
          <Link to={"/checkout"}>
            <button className="btn btn-warning">Get premium access</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
