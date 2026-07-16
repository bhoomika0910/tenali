import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, Sparkles, Trophy } from 'lucide-react';

export default function CollectionsDashboard({ collections, progress, onEquipReward }) {
  if (!Array.isArray(collections) || collections.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center h-full">
        <Sparkles size={48} className="text-gray-400 mb-4" />
        <h3 className="text-xl font-bold" style={{ color: 'var(--clr-text)' }}>No Collections Available</h3>
        <p style={{ color: 'var(--clr-text-soft)' }}>Loading collections data...</p>
      </div>
    );
  }

  // Calculate completion
  const collectionStats = collections.map(col => {
    const total = col.requiredModules.length;
    const completedCount = col.requiredModules.filter(modId => progress?.[modId]?.easy?.completed).length;
    const isUnlocked = true; // completedCount >= total; (unlocked for demo)
    return { ...col, total, completedCount, isUnlocked };
  });

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Trophy size={28} className="text-yellow-500" />
        <div>
          <h2 className="text-2xl font-extrabold m-0" style={{ color: 'var(--clr-text)' }}>Math Collections</h2>
          <p className="text-sm m-0" style={{ color: 'var(--clr-text-soft)' }}>Complete module sets to unlock exclusive avatar items!</p>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1">
        {collectionStats.map(col => (
          <motion.div
            key={col.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-5 border relative overflow-hidden flex flex-col"
            style={{
              backgroundColor: col.isUnlocked ? 'rgba(76, 175, 80, 0.05)' : 'var(--clr-surface)',
              borderColor: col.isUnlocked ? '#4caf50' : 'var(--clr-border)',
              boxShadow: col.isUnlocked ? '0 4px 15px rgba(76, 175, 80, 0.2)' : '0 2px 8px rgba(0,0,0,0.05)'
            }}
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--clr-accent)' }}>
                  {col.theme}
                </span>
                <h3 className="text-lg font-bold mt-1" style={{ color: 'var(--clr-text)' }}>
                  {col.name}
                </h3>
              </div>
              <div className={`p-2 rounded-full ${col.isUnlocked ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                {col.isUnlocked ? <Unlock size={20} /> : <Lock size={20} />}
              </div>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1 font-semibold" style={{ color: 'var(--clr-text)' }}>
                <span>Progress</span>
                <span>{col.completedCount} / {col.total}</span>
              </div>
              <div className="h-2 rounded-full w-full bg-black/10 overflow-hidden dark:bg-white/10">
                <div 
                  className="h-full rounded-full transition-all duration-500 ease-out"
                  style={{ 
                    width: `${(col.completedCount / col.total) * 100}%`,
                    backgroundColor: col.isUnlocked ? '#4caf50' : 'var(--clr-accent)' 
                  }}
                />
              </div>
            </div>

            {/* Rewards */}
            <div className="mt-auto pt-4 border-t" style={{ borderColor: 'var(--clr-border)' }}>
              <div className="text-xs font-semibold mb-2" style={{ color: 'var(--clr-text-soft)' }}>REWARDS:</div>
              <div className="flex flex-wrap gap-2">
                {col.rewards.map(reward => (
                  <button 
                    key={reward.id} 
                    onClick={() => col.isUnlocked && onEquipReward && onEquipReward(reward.type, reward.id)}
                    className={`text-xs px-2 py-1 rounded-md border flex items-center gap-1 font-medium transition-transform ${col.isUnlocked ? 'cursor-pointer hover:scale-105 hover:shadow-sm' : 'cursor-not-allowed opacity-60'}`}
                    style={{ 
                      backgroundColor: col.isUnlocked ? 'rgba(76, 175, 80, 0.1)' : 'transparent',
                      borderColor: col.isUnlocked ? '#4caf50' : 'var(--clr-border)',
                      color: col.isUnlocked ? '#4caf50' : 'var(--clr-text-soft)'
                    }}
                    title={col.isUnlocked ? `Click to equip ${reward.label}` : 'Locked'}
                  >
                    {reward.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Celebration overlay if unlocked */}
            {col.isUnlocked && (
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-green-500 rounded-full opacity-10 blur-2xl pointer-events-none" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
