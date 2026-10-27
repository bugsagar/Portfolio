import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { projects as projectDetails } from '../project.js';

const resumeUrl = 'https://drive.google.com/file/d/1obocJinSdjuKiKrIfEKezt3i5yGmSLVb/view?usp=sharing';
const email = 'design.sagarmanohar@gmail.com';
const linkedinUrl = 'https://www.linkedin.com/in/sagar-manohar/';
const behanceUrl = 'https://www.behance.net/sagarmanohar';
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

// [slug, tags, title, externalUrl]
const projects = [
  ['prism', ['AI', 'PRODUCT', 'DESIGN SYSTEM'], 'Prism AI', 'https://pixis.ai/products/prism/'],
  ['adroom', ['AI', 'PRODUCT', 'MOBILE'], 'Adroom', 'https://pixis.ai/products/creative-ai/'],
  ['sidegigs', ['PRODUCT', 'MOBILE'], 'Sidegigs', 'https://sidegigs.app/'],
  ['pixis', ['DESIGN SYSTEM', 'AI'], 'Pixis Design System'],
  ['mystop', ['UX', 'CASE STUDY'], 'MyStop', 'https://www.behance.net/gallery/217621443/MYSTOP-where-is-my-bus-app'],
  ['visibility', ['MARKETING', 'AI'], 'Visibility', 'https://pixis.ai/products/pixis-visibility/'],
  ['care-io', ['UX', 'CASE STUDY'], 'Care.io', 'https://www.behance.net/gallery/160066733/CAREIO-UX-UI'],
];

const labItems = [
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
const navLinks = [['Home', '#home'], ['About', '#about'], ['Work', '#work'], ['Lab', '#lab'], ['Contact', '#contact']];

const thumb = (slug) => `/assets/${thumbnailBySlug[slug] || `${slug}.jpg`}`;
const external = (url) => (url?.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {});
const pad = (n) => String(n).padStart(2, '0');

function LockIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>;
}

function Handles() {
  return <>{['tl', 'tm', 'tr', 'ml', 'mr', 'bl', 'bm', 'br'].map((p) => <i key={p} className={`handle h-${p}`} />)}</>;
}

function useElementSize(ref) {
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

function Ruler({ axis, length, highlight }) {
  const marks = [];
  for (let i = 100; i < length; i += 100) marks.push(i);
  const style = axis === 'x' ? { left: highlight.start, width: highlight.size } : { top: highlight.start, height: highlight.size };
  return (
    <div className={`ruler ruler-${axis}`} aria-hidden="true">
      {highlight.size > 0 && <span className="ruler-highlight" style={style} />}
      {marks.map((m) => <span key={m} className="ruler-mark" style={axis === 'x' ? { left: m } : { top: m }}>{m}</span>)}
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');
  useEffect(() => {
    const onScroll = () => {
      let current = '#home';
      let best = -Infinity;
      navLinks.forEach(([, href]) => {
        const top = document.querySelector(href)?.getBoundingClientRect().top;
        if (top !== undefined && top < window.innerHeight * 0.4 && top > best) { best = top; current = href; }
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`site-nav${open ? ' is-open' : ''}`}>
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <span className="brand-mark" aria-hidden="true"><i /><i /></span>
        <strong>Sagar Manohar</strong><span className="brand-sub">/ Portfolio</span>
      </a>
      <nav className="nav-pill" aria-label="Primary">
        {navLinks.map(([label, href]) => <a key={href} href={href} className={active === href ? 'is-active' : ''} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <a className="connect-button" href={`mailto:${email}`}>Let's Connect ↗</a>
      <button className="menu-button" type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button>
    </header>
  );
}

function Hero() {
  const canvasRef = useRef(null);
  const nameRef = useRef(null);
  const canvas = useElementSize(canvasRef);
  const name = useElementSize(nameRef);
  const rulerOffset = 28;

  return (
    <section className="hero" id="home" ref={canvasRef}>
      <Ruler axis="x" length={canvas.w} highlight={{ start: name.x - rulerOffset, size: name.w }} />
      <Ruler axis="y" length={canvas.h} highlight={{ start: name.y - rulerOffset, size: name.h }} />
      <span className="ruler-corner" aria-hidden="true" />
      <p className="frame-label"><b>#</b> Home · {canvas.w < 640 ? 'Phone' : canvas.w < 1000 ? 'Tablet' : 'Desktop'} <span>{canvas.w} × {canvas.h}</span></p>

      <div className="hero-center">
        <div className="hero-meta mono">
          <span className="accent">◇ AI PRODUCT &amp; UX DESIGNER · DESIGN × ENGINEERING</span>
          <span>● 5+ YEARS · CURRENTLY @ PIXIS AI</span>
        </div>
        <div className="hero-name-wrap">
          <span className="sparkles" aria-hidden="true">✦<small>✧</small></span>
          <h1 className="hero-name selection" ref={nameRef}>
            Sagar Manohar
            <Handles />
            <span className="size-tag mono">{name.w} × {name.h}</span>
          </h1>
          <span className="cursor cursor-a" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="M1 1l5 14 2-6 6-2z" /></svg><em>Sagar</em></span>
        </div>
        <p className="hero-statement">
          An AI Product &amp; UX Designer, blending 5+ years of design experience with engineering and hands-on prototyping.
        </p>
        <div className="hero-cta">
          <a className="button-dark" href="#work" onPointerEnter={playHoverTone}>See selected work <span>↘</span></a>
          <svg className="hero-arrow" viewBox="0 0 80 40" aria-hidden="true"><path d="M78 30 C 60 0, 25 0, 6 22" /><path d="M6 22 l 3 -9 M6 22 l 9 -2" /></svg>
        </div>
      </div>

      <aside className="panel layers-panel" aria-hidden="true">
        <div className="panel-tabs"><b>Layers</b><span>Assets</span><em>Home</em></div>
        <ul>
          <li className="layer-root">⌗ Home · Desktop</li>
          <li className="is-selected">⟋ Sagar Manohar</li>
          <li>T Statement</li>
          <li>◇ Button</li>
          <li>▣ me.png</li>
          <li>◇ Currently designing</li>
          <li>◌ Comment: Sagar</li>
          <li>◌ Now: Prism AI</li>
        </ul>
      </aside>

      <figure className="hero-photo" aria-hidden="true">
        <figcaption className="mono">▣ me.png</figcaption>
        <img src="/assets/me.png" alt="" />
        <svg className="squiggle" viewBox="0 0 40 40"><path d="M10 30 C 0 10, 30 0, 22 20 S 30 38, 38 28" /></svg>
      </figure>

      <div className="focus-card" aria-hidden="true">
        <p className="focus-label mono">◇ Currently designing</p>
        <div className="focus-inner">
          <p className="focus-kicker"><span />Focus area</p>
          <h3>AI products at Pixis AI</h3>
          <p className="focus-copy">Across marketing, creative and design systems</p>
          <div className="focus-bars"><i /><i /><i /><i /><i /><i /><i /></div>
          <a className="focus-button" href="https://pixis.ai/" target="_blank" rel="noreferrer" tabIndex={-1}>See Pixis AI ↗</a>
        </div>
        <span className="cursor cursor-b"><svg viewBox="0 0 16 16"><path d="M1 1l5 14 2-6 6-2z" /></svg><em>Now: Prism AI</em></span>
      </div>

      <aside className="panel design-panel" aria-hidden="true">
        <div className="panel-tabs"><b>Design</b><span>Prototype</span><span>Inspect</span></div>
        <p className="panel-title">Name / vector</p>
        <div className="panel-grid">
          <span><em>X</em>{name.x}</span><span><em>Y</em>{name.y}</span>
          <span><em>W</em>{name.w}</span><span><em>H</em>{name.h}</span>
        </div>
        <p className="panel-title">Text</p>
        <div className="panel-row"><b>Geist</b><span>Semibold</span></div>
        <div className="panel-grid"><span><em>Aa</em>200</span><span><em>|A|</em>-5%</span></div>
        <p className="panel-title">Fill</p>
        <div className="panel-row"><b><i className="swatch" />RGB(12, 12, 14)</b><span>100%</span></div>
      </aside>

      <div className="toolbar" aria-hidden="true">
        <span className="is-active"><svg viewBox="0 0 16 16"><path d="M3 2l4 12 2-5 5-2z" /></svg></span>
        <span>#</span><span>✎</span><span>T</span><span className="is-tool">◯</span><span>⤢</span><em>100%</em>
      </div>
    </section>
  );
}

function Marquee() {
  const row = (items, icon) => [...items, ...items, ...items].map((item, i) => <span className="chip" key={`${item}-${i}`}><i>{icon}</i>{item}</span>);
  return (
    <section className="marquee" aria-label="Spaces and skills">
      <div className="marquee-head mono"><span>◇ PROBLEMS &amp; SPACES I DESIGN FOR</span><span>{spaces.length} SPACES · {skills.length} SKILLS</span></div>
      <div className="marquee-track"><div className="marquee-row">{row(spaces, '◈')}</div></div>
      <div className="marquee-track"><div className="marquee-row reverse muted">{row(skills, 'T')}</div></div>
    </section>
  );
}

function SectionLabel({ index, children }) {
  return <p className="section-label mono"><span>[{pad(index)}]</span> {children}</p>;
}

function About() {
  const photoRef = useRef(null);
  const photo = useElementSize(photoRef);
  return (
    <section className="about section" id="about">
      <figure className="about-photo">
        <figcaption className="mono"><span><b>▣</b> me.png</span><span>Crop · {photo.w} × {photo.h}</span></figcaption>
        <div className="selection about-frame" ref={photoRef}>
          <img src="/assets/me.png" alt="Sagar Manohar" />
          <Handles />
          <span className="cursor cursor-c" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="M1 1l5 14 2-6 6-2z" /></svg><em>Sagar · Pixis AI</em></span>
        </div>
        <svg className="heart" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 34 C 4 22, 6 6, 16 10 C 20 12, 20 16, 20 18 C 20 14, 24 8, 30 10 C 36 14, 32 26, 20 34" /></svg>
      </figure>
      <div className="about-body">
        <SectionLabel index={1}>ABOUT</SectionLabel>
        <h2 className="display">
          Sagar Manohar is an AI Product &amp; UX <span className="boxed selection">Designer<Handles /></span>.
          <br />Designing it, then <span className="scribble">building</span> it.
        </h2>
        <div className="about-columns">
          <p>Sagar blends <strong>5+ years of design experience</strong> with engineering and hands-on prototyping, moving fluidly between research, interaction design, design systems and code.</p>
          <p>Currently designing AI products at <a href="https://pixis.ai/" target="_blank" rel="noreferrer">Pixis AI</a> — from Prism AI and Adroom to the Pixis Design System that ties them together.</p>
        </div>
        <dl className="about-meta">
          <div><dt className="mono">ROLE</dt><dd>AI Product &amp; UX Designer</dd></div>
          <div><dt className="mono">CURRENTLY</dt><dd>Designing AI products at Pixis AI</dd></div>
          <div><dt className="mono">EXPERIENCE</dt><dd>5+ years across product, UX, design systems &amp; prototyping</dd></div>
        </dl>
        <div className="chip-list">{['Product Design', 'AI Products', 'UX Design', 'Design Systems', 'Prototyping', 'Engineering', 'Mobile'].map((t) => <span key={t}>{t}</span>)}</div>
        <a className="text-link" href={resumeUrl} target="_blank" rel="noreferrer">View resume <span>↗</span></a>
      </div>
    </section>
  );
}

function ProjectActions({ slug, title, url }) {
  const caseStudyLocked = lockedCaseStudies.has(slug);
  const caseStudyUrl = caseStudyUrls[slug] || (caseStudyOnly.has(slug) ? url : undefined);
  const destination = url || `/project.html?project=${encodeURIComponent(slug)}`;
  return (
    <div className="work-actions">
      {!caseStudyOnly.has(slug) && <a className="button-dark" href={destination} {...external(destination)} onPointerEnter={playHoverTone}>View Project <span>↗</span></a>}
      {caseStudyLocked && <a className="button-light" href={`mailto:${email}?subject=${encodeURIComponent(`${title} case study access`)}`} onPointerEnter={playHoverTone}><LockIcon /> Case Study</a>}
      {!caseStudyLocked && caseStudyUrl && <a className={caseStudyOnly.has(slug) ? 'button-dark' : 'button-light'} href={caseStudyUrl} target="_blank" rel="noreferrer" onPointerEnter={playHoverTone}>Case Study <span>↗</span></a>}
    </div>
  );
}

function Work() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const range = el.offsetHeight - window.innerHeight;
      const progress = Math.min(Math.max(-el.getBoundingClientRect().top / Math.max(range, 1), 0), 0.999);
      setActive(Math.floor(progress * projects.length));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  const jumpTo = (index) => {
    const el = sectionRef.current;
    if (!el) return;
    const range = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: el.offsetTop + (range * (index + 0.5)) / projects.length, behavior: 'smooth' });
  };

  return (
    <section className="work" id="work" ref={sectionRef} style={{ '--count': projects.length }}>
      <div className="work-sticky">
        <div className="work-top">
          <SectionLabel index={2}>SELECTED WORK</SectionLabel>
          <span className="work-rule" />
          <div className="work-tabs mono">
            {projects.map(([slug, , title], i) => (
              <button type="button" key={slug} className={i === active ? 'is-active' : ''} onClick={() => jumpTo(i)}>
                {pad(i + 1)}<span> {title.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="work-intro">
          <h2>Designing where people meet AI.</h2>
          <p>From AI workspaces and creative tools to design systems and mobile products, these are projects where design, engineering and prototyping meet.</p>
        </div>
        <div className="work-stage">
          {projects.map(([slug, tags, title, url], i) => {
            const detail = projectDetails[slug];
            const destination = url || `/project.html?project=${encodeURIComponent(slug)}`;
            const imageClickable = slug !== 'pixis';
            const Img = <img src={thumb(slug)} alt={`${title} preview`} loading="lazy" />;
            return (
              <article key={slug} className={`work-item${i === active ? ' is-active' : ''}`} aria-hidden={i !== active ? undefined : false}>
                <div className="work-copy">
                  <p className="work-kicker mono">{detail?.role || tags.join(' · ')}</p>
                  <h3>{title}</h3>
                  <p className="work-summary">{detail?.summary}</p>
                  <div className="tag-list mono">{tags.map((t) => <span key={t}>{t}</span>)}</div>
                  <ProjectActions slug={slug} title={title} url={url} />
                </div>
                <figure className="work-visual">
                  <figcaption className="mono"><b>#</b> {title} · {detail?.year || 'Case file'}</figcaption>
                  <div className="work-window">
                    <div className="window-bar"><span className="window-brand"><i />{title}</span><span className="window-tags">{tags.slice(0, 3).map((t) => <em key={t}>{t.toLowerCase()}</em>)}</span></div>
                    {imageClickable
                      ? <a className="window-image" href={destination} {...external(destination)} tabIndex={-1}>{Img}</a>
                      : <div className="window-image">{Img}</div>}
                  </div>
                </figure>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Lab() {
  return (
    <section className="lab section" id="lab">
      <div className="lab-head">
        <div>
          <SectionLabel index={3}>LAB / SIDE PROJECTS</SectionLabel>
          <h2 className="display">Exploring AI, code and open-source tools.</h2>
        </div>
        <div className="lab-aside">
          <p>Experiments in AI, code, open-source tools, and new ways people interact with technology.</p>
          <a className="text-link" href={behanceUrl} target="_blank" rel="noreferrer">Explore more on Behance <span>↗</span></a>
        </div>
      </div>
      <div className="lab-grid">
        {labItems.map(([slug, tags, title, url], i) => {
          const detail = projectDetails[slug];
          const Card = url ? 'a' : 'div';
          return (
            <Card key={slug} className={`lab-card${url ? '' : ' is-static'}`} {...(url ? { href: url, ...external(url) } : {})} onPointerEnter={playHoverTone}>
              <div className="lab-image"><img src={thumb(slug)} alt={`${title} preview`} loading="lazy" /></div>
              <p className="lab-meta mono"><span>{pad(i + 1)} / {tags.join(' · ')}</span>{url && <em>↗</em>}</p>
              <h3>{title}</h3>
              <p>{detail?.summary}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

function Education() {
  const [active, setActive] = useState(0);
  return (
    <section className="education section" id="education">
      <SectionLabel index={4}>EDUCATION</SectionLabel>
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

function Contact() {
  const outlineRef = useRef(null);
  return (
    <footer className="contact section" id="contact">
      <div className="contact-head">
        <div>
          <SectionLabel index={5}>SAY HELLO</SectionLabel>
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
          <p className="panel-head"><b>Pages</b><span className="mono">{navLinks.length}</span></p>
          {navLinks.map(([label, href], i) => <a key={href} href={href}><span>{label}</span><span className="mono">{pad(i + 1)}</span></a>)}
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

      <div className="outline-name selection" ref={outlineRef} aria-hidden="true">Sagar Manohar<Handles /></div>

      <div className="footer-bar mono">
        <span>© {new Date().getFullYear()} SAGAR MANOHAR.</span>
        <span>AI PRODUCT &amp; UX DESIGNER</span>
        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="site" onClickCapture={playClickTone}>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Lab />
        <Education />
      </main>
      <Contact />
    </div>
  );
}

export default App;
