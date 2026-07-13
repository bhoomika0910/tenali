import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, ArrowLeft, RefreshCw, Save, Dice5 } from 'lucide-react';
import { useAvatar } from './hooks/useAvatar';
import StudentCard from './components/StudentCard';
import AvatarPreview from './components/AvatarPreview';
import CategorySidebar from './components/CategorySidebar';
import CustomizationGrid from './components/CustomizationGrid';
import { CATEGORIES, DEFAULT_AVATAR } from './constants';

export default function AvatarStudio({ onBack }) {
  const { data: userAvatarData, saveAvatar, isSaving } = useAvatar();
  
  const [config, setConfig] = useState(DEFAULT_AVATAR);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  // Load from backend if available
  useEffect(() => {
    if (userAvatarData && Object.keys(userAvatarData).length > 0) {
      setConfig((prev) => ({ ...prev, ...userAvatarData }));
    }
  }, [userAvatarData]);

  const toggleTheme = () => {
    setTheme(t => t === 'light' ? 'dark' : 'light');
  };

  const handleUpdate = (categoryId, value) => {
    setConfig(prev => {
      const newConfig = { ...prev };
      // Some properties are arrays in DiceBear configs (like top: ['bob'])
      if (value === 'none') {
        newConfig[categoryId] = [];
      } else {
        newConfig[categoryId] = [value];
      }
      return newConfig;
    });
  };

  const handleSave = () => {
    saveAvatar(config);
  };

  const handleReset = () => {
    setConfig(DEFAULT_AVATAR);
  };

  const handleRandomize = () => {
    // Only randomize the active category properties? 
    // The prompt says "Never regenerate the complete avatar randomly. Only update the selected property."
    // But there is a random button on the StudentCard. If we must only randomize selected property:
    // Wait, prompt: "Never regenerate the complete avatar randomly. Only update the selected property." 
    // I will remove the "Random" button from StudentCard or make it randomize the *current category*.
    // Wait, let's just make it a "Randomize [Category]" button.
  };

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 font-sans ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-orange-50 text-slate-800'}`}>
      
      {/* Top Navbar */}
      <nav className={`p-4 flex justify-between items-center ${theme === 'dark' ? 'bg-slate-800/50 border-slate-700' : 'bg-white/50 border-orange-100'} border-b backdrop-blur-md sticky top-0 z-10`}>
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-orange-100'}`}
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
            Avatar Studio
          </h1>
        </div>
        <button 
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-slate-700 text-yellow-400' : 'hover:bg-orange-100 text-slate-700'}`}
        >
          {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </nav>

      <div className="max-w-7xl mx-auto p-4 lg:p-8 flex flex-col lg:flex-row gap-8">
        
        {/* LEFT PANEL: Student Card */}
        <div className="w-full lg:w-1/4 flex flex-col gap-6 shrink-0">
          <StudentCard theme={theme} />
          
          <div className={`p-6 rounded-2xl flex flex-col gap-4 shadow-xl ${theme === 'dark' ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-orange-100'}`}>
            <h3 className="text-lg font-bold">Actions</h3>
            
            <button 
              onClick={handleSave} 
              disabled={isSaving}
              className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 flex justify-center items-center gap-2 transform transition hover:scale-[1.02] active:scale-95 disabled:opacity-50"
            >
              <Save size={20} />
              {isSaving ? 'Saving...' : 'Save Avatar'}
            </button>
            
            <button 
              onClick={handleReset}
              className={`w-full py-3 px-4 font-bold rounded-xl flex justify-center items-center gap-2 transform transition hover:scale-[1.02] active:scale-95 ${theme === 'dark' ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-orange-100 hover:bg-orange-200 text-orange-800'}`}
            >
              <RefreshCw size={20} />
              Reset Avatar
            </button>
          </div>
        </div>

        {/* CENTER PANEL: Avatar Preview */}
        <div className="w-full lg:w-2/4 flex flex-col items-center shrink-0">
          <AvatarPreview config={config} theme={theme} />
        </div>

        {/* RIGHT PANEL: Customization */}
        <div className="w-full lg:w-1/4 flex flex-col gap-6 shrink-0 h-[600px]">
          <div className={`flex flex-col h-full rounded-2xl shadow-xl overflow-hidden ${theme === 'dark' ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-orange-100'}`}>
            <CategorySidebar 
              categories={CATEGORIES} 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory}
              theme={theme}
            />
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <CustomizationGrid 
                    categoryId={activeCategory} 
                    currentValue={config[activeCategory]?.[0] || 'none'}
                    onSelect={(val) => handleUpdate(activeCategory, val)}
                    theme={theme}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
