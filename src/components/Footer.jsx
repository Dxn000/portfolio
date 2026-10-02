import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Footer() {
  const { name, note } = portfolioData.footer;

  return (
    <footer>
      <div className="container">
        <div className="footer-name">{name}</div>
        <div className="footer-note">{note}</div>
      </div>
    </footer>
  );
}

export default Footer;
