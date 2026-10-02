import React from 'react';
import { portfolioData } from '../data/portfolioData';

function About() {
  const { sectionNumber, intro, lead, paragraphs, ctaText, ctaLink } = portfolioData.about;

  return (
    <section id="highlights" className="highlights">
      <div className="container">
        <div className="section-top reveal">
          <div className="section-number">{sectionNumber}</div>
          <p className="section-intro">{intro}</p>
        </div>

        <div className="about-grid reveal">
          <div className="about-lead">{lead}</div>

          <div className="about-copy">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            <a className="inline-link" href={ctaLink}>
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
