import React from 'react';
import { portfolioData } from '../data/portfolioData';

function BeyondCode() {
  const { sectionNumber, title, chips } = portfolioData.beyondCode;

  return (
    <section id="beyond">
      <div className="container">
        <div className="section-top reveal">
          <div>
            <div className="section-number">{sectionNumber}</div>
            <h2 className="section-title">{title}</h2>
          </div>
        </div>

        <div className="chips reveal">
          {chips.map((chipText, idx) => (
            <div key={idx} className="chip">
              {chipText}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeyondCode;
