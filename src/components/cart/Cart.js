import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import Header from "../header/Header";
import ToggleButton from "../../components/toggleButon/ToggleButton";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [balance, setBalance] = useState(100);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const games = JSON.parse(localStorage.getItem("games")) || [];
    games.forEach(addToCart);
  }, []);

  const addToCart = (game) => {
    if (balance < totalPrice + game.price) {
      alert(
        "Insufficient balance. Please remove items from your cart or add funds to your account."
      );
    } else {
      setCartItems((prevItems) => [...prevItems, game]);
      setTotalPrice((prevPrice) => prevPrice + game.price);
    }
  };

  const removeFromCart = (game) => {
    const updatedCart = cartItems.filter((item) => item.id !== game.id);
    localStorage.setItem("games", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    setTotalPrice((prevPrice) => prevPrice - game.price);
  };

  const handlePayment = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Add some items to proceed with the payment.");
    } else {
      if (balance < totalPrice) {
        alert(
          "Insufficient balance. Please remove items from your cart or add funds to your account."
        );
      } else {
        setPaymentSuccess(true);
        setCartItems([]);
        setTotalPrice(0);
        setBalance((prevBalance) => prevBalance - totalPrice);
      }
    }
  };

  return (
    <div className={`shopping-cart ${theme}`}>
      <Header titulo={"Steamcito"} />
      <h2 className="cart-title">Carrito de compras Steamcito</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Tu carrito de compras está vacío.</p>
      ) : (
        <>   <Link to="/Store" className="go-back-title">Volver a la tienda</Link>
           <ToggleButton toggleTheme={toggleTheme} className="toggle-button" />
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="game-info">
                  <img src={item.image} alt={item.name} className="game-image" />
                  <div className="game-details">
                    <p className="game-name">{item.name}</p>
                    <p className="game-price">Precio: ${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item)}
                >
                  Eliminar del carrito
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-actions">
            <p className="total-price">Precio total: ${totalPrice.toFixed(2)}</p>
            {!paymentSuccess && (
              <button className="payment-button" onClick={handlePayment}>
                Pagar
              </button>
            )}
          </div>
        </>
      )}
      <p className="balance">Balance: ${balance.toFixed(2)}</p>
      {paymentSuccess && <h1>El pago se realizó exitosamente</h1>}
   
   
    </div>
  );
};

export default Cart;