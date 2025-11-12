import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
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
              <div className="education-img">
                <img src={edu.image} alt={edu.degree} />
              </div>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
                <p>{edu.university || edu.board}</p>
                <p className="grade">{edu.grade}</p>
                <p>{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;