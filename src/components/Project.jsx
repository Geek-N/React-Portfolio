export default function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank">Live Site</a>
      <a href={githubLink} target="_blank">GitHub</a>
    </div>
  );
}
