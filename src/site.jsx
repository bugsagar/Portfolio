import { useEffect, useLayoutEffect, useState } from 'react';

export { projects as projectDetails } from '../project.js';

export const resumeUrl = 'https://drive.google.com/file/d/1obocJinSdjuKiKrIfEKezt3i5yGmSLVb/view?usp=sharing';
export const email = 'design.sagarmanohar@gmail.com';
export const linkedinUrl = 'https://www.linkedin.com/in/sagar-manohar/';
export const behanceUrl = 'https://www.behance.net/sagarmanohar';
let hoverAudioContext;

export function playHoverTone() {
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

export function playClickTone() {
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

// [slug, tags, title, externalUrl]
export const projects = [
  ['prism', ['AI', 'PRODUCT', 'DESIGN SYSTEM'], 'Prism AI', 'https://pixis.ai/products/prism/'],
  ['adroom', ['AI', 'PRODUCT', 'MOBILE'], 'Adroom', 'https://pixis.ai/products/creative-ai/'],
  ['sidegigs', ['PRODUCT', 'MOBILE'], 'Sidegigs', 'https://sidegigs.app/'],
  ['pixis', ['DESIGN SYSTEM', 'AI'], 'Pixis Design System'],
  ['mystop', ['UX', 'CASE STUDY'], 'MyStop', 'https://www.behance.net/gallery/217621443/MYSTOP-where-is-my-bus-app'],
  ['visibility', ['MARKETING', 'AI'], 'Visibility', 'https://pixis.ai/products/pixis-visibility/'],
  ['care-io', ['UX', 'CASE STUDY'], 'Care.io', 'https://www.behance.net/gallery/160066733/CAREIO-UX-UI'],
];

export const labItems = [
  ['swaram', ['OPEN SOURCE', 'AI'], 'Swaram AI'],
  ['pen-writer', ['WEB', 'PRODUCT'], 'Pen Writer', 'https://penwriter.vercel.app/'],
  ['brand-refresh', ['BRAND', 'TOOL'], 'Brand Refresh Plugin', 'https://chromewebstore.google.com/detail/brandrefresh/hbdbcbikeiedniojdaneabiopcgnncmc?utm_source=item-share-cb'],
  ['employer-award', ['AWARD'], '2X Employer Awards', 'https://drive.google.com/drive/u/1/folders/11QZslnvjtRnChLxH_BYg994xraGNvv0O?usp=sharing'],
];

const education = [
  ['Bridge UX Design Studios', 'Advanced UX/UI Training for Web & Mobile', 'Mar 2019 - Mar 2019'],
  ['Toonz Academy', 'Diploma, Visual Effects and Animation', 'Jan 2018 - Dec 2018'],
  ['Srinivas Institute of Technology', 'B.E. Computer Engineering', 'Jan 2013 - Dec 2017'],
];

const thumbnailBySlug = {
  swaram: 'swaram.jpg',
  'care-io': 'care.jpg',
  sidegigs: 'sidegigs.png',
  'brand-refresh': 'Brand.jpg',
  'employer-award': 'Awards.jpg',
  'pen-writer': 'pen.jpg',
};

const lockedCaseStudies = new Set(['prism', 'adroom', 'pixis', 'visibility']);
const caseStudyUrls = {
  sidegigs: 'https://www.figma.com/proto/iexIWEufQppG8Hc0iDYcJ2/Sidegigs-case-study?node-id=1-2&viewport=350%2C182%2C0.1&t=rErWKMtzlo4uSdOV-8&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&hide-ui=1',
};
const caseStudyOnly = new Set(['mystop', 'care-io']);

const spaces = ['AI Products', 'Design Systems', 'Marketing Tech', 'Mobile Apps', 'Open Source', 'Digital Health', 'Mobility', 'Creative Tools'];
const skills = ['Product Design', 'UX Design', 'AI Prototyping', 'Design Systems', 'Interaction Design', 'Front-end Engineering', 'Visual Effects', 'Animation', 'Brand Design', 'Mobile UX'];

// [label, section id]; "work" is its own page, everything else lives on the home page.
const navItems = [['Home', 'home'], ['About', 'about'], ['Work', 'work'], ['Lab', 'lab'], ['Contact', 'contact']];
export const workPageUrl = '/work';

function navHref(id, page) {
  if (id === 'work') return workPageUrl;
  if (id === 'contact') return '#contact';
  if (page === 'home') return `#${id}`;
  return id === 'home' ? '/' : `/#${id}`;
}

export const thumb = (slug) => `/assets/${thumbnailBySlug[slug] || `${slug}.jpg`}`;
export const external = (url) => (url?.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {});
export const windowTag = (tag) => (tag.length <= 2 ? tag : tag.toLowerCase());
export const pad = (n) => String(n).padStart(2, '0');
export const projectDestination = (slug, url) => url || `/project.html?project=${encodeURIComponent(slug)}`;

export function caseStudyFor(slug, url) {
  if (lockedCaseStudies.has(slug)) return { locked: true };
  const caseUrl = caseStudyUrls[slug] || (caseStudyOnly.has(slug) ? url : undefined);
  return caseUrl ? { url: caseUrl, only: caseStudyOnly.has(slug) } : null;
}

export function LockIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>;
}

export function Handles() {
  return <>{['tl', 'tm', 'tr', 'ml', 'mr', 'bl', 'bm', 'br'].map((p) => <i key={p} className={`handle h-${p}`} />)}</>;
}

export function useElementSize(ref) {
  const [size, setSize] = useState({ w: 0, h: 0, x: 0, y: 0 });
  useLayoutEffect(() => {
    if (!ref.current) return undefined;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const frame = el.closest('section')?.getBoundingClientRect() || rect;
      setSize({ w: Math.round(el.offsetWidth), h: Math.round(el.offsetHeight), x: Math.round(rect.left - frame.left), y: Math.round(rect.top - frame.top) });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(ref.current);
    window.addEventListener('resize', update);
    return () => { observer.disconnect(); window.removeEventListener('resize', update); };
  }, [ref]);
  return size;
}

export function Nav({ page }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(page);
  useEffect(() => {
    const onScroll = () => {
      let current = page;
      let best = -Infinity;
      navItems.forEach(([, id]) => {
        if (page !== 'home' && id !== 'contact') return;
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top < window.innerHeight * 0.4 && top > best) { best = top; current = id; }
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [page]);
  return (
    <header className={`site-nav${open ? ' is-open' : ''}`}>
      <a className="brand" href={page === 'home' ? '#home' : '/'} onClick={() => setOpen(false)}>
        <span className="brand-mark" aria-hidden="true"><i /><i /></span>
        <strong>Sagar Manohar</strong><span className="brand-sub">/ Portfolio</span>
      </a>
      <nav className="nav-pill" aria-label="Primary">
        {navItems.map(([label, id]) => <a key={id} href={navHref(id, page)} className={active === id ? 'is-active' : ''} aria-current={active === id ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <a className="connect-button" href={`mailto:${email}`}>Let's Connect ↗</a>
      <button className="menu-button" type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button>
    </header>
  );
}

export function Marquee() {
  const row = (items, icon) => [...items, ...items, ...items].map((item, i) => <span className="chip" key={`${item}-${i}`}><i>{icon}</i>{item}</span>);
  return (
    <section className="marquee" aria-label="Spaces and skills">
      <div className="marquee-head mono"><span>◇ PROBLEMS &amp; SPACES I DESIGN FOR</span><span>{spaces.length} SPACES · {skills.length} SKILLS</span></div>
      <div className="marquee-track"><div className="marquee-row">{row(spaces, '◈')}</div></div>
      <div className="marquee-track"><div className="marquee-row reverse muted">{row(skills, 'T')}</div></div>
    </section>
  );
}

export function SectionLabel({ index, children }) {
  return <p className="section-label mono"><span>[{pad(index)}]</span> {children}</p>;
}

export function ProjectActions({ slug, title, url }) {
  const caseStudy = caseStudyFor(slug, url);
  const destination = projectDestination(slug, url);
  return (
    <div className="work-actions">
      {!caseStudy?.only && <a className="button-dark" href={destination} {...external(destination)} onPointerEnter={playHoverTone}>View Project <span>↗</span></a>}
      {caseStudy?.locked && <a className="button-light" href={`mailto:${email}?subject=${encodeURIComponent(`${title} case study access`)}`} onPointerEnter={playHoverTone}><LockIcon /> Case Study</a>}
      {caseStudy?.url && <a className={caseStudy.only ? 'button-dark' : 'button-light'} href={caseStudy.url} target="_blank" rel="noreferrer" onPointerEnter={playHoverTone}>Case Study <span>↗</span></a>}
    </div>
  );
}

export function Education({ index }) {
  const [active, setActive] = useState(0);
  return (
    <section className="education section" id="education">
      <SectionLabel index={index}>EDUCATION</SectionLabel>
      <h2 className="display">Trained across design, motion and code.</h2>
      <p className="lede">The path that shaped how I work today.</p>
      <div className="auto-layout mono"><span className="is-on">Auto layout</span><span>Horizontal</span><span>Gap 24</span><span>Padding 24</span><em>Item {active + 1} / {education.length}</em></div>
      <div className="edu-row">
        {education.map(([school, course, time], i) => (
          <article key={school} className={`edu-card${i === active ? ' is-active' : ''}`} onPointerEnter={() => setActive(i)} onFocus={() => setActive(i)} tabIndex={0}>
            <p className="edu-top mono"><span>{pad(i + 1)}</span><span>{time}</span></p>
            <div>
              <h3>{school}</h3>
              <p>{course}</p>
            </div>
            {i < education.length - 1 && <span className="gap-tag mono" aria-hidden="true">24</span>}
          </article>
        ))}
      </div>
    </section>
  );
}

function LocalTime() {
  const format = () => new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', hour12: false });
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, []);
  return <strong className="clock">{time}</strong>;
}

export function Contact({ page, index }) {
  return (
    <footer className="contact section" id="contact">
      <div className="contact-head">
        <div>
          <SectionLabel index={index}>SAY HELLO</SectionLabel>
          <h2 className="contact-title">Made it this far? <span className="selection">Say hello<Handles /><span className="size-tag mono">Text · 104</span></span>.</h2>
        </div>
        <div className="contact-aside">
          <p>Whether it's a design opportunity, an AI product idea, or just comparing notes, I'd love to connect.</p>
          <div className="contact-buttons">
            <a className="button-accent" href={`mailto:${email}`}>Email Me <span>↗</span></a>
            <a className="button-light" href={linkedinUrl} target="_blank" rel="noreferrer">Find Me on LinkedIn <span>↗</span></a>
          </div>
        </div>
      </div>

      <div className="contact-panel">
        <div>
          <p className="panel-head"><b>Pages</b><span className="mono">{navItems.length}</span></p>
          {navItems.map(([label, id], i) => <a key={id} href={navHref(id, page)}><span>{label}</span><span className="mono">{pad(i + 1)}</span></a>)}
        </div>
        <div>
          <p className="panel-head"><b>Elsewhere</b><span className="mono">↗</span></p>
          <a href={linkedinUrl} target="_blank" rel="noreferrer"><span>LinkedIn</span><span className="mono">↗</span></a>
          <a href={behanceUrl} target="_blank" rel="noreferrer"><span>Behance</span><span className="mono">↗</span></a>
          <a href={resumeUrl} target="_blank" rel="noreferrer"><span>Resume</span><span className="mono">↗</span></a>
          <a href={`mailto:${email}`}><span>{email}</span><span className="mono">@</span></a>
        </div>
        <div>
          <p className="panel-head"><b>Local time</b><span className="mono online">● online</span></p>
          <LocalTime />
          <p className="muted-small">India (IST).</p>
        </div>
      </div>

      <div className="outline-name selection" aria-hidden="true">Sagar Manohar<Handles /></div>

      <div className="footer-bar mono">
        <span>© {new Date().getFullYear()} SAGAR MANOHAR.</span>
        <span>AI PRODUCT &amp; UX DESIGNER</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
