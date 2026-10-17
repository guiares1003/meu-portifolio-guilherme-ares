import Reveal from './Reveal.jsx';

function Shape({ shape, color }) {
  return <span className={`shape shape--${shape} shape--${color}`} aria-hidden="true" />;
}

export default function About({ about }) {
  return (
    <section id="sobre" className="section section--alt" aria-labelledby="sobre-title">
      <div className="wrap">
        <Reveal className="section__head">
          <h2 id="sobre-title" className="section__title">
            {about.title}
          </h2>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__prose">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <Reveal as="aside" className="about__facts" aria-label="Ficha rápida">
            <dl className="facts">
              {about.facts.map((f) => (
                <div className="facts__row" key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>
                    {f.value}
                    {f.placeholder && <span className="todo">a preencher</span>}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <ul className="strengths">
          {about.strengths.map((s) => (
            <Reveal as="li" className="strength" key={s.title}>
              <h3 className="strength__title">
                <Shape shape={s.shape} color={s.color} />
                {s.title}
              </h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
