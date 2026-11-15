import { useEffect, useState } from 'react';
import { external, pad, playHoverTone, projectDestination, responsiveImage, windowTag, workPageUrl } from './site.jsx';

/* Building blocks for the hand-built case study pages (Prism, Adroom,
   Visibility). An image is [assetName, alt] or [assetName, alt, 'tall'];
   assetName is the WebP base name under /assets, e.g. 'prism/home'. */

export function useLightbox() {
  const [open, setOpen] = useState(null);
  return { open, show: setOpen, lightbox: <Lightbox image={open} onClose={() => setOpen(null)} /> };
}

function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);
  if (!image) return null;
  const [name, alt, shape] = image;
  return (
    <div className={`cs-lightbox${shape === 'tall' ? ' is-tall' : ''}`} role="dialog" aria-modal="true" aria-label={alt} onClick={onClose}>
      <button type="button" className="cs-lightbox-close mono" onClick={onClose} autoFocus>Close ✕</button>
      <img src={`/assets/${name}.webp`} alt={alt} onClick={(e) => e.stopPropagation()} />
      <p className="mono">{alt}</p>
    </div>
  );
}

/* A product screen in a canvas frame. Clicking opens it full size. */
export function Screen({ image, label, caption, sizes = '(max-width: 900px) 100vw, 70vw', className = '', onOpen }) {
  const [name, alt] = image;
  return (
    <figure className={`cs-screen ${className}`}>
      {label && <figcaption className="mono"><span><b>#</b> {label}</span><span>Click to enlarge ⤢</span></figcaption>}
      <button type="button" className="cs-screen-frame" onClick={() => onOpen(image)} onPointerEnter={playHoverTone} aria-label={`Enlarge: ${alt}`}>
        <img {...responsiveImage(name, sizes)} alt={alt} loading="lazy" />
      </button>
      {caption && <p className="cs-screen-caption">{caption}</p>}
    </figure>
  );
}

/* Cards in a row. items: [title, copy] or, when numbered, [label, title, copy]. */
export function Cards({ items, dark = false, numbered = false, cols = 3 }) {
  return (
    <div className={`cs-three${dark ? ' is-dark' : ''}${cols === 4 ? ' is-four' : ''}`}>
      {items.map(([a, b, c]) => (
        <article className="cs-card" key={a}>
          {numbered && <span className="mono">{a}</span>}
          <h3>{numbered ? b : a}</h3>
          {(numbered ? c : b) && <p>{numbered ? c : b}</p>}
        </article>
      ))}
    </div>
  );
}

/* One large dark principle card beside two smaller ones. items: [label, title, copy] */
export function Principles({ items }) {
  const [feature, ...rest] = items;
  return (
    <div className="cs-principles">
      <article className="cs-card is-feature">
        <span className="mono">{feature[0]}</span>
        <h3>{feature[1]}</h3>
        <p>{feature[2]}</p>
      </article>
      <div className="cs-principles-stack">
        {rest.map(([label, title, copy]) => (
          <article className="cs-card" key={label}>
            <span className="mono">{label}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

/* A numbered journey. steps: [title, copy, tag?]; accent marks one step. */
export function Steps({ steps, accent = -1 }) {
  return (
    <ol className={`cs-steps is-${steps.length}`}>
      {steps.map(([title, copy, tag], i) => (
        <li key={title} className={i === accent ? 'is-accent' : ''}>
          <span className="cs-step-dot mono">{pad(i + 1)}</span>
          <h3>{title}</h3>
          <p>{copy}</p>
          {tag && <em className="mono">→ {tag}</em>}
        </li>
      ))}
    </ol>
  );
}

/* Colour swatches. items: [name, value, note?]; value may be any CSS background. */
export function Palette({ items }) {
  return (
    <div className="cs-palette">
      {items.map(([name, value, note, pale]) => (
        <div key={name} className={pale ? 'is-pale' : ''} style={{ background: value }}>
          <strong>{name}</strong><span className="mono">{note || value}</span>
        </div>
      ))}
    </div>
  );
}

/* Page header shared by the hand-built studies. */
export function StudyHero({ project, subtitle, intro, meta, image, kicker, highlights }) {
  const [slug, tags, title, url] = project;
  const destination = projectDestination(slug, url);
  const { show, lightbox } = useLightbox();
  return (
    <section className="cs-hero">
      <p className="breadcrumb mono"><a href={workPageUrl}>← All work</a> <span>/</span> <strong>{title}</strong></p>
      <div className="cs-hero-grid">
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{intro}</p>
          <a className="button-dark" href={destination} {...external(destination)} onPointerEnter={playHoverTone}>View Project <span>↗</span></a>
        </div>
        <dl className="cs-meta">
          {meta.map(([k, v]) => <div key={k}><dt className="mono">{k.toUpperCase()}</dt><dd>{v}</dd></div>)}
        </dl>
      </div>
      <figure className="cs-visual">
        <figcaption className="mono"><span><b>#</b> {title} · {tags.map(windowTag).join(' · ')}</span><span>{kicker}</span></figcaption>
        <button type="button" className="cs-visual-frame cs-visual-button" onClick={() => show(image)} aria-label={`Enlarge: ${image[1]}`}>
          <img {...responsiveImage(image[0], '100vw')} className="is-natural" alt={image[1]} fetchPriority="high" />
        </button>
      </figure>
      <div className="tag-list mono">{tags.map((t) => <span key={t}>{t}</span>)}</div>
      <div className="cs-highlights">
        {highlights.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
      </div>
      {lightbox}
    </section>
  );
}
