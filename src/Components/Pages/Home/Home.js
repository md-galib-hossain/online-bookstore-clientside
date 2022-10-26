import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../Shared/CourseCard/CourseCard";

const Home = () => {
  const courses = useLoaderData();
  return (
    <div>
      <h2>this is home :{courses.length}</h2>
      {courses.map((course) => (
        <CourseCard key={course._id} course={course}></CourseCard>
      ))}
    </div>
  );
};

export default Home;
