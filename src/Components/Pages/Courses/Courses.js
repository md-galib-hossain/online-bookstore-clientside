import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import jsPDF from "jspdf";
import logo from "./../../../logo/header-logo.png";
const Courses = () => {
  const course = useLoaderData();

  const { _id, body, image, idno } = course;
  const pdfGenerate = () => {
    const doc = new jsPDF();
    //I have attached a logo to the pdf because my course images was cdn links and different file types
    doc.addImage(logo, "jpg", 65, 20, 500, 400);
    doc.text(body, 10, 10);
    doc.save(`Course: ${_id}.pdf`);
  };
  return (
    <div>
      <Button className="mb-3 " onClick={pdfGenerate}>
        Download PDF
      </Button>
      <div className="card lg:card-side mb-5 bg-base-100 shadow-xl">
        <figure>
          <img className="img-fluid" src={image} alt="Album" />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{course.name}</h2>
          <p>{body}</p>
          <div className="card-actions justify-end">
            {/* show more on this category */}
            <Link to={`/checkout/${course._id}`}>
              <button className="btn btn-warning">Get premium access</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
