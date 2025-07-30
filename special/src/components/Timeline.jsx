import React from 'react';
import './Timeline.css';

// 1. IMPORTE AQUI AS 6 FOTOS DAS SUAS MEMÓRIAS
import memoriaFoto1 from '../assets/memoria1.jpg';
import memoriaFoto2 from '../assets/memoria2.jpg';
import memoriaFoto3 from '../assets/memoria3.jpg';
import memoriaFoto4 from '../assets/memoria4.jpg';
import memoriaFoto5 from '../assets/memoria5.jpg';
import memoriaFoto6 from '../assets/memoria6.jpg';


// 2. PERSONALIZE SUAS MEMÓRIAS AQUI
const timelineData = [
  {
    date: '4 de Setembro, 2024',
    description: 'Nosso primeiro beijo. A sensação foi que ficamos horas nos olhando até termos coragem.',
    image: memoriaFoto1,
  },
  {
    date: '20 de Setembro, 2024',
    description: 'A primeira vez que saímos juntos. Uma mistura de sentimentos e expectativas. Senti saudades no mesmo instante que você foi embora.',
    image: memoriaFoto2,
  },
  {
    date: '5 de Novembro, 2024',
    description: 'Primeira vez que saímos com a minha família. Você foi muito bem! Provavelmente estava mais nervoso que você. KAKKAKAKAKAKAKAKAK',
    image: memoriaFoto3,
  },
  {
    date: '18 de Dezembro, 2024',
    description: 'Primeiro cinema juntos. Depois ainda teve um descanso na minha casa, pela primeira vez.',
    image: memoriaFoto4,
  },
  {
    date: '8 de Janeiro, 2025',
    description: 'Primeira vez que você foi em casa. Me marcou muito, e a sensação de ter você lá foi incrível.',
    image: memoriaFoto5,
  },
  {
    date: '9 de Maio, 2025',
    description: 'Dia das nossas alianças. Nunca vou esquecer de ver os seus olhinhos se enchendo quando você viu. O dia foi muito gostoso. Do almoço ateeee de noite',
    image: memoriaFoto6,
  }
];

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h2>Dias que mais me marcaram😁</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-content">
              <img src={item.image} alt={item.description} className="timeline-image" />
              <h3>{item.date}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;