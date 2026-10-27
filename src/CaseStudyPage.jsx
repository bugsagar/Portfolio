import { useEffect, useState } from 'react';
import { caseStudies } from './caseStudies.js';
import {
  Contact, Nav, SectionLabel, caseStudyUrl, external, lockedCaseStudies, pad, playClickTone, playHoverTone,
  projectDestination, projects, thumbImage, windowTag, workPageUrl,
} from './site.jsx';

const sections = [
  ['overview', 'Overview'],
  ['problem', 'The Problem'],
  ['approach', 'Approach'],
  ['design-decisions', 'Design Decisions'],
  ['outcomes', 'Outcomes'],
  ['key-learnings', 'Key Learnings'],
];
const imageCrops = ['center 20%', 'center 55%', 'center 90%'];

export function slugFromPath(pathname) {
  return pathname.replace(/\/+$/, '').split('/').pop();
}

function Accent({ parts }) {
  return <>{parts[0]}<span className="accent">{parts[1]}</span></>;
}

function useActiveSection() {
  const [active, setActive] = useState(sections[0][0]);
  useEffect(() => {
    const onScroll = () => {
      let current = sections[0][0];
      sections.forEach(([id]) => {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top < window.innerHeight * 0.35) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return active;
}

function CaseHero({ project, study }) {
  const [slug, tags, title, url] = project;
  const destination = projectDestination(slug, url);
  return (
    <section className="cs-hero">
      <p className="breadcrumb mono"><a href={workPageUrl}>← All work</a> <span>/</span> <strong>{title}</strong></p>
      <div className="cs-hero-grid">
        <div>
          <h1>{title}</h1>
          <h2>{study.subtitle}</h2>
          <p>{study.intro}</p>
          <a className="button-dark" href={destination} {...external(destination)} onPointerEnter={playHoverTone}>View Project <span>↗</span></a>
        </div>
        <dl className="cs-meta">
          <div><dt className="mono">COMPANY</dt><dd>{study.company}</dd></div>
          <div><dt className="mono">ROLE</dt><dd>{study.role}</dd></div>
          <div><dt className="mono">TIMELINE</dt><dd>{study.timeline}</dd></div>
          <div><dt className="mono">SKILLS</dt><dd>{study.skills.join(', ')}</dd></div>
        </dl>
      </div>
      <figure className="cs-visual">
        <figcaption className="mono"><span><b>#</b> {title} · {tags.map(windowTag).join(' · ')}</span><span>Flat: composed screens</span></figcaption>
        <div className="cs-visual-frame"><img {...thumbImage(slug, '100vw')} alt={`${title} overview`} fetchPriority="high" /></div>
      </figure>
      <div className="tag-list mono">{tags.map((t) => <span key={t}>{t}</span>)}</div>
      <div className="cs-highlights">
        {study.highlights.map((h) => <div key={h.value}><strong>{h.value}</strong><span>{h.label}</span></div>)}
      </div>
    </section>
  );
}

function Overview({ study }) {
  const o = study.overview;
  return (
    <section className="cs-section" id="overview">
      <SectionLabel index={1}>OVERVIEW</SectionLabel>
      <h2 className="cs-heading">{o.heading}</h2>
      <div className="cs-split">
        <div>
          <p className="cs-lead">{o.lead}</p>
          <p className="cs-body">{o.body}</p>
        </div>
        <aside className="cs-aside">
          <div className="cs-role"><span className="mono">MY ROLE</span><p>{o.myRole}</p></div>
          <div className="cs-callout"><span className="mono">DESIGN OPPORTUNITY</span><p>{o.opportunity}</p></div>
          <p className="cs-mini-label mono">SKILLS IN THIS PROJECT</p>
          <div className="chip-list">{study.skills.map((s) => <span key={s}>{s}</span>)}</div>
        </aside>
      </div>
    </section>
  );
}

function Problem({ study }) {
  const p = study.problem;
  return (
    <section className="cs-section" id="problem">
      <SectionLabel index={2}>THE PROBLEM</SectionLabel>
      <h2 className="cs-heading">{p.heading}</h2>
      <p className="cs-lead strong">{p.lead}</p>
      <p className="cs-large">{p.body}</p>
      <div className="cs-split cs-problem-split">
        <p className="cs-body small">{p.research}</p>
        <p className="cs-quote"><Accent parts={p.quote} /></p>
      </div>
      <div className="cs-question"><span className="mono">GUIDING QUESTION</span><p>{p.question}</p></div>
    </section>
  );
}

function Approach({ study }) {
  const a = study.approach;
  return (
    <section className="cs-section" id="approach">
      <SectionLabel index={3}>APPROACH</SectionLabel>
      <h2 className="cs-heading">{a.heading}</h2>
      <p className="cs-statement">{a.statement}</p>
      <ol className="cs-steps">
        {a.steps.map((s, i) => (
          <li key={s.title}>
            <span className="cs-step-dot mono">{pad(i + 1)}</span>
            <h3>{s.title}</h3>
            <p>{s.copy}</p>
            <em className="mono">→ {s.tag}</em>
          </li>
        ))}
      </ol>
      <p className="cs-body">{a.closing}</p>
    </section>
  );
}

function Decisions({ study, slug, title }) {
  const d = study.decisions;
  return (
    <section className="cs-section" id="design-decisions">
      <SectionLabel index={4}>DESIGN DECISIONS</SectionLabel>
      <h2 className="cs-heading">{d.heading}</h2>
      <p className="cs-body cs-intro">{d.intro}</p>
      {d.items.map((item, i) => (
        <article className="cs-decision" key={item.title}>
          <div className="cs-decision-copy">
            <p className="cs-decision-tag mono"><span>{String.fromCharCode(65 + i)}</span> · {item.tag}</p>
            <h3>{item.title}</h3>
            {item.body.map((b) => <p key={b} className="cs-body small">{b}</p>)}
            <div className="cs-callout"><span className="mono">DESIGN DECISION</span><p>{item.decision}</p></div>
            <div className="cs-notes">
              {item.notes.map((n, j) => (
                <div key={n.title}><span className="cs-marker mono">{String.fromCharCode(65 + j)}</span><h4>{n.title}</h4><p>{n.copy}</p></div>
              ))}
            </div>
            <p className="cs-toward"><span className="mono">DESIGNED TOWARD</span>{item.toward}</p>
          </div>
          <figure className="cs-decision-visual">
            <div className="cs-decision-frame">
              <img {...(item.image ? { src: item.image } : thumbImage(slug, '(max-width: 900px) 100vw, 50vw'))} alt={`${title}: ${item.title}`} loading="lazy" style={{ objectPosition: imageCrops[i % imageCrops.length] }} />
              <span className="cs-pin mono" style={{ top: '18%', left: '12%' }}>A</span>
              <span className="cs-pin mono" style={{ top: '58%', left: '64%' }}>B</span>
            </div>
            <figcaption className="mono">{item.tag.split('·').pop().trim().toUpperCase()}</figcaption>
          </figure>
        </article>
      ))}
    </section>
  );
}

function Outcomes({ study }) {
  const o = study.outcomes;
  return (
    <section className="cs-section" id="outcomes">
      <SectionLabel index={5}>OUTCOMES</SectionLabel>
      <h2 className="cs-heading">{o.heading}</h2>
      <div className="cs-outcomes">
        {o.items.map((item) => <div key={item.label}><strong>{item.value}</strong><h3>{item.label}</h3><p>{item.copy}</p></div>)}
      </div>
      <p className="cs-closing"><Accent parts={o.closing} /></p>
    </section>
  );
}

function Learnings({ study }) {
  const l = study.learnings;
  return (
    <section className="cs-section" id="key-learnings">
      <SectionLabel index={6}>KEY LEARNINGS</SectionLabel>
      <h2 className="cs-heading">{l.heading}</h2>
      <div className="cs-lessons">
        {l.items.map((item, i) => <div key={item.title}><span className="mono"><b>{pad(i + 1)}</b> LESSON</span><h3>{item.title}</h3><p>{item.copy}</p></div>)}
      </div>
      <p className="cs-closing"><Accent parts={l.closing} /></p>
    </section>
  );
}

function MoreWork({ slug }) {
  const others = projects.filter(([s]) => s !== slug && caseStudies[s] && !lockedCaseStudies.has(s));
  return (
    <section className="cs-more section">
      <div className="cs-more-head">
        <div>
          <SectionLabel index={7}>KEEP READING</SectionLabel>
          <h2 className="display">Explore more work</h2>
        </div>
        <a className="text-link" href={workPageUrl}>All work <span>→</span></a>
      </div>
      <div className="cs-more-grid">
        {others.map(([s, tags, title]) => (
          <a key={s} className="lab-card" href={caseStudyUrl(s)} onPointerEnter={playHoverTone}>
            <div className="lab-image"><img {...thumbImage(s, '(max-width: 640px) 100vw, 33vw')} alt={`${title} preview`} loading="lazy" /></div>
            <p className="lab-meta mono"><span>{tags.join(' · ')}</span></p>
            <h3>{title}</h3>
            <p className="cs-more-link">View Case File ↗</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function CaseStudyPage({ slug }) {
  const project = projects.find(([s]) => s === slug);
  // a locked study has no public page: opening its URL falls back to /work
  const study = lockedCaseStudies.has(slug) ? undefined : caseStudies[slug];
  const active = useActiveSection();

  useEffect(() => {
    if (project && study) document.title = `${project[2]} case study · Sagar Manohar`;
    else window.location.replace(workPageUrl);
  }, [project, study]);

  if (!project || !study) return null;
  const title = project[2];

  return (
    <div className="site" id="top" onClickCapture={playClickTone}>
      <Nav page="work" />
      <main>
        <CaseHero project={project} study={study} />
        <div className="cs-layout">
          <nav className="cs-toc" aria-label="In this project">
            <p className="mono">IN THIS PROJECT</p>
            <ol>
              {sections.map(([id, label], i) => (
                <li key={id}><a href={`#${id}`} className={active === id ? 'is-active' : ''}><span className="mono">{pad(i + 1)}</span>{label}</a></li>
              ))}
            </ol>
          </nav>
          <div className="cs-content">
            <Overview study={study} />
            <Problem study={study} />
            <Approach study={study} />
            <Decisions study={study} slug={slug} title={title} />
            <Outcomes study={study} />
            <Learnings study={study} />
          </div>
        </div>
        <MoreWork slug={slug} />
      </main>
      <Contact index={8} />
    </div>
  );
}

export default CaseStudyPage;
