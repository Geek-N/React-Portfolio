// src/components/About.jsx
import React from 'react';
import './About.css'; // Create this file for custom styles
import profilePic from '../assets/nina-wood-about.jpg';

export default function About() {
  return (
    <section className="about-section">
      <h1 className="glow-title">About Me</h1>
      <div className="about-content">
        <img src={profilePic} alt="Nina Wood" className="about-photo" />
        <div className="bio-text">
          <p><strong>Hi, I'm <span className="highlight">Nina Wood</span></strong>, a 28-year-old Full Stack Web Developer with a passion for building beautiful, functional web experiences using modern technologies like React, Node.js, and PostgreSQL.</p>
          <p>I love creating clean, responsive designs with a touch of flair — like this neon-themed portfolio!</p>
          <p><strong>🎸 Fun Fact:</strong> I also play 13 instruments!</p>
        </div>
      </div>
    </section>
  );
}
