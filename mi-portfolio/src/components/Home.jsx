import { useEffect, useState } from 'react';
import gsap from 'gsap';
import githubIcon from '../assets/icon/githubIcon.svg';
import tiktokIcon from '../assets/icon/tiktokIcon.svg';
import linkedinIcon from '../assets/icon/linkedinIcon.svg';
import './Home.css';

const Home = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      '.home__info, .home__menu-button',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out', stagger: 0.2 }
    );
  }, []);

  const handleKeyDown = (event) => {
    if (['ArrowUp', 'ArrowDown'].includes(event.key)) event.preventDefault();
    if (event.key === 'ArrowDown') setSelected((prev) => (prev + 1) % 4);
    if (event.key === 'ArrowUp') setSelected((prev) => (prev - 1 + 4) % 4);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="home">
      <header className="home__info">
        <h1>Hi, I am Gustavo Correa Lopez</h1>
        <p>
          <span>Multimedia Engineer</span> and <span>Front-End Developer</span> focused on web animations and responsive design
        </p>
        <nav className="home__social-icons">
          <a href="https://github.com/Guscorlop" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.tiktok.com/Guscorlop" target="_blank" rel="noopener noreferrer" aria-label="TikTok Profile">
            <img src={tiktokIcon} alt="TikTok" />
          </a>
          <a href="https://www.linkedin.com/in/gustavolopez17" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </nav>
      </header>

      <nav className="home__menu">
        {['About', 'Projects', 'Download CV', 'Contact'].map((item, index) => (
          <button
            key={item}
            className={`home__menu-button ${selected === index ? 'home__menu-button--selected' : ''}`}
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Home;
