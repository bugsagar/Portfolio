import { useEffect, useRef, useState } from 'react';
import {
  Contact, windowTag, Education, Handles, Marquee, Nav, ProjectActions, SectionLabel, behanceUrl, external, labItems, pad,
  playClickTone, playHoverTone, projectDetails, projectDestination, projects, resumeUrl, thumb, useElementSize, workPageUrl,
} from './site.jsx';

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
          <a className="button-dark" href="#selected-work" onPointerEnter={playHoverTone}>See selected work <span>↘</span></a>
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
    <section className="work" id="selected-work" ref={sectionRef} style={{ '--count': projects.length }}>
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
          <div>
            <p>From AI workspaces and creative tools to design systems and mobile products, these are projects where design, engineering and prototyping meet.</p>
            <a className="text-link work-all" href={workPageUrl}>View all work <span>↗</span></a>
          </div>
        </div>
        <div className="work-stage">
          {projects.map(([slug, tags, title, url], i) => {
            const detail = projectDetails[slug];
            const destination = projectDestination(slug, url);
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
                    <div className="window-bar"><span className="window-brand"><i />{title}</span><span className="window-tags">{tags.slice(0, 3).map((t) => <em key={t}>{windowTag(t)}</em>)}</span></div>
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

function App() {
  return (
    <div className="site" id="top" onClickCapture={playClickTone}>
      <Nav page="home" />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Lab />
        <Education index={4} />
      </main>
      <Contact page="home" index={5} />
    </div>
  );
}

export default App;
