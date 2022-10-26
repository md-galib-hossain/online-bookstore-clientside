import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="card lg:card-side mb-5 bg-base-100 shadow-xl">
      <figure>
        <img className="img-fluid" src={course.image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{course.name}</h2>
        <p>
          {course.body.length > 100 ? (
            <p>
              {course.body.slice(0, 50) + "..."}
              <Link to={`/courses/${course._id}`}>Read More</Link>
            </p>
          ) : (
            <p> {course.body}</p>
          )}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-warning">Kaj korte hobe</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
