import React, { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';
import { useAvatar } from '../hooks/useAvatar';
import { DEFAULT_AVATAR } from '../constants';

export default function AvatarThumbnail({ onClick, size = 48 }) {
  const { data: userAvatarData, isLoading } = useAvatar();

  const avatarUri = useMemo(() => {
    if (isLoading) return null;
    const config = { ...DEFAULT_AVATAR, ...(userAvatarData || {}) };
    const avatar = createAvatar(avataaars, {
      seed: 'tenali',
      ...config,
      size,
    });
    return avatar.toDataUri();
  }, [userAvatarData, isLoading, size]);

  if (isLoading) {
    return (
      <div 
        style={{ width: size, height: size, borderRadius: '50%', backgroundColor: 'var(--clr-surface)' }}
        className="animate-pulse"
      />
    );
  }

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
        justifyContent: 'center'
      }}
      className="hover:scale-105 transition-transform"
      title="Customize Avatar"
    >
      <img src={avatarUri} alt="Your Avatar" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  );
}
