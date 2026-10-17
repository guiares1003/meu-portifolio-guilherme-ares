import Button from './Button.jsx';
import WiggleName from './WiggleName.jsx';
import TicketDemo from './TicketDemo.jsx';

export default function Hero({ profile, links }) {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <h1 id="hero-title" className="hero__title">
          <span className="hero__hello">
            Olá! Sou
            <svg className="hero__spark" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
              <path d="M20 2 L24.5 15.5 L38 20 L24.5 24.5 L20 38 L15.5 24.5 L2 20 L15.5 15.5 Z" />
            </svg>
          </span>
          <WiggleName text={profile.name} />
          <span className="visually-hidden">, {profile.role}</span>
        </h1>

        <div className="hero__grid">
          <div className="hero__copy">
            <p className="hero__lead">{profile.intro}</p>
            <p className="hero__text">{profile.lead}</p>
            <div className="hero__actions">
              <Button href="#projetos" iconAfter="arrow">
                Conhecer meus projetos
              </Button>
              <Button href="#contato" variant="secondary">
                Entrar em contato
              </Button>
              <Button href={links.github.url} variant="ghost" icon="github">
                GitHub
              </Button>
              <Button href={links.linkedin.url} variant="ghost" icon="linkedin">
                Linkedin
              </Button>
            </div>
          </div>
          <TicketDemo />
        </div>
      </div>
    </section>
  );
}
