import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "POSTVISUAL",
    difficulty: "Fácil",
    developmentTime: "2 semanas",
    tech: ["React", "JavaScript", "CSS"],
    image: "/images/postvisual.png",
  },
  {
    id: 2,
    title: "Otro Proyecto",
    difficulty: "Intermedio",
    developmentTime: "3 semanas",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/otherproject.png",
  },
  {
    id: 3,
    title: "Proyecto Avanzado",
    difficulty: "Difícil",
    developmentTime: "1 mes",
    tech: ["Python", "Django", "PostgreSQL"],
    image: "/images/advancedproject.png",
  },
  {
    id: 4,
    title: "Proyecto 4",
    difficulty: "Difícil",
    developmentTime: "1 mes",
    tech: ["Python", "Django", "PostgreSQL"],
    image: "/images/advancedproject.png",
  },
  // Agrega más proyectos si necesitas
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const getProjectClass = (index) => {
    const position = (index - currentIndex + projects.length) % projects.length;
    if (position === 0) return "project-card center";
    if (position === 1) return "project-card right";
    if (position === projects.length - 1) return "project-card left";
    return "project-card hidden";
  };

  return (
    <section className="projects">
      <h2 className="projects-title">Mis Proyectos</h2>
      <div className="project-container">
        <button
          className="arrow left"
          aria-label="Proyecto anterior"
          onClick={prevProject}
        >
          ◀
        </button>

        {projects.map((project, index) => {
          const { id, title, image, difficulty, developmentTime, tech } = project;
          return (
            <div key={id} className={getProjectClass(index)}>
              <h3 className="project-title">{title}</h3>
              <img
                src={image}
                alt={`Imagen de ${title}`}
                className="project-image"
                loading="lazy" // Mejora del rendimiento
              />
              <p className="project-info">
                <strong>Dificultad:</strong> {difficulty}
              </p>
              <p className="project-info">
                <strong>Tiempo de desarrollo:</strong> {developmentTime}
              </p>
              <p className="project-info">
                <strong>Lenguajes de desarrollo:</strong> {tech.join(", ")}
              </p>
              <button className="play-button">JUGAR</button>
            </div>
          );
        })}

        <button
          className="arrow right"
          aria-label="Siguiente proyecto"
          onClick={nextProject}
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default Projects;
