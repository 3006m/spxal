import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Netflix_new.css";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";

// Import images
import image6 from "../assets/Image6.jpeg";
import image7 from "../assets/Image7.jpg";
import image8 from "../assets/Image8.png";
import image9 from "../assets/Image9.jpg";
import image10 from "../assets/Image10.jpg";
import image11 from "../assets/Image11.jpg";
import image12 from "../assets/Image12.jpg";
import image13 from "../assets/Image13.jpg";
import videonois from "../assets/videonois.mp4";

const categories = [
  {
    title: "Nossos Momentos",
    items: [
      { image: image6, title: "Juntinhos - Fim do primeiro ano juntos" },
      { image: image7, title: "Beijinho - Casa da sua sogra²" },
      { image: image8, title: "Um olhar apaixonado!" },
      { image: image9, title: "O início semi-oficial😁😁" }
    ]
  },
  {
    title: "Mais momentos🥰",
    items: [
      { image: image10, title: "Uma princesa se formando" },
      { image: image11, title: "Uma gata em casa😊" },
      { image: image12, title: "Pizza com minha preta🥰" },
      { image: image13, title: "😍😍" }
    ]
  }
];

function Netflix() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="netflix-app">
      
      
      {/* Hero Banner */}
      <div className="hero-banner">
        <video autoPlay muted loop className="hero-video">
          <source src={videonois} type="video/mp4" />
        </video>
        <div className="hero-overlay">
          <h1>Nossa Netflix🎥</h1>
          <p>Nosso tempo juntos poderia ser um filme! (ou vários)😊</p>
            <div className="hero-buttons">
              <button className="play-button">▶ Assistir</button>
              <button className="info-button">+ Minha Lista</button>
              <Link to="/" className="home-button">🏠 Home</Link>
            </div>
        </div>
      </div>

      {/* Content Rows */}
      <div className="content">
        {categories.map((category, index) => (
          <div key={index} className="content-row">
            <h2 className="row-title">{category.title}</h2>
            <div className="row-container">
              {category.items.map((item, i) => (
                <div key={i} className="content-card" onClick={() => handleCardClick(item)}>
                  <img src={item.image} alt={item.title} />
                  <div className="card-overlay">
                    <button className="play-icon">▶</button>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p>10/04/2025</p>
      <Footer />

      {/* Modal de Reprodução */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>×</button>
            <h3>{selectedItem?.title}</h3>
            <img src={selectedItem?.image} alt={selectedItem?.title} />
            <div className="modal-actions">
              <button className="play-button">▶ Assistir</button>
              <button className="info-button">+ Minha Lista</button>
              <Link to="/" className="home-button">🏠 Home</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Netflix;
