const resources = [
  {
    title: 'Algorithm Fundamentals',
    description: 'Video series covering core algorithm concepts and problem-solving strategies.',
    icon: '\u{1F3AC}',
    url: null,
  },
  /*
  {
    title: 'Exam Review Sessions',
    description: 'Recorded review sessions with worked examples from past exams.',
    icon: '\u{1F4DD}',
    url: null,
  },
  {
    title: 'Office Hours FAQ',
    description: 'Common questions and detailed explanations from office hours.',
    icon: '\u{2753}',
    url: null,
  },
  */
];

export default function Resources() {
  return (
    <section>
      <h2 className="section-title">Teaching Resources</h2>
      <p className="resources-placeholder">
        Resources are being prepared — check back soon for videos, guides, and more.
      </p>
      <div className="resources-grid" style={{ marginTop: 20 }}>
        {resources.map((r) => (
          <div key={r.title} className="resource-card">
            <span className="resource-icon">{r.icon}</span>
            <h3>{r.title}</h3>
            <p>{r.description}</p>
            {r.url ? (
              <a className="resource-link" href={r.url} target="_blank" rel="noreferrer">
                View resource &rarr;
              </a>
            ) : (
              <span className="resource-link" style={{ opacity: 0.4 }}>
                Coming soon
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
