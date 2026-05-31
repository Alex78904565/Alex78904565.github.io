import { useState } from 'react';
import ReviewRotator from './components/ReviewRotator';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import About from './components/About';
import Resources from './components/Resources';
import { cvData } from './data/cvData';
import profileImg from './assets/profile.jpg';
import './App.css';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Employment' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'resources', label: 'Resources' },
];

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      <section className="hero">
        <div className="hero-photo">
          <img src={profileImg} alt="Alex Lehmkuhl" className="profile-pic" />
        </div>
        <div className="hero-content">
          <h1>{cvData.personal.name}</h1>
          
          <p className="subtitle">{cvData.personal.titles.map((t,i)=>(<span key={i} className="title-part">{t.trim()}</span>))}</p>
          <ReviewRotator />
        </div>
      </section>

      <nav className="site-nav">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            className={`nav-btn${activeSection === s.id ? ' active' : ''}`}
            onClick={() => setActiveSection(s.id)}
          >
            {s.label}
          </button>
        ))}
      </nav>

      <main className="content">
        <div className="content-section" key={activeSection}>
          {activeSection === 'home' && <About data={cvData.personal} />}
          {activeSection === 'experience' && <Experience experienceData={cvData.experience} />}
          {activeSection === 'research' && <Research researchData={cvData.research} />}
          {activeSection === 'projects' && <Projects projectData={cvData.projects} />}
          {activeSection === 'resources' && <Resources />}
        </div>
      </main>

      <footer className="site-footer">
        {cvData.personal.name} &middot; {cvData.personal.location}
      </footer>
    </>
  );
}

export default App;
