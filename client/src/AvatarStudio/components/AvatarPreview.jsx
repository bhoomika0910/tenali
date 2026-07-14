import React, { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';
import { motion } from 'framer-motion';

export default function AvatarPreview({ config }) {
  // Generate the SVG data URI using DiceBear
  const avatarUri = useMemo(() => {
    const avatar = createAvatar(avataaars, {
      seed: 'tenali',
      ...config,
      size: 512,
    });
    return avatar.toDataUri();
  }, [config]);

  return (
    <div className="w-full flex flex-col items-center justify-center relative h-full min-h-[300px]">
      {/* Soft glowing background behind avatar */}
      <div 
        className="absolute w-[60%] h-[60%] rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: 'var(--clr-accent)' }}
      />
      
      {/* Platform/Base shadow */}
      <div className="absolute bottom-10 w-48 lg:w-64 h-8 bg-black/10 dark:bg-black/40 blur-md rounded-full shadow-[0_0_20px_rgba(0,0,0,0.1)]" />

      {/* Floating Avatar Image */}
      <motion.img
        src={avatarUri}
        alt="Avatar Preview"
        className="relative z-10 w-full h-full max-w-[80%] max-h-[80%] object-contain drop-shadow-2xl"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
        animate={{ 
          y: [0, -15, 0] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-1/4 right-1/4 opacity-50"
        style={{ color: 'var(--clr-accent)' }}
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" />
        </svg>
      </motion.div>
      <motion.div 
        className="absolute bottom-1/3 left-1/4 opacity-50"
        style={{ color: 'var(--clr-correct)' }}
        animate={{ rotate: -360, scale: [1, 1.5, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" />
        </svg>
      </motion.div>
    </div>
  );
}
