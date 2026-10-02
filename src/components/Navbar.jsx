import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'About', href: '#highlights' },
    { name: 'Projects', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['highlights', 'work', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          {portfolioData.personal.name}
        </a>

        <button
          className="nav-toggle"
          aria-label="Open navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={isActive ? 'active' : ''}
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
