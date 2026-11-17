import { useEffect, useState } from 'react';

/* Click-to-enlarge for case study screens. An image is [assetName, alt] or
   [assetName, alt, 'tall']; assetName is the WebP base name under /assets,
   e.g. 'prism/home'. Tall screens scroll inside the lightbox. */

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
