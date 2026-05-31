import React from 'react';

export default function Header({ data }) {
  return (
    <header className="hero">
      <h1>{data.name}</h1>
      <h2>{data.title}</h2>
      <p>{data.summary}</p>
      <ul className="contact-links">
        <li><a href={`mailto:${data.email}`}>{data.email}</a></li>
        <li>{data.phone}</li>
        <li>{data.location}</li>
        <li><a href={`https://${data.linkedin}`} target="_blank" rel="noreferrer">LinkedIn</a></li>
      </ul>
    </header>
  );
}