import React, { useContext, useState } from "react";
import { ProductContext } from "../Context/Context";
import "../App.css";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { kartPrice, user } = useContext(ProductContext);
  const navigate = useNavigate();
  const [readyToPay, setReadyToPay] = useState(false);

  return (
    <div className="checkout-parent">
      {kartPrice !== 0 && user && (
        <div>
          {" "}
          <h2>Checkout</h2>
          <div className="summary">
            <h4>Order Summary</h4>
            <p>Cart Amount : {kartPrice}€</p>
            <p>Shipping Charges : Free</p>
            <p>Total Amount : {kartPrice}€</p>
          </div>
          <div className="delivery-address">
            <p>Delivery Address:</p>
            <form
              className="delivery-address"
              onSubmit={(e) => {
                e.preventDefault();
                setReadyToPay(true);
              }}
            >
              <input type="text" placeholder="Full Name" />
              <input type="number" placeholder="Phone Number" />
              <input type="number" placeholder="House/Office Number" />
              <input type="text" placeholder="Street" />
              <input type="text" placeholder="City" />
              <input type="number" placeholder="Pin Code" />
              <label>
                <input type="checkbox" required /> I confirm my delivery address
              </label>
              <button>Continue to Pay</button>
            </form>
          </div>
        </div>
      )}
      {kartPrice <= 0 && navigate(`/products`)}
      {user.length === 0 && (
        <div>
          <h2>Check Out</h2>
          <p>Please Login to Check Out</p>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            {`Login >>`}
          </button>
        </div>
      )}
      {readyToPay && (
        <div className="payment-modal">
          <form className="paynow-form">
            <h3>Debit/Credit Card</h3>
            <p>Amount : {kartPrice}€</p>

            <input type="text" placeholder="Name on the card" required />
            <input
              placeholder="Card number"
              type="number"
              pattern="[0-9]{12,}"
              inputMode="numeric"
              minLength="12"
              maxLength="12"
              required
            />

            <div className="expiry-CVV">
              <select className="month" name="month" defaultValue="January">
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <select className="month" name="month" defaultValue="2023">
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                <option>2029</option>
              </select>
              <input
                type="password"
                placeholder="CVV"
                className="CVV"
                style={{ width: "50px" }}
                pattern="\d{3}"
                required
              />
            </div>

            <button>Pay Now</button>
            <button
              style={{
                cursor: "pointer",
                marginTop: "15px",
                backgroundColor: "white",
                border: "none",
                color: "red",
              }}
              onClick={() => {
                setReadyToPay(false);
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
