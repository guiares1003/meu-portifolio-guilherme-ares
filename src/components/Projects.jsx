import { useMemo, useState } from 'react';
import ProjectRow from './ProjectRow.jsx';
import ProjectDialog from './ProjectDialog.jsx';
import Reveal from './Reveal.jsx';

export default function Projects({ projects, kinds }) {
  const [filter, setFilter] = useState('todos');
  const [selected, setSelected] = useState(null);

  const counts = useMemo(() => {
    const c = { todos: projects.length };
    projects.forEach((p) => {
      c[p.kind] = (c[p.kind] || 0) + 1;
    });
    return c;
  }, [projects]);

  const visible = filter === 'todos' ? projects : projects.filter((p) => p.kind === filter);
  const hasExamples = projects.some((p) => p.example);

  return (
    <section id="projetos" className="section" aria-labelledby="projetos-title">
      <div className="wrap">
        <Reveal className="section__head section__head--row">
          <div>
            <h2 id="projetos-title" className="section__title">
              Projetos
            </h2>
            <p className="section__sub">
              Cada projeto tem o problema que resolve, as decisões técnicas e o que deu trabalho no caminho.
            </p>
          </div>

          <div className="filters" role="group" aria-label="Filtrar projetos por tipo">
            {kinds
              .filter((k) => counts[k.id])
              .map((k) => (
                <button
                  key={k.id}
                  type="button"
                  className="chip"
                  aria-pressed={filter === k.id}
                  onClick={() => setFilter(k.id)}
                >
                  {k.label}
                  <span className="chip__count">{counts[k.id]}</span>
                </button>
              ))}
          </div>
        </Reveal>

        {hasExamples && (
          <p className="notice">
            Os projetos abaixo são exemplos. Troque pelos seus em <code>src/data/content.js</code>.
          </p>
        )}

        <p className="visually-hidden" aria-live="polite">
          {visible.length === 1 ? '1 projeto exibido' : `${visible.length} projetos exibidos`}
        </p>

        <ul className="projects">
          {visible.map((p) => (
            <ProjectRow key={p.id} project={p} onOpen={setSelected} />
          ))}
        </ul>
      </div>

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
