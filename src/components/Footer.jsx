export default function Footer({ name }) {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p>
          © {new Date().getFullYear()} {name}. <br />Todos os Direitos Reservados.
        </p>
        <a
          className="footer__top"
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
            });
          }}
        >
          Voltar ao topo
        </a>
      </div>
    </footer>
  );
}
