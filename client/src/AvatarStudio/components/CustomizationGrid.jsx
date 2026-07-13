import React, { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';
import { OPTIONS, COSMETICS, DEFAULT_AVATAR } from '../constants';
import { Check, Lock } from 'lucide-react';

// A tiny helper component to render the option preview
const OptionPreview = React.memo(({ categoryId, value, isColor }) => {
  const uri = useMemo(() => {
    if (isColor) return null;
    
    // Create a base avatar config that is neutral to highlight the specific feature
    const previewConfig = { ...DEFAULT_AVATAR };
    
    if (value === 'none') {
      previewConfig[categoryId] = [];
    } else {
      previewConfig[categoryId] = [value];
    }
    
    return createAvatar(avataaars, { ...previewConfig, size: 64 }).toDataUri();
  }, [categoryId, value, isColor]);

  if (isColor) {
    const isTransparent = value === 'transparent';
    return (
      <div 
        className={`w-full h-full rounded-full border-2 border-black/10 ${isTransparent ? 'bg-white' : ''}`}
        style={!isTransparent ? { backgroundColor: `#${value}` } : {}}
      >
        {isTransparent && <div className="w-full h-full flex items-center justify-center text-xs text-gray-400 font-bold">\</div>}
      </div>
    );
  }

  return <img src={uri} alt={value} className="w-full h-full object-contain" />;
});

export default function CustomizationGrid({ categoryId, currentValue, onSelect, theme }) {
  const availableOptions = OPTIONS[categoryId] || [];
  const cosmetics = COSMETICS[categoryId] || [];
  const isColor = categoryId.toLowerCase().includes('color');

  return (
    <div className={`grid gap-4 ${isColor ? 'grid-cols-4 lg:grid-cols-5' : 'grid-cols-2 lg:grid-cols-3'}`}>
      
      {/* Basic Options */}
      {availableOptions.map((opt) => {
        const isSelected = currentValue === opt;
        
        return (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`
              relative flex flex-col items-center justify-center gap-2 p-2 rounded-xl transition-all duration-200 group
              ${isSelected 
                ? 'ring-2 ring-orange-500 ring-offset-2 scale-105' 
                : 'hover:scale-105 hover:shadow-md'
              }
              ${theme === 'dark' 
                ? (isSelected ? 'bg-slate-700' : 'bg-slate-700/50 hover:bg-slate-700') 
                : (isSelected ? 'bg-orange-100' : 'bg-white hover:bg-orange-50 shadow-sm border border-orange-50')
              }
              ${isColor ? 'aspect-square p-1 rounded-full' : 'aspect-square'}
            `}
          >
            <div className={`w-full h-full ${!isColor && 'p-2'}`}>
              <OptionPreview categoryId={categoryId} value={opt} isColor={isColor} />
            </div>
            
            {!isColor && (
              <span className={`text-xs font-medium truncate w-full text-center ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                {opt}
              </span>
            )}
            
            {isSelected && (
              <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full p-1 shadow-md">
                <Check size={14} strokeWidth={3} />
              </div>
            )}
          </button>
        );
      })}

      {/* Locked Cosmetics */}
      {!isColor && cosmetics.map((item) => (
        <div
          key={item.id}
          className={`
            relative flex flex-col items-center justify-center gap-2 p-2 aspect-square rounded-xl cursor-not-allowed opacity-60
            ${theme === 'dark' ? 'bg-slate-800 border border-slate-700' : 'bg-slate-50 border border-slate-200'}
          `}
          title={`Locked: ${item.condition}`}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 backdrop-blur-[2px] rounded-xl p-2 text-center">
            <Lock size={24} className="mb-2 text-slate-400" />
            <span className="text-xs font-bold text-slate-500">{item.condition}</span>
          </div>
          <div className="w-full h-full p-2 opacity-30 grayscale blur-sm">
            <OptionPreview categoryId={categoryId} value="none" isColor={false} />
          </div>
          <span className={`text-xs font-medium truncate w-full text-center ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
            {item.label}
          </span>
        </div>
      ))}
      
    </div>
  );
}
