import React, { useState } from 'react';
import './About.css';

const levelsContent = {
  1: "¡Hola! Soy Gustavo, un desarrollador web enfocado en crear experiencias interactivas y visuales épicas.",
  2: "Nivel 2: Me especializo en animaciones y diseño responsive, dándole vida a cada proyecto.",
  3: "Nivel 3: Soy experto en tecnologías modernas como React, GSAP, y herramientas de desarrollo.",
  4: "Nivel 4: Mi objetivo es siempre superar expectativas, transformando ideas en productos digitales únicos."
};

const AboutMe = () => {
  const [selectedLevel, setSelectedLevel] = useState(1);

  return (
    <section className="about-me">
      <div className="background-blur" aria-hidden="true"></div>
      <h1 className="title">About Me</h1>
      
      <aside className="left-section">
        {[1, 2, 3, 4].map(level => (
          <button
            key={level}
            className={`level-card ${selectedLevel === level ? 'active' : ''}`}
            onClick={() => setSelectedLevel(level)}
            aria-pressed={selectedLevel === level}
          >
            Nivel {level}
          </button>
        ))}
      </aside>
      
      <article className="right-section">
        <p className="description">{levelsContent[selectedLevel]}</p>
      </article>
    </section>
  );
};

export default AboutMe;
