import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, ArrowLeft, RefreshCw, Save, Dice5 } from 'lucide-react';
import { useAvatar } from './hooks/useAvatar';
import { useCollections } from './hooks/useCollections';
import StudentCard from './components/StudentCard';
import AvatarPreview from './components/AvatarPreview';
import CategorySidebar from './components/CategorySidebar';
import CustomizationGrid from './components/CustomizationGrid';
import CollectionsDashboard from './components/CollectionsDashboard';
import { CATEGORIES, DEFAULT_AVATAR, OPTIONS, CUSTOM_REWARDS } from './constants';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'white', padding: '2rem' }}>
          <h2>AvatarStudio Crashed!</h2>
          <pre>{this.state.error.toString()}</pre>
        </div>
      );
    }
    return this.props.children; 
  }
}

export default function AvatarStudioWrapper(props) {
  return (
    <ErrorBoundary>
      <AvatarStudio {...props} />
    </ErrorBoundary>
  );
}

function AvatarStudio({ onBack }) {
  const { data: userAvatarData, saveAvatar, isSaving } = useAvatar();
  const { collections, progress } = useCollections();
  
  const [config, setConfig] = useState(DEFAULT_AVATAR);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  });

  // Load from backend if available
  useEffect(() => {
    if (userAvatarData && Object.keys(userAvatarData).length > 0) {
      // eslint-disable-next-line
      setConfig((prev) => ({ ...prev, ...userAvatarData }));
    }
  }, [userAvatarData]);

  // Dynamically inject unlocked cosmetics into OPTIONS
  useEffect(() => {
    if (Array.isArray(collections) && progress) {
      collections.forEach(col => {
        const isUnlocked = true; // (unlocked for demo)
        if (isUnlocked) {
          col.rewards.forEach(reward => {
            if (OPTIONS[reward.type] && !OPTIONS[reward.type].includes(reward.id)) {
              OPTIONS[reward.type].push(reward.id);
            }
          });
        }
      });
    }
  }, [collections, progress]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('tenali-theme', newTheme);
  };

  const handleUpdate = (categoryId, value) => {
    setConfig(prev => {
      const newConfig = { ...prev };
      
      // If equipping a custom reward or macro
      if (CUSTOM_REWARDS[value]) {
        const customData = CUSTOM_REWARDS[value];
        // Clear conflicting custom states depending on what is being equipped
        if (categoryId.includes('clothing') || categoryId === 'outfit_macro') newConfig.custom_clothing = [];
        if (categoryId.includes('accessory') || categoryId === 'outfit_macro') newConfig.custom_accessory = [];
        if (categoryId.includes('eyewear')) newConfig.custom_eyewear = [];
        if (categoryId.includes('hat') || categoryId === 'outfit_macro') newConfig.custom_hat = [];
        if (categoryId.includes('bg')) newConfig.custom_bg = [];
        if (categoryId !== 'outfit_macro') newConfig.outfit_macro = [];

        // Apply DiceBear base configuration
        if (customData.base) {
          Object.keys(customData.base).forEach(baseKey => {
            newConfig[baseKey] = customData.base[baseKey];
          });
        }
      } else {
        // If equipping a standard Peeps item, clear any custom overlay for that slot
        if (categoryId === 'body') {
           newConfig.custom_clothing = [];
           newConfig.outfit_macro = [];
        }
        if (categoryId === 'accessory') newConfig.custom_accessory = [];
        if (categoryId === 'hair') {
           newConfig.custom_hat = [];
           newConfig.outfit_macro = [];
        }
        if (categoryId === 'backgroundColor') newConfig.custom_bg = [];
      }

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
    const newConfig = { ...DEFAULT_AVATAR };
    
    // Pick a random option for each category
    Object.keys(OPTIONS).forEach(category => {
      // Don't randomize background by default
      if (category === 'backgroundColor') return;
      
      const categoryOptions = OPTIONS[category];
      if (categoryOptions && categoryOptions.length > 0) {
        const randomIndex = Math.floor(Math.random() * categoryOptions.length);
        const selectedValue = categoryOptions[randomIndex];
        newConfig[category] = selectedValue === 'none' ? [] : [selectedValue];
      }
    });
    
    setConfig(newConfig);
  };

  return (
    <div 
      className="h-screen w-full flex flex-col overflow-hidden transition-colors duration-300 font-sans"
      style={{ backgroundColor: 'var(--clr-bg)', color: 'var(--clr-text)' }}
    >
      
      {/* Top Navbar (~70px) */}
      <nav 
        className="h-[70px] shrink-0 px-6 py-3 flex justify-between items-center border-b z-10"
        style={{ borderColor: 'var(--clr-border)', backgroundColor: 'var(--clr-card)' }}
      >
        <div className="flex items-center gap-6">
          <button 
            onClick={onBack} 
            className="flex items-center gap-2 font-bold hover:opacity-70 transition-opacity"
            style={{ color: 'var(--clr-text)' }}
          >
            <ArrowLeft size={24} />
            <span className="hidden sm:inline">Back to Home</span>
          </button>
          <div className="h-6 w-px" style={{ backgroundColor: 'var(--clr-border)' }} />
          <h1 className="text-xl md:text-2xl font-extrabold m-0" style={{ color: 'var(--clr-text)', fontFamily: 'var(--font-display)' }}>
            Avatar Studio
          </h1>
        </div>
        <button 
          onClick={toggleTheme}
          className="p-2.5 rounded-full transition-colors flex items-center justify-center"
          style={{ backgroundColor: 'var(--clr-surface)', color: 'var(--clr-text)' }}
          title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
        >
          {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
        </button>
      </nav>

      {/* Main Body */}
      <div className="flex-1 w-full p-4 md:p-6 flex flex-col lg:flex-row gap-6 overflow-hidden">
        
        {/* LEFT PANEL: Student Info & Actions */}
        <div className="w-full lg:w-[320px] shrink-0 flex flex-col h-[35vh] lg:h-full gap-4">
          <div className="flex-1 flex flex-col gap-4 overflow-y-auto custom-scrollbar lg:pr-2">
            
            <StudentCard />
            
            <div 
              className="mt-auto p-5 rounded-2xl flex flex-col gap-3 shadow-xl shrink-0 border"
              style={{ backgroundColor: 'var(--clr-card)', borderColor: 'var(--clr-border)' }}
            >
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSave} 
                disabled={isSaving}
                className="w-full py-3 px-4 font-bold rounded-xl shadow-lg flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: 'var(--clr-accent)', color: '#ffffff' }}
              >
                {isSaving ? <RefreshCw size={20} className="animate-spin" /> : <Save size={20} />}
                {isSaving ? 'Saving...' : 'Save Avatar'}
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReset}
                className="w-full py-3 px-4 font-bold rounded-xl flex justify-center items-center gap-2"
                style={{ backgroundColor: 'var(--clr-surface)', color: 'var(--clr-text)' }}
              >
                <RefreshCw size={20} />
                Reset
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRandomize}
                className="w-full py-3 px-4 font-bold rounded-xl flex justify-center items-center gap-2"
                style={{ backgroundColor: 'var(--clr-surface)', color: 'var(--clr-text)' }}
              >
                <Dice5 size={20} />
                Random
              </motion.button>
            </div>
          </div>
        </div>

        {/* CENTER PANEL: Avatar Preview */}
        <div className="flex-1 flex flex-col items-center justify-center relative shrink-0 min-h-[300px] lg:min-h-0 bg-transparent rounded-2xl">
          <AvatarPreview config={config} />
        </div>

        {/* RIGHT PANEL: Customization (Sidebar + Grid) */}
        <div 
          className="w-full lg:w-[500px] xl:w-[700px] shrink-0 flex flex-col lg:flex-row h-[50vh] lg:h-full rounded-2xl shadow-xl overflow-hidden border"
          style={{ backgroundColor: 'var(--clr-card)', borderColor: 'var(--clr-border)' }}
        >
          
          {/* Category Sidebar */}
          <div 
            className="w-full lg:w-[180px] xl:w-[240px] shrink-0 border-b lg:border-b-0 lg:border-r overflow-x-auto lg:overflow-y-auto custom-scrollbar flex flex-row lg:flex-col"
            style={{ borderColor: 'var(--clr-border)', backgroundColor: 'var(--clr-surface)' }}
          >
            <CategorySidebar 
              categories={CATEGORIES} 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory}
            />
          </div>

          {/* Options Grid */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-2 lg:p-4" style={{ backgroundColor: 'var(--clr-card)' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                {activeCategory === 'math_collection' ? (
                  <div className="h-full overflow-y-auto">
                    <CollectionsDashboard 
                      collections={collections} 
                      progress={progress} 
                      onEquipReward={(type, id) => handleUpdate(type, id)} 
                    />
                  </div>
                ) : (
                  <CustomizationGrid 
                    categoryId={activeCategory} 
                    currentValue={config[activeCategory]?.[0] || 'none'}
                    onSelect={(val) => handleUpdate(activeCategory, val)}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
