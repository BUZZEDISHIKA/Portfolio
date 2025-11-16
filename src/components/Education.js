import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
          <p>My academic journey and achievements</p>
        </div>
        <div className="education-container">
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="education-card">
              {/* Education Header with Expand Button */}
              <div 
                className="education-header"
                onClick={() => toggleExpand(index)}
              >
                <div className="education-header-content">
                  <div className="education-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="education-title">
                    <h3>{edu.degree}</h3>
                    <p>{edu.institution}</p>
                  </div>
                </div>
                <button 
                  className={`education-expand-btn ${expandedCard === index ? 'expanded' : ''}`}
                  aria-label={expandedCard === index ? "Collapse details" : "Expand details"}
                >
                  <i className={`fas ${expandedCard === index ? 'fa-minus' : 'fa-plus'}`}></i>
                </button>
              </div>

              {/* Education Image */}
              <div className="education-img">
                <img src={edu.image} alt={edu.degree} />
              </div>

              {/* Education Details - Expandable Section */}
              <div className={`education-details ${expandedCard === index ? 'expanded' : ''}`}>
                <div className="education-content">
                  <h3>{edu.degree}</h3>
                  <p>{edu.institution}</p>
                  <p>{edu.university || edu.board}</p>
                  <p className="grade">{edu.grade}</p>
                  <p>{edu.period}</p>
                  
                  {/* Additional Education Info */}
                  <div className="education-info">
                    {edu.duration && (
                      <div className="education-info-item">
                        <i className="far fa-clock"></i>
                        <span>{edu.duration}</span>
                      </div>
                    )}
                    {edu.location && (
                      <div className="education-info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{edu.location}</span>
                      </div>
                    )}
                    {edu.field && (
                      <div className="education-info-item">
                        <i className="fas fa-book"></i>
                        <span>{edu.field}</span>
                      </div>
                    )}
                  </div>

                  {/* Education Description */}
                  {edu.description && (
                    <div className="education-description">
                      <h4>About the Program</h4>
                      <p>{edu.description}</p>
                    </div>
                  )}

                  {/* Key Achievements */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="education-achievements">
                      <h4>Key Achievements</h4>
                      <ul>
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Relevant Courses */}
                  {edu.courses && edu.courses.length > 0 && (
                    <div className="education-achievements">
                      <h4>Relevant Courses</h4>
                      <ul>
                        {edu.courses.map((course, idx) => (
                          <li key={idx}>{course}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Animation Shapes */}
      <div className="shape shape-education-1"></div>
      <div className="shape shape-education-2"></div>
      <div className="shape shape-education-3"></div>
      <div className="shape shape-education-4"></div>
    </section>
  );
};

export default Education;