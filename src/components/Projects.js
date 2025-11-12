import React, { useState, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const [pausedProject, setPausedProject] = useState(null);
  const scrollContainerRef = useRef(null);

  const handleProjectClick = (project, index) => {
    // Toggle pause state for clicked project
    if (pausedProject === index) {
      setPausedProject(null);
    } else {
      setPausedProject(index);
    }
    
    // Optional: Add actual project link handling here
    // window.open(project.link, '_blank');
  };

  const handleOutsideClick = (e) => {
    // If clicking outside project cards, resume all animations
    if (!e.target.closest('.project-card-animated')) {
      setPausedProject(null);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="projects-section" onClick={handleOutsideClick}>
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
          <p>A selection of my recent work and personal projects</p>
        </div>
        
        <div 
          className="projects-scroll-container"
          ref={scrollContainerRef}
        >
          {portfolioData.projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card-animated ${pausedProject === index ? 'animation-paused' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                handleProjectClick(project, index);
              }}
            >
              <div className="project-img-animated">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay-animated">
                  <div className="overlay-buttons">
                    <a 
                      href={project.link || "#"} 
                      className="overlay-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="overlay-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fab fa-github"></i> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-info-animated">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags-animated">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
                <a 
                  href={project.link || "#"} 
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="projects-nav">
          <button className="nav-arrow" onClick={scrollLeft}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="nav-arrow" onClick={scrollRight}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* Background Shapes */}
      <div className="background-animation">
        <div className="shape shape-project-1"></div>
        <div className="shape shape-project-2"></div>
        <div className="shape shape-project-3"></div>
        <div className="shape shape-project-4"></div>
      </div>
    </section>
  );
};

export default Projects;