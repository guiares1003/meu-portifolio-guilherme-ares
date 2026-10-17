import { useRef } from 'react';
import { usePrefersReducedMotion } from '../hooks/hooks.js';

/**
 * O nome em fonte variável: as letras perto do cursor ficam mais largas, mais pesadas e dão um
 * pequeno salto. Só reage a mouse; com "menos movimento" ativado, o nome fica parado.
 */
export default function WiggleName({ text }) {
  const reduce = usePrefersReducedMotion();
  const wrapRef = useRef(null);
  const centers = useRef([]);
  const frame = useRef(0);

  const measure = () => {
    centers.current = [...wrapRef.current.children].map((el) => {
      const r = el.getBoundingClientRect();
      return r.left + r.width / 2;
    });
  };

  const reset = () => {
    if (!wrapRef.current) return;
    [...wrapRef.current.children].forEach((el) => {
      el.style.fontVariationSettings = '';
      el.style.transform = '';
    });
  };

  const onMove = (e) => {
    if (reduce || e.pointerType !== 'mouse' || !wrapRef.current) return;
    const x = e.clientX;
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      if (!wrapRef.current) return;
      [...wrapRef.current.children].forEach((el, i) => {
        const t = Math.max(0, 1 - Math.abs(x - centers.current[i]) / 190);
        el.style.fontVariationSettings = `"wdth" ${(88 + 12 * t).toFixed(1)}, "wght" ${Math.round(720 + 80 * t)}`;
        el.style.transform = `translateY(${(-0.05 * t).toFixed(3)}em)`;
      });
    });
  };

  return (
    <span
      className="wiggle"
      onPointerEnter={() => {
        if (!reduce) measure();
      }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      <span className="wiggle__letters" ref={wrapRef} aria-hidden="true">
        {[...text].map((ch, i) => (
          <span className="wiggle__letter" key={i}>
            {ch}
          </span>
        ))}
      </span>
      <span className="visually-hidden">{text}</span>
    </span>
  );
}
