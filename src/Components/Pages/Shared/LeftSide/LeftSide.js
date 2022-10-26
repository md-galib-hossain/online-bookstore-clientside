import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./LeftSide.css";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // "https://b610-lerning-platform-server-side-mdgalibhossain1.vercel.app/categories"
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="">
      <h4>All category: {categories.length}</h4>
      <div>
        {categories.map((category) => (
          <p key={category.idno}>
            <Link className="navLink" to={`/category/${category.idno}`}>
              {category.userid}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
