import { Component } from "react";
import "./App.css"
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Search } from "./components/Search/Search";
function App() {
  return (
    <>
      <div classname="App">
        <Header
          titulo='Steamcito'
        />
      </div>
      <Footer />

    </>
  );
}


export default App;
