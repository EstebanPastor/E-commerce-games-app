import React, { useState } from "react";
import "./Cart.css";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (game) => {
    setCartItems([...cartItems, game]);
  };

  const removeFromCart = (game) => {
    const updatedCart = cartItems.filter((item) => item.id !== game.id);
    setCartItems(updatedCart);
  };

  const renderCartItems = () => {
    if (cartItems.length === 0) {
      return <p className="empty-cart">Your cart is empty.</p>;
    }

    return (
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <p>{item.name}</p>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="shopping-cart">
      <h2 className="cart-title">Shopping Cart</h2>
      {renderCartItems()}
      <h3 className="game-list-title">Game List</h3>
      <ul className="game-list">
        <li>
          <p>Game 1</p>
          <button onClick={() => addToCart({ id: 1, name: "Game 1" })}>
            Add to Cart
          </button>
        </li>
        <li>
          <p>Game 2</p>
          <button onClick={() => addToCart({ id: 2, name: "Game 2" })}>
            Add to Cart
          </button>
        </li>
        <li>
          <p>Game 3</p>
          <button onClick={() => addToCart({ id: 3, name: "Game 3" })}>
            Add to Cart
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ShoppingCart;
