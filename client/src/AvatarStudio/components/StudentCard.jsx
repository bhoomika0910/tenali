import React from 'react';
import { Award, Star, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StudentCard({ theme }) {
  // Placeholder user stats since auth isn't deeply connected here yet
  const user = {
    username: 'Student',
    level: 12,
    coins: 1450,
    streak: 5,
    xp: 3200,
    nextXp: 5000
  };

  const progress = (user.xp / user.nextXp) * 100;

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`p-6 rounded-2xl shadow-xl flex flex-col gap-6 ${theme === 'dark' ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-orange-100'}`}
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-1">{user.username}'s Avatar</h2>
        <div className={`text-sm font-semibold px-3 py-1 rounded-full inline-block ${theme === 'dark' ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
          Level {user.level} Mathlete
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* Coins */}
        <div className={`flex items-center justify-between p-3 rounded-xl ${theme === 'dark' ? 'bg-slate-700' : 'bg-orange-50'}`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold shadow-inner">
              C
            </div>
            <span className="font-semibold">Coins</span>
          </div>
          <span className="font-bold text-lg">{user.coins}</span>
        </div>

        {/* Streak */}
        <div className={`flex items-center justify-between p-3 rounded-xl ${theme === 'dark' ? 'bg-slate-700' : 'bg-blue-50'}`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <Target size={18} />
            </div>
            <span className="font-semibold">Streak</span>
          </div>
          <span className="font-bold text-lg">{user.streak} Days</span>
        </div>

        {/* XP Progress */}
        <div className="mt-2">
          <div className="flex justify-between text-sm font-semibold mb-2">
            <span>XP</span>
            <span>{user.xp} / {user.nextXp}</span>
          </div>
          <div className={`h-3 w-full rounded-full overflow-hidden ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'}`}>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
