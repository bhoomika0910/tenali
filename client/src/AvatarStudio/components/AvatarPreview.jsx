import React, { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';
import { motion } from 'framer-motion';

import {
  ExplorerBg, BlueprintBg, GridBg, GoldenPalaceBg, AncientNumbersBg,
  AlgebraAura, InfinityAura, LightningAura, VectorCape,
  NumberShirt, SigmaHoodie, GraphHoodie, FinanceJacket, TrainingOutfit, ScholarRobe, TenaliShawl, AryabhataStole, ChanakyaBeads, ChitraguptaScroll,
  CalculatorBadge, CompassAccessory, CoordinateCompass, FormulaNotebook, DiceBackpack, GoldenFormula, MoneyBag, InvestorBadge, ChampionMedal,
  PuzzleCrown, StatisticsCap,
  GeometryGlasses, LogicGlasses,
  // Standard backgrounds
  GalaxyClassroomBg, AncientTempleBg, MathLabBg, SpaceExplorerBg, OrangeGradientBg, PurpleGlowBg, LibraryBg, ForestClassroomBg, BlueSkyBg, DarkUniverseBg, EmeraldCityBg
} from './CustomSVGs';

export const SVG_MAP = {
  explorer_bg: ExplorerBg,
  blueprint_bg: BlueprintBg,
  grid_bg: GridBg,
  golden_palace_bg: GoldenPalaceBg,
  ancient_numbers_bg: AncientNumbersBg,
  
  algebra_aura: AlgebraAura,
  infinity_aura: InfinityAura,
  lightning_aura: LightningAura,
  
  vector_cape: VectorCape,
  number_shirt: NumberShirt,
  sigma_hoodie: SigmaHoodie,
  graph_hoodie: GraphHoodie,
  finance_jacket: FinanceJacket,
  training_outfit: TrainingOutfit,
  scholar_robe: ScholarRobe,
  tenali_outfit: TenaliShawl,
  aryabhata_outfit: AryabhataStole,
  chanakya_outfit: ChanakyaBeads,
  chitragupta_outfit: ChitraguptaScroll,
  
  calculator_badge: CalculatorBadge,
  compass_accessory: CompassAccessory,
  coordinate_compass: CoordinateCompass,
  formula_notebook: FormulaNotebook,
  dice_backpack: DiceBackpack,
  golden_formula: GoldenFormula,
  money_bag: MoneyBag,
  investor_badge: InvestorBadge,
  champion_medal: ChampionMedal,
  
  puzzle_crown: PuzzleCrown,
  statistics_cap: StatisticsCap,
  
  geometry_glasses: GeometryGlasses,
  logic_glasses: LogicGlasses
};

export const STANDARD_BG_MAP = {
  "ffedea": GalaxyClassroomBg,
  "eaf4ff": AncientTempleBg,
  "f3eafe": MathLabBg,
  "eaffed": SpaceExplorerBg,
  "fffbea": OrangeGradientBg,
  "ffeaed": PurpleGlowBg,
  "transparent": LibraryBg,
  "f97316": ForestClassroomBg,
  "a855f7": BlueSkyBg,
  "3b82f6": DarkUniverseBg,
  "22c55e": EmeraldCityBg
};

export default function AvatarPreview({ config }) {
  // Generate the SVG data URI using DiceBear
  const avatarUri = useMemo(() => {
    const avatar = createAvatar(avataaars, {
      seed: 'tenali',
      ...config,
      backgroundColor: ['transparent'], // Force transparent so our Custom SVG backgrounds show through perfectly
      accessoriesProbability: 100,
      size: 512,
    });
    return avatar.toDataUri();
  }, [config]);

  // Determine Custom Components
  const CustomBg = SVG_MAP[config?.custom_bg?.[0]];
  const StandardBg = STANDARD_BG_MAP[config?.backgroundColor?.[0]];
  const BgToRender = CustomBg || StandardBg || LibraryBg;
  
  const CustomClothing = SVG_MAP[config?.custom_clothing?.[0]] || SVG_MAP[config?.outfit_macro?.[0]];
  const CustomAccessory = SVG_MAP[config?.custom_accessory?.[0]];
  const CustomHat = SVG_MAP[config?.custom_hat?.[0]];
  const CustomEyewear = SVG_MAP[config?.custom_eyewear?.[0]];

  return (
    <div className="w-full flex flex-col items-center justify-center relative h-full min-h-[300px] overflow-hidden rounded-2xl">
      {/* Dynamic Background or Default Soft Glow */}
      {BgToRender ? (
        <BgToRender />
      ) : (
        <div 
          className="absolute w-[60%] h-[60%] rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: 'var(--clr-accent)' }}
        />
      )}
      
      {/* Platform/Base shadow */}
      <div className="absolute bottom-10 w-48 lg:w-64 h-8 bg-black/10 dark:bg-black/40 blur-md rounded-full shadow-[0_0_20px_rgba(0,0,0,0.1)]" />

      {/* Floating Avatar Container */}
      <motion.div
        className="relative z-10 w-full h-full flex justify-center items-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative w-full h-full max-w-[80%] max-h-[80%] flex justify-center items-center overflow-visible">
          <img
            src={avatarUri}
            alt="Avatar Preview"
            className="w-full h-full object-contain drop-shadow-2xl z-10 relative"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          
          {/* Custom Overlays (Absolutely positioned within the floating container) */}
          <div className="absolute inset-0 pointer-events-none z-20 flex justify-center items-center">
            {CustomClothing && <CustomClothing />}
            {CustomAccessory && <CustomAccessory />}
            {CustomHat && <CustomHat />}
            {CustomEyewear && <CustomEyewear />}
          </div>
        </div>
      </motion.div>
      
      {/* Decorative elements (Only show if no custom BG is equipped) */}
      {!CustomBg && (
        <>
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
        </>
      )}
    </div>
  );
}
