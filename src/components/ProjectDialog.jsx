import { useEffect, useRef } from 'react';
import Button from './Button.jsx';
import Icon from './Icon.jsx';

/** Página de detalhes do projeto, em um <dialog> nativo (Esc fecha, foco fica preso dentro). */
export default function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return undefined;
    if (project && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    }
    if (!project && dialog.open) dialog.close();
    return undefined;
  }, [project]);

  useEffect(() => () => {
    document.body.style.overflow = '';
  }, []);

  const handleClose = () => {
    document.body.style.overflow = '';
    onClose();
  };

  return (
    <dialog
      ref={ref}
      className="dialog"
      aria-labelledby="dialog-title"
      onClose={handleClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
    >
      {project && (
        <div className="dialog__inner">
          <div className="dialog__top">
            <p className={`kind kind--${project.color}`}>{project.kindLabel}</p>
            <button
              type="button"
              className="icon-btn"
              onClick={() => ref.current?.close()}
              aria-label="Fechar detalhes"
            >
              <Icon name="close" />
            </button>
          </div>

          <h3 id="dialog-title" className="dialog__title">
            {project.title}
          </h3>
          {project.example && (
            <p className="dialog__example">
              Projeto de exemplo. Troque este conteúdo pelos dados do seu projeto em{' '}
              <code>src/data/content.js</code>.
            </p>
          )}
          <p className="dialog__lead">{project.summary}</p>

          <div className="dialog__cols">
            <section>
              <h4>O problema</h4>
              <p>{project.problem}</p>
            </section>
            <section>
              <h4>Principais funcionalidades</h4>
              <ul className="bullets">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </section>
          </div>

          <section>
            <h4>Tecnologias</h4>
            <ul className="tags">
              {project.stack.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4>Decisões técnicas</h4>
            <ul className="bullets">
              {project.decisions.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </section>

          <section>
            <h4>Desafios e aprendizados</h4>
            <ul className="bullets">
              {project.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>

          <div className="dialog__actions">
            {project.demoUrl && (
              <Button href={project.demoUrl} icon="external">
                Ver demonstração
              </Button>
            )}
            {project.repoUrl && (
              <Button href={project.repoUrl} variant="secondary" icon="github">
                Ver código no GitHub
              </Button>
            )}
            {!project.demoUrl && !project.repoUrl && (
              <p className="project__nolinks">Este projeto ainda não tem links públicos.</p>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
