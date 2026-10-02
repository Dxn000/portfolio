import React from 'react';
import { portfolioData } from '../data/portfolioData';

function Contact() {
  const { sectionNumber, title, email, phone, location } = portfolioData.contact;

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-box reveal">
          <div>
            <div className="small">{sectionNumber}</div>
            <h2>{title}</h2>
          </div>

          <div className="contact-links">
            <a href={`mailto:${email}`}>{email}</a>
            <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
