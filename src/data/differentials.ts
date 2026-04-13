export interface Differential {
  icon: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}

export const differentials: Differential[] = [
  {
    icon: 'architecture',
    title: 'Arquitetura antes de código',
    titleEn: 'Architecture before code',
    description: 'Defino a estrutura do sistema antes de implementar. Arquitetura sólida é o que separa software que evolui de software que precisa ser reescrito.',
    descriptionEn: 'I define the system structure before implementing. Solid architecture is what separates software that evolves from software that needs to be rewritten.',
  },
  {
    icon: 'leadership',
    title: 'Liderança técnica prática',
    titleEn: 'Practical technical leadership',
    description: 'Codifico, reviso e mentoro. Acredito que liderança técnica eficaz exige contato direto com o código e com a equipe.',
    descriptionEn: 'I code, review, and mentor. I believe effective technical leadership requires direct contact with both the code and the team.',
  },
  {
    icon: 'ai',
    title: 'IA como ferramenta de qualidade',
    titleEn: 'AI as a quality tool',
    description: 'Integro agentes de IA no ciclo de desenvolvimento para análise de código e geração de testes. O objetivo é maior qualidade, não maior velocidade sem critério.',
    descriptionEn: 'I integrate AI agents into the development cycle for code analysis and test generation. The goal is higher quality, not speed without discretion.',
  },
  {
    icon: 'legacy',
    title: 'Modernização de sistemas legados',
    titleEn: 'Legacy system modernization',
    description: 'Trabalho com código legado de forma incremental — melhorando a arquitetura sem interromper o serviço para quem depende do sistema.',
    descriptionEn: 'I work with legacy code incrementally — improving architecture without disrupting service for those who depend on the system.',
  },
];