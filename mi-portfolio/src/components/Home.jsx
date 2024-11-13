import { useEffect, useState } from 'react';
import gsap from 'gsap';
import githubIcon from '../assets/img/githubIcon.svg';
import tiktokIcon from '../assets/img/tiktokIcon.svg';
import linkedinIcon from '../assets/img/linkedinIcon.svg';
import './Home.css';

const Home = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    // Animación de la información personal
    gsap.fromTo(".info", 
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
    );

    // Animación de los botones
    gsap.fromTo(".menu-button", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power4.out", stagger: 0.2 }
    );
  }, []);

  // Función para manejar las teclas de flechas
  const handleKeyDown = (event) => {
    // Prevenir el scroll de la página
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
    }

    // Cambiar la selección del menú con las flechas
    if (event.key === 'ArrowDown') {
      setSelected((prev) => (prev + 1) % 6); 
    } else if (event.key === 'ArrowUp') {
      setSelected((prev) => (prev - 1 + 6) % 6); 
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="home-container">
      {/* Información personal */}
      <div className="info">
        <h1>Hello, I'm Gustavo Correa Lopez.</h1>
        <p><span>Multimedia Engineer</span> and <span>Front End Developer</span> with focus on web animations and responsive design</p>
        <div className="social-icons">
          <a href="https://github.com/Guscorlop" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.tiktok.com/Guscorlop" target="_blank" rel="noopener noreferrer">
            <img src={tiktokIcon} alt="TikTok" />
          </a>
          <a href="https://www.linkedin.com/in/gustavolopez17" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>

      {/* Menú */}
      <div className="menu">
        <button className={`menu-button ${selected === 0 ? 'selected' : ''}`}>Inicio</button>
        <button className={`menu-button ${selected === 1 ? 'selected' : ''}`}>About</button>
        <button className={`menu-button ${selected === 2 ? 'selected' : ''}`}>Skills</button>
        <button className={`menu-button ${selected === 3 ? 'selected' : ''}`}>Project</button>
        <button className={`menu-button ${selected === 4 ? 'selected' : ''}`}>Download CV</button>
        <button className={`menu-button ${selected === 5 ? 'selected' : ''}`}>Contact</button>
      </div>
    </div>
  );
};

export default Home;
