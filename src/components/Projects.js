import React, { useState, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [expandedSmallProject, setExpandedSmallProject] = useState(null);
  const scrollContainerRef = useRef(null);

  const handleProjectToggle = (index) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  const handleSmallProjectToggle = (index) => {
    if (expandedSmallProject === index) {
      setExpandedSmallProject(null);
    } else {
      setExpandedSmallProject(index);
    }
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.project-card-animated') && !e.target.closest('.small-project-card')) {
      setExpandedProject(null);
      setExpandedSmallProject(null);
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
        {/* Main Projects Section */}
        <div className="section-title">
          <h2>Featured Projects</h2>
          <p>A selection of my recent work and personal projects</p>
        </div>
        
        <div 
          className="projects-scroll-container"
          ref={scrollContainerRef}
        >
          {portfolioData.projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card-animated ${expandedProject === index ? 'project-expanded' : ''}`}
            >
              {/* Project Header with Toggle Button */}
              <div className="project-header">
                <h3>{project.title}</h3>
                <button 
                  className="project-toggle-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProjectToggle(index);
                  }}
                >
                  <i className={`fas ${expandedProject === index ? 'fa-minus' : 'fa-plus'}`}></i>
                </button>
              </div>

              {/* Project Image */}
              <div className="project-img-animated">
                <img src={project.image} alt={project.title} />
                
                {/* NO LIVE DEMO BUTTON HERE */}
                <div className="project-overlay-animated">
                  <div className="overlay-buttons">
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
              
              {/* Project Details */}
              <div className={`project-details ${expandedProject === index ? 'expanded' : ''}`}>
                <div className="project-info-animated">
                  <p>{project.description}</p>
                  
                  {project.features && (
                    <div className="project-features">
                      <h4>Key Features:</h4>
                      <ul>
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="project-tags-animated">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex}>{tag}</span>
                    ))}
                  </div>

                  {/* REMOVE VIEW LIVE DEMO FROM MAIN PROJECTS */}
                  <div className="project-links">
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="project-link github-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fab fa-github"></i> View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small Projects Section */}
        <div className="small-section-title">
          <h2>Small Projects & Experiments</h2>
          <p>Quick projects, experiments, and learning exercises</p>
        </div>

        <div className="small-projects-container">
          {portfolioData.smallProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`small-project-card ${expandedSmallProject === index ? 'small-project-expanded' : ''}`}
            >
              {/* Small Project Header */}
              <div className="small-project-header">
                <h3>{project.title}</h3>
                <button 
                  className="small-project-toggle-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSmallProjectToggle(index);
                  }}
                >
                  <i className={`fas ${expandedSmallProject === index ? 'fa-minus' : 'fa-plus'}`}></i>
                </button>
              </div>

              {/* Small Project Details */}
              <div className={`small-project-details ${expandedSmallProject === index ? 'expanded' : ''}`}>
                <div className="small-project-info">
                  <p>{project.description}</p>
                  
                  {project.features && (
                    <div className="small-project-features">
                      <h4>Features:</h4>
                      <ul>
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="small-project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex}>{tag}</span>
                    ))}
                  </div>
                  
                  <div className="small-project-links">
                    {project.link && project.link !== "#" && (
                      <a 
                        href={project.link} 
                        className="small-project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fas fa-external-link-alt"></i> Live Demo
                      </a>
                    )}
                    {project.github && project.github !== "#" && (
                      <a 
                        href={project.github} 
                        className="small-project-link github-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fab fa-github"></i> View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
