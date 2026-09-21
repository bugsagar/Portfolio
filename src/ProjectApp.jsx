import { useEffect, useState } from 'react';
import { projects } from '../project.js';

function ProjectApp() {
  const [light, setLight] = useState(false);
  const slug = new URLSearchParams(window.location.search).get('project') || 'prism';
  const project = projects[slug] || projects.prism;
  const keys = Object.keys(projects);
  const next = projects[keys[(keys.indexOf(slug) + 1) % keys.length]];

  useEffect(() => { document.title = `${project.title} — Sagar Manohar`; }, [project.title]);

  const thumbnail = (slug === 'pen-writer' || slug === 'side-projects') ? 'pen.jpg' : (slug === 'brand-refresh' ? 'Brand.jpg' : (slug === 'employer-award' ? 'Awards.jpg' : (slug === 'sidegigs' ? 'sidegigs.png' : `${slug}.jpg`)));

  return (
    <main className={`page-shell project-page${light ? ' light' : ''}`}>
      <header className="detail-topbar"><a className="back-link" href="/">← Index</a><a className="detail-name" href="/">Sagar Manohar</a><button className="pill icon-button" type="button" aria-label="Toggle light and dark theme" onClick={() => setLight(!light)}>◐</button></header>
      <article id="case-study" aria-live="polite">
        <header className="case-hero"><p className="case-kicker">{project.tags.join(' · ')}</p><h1 className="case-title">{project.title}</h1><p className="case-summary">{project.summary}</p><div className="case-meta"><div><span className="meta-label">Role</span><span className="meta-value">{project.role}</span></div><div><span className="meta-label">Year</span><span className="meta-value">{project.year}</span></div><div><span className="meta-label">Focus</span><span className="meta-value">{project.tags.join(' / ')}</span></div></div></header>
        <div className="case-visual" style={{ backgroundImage: `url('/assets/${thumbnail}')` }}><div className="visual-card"><small>PROJECT / {project.tags[0].toUpperCase()}</small><h3>{project.title}</h3><p>A prototype for clearer, more human digital work.</p><div className="bar" /><div className="bar short" /></div></div>
        <section className="case-section"><h2>The challenge</h2><p>{project.challenge}</p></section>
        <section className="case-section"><h2>The approach</h2><div><p>{project.approach}</p><div className="case-tags">{project.tags.map((tag) => <b key={tag}>{tag}</b>)}</div></div></section>
        <section className="case-section"><h2>Outcome</h2><p>{project.result}</p></section>
        <a className="next-project" href={`/project.html?project=${keys[(keys.indexOf(slug) + 1) % keys.length]}`}><div><small>NEXT PROJECT</small><h2>{next.title}</h2></div><span className="arrow">↗</span></a>
      </article>
      <footer className="detail-footer"><a href="/">← Back to index</a><span>© Sagar Manohar</span></footer>
    </main>
  );
}

export default ProjectApp;
