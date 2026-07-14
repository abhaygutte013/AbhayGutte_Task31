import { useContext } from "react";
import { CartContext } from "/components/CartContext.jsx";
import { useNavigate } from "react-router-dom";

function Cart(){
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  function increase(id) {
    const updated = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updated);
  }
  function decrease(id) {
    const updated = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updated);
  }
  function removeItem(id) {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
  }
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              className="cart-item"
              key={item.id}
            >
              <h4>{item.name}</h4>
              <p>₹ {item.price}</p>
              <div className="quantity">
                <button
                  onClick={() => decrease(item.id)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increase(item.id)}
                >
                  +
                </button>
              </div>
              <p>
                Subtotal : ₹ {item.price * item.quantity}
              </p>
              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove from Cart
              </button>
            </div>
          ))}
          <hr />
          <h3>Total : ₹ {total}</h3>
          <button
            className="payment-btn"
            onClick={() => navigate("/payment")}
          >
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
}
export default Cart;