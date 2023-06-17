import { Link } from "react-router-dom";
import gtav from "../../assets/gta_v.jpg";
import tw3 from "../../assets/the_witcher_3.jpg";
import portal2 from "../../assets/portal_2.jpg";
import tomb_raider from "../../assets/tomb_raider_2013.pg.jpeg";
import csgo from "../../assets/cs_go.jpg";
import store from "./store.css";


const StorePage = () => {
  return (
    <div className="games-landing-container">
       <h3>¡Tenemos $100 para regalarte al momento de registrarte!</h3>
      <h1 className="games-landing-title">¡Bienvenido a Steamcito!</h1>
     
      <p className="title">
        Podés ver nuestro catalogo completo y comprar desde la página.
        Solo haz click aquí:
        <Link to="/store" className="game-card" style={{ textDecoration: 'none', color: 'black' }}>
          TIENDA
        </Link>
      </p>
      <div className="games-landing-cards">
        <div className="game-card">
          <img src={gtav} alt="gta-v" className="game-card-image" />
          <h3 className="game-card-title">Grand theft auto V</h3>
          <p className="game-card-description">
            Grand Theft Auto V es un juego de acción y aventuras que se juega
            desde una perspectiva en tercera o primera persona.
          </p>
          <Link to="/store" className="game-card-link" style={{ textDecoration: 'none', color: 'black' }}>
            ¡Juega ahora!
          </Link>
        </div>
        <div className="game-card">
          <img src={tw3} alt="the-withcer-3" className="game-card-image" />
          <h3 className="game-card-title">The witcher 3</h3>
          <p className="game-card-description">
            The Witcher 3: Wild Hunt es un juego de rol de acción con
            perspectiva en tercera persona. Los jugadores controlan a Geralt de
            Rivia, un asesino de monstruos conocido como Witcher.
          </p>
          <Link to="/store" className="game-card-link" style={{ textDecoration: 'none', color: 'black' }}>
            ¡Juega ahora!
          </Link>
        </div>
        <div className="game-card">
          <img src={portal2} alt="portal-2" className="game-card-image" />
          <h3 className="game-card-title">Portal 2</h3>
          <p className="game-card-description">
            Portal 2 es un juego de rompecabezas con perspectiva en primera
            persona. El jugador asume el papel de Chell en la campaña para un
            jugador, como uno de los dos robots, Atlas y P-Body, en la campaña
            cooperativa, o como un icono humanoide simplista en los rompecabezas
            desarrollados por la comunidad.
          </p>
          <Link to="/store" className="game-card-link" style={{ textDecoration: 'none', color: 'black' }}>
            ¡Juega ahora!
          </Link>
        </div>
        <div className="game-card">
          <img
            src={tomb_raider}
            alt="tomb-raider-2013"
            className="game-card-image"
          />
          <h3 className="game-card-title">Tomb raider 2013</h3>
          <p className="game-card-description">
            Tomb Raider está ambientado en Yamatai, una isla de donde proviene
            Lara, que no ha sido probada y aún no es la exploradora curtida en
            batalla.
          </p>
          <Link to="/store" className="game-card-link" style={{ textDecoration: 'none', color: 'black' }}>
            ¡Juega ahora!
          </Link>
        </div>
        <div className="game-card">
          <img src={csgo} alt="csgo" className="game-card-image" />
          <h3 className="game-card-title">Counter Strike Global Offensive</h3>
          <p className="game-card-description">
            Counter-Strike: Global Offensive (CS:GO) es un FPS táctico de 5
            contra 5 basado en rondas con una configuración de atacantes contra
            defensores y sin reapariciones, lo que significa que si un jugador
            es eliminado, no reaparecerá hasta la siguiente ronda.
          </p>
          <Link to="/store" className="game-card-link" style={{ textDecoration: 'none', color: 'black' }}>
            ¡Juega ahora!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StorePage;
