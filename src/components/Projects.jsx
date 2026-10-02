import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Projects() {
  const { sectionNumber, title, intro, items, featured } = portfolioData.projects;

  return (
    <section id="work">
      <div className="container">
        <div className="section-top reveal">
          <div>
            <div className="section-number">{sectionNumber}</div>
            <h2 className="section-title">{title}</h2>
          </div>
          <p className="section-intro">{intro}</p>
        </div>

        <div className="work-list reveal">
          {items.map((project) => (
            <article key={project.index} className="work-card">
              <div className="work-index">{project.index}</div>
              <div className="work-name">{project.name}</div>
              <div className="work-role">{project.role}</div>
              <div className="work-year">{project.year}</div>
            </article>
          ))}
        </div>

        <div className="project-detail reveal">
          <div>
            <div className="project-detail-label">{featured.label}</div>
          </div>

          <div>
            <h3>{featured.title}</h3>
            <p>{featured.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
