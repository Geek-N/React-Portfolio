import Project from "../components/Project";
const projects = [
  {
    title: "Pawsome Vibes",
    image: "/assets/pawsome.png",
    deployedLink: "https://pawsome-vibes.netlify.app",
    githubLink: "https://github.com/nina/pawsome-vibes"
  },
];
export default function Portfolio() {
  return (
    <section>
      {projects.map((proj, index) => (
        <Project key={index} {...proj} />
      ))}
    </section>
  );
}
