import React, { useRef, useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero = () => {
  const texts = [
    "Hello, I'm Ishika Bagchi",
    "A Passionate Coder ",
    "This is my Portfolio",
    "Build by React.js",
    "Tailwind Css",
    "HTML",
    "Thank You For Visiting!"
  ];

  // Slow typing speed
  const displayText = useTypewriter(texts, 150, 150);
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [prevLength, setPrevLength] = useState(0);

  const handleDownloadCV = (e) => {
    e.preventDefault();
    alert('Downloading CV...');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (textRef.current) observer.observe(textRef.current);
    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);


  return (
    <section className="hero">
      <div className="container hero-content">
        <h1
          id="typewriter"
          ref={textRef}
          className={`typewriter-text ${isVisible ? 'visible' : 'hidden'}`}
        >
          {displayText}
          <span className={`typewriter-cursor ${isVisible ? 'visible' : 'hidden'}`}>|</span>
        </h1>

        <p>I create beautiful, functional digital experiences with cutting-edge technology</p>

        <div className="hero-badges-container">
  <div className="hero-badges-marquee">
    <div className="hero-badges-track">
      <span className="badge">Coder</span>
      <span className="badge">C & C++</span>
      <span className="badge">PYTHON</span>
      <span className="badge">React.Js</span>
      {/* Duplicate for seamless loop */}
      <span className="badge">Coder</span>
      <span className="badge">C & C++</span>
      <span className="badge">PYTHON</span>
      <span className="badge">React.Js</span>
    </div>
  </div>
</div>


        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          <a href="#" className="btn btn-secondary" onClick={handleDownloadCV}>Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

