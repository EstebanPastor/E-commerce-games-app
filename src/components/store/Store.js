import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import store from "./Store.css";
import Header from "../header/Header";

const Store = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page_size=10`;
        const response = await fetch(url);
        const data = await response.json();
        setGames(data.results);
        setSearchResults(data.results);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const addedGameId = location.state?.addedGameId;
    if (addedGameId) {
      const addedGame = games.find((game) => game.id === addedGameId);
      if (addedGame) {
        setCartItems((prevCartItems) => [...prevCartItems, addedGame]);
      }
    }
  }, [location.state?.addedGameId]);

  const handleSearch = () => {
    const filteredResults = games.filter((game) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchResults(games);
  };

  const handleBuy = (gameId) => {
    console.log(`Comprando juego con ID ${gameId}`);
  };

  const handleAddToCart = (gameId) => {
    console.log(`Agregando al carrito el juego con ID ${gameId}`);
    setCartCount((prevCount) => prevCount + 1);
    const addedGame = games.find((game) => game.id === gameId);
    if (addedGame) {
      setCartItems((prevCartItems) => [...prevCartItems, addedGame]);
    }
  };

  const handleGoCart = () => {
    navigate("/cart");
  };
  

  return (
    <>
      <Header titulo="Steamcito" />
      <div className="game-list-container">
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by game"
            className="search-input"
          />
          <button onClick={handleSearch} className="searchButton">
            Buscar juegos
          </button>
          <button onClick={handleClearSearch} className="clearButton">
            Limpiar
          </button>
          <button onClick={handleGoCart} className="cartButton">
            Carrito: {cartCount}
          </button>
        </div>

        <ul className="game-list">
          {searchResults.map((game) => (
            <li key={game.id} className="game-list-item">
              <img
                src={game.background_image}
                alt={game.name}
                className="game-list-item-image"
              />

              <div className="game-list-item-details">
                <h3 className="game-list-item-title">{game.name}</h3>
                <p className="game-list-item-platforms">
                  Platforms:{" "}
                  {game.platforms
                    .map((platform) => platform.platform.name)
                    .join(", ")}
                </p>
                <button
                  onClick={() => handleAddToCart(game.id)}
                  className="add-to-cart-button"
                >
                  Agregar al carrito
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Store;
