import React, { useState, useEffect } from 'react';
import { Award, Star, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StudentCard() {
  const [coins, setCoins] = useState(0);
  const [streak, setStreak] = useState(0);

  // Sync coins and streak from local storage
  const syncCoins = () => {
    const savedCoins = parseInt(localStorage.getItem('user_coins') || '0', 10);
    setCoins(savedCoins);
  };
  
  const syncStreak = () => {
    const savedStreak = parseInt(localStorage.getItem('user_streak') || '0', 10);
    setStreak(savedStreak);
  };

  useEffect(() => {
    // eslint-disable-next-line
    syncCoins();
    syncStreak();
    window.addEventListener('coinsUpdated', syncCoins);
    window.addEventListener('streakUpdated', syncStreak);
    return () => {
      window.removeEventListener('coinsUpdated', syncCoins);
      window.removeEventListener('streakUpdated', syncStreak);
    };
  }, []);

  const user = {
    username: 'Student',
    level: 1,
    streak: streak
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="p-6 rounded-2xl shadow-xl flex flex-col gap-6 border"
      style={{ backgroundColor: 'var(--clr-card)', borderColor: 'var(--clr-border)' }}
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-1" style={{ color: 'var(--clr-text)' }}>{user.username}'s Avatar</h2>
        <div 
          className="text-sm font-semibold px-3 py-1 rounded-full inline-block"
          style={{ backgroundColor: 'var(--clr-surface)', color: 'var(--clr-accent)' }}
        >
          Level {user.level} Mathlete
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* Coins */}
        <div 
          className="flex items-center justify-between p-3 rounded-xl"
          style={{ backgroundColor: 'var(--clr-surface)' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold shadow-inner">
              C
            </div>
            <span className="font-semibold" style={{ color: 'var(--clr-text-soft)' }}>Coins</span>
          </div>
          <span className="font-bold text-lg" style={{ color: 'var(--clr-text)' }}>{coins}</span>
        </div>

        {/* Streak */}
        <div 
          className="flex items-center justify-between p-3 rounded-xl"
          style={{ backgroundColor: 'var(--clr-surface)' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <Target size={18} />
            </div>
            <span className="font-semibold" style={{ color: 'var(--clr-text-soft)' }}>Streak</span>
          </div>
          <span className="font-bold text-lg" style={{ color: 'var(--clr-text)' }}>{user.streak} Days</span>
        </div>
      </div>
    </motion.div>
  );
}

