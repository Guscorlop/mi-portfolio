import React, { useState } from 'react';
import './Projects.css'; // Asegúrate de tener tu CSS bien estructurado

const projects = [
  {
    id: 1,
    title: "Proyecto 1",
    description: "Descripción breve del proyecto 1.",
    image: "../assets/img/Fondo-1.avif", // Imagen del proyecto
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "Descripción breve del proyecto 2.",
    image: "../assets/img/Fondo-1.avif",
    tech: ["React", "Node.js"],
  },
  {
    id: 3,
    title: "Proyecto 3",
    description: "Descripción breve del proyecto 3.",
    image: "../assets/img/Fondo-1.avif",
    tech: ["Python", "Django"],
  },
  // Añadir más proyectos según sea necesario
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const renderTechIcons = (tech) => {
    return tech.map((item, index) => (
      <img key={index} src={`/icons/${item.toLowerCase()}.png`} alt={item} className="tech-icon" />
    ));
  };

  return (
    <section className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="project-wrapper">
        <div className="project-card">
          <div className="project-header">
            <h3>{projects[currentIndex].title}</h3>
          </div>
          <div className="project-image">
            <img src={projects[currentIndex].image} alt={projects[currentIndex].title} />
          </div>
          <div className="project-description">
            <p>{projects[currentIndex].description}</p>
          </div>
          <div className="tech-icons">
            {renderTechIcons(projects[currentIndex].tech)}
          </div>
        </div>
        <div className="pagination">
          <button className="arrow left" onClick={prevProject}>←</button>
          <button className="arrow right" onClick={nextProject}>→</button>
        </div>
      </div>
      <div className="blurred-projects">
        {/* Aquí podrías agregar más proyectos u otros elementos que se muestren en el efecto blur */}
      </div>
    </section>
  );
};

export default Projects;
