import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../Shared/CourseCard/CourseCard";
import { FaUserAlt } from "react-icons/fa";

const Home = () => {
  const courses = useLoaderData();
  return (
    <div>
      <h2>
        <FaUserAlt />
        this is home :{courses.length}
      </h2>
      {courses.map((course) => (
        <CourseCard key={course._id} course={course}></CourseCard>
      ))}
    </div>
  );
};

export default Home;
