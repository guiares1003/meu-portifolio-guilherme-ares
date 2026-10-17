import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

const STEP_MS = 1300;

export default function Skills({ skills }) {
  // step: -1 = parado; 0..n-1 = passo da simulação; n = terminou
  const [step, setStep] = useState(-1);
  const timer = useRef(0);
  const total = skills.flow.length;
  const running = step >= 0 && step < total - 1;

  useEffect(() => () => clearTimeout(timer.current), []);

  const run = () => {
    clearTimeout(timer.current);
    let current = 0;
    setStep(0);
    const tick = () => {
      current += 1;
      if (current < total) {
        setStep(current);
        if (current < total - 1) timer.current = setTimeout(tick, STEP_MS);
      }
    };
    timer.current = setTimeout(tick, STEP_MS);
  };

  const activeLayer = step >= 0 ? skills.flow[step].layer : null;
  const caption =
    step < 0
      ? 'Clique para ver como as camadas trabalham juntas quando alguém salva um dado.'
      : skills.flow[step].text;

  return (
    <section id="habilidades" className="section section--alt" aria-labelledby="habilidades-title">
      <div className="wrap">
        <Reveal className="section__head">
          <h2 id="habilidades-title" className="section__title">
            Habilidades
          </h2>
          <p className="section__sub">
            Uma aplicação Full Stack tem camadas. Estas são as tecnologias que uso em cada uma.
          </p>
        </Reveal>

        <div className="stack">
          <Reveal className="stack__layers">
            {skills.layers.map((layer) => (
              <section
                key={layer.id}
                className={`slab slab--${layer.color}`}
                data-active={activeLayer === layer.id}
                aria-labelledby={`slab-${layer.id}`}
              >
                <div className="slab__label">
                  <h3 id={`slab-${layer.id}`} className="slab__title">
                    {layer.title}
                  </h3>
                  <p className="slab__hint">{layer.hint}</p>
                </div>
                <ul className="slab__items">
                  {layer.items.map((item) => (
                    <li key={item} className="skill">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <div className="stack__sim">
              <button
                type="button"
                className="btn btn--secondary btn--sm"
                onClick={run}
                disabled={running}
              >
                <Icon name={step === total - 1 ? 'refresh' : 'play'} size={16} />
                <span>
                  {running ? 'Simulando…' : step === total - 1 ? 'Simular de novo' : 'Simular um salvamento'}
                </span>
              </button>
              <p className="stack__caption" aria-live="polite">
                {caption}
              </p>
            </div>
          </Reveal>

          <Reveal className="stack__side">
            <section className={`slab slab--${skills.practices.color} slab--tools`}>
              <div className="slab__label">
                <h3 className="slab__title">{skills.practices.title}</h3>
                <p className="slab__hint">{skills.practices.hint}</p>
              </div>
              <ul className="slab__items">
                {skills.practices.items.map((item) => (
                  <li key={item} className="skill">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
