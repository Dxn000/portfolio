import React from 'react';
import { portfolioData } from '../data/portfolioData';

function SkillsMarquee() {
  const skills = portfolioData.skillsMarquee;

  return (
    <div className="marquee" aria-label="Technology skills">
      <div className="marquee-track">
        {skills.map((skill, index) => (
          <div key={`skill-1-${index}`} className="marquee-item">
            {skill}
          </div>
        ))}
        {skills.map((skill, index) => (
          <div key={`skill-2-${index}`} className="marquee-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsMarquee;
