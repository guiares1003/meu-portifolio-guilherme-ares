import { useReveal } from '../hooks/hooks.js';

/** Envolve um bloco com um leve assentamento ao entrar na tela. O conteúdo já nasce visível. */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
