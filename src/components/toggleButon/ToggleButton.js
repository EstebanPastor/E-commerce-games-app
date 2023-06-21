import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import "./ToggleButton.css";


const ToggleButton = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="my-button">
      {theme === "light" ? <FiMoon /> : <FiSun />}
    </button>
  );
};

export default ToggleButton;
