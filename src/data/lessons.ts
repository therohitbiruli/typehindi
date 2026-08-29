export interface Lesson {
  id: number;
  title: string;
  description: string;
  characters: string[];
  practiceWords: string[];
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Vowels",
    description: "Learn the primary Hindi vowels. These characters are located on the left side of the InScript keyboard.",
    characters: ["अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ", "अं", "अः"],
    practiceWords: ["आम", "इमली", "ऊँट", "एक", "ओस", "औरत", "अंगूर"],
  },
  {
    id: 2,
    title: "Consonants - Part 1",
    description: "Learn Hindi consonants from क to ण. These characters are located on the right side of the InScript keyboard.",
    characters: ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण"],
    practiceWords: ["कमल", "खरगोश", "गमला", "घर", "चमक", "जल", "टमाटर"],
  },
  {
    id: 3,
    title: "Consonants - Part 2",
    description: "Learn Hindi consonants from त to ह.",
    characters: ["त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह"],
    practiceWords: ["तरबूज", "नमक", "पानी", "बादल", "महल", "रास्ता", "सपना", "हवा"],
  },
  {
    id: 4,
    title: "Matras (Vowel Signs)",
    description: "Practice vowel diacritics (matras) that attach to consonants to form words.",
    characters: ["ा", "ि", "ी", "ु", "ू", "े", "ै", "ो", "ौ", "ृ", "ं", "ँ", "ः"],
    practiceWords: ["काम", "किताब", "कीमत", "कुल", "कूद", "केला", "कैसा", "कोई", "कौन"],
  },
  {
    id: 5,
    title: "Conjuncts & Words",
    description: "Learn to form conjunct (half) letters by using the halant (्) key.",
    characters: ["क्", "त्", "प्", "स्", "न्", "म्"],
    practiceWords: ["प्रकाश", "स्वतंत्रता", "विद्यालय", "कर्मचारी", "संस्कृति", "अध्ययन", "परीक्षा"],
  },
  {
    id: 6,
    title: "Common Sentences",
    description: "Practice common daily sentences. This will help build your overall Hindi typing speed and sentence flow.",
    characters: [],
    practiceWords: [
      "मेरा नाम हिंदी है।",
      "भारत मेरा देश है।",
      "आज मौसम अच्छा है।",
      "कृपया यहाँ बैठिए।",
      "आपका धन्यवाद।",
    ],
  },
];
