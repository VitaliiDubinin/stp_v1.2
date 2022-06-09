import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const { isEmpty, cartTotal, totalUniqueItems, items, totalItems, updateItemQuantity, removeItem, emptyCart } = useCart();
  // console.log("items", items);
  // const [totalAmount, setTotalAmount] = useState();

  if (isEmpty)
    return (
      <div className="text-center alert alert-info" role="alert">
        Your cart is empty
      </div>
    );

  const handleCheckout = () => {
    alert("Thanks for purchasing our products!");
    emptyCart();
  };
  // console.log(cartTotal);
  const totalam = cartTotal;
  // console.log(totalam);
  return (
    <section className="cart py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h1>Cart</h1>
          <h5>
            Cart ({totalUniqueItems}) Total Items: {totalItems}
          </h5>
          <table className="table table-light table-hover m-0">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                // setTotalAmount(item.quantity * item.price);

                return (
                  <tr key={item.id}>
                    <td>
                      {" "}
                      <img src={item.image} alt={item.product_name} style={{ height: "6rem" }} /> {item.product_name}
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <input type="number" value={item.quantity} onChange={(e) => updateItemQuantity(item.id, e.target.value)} />
                    </td>
                    <td>${item.quantity * item.price}</td>
                    {/* <td>{totalAmount}</td> */}
                    <td>
                      <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="col-auto ms-auto">
            <h2>Total price: ${cartTotal}</h2>
          </div>
          <div className="col-auto ">
            <button className="btn btn-danger m-2" onClick={emptyCart}>
              Empty Cart
            </button>

            <button className="btn btn-success m-2">
              <Link to="/cart/checkout" totalam={totalam}>
                {/* Checkout {cartTotal} */}
                {/* Checkout {totalam} */}
                Checkout
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
