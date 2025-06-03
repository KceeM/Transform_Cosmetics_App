import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-table">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-row">
              <img src={item.image} alt={item.name} />
              <div className="cart-info">
                <h4>{item.name}</h4>
                <p>Price: R{item.price}</p>
                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
                <p>Total: R{item.price * item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Subtotal: R{subtotal.toFixed(2)}</h3>
            <div className="cart-actions">
              <Link to="/checkout" className="checkout-btn">Checkout</Link>
              <Link to="/shop" className="continue-btn">Continue Shopping</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
