import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const renderSkillItems = (skills) => {
    return skills.map((skill, index) => (
      <div key={index} className="skill-item">
        <div className="skill-icon">
          <i className={skill.icon}></i>
          {skill.name === "C++" && <i className="fas fa-plus plus-icon"></i>}
        </div>
        <div className="skill-info">
          <div className="skill-name">
            <span>{skill.name}</span>
            <span>{skill.percentage}%</span>
          </div>
          <div className="skill-bar">
            <div 
              className="skill-progress" 
              style={{ width: `${skill.percentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>The technologies and tools I use to bring ideas to life</p>
        </div>
        
        <div className="skills-filters">
          <div 
            className={`skill-filter ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            All Skills
          </div>
          <div 
            className={`skill-filter ${activeFilter === 'programming' ? 'active' : ''}`}
            onClick={() => handleFilterClick('programming')}
          >
            Programming Languages
          </div>
          <div 
            className={`skill-filter ${activeFilter === 'web' ? 'active' : ''}`}
            onClick={() => handleFilterClick('web')}
          >
            Web Technologies
          </div>
          <div 
            className={`skill-filter ${activeFilter === 'database' ? 'active' : ''}`}
            onClick={() => handleFilterClick('database')}
          >
            Database & Tools
          </div>
        </div>
        
        <div className="skills-container">
          {(activeFilter === 'all' || activeFilter === 'programming') && (
            <div className="skill-category" data-category="programming">
              <h3>Programming Languages</h3>
              {renderSkillItems(portfolioData.skills.programming)}
            </div>
          )}
          
          {(activeFilter === 'all' || activeFilter === 'web') && (
            <div className="skill-category" data-category="web">
              <h3>Web Technologies</h3>
              {renderSkillItems(portfolioData.skills.web)}
            </div>
          )}
          
          {(activeFilter === 'all' || activeFilter === 'database') && (
            <div className="skill-category" data-category="database">
              <h3>Database & Tools</h3>
              {renderSkillItems(portfolioData.skills.database)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;