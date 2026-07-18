import React, { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';
import { useAvatar } from '../hooks/useAvatar';
import { DEFAULT_AVATAR } from '../constants';
import { SVG_MAP, STANDARD_BG_MAP } from './AvatarPreview';
import { LibraryBg } from './CustomSVGs';

export default function AvatarThumbnail({ onClick, size = 48 }) {
  const { data: userAvatarData, isLoading } = useAvatar();

  const config = useMemo(() => {
    return { ...DEFAULT_AVATAR, ...(userAvatarData || {}) };
  }, [userAvatarData]);

  const avatarUri = useMemo(() => {
    if (isLoading) return null;
    const avatar = createAvatar(avataaars, {
      seed: 'tenali',
      ...config,
      backgroundColor: ['transparent'], // Force transparent so SVG bg works
      accessoriesProbability: 100,
      size,
    });
    return avatar.toDataUri();
  }, [config, isLoading, size]);

  if (isLoading) {
    return (
      <div 
        style={{ width: size, height: size, borderRadius: '50%', backgroundColor: 'var(--clr-surface)' }}
        className="animate-pulse shrink-0"
      />
    );
  }

  // Determine Custom Components
  const CustomBg = SVG_MAP[config?.custom_bg?.[0]];
  const StandardBg = STANDARD_BG_MAP[config?.backgroundColor?.[0]];
  const BgToRender = CustomBg || StandardBg || LibraryBg;
  
  const CustomClothing = SVG_MAP[config?.custom_clothing?.[0]] || SVG_MAP[config?.outfit_macro?.[0]];
  const CustomAccessory = SVG_MAP[config?.custom_accessory?.[0]];
  const CustomHat = SVG_MAP[config?.custom_hat?.[0]];
  const CustomEyewear = SVG_MAP[config?.custom_eyewear?.[0]];

  return (
    <div 
      onClick={onClick}
      style={{ 
        width: size, 
        height: size, 
        borderRadius: '50%', 
        overflow: 'hidden', 
        cursor: 'pointer',
        backgroundColor: 'var(--clr-surface)',
        border: '2px solid var(--clr-border)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
      className="hover:scale-105 transition-transform shrink-0"
      title="Customize Avatar"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        {BgToRender ? (
          <BgToRender />
        ) : (
          <div className="w-full h-full bg-slate-200 dark:bg-slate-700" />
        )}
      </div>

      {/* Avatar Base */}
      <img 
        src={avatarUri} 
        alt="Your Avatar" 
        className="relative z-10"
        style={{ width: '80%', height: '80%', objectFit: 'contain' }} 
      />

      {/* Overlays */}
      <div className="absolute inset-0 pointer-events-none z-20 flex justify-center items-center scale-75">
        {CustomClothing && <CustomClothing />}
        {CustomAccessory && <CustomAccessory />}
        {CustomHat && <CustomHat />}
        {CustomEyewear && <CustomEyewear />}
      </div>
    </div>
  );
}
