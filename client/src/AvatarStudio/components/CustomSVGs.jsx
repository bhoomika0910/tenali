import React from 'react';
import { motion } from 'framer-motion';

// --- BACKGROUNDS (z-0) ---
export const ExplorerBg = () => (
  <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs><linearGradient id="expGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#1e3a8a" /><stop offset="100%" stopColor="#10b981" /></linearGradient></defs>
    <rect width="100" height="100" fill="url(#expGrad)" />
    <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="5,5" />
    <circle cx="50" cy="50" r="2" fill="white" />
  </svg>
);

export const BlueprintBg = () => (
  <svg className="absolute inset-0 w-full h-full opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
    <rect width="100" height="100" fill="#1e40af" />
    <g stroke="rgba(255,255,255,0.2)" strokeWidth="1">
      {Array.from({ length: 10 }).map((_, i) => <line key={`h${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} />)}
      {Array.from({ length: 10 }).map((_, i) => <line key={`v${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" />)}
    </g>
    <polygon points="50,20 80,80 20,80" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
  </svg>
);

export const GridBg = () => (
  <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
    <rect width="100" height="100" fill="#0f172a" />
    <g stroke="rgba(255,255,255,0.15)" strokeWidth="1">
      {Array.from({ length: 20 }).map((_, i) => <line key={`h${i}`} x1="0" y1={i * 5} x2="100" y2={i * 5} />)}
      {Array.from({ length: 20 }).map((_, i) => <line key={`v${i}`} x1={i * 5} y1="0" x2={i * 5} y2="100" />)}
    </g>
    <line x1="50" y1="0" x2="50" y2="100" stroke="#38bdf8" strokeWidth="2" />
    <line x1="0" y1="50" x2="100" y2="50" stroke="#38bdf8" strokeWidth="2" />
  </svg>
);

export const GoldenPalaceBg = () => (
  <svg className="absolute inset-0 w-full h-full opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs><linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#78350f" /><stop offset="100%" stopColor="#b45309" /></linearGradient></defs>
    <rect width="100" height="100" fill="url(#goldGrad)" />
    <rect x="10" y="20" width="10" height="80" fill="#fcd34d" />
    <rect x="80" y="20" width="10" height="80" fill="#fcd34d" />
    <path d="M5,20 Q50,0 95,20 Z" fill="#fbbf24" />
  </svg>
);

export const BookshelfBg = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#451a03" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </linearGradient>
      <radialGradient id="magicGlow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#d946ef" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Base dark cosmic wall */}
    <rect width="100" height="100" fill="url(#wallGrad)" />
    {/* Magic glow */}
    <rect width="100" height="100" fill="url(#magicGlow)" />

    {/* Flying mystical scrolls (background decor) */}
    <path d="M 10 30 Q 30 10 40 40 Q 50 60 80 20" fill="none" stroke="#fcd34d" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.5" />
    <path d="M 80 80 Q 60 50 40 70 Q 20 90 10 60" fill="none" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />

    {/* Floating magical sparkles */}
    {Array.from({ length: 15 }).map((_, i) => (
      <circle key={`sparkle${i}`} cx={(i * 37) % 100} cy={(i * 29) % 100} r={((i * 13) % 100) / 100} fill="#fef08a" opacity={0.3 + (((i * 9) % 100) / 100)} />
    ))}

    {/* Elegant floating shelf */}
    <rect x="15" y="45" width="70" height="3" fill="#b45309" rx="1.5" />

    {/* Floating Books with bright colors */}
    <rect x="25" y="25" width="8" height="20" fill="#dc2626" rx="1" transform="rotate(-15 25 45)" />
    <rect x="35" y="30" width="6" height="15" fill="#3b82f6" rx="1" />
    <rect x="42" y="22" width="10" height="23" fill="#10b981" rx="1" transform="rotate(5 42 45)" />

    <rect x="65" y="30" width="6" height="15" fill="#a855f7" rx="1" />
    <rect x="73" y="15" width="8" height="30" fill="#f59e0b" rx="1" transform="rotate(10 73 45)" />
  </svg>
);

export const CosmicMathBg = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <linearGradient id="cosmicGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#311042" />
      </linearGradient>
      <radialGradient id="sunGlow" cx="0.8" cy="0.2" r="0.4">
        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Base dark space */}
    <rect width="100" height="100" fill="url(#cosmicGrad)" />

    {/* Sun glow top right */}
    <rect width="100" height="100" fill="url(#sunGlow)" />

    {/* Elliptical Orbits (representing his work on planetary motion) */}
    <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke="#6366f1" strokeWidth="0.5" strokeDasharray="2 2" transform="rotate(30 50 50)" />
    <ellipse cx="50" cy="50" rx="45" ry="20" fill="none" stroke="#8b5cf6" strokeWidth="0.5" strokeDasharray="3 3" transform="rotate(-20 50 50)" />
    <ellipse cx="50" cy="50" rx="25" ry="40" fill="none" stroke="#d946ef" strokeWidth="0.3" strokeDasharray="1 4" transform="rotate(10 50 50)" />

    {/* Geometry (Triangles/Math) */}
    <path d="M 15 80 L 35 80 L 25 60 Z" fill="none" stroke="#fcd34d" strokeWidth="0.5" strokeOpacity="0.6" />
    <circle cx="25" cy="70" r="10" fill="none" stroke="#fcd34d" strokeWidth="0.5" strokeOpacity="0.4" />
    <line x1="25" y1="60" x2="25" y2="80" stroke="#fcd34d" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="1 1" />

    {/* Crescent Moon (representing eclipses/astronomy) */}
    <path d="M 85 20 A 8 8 0 1 0 75 30 A 10 10 0 1 1 85 20 Z" fill="#e2e8f0" opacity="0.8" />

    {/* Stars */}
    {Array.from({ length: 30 }).map((_, i) => (
      <circle key={`star${i}`} cx={(i * 23) % 100} cy={(i * 17) % 100} r={((i * 11) % 100) / 100} fill="#ffffff" opacity={0.2 + (((i * 7) % 100) / 100)} />
    ))}
  </svg>
);

export const AncientNumbersBg = () => (
  <svg className="absolute inset-0 w-full h-full opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
    <rect width="100" height="100" fill="#451a03" />
    <text x="20" y="30" fill="rgba(255,255,255,0.1)" fontSize="20" fontFamily="serif">I</text>
    <text x="70" y="40" fill="rgba(255,255,255,0.1)" fontSize="30" fontFamily="serif">V</text>
    <text x="30" y="80" fill="rgba(255,255,255,0.1)" fontSize="25" fontFamily="serif">X</text>
    <text x="80" y="80" fill="rgba(255,255,255,0.1)" fontSize="20" fontFamily="serif">L</text>
  </svg>
);

// --- AURAS (z-0 / Animated behind body) ---
export const AlgebraAura = () => (
  <motion.div className="absolute inset-0 flex items-center justify-center opacity-60"
    animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
    <svg viewBox="0 0 200 200" className="w-[150%] h-[150%] drop-shadow-[0_0_15px_#d946ef]">
      <text x="30" y="50" fill="#d946ef" fontSize="30" fontWeight="bold">x</text>
      <text x="150" y="60" fill="#a855f7" fontSize="30" fontWeight="bold">y</text>
      <text x="100" y="160" fill="#ec4899" fontSize="40" fontWeight="bold">=</text>
      <text x="40" y="140" fill="#8b5cf6" fontSize="30" fontWeight="bold">f()</text>
      <circle cx="100" cy="100" r="80" fill="none" stroke="#d946ef" strokeWidth="2" strokeDasharray="10,10" />
    </svg>
  </motion.div>
);

export const InfinityAura = () => (
  <motion.div className="absolute inset-0 flex items-center justify-center opacity-60"
    animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_20px_#3b82f6]">
      <path d="M 25 50 C 10 50, 10 30, 25 30 C 40 30, 60 70, 75 70 C 90 70, 90 50, 75 50 C 60 50, 40 10, 25 10 Z" fill="none" stroke="#60a5fa" strokeWidth="4" />
    </svg>
  </motion.div>
);

export const LightningAura = () => (
  <div className="absolute inset-0 flex items-center justify-center opacity-70">
    <motion.svg viewBox="0 0 100 100" className="w-[120%] h-[120%] drop-shadow-[0_0_15px_#fde047]"
      animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.5, repeat: Infinity }}>
      <path d="M45,10 L30,50 L45,50 L35,90 L70,40 L50,40 Z" fill="#facc15" />
      <path d="M75,20 L65,50 L75,50 L65,80 L90,45 L75,45 Z" fill="#fde047" transform="scale(0.8) translate(10, 10)" />
      <path d="M25,20 L15,50 L25,50 L15,80 L40,45 L25,45 Z" fill="#fde047" transform="scale(0.7) translate(-10, 20)" />
    </motion.svg>
  </div>
);

export const VectorCape = () => (
  <div className="absolute top-[45%] left-[10%] w-[80%] h-[60%] -z-10">
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl opacity-90">
      <path d="M 20 0 L 80 0 L 95 100 L 50 80 L 5 100 Z" fill="#ef4444" />
      <path d="M 30 10 L 70 10 L 80 80 L 50 65 L 20 80 Z" fill="#b91c1c" />
    </svg>
  </div>
);

// --- CLOTHING OVERLAYS (z-20) ---
export const NumberShirt = () => (
  <div className="absolute top-[65%] left-[15%] w-[70%] h-[35%] pointer-events-none">
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
      <path d="M 10 0 L 0 100 L 100 100 L 90 0 Z" fill="#22c55e" />
      <text x="50" y="60" textAnchor="middle" fill="#ffffff" fontSize="40" fontWeight="900" fontFamily="sans-serif">123</text>
    </svg>
  </div>
);

export const SigmaHoodie = () => (
  <div className="absolute top-[65%] left-[15%] w-[70%] h-[35%] pointer-events-none">
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
      <path d="M 10 0 L 0 100 L 100 100 L 90 0 Z" fill="#a855f7" />
      <path d="M 30 0 L 50 30 L 70 0 Z" fill="#7e22ce" />
      <path d="M 35 40 L 65 40 L 50 55 L 65 70 L 35 70" fill="none" stroke="#f0abfc" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export const GraphHoodie = () => (
  <div className="absolute top-[65%] left-[15%] w-[70%] h-[35%] pointer-events-none">
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
      <path d="M 10 0 L 0 100 L 100 100 L 90 0 Z" fill="#3b82f6" />
      <path d="M 30 0 L 50 30 L 70 0 Z" fill="#1d4ed8" />
      <rect x="35" y="60" width="8" height="20" fill="#22c55e" />
      <rect x="46" y="45" width="8" height="35" fill="#eab308" />
      <rect x="57" y="30" width="8" height="50" fill="#ef4444" />
    </svg>
  </div>
);

export const FinanceJacket = () => (
  <div className="absolute top-[65%] left-[15%] w-[70%] h-[35%] pointer-events-none">
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
      <path d="M 10 0 L 0 100 L 100 100 L 90 0 Z" fill="#1e293b" opacity="0.95" />
      <path d="M 40 0 L 50 60 L 60 0 Z" fill="#cbd5e1" />
      {/* Tie */}
      <polygon points="45,20 55,20 52,60 50,65 48,60" fill="#ef4444" />
    </svg>
  </div>
);

export const TrainingOutfit = () => (
  <div className="absolute top-[65%] left-[15%] w-[70%] h-[35%] pointer-events-none">
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
      <path d="M 10 0 L 0 100 L 100 100 L 90 0 Z" fill="#ea580c" />
      <path d="M 20 0 L 50 60 L 80 0" fill="none" stroke="#ffedd5" strokeWidth="8" />
      <rect x="15" y="70" width="70" height="15" fill="#171717" />
    </svg>
  </div>
);

export const BaseTorso = ({ skinColor }) => (
  <path
    d="M 112 191.5 A 72 72 0 0 0 40 264 V 280 H 240 V 264 A 72 72 0 0 0 168 191.5 Q 140 215 112 191.5 Z"
    fill={skinColor}
  />
);

export const TenaliOutfit = ({ config }) => {
  const skinColorStr = config?.skinColor?.[0] || 'edb98a';
  const skinColor = `#${skinColorStr}`;

  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      <svg viewBox="0 0 280 280" className="w-full h-full drop-shadow-md" fill="none">

        {/* Base skin to cover modern clothes */}
        <BaseTorso skinColor={skinColor} />

        {/* Topknot (Shikha) sitting high on the crown with a playful curve */}
        <path d="M 135 40 Q 120 0 145 -10 Q 160 10 145 40 Z" fill="#2c1b18" />

        {/* Tripundra Tilak on Forehead (3 horizontal lines + red dot) */}
        <line x1="128" y1="67" x2="152" y2="67" stroke="#fcd34d" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="128" y1="72" x2="152" y2="72" stroke="#fcd34d" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="128" y1="77" x2="152" y2="77" stroke="#fcd34d" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="140" cy="72" r="2.5" fill="#dc2626" />

        {/* Diamond Gold Earrings (dangling from the ears) */}
        <path d="M 81 135 L 85 143 L 81 151 L 77 143 Z" fill="#fcd34d" stroke="#b45309" strokeWidth="1" />
        <circle cx="81" cy="135" r="2" fill="#fcd34d" />

        <path d="M 199 135 L 203 143 L 199 151 L 195 143 Z" fill="#fcd34d" stroke="#b45309" strokeWidth="1" />
        <circle cx="199" cy="135" r="2" fill="#fcd34d" />

        {/* Pearl Necklace (Mala) */}
        <path d="M 112 191.5 Q 140 250 168 191.5" stroke="#fcd34d" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 112 191.5 Q 140 250 168 191.5" stroke="#ffffff" strokeWidth="6" fill="none" strokeDasharray="8 4" strokeLinecap="round" />

        {/* Blue Drape (over viewer's right shoulder, leaving viewer's left shoulder bare) */}
        {/* It wraps from the right shoulder (168 to 240) down to the bottom left */}
        <path d="M 168 191.5 A 72 72 0 0 1 240 264 V 280 H 100 L 140 200 Z" fill="#0284c7" />

        {/* Drape Folds and details */}
        <path d="M 120 280 L 140 200" stroke="#0369a1" strokeWidth="3" fill="none" />
        <path d="M 160 280 L 160 220" stroke="#0369a1" strokeWidth="3" fill="none" />
        <path d="M 200 280 L 190 230" stroke="#0369a1" strokeWidth="3" fill="none" />

        {/* Gold and Brown border at the edge of the drape */}
        <path d="M 100 280 L 140 200" stroke="#78350f" strokeWidth="12" fill="none" strokeLinecap="round" />
        <path d="M 100 280 L 140 200" stroke="#fcd34d" strokeWidth="6" fill="none" strokeLinecap="round" />

        {/* Round Beaded Inner Necklace */}
        <path d="M 120 195 Q 140 240 160 195" stroke="#9a3412" strokeWidth="4" fill="none" strokeDasharray="5 3" strokeLinecap="round" />

        {/* Long V-Shaped Gold Chain */}
        <path d="M 112 191.5 L 140 270 L 168 191.5" stroke="#fcd34d" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 112 191.5 L 140 270 L 168 191.5" stroke="#b45309" strokeWidth="1" fill="none" strokeLinejoin="round" />

      </svg>
    </div>
  );
};

export const ScholarRobe = () => (
  <div className="absolute top-[65%] left-[10%] w-[80%] h-[35%] pointer-events-none">
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
      <path d="M 10 0 L 0 100 L 100 100 L 90 0 Z" fill="#991b1b" />
      <path d="M 30 0 L 50 60 L 70 0 Z" fill="#fef08a" />
    </svg>
  </div>
);

export const TenaliShawl = () => (
  <div className="absolute top-[65%] left-[15%] w-[70%] h-[35%] pointer-events-none">
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <path d="M 15 15 Q 50 60 85 15 Q 95 30 75 90 Q 50 100 25 90 Q 5 30 15 15 Z" fill="#fcd34d" />
      <path d="M 30 20 Q 50 40 70 20" fill="none" stroke="#fbbf24" strokeWidth="4" />
      {/* Pearl necklace */}
      <circle cx="40" cy="15" r="4" fill="#ffffff" />
      <circle cx="50" cy="18" r="4" fill="#ffffff" />
      <circle cx="60" cy="15" r="4" fill="#ffffff" />
    </svg>
  </div>
);

export const AryabhataStole = ({ config }) => {
  // Try to match the avatar's skin tone, default to light
  const skinColorStr = config?.skinColor?.[0] || 'edb98a';
  const skinColor = `#${skinColorStr}`;

  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      <svg viewBox="0 0 280 280" className="w-full h-full drop-shadow-md" fill="none">

        {/* Base skin to cover modern clothes */}
        <BaseTorso skinColor={skinColor} />

        {/* Tilak on Forehead (U-shape + dot) */}
        <path d="M 134 70 Q 140 90 146 70" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="140" cy="82" r="2.5" fill="#dc2626" />

        {/* Minimalist, small Vedic tuft (Shikha) at the back, behind the ear */}
        <path d="M 206 125 Q 215 140 210 170 Q 205 145 204 130 Z" fill="#2c1b18" />

        {/* Saffron Drape (Angavastram) over Left Shoulder (Viewer's left) */}
        <path d="M 112 191.5 A 72 72 0 0 0 40 264 V 280 H 160 L 130 220 Q 120 200 112 191.5 Z" fill="#ea580c" />
        {/* Drape folds */}
        <path d="M 115 195 Q 120 220 140 280" stroke="#c2410c" strokeWidth="3" fill="none" />
        <path d="M 90 220 Q 100 240 110 280" stroke="#c2410c" strokeWidth="3" fill="none" />
        <path d="M 60 250 Q 70 265 80 280" stroke="#c2410c" strokeWidth="3" fill="none" />

        {/* Long Rudraksha Necklace (Mala) hanging in a V-shape */}
        <path d="M 112 191.5 Q 140 270 168 191.5" stroke="#451a03" strokeWidth="4" fill="none" strokeDasharray="6 4" strokeLinecap="round" />

        {/* Gold Border on Drape */}
        <path d="M 160 280 L 130 220 Q 120 200 112 191.5" stroke="#fcd34d" strokeWidth="4" fill="none" />

        {/* Rudraksha Necklace */}
        {/* Inner loop */}
        <path d="M 112 191.5 Q 140 245 168 191.5" stroke="#451a03" strokeWidth="2" fill="none" strokeDasharray="6 4" strokeLinecap="round" />
        {/* Outer loop */}
        <path d="M 105 195 Q 140 265 175 195" stroke="#451a03" strokeWidth="3" fill="none" strokeDasharray="8 4" strokeLinecap="round" />

        {/* Large center bead (Pendant) */}
        <circle cx="140" cy="245" r="7" fill="#78350f" stroke="#451a03" strokeWidth="1" />
        <circle cx="140" cy="245" r="3" fill="#451a03" />

      </svg>
    </div>
  );
};

export const ChanakyaOutfit = ({ config }) => {
  const skinColorStr = config?.skinColor?.[0] || 'edb98a';
  const skinColor = `#${skinColorStr}`;

  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      <svg viewBox="0 0 280 280" className="w-full h-full drop-shadow-md" fill="none">

        {/* Base skin to cover modern clothes */}
        <BaseTorso skinColor={skinColor} />

        {/* Shikha (ponytail) showing behind the right side of the head (behind ear) */}
        <path d="M 206 125 Q 220 145 215 190 Q 205 160 204 130 Z" fill="#2c1b18" />

        {/* Tripundra Tilak on Forehead (3 horizontal lines + red dot) */}
        <line x1="128" y1="67" x2="152" y2="67" stroke="#fcd34d" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="128" y1="72" x2="152" y2="72" stroke="#fcd34d" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="128" y1="77" x2="152" y2="77" stroke="#fcd34d" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="140" cy="72" r="2.5" fill="#dc2626" />

        {/* Round Bead Earrings (Rudraksha style) */}
        <circle cx="81" cy="135" r="4" fill="#9a3412" stroke="#451a03" strokeWidth="1" />
        <circle cx="199" cy="135" r="4" fill="#9a3412" stroke="#451a03" strokeWidth="1" />

        {/* Orange Drape (over viewer's right shoulder, leaving viewer's left shoulder bare) */}
        <path d="M 168 191.5 A 72 72 0 0 1 240 264 V 280 H 100 L 140 200 Z" fill="#f97316" />

        {/* Drape Folds and details */}
        <path d="M 120 280 L 140 200" stroke="#ea580c" strokeWidth="3" fill="none" />
        <path d="M 160 280 L 160 220" stroke="#ea580c" strokeWidth="3" fill="none" />
        <path d="M 200 280 L 190 230" stroke="#ea580c" strokeWidth="3" fill="none" />

        {/* Darker orange border at the edge of the drape */}
        <path d="M 100 280 L 140 200" stroke="#c2410c" strokeWidth="6" fill="none" strokeLinecap="round" />

        {/* Long Rudraksha Necklace hanging in a V-shape */}
        <path d="M 112 191.5 Q 140 270 168 191.5" stroke="#451a03" strokeWidth="4" fill="none" strokeDasharray="6 4" strokeLinecap="round" />
        {/* Second smaller inner loop of rudraksha */}
        <path d="M 120 195 Q 140 240 160 195" stroke="#451a03" strokeWidth="3" fill="none" strokeDasharray="5 3" strokeLinecap="round" />

      </svg>
    </div>
  );
};

export const ChitraguptaScroll = ({ config }) => {
  const skinColorStr = config?.skinColor?.[0] || 'edb98a';
  const skinColor = `#${skinColorStr}`;

  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      <svg viewBox="0 0 280 280" className="w-full h-full drop-shadow-md" fill="none">

        {/* Base skin to cover modern clothes */}
        <BaseTorso skinColor={skinColor} />

        {/* --- Turban (Shifted UP to reveal eyes) --- */}
        <g transform="translate(0, -25)">
          {/* Main Red Turban matching the reference shape */}
          <path d="M 35 100 C 25 40 100 10 160 20 C 220 30 260 70 230 110 C 210 140 160 125 140 125 C 90 125 50 145 35 100 Z" fill="#ef4444" />
          {/* Turban Folds */}
          <path d="M 40 95 Q 120 150 225 105" fill="none" stroke="#dc2626" strokeWidth="6" strokeLinecap="round" />
          <path d="M 55 70 Q 140 130 220 75" fill="none" stroke="#dc2626" strokeWidth="5" strokeLinecap="round" />
          <path d="M 85 40 Q 150 100 205 50" fill="none" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" />
          {/* Circular fold/swirl on the right (NO white spot, just red folds) */}
          <circle cx="195" cy="75" r="16" fill="none" stroke="#dc2626" strokeWidth="4" />
          <circle cx="195" cy="75" r="6" fill="#dc2626" />
        </g>

        {/* Small orange Tilak dot */}
        <circle cx="140" cy="100" r="3" fill="#f97316" />

        {/* Round Glasses (spectacles) - Black rims */}
        <circle cx="115" cy="125" r="15" fill="none" stroke="#1f2937" strokeWidth="3" />
        <circle cx="165" cy="125" r="15" fill="none" stroke="#1f2937" strokeWidth="3" />
        <path d="M 130 125 Q 140 120 150 125" fill="none" stroke="#1f2937" strokeWidth="3" />
        <line x1="85" y1="120" x2="100" y2="125" stroke="#1f2937" strokeWidth="3" />
        <line x1="195" y1="120" x2="180" y2="125" stroke="#1f2937" strokeWidth="3" />

        {/* Handlebar Mustache (Curly at the ends) */}
        <path d="M 140 145 Q 110 145 90 130 Q 105 160 140 155 Z" fill="#1f2937" />
        <path d="M 140 145 Q 170 145 190 130 Q 175 160 140 155 Z" fill="#1f2937" />

        {/* Yellow Kurta */}
        <path d="M 112 191.5 A 72 72 0 0 0 40 264 V 280 H 240 V 264 A 72 72 0 0 0 168 191.5 Q 140 220 112 191.5 Z" fill="#facc15" />
        {/* Drape over left shoulder (Viewer's right) */}
        <path d="M 168 191.5 A 72 72 0 0 1 240 264 V 280 H 140 Q 145 230 168 191.5 Z" fill="#eab308" />
        {/* Kurta folds */}
        <path d="M 112 191.5 Q 120 220 100 280" stroke="#ca8a04" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 140 220 Q 145 250 130 280" stroke="#ca8a04" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 168 191.5 Q 165 240 170 280" stroke="#ca8a04" strokeWidth="3" fill="none" strokeLinecap="round" />

      </svg>
    </div>
  );
};

// --- ACCESSORIES (z-30 / Body) ---
export const CalculatorBadge = () => (
  <div className="absolute top-[75%] right-[28%] w-[15%]">
    <svg viewBox="0 0 60 80" className="w-full drop-shadow-md">
      <rect x="5" y="5" width="50" height="70" rx="8" fill="#334155" />
      <rect x="12" y="15" width="36" height="20" rx="4" fill="#94a3b8" />
      <circle cx="18" cy="45" r="5" fill="#cbd5e1" />
      <circle cx="30" cy="45" r="5" fill="#cbd5e1" />
      <circle cx="42" cy="45" r="5" fill="#cbd5e1" />
      <circle cx="18" cy="60" r="5" fill="#cbd5e1" />
      <circle cx="30" cy="60" r="5" fill="#cbd5e1" />
      <circle cx="42" cy="60" r="5" fill="#f59e0b" />
    </svg>
  </div>
);

export const CompassAccessory = () => (
  <div className="absolute top-[70%] left-[25%] w-[15%]">
    <svg viewBox="0 0 50 80" className="w-full drop-shadow-md">
      <circle cx="25" cy="15" r="5" fill="#94a3b8" />
      <line x1="25" y1="15" x2="10" y2="70" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
      <line x1="25" y1="15" x2="40" y2="70" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
      <path d="M 10 70 L 12 75 L 8 75 Z" fill="#475569" />
      <path d="M 40 70 L 42 75 L 38 75 Z" fill="#475569" />
    </svg>
  </div>
);

export const CoordinateCompass = () => (
  <div className="absolute top-[75%] right-[25%] w-[15%]">
    <svg viewBox="0 0 50 50" className="w-full drop-shadow-md">
      <circle cx="25" cy="25" r="20" fill="#f8fafc" stroke="#0ea5e9" strokeWidth="3" />
      <polygon points="25,5 30,25 25,45 20,25" fill="#ef4444" />
      <polygon points="5,25 25,20 45,25 25,30" fill="#94a3b8" />
      <circle cx="25" cy="25" r="3" fill="#0f172a" />
    </svg>
  </div>
);

export const FormulaNotebook = () => (
  <div className="absolute top-[72%] left-[25%] w-[18%]">
    <svg viewBox="0 0 50 70" className="w-full drop-shadow-md">
      <rect x="10" y="5" width="30" height="60" rx="2" fill="#ef4444" />
      <rect x="15" y="15" width="20" height="15" fill="#ffffff" />
      <text x="25" y="26" textAnchor="middle" fontSize="10" fontWeight="bold">E=mc²</text>
      <line x1="5" y1="10" x2="10" y2="10" stroke="#1e293b" strokeWidth="2" />
      <line x1="5" y1="20" x2="10" y2="20" stroke="#1e293b" strokeWidth="2" />
      <line x1="5" y1="30" x2="10" y2="30" stroke="#1e293b" strokeWidth="2" />
      <line x1="5" y1="40" x2="10" y2="40" stroke="#1e293b" strokeWidth="2" />
    </svg>
  </div>
);

export const DiceBackpack = () => (
  <div className="absolute top-[55%] left-[15%] w-[25%] -z-10">
    <svg viewBox="0 0 50 50" className="w-full drop-shadow-lg">
      <rect x="5" y="5" width="40" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
      <circle cx="15" cy="15" r="4" fill="#ef4444" />
      <circle cx="35" cy="35" r="4" fill="#ef4444" />
      <circle cx="25" cy="25" r="4" fill="#ef4444" />
    </svg>
  </div>
);

export const GoldenFormula = () => (
  <div className="absolute top-[70%] right-[25%] w-[15%] transform rotate-12">
    <svg viewBox="0 0 40 80" className="w-full drop-shadow-md">
      <rect x="10" y="5" width="20" height="70" fill="#fef3c7" />
      <ellipse cx="20" cy="5" rx="10" ry="3" fill="#fde68a" />
      <ellipse cx="20" cy="75" rx="10" ry="3" fill="#fcd34d" />
      <path d="M 12 20 L 28 25 M 12 40 L 25 35 M 15 60 L 28 55" stroke="#92400e" strokeWidth="2" fill="none" />
    </svg>
  </div>
);

export const MoneyBag = () => (
  <div className="absolute top-[65%] left-[20%] w-[20%]">
    <svg viewBox="0 0 60 80" className="w-full drop-shadow-lg">
      <path d="M 20 20 Q 5 50 10 70 Q 30 80 50 70 Q 55 50 40 20 Q 30 10 20 20 Z" fill="#d4d4d8" />
      <rect x="25" y="10" width="10" height="15" fill="#fcd34d" />
      <text x="30" y="55" textAnchor="middle" fill="#166534" fontSize="24" fontWeight="bold">$</text>
    </svg>
  </div>
);

export const InvestorBadge = () => (
  <div className="absolute top-[75%] right-[28%] w-[15%]">
    <svg viewBox="0 0 40 40" className="w-full drop-shadow-sm">
      <circle cx="20" cy="20" r="18" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
      <path d="M 10 25 L 18 15 L 24 20 L 32 10" stroke="#16a34a" strokeWidth="3" fill="none" />
      <polygon points="32,10 26,10 32,16" fill="#16a34a" />
    </svg>
  </div>
);

export const ChampionMedal = () => (
  <div className="absolute top-[68%] left-1/2 -translate-x-1/2 w-[22%]">
    <svg viewBox="0 0 100 100" className="w-full drop-shadow-md">
      <path d="M 25 0 L 50 60 L 75 0 Z" fill="#b91c1c" />
      <path d="M 35 0 L 50 60 L 65 0 Z" fill="#fcd34d" />
      <circle cx="50" cy="75" r="25" fill="#f59e0b" stroke="#b45309" strokeWidth="3" />
      <circle cx="50" cy="75" r="20" fill="#fbbf24" />
      <text x="50" y="85" textAnchor="middle" fill="#78350f" fontSize="28" fontWeight="bold">1</text>
    </svg>
  </div>
);

// --- HATS / CROWNS (z-30 / Head) ---
export const PuzzleCrown = () => (
  <motion.div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[35%]"
    animate={{ y: [-3, 3, -3] }} transition={{ duration: 3, repeat: Infinity }}>
    <svg viewBox="0 0 100 60" className="w-full drop-shadow-lg">
      <path d="M 5 50 L 15 10 L 35 30 L 50 5 L 65 30 L 85 10 L 95 50 Z" fill="#fbbf24" stroke="#b45309" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="15" cy="10" r="4" fill="#ef4444" />
      <circle cx="50" cy="5" r="5" fill="#3b82f6" />
      <circle cx="85" cy="10" r="4" fill="#22c55e" />
      <path d="M 30 40 L 70 40" stroke="#b45309" strokeWidth="3" strokeLinecap="round" />
    </svg>
  </motion.div>
);

export const StatisticsCap = () => (
  <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[50%]">
    <svg viewBox="0 0 100 60" className="w-full drop-shadow-lg">
      <polygon points="50,10 90,30 50,45 10,30" fill="#1e293b" />
      <polygon points="50,15 85,30 50,40 15,30" fill="#334155" />
      <rect x="40" y="45" width="20" height="10" fill="#1e293b" />
      <path d="M 85 30 L 85 50" stroke="#fcd34d" strokeWidth="3" />
      <circle cx="85" cy="55" r="4" fill="#fcd34d" />
    </svg>
  </div>
);

// --- EYEWEAR (z-30 / Face) ---
export const GeometryGlasses = () => (
  <div className="absolute top-[42%] left-1/2 -translate-x-1/2 w-[50%]">
    <svg viewBox="0 0 100 40" className="w-full drop-shadow-md">
      <line x1="5" y1="10" x2="95" y2="10" stroke="#1e293b" strokeWidth="4" />
      <rect x="15" y="5" width="25" height="25" fill="rgba(56, 189, 248, 0.5)" stroke="#ef4444" strokeWidth="3" />
      <polygon points="72,5 85,30 60,30" fill="rgba(234, 179, 8, 0.5)" stroke="#3b82f6" strokeWidth="3" />
    </svg>
  </div>
);

export const LogicGlasses = () => (
  <div className="absolute top-[42%] left-1/2 -translate-x-1/2 w-[50%]">
    <svg viewBox="0 0 100 30" className="w-full drop-shadow-[0_0_8px_#22c55e]">
      <rect x="5" y="5" width="90" height="20" rx="10" fill="rgba(34, 197, 94, 0.4)" stroke="#22c55e" strokeWidth="3" />
      <line x1="20" y1="15" x2="80" y2="15" stroke="#22c55e" strokeWidth="2" strokeDasharray="5,5" />
    </svg>
  </div>
);

// --- STANDARD BACKGROUNDS ---
export const GalaxyClassroomBg = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs><radialGradient id="galGrad" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#4c1d95" /><stop offset="100%" stopColor="#0f172a" /></radialGradient></defs>
    <rect width="100" height="100" fill="url(#galGrad)" />
    {Array.from({ length: 40 }).map((_, i) => <circle key={i} cx={(i * 13) % 100} cy={(i * 27) % 100} r={((i * 7) % 100) / 125} fill="#ffffff" opacity={0.5 + (((i * 3) % 100) / 200)} />)}
    <path d="M 10 90 Q 50 60 90 90" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
  </svg>
);

export const AncientTempleBg = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <rect width="100" height="100" fill="#e2e8f0" />
    <rect x="10" y="20" width="15" height="80" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
    <rect x="75" y="20" width="15" height="80" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
    <polygon points="5,20 95,20 50,0" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
  </svg>
);

export const MathLabBg = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <rect width="100" height="100" fill="#14532d" />
    <rect x="5" y="5" width="90" height="90" fill="none" stroke="#b45309" strokeWidth="4" />
    <text x="15" y="30" fill="rgba(255,255,255,0.6)" fontSize="10" fontFamily="serif" transform="rotate(-5)">E = mc²</text>
    <text x="70" y="70" fill="rgba(255,255,255,0.5)" fontSize="12" fontFamily="serif">πr²</text>
    <text x="20" y="80" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="serif">a² + b² = c²</text>
    <path d="M 60 20 Q 70 10 80 30 T 90 20" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
  </svg>
);

export const SpaceExplorerBg = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <rect width="100" height="100" fill="#020617" />
    <circle cx="80" cy="20" r="15" fill="#fcd34d" />
    <circle cx="20" cy="80" r="8" fill="#38bdf8" />
    <ellipse cx="20" cy="80" rx="14" ry="3" fill="none" stroke="#94a3b8" strokeWidth="1" transform="rotate(20 20 80)" />
    {Array.from({ length: 30 }).map((_, i) => <circle key={i} cx={(i * 19) % 100} cy={(i * 31) % 100} r={((i * 11) % 100) / 100} fill="#ffffff" opacity={0.6} />)}
  </svg>
);

export const OrangeGradientBg = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs><linearGradient id="orgGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#f59e0b" /><stop offset="100%" stopColor="#dc2626" /></linearGradient></defs>
    <rect width="100" height="100" fill="url(#orgGrad)" />
    <circle cx="10" cy="10" r="40" fill="rgba(255,255,255,0.1)" />
    <circle cx="90" cy="90" r="30" fill="rgba(255,255,255,0.1)" />
  </svg>
);

export const PurpleGlowBg = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs><radialGradient id="purpGrad" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#d946ef" /><stop offset="100%" stopColor="#581c87" /></radialGradient></defs>
    <rect width="100" height="100" fill="url(#purpGrad)" />
  </svg>
);

export const LibraryBg = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <rect width="100" height="100" fill="#451a03" />
    <rect x="0" y="30" width="100" height="4" fill="#78350f" />
    <rect x="0" y="60" width="100" height="4" fill="#78350f" />
    <rect x="0" y="90" width="100" height="4" fill="#78350f" />
    {/* Books */}
    <rect x="10" y="10" width="8" height="20" fill="#b91c1c" />
    <rect x="20" y="12" width="6" height="18" fill="#1d4ed8" />
    <rect x="28" y="15" width="7" height="15" fill="#15803d" />

    <rect x="60" y="40" width="8" height="20" fill="#0369a1" />
    <rect x="70" y="35" width="9" height="25" fill="#a16207" />

    <rect x="30" y="70" width="6" height="20" fill="#c2410c" />
    <rect x="40" y="75" width="5" height="15" fill="#4d7c0f" transform="skewX(-10) translate(12, -7)" />
  </svg>
);

export const ForestClassroomBg = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs><linearGradient id="forGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#86efac" /><stop offset="100%" stopColor="#14532d" /></linearGradient></defs>
    <rect width="100" height="100" fill="url(#forGrad)" />
    {/* Trees */}
    <path d="M 20 100 L 25 50 L 30 100 Z" fill="#064e3b" />
    <path d="M 70 100 L 75 40 L 80 100 Z" fill="#065f46" />
    <path d="M 40 100 L 50 60 L 60 100 Z" fill="#022c22" />
  </svg>
);

export const BlueSkyBg = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs><linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#bae6fd" /></linearGradient></defs>
    <rect width="100" height="100" fill="url(#skyGrad)" />
    <circle cx="85" cy="15" r="10" fill="#fef08a" />
    <path d="M 10 30 Q 20 20 30 30 Q 40 20 50 35 Q 30 45 10 30 Z" fill="#ffffff" opacity="0.8" />
    <path d="M 60 40 Q 70 30 80 40 Q 90 30 95 45 Q 80 50 60 40 Z" fill="#ffffff" opacity="0.9" />
  </svg>
);

export const DarkUniverseBg = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <rect width="100" height="100" fill="#020617" />
    <path d="M 0 100 Q 50 50 100 0 L 100 100 Z" fill="rgba(30, 58, 138, 0.4)" />
    <path d="M 0 50 Q 50 0 100 50 L 0 50 Z" fill="rgba(88, 28, 135, 0.3)" />
    {Array.from({ length: 50 }).map((_, i) => <circle key={i} cx={(i * 17) % 100} cy={(i * 23) % 100} r={((i * 13) % 100) * 1.5 / 100} fill="#ffffff" opacity={0.3 + (((i * 7) % 100) * 0.7 / 100)} />)}
  </svg>
);

export const EmeraldCityBg = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs><linearGradient id="emGrad" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#064e3b" /><stop offset="100%" stopColor="#10b981" /></linearGradient></defs>
    <rect width="100" height="100" fill="url(#emGrad)" />
    <polygon points="10,100 20,40 30,100" fill="rgba(255,255,255,0.2)" />
    <polygon points="30,100 50,20 70,100" fill="rgba(255,255,255,0.3)" />
    <polygon points="65,100 80,35 95,100" fill="rgba(255,255,255,0.2)" />
    <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
  </svg>
);
