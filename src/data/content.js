
export const profile = {
  name: 'Guilherme',
  fullName: 'Guilherme Ares',
  role: 'Desenvolvedor Full Stack',
  intro:
    'Desenvolvedor Full Stack apaixonado por tecnologia, criação de soluções digitais e aprendizado contínuo.',
  lead:
    'Gosto de construir aplicações web que funcionam de verdade, interfaces bem cuidadas e soluções que resolvem problemas reais.',
};

/* ───────────── Links de contato ─────────────
   Troque `url` e `handle` pelos seus dados e remova `placeholder: true`. */
export const links = {
  github: {
    label: 'GitHub',
    handle: 'github.com/seu-usuario',
    url: 'https://github.com/guiares1003',
    placeholder: true,
  },
  linkedin: {
    label: 'LinkedIn',
    handle: 'linkedin.com/in/seu-perfil',
    url: 'https://www.linkedin.com/in/guilherme-alexandre-de-oliveira-ares-7b4b92205',
    placeholder: true,
  },
  email: {
    label: 'E-mail',
    handle: 'guiares1@hotmail.com',
    url: 'mailto:guiares1@hotmail.com',
    placeholder: true,
  },
  whatsapp: {
    label: 'WhatsApp',
    handle: '+55 (17) 98201-5555',
    // formato: https://wa.me/55DDDNUMERO (só dígitos)
    url: 'https://wa.me/5517982015555',
    placeholder: true,
  },
};

/* ───────────── Navegação ───────────── */
export const sections = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'trajetoria', label: 'Trajetória' },
  { id: 'contato', label: 'Contato' },
];

/* ───────────── Sobre mim ───────────── */
export const about = {
  title: 'Do suporte técnico para o código',
  paragraphs: [
    'Sou estudante de Sistemas de Informação e tenho experiência em suporte técnico. Foi no suporte que aprendi a ouvir o problema inteiro antes de sugerir uma solução, e é essa mesma postura que levo para o código.',
    'Estou construindo minha carreira em desenvolvimento de software, com foco em Full Stack: Java e Spring Boot no servidor, JavaScript, React e Node.js nas aplicações web, e HTML e CSS bem escritos na interface.',
    'Busco uma oportunidade em um time de desenvolvimento e também estou aberto a projetos freelance, como sites para pequenos negócios.',
  ],
  // Cada item é uma vantagem que vem da experiência em suporte.
  strengths: [
    {
      title: 'Contato com problemas reais',
      text: 'No suporte, o problema chega como acontece de verdade: incompleto, urgente e com alguém esperando. Isso me deixa atento aos casos de erro e às mensagens claras.',
      shape: 'circle',
      color: 'grape',
    },
    {
      title: 'Resolução de incidentes',
      text: 'Investigar, isolar a causa e confirmar a correção são hábitos que ajudam na hora de depurar código.',
      shape: 'triangle',
      color: 'lagoon',
    },
    {
      title: 'Quem usa o sistema',
      text: 'Conheço as dúvidas de quem usa o produto. Por isso penso a interface a partir de quem vai clicar nela.',
      shape: 'square',
      color: 'tangerine',
    },
    {
      title: 'Soluções práticas',
      text: 'Prefiro a solução simples que resolve a uma arquitetura grande que ninguém precisa.',
      shape: 'ring',
      color: 'bubblegum',
    },
  ],
  // Ficha rápida. Itens com `placeholder: true` aparecem marcados como "a preencher".
  facts: [
    { label: 'Formação', value: 'Sistemas de Informação (cursando)' },
    { label: 'Experiência', value: 'Suporte técnico' },
    { label: 'Foco', value: 'Desenvolvimento Full Stack' },
    { label: 'Cidade', value: 'Barretos-SP'},
    { label: 'Disponibilidade', value: 'Vagas CLT/PJ e Freelance'},
  ],
};

/* ───────────── Projetos ─────────────
   Os três abaixo são EXEMPLOS (`example: true`). Substitua pelos seus.
   kind: 'academico' | 'web' | 'freelance'
   art:  'api' | 'panel' | 'landing'  (ilustração do card)
   color: 'grape' | 'lagoon' | 'tangerine' | 'bubblegum'
   demoUrl / repoUrl: deixe null se ainda não existir; o botão some sozinho. */
export const projectKinds = [
  { id: 'todos', label: 'Todos' },
  { id: 'academico', label: 'Acadêmico' },
  { id: 'web', label: 'Aplicação web' },
  { id: 'freelance', label: 'Freelance' },
];

export const projects = [
  {
    id: 'api-tarefas',
    example: null,
    kind: 'academico',
    kindLabel: 'Projeto acadêmico',
    title: 'API de Tarefas',
    summary:
      'API REST para cadastrar e acompanhar tarefas, criada para praticar a organização de um back-end em camadas.',
    problem:
      'Aprender na prática como estruturar um back-end: rotas, regras de negócio, validação e persistência dos dados.',
    features: [
      'Cadastro, edição, consulta e exclusão de tarefas',
      'Filtro por status e por prazo',
      'Validação dos dados recebidos',
      'Persistência em banco MySQL',
    ],
    stack: ['Java', 'Spring Boot', 'MySQL', 'APIs REST'],
    demoUrl: null,
    repoUrl: 'https://github.com/seu-usuario/api-de-tarefas',
    decisions: [
      'Separação em camadas (controller, service e repository) para isolar as regras de negócio.',
      'DTOs na entrada e na saída, para não expor as entidades do banco diretamente.',
      'Tratamento de erros em um só lugar, com mensagens claras para quem consome a API.',
    ],
    challenges: [
      '[Descreva um problema que você encontrou, como resolveu e o que aprendeu.]',
    ],
    art: 'api',
    color: 'lagoon',
  },
  {
    id: 'painel-chamados',
    example: null,
    kind: 'web',
    kindLabel: 'Aplicação web',
    title: 'Painel de Chamados',
    summary:
      'Aplicação web para registrar e acompanhar chamados de suporte, inspirada no dia a dia de atendimento.',
    problem:
      'Chamados espalhados em mensagens e planilhas dificultam saber o que está aberto, o que está parado e quem cuida de cada caso.',
    features: [
      'Abertura de chamado com prioridade',
      'Lista com filtros por status e prioridade',
      'Histórico de andamento de cada chamado',
      'Layout que funciona no celular e no computador',
    ],
    stack: ['React', 'Node.js', 'MySQL', 'APIs REST'],
    demoUrl: 'https://seu-projeto.exemplo.com',
    repoUrl: 'https://github.com/seu-usuario/painel-de-chamados',
    decisions: [
      'Componentes reutilizáveis para lista, filtros e formulário.',
      'API separada do front-end, para evoluir cada parte sem quebrar a outra.',
      'Estado dos filtros guardado no front-end, sem pedir dados de novo a cada clique.',
    ],
    challenges: [
      '[Descreva um desafio de interface, de dados ou de integração e como você o resolveu.]',
    ],
    art: 'panel',
    color: 'grape',
  },
  {
    id: 'landing-negocio',
    example: null,
    kind: 'freelance',
    kindLabel: 'Freelance',
    title: 'Landing page para pequeno negócio',
    summary:
      'Página de apresentação para um negócio local, com serviços, localização e botão direto para o WhatsApp.',
    problem:
      'Negócios pequenos perdem clientes quando o site não abre bem no celular ou quando é difícil entrar em contato.',
    features: [
      'Layout pensado primeiro para o celular',
      'Botão de contato por WhatsApp em destaque',
      'Seções de serviços e localização',
      'Carregamento rápido',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: null,
    repoUrl: null,
    decisions: [
      'Sem frameworks: poucos arquivos, carregamento rápido e fácil de manter por quem não programa.',
      'Imagens leves e fontes carregadas com cuidado, para a página abrir rápido em conexão fraca.',
    ],
    challenges: [
      '[Descreva o que o cliente precisava e como você adaptou a solução ao orçamento e ao prazo.]',
    ],
    art: 'landing',
    color: 'tangerine',
  },
];

/* ───────────── Habilidades ─────────────
   Para adicionar ou remover uma tecnologia, edite as listas `items`.
   Não há níveis de domínio de propósito. */
export const skills = {
  layers: [
    {
      id: 'frontend',
      title: 'Frontend',
      hint: 'O que a pessoa vê e toca',
      color: 'grape',
      items: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      id: 'backend',
      title: 'Backend',
      hint: 'Regras de negócio e integrações',
      color: 'lagoon',
      items: ['Java', 'Spring Boot', 'Node.js'],
    },
    {
      id: 'database',
      title: 'Banco de dados',
      hint: 'Onde a informação fica guardada',
      color: 'tangerine',
      items: ['MySQL'],
    },
  ],
  practices: {
    title: 'Ferramentas e práticas',
    hint: 'O que mantém o trabalho organizado',
    color: 'bubblegum',
    items: ['Git', 'GitHub', 'APIs REST', 'Testes'],
  },
  // Passos da simulação "salvar um dado". `layer` diz qual camada acende.
  flow: [
    { layer: 'frontend', text: 'Na tela, a pessoa preenche o formulário e clica em Salvar.' },
    { layer: 'backend', text: 'A API recebe o pedido, valida os dados e aplica as regras.' },
    { layer: 'database', text: 'O banco de dados guarda a informação.' },
    { layer: 'backend', text: 'A API responde que deu certo.' },
    { layer: 'frontend', text: 'A tela mostra a confirmação para a pessoa.' },
  ],
};

/* ───────────── Trajetória ─────────────
   Datas e instituições estão como espaços reservados. */
export const timeline = [
  {
    kind: 'Formação',
    title: 'Curso Técnico de Informática Integrado ao Ensino Médio',
    place: 'Etec - Coronel Raphael Brandão',
    period: 'Jan/2018 - Dez/2020',
    placeholder: false,
    // text: 'Curso em andamento. [Adicione disciplinas, projetos ou atividades de que mais gostou.]',
    text: 'Concluido, Aqui tive meus primeiros contatos com programação.',
    color: 'grape',
  },{
    kind: 'Formação',
    title: 'Sistemas de Informação',
    place: 'UniBarretos',
    period: 'Jan/2024 - Dez/2027',
    placeholder: false,
    // text: 'Curso em andamento. [Adicione disciplinas, projetos ou atividades de que mais gostou.]',
    text: 'Curso em andamento, aqui estou me aprofundando e escolhi a área que quero seguir.',
    color: 'grape',
  },
  {
    kind: 'Experiência',
    title: 'Suporte técnico',
    place: 'Hospital de Amor de Barretos',
    period: 'Jun/2025 - Atualmente',
    placeholder: false,
    text: 'Atendimento a usuários e resolução de incidentes do dia a dia, sempre buscando entender a necessidade por trás de cada chamado, também aprendi a ver o valor de cada esforço e estudo para resolver um problema "impossivel".',
    color: 'lagoon',
  },
  {
    kind: 'Agora',
    title: 'Desenvolvimento de software',
    place: 'Projetos próprios e estudos',
    period: 'Em andamento',
    placeholder: false,
    text: 'Construindo aplicações Full Stack com Java, Spring Boot, JavaScript, React e Node.js, e publicando o código no GitHub.',
    color: 'tangerine',
    current: true,
  },
];

/* ───────────── Contato ───────────── */
export const contact = {
  title: 'Tem um projeto interessante ou uma oportunidade para conversarmos?',
  subtitle: 'Vamos tirar essa ideia do papel.',
  paths: [
    {
      id: 'vaga',
      label: 'Oportunidades profissionais',
      heading: 'Vagas em desenvolvimento',
      text: 'Estou em busca de uma oportunidade como desenvolvedor Full Stack. Vamos conversar sobre a vaga e sobre como posso ajudar o seu time.',
      primary: 'linkedin',
      cta: 'Chamar no LinkedIn',
      color: 'grape',
    },
    {
      id: 'freela',
      label: 'Projetos freelance',
      heading: 'Sites para empresas',
      text: 'Precisa de um site para o seu negócio? Posso criar uma página rápida, responsiva e fácil de manter. Conte o que você precisa.',
      primary: 'whatsapp',
      cta: 'Chamar no WhatsApp',
      color: 'tangerine',
    },
  ],
};
