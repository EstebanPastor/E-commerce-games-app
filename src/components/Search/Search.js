import { Link } from "react-router-dom";
import search from "./Search.css";

export const Search = () => {
  return (
    <>
      {" "}
      <div className="home">
        <Link to="/">Return home</Link>
      </div>
      <div className="navbar">
        <div className="navbar-start">
          <input type="text" placeholder="Search a game..." className="search-input" />
          <button className="search-button">Search</button>
        </div>
      </div>
    </>
  );
};

export default Search;
