import React from "react";
import { Link } from "react-router-dom";
import Cubos from "../assets/images/cubos1.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={Cubos} alt="Cubos" className="navbar-logo" />
        <h1 className="navbar-title">MatheusBProgrammer</h1>
      </div>
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/experiencia">Experiência</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}

export default Navbar;
