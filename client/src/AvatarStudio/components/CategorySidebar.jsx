import React from 'react';
import * as Icons from 'lucide-react';

export default function CategorySidebar({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-y-auto w-full custom-scrollbar">
      {categories.map((category) => {
        const IconComponent = Icons[category.icon] || Icons.HelpCircle;
        const isActive = activeCategory === category.id;
        
        return (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className="flex flex-col lg:flex-row items-center gap-2 p-3 lg:p-4 min-w-[80px] lg:min-w-0 transition-all duration-200 border-b-2 lg:border-b-0 lg:border-l-4"
            style={{
              backgroundColor: isActive ? 'var(--clr-card)' : 'transparent',
              borderColor: isActive ? 'var(--clr-accent)' : 'transparent',
              color: isActive ? 'var(--clr-accent)' : 'var(--clr-text-soft)',
              fontWeight: isActive ? 'bold' : 'normal'
            }}
          >
            <IconComponent size={20} className={isActive ? 'animate-pulse' : ''} />
            <span className="text-xs lg:text-sm whitespace-nowrap">{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}
