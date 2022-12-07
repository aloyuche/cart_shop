import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DATA from "../Data";

const ProductDetails = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");

  const proid = useParams();
  const proDetail = DATA.filter((x) => x.id === proid.id);
  const product = proDetail[0];

  console.log(product);

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      setCartBtn("Remove from Cart");
    } else {
      setCartBtn("Add to Cart");
    }
  };

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-center mx-auto product ">
            <img src={product.image} alt={product.title} height="400px" />
          </div>
          <div className="col-md-6 flex flex-col justify-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">${product.price}</h2>
            <p>{product.desc}</p>
            <button
              onClick={() => handleCart(product)}
              className="btn btn-outline-primary"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
