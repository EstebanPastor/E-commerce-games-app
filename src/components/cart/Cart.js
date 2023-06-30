import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";
import cs_go from "../../assets/cs_go.jpg";
import gta_v from "../../assets/gta_v.jpg";
import portal2 from "../../assets/portal_2.jpg";
import tomb_raider_2013 from "../../assets/tomb_raider_2013.pg.jpeg";
import the_witcher_3 from "../../assets/the_witcher_3.jpg";
import bioshock from "../../assets/bioshock_infinite.jpeg";
import left_4_dead_2 from "../../assets/left_4_dead_2.jpg";
import portal from "../../assets/portal.jpg";
import rdr from "../../assets/red_dead_redemption_2.jpeg";
import skyrim from "../../assets/skyrim.jpg";
import { toast } from "react-hot-toast";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [availableGames, setAvailableGames] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [balance, setBalance] = useState(100);

  useEffect(() => {
    setAvailableGames(games);
  }, []);

  const navigate = useNavigate();

  const addToCart = (game) => {
    if (balance < totalPrice + game.price) {
      alert("Saldo insuficiente. Elimine algunos juegos o agregue fondos a su cuenta.");
    } else {
      setCartItems([...cartItems, game]);
      setTotalPrice(totalPrice + game.price);
      setAvailableGames(availableGames.filter((item) => item.id !== game.id));
    }
  };

  const removeFromCart = (game) => {
    const updatedCart = cartItems.filter((item) => item.id !== game.id);
    setCartItems(updatedCart);
    setTotalPrice(totalPrice - game.price);
    setAvailableGames([...availableGames, game]);
  };

  const games = [
    {
      id: 1,
      name: "Counter Strike Global Offensive",
      price: 14.0,
      image: cs_go,
    },
    {
      id: 2,
      name: "GTA V",
      price: 15.0,
      image: gta_v,
    },
    {
      id: 3,
      name: "Portal 2",
      price: 12.55,
      image: portal2,
    },
    {
      id: 4,
      name: "The Witcher 3 Wild Hunt",
      price: 9.99,
      image: the_witcher_3,
    },
    {
      id: 5,
      name: "Tomb Raider 2013",
      price: 8.1,
      image: tomb_raider_2013,
    },
    {
      id: 6,
      name: "Bioshock infinite",
      price: 8.1,
      image: bioshock,
    },
    {
      id: 7,
      name: "Left 4 dead 2",
      price: 8.1,
      image: left_4_dead_2,
    },
    {
      id: 8,
      name: "Portal",
      price: 8.1,
      image: portal,
    },
    {
      id: 9,
      name: "Red Dead Redemption 2",
      price: 8.1,
      image: rdr,
    },
    {
      id: 10,
      name: "The Elder Scrolls V: Skyrim",
      price: 8.1,
      image: skyrim,
    },
   
  ];

  const handlePayment = () => {
    if (cartItems.length === 0) {
      alert("Tu compra está vacía. Agrega algunos juegos para completar el pago.");
    } else {
      if (balance < totalPrice) {
        alert("Saldo insuficiente. Elimine algunos juegos o agregue fondos a su cuenta.");
      } else {
        setPaymentSuccess(true);
        setCartItems([]);
        setTotalPrice(0);
        setBalance(balance - totalPrice);
        toast.success("¡Gracias por su compra!");
        navigate("/Store");
      }
    }
  };

  const renderCartItems = () => {
    if (cartItems.length === 0) {
      return <p className="empty-cart">Tu carrito de compras está vacío.</p>;
    }

    return (
      <>
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="game-info">
                <img src={item.image} alt={item.name} className="game-image" />
                <div className="game-details">
                  <p className="game-name">{item.name}</p>
                  <p className="game-price">Price: ${item.price.toFixed(2)}</p>
                </div>
              </div>
              <button className="remove-button" onClick={() => removeFromCart(item)}>
                Borrar producto
              </button>
            </li>
          ))}
        </ul>
        <div className="cart-actions">
          <p className="total-price">Total Price: ${totalPrice.toFixed(2)}</p>
          {!paymentSuccess && (
            <button className="payment-button" onClick={handlePayment}>
              Pagar
            </button>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrito de compras Steamcito</h2>
      {renderCartItems()}
      <h3 className="game-list-title">¡Lista de juegos disponibles!</h3>
      <p className="balance">Balance: ${balance.toFixed(2)}</p>
      <ul className="game-list">
        {availableGames.map((game) => (
          <li key={game.id}>
            <div className="game-info">
              <img src={game.image} alt={game.name} className="game-image" />
              <div className="game-details">
                <p className="game-name">{game.name}</p>
                <p className="game-price">Price: ${game.price.toFixed(2)}</p>
              </div>
            </div>
            {!paymentSuccess && (
              <button className="add-button" onClick={() => addToCart(game)}>
                Añadir al carrito
              </button>
            )}
          </li>
        ))}
      </ul>
      <Link to="/Store" className="go-back">Volver a la tienda</Link>
    </div>
  );
};

export default Cart;
