import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import Boneco from "../assets/images/boneco.png";
import Pacman from "../assets/images/pacman.png";
import Dinossauro from "../assets/images/dinossauro.png";
import BaseDinossauro from "../assets/images/base-dinossauro.png";
import { useSpring, animated } from "@react-spring/web";
function Home() {
  const springs = useSpring({
    from: { x: -200 },
    to: { x: 0 },
    config: {
      duration: 1000,
    },
  });

  return (
    <div className="home">
      <Navbar />
      <main className="home-content">
        <animated.div className="home-text" style={{ ...springs }}>
          <h2>
            <span className="label"> 👋 Olá, meu nome é</span>{" "}
            <span className="nome">Matheus Barreto</span>
          </h2>
          <p>Desenvolvedor FullStack</p>
          <Link to="/portfolio" className="cta-button">
            Conheça meus projetos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </animated.div>
        <div className="home-image-box">
          <img src={Boneco} alt="Boneco" className="boneco" />
          <img src={Pacman} alt="Pacman" className="pacman" />
          <div className="dinossauro-box">
            <img src={Dinossauro} alt="Dinossauro" className="dinossauro" />
            <img
              src={BaseDinossauro}
              alt="Dinossauro"
              className="base-dinossauro"
            />
          </div>
        </div>
      </main>
      <div className="contato">
        <div className="contato-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>{" "}
    </div>
  );
}

export default Home;
