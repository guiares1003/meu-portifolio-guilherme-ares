import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import { useActiveSection, useTheme } from '../hooks/hooks.js';

function goTo(e, id, onDone) {
  const target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  if (onDone) onDone();
}

export default function Header({ sections, name, role }) {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sections.map((s) => s.id));
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Barra de progresso de leitura da página.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (headerRef.current) headerRef.current.style.setProperty('--progress', p.toFixed(3));
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

  // Esc fecha o menu e devolve o foco ao botão.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const isDark = theme === 'dark';

  return (
    <header className="site-header" ref={headerRef}>
      <div className="wrap site-header__bar">
        <a
          className="brand"
          href="#inicio"
          onClick={(e) => goTo(e, 'inicio', () => setOpen(false))}
          aria-label={`${name}, voltar ao início`}
        >
          <span className="brand__mark" aria-hidden="true">
  <svg viewBox="0 0 40 40" focusable="false">
    <path className="brand__g" d="M29.5 14.5A11 11 0 1 0 31 20H21.5" />
    <circle className="brand__cursor" cx="21.5" cy="20" r="2.6" />
  </svg>
</span>
<span className="brand__text">
  <span className="brand__name">{name}</span>
  <span className="brand__role">{role}</span>
</span>
        </a>

        <nav id="site-nav" className={`nav ${open ? 'is-open' : ''}`} aria-label="Principal">
          <ul className="nav__list">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  className="nav__link"
                  href={`#${s.id}`}
                  aria-current={active === s.id ? 'true' : undefined}
                  onClick={(e) => goTo(e, s.id, () => setOpen(false))}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__tools">
          <button
            type="button"
            className="icon-btn"
            onClick={toggle}
            aria-label={isDark ? 'Mudar para o tema claro' : 'Mudar para o tema escuro'}
            aria-pressed={isDark}
          >
            <Icon name={isDark ? 'sun' : 'moon'} />
          </button>
          <button
            type="button"
            ref={menuButtonRef}
            className="icon-btn nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
}
