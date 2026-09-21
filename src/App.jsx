import { useState } from 'react';

const resumeUrl = 'https://drive.google.com/file/d/1obocJinSdjuKiKrIfEKezt3i5yGmSLVb/view?usp=sharing';
let hoverAudioContext;

function playHoverTone() {
  try {
    hoverAudioContext ||= new AudioContext();
    const oscillator = hoverAudioContext.createOscillator();
    const gain = hoverAudioContext.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(520, hoverAudioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(680, hoverAudioContext.currentTime + 0.045);
    gain.gain.setValueAtTime(0.0001, hoverAudioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.018, hoverAudioContext.currentTime + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, hoverAudioContext.currentTime + 0.065);
    oscillator.connect(gain).connect(hoverAudioContext.destination);
    oscillator.start();
    oscillator.stop(hoverAudioContext.currentTime + 0.07);
  } catch {}
}

function playClickTone() {
  try {
    hoverAudioContext ||= new AudioContext();
    const oscillator = hoverAudioContext.createOscillator();
    const gain = hoverAudioContext.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(260, hoverAudioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(180, hoverAudioContext.currentTime + 0.08);
    gain.gain.setValueAtTime(0.0001, hoverAudioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.025, hoverAudioContext.currentTime + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, hoverAudioContext.currentTime + 0.09);
    oscillator.connect(gain).connect(hoverAudioContext.destination);
    oscillator.start();
    oscillator.stop(hoverAudioContext.currentTime + 0.1);
  } catch {}
}

const projects = [
  ['prism', ['AI', 'PRODUCT', 'DESIGN SYSTEM'], 'Prism AI', false, 'https://pixis.ai/products/prism/'],
  ['adroom', ['AI', 'PRODUCT', 'MOBILE'], 'Adroom', false, 'https://pixis.ai/products/creative-ai/'],
  ['sidegigs', ['PRODUCT', 'MOBILE'], 'Sidegigs', false, 'https://sidegigs.app/'],
  ['pixis', ['DESIGN SYSTEM', 'AI'], 'Pixis Design System'],
  ['mystop', ['UX', 'CASE STUDY'], 'MyStop', false, 'https://www.behance.net/gallery/217621443/MYSTOP-where-is-my-bus-app'],
  ['visibility', ['MARKETING', 'AI'], 'Visibility', false, 'https://pixis.ai/products/pixis-visibility/'],
  ['care-io', ['UX', 'CASE STUDY'], 'Care.io', false, 'https://www.behance.net/gallery/160066733/CAREIO-UX-UI'],
];

const labItems = [
  ['swaram', ['OPEN SOURCE', 'AI'], 'Swaram AI', true],
  ['pen-writer', ['WEB', 'PRODUCT'], 'Pen Writer'],
  ['brand-refresh', ['BRAND', 'TOOL'], 'Brand Refresh Plugin', false, 'https://chromewebstore.google.com/detail/brandrefresh/hbdbcbikeiedniojdaneabiopcgnncmc?utm_source=item-share-cb'],
  ['employer-award', ['AWARD'], '2X Employer Awards', false, 'https://drive.google.com/drive/u/1/folders/11QZslnvjtRnChLxH_BYg994xraGNvv0O?usp=sharing'],
];

const thumbnailBySlug = {
  swaram: 'swaram.jpg',
  'care-io': 'care.jpg',
  'sidegigs': 'sidegigs.png',
  'brand-refresh': 'Brand.jpg',
  'employer-award': 'Awards.jpg',
  'pen-writer': 'Foodo.jpg',
  'side-projects': 'Foodo.jpg',
};

const lockedCaseStudies = new Set(['prism', 'adroom', 'pixis', 'visibility']);
const caseStudyUrls = {
  sidegigs: 'https://www.figma.com/proto/iexIWEufQppG8Hc0iDYcJ2/Sidegigs-case-study?node-id=1-2&viewport=350%2C182%2C0.1&t=rErWKMtzlo4uSdOV-8&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&hide-ui=1',
};
const caseStudyOnly = new Set(['mystop', 'care-io']);
const viewProjectOnly = new Set(['swaram', 'pen-writer', 'side-projects', 'brand-refresh', 'employer-award']);

function Tags({ tags }) {
  return <span className="tags">{tags.map((tag) => <b key={tag}>{tag}</b>)}</span>;
}

function ProjectLink({ item, onOpen }) {
  const [slug, tags, title, locked, externalUrl] = item;
  return (
    <a
      className={`project${locked ? ' locked' : ''}`}
      href={externalUrl || `#${slug}`}
      onPointerEnter={playHoverTone}
      onClick={(event) => {
        event.preventDefault();
        if (locked && !viewProjectOnly.has(slug)) {
          window.alert('Please contact me by email to access Swaram AI.');
          return;
        }
        if (externalUrl) {
          onOpen({ slug, tags, title, externalUrl });
          return;
        }
        onOpen({ slug, tags, title });
      }}
    >
      {locked && <span className="lock-tag"><img src="/assets/lock.svg" alt="Locked" /></span>}
      <Tags tags={tags} />
      <span className="project-name">{title}</span>
    </a>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const thumbnail = thumbnailBySlug[project.slug] || `${project.slug}.jpg`;
  const destination = project.externalUrl || `/project.html?project=${encodeURIComponent(project.slug)}`;
  const caseStudyLocked = lockedCaseStudies.has(project.slug);
  const caseStudyUrl = caseStudyUrls[project.slug] || (caseStudyOnly.has(project.slug) ? project.externalUrl : undefined);
  const showViewProject = !caseStudyOnly.has(project.slug);
  const hasCaseStudy = caseStudyLocked || Boolean(caseStudyUrl);
  const showCaseStudy = !viewProjectOnly.has(project.slug) && hasCaseStudy;
  const emailSubject = encodeURIComponent(`${project.title} case study access`);
  return (
    <div className="project-modal is-open">
      <div className="modal-backdrop" data-close onClick={onClose} />
      <section className="preview-card" role="dialog" aria-modal="true" aria-labelledby="preview-title">
        <button className="modal-close" type="button" aria-label="Close preview" onClick={onClose}>×</button>
        <div className={`preview-art preview-art-${project.slug}`}>
          <img
            className={`preview-image preview-image-${project.slug}`}
            src={`/assets/${thumbnail}`}
            alt={`${project.title} preview`}
          />
        </div>
        <div className="preview-footer"><div><h2 id="preview-title">{project.title}</h2><p>2026</p></div><div className="preview-actions">{showViewProject && <a className="view-project-button" href={destination}>View Project <span>↗</span></a>}{showCaseStudy && (caseStudyLocked ? <a className="case-study-button is-locked" href={`mailto:design.sagarmanohar@gmail.com?subject=${emailSubject}`}><i className="fa-solid fa-lock" aria-label="Locked" /> Case Study</a> : caseStudyUrl ? <a className="case-study-button" href={caseStudyUrl}>Case Study <span>↗</span></a> : <button className="case-study-button is-disabled" type="button" disabled>Case Study</button>)}</div></div>
      </section>
    </div>
  );
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="app-root" onClickCapture={playClickTone}>
      <main className="page-shell">
        <div className="page-content">
        <section className="profile-hero" id="bio">
          <div className="cover-image" aria-hidden="true" />
          <div className="profile-actions"><span className="avatar profile-avatar" aria-hidden="true" /><span className="online-dot profile-dot" /><a className="edit-profile" href={resumeUrl} target="_blank" rel="noreferrer">View resume</a></div>
          <h1 className="profile-title">Sagar Manohar <img className="verified-badge" src="/assets/verified.svg" alt="Verified" /></h1>
          <div className="about-copy"><h2>ABOUT</h2><p><span className="about-highlight" onPointerEnter={playHoverTone}>Sagar Manohar</span> is an AI Product &amp; UX Designer, blending <span className="about-highlight" onPointerEnter={playHoverTone}>5+ years of design experience</span> with engineering and hands-on prototyping. Currently designing AI products at <a className="about-highlight" href="https://pixis.ai/" onPointerEnter={playHoverTone}>Pixis AI</a>.</p></div>
        </section>

        <section className="index-section" aria-labelledby="project-index-title">
          <h1 id="project-index-title">Project Index</h1>
          <div className="project-controls" aria-label="Site navigation"><a className="nav-link active" href="#bio">Home</a><a className="nav-link" href="https://www.linkedin.com/in/sagar-manohar/" target="_blank" rel="noreferrer">LinkedIn</a><a className="nav-link" href="https://www.behance.net/sagarmanohar" target="_blank" rel="noreferrer">Behance</a><a className="gallery-toggle" href="mailto:design.sagarmanohar@gmail.com">Contact me</a></div>
          <div className="project-list" id="project-list">{projects.map((item) => <ProjectLink item={item} onOpen={setSelectedProject} key={item[0]} />)}</div>
        </section>

        <section className="lab-section" aria-labelledby="lab-title"><h2 id="lab-title">LAB</h2><p>Exploring AI, code, open-source tools,<br />and new ways people interact with technology.</p><div className="project-list lab-list">{labItems.map((item) => <ProjectLink item={item} onOpen={setSelectedProject} key={item[0]} />)}</div></section>

        <section className="archive-section education-section"><h2>Education</h2><div className="project-list education-list"><div className="project education-item"><span className="project-name">Bridge UX Design Studios <small>Advanced UX/UI Training for Web &amp; Mobile</small></span><time>Mar 2019 - Mar 2019</time></div><div className="project education-item"><span className="project-name">Toonz Academy <small>Diploma, Visual Effects and Animation</small></span><time>Jan 2018 - Dec 2018</time></div><div className="project education-item"><span className="project-name">Srinivas Institute of Technology <small>B.E. Computer Engineering</small></span><time>Jan 2013 - Dec 2017</time></div></div></section>
        </div>
      </main>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;
