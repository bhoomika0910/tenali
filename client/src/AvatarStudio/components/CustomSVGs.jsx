import React from 'react';
import { motion } from 'framer-motion';

// --- BACKGROUNDS (z-0) ---
export const ExplorerBg = () => (
  <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs><linearGradient id="expGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#1e3a8a"/><stop offset="100%" stopColor="#10b981"/></linearGradient></defs>
    <rect width="100" height="100" fill="url(#expGrad)" />
    <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="5,5" />
    <circle cx="50" cy="50" r="2" fill="white" />
  </svg>
);

export const BlueprintBg = () => (
  <svg className="absolute inset-0 w-full h-full opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
    <rect width="100" height="100" fill="#1e40af" />
    <g stroke="rgba(255,255,255,0.2)" strokeWidth="1">
      {Array.from({length: 10}).map((_, i) => <line key={`h${i}`} x1="0" y1={i*10} x2="100" y2={i*10} />)}
      {Array.from({length: 10}).map((_, i) => <line key={`v${i}`} x1={i*10} y1="0" x2={i*10} y2="100" />)}
    </g>
    <polygon points="50,20 80,80 20,80" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
  </svg>
);

export const GridBg = () => (
  <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
    <rect width="100" height="100" fill="#0f172a" />
    <g stroke="rgba(255,255,255,0.15)" strokeWidth="1">
      {Array.from({length: 20}).map((_, i) => <line key={`h${i}`} x1="0" y1={i*5} x2="100" y2={i*5} />)}
      {Array.from({length: 20}).map((_, i) => <line key={`v${i}`} x1={i*5} y1="0" x2={i*5} y2="100" />)}
    </g>
    <line x1="50" y1="0" x2="50" y2="100" stroke="#38bdf8" strokeWidth="2" />
    <line x1="0" y1="50" x2="100" y2="50" stroke="#38bdf8" strokeWidth="2" />
  </svg>
);

export const GoldenPalaceBg = () => (
  <svg className="absolute inset-0 w-full h-full opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs><linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#78350f"/><stop offset="100%" stopColor="#b45309"/></linearGradient></defs>
    <rect width="100" height="100" fill="url(#goldGrad)" />
    <rect x="10" y="20" width="10" height="80" fill="#fcd34d" />
    <rect x="80" y="20" width="10" height="80" fill="#fcd34d" />
    <path d="M5,20 Q50,0 95,20 Z" fill="#fbbf24" />
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
  <div className="absolute top-[35%] left-[20%] w-[60%] h-[60%] -z-10">
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl opacity-90">
      <path d="M 20 0 L 80 0 L 95 100 L 50 80 L 5 100 Z" fill="#ef4444" />
      <path d="M 30 10 L 70 10 L 80 80 L 50 65 L 20 80 Z" fill="#b91c1c" />
    </svg>
  </div>
);

// --- CLOTHING OVERLAYS (z-20) ---
export const NumberShirt = () => (
  <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[35%]">
    <svg viewBox="0 0 100 50" className="w-full">
      <text x="50" y="35" textAnchor="middle" fill="#ffffff" fontSize="30" fontWeight="900" fontFamily="sans-serif">1 2 3</text>
    </svg>
  </div>
);

export const SigmaHoodie = () => (
  <div className="absolute top-[65%] left-1/2 -translate-x-1/2 w-[25%]">
    <svg viewBox="0 0 50 50" className="w-full drop-shadow-[0_0_10px_#a855f7]">
      <path d="M10,10 L40,10 L25,25 L40,40 L10,40" fill="none" stroke="#d946ef" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export const GraphHoodie = () => (
  <div className="absolute top-[65%] left-1/2 -translate-x-1/2 w-[25%]">
    <svg viewBox="0 0 50 50" className="w-full">
      <rect x="5" y="30" width="10" height="15" fill="#3b82f6" />
      <rect x="20" y="15" width="10" height="30" fill="#22c55e" />
      <rect x="35" y="5" width="10" height="40" fill="#eab308" />
    </svg>
  </div>
);

export const FinanceJacket = () => (
  <div className="absolute top-[50%] left-[25%] w-[50%] h-[40%] pointer-events-none">
    <svg viewBox="0 0 100 100" className="w-full h-full opacity-80">
      {/* Pinstripes for jacket */}
      <line x1="20" y1="0" x2="20" y2="100" stroke="#fbbf24" strokeWidth="2" />
      <line x1="40" y1="0" x2="40" y2="100" stroke="#fbbf24" strokeWidth="2" />
      <line x1="60" y1="0" x2="60" y2="100" stroke="#fbbf24" strokeWidth="2" />
      <line x1="80" y1="0" x2="80" y2="100" stroke="#fbbf24" strokeWidth="2" />
    </svg>
  </div>
);

export const TrainingOutfit = () => (
  <div className="absolute top-[50%] left-[25%] w-[50%] h-[40%] pointer-events-none">
    <svg viewBox="0 0 100 100" className="w-full h-full opacity-90">
      <path d="M0,20 Q50,40 100,20" fill="none" stroke="#ffffff" strokeWidth="8" />
      <path d="M0,40 Q50,60 100,40" fill="none" stroke="#ffffff" strokeWidth="8" />
    </svg>
  </div>
);

export const ScholarRobe = () => (
  <div className="absolute top-[50%] left-[30%] w-[40%] h-[50%] pointer-events-none">
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M20,0 L40,100 L60,100 L80,0" fill="#b91c1c" opacity="0.9" />
      <line x1="30" y1="0" x2="50" y2="100" stroke="#facc15" strokeWidth="2" />
      <line x1="70" y1="0" x2="50" y2="100" stroke="#facc15" strokeWidth="2" />
    </svg>
  </div>
);

export const TenaliShawl = () => (
  <div className="absolute top-[48%] left-[20%] w-[60%] h-[45%] pointer-events-none">
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M10,0 Q50,50 90,0 Q95,50 50,100 Q5,50 10,0" fill="#fcd34d" opacity="0.8" />
      {/* Pearl necklace */}
      <circle cx="30" cy="20" r="3" fill="#ffffff" />
      <circle cx="40" cy="25" r="3" fill="#ffffff" />
      <circle cx="50" cy="28" r="4" fill="#ffffff" />
      <circle cx="60" cy="25" r="3" fill="#ffffff" />
      <circle cx="70" cy="20" r="3" fill="#ffffff" />
    </svg>
  </div>
);

export const AryabhataStole = () => (
  <div className="absolute top-[48%] left-[20%] w-[60%] h-[45%] pointer-events-none">
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M20,0 Q50,80 80,0" fill="none" stroke="#ea580c" strokeWidth="15" />
      <circle cx="50" cy="50" r="8" fill="#78350f" />
    </svg>
  </div>
);

export const ChanakyaBeads = () => (
  <div className="absolute top-[50%] left-[35%] w-[30%] h-[40%] pointer-events-none">
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {Array.from({length: 12}).map((_, i) => (
        <circle key={i} cx={50 + 40 * Math.cos(i * Math.PI/6)} cy={40 + 40 * Math.sin(i * Math.PI/6)} r="6" fill="#451a03" />
      ))}
    </svg>
  </div>
);

export const ChitraguptaScroll = () => (
  <div className="absolute top-[55%] right-[25%] w-[20%] h-[30%] pointer-events-none">
    <svg viewBox="0 0 50 100" className="w-full h-full drop-shadow-md">
      <rect x="10" y="10" width="30" height="80" fill="#fef3c7" />
      <rect x="5" y="5" width="40" height="10" fill="#92400e" />
      <rect x="5" y="85" width="40" height="10" fill="#92400e" />
    </svg>
  </div>
);

// --- ACCESSORIES (z-30 / Body) ---
export const CalculatorBadge = () => (
  <div className="absolute top-[60%] right-[35%] w-[12%]">
    <svg viewBox="0 0 50 60" className="w-full drop-shadow-sm">
      <rect x="5" y="5" width="40" height="50" rx="5" fill="#334155" />
      <rect x="10" y="10" width="30" height="15" fill="#94a3b8" />
      <circle cx="15" cy="35" r="4" fill="#64748b" />
      <circle cx="25" cy="35" r="4" fill="#64748b" />
      <circle cx="35" cy="35" r="4" fill="#64748b" />
      <circle cx="15" cy="45" r="4" fill="#64748b" />
      <circle cx="25" cy="45" r="4" fill="#64748b" />
      <circle cx="35" cy="45" r="4" fill="#f59e0b" />
    </svg>
  </div>
);

export const CompassAccessory = () => (
  <div className="absolute top-[55%] left-[30%] w-[15%]">
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
  <div className="absolute top-[60%] right-[35%] w-[15%]">
    <svg viewBox="0 0 50 50" className="w-full drop-shadow-md">
      <circle cx="25" cy="25" r="20" fill="#f8fafc" stroke="#0ea5e9" strokeWidth="3" />
      <polygon points="25,5 30,25 25,45 20,25" fill="#ef4444" />
      <polygon points="5,25 25,20 45,25 25,30" fill="#94a3b8" />
      <circle cx="25" cy="25" r="3" fill="#0f172a" />
    </svg>
  </div>
);

export const FormulaNotebook = () => (
  <div className="absolute top-[55%] left-[35%] w-[15%]">
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
  <div className="absolute top-[45%] left-[22%] w-[18%] -z-10">
    <svg viewBox="0 0 50 50" className="w-full drop-shadow-lg">
      <rect x="5" y="5" width="40" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
      <circle cx="15" cy="15" r="4" fill="#ef4444" />
      <circle cx="35" cy="35" r="4" fill="#ef4444" />
      <circle cx="25" cy="25" r="4" fill="#ef4444" />
    </svg>
  </div>
);

export const GoldenFormula = () => (
  <div className="absolute top-[65%] right-[32%] w-[12%] transform rotate-12">
    <svg viewBox="0 0 40 80" className="w-full drop-shadow-md">
      <rect x="10" y="5" width="20" height="70" fill="#fef3c7" />
      <ellipse cx="20" cy="5" rx="10" ry="3" fill="#fde68a" />
      <ellipse cx="20" cy="75" rx="10" ry="3" fill="#fcd34d" />
      <path d="M 12 20 L 28 25 M 12 40 L 25 35 M 15 60 L 28 55" stroke="#92400e" strokeWidth="2" fill="none" />
    </svg>
  </div>
);

export const MoneyBag = () => (
  <div className="absolute top-[60%] left-[32%] w-[15%]">
    <svg viewBox="0 0 60 80" className="w-full drop-shadow-lg">
      <path d="M 20 20 Q 5 50 10 70 Q 30 80 50 70 Q 55 50 40 20 Q 30 10 20 20 Z" fill="#d4d4d8" />
      <rect x="25" y="10" width="10" height="15" fill="#fcd34d" />
      <text x="30" y="55" textAnchor="middle" fill="#166534" fontSize="24" fontWeight="bold">$</text>
    </svg>
  </div>
);

export const InvestorBadge = () => (
  <div className="absolute top-[55%] right-[38%] w-[10%]">
    <svg viewBox="0 0 40 40" className="w-full drop-shadow-sm">
      <circle cx="20" cy="20" r="18" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
      <path d="M 10 25 L 18 15 L 24 20 L 32 10" stroke="#16a34a" strokeWidth="3" fill="none" />
      <polygon points="32,10 26,10 32,16" fill="#16a34a" />
    </svg>
  </div>
);

export const ChampionMedal = () => (
  <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[18%]">
    <svg viewBox="0 0 60 100" className="w-full drop-shadow-md">
      <path d="M 10 0 L 30 40 L 50 0 Z" fill="#b91c1c" />
      <path d="M 20 0 L 30 40 L 40 0 Z" fill="#fcd34d" />
      <circle cx="30" cy="60" r="20" fill="#fbbf24" stroke="#d97706" strokeWidth="3" />
      <text x="30" y="68" textAnchor="middle" fill="#92400e" fontSize="24" fontWeight="bold">1</text>
    </svg>
  </div>
);

// --- HATS / CROWNS (z-30 / Head) ---
export const PuzzleCrown = () => (
  <motion.div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[28%]"
    animate={{ y: [-2, 2, -2] }} transition={{ duration: 2, repeat: Infinity }}>
    <svg viewBox="0 0 100 60" className="w-full drop-shadow-lg">
      <path d="M 10 50 L 20 10 L 35 25 L 50 5 L 65 25 L 80 10 L 90 50 Z" fill="#fbbf24" stroke="#b45309" strokeWidth="2" />
      {/* Puzzle piece cutouts */}
      <circle cx="35" cy="40" r="6" fill="#b45309" />
      <circle cx="65" cy="40" r="6" fill="#b45309" />
      <circle cx="50" cy="30" r="6" fill="#b45309" />
    </svg>
  </motion.div>
);

export const StatisticsCap = () => (
  <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[35%]">
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
  <div className="absolute top-[32%] left-1/2 -translate-x-1/2 w-[40%]">
    <svg viewBox="0 0 100 40" className="w-full drop-shadow-md">
      <line x1="10" y1="20" x2="90" y2="20" stroke="#1e293b" strokeWidth="4" />
      {/* Left Lens: Square */}
      <rect x="15" y="5" width="30" height="30" rx="2" fill="rgba(56, 189, 248, 0.4)" stroke="#ef4444" strokeWidth="4" />
      {/* Right Lens: Triangle */}
      <polygon points="70,5 90,35 50,35" fill="rgba(56, 189, 248, 0.4)" stroke="#eab308" strokeWidth="4" />
    </svg>
  </div>
);

export const LogicGlasses = () => (
  <div className="absolute top-[33%] left-1/2 -translate-x-1/2 w-[38%]">
    <svg viewBox="0 0 100 40" className="w-full drop-shadow-[0_0_8px_#22c55e]">
      <line x1="15" y1="15" x2="85" y2="15" stroke="#22c55e" strokeWidth="3" />
      <circle cx="30" cy="20" r="15" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="3" />
      <circle cx="70" cy="20" r="15" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="3" />
      <path d="M 25 20 L 35 20 M 30 15 L 30 25" stroke="#22c55e" strokeWidth="2" />
      <path d="M 65 20 L 75 20" stroke="#22c55e" strokeWidth="2" />
    </svg>
  </div>
);

// --- STANDARD BACKGROUNDS ---
export const GalaxyClassroomBg = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs><radialGradient id="galGrad" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#4c1d95"/><stop offset="100%" stopColor="#0f172a"/></radialGradient></defs>
    <rect width="100" height="100" fill="url(#galGrad)" />
    {Array.from({length: 40}).map((_, i) => <circle key={i} cx={(i * 13) % 100} cy={(i * 27) % 100} r={((i * 7) % 100) / 125} fill="#ffffff" opacity={0.5 + (((i * 3) % 100) / 200)} />)}
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
    {Array.from({length: 30}).map((_, i) => <circle key={i} cx={(i * 19) % 100} cy={(i * 31) % 100} r={((i * 11) % 100) / 100} fill="#ffffff" opacity={0.6} />)}
  </svg>
);

export const OrangeGradientBg = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs><linearGradient id="orgGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#f59e0b"/><stop offset="100%" stopColor="#dc2626"/></linearGradient></defs>
    <rect width="100" height="100" fill="url(#orgGrad)" />
    <circle cx="10" cy="10" r="40" fill="rgba(255,255,255,0.1)" />
    <circle cx="90" cy="90" r="30" fill="rgba(255,255,255,0.1)" />
  </svg>
);

export const PurpleGlowBg = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs><radialGradient id="purpGrad" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#d946ef"/><stop offset="100%" stopColor="#581c87"/></radialGradient></defs>
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
    <defs><linearGradient id="forGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#86efac"/><stop offset="100%" stopColor="#14532d"/></linearGradient></defs>
    <rect width="100" height="100" fill="url(#forGrad)" />
    {/* Trees */}
    <path d="M 20 100 L 25 50 L 30 100 Z" fill="#064e3b" />
    <path d="M 70 100 L 75 40 L 80 100 Z" fill="#065f46" />
    <path d="M 40 100 L 50 60 L 60 100 Z" fill="#022c22" />
  </svg>
);

export const BlueSkyBg = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs><linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#38bdf8"/><stop offset="100%" stopColor="#bae6fd"/></linearGradient></defs>
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
    {Array.from({length: 50}).map((_, i) => <circle key={i} cx={(i * 17) % 100} cy={(i * 23) % 100} r={((i * 13) % 100) * 1.5 / 100} fill="#ffffff" opacity={0.3 + (((i * 7) % 100) * 0.7 / 100)} />)}
  </svg>
);

export const EmeraldCityBg = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs><linearGradient id="emGrad" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#064e3b"/><stop offset="100%" stopColor="#10b981"/></linearGradient></defs>
    <rect width="100" height="100" fill="url(#emGrad)" />
    <polygon points="10,100 20,40 30,100" fill="rgba(255,255,255,0.2)" />
    <polygon points="30,100 50,20 70,100" fill="rgba(255,255,255,0.3)" />
    <polygon points="65,100 80,35 95,100" fill="rgba(255,255,255,0.2)" />
    <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
  </svg>
);
