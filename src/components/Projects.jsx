export default function Projects({ projectData }) {
  return (
    <section>
      <h2 className="section-title">Projects</h2>
      {projectData.map((project) => (
        <div key={project.id} className="card">
          <div className="exp-header">
            <h3>
              {project.title}
            </h3>
            <span className="exp-date">{project.date}</span>
          </div>
          <ul className="exp-bullets">
            {project.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
