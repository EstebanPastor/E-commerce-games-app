import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Store.css";
import Header from "../header/Header";
import ToggleButton from "../../components/toggleButon/ToggleButton";
import ThemeContext from "../../context/ThemeContext";
import Footer from "../../components/footer/Footer";

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
  const [cartItems, setCartItems] = useState([]);
  const [noGamesFound, setNoGamesFound] = useState(false); // New state for validation

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
        setCartItems((prevCartItems) => [...prevCartItems, addedGame.id]);
      }
    }
  }, [location.state?.addedGameId]);

  useEffect(() => {
    const filteredResults = games.filter((game) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
    setNoGamesFound(filteredResults.length === 0); // Set validation state
  }, [searchTerm, games]);

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const handleGoCart = () => {
    const cartItemsData = cartItems.map((itemId) => {
      const game = games.find((game) => game.id === itemId);
      return game;
    });
    navigate("/cart", { state: { cartItems: cartItemsData } });
  };

  return (
    <>
      <div className={`app ${theme}`}>
        <ThemeContext.Provider value={theme}>
          <Header titulo="Steamcito" />
          <div className="game-list-container">
            <div className="search-container">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a game"
                className="search-input"
              />
              <button onClick={handleClearSearch} className="clearButton">
                Limpiar
              </button>
              <button onClick={handleGoCart} className="cartButton">
                Comprar
              </button>
              <button type="button">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Página principal
                </Link>
              </button>
            </div>

            {noGamesFound ? ( 
              <p className="no-games-found">No games found with that name</p>
            ) : (
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
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <ToggleButton toggleTheme={toggleTheme} />
        </ThemeContext.Provider>
      </div>
      <Footer />
    </>
  );
};

export default Store;
