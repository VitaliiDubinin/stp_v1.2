import React from "react";

import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const apiHead = 'https://source.unsplash.com/';
const randApiHead = 'https://source.unsplash.com/500x400/?';
const count_words = (word_array) => {
  let total = 0;
  word_array.forEach(() => {
    total++;
  });
  return total;
}

function ProductCard({ data, product_name, description, units, price, id, image = null }) {
  let randImage = randApiHead;
  
  if(!image){

    if (count_words(product_name.split()) > 1){
      const name_array = product_name.split();
      console.log(count_words(name_array))
      const total_words = count_words(name_array);
      const noun = name_array[total_words - 1];
      randImage += noun;
      
    }
    else{
      randImage += product_name
    }
    image = randImage;
  }else if(!image.includes('https://')){
    image = apiHead + image;
  }

  const { addItem } = useCart();
  return (
    <div className="productCard">
      <div className="productImage">
        <img src={image} width="50" height="60" />
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
