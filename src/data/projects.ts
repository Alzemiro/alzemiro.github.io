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
  link?: string;
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
  {
    title: 'MCP Azure Confluence',
    titleEn: 'MCP Azure Confluence',
    problem: 'Assistentes de IA não conseguem acessar diretamente ferramentas corporativas como Azure Boards e Confluence, criando um gargalo para fluxos de trabalho que dependem de dados dessas plataformas.',
    problemEn: "AI assistants can't directly access enterprise tools like Azure Boards and Confluence, creating a bottleneck for workflows that depend on data from these platforms.",
    solution: 'Desenvolvi um servidor MCP que expõe APIs do Azure Boards e Confluence como ferramentas padronizadas, permitindo que assistentes de IA consultem work items, busquem páginas wiki e criem conteúdo sem integração customizada.',
    solutionEn: 'I built an MCP server that exposes Azure Boards and Confluence APIs as standardized tools, enabling AI assistants to query work items, search wiki pages, and create content without custom integration.',
    result: 'Ponte funcional entre assistentes de IA e ferramentas corporativas — tasks hierárquicas do Azure Boards e páginas/search do Confluence acessíveis via protocolo MCP.',
    resultEn: 'Functional bridge between AI assistants and enterprise tools — hierarchical Azure Boards tasks and Confluence pages/search accessible via MCP protocol.',
    tech: ['TypeScript', 'Node.js', 'MCP', 'Azure DevOps', 'Confluence API', 'Docker'],
    link: 'https://github.com/Alzemiro/mcp-azure-confluence',
  },
];