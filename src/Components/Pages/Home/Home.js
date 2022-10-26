import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const courses = useLoaderData();
  return (
    <div>
      <h2>this is home :{courses.length}</h2>
    </div>
  );
};

export default Home;
