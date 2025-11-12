import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <i className="fab fa-linkedin-in"></i>,
      url: "https://www.linkedin.com/in/ishikabagchi",
      color: "#0A66C2",
    },
   
    {
      name: "GeeksforGeeks",
      // Font Awesome doesn’t have GFG or LeetCode icons — so we’ll use simple SVGs instead
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
          alt="GeeksforGeeks"
          style={{ width: "22px", height: "22px" }}
        />
      ),
      url: "https://www.geeksforgeeks.org/user/bagchii5tb4", // Add your GFG profile later
      color: "#2F8D46",
    },
     {
      name: "GitHub",
      icon: <i className="fab fa-github"></i>,
      url: "https://github.com/BUZZEDISHIKA",
      color: "#fff",
    },
    {
      name: "LeetCode",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          alt="LeetCode"
          style={{ width: "22px", height: "22px" }}
        />
      ),
       url: "https://github.com/BUZZEDISHIKA",
      color: "#2694cbff",
    },
      {
      name: "Instagram",
      icon: <i className="fab fa-instagram"></i>,
      url: "https://www.instagram.com/ishika.creates6",
      color: "#E1306C",
    },
    {
      name: "HackerRank",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png"
          alt="HackerRank"
          style={{ width: "22px", height: "22px" }}
        />
      ),
      url: "https://www.hackerrank.com/profile/bagchiishika",
      color: "#00EA64",
    },
  ];

  const handleNavClick = (section) => {
    const target = document.querySelector(section);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="social-links">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
              style={{ "--icon-color": item.color }}
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="footer-nav">
          <a href="#about" onClick={() => handleNavClick("#about")}>
            About
          </a>
          <a href="#education" onClick={() => handleNavClick("#education")}>
            Education
          </a>
          <a href="#skills" onClick={() => handleNavClick("#skills")}>
            Skills
          </a>
          <a href="#projects" onClick={() => handleNavClick("#projects")}>
            Projects
          </a>
          <a href="#contact" onClick={() => handleNavClick("#contact")}>
            Contact
          </a>
        </div>

        <p className="copyright">
          © {currentYear} Ishika Bagchi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
