export interface Project {
  title: string;
  titleEn: string;
  problem: string;
  problemEn: string;
  solution: string;
  solutionEn: string;
  result: string;
  resultEn: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    title: 'ELO/PACI',
    titleEn: 'ELO/PACI',
    problem: 'Plataforma de saúde pública com autenticação fragmentada e arquitetura monolítica, limitando escalabilidade e segurança para os profissionais de saúde que dependiam do sistema.',
    problemEn: 'Public healthcare platform with fragmented authentication and monolithic architecture, limiting scalability and security for the healthcare professionals who depended on the system.',
    solution: 'Desenhei a arquitetura do zero com Hexagonal + DDD, BFF Pattern, autenticação OIDC com Opaque Tokens, Circuit Breaker e API Gateway — cada decisão pensada para permitir evolução sem reescrita.',
    solutionEn: 'I designed the architecture from scratch with Hexagonal + DDD, BFF Pattern, OIDC auth with Opaque Tokens, Circuit Breaker and API Gateway — every decision made to allow evolution without rewriting.',
    result: 'Sistema em produção servindo milhares de profissionais de saúde em Portugal, com autenticação segura e resiliência arquitetural que permite evoluir continuamente.',
    resultEn: 'Production system serving thousands of healthcare professionals in Portugal, with secure authentication and architectural resilience that allows continuous evolution.',
    tech: ['Java 17', 'Spring Boot 3', 'React 18', 'TypeScript', 'OIDC', 'Hexagonal Architecture', 'AWS S3'],
  },
  {
    title: 'Portonave — Revitalização Desktop',
    titleEn: 'Portonave — Desktop Revitalization',
    problem: 'Aplicação desktop com travamentos frequentes de UI, impactando a produtividade de operações portuárias — inclusive em módulos críticos como Armazenagem Frigorificada.',
    problemEn: 'Desktop application with frequent UI freezes, impacting the productivity of port operations — including critical modules like Cold Storage.',
    solution: 'Reestruturei a comunicação para assíncrona, eliminando os bloqueios de UI sem necessidade de reescrita completa do sistema.',
    solutionEn: 'I restructured communication to async, eliminating UI blocking without requiring a complete system rewrite.',
    result: 'Eliminação dos travamentos de UI. O módulo de Armazenagem Frigorificada passou a operar sem interrupções em produção.',
    resultEn: 'Elimination of UI freezes. The Cold Storage module now operates without interruptions in production.',
    tech: ['Java', 'Spring Boot', 'React', 'Node.js', 'Kotlin', 'Jenkins'],
  },
];