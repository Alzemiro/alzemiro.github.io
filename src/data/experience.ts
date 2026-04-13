export interface Experience {
  company: string;
  companyEn?: string;
  role: string;
  roleEn: string;
  period: string;
  location: string;
  locationEn: string;
  highlights: string[];
  highlightsEn: string[];
  tech: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    company: 'SPMS — Ministério da Saúde de Portugal',
    companyEn: 'SPMS — Portuguese Ministry of Health',
    role: 'Full Stack Developer & Tech Lead',
    roleEn: 'Full Stack Developer & Tech Lead',
    period: 'Out 2023 – Hoje',
    location: 'Portugal (Remoto)',
    locationEn: 'Portugal (Remote)',
    current: true,
    highlights: [
      'Liderança técnica da equipe de desenvolvimento no ecossistema ELO/PACI — da definição arquitetural ao deploy em produção',
      'Projeto e implementação de autenticação BFF com Opaque Tokens (OIDC), substituindo o sistema anterior fragmentado',
      'Arquitetura Hexagonal + DDD com API Gateway, Circuit Breaker e CQRS como padrões de projeto do ecossistema',
      'Integração de agentes de IA no SDLC para análise de código e geração de testes, elevando a cobertura e a qualidade',
    ],
    highlightsEn: [
      'Technical leadership of the development team in the ELO/PACI ecosystem — from architectural definition to production deployment',
      'Designed and implemented BFF authentication with Opaque Tokens (OIDC), replacing the previous fragmented system',
      'Hexagonal Architecture + DDD with API Gateway, Circuit Breaker, and CQRS as the ecosystem design patterns',
      'Integrated AI agents into the SDLC for code analysis and test generation, increasing coverage and quality',
    ],
    tech: ['Java 17', 'Spring Boot 3', 'React 18', 'TypeScript', 'AWS S3', 'Oracle', 'GitLab CI', 'Tailwind v4', 'Zustand', 'TanStack Query'],
  },
  {
    company: 'Portonave',
    role: 'Full Stack Developer',
    roleEn: 'Full Stack Developer',
    period: 'Jan 2022 – Ago 2023',
    location: 'Remoto',
    locationEn: 'Remote',
    highlights: [
      'Revitalização de aplicação desktop legada: reestruturação da comunicação para assíncrona, eliminando os travamentos de UI',
      'Responsável técnico pelo módulo de Armazenagem Frigorificada — logística de cargas sensíveis à temperatura',
      'Diagnóstico e resolução de tickets de alta prioridade no código legado, mantendo estabilidade do sistema em produção',
    ],
    highlightsEn: [
      'Revitalized a legacy desktop application: restructured communication to async, eliminating UI freezes',
      'Technical lead for the Cold Storage module — logistics for temperature-sensitive cargo',
      'Diagnosed and resolved high-priority tickets in legacy code, maintaining system stability in production',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'Node.js', 'Kotlin', 'Jenkins'],
  },
  {
    company: 'Zoly',
    role: 'Frontend Developer',
    roleEn: 'Frontend Developer',
    period: 'Abr 2021 – Jan 2022',
    location: 'Remoto',
    locationEn: 'Remote',
    highlights: [
      'Desenvolvimento da página de teste vocacional "Vai de Bolsa" — alcance nacional com tráfego significativo',
      'Implementação de Web Components com Google Optimize 360 para testes A/B baseados em dados',
    ],
    highlightsEn: [
      'Developed the "Vai de Bolsa" vocational test page — national reach with significant traffic',
      'Implemented Web Components with Google Optimize 360 for data-driven A/B testing',
    ],
    tech: ['Vanilla JS', 'React', 'Nuxt.js', 'Vue.js', 'Google Cloud'],
  },
  {
    company: 'CRM Syonet',
    role: 'Fullstack Developer Jr',
    roleEn: 'Jr Fullstack Developer',
    period: 'Ago 2020 – Abr 2021',
    location: 'Remoto',
    locationEn: 'Remote',
    highlights: [
      'Projetos de adequação à LGPD e integração com WhatsApp Business para comunicação com clientes',
      'Desenvolvimento de funcionalidades em tempo real com WebSocket e Redux Saga',
    ],
    highlightsEn: [
      'LGPD compliance projects and WhatsApp Business integration for client communication',
      'Real-time feature development with WebSocket and Redux Saga',
    ],
    tech: ['Java', 'Kafka', 'Docker', 'React', 'Redux Saga', 'WebSocket', 'PostgreSQL'],
  },
];