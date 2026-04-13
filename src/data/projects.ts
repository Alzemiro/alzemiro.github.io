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