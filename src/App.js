import React, { useState, useEffect } from 'react';
import './styles/App.css';

// Components
import WelcomeAnimation from './components/WelcomeAnimation';
import BackgroundAnimation from './components/BackgroundAnimation';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Custom Hooks
import { useTheme } from './hooks/useTheme';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000);

    const handleNavClick = (e) => {
      const link = e.target.closest('a'); // handles child clicks inside <a>
      if (!link) return;

      const href = link.getAttribute('href');

      // Only handle valid in-page links like "#about" or "#projects"
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }
      // Do nothing if href="#" or external link
    };

    document.addEventListener('click', handleNavClick);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleNavClick);
    };
  }, []);

  if (showWelcome) {
    return <WelcomeAnimation />;
  }

  return (
    <div className="App">
      <BackgroundAnimation />
      <CustomCursor />
      <ScrollToTop />
      
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
