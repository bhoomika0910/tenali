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

export const DEFAULT_UNLOCK_COST = 50;

export const COSMETIC_PRICES = {
  // Top / Hats
  "curvy": 75, "dreads": 100, "fro": 100, "shavedSides": 75, "shaggyMullet": 120, "bigHair": 150,
  "hat": 100, "turban": 120, "winterHat02": 150, "winterHat03": 150, "winterHat04": 200,

  // Accessories
  "prescription01": 50, "prescription02": 75, "round": 100, "sunglasses": 150, "wayfarers": 150, "eyepatch": 200,

  // Clothing
  "blazerAndSweater": 150, "graphicShirt": 100, "hoodie": 120, "overall": 100, "blazerAndShirt": 200,

  // Backgrounds (Hex Colors map to standard SVGs)
  "f3eafe": 150, // Math Lab
  "eaffed": 200, // Space Explorer
  "3b82f6": 250, // Dark Universe
  "22c55e": 200, // Emerald City
  "f97316": 150, // Forest Classroom
  "a855f7": 150, // Blue Sky

  // Premium Math Collection & Custom Outfits
  "champion_medal": 1000,
  "puzzle_crown": 800,
  "tenali_outfit": 1500,
  "aryabhata_outfit": 1500,
  "chanakya_outfit": 1500,
  "chitragupta_outfit": 1500,
  "golden_palace_bg": 1000,
  "vector_cape": 600,
  "finance_jacket": 700,
  "scholar_robe": 750,
  "lightning_aura": 1200,
  "infinity_aura": 1000,
  "algebra_aura": 800,
  "golden_formula": 500,
  "logic_glasses": 500,
  "geometry_glasses": 400
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

export const BACKGROUNDS = {
  explorer_bg: { type: 'custom_bg', name: 'Explorer Gradient' },
  blueprint_bg: { type: 'custom_bg', name: 'Tech Blueprint' },
  grid_bg: { type: 'custom_bg', name: 'Data Grid' },
  golden_palace_bg: { type: 'custom_bg', name: 'Golden Palace' },
  bookshelf_bg: { type: 'custom_bg', name: 'Scholar Bookshelf' },
  cosmic_math_bg: { type: 'custom_bg', name: 'Cosmic Mathematics' },
  ancient_numbers_bg: { type: 'custom_bg', name: 'Ancient Numbers' }
};

export const CUSTOM_REWARDS = {
  explorer_bg: { type: 'custom_bg', base: { backgroundColor: ['transparent'] } },
  blueprint_bg: { type: 'custom_bg', base: { backgroundColor: ['transparent'] } },
  grid_bg: { type: 'custom_bg', base: { backgroundColor: ['transparent'] } },
  golden_palace_bg: { type: 'custom_bg', base: { backgroundColor: ['transparent'] } },
  bookshelf_bg: { type: 'custom_bg', base: { backgroundColor: ['transparent'] } },
  cosmic_math_bg: { type: 'custom_bg', base: { backgroundColor: ['transparent'] } },
  ancient_numbers_bg: { type: 'custom_bg', base: { backgroundColor: ['transparent'] } },
  
  algebra_aura: { type: 'custom_bg', base: { backgroundColor: ['transparent'] } },
  infinity_aura: { type: 'custom_bg', base: { backgroundColor: ['transparent'] } },
  lightning_aura: { type: 'custom_bg', base: { backgroundColor: ['transparent'] } },
  
  vector_cape: { type: 'outfit_macro', base: { clothing: ['shirtCrewNeck'], clothesColor: ['ff5c5c'] } },
  number_shirt: { type: 'outfit_macro', base: { clothing: ['graphicShirt'], clothesColor: ['a7ffc4'] } },
  sigma_hoodie: { type: 'outfit_macro', base: { clothing: ['hoodie'], clothesColor: ['a855f7'] } },
  graph_hoodie: { type: 'outfit_macro', base: { clothing: ['hoodie'], clothesColor: ['3b82f6'] } },
  finance_jacket: { type: 'outfit_macro', base: { clothing: ['blazerAndShirt'], clothesColor: ['262e33'] } },
  training_outfit: { type: 'outfit_macro', base: { clothing: ['shirtVNeck'], clothesColor: ['ff5c5c'] } },
  scholar_robe: { type: 'outfit_macro', base: { clothing: ['blazerAndSweater'], clothesColor: ['3c4f5c'] } },
  tenali_outfit: { type: 'outfit_macro', base: { top: [], accessories: [], clothing: [], eyes: ['default'], eyebrows: ['defaultNatural'], mouth: ['smile'], custom_clothing: ['tenali_outfit'], custom_bg: ['golden_palace_bg'] } },
  aryabhata_outfit: { type: 'outfit_macro', base: { top: [], accessories: [], clothing: [], eyes: ['default'], eyebrows: ['defaultNatural'], mouth: ['default'], custom_clothing: ['aryabhata_outfit'], custom_bg: ['cosmic_math_bg'] } },
  chanakya_outfit: { type: 'outfit_macro', base: { top: [], accessories: [], clothing: [], eyes: ['happy'], eyebrows: ['defaultNatural'], mouth: ['smile'], custom_clothing: ['chanakya_outfit'], custom_bg: ['ancient_library_bg'] } },
  chitragupta_outfit: { type: 'outfit_macro', base: { top: [], accessories: [], clothing: [], eyes: ['default'], eyebrows: ['defaultNatural'], mouth: ['smile'], custom_clothing: ['chitragupta_outfit'], custom_bg: ['bookshelf_bg'] } },
  
  calculator_badge: { type: 'outfit_macro', base: { clothing: ['collarAndSweater'], clothesColor: ['929598'], accessories: ['prescription01'] } },
  compass_accessory: { type: 'outfit_macro', base: { clothing: ['overall'], clothesColor: ['b1e2ff'], accessories: ['round'] } },
  coordinate_compass: { type: 'outfit_macro', base: { clothing: ['shirtCrewNeck'], clothesColor: ['65c9ff'], accessories: ['wayfarers'] } },
  formula_notebook: { type: 'outfit_macro', base: { clothing: ['blazerAndSweater'], clothesColor: ['ff488e'], accessories: ['prescription02'] } },
  dice_backpack: { type: 'outfit_macro', base: { clothing: ['hoodie'], clothesColor: ['e6e6e6'], top: ['winterHat03'] } },
  golden_formula: { type: 'outfit_macro', base: { clothing: ['graphicShirt'], clothesColor: ['ffffb1'], accessories: ['sunglasses'] } },
  money_bag: { type: 'outfit_macro', base: { clothing: ['overall'], clothesColor: ['a7ffc4'], accessories: ['wayfarers'] } },
  investor_badge: { type: 'outfit_macro', base: { clothing: ['blazerAndShirt'], clothesColor: ['262e33'], accessories: ['sunglasses'] } },
  champion_medal: { type: 'outfit_macro', base: { clothing: ['shirtScoopNeck'], clothesColor: ['ff5c5c'], accessories: ['sunglasses'], top: ['bigHair'] } },
  
  puzzle_crown: { type: 'outfit_macro', base: { top: ['winterHat02'] } },
  statistics_cap: { type: 'outfit_macro', base: { top: ['hat'] } },
  
  geometry_glasses: { type: 'outfit_macro', base: { accessories: ['round'] } },
  logic_glasses: { type: 'outfit_macro', base: { accessories: ['prescription02'] } },
};

