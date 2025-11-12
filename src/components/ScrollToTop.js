import React from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';

const ScrollToTop = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <a 
      href="#" 
      className={`scroll-to-top ${isVisible ? 'active' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <i className="fas fa-arrow-up"></i>
    </a>
  );
};

export default ScrollToTop;