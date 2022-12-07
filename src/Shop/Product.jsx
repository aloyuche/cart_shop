import React from "react";
import { NavLink } from "react-router-dom";
import Data from "../Data";

const Product = () => {
  const cardItem = (items) => {
    return (
      <div
        className="card my-5 py-4 mx-3 justify-center items-center "
        key={items.id}
        style={{ width: "18rem" }}
      >
        <img src={items.image} class="card-img-top" alt={items.title} />
        <div className="card-body">
          <h5 className="card-title">{items.title}</h5>
          <p className="lead">${items.price}</p>
          <NavLink
            to={`/products/${items.id}`}
            className="btn btn-outline-primary"
          >
            Buy Now
          </NavLink>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="py-4 container  bg-slate-100">
        <div className="row">
          <div className="w-full text-center">
            <h1 className="text-primary fw-bold text-3xl">PRODUCTS</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-around">{Data.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
