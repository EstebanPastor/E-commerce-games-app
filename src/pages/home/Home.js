import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import StorePage from "../store_page/StorePage";

import "../../App.css";
function Home() {
  return (
    <>
      <div classname="App">
        <Header titulo="Steamcito" />
      </div>
      <StorePage />
      <Footer />
    </>
  );
}

export default Home;
