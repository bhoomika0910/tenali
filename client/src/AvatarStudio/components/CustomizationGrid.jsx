import React, { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';
import { OPTIONS, COSMETICS, COLOR_NAMES, DEFAULT_AVATAR } from '../constants';
import { Check, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

// A tiny helper component to render the option preview
const OptionPreview = React.memo(({ categoryId, value }) => {
  const uri = useMemo(() => {
    // Create a base avatar config that is neutral to highlight the specific feature
    const previewConfig = { ...DEFAULT_AVATAR };
    
    if (value === 'none') {
      previewConfig[categoryId] = [];
    } else {
      previewConfig[categoryId] = [value];
    }
    
    // Ensure we can see clothing/hair clearly without background interfering
    previewConfig.backgroundColor = ['transparent'];
    
    // Ensure deterministic preview by passing a fixed seed
    const avatar = createAvatar(avataaars, { 
      seed: "tenali",
      ...previewConfig, 
      accessoriesProbability: 100,
      size: 128 
    });
    return avatar.toDataUri();
  }, [categoryId, value]);

  return (
    <img 
      src={uri} 
      alt={value} 
      className="w-full h-full object-contain scale-[1.7] translate-y-[10%]"
      onError={(e) => {
        e.target.style.display = 'none';
        e.target.parentElement.classList.add('bg-slate-200', 'dark:bg-slate-700', 'rounded-full');
      }}
    />
  );
});

export default function CustomizationGrid({ categoryId, currentValue, onSelect }) {
  const availableOptions = OPTIONS[categoryId] || [];
  const cosmetics = COSMETICS[categoryId] || [];
  const isColor = categoryId.toLowerCase().includes('color');

  return (
    <div className="grid gap-4 grid-cols-3 p-2">
      
      {/* Basic Options */}
      {availableOptions.map((opt) => {
        const isSelected = currentValue === opt;
        
        return (
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            key={opt}
            onClick={() => onSelect(opt)}
            className={`
              relative flex flex-col items-center justify-center gap-2 p-3 rounded-xl transition-colors duration-200 group shadow-sm border
              ${isSelected ? 'ring-2 ring-offset-2' : ''}
              aspect-square
            `}
            style={{
              backgroundColor: isSelected ? 'var(--clr-accent-soft)' : 'var(--clr-surface)',
              borderColor: isSelected ? 'var(--clr-accent)' : 'var(--clr-border)',
              ...(isSelected ? { '--tw-ring-color': 'var(--clr-accent)' } : {})
            }}
          >
            <div className="w-full h-full flex-1 flex items-center justify-center overflow-hidden p-1">
              <OptionPreview categoryId={categoryId} value={opt} />
            </div>
            
            <span 
              className="text-[10px] md:text-xs font-semibold w-full text-center leading-tight break-words px-1"
              style={{ color: 'var(--clr-text)' }}
              title={isColor ? (COLOR_NAMES[opt] || opt) : opt}
            >
              {isColor ? (COLOR_NAMES[opt] || opt) : opt}
            </span>
            
            {isSelected && (
              <div 
                className="absolute -top-2 -right-2 text-white rounded-full p-1.5 shadow-md"
                style={{ backgroundColor: 'var(--clr-accent)' }}
              >
                <Check size={16} strokeWidth={3} />
              </div>
            )}
          </motion.button>
        );
      })}

      {/* Locked Cosmetics */}
      {cosmetics.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            if (item.moduleId) {
              window.location.href = `/?mode=${item.moduleId}`;
            }
          }}
          className={`relative flex flex-col items-center justify-center gap-3 p-4 aspect-square rounded-xl opacity-60 border transition-transform duration-200 ${item.moduleId ? 'cursor-pointer hover:scale-105 hover:opacity-80' : 'cursor-not-allowed'}`}
          style={{ backgroundColor: 'var(--clr-bg)', borderColor: 'var(--clr-border)' }}
          title={item.moduleId ? `Click to start ${item.moduleName} and unlock this item` : `🔒 Unlock by completing lessons`}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 backdrop-blur-[1px] rounded-xl p-2 text-center pointer-events-none">
            <Lock size={24} className="mb-2" style={{ color: 'var(--clr-text-soft)' }} />
            <span className="text-[10px] md:text-xs font-bold leading-tight" style={{ color: 'var(--clr-text-soft)' }}>
              {item.condition || 'Unlock by completing lessons'}
            </span>
          </div>
          <div className="w-full h-full p-2 opacity-30 grayscale blur-sm flex-1 overflow-hidden pointer-events-none">
            <OptionPreview categoryId={categoryId === 'math_collection' ? 'accessories' : categoryId} value="none" />
          </div>
          <span 
            className="text-xs sm:text-sm font-semibold break-words w-full text-center leading-tight mt-2 px-1"
            style={{ color: 'var(--clr-text-soft)' }}
            title={item.label}
          >
            {item.label}
          </span>
        </div>
      ))}
      
    </div>
  );
}
