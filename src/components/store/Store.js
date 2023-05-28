import { useState, useEffect } from "react";
import store from "./store.css"

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page_size=15`
        );
        const data = await response.json();
        setGames(data.results);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="game-list-container">
    <h1 className="game-list-title">Game List</h1>
    <ul className="game-list">
      {games.map(game => (
        <li key={game.id} className="game-list-item">
            <img src={game.background_image} alt={game.name} className="game-list-item-image" />
       
          <div className="game-list-item-details">
            <h3 className="game-list-item-title">{game.name}</h3>
            <p className="game-list-item-platforms">
              Platforms: {game.platforms.map(platform => platform.platform.name).join(', ')}
            </p>
            
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default GameList;



// const [game, setGame] = useState(null);

// useEffect(() => {
//   const fetchGame = async () => {
//     try {
//       const response = await fetch(
//         `https://api.rawg.io/api/games/1?key=${process.env.REACT_APP_API_KEY}&page_size=15`
//       );
//       const data = await response.json();
//       setGame(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   fetchGame();
// }, []);

// return (
//   <div className="game-page">
    
//     {game ? (
//       <div className="game-details">
//         <h1>{game.name}</h1>
//         <img src={game.background_image} alt={game.name} />
//         <p>{game.description_raw}</p>
//         <p>Release Date: {game.released}</p>
//         <p>Metacritic Score: {game.metacritic}</p>
//       </div>
//     ) : (
//       <p>Loading...</p>
//     )}
//   </div>
// );