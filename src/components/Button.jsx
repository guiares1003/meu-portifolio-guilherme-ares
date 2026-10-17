import Icon from './Icon.jsx';

/**
 * Botão ou link com o mesmo visual.
 * - `href` externo (http…) abre em nova aba.
 * - `href` com "#" rola suavemente até a seção.
 */
export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  children,
  type = 'button',
  ...rest
}) {
  const className = `btn btn--${variant} btn--${size}`;
  const content = (
    <>
      {icon && <Icon name={icon} size={18} />}
      <span>{children}</span>
      {iconAfter && <Icon name={iconAfter} size={18} />}
    </>
  );

  if (href) {
    const external = /^https?:/i.test(href);
    const handle = (e) => {
      if (onClick) onClick(e);
      if (e.defaultPrevented) return;
      if (href.startsWith('#')) {
        const target = document.getElementById(href.slice(1));
        if (target) {
          e.preventDefault();
          const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        }
      }
    };
    return (
      <a
        className={className}
        href={href}
        onClick={handle}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
        {external && <span className="visually-hidden"> (abre em nova aba)</span>}
      </a>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
