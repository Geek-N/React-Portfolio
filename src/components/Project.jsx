import React from 'react';
import './Project.css';

export default function Project({ title, image, deployed, github }) {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} screenshot`} className="project-img" />
      <h3>{title}</h3>
      <div className="project-links">
        <a href={deployed} target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}
