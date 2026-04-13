import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Locale } from '../../i18n/utils';
import { t } from '../../i18n/utils';
import { techStack, stackCategories, type StackCategory } from '../../data/stack';

interface Props {
  locale: Locale;
}

const levelLabels: Record<string, string> = {
  expert: 'Expert',
  advanced: 'Advanced',
  intermediate: 'Intermediate',
};

export default function TechStack({ locale }: Props) {
  const [activeCategory, setActiveCategory] = useState<StackCategory | 'all'>('all');

  const filteredTech = useMemo(() => {
    if (activeCategory === 'all') return techStack;
    return techStack.filter((tech) => tech.category === activeCategory);
  }, [activeCategory]);

  const categories: { key: StackCategory | 'all'; label: string }[] = [
    { key: 'all', label: locale === 'pt' ? 'Todos' : 'All' },
    ...Object.entries(stackCategories).map(([key, val]) => ({
      key: key as StackCategory,
      label: locale === 'pt' ? val.label : val.labelEn,
    })),
  ];

  return (
    <section className="section" id="stack">
      <div className="section__container">
        <div className="section-heading">
          <span className="section-heading__number">03.</span>
          <h2 className="section-heading__title">{t(locale, 'stack.title')}</h2>
          <p className="section-heading__subtitle">{t(locale, 'stack.subtitle')}</p>
        </div>

        <div className="stack__filters">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`stack__filter ${activeCategory === cat.key ? 'stack__filter--active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="stack__grid">
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech, i) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: i * 0.03, type: 'spring', stiffness: 200, damping: 20 }}
                className="stack__item"
              >
                <div className="stack__item-header">
                  <span className="stack__item-name">{tech.name}</span>
                  <span className="stack__item-level">
                    {levelLabels[tech.level]}
                  </span>
                </div>
                <div className="stack__item-bar">
                  <div
                    className={`stack__item-fill stack__item-fill--${tech.level}`}
                    style={{ width: tech.level === 'expert' ? '90%' : tech.level === 'advanced' ? '70%' : '50%' }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}