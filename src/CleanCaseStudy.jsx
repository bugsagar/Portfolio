import { useEffect, useMemo, useRef, useState } from 'react';
import { caseStudyUrl, email, external, playHoverTone, projectDestination, responsiveImage, workPageUrl } from './site.jsx';
import { useLightbox } from './caseStudyKit.jsx';

/* A quiet, document-like case study: a sticky section list with a Full /
   TL;DR switch on the left, label-left rows and grey image stages on the
   right. Every section is optional and driven by a study data file in
   src/studies/; a section with no data is left out of the page and the list. */

const SECTIONS = [
  ['overview', 'Overview'],
  ['goals', 'Goals'],
  ['userbase', 'Userbase'],
  ['research', 'Research'],
  ['audit', 'Audit'],
  ['exploration', 'Exploration'],
  ['workflow', 'Workflow'],
  ['features', 'Key Features'],
  ['language', 'Visual Language'],
  ['outcomes', 'Outcomes'],
];
// TL;DR keeps the header, a three-line summary, the workflow and what shipped.
const TLDR_SECTIONS = ['overview', 'tldr', 'workflow', 'outcomes'];

function readTime(study) {
  const words = JSON.stringify(study).replace(/"[a-z]+\/[a-z0-9-]+"/g, '').split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function useActive(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      let current = ids[0];
      ids.forEach((id) => {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top < window.innerHeight * 0.4) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids]);
  return active;
}

function Img({ image, sizes, className = '', onOpen, eager = false }) {
  const [name, alt] = image;
  return (
    <button type="button" className={`clean-img ${className}`} onClick={() => onOpen(image)} aria-label={`Enlarge: ${alt}`}>
      <img {...responsiveImage(name, sizes)} alt={alt} loading={eager ? 'eager' : 'lazy'} />
    </button>
  );
}

// wide rows put the label above, giving the content the full column
function Row({ label, children, wide = false }) {
  return (
    <div className={`clean-row${wide ? ' is-wide' : ''}`}>
      <h2>{label}</h2>
      <div>{children}</div>
    </div>
  );
}

function Header({ study, project, readMinutes, onOpen }) {
  const [slug, , title, url] = project;
  const destination = projectDestination(slug, url);
  const [before, highlight, after] = study.intro;
  return (
    <header className="clean-section clean-header" id="overview">
      <h1>{title}</h1>
      <p className="clean-subtitle">{study.subtitle}</p>
      <p className="clean-intro">{before}<span className="clean-mark">{highlight}</span>{after}</p>
      <div className="clean-meta">
        {study.meta.map(([k, v]) => <div key={k}><span>{k}</span><strong>{v}</strong></div>)}
        <div className="clean-meta-end">
          <span className="clean-pill">{readMinutes}</span>
          <a className="clean-pill is-link" href={destination} {...external(destination)} onPointerEnter={playHoverTone}>View project ↗</a>
        </div>
      </div>
      <div className="clean-stage is-hero">
        <Img image={study.hero} sizes="(max-width: 900px) 100vw, 75vw" onOpen={onOpen} eager />
      </div>
      {study.note && <p className="clean-note">{study.note}</p>}
      {study.challenge && <Row label="Challenge"><p className="clean-body">{study.challenge}</p></Row>}
    </header>
  );
}

function Goals({ goals }) {
  return (
    <section className="clean-section" id="goals">
      <Row label="Design goals" wide>
        <div className={`clean-goals${goals.length === 4 ? ' is-four' : ''}`}>
          {goals.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </Row>
    </section>
  );
}

function Userbase({ data }) {
  return (
    <section className="clean-section" id="userbase">
      <h2 className="clean-h2">{data.title}</h2>
      <p className="clean-body">{data.intro}</p>
      <div className="clean-users">
        {data.users.map((u, i) => (
          <article key={u.title}>
            <p className="clean-user-type">User type {i + 1}</p>
            <div className="clean-user-body">
              <span className="clean-user-icon" aria-hidden="true">{u.icon}</span>
              <h3>{u.title}</h3>
              <p>{u.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Research({ data }) {
  return (
    <section className="clean-section" id="research">
      <h2 className="clean-h2">{data.title}</h2>
      <p className="clean-body">{data.intro}</p>
      <div className="clean-research">
        <div className="clean-card">
          <p className="clean-chip">{data.questionsTitle}</p>
          <ul className="clean-questions">{data.questions.map((q) => <li key={q}>“{q}”</li>)}</ul>
        </div>
        <div className="clean-card">
          <p className="clean-chip">{data.painTitle}</p>
          <p className="clean-card-sub">{data.painSub}</p>
          <div className="clean-stickies">
            {data.pains.map((p, i) => (
              <div key={p.title} className={`clean-sticky is-${p.tone}`} style={{ '--tilt': `${[-1.5, 1.2, 1, -1][i % 4]}deg` }}>
                {p.star && <span className="clean-star" aria-hidden="true">★</span>}
                <h4>{p.title}</h4>
                <ul>{p.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* A screen with numbered pins and, below it, the matching notes. Hovering a
   note lights up its pin. */
function Audit({ data, onOpen }) {
  const [hot, setHot] = useState(-1);
  return (
    <section className="clean-section" id="audit">
      <h2 className="clean-h2">{data.title}</h2>
      <p className="clean-body">{data.intro}</p>
      <div className="clean-stage is-audit">
        <div className="clean-audit">
          <Img image={data.image} sizes="(max-width: 900px) 100vw, 75vw" onOpen={onOpen} />
          {data.notes.map((n, i) => (
            <span key={n.title} className={`clean-pin${hot === i ? ' is-hot' : ''}`} style={{ left: `${n.x}%`, top: `${n.y}%` }} aria-hidden="true">{i + 1}</span>
          ))}
        </div>
        <ol className="clean-notes">
          {data.notes.map((n, i) => (
            <li key={n.title} onPointerEnter={() => setHot(i)} onPointerLeave={() => setHot(-1)}>
              <span className="clean-note-num">{i + 1}</span>
              <div>
                <span className="clean-note-label">Notes</span>
                <h4>{n.title}</h4>
                <ul>{n.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Exploration({ data, onOpen }) {
  return (
    <section className="clean-section" id="exploration">
      <h2 className="clean-h2">{data.title}</h2>
      <p className="clean-body">{data.intro}</p>
      <div className="clean-stage clean-explore">
        {data.options.map((o, i) => (
          <div key={o.tag}>
            <span className={`clean-tag is-${i === 0 ? 'rose' : 'green'}`}>{o.tag}</span>
            <p>{o.copy}</p>
            <Img image={o.image} sizes="(max-width: 900px) 100vw, 38vw" className="is-framed is-crop" onOpen={onOpen} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* The end-to-end workflow: a map of stages (the last one loops back), and
   for the stage in focus who does what, the decision it turns on, the
   states designed for it, why it works that way, and its screen. */
const ACTOR = { user: 'You', system: 'System' };

function Workflow({ data, onOpen }) {
  const [at, setAt] = useState(0);
  const stages = data.stages;
  const s = stages[at];
  const mapRef = useRef(null);
  // on phones the map scrolls sideways: keep the current stage in view
  useEffect(() => {
    const map = mapRef.current;
    const dot = map?.children[at];
    if (!map || !dot || map.scrollWidth <= map.clientWidth) return;
    map.scrollLeft = dot.offsetLeft - map.clientWidth / 2 + dot.offsetWidth / 2;
  }, [at]);
  const counts = [
    [stages.length, 'stages'],
    [stages.filter((x) => x.decision).length, 'decision points'],
    [stages.reduce((n, x) => n + (x.states?.length || 0), 0), 'states designed'],
  ];
  return (
    <section className="clean-section" id="workflow">
      <h2 className="clean-h2">{data.title}</h2>
      <p className="clean-body">{data.intro}</p>
      <ul className="clean-flow-count">{counts.map(([n, l]) => <li key={l}><strong>{n}</strong> {l}</li>)}</ul>

      <ol className="clean-flow-map" ref={mapRef} style={{ '--n': stages.length }}>
        {stages.map((x, i) => (
          <li key={x.label} className={i === at ? 'is-on' : i < at ? 'is-past' : ''}>
            <button type="button" onClick={() => setAt(i)} aria-pressed={i === at}>
              <span className="clean-flow-dot">{String(i + 1).padStart(2, '0')}</span>
              <span className="clean-flow-label">{x.label}</span>
            </button>
          </li>
        ))}
      </ol>
      {data.loop && <p className="clean-flow-loop"><span aria-hidden="true">↺</span> {data.loop}</p>}

      <div className="clean-flow-stage">
        <div className="clean-flow-detail" key={s.label}>
          <p className="clean-chip">Stage {at + 1} of {stages.length}</p>
          <h3>{s.label}</h3>
          <p className="clean-flow-goal">{s.goal}</p>

          <ol className="clean-flow-steps">
            {s.steps.map(([actor, text]) => (
              <li key={text}><span className={`clean-actor is-${actor}`}>{ACTOR[actor]}</span><span>{text}</span></li>
            ))}
          </ol>

          {s.decision && (
            <div className="clean-flow-decision">
              <p><span aria-hidden="true">◆</span> {s.decision.q}</p>
              <ul>
                {s.decision.branches.map(([label, outcome]) => (
                  <li key={label}><strong>{label}</strong><span>{outcome}</span></li>
                ))}
              </ul>
            </div>
          )}

          {s.states && (
            <div className="clean-flow-states">
              <p className="clean-note-label">States designed</p>
              <ul>{s.states.map(([name, copy]) => <li key={name}><strong>{name}</strong><span>{copy}</span></li>)}</ul>
            </div>
          )}

          {s.why && <p className="clean-flow-why"><strong>Why</strong>{s.why}</p>}

          <div className="clean-flow-nav">
            <button type="button" onClick={() => setAt(at - 1)} disabled={at === 0}>← Previous</button>
            <button type="button" onClick={() => setAt(at + 1)} disabled={at === stages.length - 1}>Next stage →</button>
          </div>
        </div>
        <div className="clean-stage clean-flow-screen">
          <Img key={s.image[0]} image={s.image} sizes="(max-width: 900px) 100vw, 40vw" className="is-framed is-fade" onOpen={onOpen} />
        </div>
      </div>
    </section>
  );
}

function Features({ features, onOpen }) {
  const [active, setActive] = useState(0);
  const f = features[active];
  return (
    <section className="clean-section" id="features">
      <h2 className="clean-h2">Key Features</h2>
      <div className="clean-features">
        <ol>
          {features.map((item, i) => (
            <li key={item.title}>
              <button type="button" className={i === active ? 'is-active' : ''} onClick={() => setActive(i)} onPointerEnter={() => { setActive(i); }} aria-pressed={i === active}>
                <strong>{item.title}</strong>
                <span>{item.copy}</span>
              </button>
            </li>
          ))}
        </ol>
        <div className="clean-stage clean-feature-stage">
          <Img key={f.image[0]} image={f.image} sizes="(max-width: 900px) 100vw, 45vw" className="is-framed is-crop is-fade" onOpen={onOpen} />
        </div>
      </div>
    </section>
  );
}

function Language({ data }) {
  return (
    <section className="clean-section" id="language">
      <Row label="Visual language">
        <p className="clean-body">{data.intro}</p>
        <div className="clean-palette">
          {data.palette.map(([name, value, note]) => (
            <div key={name}>
              <span className="clean-swatch" style={{ background: value }} />
              <strong>{name}</strong>
              <span>{note || value}</span>
            </div>
          ))}
        </div>
        {data.type && <p className="clean-type"><strong>Aa</strong><span>{data.type}</span></p>}
      </Row>
    </section>
  );
}

function Outcomes({ data }) {
  return (
    <section className="clean-section" id="outcomes">
      <h2 className="clean-h2">{data.title}</h2>
      <p className="clean-body">{data.intro}</p>
      <div className="clean-outcomes">
        {data.items.map(([title, copy], i) => (
          <article key={title}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      {data.validate && <Row label="Next to validate"><p className="clean-body">{data.validate}</p></Row>}
    </section>
  );
}

function Tldr({ rows }) {
  return (
    <section className="clean-section" id="tldr">
      {rows.map(([label, text]) => <Row key={label} label={label}><p className="clean-body">{text}</p></Row>)}
    </section>
  );
}

function MoreWork({ more }) {
  return (
    <section className="clean-section" id="more">
      <h2 className="clean-h2">More of My Work</h2>
      {more.length ? (
        <ol className="clean-more">
          {more.map(([slug, title, summary], i) => (
            <li key={slug}>
              <a href={caseStudyUrl(slug)} onPointerEnter={playHoverTone}>
                <span className="clean-more-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="clean-more-text"><strong>{title}</strong><span>{summary}</span></span>
                <span className="clean-more-cta">View Case Study →</span>
              </a>
            </li>
          ))}
        </ol>
      ) : (
        <p className="clean-body">The other case studies are shared on request — <a href={`mailto:${email}?subject=${encodeURIComponent('Case study access')}`}>email me</a>.</p>
      )}
    </section>
  );
}

export default function CleanCaseStudy({ study, project, more = [] }) {
  const [mode, setMode] = useState('full');
  const { show, lightbox } = useLightbox();
  const readMinutes = useMemo(() => readTime(study), [study]);

  const present = SECTIONS.filter(([id]) => {
    if (id === 'overview') return true;
    if (id === 'language') return study.language;
    return study[id];
  });
  const nav = mode === 'tldr'
    ? [['overview', 'Overview'], ['tldr', 'TL;DR'], ...present.filter(([id]) => TLDR_SECTIONS.includes(id) && id !== 'overview')]
    : present;
  const ids = useMemo(() => nav.map(([id]) => id), [nav.map(([id]) => id).join()]); // eslint-disable-line react-hooks/exhaustive-deps
  const active = useActive(ids);
  const navRef = useRef(null);
  // on phones the list is a sideways strip: keep the current section's pill in view
  useEffect(() => {
    const strip = navRef.current;
    const link = strip?.querySelector('.is-active');
    if (!strip || !link || strip.scrollWidth <= strip.clientWidth) return;
    // set directly: a smooth scroll here would cancel the page's own smooth scroll
    strip.scrollLeft = link.offsetLeft - strip.clientWidth / 2 + link.offsetWidth / 2;
  }, [active]);

  const switchMode = (next) => {
    setMode(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="clean-study">
      <aside className="clean-side">
        <a className="clean-back" href={workPageUrl}>← Back</a>
        <div className="clean-toggle" role="group" aria-label="Case study length">
          <button type="button" className={mode === 'full' ? 'is-on' : ''} onClick={() => switchMode('full')} aria-pressed={mode === 'full'}>Full</button>
          <button type="button" className={mode === 'tldr' ? 'is-on' : ''} onClick={() => switchMode('tldr')} aria-pressed={mode === 'tldr'}>TL;DR</button>
        </div>
        <nav aria-label="In this case study" ref={navRef}>
          {nav.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''}>{label}</a>)}
        </nav>
      </aside>

      <div className="clean-main">
        <Header study={study} project={project} readMinutes={readMinutes} onOpen={show} />
        {mode === 'tldr' ? (
          <>
            <Tldr rows={study.tldr} />
            {study.workflow && <Workflow data={study.workflow} onOpen={show} />}
            <Outcomes data={study.outcomes} />
          </>
        ) : (
          <>
            {study.goals && <Goals goals={study.goals} />}
            {study.userbase && <Userbase data={study.userbase} />}
            {study.research && <Research data={study.research} />}
            {study.audit && <Audit data={study.audit} onOpen={show} />}
            {study.exploration && <Exploration data={study.exploration} onOpen={show} />}
            {study.workflow && <Workflow data={study.workflow} onOpen={show} />}
            <Features features={study.features} onOpen={show} />
            {study.language && <Language data={study.language} />}
            <Outcomes data={study.outcomes} />
          </>
        )}
        <MoreWork more={more} />
      </div>
      {lightbox}
    </div>
  );
}
