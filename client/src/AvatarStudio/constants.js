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
    "2c1b18", "4a3123", "b58143", "d6b370", "724133", "a55728", "e8e1e1", "e5a073", "f59797", "ec008c", "506af4", "137e5e"
  ],
  clothesColor: [
    "262e33", "65c9ff", "5199e4", "25557c", "e6e6e6", "929598", "a7ffc4", "ffdeb5", "ffafb9", "ffffb1", "ff5c5c", "e32727"
  ],
  backgroundColor: [
    "ffedea", "eaf4ff", "f3eafe", "eaffed", "fffbea", "ffeaed", "transparent", "f97316", "a855f7", "3b82f6", "22c55e"
  ]
};

// Math-themed cosmetics (Locked items placeholders)
export const COSMETICS = {
  accessories: [
    { id: 'math_glasses', label: 'Geometry Glasses', condition: 'Complete Chapter 5', locked: true },
    { id: 'calc_watch', label: 'Calculator Watch', condition: 'Reach Level 8', locked: true }
  ],
  clothing: [
    { id: 'algebra_hoodie', label: 'Algebra Hoodie', condition: 'Finish Geometry Course', locked: true },
    { id: 'pi_tshirt', label: 'π Pi T-Shirt', condition: 'Earn 1000 Coins', locked: true },
    { id: 'sigma_hoodie', label: '∑ Sigma Hoodie', condition: 'Master Algebra', locked: true }
  ],
  top: [
    { id: 'grad_cap', label: 'Graduation Cap', condition: 'Finish All Grades', locked: true },
    { id: 'math_wizard', label: 'Math Wizard Hat', condition: '100 Day Streak', locked: true },
    { id: 'number_crown', label: 'Number Crown', condition: 'Rank 1 in Leaderboard', locked: true }
  ],
  backgroundColor: [
    { id: 'galaxy', label: 'Galaxy Background', condition: 'Earn 5000 Coins', locked: true },
    { id: 'math_temple', label: 'Ancient Maths Temple', condition: 'Solve 100 Puzzles', locked: true },
    { id: 'stem_lab', label: 'STEM Lab', condition: 'Complete Science Chapter', locked: true }
  ]
};

export const DEFAULT_AVATAR = {
  gender: 'boy', // Used for defaults if needed
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
};
