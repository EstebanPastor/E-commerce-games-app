import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Store.css";
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
import ToggleButton from "../../components/toggleButon/ToggleButton";
import Header from "../header/Header";

const Store = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
      name: "The elder scroll Skyrim",
      price: 8.1,
      image: skyrim,
    },
  ];

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(games);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const addedGameId = location.state?.addedGameId;
    if (addedGameId) {
      const addedGame = games.find((game) => game.id === addedGameId);
      if (addedGame) {
        setCartItems((prevCartItems) => [...prevCartItems, addedGame]);
        setCartCount((prevCartCount) => prevCartCount + 1);
      }
    }
  }, [location.state?.addedGameId, games]);

  const handleSearch = () => {
    const filteredGames = games.filter((game) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredGames);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchResults(games);
  };

  const handleGoCart = () => {
    navigate("/cart", { state: { cartItems } });
  };

  const addToCart = (game) => {
    setCartCount((prevCartCount) => prevCartCount + 1);
    setCartItems((prevCartItems) => [...prevCartItems, game]);
    const games =  localStorage.getItem('games') ? JSON.parse(localStorage.getItem('games')) : []
    if(games.find((g) => g.id === game.id)){
      return alert('Juego ya añadido');
    }
    games.push(game);
    localStorage.setItem('games', JSON.stringify(games));
   
  };

  return (
    
    <div className={`app ${theme}`}>
      <Header titulo="Steamcito"/>
      <div className="game-list-container">
        <div className="search-container">
          <div className="search-controls">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Busca algún juego"
              className="search-input"
            />
            <button onClick={handleSearch} className="searchButton">
              Buscar
            </button>
            <button onClick={handleClearSearch} className="clearButton">
              Limpiar
            </button>
            <button onClick={handleGoCart} className="cartButton">
              Carrito: {cartCount}
            </button>
          </div>
        </div>
        <ul className="game-list">
          {searchResults.map((game) => (
            <li key={game.id} className="game-list-item">
              <img
                src={game.image}
                alt={game.name}
                className="game-list-item-image"
              />
              <div className={`game-list-item-details ${theme}`}>
                <h3 className="game-list-item-title">{game.name}</h3>
                <p className="game-list-item-platforms">Platforms: PC</p>
                <p className="game-list-item-price">${game.price}</p>
                <button onClick={() => addToCart(game)}>
                  Añadir al carrito
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={`app ${theme}`}>
          <ToggleButton toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default Store;
