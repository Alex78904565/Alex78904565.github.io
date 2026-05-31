export default function Research({ researchData }) {
  return (
    <section>
      <h2 className="section-title">Research</h2>
      {researchData.map((research) => (
        <div key={research.id} className="card">
          <div className="exp-header">
            <h3>
              {research.title} <span className="exp-company">w/ {research.advisor}</span>
            </h3>
            <span className="exp-date">{research.date}</span>
          </div>
          {research.paper && <h4 className="research-paper">Paper: <a href={research.paper}>{research.paper.split(/[\\/]/).pop()}</a></h4>}
          <ul className="exp-bullets">
            {research.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
