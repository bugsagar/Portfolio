import { useEffect, useMemo, useRef, useState } from 'react';

/* A paper ticket with a perforated stub. Drag the stub sideways (or focus it
   and press Enter) and it tears off along the perforation and falls away;
   "Print a new stub" brings it back. The main part keeps its links working
   the whole time — tearing is decoration, never a gate. */

// How far the stub has to be pulled before letting go tears it, px.
const TEAR_AT = 110;
// How long the falling stub stays on screen before it is removed, ms.
const FALL_MS = 850;

/* A short crackle of filtered noise: paper fibres giving way. Synthesised,
   so there is no audio file to load. */
let audio;
function tearSound() {
  try {
    audio ||= new AudioContext();
    const len = Math.floor(audio.sampleRate * 0.32);
    const buffer = audio.createBuffer(1, len, audio.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < len; i++) {
      // sparse loud clicks over quiet hiss, fading out
      const click = Math.random() > 0.85 ? 1 : 0.2;
      data[i] = (Math.random() * 2 - 1) * click * (1 - i / len) ** 1.5;
    }
    const source = audio.createBufferSource();
    source.buffer = buffer;
    const band = audio.createBiquadFilter();
    band.type = 'bandpass';
    band.frequency.setValueAtTime(2600, audio.currentTime);
    band.frequency.exponentialRampToValueAtTime(900, audio.currentTime + 0.32);
    const gain = audio.createGain();
    gain.gain.value = 0.18;
    source.connect(band).connect(gain).connect(audio.destination);
    source.start();
  } catch {}
}

/* Bars from a string, so the same label always prints the same code. */
function Barcode({ value }) {
  const bars = useMemo(() => {
    let seed = [...value].reduce((h, c) => Math.imul(h ^ c.charCodeAt(0), 16777619), 2166136261) >>> 0;
    const next = () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296);
    const out = [];
    let x = 0;
    for (let i = 0; i < 44; i++) {
      const w = [1, 1, 2, 3][Math.floor(next() * 4)];
      if (i % 2 === 0) out.push([x, w]);
      x += w;
    }
    return { out, total: x };
  }, [value]);
  return (
    <svg className="ticket-barcode" viewBox={`0 0 ${bars.total} 10`} preserveAspectRatio="none" aria-hidden="true">
      {bars.out.map(([x, w]) => <rect key={x} x={x} y="0" width={w} height="10" />)}
    </svg>
  );
}

export default function TearTicket({ main, stub, code = 'TICKET', watermark, micro = code }) {
  const [state, setState] = useState('whole'); // whole | falling | torn
  const [pull, setPull] = useState(0);
  const drag = useRef(null);
  const ticketRef = useRef(null);
  const reprint = useRef(null);
  // a keyboard tear removes the focused stub, so focus moves to the reprint button
  const fromKeyboard = useRef(false);

  useEffect(() => {
    if (state === 'torn' && fromKeyboard.current) reprint.current?.focus();
  }, [state]);

  const tear = (byKeyboard = false) => {
    if (state !== 'whole') return;
    fromKeyboard.current = byKeyboard;
    tearSound();
    setState('falling');
    setPull(0);
    setTimeout(() => setState('torn'), FALL_MS);
  };

  const onPointerDown = (e) => {
    if (state !== 'whole' || e.button !== 0) return;
    drag.current = { x: e.clientX };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!drag.current) return;
    // pulling away is free, pushing back into the ticket barely moves it
    const dx = e.clientX - drag.current.x;
    setPull(dx > 0 ? dx : dx * 0.15);
  };
  const onPointerUp = () => {
    if (!drag.current) return;
    drag.current = null;
    if (pull > TEAR_AT) tear();
    else setPull(0);
  };

  /* The foil and the holographic strip catch the light from wherever the
     pointer is. Written straight to CSS variables, so moving the pointer
     never re-renders the ticket. */
  const tilt = (e) => {
    const el = ticketRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (((e.clientX - r.left) / r.width) * 100).toFixed(1));
    el.style.setProperty('--my', (((e.clientY - r.top) / r.height) * 100).toFixed(1));
  };
  const untilt = () => {
    ticketRef.current?.style.removeProperty('--mx');
    ticketRef.current?.style.removeProperty('--my');
  };

  // While pulled, the stub swings from the bottom of the perforation, so the
  // top separates first, as a real tear starts at one end.
  const stubStyle = state === 'whole' && pull
    ? { transform: `translateX(${pull * 0.55}px) rotate(${Math.min(pull, 160) * 0.06}deg)`, transition: 'none' }
    : undefined;

  return (
    <div className={`ticket is-${state}`} ref={ticketRef} onPointerMove={tilt} onPointerLeave={untilt}>
      <div className="ticket-main">
        {watermark && <span className="ticket-watermark" aria-hidden="true">{watermark}</span>}
        {main}
        <span className="ticket-holo" aria-hidden="true">
          <span className="ticket-holo-micro mono">{Array(14).fill(micro).join('  ·  ')}</span>
        </span>
      </div>
      {state === 'torn' ? (
        <button type="button" className="ticket-reprint mono" ref={reprint} onClick={() => setState('whole')}>
          Print a new stub ↺
        </button>
      ) : (
        <div
          className="ticket-stub"
          style={stubStyle}
          role="button"
          tabIndex={0}
          aria-label="Tear off the ticket stub"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tear(true); } }}
        >
          {stub}
          <Barcode value={code} />
          <p className="ticket-code mono"><span>{code}</span><span className="ticket-hint">drag to tear →</span></p>
        </div>
      )}
    </div>
  );
}
