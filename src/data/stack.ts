export type StackCategory = 'backend' | 'frontend' | 'cloud' | 'architecture' | 'ai';

export interface TechItem {
  name: string;
  category: StackCategory;
  level: 'expert' | 'advanced' | 'intermediate';
}

export const stackCategories: Record<StackCategory, { label: string; labelEn: string }> = {
  backend: { label: 'Backend', labelEn: 'Backend' },
  frontend: { label: 'Frontend', labelEn: 'Frontend' },
  cloud: { label: 'Cloud & DevOps', labelEn: 'Cloud & DevOps' },
  architecture: { label: 'Arquitetura', labelEn: 'Architecture' },
  ai: { label: 'IA', labelEn: 'AI' },
};

export const techStack: TechItem[] = [
  // Backend
  { name: 'Java 17', category: 'backend', level: 'expert' },
  { name: 'Spring Boot 3', category: 'backend', level: 'expert' },
  { name: 'JPA/Hibernate', category: 'backend', level: 'advanced' },
  { name: 'SQL', category: 'backend', level: 'advanced' },

  // Frontend
  { name: 'React 18', category: 'frontend', level: 'expert' },
  { name: 'TypeScript', category: 'frontend', level: 'expert' },
  { name: 'TanStack Query v5', category: 'frontend', level: 'advanced' },
  { name: 'Zustand', category: 'frontend', level: 'advanced' },
  { name: 'Tailwind v4', category: 'frontend', level: 'advanced' },
  { name: 'MUI v5', category: 'frontend', level: 'intermediate' },

  // Cloud & DevOps
  { name: 'AWS S3', category: 'cloud', level: 'advanced' },
  { name: 'Docker', category: 'cloud', level: 'advanced' },
  { name: 'Kubernetes', category: 'cloud', level: 'intermediate' },
  { name: 'GitLab CI', category: 'cloud', level: 'advanced' },
  { name: 'Jenkins', category: 'cloud', level: 'intermediate' },

  // Architecture
  { name: 'Hexagonal', category: 'architecture', level: 'expert' },
  { name: 'DDD', category: 'architecture', level: 'expert' },
  { name: 'Microservices', category: 'architecture', level: 'advanced' },
  { name: 'BFF', category: 'architecture', level: 'expert' },
  { name: 'CQRS', category: 'architecture', level: 'advanced' },
  { name: 'API Gateway', category: 'architecture', level: 'advanced' },
  { name: 'Circuit Breaker', category: 'architecture', level: 'advanced' },

  // AI
  { name: 'Prompt Engineering', category: 'ai', level: 'advanced' },
  { name: 'AI Agents for SDLC', category: 'ai', level: 'advanced' },
  { name: 'LLM Refactoring', category: 'ai', level: 'intermediate' },
];