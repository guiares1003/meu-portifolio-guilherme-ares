/*
  Ilustrações dos projetos (no lugar de capturas de tela).
  Quando tiver prints reais, troque o <ProjectArt> por uma <img> no componente ProjectRow.
*/
function Window({ children }) {
  return (
    <>
      <rect className="a-surface a-stroke" x="24" y="28" width="272" height="184" rx="12" />
      <path className="a-soft" d="M24 40a12 12 0 0 1 12-12h248a12 12 0 0 1 12 12v14H24z" />
      <circle className="a-accent" cx="42" cy="41" r="4" />
      <circle className="a-ink" cx="56" cy="41" r="4" opacity=".35" />
      <circle className="a-ink" cx="70" cy="41" r="4" opacity=".2" />
      {children}
    </>
  );
}

function Api() {
  return (
    <Window>
      <rect className="a-accent" x="40" y="68" width="38" height="18" rx="9" />
      <rect className="a-soft" x="86" y="72" width="128" height="10" rx="5" />
      <rect className="a-soft" x="40" y="100" width="56" height="8" rx="4" />
      <rect className="a-ink" x="104" y="100" width="90" height="8" rx="4" opacity=".55" />
      <rect className="a-soft" x="56" y="118" width="56" height="8" rx="4" />
      <rect className="a-ink" x="120" y="118" width="120" height="8" rx="4" opacity=".55" />
      <rect className="a-soft" x="56" y="136" width="56" height="8" rx="4" />
      <rect className="a-ink" x="120" y="136" width="70" height="8" rx="4" opacity=".55" />
      <rect className="a-soft" x="40" y="154" width="24" height="8" rx="4" />
      <rect className="a-accent-soft" x="40" y="176" width="92" height="22" rx="11" />
      <circle className="a-accent" cx="54" cy="187" r="5" />
      <rect className="a-ink" x="66" y="183" width="56" height="8" rx="4" opacity=".6" />
    </Window>
  );
}

function Panel() {
  const rows = [78, 108, 138, 168];
  const pills = ['a-accent', 'a-warm', 'a-accent', 'a-cool'];
  return (
    <Window>
      <rect className="a-accent-soft" x="24" y="54" width="62" height="158" />
      <rect className="a-accent" x="34" y="68" width="42" height="10" rx="5" />
      <rect className="a-ink" x="34" y="90" width="34" height="7" rx="3.5" opacity=".35" />
      <rect className="a-ink" x="34" y="106" width="40" height="7" rx="3.5" opacity=".35" />
      <rect className="a-ink" x="34" y="122" width="28" height="7" rx="3.5" opacity=".35" />
      {rows.map((y, i) => (
        <g key={y}>
          <rect className="a-soft" x="100" y={y} width="86" height="10" rx="5" />
          <rect className="a-ink" x="100" y={y + 14} width="56" height="7" rx="3.5" opacity=".3" />
          <rect className={pills[i]} x="228" y={y + 1} width="52" height="18" rx="9" />
        </g>
      ))}
    </Window>
  );
}

function Landing() {
  return (
    <Window>
      <rect className="a-ink" x="48" y="72" width="132" height="14" rx="7" opacity=".8" />
      <rect className="a-ink" x="48" y="94" width="96" height="14" rx="7" opacity=".8" />
      <rect className="a-soft" x="48" y="120" width="150" height="7" rx="3.5" />
      <rect className="a-soft" x="48" y="134" width="118" height="7" rx="3.5" />
      <rect className="a-accent" x="48" y="152" width="96" height="24" rx="12" />
      <circle className="a-surface" cx="63" cy="164" r="6" />
      <rect className="a-surface" x="76" y="160" width="52" height="8" rx="4" />
      <rect className="a-accent-soft a-stroke" x="212" y="72" width="64" height="104" rx="10" />
      <circle className="a-accent" cx="244" cy="104" r="14" />
      <rect className="a-soft" x="222" y="132" width="44" height="7" rx="3.5" />
      <rect className="a-soft" x="226" y="146" width="36" height="7" rx="3.5" />
    </Window>
  );
}

const ART = { api: Api, panel: Panel, landing: Landing };

export default function ProjectArt({ name, color }) {
  const Art = ART[name] || Api;
  return (
    <div className={`art art--${color}`}>
      <svg viewBox="0 0 320 240" role="img" aria-label="Ilustração do projeto" focusable="false">
        <Art />
      </svg>
    </div>
  );
}
