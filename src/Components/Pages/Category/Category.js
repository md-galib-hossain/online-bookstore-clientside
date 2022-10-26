import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../Shared/CourseCard/CourseCard";

const Category = () => {
  const Categorycourse = useLoaderData();
  return (
    <div>
      <h4 className="mb-4">
        Total {Categorycourse.length} course in this Category
      </h4>
      {Categorycourse.map((course) => (
        <CourseCard key={course._id} course={course}></CourseCard>
      ))}
    </div>
  );
};

export default Category;
