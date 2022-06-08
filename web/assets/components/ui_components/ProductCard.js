import React from "react";

import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

function ProductCard({ data, product_name, description, units, price, id, image = null }) {
  const pic = image ? image : "no image available";
  // console.log(data);
  const { addItem } = useCart();
  return (
    <div className="productCard">
      <div className="productImage">
        <img src={pic} width="50" height="60" />
      </div>
      <div className="productBodyContainer">
        <h3 className="productName"> {product_name} </h3>
        <div className="shortDescription">
          {description}. <br />
        </div>
        <div className="cardFooter">
          <Link to={`/api/product/find/${data.id}`} state={{ data: data }}>
            See more
          </Link>

          {/* <button type="submit" className="addToCartBtn">
            {" "}
            add{" "}
          </button> */}

          <button
            className="btn btn-success"
            onClick={() =>
              // console.log(id, product_name, description, price, pic)}>
              addItem({ id: id, product_name, description, price, pic })
            }
          >
            Add to cart
          </button>

          <div className="productPrice">
            {price}€/{units}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

//productName
//description
//totalAmount
//units
//image
//id
