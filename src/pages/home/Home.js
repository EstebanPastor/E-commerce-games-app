import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import StorePage from "../store_page/StorePage";
import ThemeContext from "../../context/ThemeContext";
import { useState } from "react";
import ToggleButton from "../../components/toggleButon/ToggleButton";
import "../../App.css";

function Home() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Header titulo="Steamcito" />
        <div className={`app ${theme}`}>
          <ToggleButton toggleTheme={toggleTheme} />
          <StorePage />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default Home;
