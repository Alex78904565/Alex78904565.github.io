export default function About({ data }) {
  return (
    <section>
      <h2 className="section-title">About</h2>
      <p className="about-text">{data.summary}</p>

      <div className="contact-row">
        <span className="contact-item">
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </span>
        <span className="contact-item">{data.phone}</span>
        <span className="contact-item">
          <a href={`https://${data.linkedin}`} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </span>
      </div>
    </section>
  );
}
