import { useEffect, useRef } from 'react';
import Reveal from './Reveal.jsx';

export default function Timeline({ items }) {
  const listRef = useRef(null);

  // A linha colorida cresce conforme a pessoa rola pela trajetória.
  useEffect(() => {
    const el = listRef.current;
    if (!el) return undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const reach = window.innerHeight * 0.65 - rect.top;
      const p = Math.min(1, Math.max(0, reach / rect.height));
      el.style.setProperty('--p', p.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="trajetoria" className="section" aria-labelledby="trajetoria-title">
      <div className="wrap">
        <Reveal className="section__head">
          <h2 id="trajetoria-title" className="section__title">
            Trajetória
          </h2>
          <p className="section__sub">Da formação ao suporte técnico e do suporte ao desenvolvimento.</p>
        </Reveal>

        <ol className="timeline" ref={listRef}>
          {items.map((item) => (
            <Reveal as="li" className={`tl tl--${item.color}`} key={item.title} data-current={item.current || undefined}>
              <div className="tl__when">
                <p className="tl__period">{item.period}</p>
                {item.placeholder && <span className="todo">a preencher</span>}
              </div>
              <span className="tl__marker" aria-hidden="true" />
              <div className="tl__what">
                <p className={`kind kind--${item.color}`}>{item.kind}</p>
                <h3 className="tl__title">{item.title}</h3>
                <p className="tl__place">{item.place}</p>
                <p className="tl__text">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
