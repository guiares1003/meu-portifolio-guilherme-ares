import Button from './Button.jsx';
import ProjectArt from './ProjectArt.jsx';
import Reveal from './Reveal.jsx';

export default function ProjectRow({ project, onOpen }) {
  return (
    <Reveal as="li" className="project">
      <div className="project__media">
        <ProjectArt name={project.art} color={project.color} />
        {project.example && <span className="sticker">Exemplo</span>}
      </div>

      <div className="project__body">
        <p className={`kind kind--${project.color}`}>{project.kindLabel}</p>
        <h3 className="project__title">{project.title}</h3>
        <p className="project__summary">{project.summary}</p>
        <p className="project__problem">
          <strong>Problema que resolve:</strong> {project.problem}
        </p>

        <ul className="tags" aria-label="Tecnologias utilizadas">
          {project.stack.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>

        <div className="project__actions">
          <Button size="sm" iconAfter="arrow" onClick={() => onOpen(project)}>
            Ver detalhes
          </Button>
          {project.demoUrl && (
            <Button size="sm" variant="secondary" href={project.demoUrl} icon="external">
              Demonstração
            </Button>
          )}
          {project.repoUrl && (
            <Button size="sm" variant="ghost" href={project.repoUrl} icon="github">
              Código
            </Button>
          )}
          {!project.demoUrl && !project.repoUrl && (
            <span className="project__nolinks">Links públicos em breve</span>
          )}
        </div>
      </div>
    </Reveal>
  );
}
