import React, { useContext } from "react";
import { ProductContext } from "../Context/Context";
import "../App.css";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { kartPrice, user } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <div>
      {kartPrice !== 0 && user && (
        <div>
          {" "}
          <h2>Checkout</h2>
          <div>
            <p>
              <b>Total Cart Amount</b>
            </p>
            <p>
              <b>{kartPrice}€</b>
            </p>
          </div>
          <div className="delivery-address">
            <p>Delivery Address:</p>
            <form
              className="delivery-address"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input type="text" placeholder="Full Name" />
              <input type="number" placeholder="Phone Number" />
              <input type="number" placeholder="House/Office Number" />
              <input type="text" placeholder="Street" />
              <input type="text" placeholder="City" />
              <input type="number" placeholder="Pin Code" />
              <button>Continue to Pay</button>
            </form>
          </div>
        </div>
      )}
      {kartPrice <= 0 && navigate(`/products`)}
      {user.length === 0 && (
        <div>
          <h2>Checkout</h2>
          <p>Login Please</p>
        </div>
      )}
    </div>
  );
}
