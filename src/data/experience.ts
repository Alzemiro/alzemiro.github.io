export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  tech: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    company: 'SPMS — Ministério da Saúde de Portugal',
    role: 'Full Stack Developer & Tech Lead',
    period: 'Out 2023 – Hoje',
    location: 'Portugal (Remoto)',
    current: true,
    highlights: [
      'Liderança técnica da equipe de desenvolvimento no ecossistema ELO/PACI — da definição arquitetural ao deploy em produção',
      'Projeto e implementação de autenticação BFF com Opaque Tokens (OIDC), substituindo o sistema anterior fragmentado',
      'Arquitetura Hexagonal + DDD com API Gateway, Circuit Breaker e CQRS como padrões de projeto do ecossistema',
      'Integração de agentes de IA no SDLC para análise de código e geração de testes, elevando a cobertura e a qualidade',
    ],
    tech: ['Java 17', 'Spring Boot 3', 'React 18', 'TypeScript', 'AWS S3', 'Oracle', 'GitLab CI', 'Tailwind v4', 'Zustand', 'TanStack Query'],
  },
  {
    company: 'Portonave',
    role: 'Full Stack Developer',
    period: 'Jan 2022 – Ago 2023',
    location: 'Navegantes, SC',
    highlights: [
      'Revitalização de aplicação desktop legada: reestruturação da comunicação para assíncrona, eliminando os travamentos de UI',
      'Responsável técnico pelo módulo de Armazenagem Frigorificada — logística de cargas sensíveis à temperatura',
      'Diagnóstico e resolução de tickets de alta prioridade no código legado, mantendo estabilidade do sistema em produção',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'Node.js', 'Kotlin', 'Jenkins'],
  },
  {
    company: 'Zoly',
    role: 'Frontend Developer',
    period: 'Abr 2021 – Jan 2022',
    location: 'Remoto',
    highlights: [
      'Desenvolvimento da página de teste vocacional "Vai de Bolsa" — alcance nacional com tráfego significativo',
      'Implementação de Web Components com Google Optimize 360 para testes A/B baseados em dados',
    ],
    tech: ['Vanilla JS', 'React', 'Nuxt.js', 'Vue.js', 'Google Cloud'],
  },
  {
    company: 'CRM Syonet',
    role: 'Fullstack Developer Jr',
    period: 'Ago 2020 – Abr 2021',
    location: 'Remoto',
    highlights: [
      'Projetos de adequação à LGPD e integração com WhatsApp Business para comunicação com clientes',
      'Desenvolvimento de funcionalidades em tempo real com WebSocket e Redux Saga',
    ],
    tech: ['Java', 'Kafka', 'Docker', 'React', 'Redux Saga', 'WebSocket', 'PostgreSQL'],
  },
];