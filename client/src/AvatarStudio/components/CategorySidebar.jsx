import React from 'react';
import * as Icons from 'lucide-react';

export default function CategorySidebar({ categories, activeCategory, setActiveCategory, theme }) {
  return (
    <div className={`flex flex-row lg:flex-col overflow-x-auto lg:overflow-y-auto border-b lg:border-b-0 lg:border-r ${theme === 'dark' ? 'border-slate-700 bg-slate-800' : 'border-orange-100 bg-orange-50'} custom-scrollbar`}>
      {categories.map((category) => {
        const IconComponent = Icons[category.icon] || Icons.HelpCircle;
        const isActive = activeCategory === category.id;
        
        return (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`
              flex flex-col lg:flex-row items-center gap-2 p-3 lg:p-4 min-w-[80px] lg:min-w-0 transition-all duration-200 border-b-2 lg:border-b-0 lg:border-l-4
              ${isActive 
                ? `${theme === 'dark' ? 'bg-slate-700 border-orange-500 text-orange-400' : 'bg-white border-orange-500 text-orange-600'} font-bold` 
                : `${theme === 'dark' ? 'border-transparent text-slate-400 hover:bg-slate-700/50' : 'border-transparent text-slate-500 hover:bg-orange-100/50'}`
              }
            `}
          >
            <IconComponent size={20} className={isActive ? 'animate-pulse' : ''} />
            <span className="text-xs lg:text-sm whitespace-nowrap">{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}
