import { useRef, useState } from 'react';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { copyText } from '../hooks/hooks.js';

const ICONS = { github: 'github', linkedin: 'linkedin', email: 'mail', whatsapp: 'whatsapp' };

export default function Contact({ contact, links }) {
  const [pathId, setPathId] = useState(contact.paths[0].id);
  const [copied, setCopied] = useState('idle'); // idle | ok | manual
  const emailRef = useRef(null);
  const path = contact.paths.find((p) => p.id === pathId);
  const primary = links[path.primary];

  const copyEmail = async () => {
    const ok = await copyText(links.email.handle, emailRef.current);
    setCopied(ok ? 'ok' : 'manual');
    setTimeout(() => setCopied('idle'), 2600);
  };

  return (
    <section id="contato" className="section section--contact" aria-labelledby="contato-title">
      <div className="wrap">
        <Reveal className="contact__head">
          <h2 id="contato-title" className="contact__title">
            {contact.title}
          </h2>
          <p className="contact__sub">{contact.subtitle}</p>
        </Reveal>

        <Reveal className="contact__panel">
          <div className="paths" role="tablist" aria-label="Motivo do contato">
            {contact.paths.map((p) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                id={`tab-${p.id}`}
                aria-selected={pathId === p.id}
                aria-controls={`panel-${p.id}`}
                tabIndex={pathId === p.id ? 0 : -1}
                className={`path path--${p.color}`}
                onClick={() => setPathId(p.id)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const i = contact.paths.findIndex((x) => x.id === pathId);
                    const next = contact.paths[(i + (e.key === 'ArrowRight' ? 1 : contact.paths.length - 1)) % contact.paths.length];
                    setPathId(next.id);
                    document.getElementById(`tab-${next.id}`)?.focus();
                  }
                }}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div
            className="path-panel"
            role="tabpanel"
            id={`panel-${path.id}`}
            aria-labelledby={`tab-${path.id}`}
          >
            <h3 className="path-panel__title">{path.heading}</h3>
            <p className="path-panel__text">{path.text}</p>
            <div className="path-panel__actions">
              <Button href={primary.url} icon={ICONS[path.primary]}>
                {path.cta}
              </Button>
              <Button variant="secondary" icon={copied === 'ok' ? 'check' : 'copy'} onClick={copyEmail}>
                {copied === 'ok' ? 'E-mail copiado' : 'Copiar e-mail'}
              </Button>
            </div>
            
          </div>
        </Reveal>

        <Reveal as="ul" className="socials">
          {Object.entries(links).map(([key, l]) => (
            <li key={key}>
              <a
                className="social"
                href={l.url}
                {...(/^https?:/i.test(l.url) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="social__icon">
                  <Icon name={ICONS[key]} size={22} />
                </span>
                <span className="social__text">
                  <span className="social__label">{l.label}</span>
                  <span className="social__handle">{l.handle}</span>
                </span>
                
              </a>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
