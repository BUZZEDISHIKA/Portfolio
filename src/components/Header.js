// import React, { useState } from 'react';

// const Header = ({ theme, toggleTheme }) => {
//   const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

//   const toggleMobileNav = () => {
//     setIsMobileNavOpen(!isMobileNavOpen);
//   };

//   const closeMobileNav = () => {
//     setIsMobileNavOpen(false);
//   };

//   const handleNavClick = () => {
//     closeMobileNav();
//   };

//   return (
//     <header>
//       <nav>
//         <a href="#" className="logo">
//           <i className="fas fa-laptop-code"></i>
//           Ishika Bagchi
//         </a>
//         <button className="mobile-nav-toggle" onClick={toggleMobileNav}>
//           <i className={isMobileNavOpen ? "fas fa-times" : "fas fa-bars"}></i>
//         </button>
//         <ul className={`nav-links ${isMobileNavOpen ? 'active' : ''}`}>
//           <li><a href="#about" onClick={handleNavClick}>About</a></li>
//           <li><a href="#education" onClick={handleNavClick}>Education</a></li>
//           <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
//           <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
//           <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
//           <li>
//             <button className="theme-toggle" onClick={toggleTheme}>
//               <span style={{ transform: theme === 'light' ? 'translateX(0)' : 'translateX(30px)' }}></span>
//               <i className="fas fa-sun" style={{ opacity: theme === 'light' ? 0 : 1 }}></i>
//               <i className="fas fa-moon" style={{ opacity: theme === 'light' ? 1 : 0 }}></i>
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import React, { useState, useEffect } from "react";
import { Code2, Menu, X } from "lucide-react"; // sleek premium icons

const Header = ({ theme, toggleTheme }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [animateLogo, setAnimateLogo] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setTimeout(() => setAnimateLogo(true), 300);
  }, []);

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);
  const closeMobileNav = () => setIsMobileNavOpen(false);
  const handleNavClick = () => closeMobileNav();

  return (
    <header>
      <nav>
        {/* Animated Logo */}
        <a href="#" className={`logo ${animateLogo ? "show" : ""}`}>
          <span className="name-text">Ishika&nbsp;Bagchi</span>
          <Code2 className="dev-icon" />
        </a>

        {/* Mobile Toggle */}
        <button className="mobile-nav-toggle" onClick={toggleMobileNav}>
          {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Nav Links */}
        <ul className={`nav-links ${isMobileNavOpen ? "active" : ""}`}>
          <li><a href="#about" onClick={handleNavClick}>About</a></li>
          <li><a href="#education" onClick={handleNavClick}>Education</a></li>
          <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
          <li>
            <button className="theme-toggle" onClick={toggleTheme}>
              <span
                style={{
                  transform:
                    theme === "light" ? "translateX(0)" : "translateX(30px)",
                }}
              ></span>
              <i
                className="fas fa-sun"
                style={{ opacity: theme === "light" ? 0 : 1 }}
              ></i>
              <i
                className="fas fa-moon"
                style={{ opacity: theme === "light" ? 1 : 0 }}
              ></i>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;





