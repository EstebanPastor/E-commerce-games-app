import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";


const ToggleButton = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? <FiMoon /> : <FiSun />}
    </button>
  );
};

export default ToggleButton;
