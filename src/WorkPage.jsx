import { useRef } from 'react';
import {
  Contact, windowTag, Education, Handles, Marquee, Nav, caseStudyFor, external, pad,
  playClickTone, playHoverTone, projectDetails, projectDestination, projects, thumbImage, useElementSize,
} from './site.jsx';

function WorkHero() {
  const titleRef = useRef(null);
  const title = useElementSize(titleRef);
  return (
    <section className="work-hero">
      <p className="breadcrumb mono"><b>#</b> Portfolio <span>/</span> <strong>Work</strong></p>
      <div className="work-hero-title">
        <h1 className="selection" ref={titleRef}>
          Selected work
          <Handles />
          <span className="size-tag mono">Text · Geist Semibold · {title.w} × {title.h}</span>
        </h1>
        <span className="cursor cursor-d" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="M1 1l5 14 2-6 6-2z" /></svg><em>Sagar · Designer</em></span>
      </div>
      <div className="work-hero-foot">
        <p>{projects.length} products across AI marketing, design systems, mobile and digital health. Each card opens its project.</p>
        <dl className="mono">
          <div><dt>{projects.length} PROJECTS</dt></div>
          <div><dt>AI &amp; PRODUCT</dt></div>
          <div><dt>WEB, MOBILE &amp; DESIGN SYSTEMS</dt></div>
        </dl>
      </div>
    </section>
  );
}

function CaseFile({ index, slug, tags, title, url }) {
  const detail = projectDetails[slug];
  const destination = projectDestination(slug, url);
  const caseStudy = caseStudyFor(slug, url);
  const imageClickable = slug !== 'pixis';
  const Window = imageClickable ? 'a' : 'div';
  return (
    <article className="case-file">
      <p className="case-file-label mono"><span><b>#</b> {pad(index + 1)} {title}</span><span>Case file</span></p>
      <Window
        className={`case-window${imageClickable ? '' : ' is-static'}`}
        {...(imageClickable ? { href: destination, ...external(destination), 'aria-label': `Open ${title}` } : {})}
        onPointerEnter={playHoverTone}
      >
        <span className="window-bar"><span className="window-brand"><i />{title}</span><span className="window-tags">{tags.slice(0, 3).map((t) => <em key={t}>{windowTag(t)}</em>)}</span></span>
        <span className="window-image"><img {...thumbImage(slug, '(max-width: 900px) 100vw, 50vw')} alt={`${title} preview`} loading={index < 2 ? 'eager' : 'lazy'} /></span>
      </Window>
      <div className="case-file-body">
        <div>
          <h2>{title}</h2>
          <p>{detail?.summary}</p>
        </div>
        <div className="case-file-meta mono">
          <span>{tags.join(' · ')}</span>
          <span>{detail?.role}</span>
          <span>{detail?.year}</span>
        </div>
      </div>
      <div className="case-file-buttons">
        <a className="button-dark" href={destination} {...external(destination)} onPointerEnter={playHoverTone}>View Project <span>↗</span></a>
        {caseStudy && <a className="button-light" href={caseStudy.url} {...external(caseStudy.url)} onPointerEnter={playHoverTone}>Case Study <span>{caseStudy.url.startsWith('http') ? '↗' : '→'}</span></a>}
      </div>
    </article>
  );
}

function WorkPage() {
  return (
    <div className="site" id="top" onClickCapture={playClickTone}>
      <Nav page="work" />
      <main>
        <WorkHero />
        <section className="case-grid" aria-label="Projects">
          {projects.map(([slug, tags, title, url], i) => <CaseFile key={slug} index={i} slug={slug} tags={tags} title={title} url={url} />)}
        </section>
        <Marquee />
        <Education index={2} />
      </main>
      <Contact index={3} />
    </div>
  );
}

export default WorkPage;
