export const CATEGORIES = [
  { id: 'top', label: 'Hair & Hats', icon: 'Scissors' },
  { id: 'hairColor', label: 'Hair Color', icon: 'Palette' },
  { id: 'eyes', label: 'Eyes', icon: 'Eye' },
  { id: 'eyebrows', label: 'Eyebrows', icon: 'Minus' },
  { id: 'mouth', label: 'Mouth', icon: 'Smile' },
  { id: 'skinColor', label: 'Skin Tone', icon: 'User' },
  { id: 'clothing', label: 'Clothes', icon: 'Shirt' },
  { id: 'clothesColor', label: 'Clothes Color', icon: 'Palette' },
  { id: 'accessories', label: 'Glasses & Eyewear', icon: 'Glasses' },
  { id: 'backgroundColor', label: 'Background', icon: 'Image' },
  { id: 'math_collection', label: 'Math Collections', icon: 'Sparkles' }
];

export const OPTIONS = {
  top: [
    "bob", "bun", "curly", "curvy", "dreads", "frida", "fro", "froBand", 
    "longButNotTooLong", "miaWallace", "shavedSides", "straight02", "straight01", 
    "straightAndStrand", "dreads01", "dreads02", "frizzle", "shaggy", "shaggyMullet", 
    "shortCurly", "shortFlat", "shortRound", "shortWaved", "sides", "theCaesar", 
    "theCaesarAndSidePart", "bigHair",
    "hat", "hijab", "turban", "winterHat1", "winterHat02", "winterHat03", "winterHat04"
  ],
  accessories: [
    "none", "kurt", "prescription01", "prescription02", "round", "sunglasses", "wayfarers", "eyepatch"
  ],
  clothing: [
    "blazerAndShirt", "blazerAndSweater", "collarAndSweater", "graphicShirt", 
    "hoodie", "overall", "shirtCrewNeck", "shirtScoopNeck", "shirtVNeck"
  ],
  eyes: [
    "closed", "cry", "default", "eyeRoll", "happy", "hearts", "side", "squint", 
    "surprised", "winkWacky", "wink", "xDizzy"
  ],
  eyebrows: [
    "angryNatural", "defaultNatural", "flatNatural", "frownNatural", 
    "raisedExcitedNatural", "sadConcernedNatural", "unibrowNatural", 
    "upDownNatural", "angry", "default", "raisedExcited", "sadConcerned", "upDown"
  ],
  mouth: [
    "concerned", "default", "disbelief", "eating", "grimace", "sad", 
    "screamOpen", "serious", "smile", "tongue", "twinkle", "vomit"
  ],
  skinColor: [
    "ffdbb4", "edb98a", "d08b5b", "ae5d29", "614335", "fd9841", "f8d25c"
  ],
  hairColor: [
    "2c1b18", "4a312c", "724133", "a55728", "b58143", "d6b370", "ecdcbf", "e8e1e1", "f59797", "c93305"
  ],
  clothesColor: [
    "262e33", "65c9ff", "5199e4", "25557c", "e6e6e6", "929598", "3c4f5c", "b1e2ff", "a7ffc4", "ffafb9", "ffffb1", "ff488e", "ff5c5c", "ffffff"
  ],
  backgroundColor: [
    "ffedea", "eaf4ff", "f3eafe", "eaffed", "fffbea", "ffeaed", "transparent", "f97316", "a855f7", "3b82f6", "22c55e"
  ],
  custom_clothing: [],
  custom_bg: [],
  custom_hat: [],
  custom_eyewear: [],
  custom_accessory: [],
  outfit_macro: []
};

export const COLOR_NAMES = {
  // Backgrounds
  "ffedea": "Galaxy Classroom",
  "eaf4ff": "Ancient Temple",
  "f3eafe": "Math Lab",
  "eaffed": "Space Explorer",
  "fffbea": "Orange Gradient",
  "ffeaed": "Purple Glow",
  "transparent": "Library",
  "f97316": "Forest Classroom",
  "a855f7": "Blue Sky",
  "3b82f6": "Dark Universe",
  "22c55e": "Emerald City",
  // Skin Tones
  "ffdbb4": "Pale", "edb98a": "Light", "d08b5b": "Medium", "ae5d29": "Tanned", "614335": "Dark", "fd9841": "Orange", "f8d25c": "Yellow",
  // Hair Colors
  "2c1b18": "Black", "4a312c": "Dark Brown", "724133": "Brown", "a55728": "Auburn", "b58143": "Golden", "d6b370": "Blonde", "ecdcbf": "Platinum", "e8e1e1": "Silver", "f59797": "Pink", "c93305": "Red",
  // Clothes Colors
  "262e33": "Black", "65c9ff": "Cyan", "5199e4": "Blue", "25557c": "Navy", "e6e6e6": "Light Gray", "929598": "Gray", "3c4f5c": "Dark Gray", "b1e2ff": "Pastel Blue", "a7ffc4": "Pastel Green", "ffafb9": "Pastel Pink", "ffffb1": "Pastel Yellow", "ff488e": "Hot Pink", "ff5c5c": "Red", "ffffff": "White"
};

// Dynamic cosmetics will be populated here
export const COSMETICS = {};

export const DEFAULT_AVATAR = {
  gender: 'boy',
  top: ['shortWaved'],
  hairColor: ['2c1b18'],
  eyes: ['happy'],
  eyebrows: ['defaultNatural'],
  mouth: ['smile'],
  skinColor: ['edb98a'],
  clothing: ['hoodie'],
  clothesColor: ['5199e4'],
  accessories: [],
  backgroundColor: ['transparent'],
  custom_clothing: [],
  custom_bg: [],
  custom_hat: [],
  custom_eyewear: [],
  custom_accessory: [],
  outfit_macro: []
};

export const CUSTOM_REWARDS = {
  explorer_bg: { type: 'custom_bg', base: { backgroundColor: ['transparent'] } },
  blueprint_bg: { type: 'custom_bg', base: { backgroundColor: ['transparent'] } },
  grid_bg: { type: 'custom_bg', base: { backgroundColor: ['transparent'] } },
  golden_palace_bg: { type: 'custom_bg', base: { backgroundColor: ['transparent'] } },
  ancient_numbers_bg: { type: 'custom_bg', base: { backgroundColor: ['transparent'] } },
  
  algebra_aura: { type: 'custom_bg', base: { backgroundColor: ['transparent'] } },
  infinity_aura: { type: 'custom_bg', base: { backgroundColor: ['transparent'] } },
  lightning_aura: { type: 'custom_bg', base: { backgroundColor: ['transparent'] } },
  
  vector_cape: { type: 'custom_clothing', base: {} },
  number_shirt: { type: 'custom_clothing', base: {} },
  sigma_hoodie: { type: 'custom_clothing', base: {} },
  graph_hoodie: { type: 'custom_clothing', base: {} },
  finance_jacket: { type: 'custom_clothing', base: {} },
  training_outfit: { type: 'custom_clothing', base: {} },
  scholar_robe: { type: 'custom_clothing', base: {} },
  tenali_outfit: { type: 'outfit_macro', base: {} },
  aryabhata_outfit: { type: 'outfit_macro', base: {} },
  chanakya_outfit: { type: 'outfit_macro', base: {} },
  chitragupta_outfit: { type: 'outfit_macro', base: {} },
  
  calculator_badge: { type: 'custom_accessory', base: {} },
  compass_accessory: { type: 'custom_accessory', base: {} },
  coordinate_compass: { type: 'custom_accessory', base: {} },
  formula_notebook: { type: 'custom_accessory', base: {} },
  dice_backpack: { type: 'custom_accessory', base: {} },
  golden_formula: { type: 'custom_accessory', base: {} },
  money_bag: { type: 'custom_accessory', base: {} },
  investor_badge: { type: 'custom_accessory', base: {} },
  champion_medal: { type: 'custom_accessory', base: {} },
  
  puzzle_crown: { type: 'custom_hat', base: {} },
  statistics_cap: { type: 'custom_hat', base: {} },
  
  geometry_glasses: { type: 'custom_eyewear', base: {} },
  logic_glasses: { type: 'custom_eyewear', base: {} },
};
