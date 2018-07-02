import React from 'react';
import ghLogo from '../github32.png';

const Footer = () => (
  <footer className="footer">
    <div className="author">
      <span>Chaim10</span>
    </div>
    <div className="footer-link">
      <a href="https://github.com/chaim10/react-quizz"
         target="_blank"
         rel="noopener noreferrer">
        <img src={ghLogo} alt="GitHub" width="32px" height="32px"/>
      </a>
    </div>
  </footer>
);

export default Footer;