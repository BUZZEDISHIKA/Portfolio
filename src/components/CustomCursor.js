import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia("(min-width: 769px)").matches);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    if (isDesktop) {
      const cursor = document.querySelector('.cursor');
      const cursorFollower = document.querySelector('.cursor-follower');
      
      const handleMouseMove = (e) => {
        if (cursor) {
          cursor.style.left = e.clientX + 'px';
          cursor.style.top = e.clientY + 'px';
        }
        
        requestAnimationFrame(() => {
          if (cursorFollower) {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
          }
        });
      };

      const handleMouseEnter = () => {
        cursor?.classList.add('hover');
        cursorFollower?.classList.add('hover');
      };

      const handleMouseLeave = () => {
        cursor?.classList.remove('hover');
        cursorFollower?.classList.remove('hover');
      };

      document.addEventListener('mousemove', handleMouseMove);
      
      const hoverElements = document.querySelectorAll('a, button, .btn, .project-card, .education-card, .submit-btn, .skill-item, .contact-details li, .skill-filter');
      
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        hoverElements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }

    return () => {
      window.removeEventListener('resize', checkDesktop);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
    </>
  );
};

export default CustomCursor;