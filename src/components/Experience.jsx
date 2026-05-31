export default function Experience({ experienceData }) {
  return (
    <section>
      <h2 className="section-title">Employment</h2>
      {experienceData.map((job) => (
        <div key={job.id} className="card">
          <div className="exp-header">
            <h3>
              {job.role} <span className="exp-company">@ {job.company}</span>
            </h3>
            <span className="exp-date">{job.date}</span>
          </div>
          <ul className="exp-bullets">
            {job.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
