import { useState, useEffect } from "react";
import Search from "../search/Search";
import store from "./store.css";
import { Link } from "react-router-dom";

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page_size=28`
        );
        const data = await response.json();
        setGames(data.results);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="game-list-container">
        <Search />
        <ul className="game-list">
          {games.map((game) => (
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
