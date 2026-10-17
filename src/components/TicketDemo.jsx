import { useState } from 'react';
import Icon from './Icon.jsx';

/*
  Componente exclusivo do hero: um chamado de suporte que a pessoa faz andar até "Resolvido".
  Os três chamados são fictícios e servem só como ilustração do raciocínio de investigar e corrigir.
*/
const STEPS = ['Aberto', 'Investigando', 'Corrigindo', 'Resolvido'];

const TICKETS = [
  {
    id: '#2041',
    title: 'O formulário de cadastro não envia',
    priority: 'Alta',
    log: [
      'Usuária do financeiro conta que clica em Cadastrar e nada acontece.',
      'O console mostra erro 400: o campo de telefone chega vazio ao servidor.',
      'A máscara do campo apagava o valor antes do envio.',
      'Corrigido, testado em dois navegadores e usuária avisada.',
    ],
    lang: 'JavaScript',
    before: 'setPhone(mask(value)); // value vira ""',
    after: 'setPhone(mask(event.target.value));',
  },
  {
    id: '#2057',
    title: 'A lista de pedidos demora a abrir',
    priority: 'Média',
    log: [
      'Equipe comercial diz que a tela leva quase um minuto para carregar.',
      'A consulta traz todos os pedidos de uma vez, sem limite.',
      'Trocar por consulta paginada e devolver só a página pedida.',
      'A lista abre rápido e a paginação foi confirmada com a equipe.',
    ],
    lang: 'Java',
    before: 'return repository.findAll();',
    after: 'return repository.findAll(PageRequest.of(page, 20));',
  },
  {
    id: '#2063',
    title: 'Erro 500 ao salvar um pedido',
    priority: 'Alta',
    log: [
      'Alguns pedidos falham ao salvar, outros não.',
      'O log aponta um valor nulo: pedidos sem cliente chegam ao serviço.',
      'Validar a entrada na API e responder com uma mensagem clara.',
      'O erro 500 virou um aviso de validação e o fluxo voltou ao normal.',
    ],
    lang: 'Java',
    before: 'public Pedido salvar(PedidoDto dto) {',
    after: 'public Pedido salvar(@Valid PedidoDto dto) {',
  },
];

export default function TicketDemo() {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const ticket = TICKETS[index];
  const done = step === STEPS.length - 1;

  const advance = () => {
    if (!done) {
      setStep(step + 1);
    } else {
      setIndex((index + 1) % TICKETS.length);
      setStep(0);
    }
  };

  return (
    <figure className="ticket-wrap">
      <div className={`ticket ${done ? 'is-done' : ''}`} data-step={step}>
        <div className="ticket__head">
          <span className="ticket__id">Chamado {ticket.id}</span>
          <span className={`pill pill--${ticket.priority === 'Alta' ? 'bubblegum' : 'tangerine'}`}>
            Prioridade {ticket.priority.toLowerCase()}
          </span>
        </div>

        <div className="ticket__body">
          <h2 className="ticket__title">{ticket.title}</h2>

          <ol className="ticket__steps" aria-label="Andamento do chamado">
            {STEPS.map((label, i) => (
              <li key={label} className="ticket__step">
                <button
                  type="button"
                  className="ticket__stepbtn"
                  data-state={i < step ? 'past' : i === step ? 'now' : 'next'}
                  aria-current={i === step ? 'step' : undefined}
                  onClick={() => setStep(i)}
                >
                  <span className="ticket__dot" aria-hidden="true">
                    {i < step ? <Icon name="check" size={12} /> : null}
                  </span>
                  <span className="ticket__steplabel">{label}</span>
                </button>
              </li>
            ))}
          </ol>

          <ul className="ticket__log" aria-live="polite">
            {ticket.log.slice(0, step + 1).map((line, i) => (
              <li key={`${ticket.id}-${i}`} className="ticket__line" data-last={i === step}>
                <span className="ticket__status">{STEPS[i]}</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>

          {done && (
            <pre className="ticket__code" aria-label={`Correção em ${ticket.lang}`}>
              <code>
                <span className="ticket__del">- {ticket.before}</span>
                {'\n'}
                <span className="ticket__add">+ {ticket.after}</span>
              </code>
            </pre>
          )}

          <div className="ticket__foot">
            <button type="button" className="btn btn--primary btn--sm" onClick={advance}>
              <Icon name={done ? 'refresh' : 'arrow'} size={16} />
              <span>{done ? 'Abrir outro chamado' : `Avançar para ${STEPS[step + 1].toLowerCase()}`}</span>
            </button>
            {done && (
              <span className="ticket__stamp" aria-hidden="true">
                Resolvido
              </span>
            )}
          </div>
        </div>
      </div>
      <figcaption className="ticket-wrap__cap">Chamado de exemplo. Clique para fazer ele andar.</figcaption>
    </figure>
  );
}
