import { useContext, useState } from "react";
import { CartContext } from "/components/CartContext.jsx";
import { Link } from "react-router-dom";

function Payment() {
  const { cart } = useContext(CartContext);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  function handlePayment(e) {
  e.preventDefault();
  if (
    cardName === "" ||
    cardNumber === "" ||
    expiry === "" ||
    cvv === ""
  ) {
    alert("Please fill all details.");
    return;
  }
  if (cardNumber.length !== 16) {
    alert("Card number must be exactly 16 digits.");
    return;
  }
  alert("Payment Successful!");
}
  return (
    <div className="payment-container">
      <div className="payment-left">
        <h2>Order Summary</h2>
        {
          cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div
                className="payment-item"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.name}
                />
                <div>
                  <h4>{item.name}</h4>
                  <p>₹ {item.price}</p>
                  <p>Quantity : {item.quantity}</p>
                </div>
              </div>
            ))
          )
        }
        <h3>Total : ₹ {total}</h3>
        <Link to="/">
          <button className="back-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
      <div className="payment-right">
        <h2>Credit Card Payment</h2>
        <form onSubmit={handlePayment}>
          <label>Card Holder Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
          <label>Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 1234 5678"
            value={cardNumber}
            maxLength={16}
            inputMode="numeric"
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setCardNumber(value);
            }}
          />
          <label>Expiry Date</label>
          <input
            type="month"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />
          <label>CVV</label>
          <input
            type="password"
            placeholder="123"
            value={cvv}
            maxLength={3}
            inputMode="numeric"
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setCvv(value);
            }}
          />
          <button
            type="submit"
            className="pay-btn"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}
export default Payment;