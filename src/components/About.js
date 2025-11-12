import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Get to know more about my background, skills, and passion for technology</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Academic Excellence in Computer Science</h3>
            <p>
              I am a Computer Science Honours student from T.D.B College under Kazi Nazrul University, 
              with an overall CGPA of 8.54. Throughout my academic journey, I consistently excelled — 
              achieving a perfect 10 CGPA in the first semester and securing the top rank in my college.
            </p>
            <p>
              My expertise spans full-stack development with technologies like React, Node.js, and MongoDB. 
              I am passionate about solving real-world problems through innovative software solutions 
              and continuously expanding my technical skills to stay ahead in the evolving tech landscape.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <h4>10+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h4>15+</h4>
                <p>Technologies Mastered</p>
              </div>
            </div>
          </div>

          <div className="profile-img">
            <img src={`${process.env.PUBLIC_URL}/ishika.jpg`} alt="Ishika Bagchi" />


            {/* <img src="/ishika.jpg" alt="Ishika Bagchi" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
