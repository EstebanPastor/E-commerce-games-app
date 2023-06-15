import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import store from "./Store.css";

const GameList = () => {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url=`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page_size=10`
        const response = await fetch(
        url
        );
        const data = await response.json();
        setGames(data.results);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredResults = games.filter((game) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGames(filteredResults);
  }, [searchTerm, games]);

  const handleSearch = () => {
    const filteredResults = games.filter((game) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGames(filteredResults);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setFilteredGames(games);
  };

  return (
    <>
      <div className="game-list-container">
        <div className="search-container">
          <Link to={"/"} className="home-btn">
            Página principal
          </Link>
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
        </div>
        <ul className="game-list">
          {filteredGames.map((game) => (
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
      </div>
    </>
  );
};

export default GameList;
