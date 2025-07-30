import React from 'react';
import './AnniversaryWelcome.css';

// Importe sua imagem diretamente da pasta 'assets'
import imagemDeFundo from './imagehero.jpg';

const AnniversaryWelcome = () => {
  return (
    // A imagem é aplicada aqui através do atributo 'style'
    <div className="hero-container" style={{ backgroundImage: `url(${imagemDeFundo})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Feliz 1 Ano de Namoro!</h1>
        <p className="hero-subtitle">Vamos relembrar esse ano inteiro que passamos juntos!</p>
        <div className="button-container">
          <a href="#nossas-memorias" className="hero-button">Ver linha do tempo</a>
        </div>
      </div>
    </div>
  );
};

export default AnniversaryWelcome;