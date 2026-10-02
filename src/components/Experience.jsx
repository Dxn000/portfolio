import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Experience() {
  const { sectionNumber, title, items } = portfolioData.experience;

  return (
    <section id="experience">
      <div className="container">
        <div className="section-top reveal">
          <div>
            <div className="section-number">{sectionNumber}</div>
            <h2 className="section-title">{title}</h2>
          </div>
        </div>

        <div className="experience-list reveal">
          {items.map((item, idx) => (
            <article key={idx} className="experience-item">
              <div>
                <div className="company">{item.company}</div>
                <div className="period">{item.period}</div>
                <div className="location">{item.location}</div>
              </div>

              <div className="experience-body">
                {item.description.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              <div className="experience-type">{item.type}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
