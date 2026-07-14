import React from 'react';
import { Award, Star, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StudentCard() {
  // Placeholder user stats since auth isn't deeply connected here yet
  const user = {
    username: 'Student',
    level: 1,
    coins: 0,
    streak: 0,
    xp: 0,
    nextXp: 1000
  };

  const progress = (user.xp / user.nextXp) * 100;

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
          <span className="font-bold text-lg" style={{ color: 'var(--clr-text)' }}>{user.coins}</span>
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

        {/* XP Progress */}
        <div className="mt-2">
          <div className="flex justify-between text-sm font-semibold mb-2" style={{ color: 'var(--clr-text-soft)' }}>
            <span>XP</span>
            <span>{user.xp} / {user.nextXp}</span>
          </div>
          <div 
            className="h-3 w-full rounded-full overflow-hidden"
            style={{ backgroundColor: 'var(--clr-surface)' }}
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ backgroundColor: 'var(--clr-accent)' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
