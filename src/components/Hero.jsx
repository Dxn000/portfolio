import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Hero() {
  const { kicker, headline, description, name } = portfolioData.personal;

  return (
    <header className="hero container">
      <div className="hero-kicker">{kicker}</div>

      <h1 className="hero-title reveal">
        <span>{headline.line1}</span>
        <span>{headline.line2}</span>
        <span className="accent">{headline.accent}</span>
      </h1>

      <p className="hero-description reveal">{description}</p>

      <div className="hero-photo reveal">
        <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt={name} />
      </div>
    </header>
  );
}

export default Hero;
