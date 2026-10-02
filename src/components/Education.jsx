import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Education() {
  const { sectionNumber, title, items } = portfolioData.education;

  return (
    <section id="education">
      <div className="container">
        <div className="section-top reveal">
          <div>
            <div className="section-number">{sectionNumber}</div>
            <h2 className="section-title">{title}</h2>
          </div>
        </div>

        <div className="education-list reveal">
          {items.map((item, idx) => (
            <div key={idx} className="education-row">
              <div className="degree">{item.degree}</div>
              <div className="school">{item.school}</div>
              <div className="education-year">{item.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
