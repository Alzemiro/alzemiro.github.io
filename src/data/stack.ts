export type StackCategory = 'backend' | 'frontend' | 'cloud' | 'database' | 'architecture' | 'ai';

export interface TechItem {
  name: string;
  category: StackCategory;
  level: 'expert' | 'advanced' | 'intermediate';
}

export const stackCategories: Record<StackCategory, { label: string; labelEn: string }> = {
  backend: { label: 'Backend', labelEn: 'Backend' },
  frontend: { label: 'Frontend', labelEn: 'Frontend' },
  cloud: { label: 'Cloud & DevOps', labelEn: 'Cloud & DevOps' },
  database: { label: 'Banco de Dados', labelEn: 'Database' },
  architecture: { label: 'Arquitetura', labelEn: 'Architecture' },
  ai: { label: 'IA', labelEn: 'AI' },
};

export const techStack: TechItem[] = [
  // Backend
  { name: 'Java', category: 'backend', level: 'expert' },
  { name: 'Spring Boot 3', category: 'backend', level: 'expert' },
  { name: 'JPA/Hibernate', category: 'backend', level: 'advanced' },
  { name: 'SQL', category: 'backend', level: 'advanced' },

  // Database
  { name: 'Redis', category: 'database', level: 'advanced' },
  { name: 'Valkey', category: 'database', level: 'advanced' },
  { name: 'Oracle', category: 'database', level: 'advanced' },
  { name: 'PostgreSQL', category: 'database', level: 'intermediate' },

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
  { name: 'Cloud Native', category: 'cloud', level: 'advanced' },
  { name: 'ArgoCD', category: 'cloud', level: 'intermediate' },
  { name: 'MinIO', category: 'cloud', level: 'intermediate' },
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