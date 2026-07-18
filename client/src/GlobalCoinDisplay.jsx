import React, { useState, useEffect } from 'react';

export default function GlobalCoinDisplay() {
  const [coins, setCoins] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  const syncCoins = () => {
    const savedCoins = parseInt(localStorage.getItem('user_coins') || '0', 10);
    setCoins(savedCoins);
    updateStreak();
  };

  const updateStreak = () => {
    const today = new Date().toDateString();
    const lastActive = localStorage.getItem('last_active_date');
    let streak = parseInt(localStorage.getItem('user_streak') || '0', 10);
    let bonusCoins = 0;

    if (lastActive !== today) {
      if (lastActive) {
        const lastDate = new Date(lastActive);
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastDate.toDateString() === yesterday.toDateString()) {
          streak += 1;
          if (streak % 5 === 0) {
            bonusCoins = 10;
          }
        } else {
          streak = 1;
        }
      } else {
        streak = 1; // First day
      }
      localStorage.setItem('last_active_date', today);
      localStorage.setItem('user_streak', streak.toString());
      
      if (bonusCoins > 0) {
        const currentCoins = parseInt(localStorage.getItem('user_coins') || '0', 10);
        localStorage.setItem('user_coins', currentCoins + bonusCoins);
      }
      
      window.dispatchEvent(new Event('streakUpdated'));
      
      if (bonusCoins > 0) {
        // This will safely re-trigger syncCoins to pick up the bonus. 
        // updateStreak won't loop because last_active_date is now today.
        window.dispatchEvent(new Event('coinsUpdated'));
      }
    }
  };

  useEffect(() => {
    // eslint-disable-next-line
    syncCoins();
    window.addEventListener('coinsUpdated', syncCoins);
    return () => window.removeEventListener('coinsUpdated', syncCoins);
  }, []);

  if (window.location.pathname === '/avatar' || window.location.pathname === '/avatar-studio') {
    return null;
  }

  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: '16px', 
        left: '70px', 
        zIndex: 9999, 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px', 
        background: 'var(--clr-card, #2a2a35)', 
        padding: '6px 12px', 
        borderRadius: '24px', 
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)', 
        border: '1px solid var(--clr-border, #3f3f4e)' 
      }}
    >
      <div 
        style={{ 
          width: '24px', 
          height: '24px', 
          borderRadius: '50%', 
          background: '#fbbf24', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: '#fff', 
          fontWeight: 'bold', 
          fontSize: '14px', 
          textShadow: '0 1px 2px rgba(0,0,0,0.2)' 
        }}
      >
        C
      </div>
      <span style={{ fontWeight: 'bold', fontSize: '18px', color: 'var(--clr-text, #fff)' }}>
        {coins}
      </span>
      
      <div 
        onMouseEnter={() => setShowTooltip(true)} 
        onMouseLeave={() => setShowTooltip(false)}
        style={{ 
          marginLeft: '4px', 
          cursor: 'help', 
          color: 'var(--clr-text-soft, #9ca3af)', 
          position: 'relative', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: '20px', 
          height: '20px', 
          borderRadius: '50%', 
          background: 'rgba(255,255,255,0.1)', 
          fontSize: '12px', 
          fontWeight: 'bold' 
        }}
      >
        ?
        {showTooltip && (
          <div 
            style={{ 
              position: 'absolute', 
              top: '30px', 
              left: '0', 
              background: 'var(--clr-card, #2a2a35)', 
              border: '1px solid var(--clr-border, #3f3f4e)', 
              padding: '12px', 
              borderRadius: '8px', 
              width: '220px', 
              boxShadow: '0 10px 25px rgba(0,0,0,0.5)', 
              zIndex: 10000, 
              color: 'var(--clr-text, #fff)', 
              textAlign: 'left',
              pointerEvents: 'none'
            }}
          >
            <div style={{ fontWeight: 'bold', marginBottom: '8px', borderBottom: '1px solid var(--clr-border)', paddingBottom: '6px' }}>
              How to earn coins:
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span>Easy Level:</span> <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>+5</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span>Medium Level:</span> <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>+10</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span>Hard Level:</span> <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>+15</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Extra Hard:</span> <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>+20</span>
            </div>
            <div style={{ marginTop: '8px', fontSize: '11px', color: 'var(--clr-text-soft, #9ca3af)', fontStyle: 'italic' }}>
              Solve questions accurately to earn coins!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
