import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../Shared/CourseCard/CourseCard";

const AllCourses = () => {
  const AllCourses = useLoaderData();
  return (
    <div>
      <h2>All Courses :{AllCourses.length}</h2>
      <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-4">
        {AllCourses.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
