import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import jsPDF from "jspdf";
import logo from "./../../../logo/header-logo.png";
import "./Books.css";

const Books = () => {
  const book = useLoaderData();
  console.log(book);
  const { _id, body, image, idno, name, image2, bookprice } = book[0];

  const pdfGenerate = () => {
    const doc = new jsPDF();
    //I have attached a logo to the pdf because my course images was cdn links and different file types
    doc.addImage(logo, "jpg", 65, 20, 500, 400);
    doc.text(body, 10, 10);
    doc.save(`Book: ${_id}.pdf`);
  };
  // extra

  return (
    <div>
      <Button className="mb-3 " onClick={pdfGenerate}>
        Download PDF FOR FREE
      </Button>
      <div className="card lg:card-side mb-5 bg-base-100 shadow-xl">
        <figure>
          <img className="img-fluid" src={image} alt="Album" />
        </figure>

        <div className="card-body">
          <h5>${bookprice}</h5>
          <h2 className="card-title">Book Name: {name}</h2>
          <h5>Introduction</h5>
          <p>{body}</p>
          <div className="card-actions justify-end">
            {/* show more on this category */}
            <Link className="" to={`/checkout/${_id}`}>
              <button className=" btn btn-warning">Order Book</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
