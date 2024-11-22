import React from "react";
import "../styles/Portfolio.css";

const projetos = [
  {
    nome: "Projeto 1",
    descricao: "Descrição do projeto 1.",
    link: "https://projeto1.com",
    imagem: "/assets/images/projeto1.png",
  },
  {
    nome: "Projeto 2",
    descricao: "Descrição do projeto 2.",
    link: "https://projeto2.com",
    imagem: "/assets/images/projeto2.png",
  },
];

function Portfolio() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <h1>Portfólio</h1>
      </header>
      <main>
        <section className="intro">
          <h2>Olá, eu sou Mateus</h2>
          <p>Desenvolvedor Front-End</p>
        </section>
        <section className="projects">
          {projetos.map((projeto, index) => (
            <div key={index} className="project-card">
              <img src={projeto.imagem} alt={projeto.nome} />
              <h3>{projeto.nome}</h3>
              <p>{projeto.descricao}</p>
              <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                Ver Projeto
              </a>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
