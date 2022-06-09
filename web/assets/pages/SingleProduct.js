import { useLocation } from "react-router-dom";

import React from "react";

import { useCart } from "react-use-cart";

const SingleProduct = () => {
  const location = useLocation();
  const product = location.state.data;
  console.log(product);

  const { addItem } = useCart();
  return (
    <div className="col-10 mx-auto m-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <div className="card-body text-center">
          <img
            src={product.image}
            alt={product.product_name}
            className="card-image-top img-fluid mb-3"
            style={{ width: "15rem", marginBottom: "1rem" }}
          />
          <h5 className="card-title">{product.product_name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">{product.price}</p>

          <button className="btn btn-success" onClick={() => addItem(product)}>
            Add to cart
          </button>
          <a className="btn btn-success m-2" href="/">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
