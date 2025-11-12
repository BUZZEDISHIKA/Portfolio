import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const WelcomeAnimation = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Create twinkling stars
    const createTwinkles = () => {
      const welcomeAnimation = document.querySelector('.welcome-animation');
      if (!welcomeAnimation) return;

      for (let i = 0; i < 50; i++) {
        const twinkle = document.createElement('div');
        twinkle.classList.add('twinkle');
        twinkle.style.width = Math.random() * 5 + 2 + 'px';
        twinkle.style.height = twinkle.style.width;
        twinkle.style.left = Math.random() * 100 + '%';
        twinkle.style.top = Math.random() * 100 + '%';
        twinkle.style.animationDelay = Math.random() * 3 + 's';
        welcomeAnimation.appendChild(twinkle);
      }
    };

    createTwinkles();

    // Start loading bar
    setTimeout(() => {
      setLoadingComplete(true);
    }, 100);

    // Show greetings in sequence
    const greetingInterval = setInterval(() => {
      setCurrentGreeting(prev => (prev + 1) % portfolioData.greetings.length);
    }, 800);

    return () => clearInterval(greetingInterval);
  }, []);

  return (
    <div className="welcome-animation">
      <div className="welcome-text">
        {portfolioData.greetings[currentGreeting].text}
      </div>
      <div className="welcome-subtext">
        {portfolioData.greetings[currentGreeting].subtext}
      </div>
      <div 
        className="loading-bar" 
        style={{ width: loadingComplete ? '100%' : '0%' }}
      ></div>
    </div>
  );
};

export default WelcomeAnimation;