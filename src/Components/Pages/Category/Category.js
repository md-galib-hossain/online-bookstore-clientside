import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const course = useLoaderData();
  return <div>course: {course.length}</div>;
};

export default Category;
