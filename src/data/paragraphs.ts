export interface Paragraph {
  id: number;
  text: string;
  difficulty: "easy" | "medium" | "hard";
  category: string;
  wordCount: number;
}

export const paragraphs: Paragraph[] = [
  // ===== EASY =====
  {
    id: 1,
    text: "भारत एक महान देश है। यहाँ अनेक भाषाएँ बोली जाती हैं। हिंदी हमारी राष्ट्रभाषा है। हमें अपनी भाषा पर गर्व होना चाहिए। भारत की संस्कृति बहुत पुरानी है। यहाँ के लोग मिलजुल कर रहते हैं। हम सबको अपने देश से प्रेम करना चाहिए। शिक्षा हर बच्चे का अधिकार है।",
    difficulty: "easy",
    category: "सामान्य",
    wordCount: 44,
  },
  {
    id: 2,
    text: "पर्यावरण की रक्षा करना हम सबका कर्तव्य है। पेड़ हमें ऑक्सीजन देते हैं। हमें अधिक से अधिक पेड़ लगाने चाहिए। जल ही जीवन है इसलिए हमें पानी बचाना चाहिए। प्रदूषण को कम करने के लिए हमें मिलकर प्रयास करने होंगे। स्वच्छ भारत अभियान में सबको भाग लेना चाहिए।",
    difficulty: "easy",
    category: "पर्यावरण",
    wordCount: 47,
  },
  {
    id: 3,
    text: "कंप्यूटर आज के समय में बहुत उपयोगी है। इसका प्रयोग हर क्षेत्र में हो रहा है। सरकारी कार्यालयों में कंप्यूटर का उपयोग बढ़ रहा है। हिंदी में टाइपिंग सीखना आज के समय में बहुत जरूरी है। इंस्क्रिप्ट कीबोर्ड भारत सरकार द्वारा मानकीकृत है।",
    difficulty: "easy",
    category: "कंप्यूटर",
    wordCount: 41,
  },
  // ===== MEDIUM =====
  {
    id: 4,
    text: "भारत सरकार ने डिजिटल इंडिया अभियान के तहत सभी सरकारी कार्यालयों में हिंदी टाइपिंग को अनिवार्य कर दिया है। कर्मचारी चयन आयोग की परीक्षाओं में हिंदी टाइपिंग की गति कम से कम पच्चीस शब्द प्रति मिनट होनी चाहिए। इसके लिए नियमित अभ्यास आवश्यक है। इंस्क्रिप्ट कीबोर्ड लेआउट का उपयोग करने से टाइपिंग की गति में उल्लेखनीय सुधार होता है क्योंकि यह ध्वन्यात्मक सिद्धांत पर आधारित है।",
    difficulty: "medium",
    category: "सरकारी परीक्षा",
    wordCount: 62,
  },
  {
    id: 5,
    text: "लोकतंत्र में नागरिकों के अधिकार और कर्तव्य दोनों महत्वपूर्ण हैं। भारतीय संविधान ने प्रत्येक नागरिक को मौलिक अधिकार प्रदान किए हैं जिनमें समानता का अधिकार, स्वतंत्रता का अधिकार, शोषण के विरुद्ध अधिकार, धार्मिक स्वतंत्रता का अधिकार, संस्कृति और शिक्षा संबंधी अधिकार तथा संवैधानिक उपचारों का अधिकार शामिल है। इसके साथ ही हर नागरिक का यह कर्तव्य है कि वह संविधान का पालन करे और राष्ट्रीय ध्वज तथा राष्ट्रगान का सम्मान करे।",
    difficulty: "medium",
    category: "संविधान",
    wordCount: 73,
  },
  {
    id: 6,
    text: "सूचना प्रौद्योगिकी ने आधुनिक जीवन को पूरी तरह बदल दिया है। इंटरनेट के माध्यम से हम विश्व के किसी भी कोने से सूचना प्राप्त कर सकते हैं। ई-गवर्नेंस के अंतर्गत सरकारी सेवाओं को ऑनलाइन उपलब्ध कराया जा रहा है। आधार कार्ड, पैन कार्ड, पासपोर्ट आदि के लिए ऑनलाइन आवेदन करना संभव हो गया है। डिजिटल भुगतान के माध्यम से वित्तीय लेनदेन आसान और पारदर्शी हो गए हैं।",
    difficulty: "medium",
    category: "सूचना प्रौद्योगिकी",
    wordCount: 65,
  },
  // ===== HARD =====
  {
    id: 7,
    text: "भारतीय अर्थव्यवस्था विश्व की पाँचवीं सबसे बड़ी अर्थव्यवस्था है। सकल घरेलू उत्पाद के मामले में भारत ने उल्लेखनीय प्रगति की है। कृषि क्षेत्र भारतीय अर्थव्यवस्था की रीढ़ है जिसमें देश की लगभग पचास प्रतिशत जनसंख्या संलग्न है। औद्योगिक क्षेत्र में भी तीव्र विकास हो रहा है। सेवा क्षेत्र सकल घरेलू उत्पाद में सबसे अधिक योगदान देता है। विदेशी प्रत्यक्ष निवेश को आकर्षित करने के लिए सरकार ने अनेक सुधारात्मक कदम उठाए हैं जिनमें मेक इन इंडिया, स्टार्टअप इंडिया और आत्मनिर्भर भारत अभियान प्रमुख हैं।",
    difficulty: "hard",
    category: "अर्थव्यवस्था",
    wordCount: 83,
  },
  {
    id: 8,
    text: "कर्मचारी चयन आयोग द्वारा आयोजित संयुक्त स्नातक स्तरीय परीक्षा देश की प्रमुख प्रतियोगी परीक्षाओं में से एक है। इस परीक्षा के माध्यम से विभिन्न मंत्रालयों एवं विभागों में लिपिक वर्ग के पदों पर भर्ती की जाती है। परीक्षा में सफल अभ्यर्थियों को कंप्यूटर दक्षता परीक्षा उत्तीर्ण करनी होती है जिसमें हिंदी अथवा अंग्रेजी में कम से कम पैंतीस शब्द प्रति मिनट की गति से टाइपिंग करनी होती है। हिंदी टाइपिंग के लिए इंस्क्रिप्ट अथवा रेमिंगटन कीबोर्ड लेआउट का विकल्प दिया जाता है।",
    difficulty: "hard",
    category: "एसएससी परीक्षा",
    wordCount: 85,
  },
  {
    id: 9,
    text: "भारतीय न्यायपालिका विश्व की सबसे स्वतंत्र न्यायपालिकाओं में से एक है। सर्वोच्च न्यायालय भारत का शीर्ष न्यायिक निकाय है जो संविधान की व्याख्या और मौलिक अधिकारों की रक्षा करता है। उच्च न्यायालय राज्य स्तर पर न्याय प्रशासन का कार्य करते हैं। जिला न्यायालय और अधीनस्थ न्यायालय स्थानीय स्तर पर न्याय प्रदान करते हैं। लोक अदालतों के माध्यम से विवादों का शीघ्र और सस्ता निपटारा किया जाता है। सरकार ने न्यायिक सुधारों के अंतर्गत ई-कोर्ट परियोजना आरंभ की है जिसके तहत न्यायालयों का डिजिटलीकरण किया जा रहा है।",
    difficulty: "hard",
    category: "न्यायपालिका",
    wordCount: 88,
  },
  {
    id: 10,
    text: "राष्ट्रीय शिक्षा नीति के अनुसार भारत में शिक्षा व्यवस्था में व्यापक सुधार किए जा रहे हैं। मातृभाषा में शिक्षा पर विशेष बल दिया गया है। व्यावसायिक शिक्षा को प्रोत्साहन देने के लिए कौशल विकास कार्यक्रम चलाए जा रहे हैं। उच्च शिक्षा में अनुसंधान को बढ़ावा देने के लिए राष्ट्रीय अनुसंधान प्रतिष्ठान की स्थापना की गई है।",
    difficulty: "hard",
    category: "शिक्षा नीति",
    wordCount: 53,
  },
];

// ===== ENGLISH PARAGRAPHS FOR TIMED TESTING =====
export const englishParagraphs: Paragraph[] = [
  {
    id: 201,
    text: "The quick brown fox jumps over the lazy dog. This is a very common sentence that contains every letter of the English alphabet. Typing it repeatedly helps build muscle memory for touch typing. Focus on keeping your fingers on the home row keys.",
    difficulty: "easy",
    category: "General",
    wordCount: 44,
  },
  {
    id: 202,
    text: "Technology has changed the way we live and work. Computers are used in almost every office and school. Learning to type quickly and accurately is an essential skill in the modern world. Consistent daily practice of thirty minutes will yield great results.",
    difficulty: "easy",
    category: "Technology",
    wordCount: 43,
  },
  {
    id: 203,
    text: "Continuous practice is the key to mastering typing. Initially, you should focus on key placement and accuracy rather than speed. Once your fingers memorize the positions of the letters, your WPM speed will increase naturally and error rates will drop.",
    difficulty: "medium",
    category: "Education",
    wordCount: 42,
  },
  {
    id: 204,
    text: "Competitive exams for government jobs often include a mandatory typing speed test. For example, Staff Selection Commission candidates are required to achieve a minimum speed of thirty-five words per minute in English. It is evaluated with strict rules regarding backspaces.",
    difficulty: "hard",
    category: "Exams",
    wordCount: 43,
  }
];

// Daily challenge paragraphs
export const dailyChallenges: Paragraph[] = [
  {
    id: 101,
    text: "आज का अभ्यास विशेष रूप से सरकारी परीक्षाओं की तैयारी के लिए है। हिंदी टाइपिंग में दक्षता प्राप्त करने के लिए प्रतिदिन कम से कम तीस मिनट का अभ्यास आवश्यक है। सही उंगली की स्थिति और नियमित अभ्यास से आप अपनी टाइपिंग गति में उल्लेखनीय सुधार कर सकते हैं। इंस्क्रिप्ट कीबोर्ड पर स्वर बाईं ओर और व्यंजन दाईं ओर स्थित होते हैं जिससे टाइपिंग में सहजता आती है।",
    difficulty: "medium",
    category: "दैनिक चुनौती",
    wordCount: 64,
  },
  {
    id: 102,
    text: "भारत सरकार के राजभाषा विभाग ने सभी केंद्रीय कार्यालयों में हिंदी में कार्य करने पर विशेष बल दिया है। राजभाषा नीति के अनुसार सभी शासकीय पत्राचार, टिप्पणियाँ और आदेश हिंदी में तैयार किए जाने चाहिए। इसके लिए कर्मचारियों को हिंदी टाइपिंग का प्रशिक्षण दिया जाता है। यूनिकोड आधारित हिंदी टाइपिंग आज सर्वाधिक प्रचलित पद्धति है।",
    difficulty: "medium",
    category: "दैनिक चुनौती",
    wordCount: 55,
  },
  {
    id: 103,
    text: "सतत विकास लक्ष्यों के अंतर्गत भारत ने गरीबी उन्मूलन, शिक्षा, स्वास्थ्य, लैंगिक समानता और जलवायु परिवर्तन से निपटने के लिए महत्वपूर्ण कदम उठाए हैं। स्वच्छ भारत मिशन, आयुष्मान भारत योजना, प्रधानमंत्री आवास योजना और उज्ज्वला योजना जैसी पहलों ने देश के विकास में महत्वपूर्ण योगदान दिया है। डिजिटल साक्षरता अभियान के माध्यम से ग्रामीण क्षेत्रों में कंप्यूटर शिक्षा का प्रसार किया जा रहा है।",
    difficulty: "hard",
    category: "दैनिक चुनौती",
    wordCount: 66,
  },
];

export function getParagraphsByDifficulty(difficulty: "easy" | "medium" | "hard", language: "hindi" | "english" = "hindi"): Paragraph[] {
  const pool = language === "english" ? englishParagraphs : paragraphs;
  return pool.filter((p) => p.difficulty === difficulty);
}

export function getRandomParagraph(difficulty?: "easy" | "medium" | "hard", language: "hindi" | "english" = "hindi"): Paragraph {
  const pool = language === "english" ? englishParagraphs : paragraphs;
  const filtered = difficulty ? pool.filter((p) => p.difficulty === difficulty) : pool;
  return filtered[Math.floor(Math.random() * filtered.length)];
}

export function getDailyChallenge(): Paragraph {
  const today = new Date();
  const dayIndex = today.getDate() % dailyChallenges.length;
  return dailyChallenges[dayIndex];
}
