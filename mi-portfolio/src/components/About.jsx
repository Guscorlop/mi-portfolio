import React, { useState } from 'react';
import './About.css';

const AboutMe = () => {
  const [selectedLevel, setSelectedLevel] = useState(1);

  // Contenido para cada nivel
  const levelsContent = {
    1: "¡Hola! Soy Gustavo, un desarrollador web enfocado en crear experiencias interactivas y visuales épicas.",
    2: "Nivel 2: Me especializo en animaciones y diseño responsive, dándole vida a cada proyecto.",
    3: "Nivel 3: Soy experto en tecnologías modernas como React, GSAP, y herramientas de desarrollo.",
    4: "Nivel 4: Mi objetivo es siempre superar expectativas, transformando ideas en productos digitales únicos."
  };

  return (
    <div className="about-me">
      <div className="background-blur"></div> {/* Fondo desenfocado */}
      <h1 className="title">About Me</h1> {/* Título centrado */}
      
      <div className="left-section">
        {[1, 2, 3, 4].map(level => (
          <div
            key={level}
            className={`level-card ${selectedLevel === level ? 'active' : ''}`}
            onClick={() => setSelectedLevel(level)}
          >
            Nivel {level}
          </div>
        ))}
      </div>
      
      <div className="right-section">
        <div className="description">
          <p>{levelsContent[selectedLevel]}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
