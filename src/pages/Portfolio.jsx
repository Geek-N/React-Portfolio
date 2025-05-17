
import React from 'react';
import Project from '../components/Project';
import './Portfolio.css';

const projects = [
  {
    title: "Yo Mama Joke App",
    image: "/images/yomama.png",
    deployed: "https://your-yomama-app.netlify.app",
    github: "https://github.com/Geek-N/yo-mama-joke-app"
  },
  {
    title: "Pawsome Vibes",
    image: "/images/pawsome.png",
    deployed: "https://your-pawsome.netlify.app",
    github: "https://github.com/Geek-N/pawsome-vibes"
  },
  {
    title: "Weather Dashboard",
    image: "/images/weather.png",
    deployed: "https://your-weather-dashboard.netlify.app",
    github: "https://github.com/Geek-N/weather-dashboard"
  },
  {
    title: "README Generator",
    image: "/images/readme.png",
    deployed: "https://your-readme.netlify.app",
    github: "https://github.com/Geek-N/readme-generator"
  },
  {
    title: "Movie Database",
    image: "/images/movies.png",
    deployed: "https://your-movies.netlify.app",
    github: "https://github.com/Geek-N/movie-database"
  },
  {
    title: "Portfolio Site",
    image: "/images/portfolio.png",
    deployed: "https://admirable-frangollo-f22e53.netlify.app",
    github: "https://github.com/Geek-N/React-Portfolio"
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio-section">
      <h2 className="glow-title">My Work</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
