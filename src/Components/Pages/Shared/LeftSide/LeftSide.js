import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./LeftSide.css";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // "https://b610-lerning-platform-server-side-mdgalibhossain1.vercel.app/categories"
    fetch(
      " https://b610-lerning-platform-server-side-mdgalibhossai-mdgalibhossain1.vercel.app/category"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="">
      <h4>All category: {categories.length}</h4>
      <ul className="menu menu-vertical px-1">
        {categories.map((category) => (
          <li className="my-1" key={category.idno}>
            <Link className="navLink" to={`/category/${category.idno}`}>
              {category.userid}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSide;
