export interface BlogPost {
  slug: string;
  title: string;
  titleEn?: string;
  excerpt: string;
  excerptEn?: string;
  content: string;
  contentEn?: string;
  date: string;
  dateEn?: string;
  author?: string;
  category: "Basics" | "Exam Guide" | string;
  categoryEn?: string;
  tags?: string[];
  image?: string;
}

export function getBlogImage(blog: BlogPost): string {
  if (blog.image) {
    return blog.image;
  }
  const match = (blog.contentEn || blog.content).match(/!\[.*?\]\((.*?)\)/);
  if (match && match[1]) {
    return match[1];
  }
  return `/images/${blog.slug}.jpg`;
}

const HINDI_MONTHS: Record<string, number> = {
  "जनवरी": 0,
  "फरवरी": 1,
  "फ़रवरी": 1,
  "मार्च": 2,
  "अप्रैल": 3,
  "मई": 4,
  "जून": 5,
  "जुलाई": 6,
  "अगस्त": 7,
  "सितंबर": 8,
  "सितम्बर": 8,
  "अक्टूबर": 9,
  "अक्तूबर": 9,
  "नवंबर": 10,
  "नवम्बर": 10,
  "दिसंबर": 11,
  "दिसम्बर": 11,
};

export function parseBlogDate(blog: BlogPost | string): Date {
  if (!blog) return new Date(0);
  
  if (typeof blog !== "string" && blog.dateEn) {
    const t = Date.parse(blog.dateEn);
    if (!isNaN(t)) return new Date(t);
  }

  const rawDate = typeof blog === "string" ? blog : blog.date;
  if (!rawDate) return new Date(0);

  const direct = Date.parse(rawDate);
  if (!isNaN(direct)) return new Date(direct);

  const clean = rawDate.replace(",", "");
  const parts = clean.split(/\s+/);
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const month = HINDI_MONTHS[parts[1]];
    const year = parseInt(parts[2], 10);
    if (month !== undefined && !isNaN(day) && !isNaN(year)) {
      return new Date(year, month, day);
    }
  }

  return new Date(0);
}

export const blogs: BlogPost[] = [
  {
  "slug": "hindi-inscript-keyboard-layout",
  "titleEn": "Hindi InScript Keyboard Layout: Complete Guide with Examples and Typing Practice",
  "title": "हिंदी इनस्क्रिप्ट कीबोर्ड लेआउट: संपूर्ण गाइड, उदाहरण और टाइपिंग अभ्यास",
  "date": "19 नवंबर, 2026",
  "dateEn": "19 November, 2026",
  "author": "TypeHindi Team",
  "categoryEn": "Typing Guide",
  "category": "टाइपिंग गाइड",
  "tags": [
    "Hindi InScript",
    "InScript Keyboard Layout",
    "Hindi InScript Typing",
    "Hindi Typing Guide",
    "Mangal InScript",
    "Devanagari Keyboard",
    "Government Typing Test",
    "Hindi Typing Practice"
  ],
  "excerptEn": "Master the Hindi InScript keyboard layout with our complete guide. Learn normal and Shift key combinations, vowel and consonant charts, matras, halant, Windows 11 setup, and practice exercises.",
  "excerpt": "हिंदी इनस्क्रिप्ट कीबोर्ड लेआउट की पूरी जानकारी। सामान्य और शिफ्ट कीज, स्वर-व्यंजन चार्ट, मात्राएं, हलंत, विंडोज 11 सेटअप और टाइपिंग अभ्यास एक्सरसाइज की संपूर्ण गाइड।",
  "image": "/images/hindi-inscript-keyboard-layout.jpg",
  "content": "हिंदी इनस्क्रिप्ट (Hindi InScript) कीबोर्ड लेआउट उन सभी लोगों के लिए सबसे महत्वपूर्ण और मानकीकृत कीबोर्ड व्यवस्था है जो मानक अंग्रेजी QWERTY कीबोर्ड का उपयोग करके सीधे हिंदी टाइप करना चाहते हैं। यह उपयोगकर्ताओं को रोमन अक्षरों (जैसे 'namaste') में टाइप करने के बजाय सीधे देवनागरी अक्षरों को इनपुट करने की अनुमति देता है।\n\nइनस्क्रिप्ट विशेष रूप से छात्रों, सरकारी नौकरी के अभ्यर्थियों, कार्यालय कर्मचारियों और उन सभी लोगों के लिए उपयोगी है जो नियमित रूप से हिंदी दस्तावेजों पर काम करते हैं। एक बार जब आप स्वरों, व्यंजनों, मात्राओं और विशेष वर्णों की स्थिति को समझ लेते हैं, तो आप प्रत्येक शब्द के लिए अलग कुंजी याद किए बिना एक सुसंगत और सटीक हिंदी टाइपिंग तकनीक विकसित कर सकते हैं।\n\nशुरुआती अभ्यासकर्ताओं को अक्सर यह लेआउट थोड़ा भ्रमित करने वाला लग सकता है क्योंकि भौतिक कीबोर्ड पर अंग्रेजी अक्षर छपे होते हैं जबकि स्क्रीन पर देवनागरी वर्ण टाइप होते हैं। हालाँकि, यह व्यवस्था एक अत्यंत वैज्ञानिक और व्यवस्थित संरचना का पालन करती है: स्वर और उनकी मात्राएँ कीबोर्ड के बाएँ हिस्से (Left Hand) में व्यवस्थित होती हैं, जबकि व्यंजन दाएँ हिस्से (Right Hand) में स्थित होते हैं।\n\nइस संपूर्ण गाइड में आप हिंदी इनस्क्रिप्ट कीबोर्ड लेआउट, सामान्य और शिफ्ट की संयोजन, स्वर और व्यंजन मैपिंग, मात्रा टाइपिंग, संयुक्ताक्षर, विंडोज 11 सेटअप और व्यावहारिक अभ्यास एक्सरसाइज के बारे में विस्तार से जानेंगे।\n\n---\n\n## हिंदी इनस्क्रिप्ट कीबोर्ड लेआउट क्या है? (What Is the Hindi InScript Keyboard Layout?)\n\nInScript का पूर्ण रूप **Indian Script** (भारतीय लिपि) है। यह एक मानक कीबोर्ड लेआउट है जिसे पारंपरिक कंप्यूटर कीबोर्ड का उपयोग करके भारतीय भाषाओं के वर्णों को टाइप करने के लिए डिज़ाइन किया गया है।\n\nयह एक मानक QWERTY-शैली कीबोर्ड व्यवस्था (आमतौर पर 101/104 कुंजियों) का उपयोग करता है। अंग्रेजी अक्षरों को टाइप करने के बजाय, चुनी गई इनस्क्रिप्ट इनपुट विधि भौतिक कुंजियों को संबंधित भारतीय लिपि के वर्णों में मैप करती है।\n\nयह लेआउट भारतीय लिपियों की वैज्ञानिक संरचना (स्वर, व्यंजन, मात्रा चिह्न और अन्य विशेष चिह्नों) के आधार पर तैयार किया गया है।\n\nइसकी मुख्य विशेषता यह है कि स्वर और मात्राएँ मुख्य रूप से कीबोर्ड के बाएँ भाग में स्थित हैं, जबकि व्यंजन दाएँ भाग में व्यवस्थित हैं। यह व्यवस्था दोनों हाथों के बीच एक संतुलित टाइपिंग लय प्रदान करती है।\n\nभारत सरकार ने अक्टूबर 2016 में ई-गवर्नेंस प्रणालियों में उपयोग के लिए संवर्धित इनस्क्रिप्ट कीबोर्ड लेआउट मानक, **IS 16350:2016** को अधिसूचित किया था, जिसे भारतीय मानक ब्यूरो (BIS) द्वारा प्रकाशित किया गया है।\n\n### हिंदी टाइपिंग के लिए इनस्क्रिप्ट का उपयोग क्यों किया जाता है?\n\nइनस्क्रिप्ट लेआउट कई प्रमुख लाभ प्रदान करता है:\n\n1. **मानकीकृत व्यवस्था:** यह भौतिक कुंजियों और देवनागरी वर्णों के बीच एक सार्वभौमिक और निश्चित मैपिंग प्रदान करता है।\n2. **प्रत्यक्ष इनपुट:** आप बिना किसी ट्रांसलिट्रेशन सॉफ्टवेयर के सीधे हिंदी व्यंजन, स्वर और मात्राएँ दर्ज कर सकते हैं।\n3. **यूनिकोड अनुकूलता:** आधुनिक इनस्क्रिप्ट इनपुट विधियाँ शुद्ध यूनिकोड देवनागरी टेक्स्ट उत्पन्न करती हैं, जो हर डिवाइस, ब्राउज़र और ऑपरेटिंग सिस्टम पर सही ढंग से दिखता है।\n4. **विश्वसनीयता और गति:** एक बार जब आप लेआउट में अभ्यस्त हो जाते हैं, तो शब्दों के सुझावों (Suggestions) पर निर्भर रहने की आवश्यकता नहीं होती, जिससे गति और शुद्धता बढ़ती है।\n5. **बहुभाषी समर्थन:** इनस्क्रिप्ट लेआउट भारत की अधिकांश आधिकारिक भाषाओं (मराठी, गुजराती, बंगाली, तमिल, तेलुगु, पंजाबी आदि) के लिए समान सिद्धांत पर उपलब्ध है।\n\nयह उन सभी उम्मीदवारों के लिए अनिवार्य है जिनकी भर्ती परीक्षाओं (जैसे SSC, CPCT, इलाहाबाद हाईकोर्ट, राज्य सचिवालय, रेलवे आदि) में स्पष्ट रूप से इनस्क्रिप्ट लेआउट की मांग की जाती है।\n\n---\n\n## हिंदी इनस्क्रिप्ट कीबोर्ड लेआउट चार्ट (Hindi InScript Keyboard Layout Chart)\n\nइनस्क्रिप्ट टाइपिंग सीखने के लिए कीबोर्ड चार्ट सबसे आवश्यक संदर्भ सामग्री है।\n\nअभ्यास शुरू करने से पहले यह समझना आवश्यक है कि आपके कीबोर्ड की प्रत्येक भौतिक अंग्रेजी कुंजी दो अलग-अलग हिंदी वर्ण उत्पन्न कर सकती है — एक सामान्य रूप से दबाने पर (Normal Key) और दूसरा शिफ्ट (Shift) कुंजी के साथ दबाने पर।\n\nविंडोज देवनागरी इनस्क्रिप्ट व्यवस्था के अनुसार महत्वपूर्ण कुंजियों की मैपिंग नीचे दी गई है:\n\n### हिंदी इनस्क्रिप्ट: महत्वपूर्ण की मैपिंग चार्ट\n\n| अंग्रेजी कुंजी | सामान्य आउटपुट (Normal) | शिफ्ट के साथ (Shift + Key) |\n|---|---|---|\n| Q | ौ (औ की मात्रा) | औ |\n| W | ै (ऐ की मात्रा) | ऐ |\n| E | ा (आ की मात्रा) | आ |\n| R | ी (ई की मात्रा) | ई |\n| T | ू (ऊ की मात्रा) | ऊ |\n| Y | ब | भ |\n| U | ह | ङ |\n| I | ग | घ |\n| O | द | ध |\n| P | ज | झ |\n| [ | ड | ढ |\n| ] | ़ (नुक्ता) | ञ |\n| A | ो (ओ की मात्रा) | ओ |\n| S | े (ए की मात्रा) | ए |\n| D | ् (हलंत) | अ |\n| F | ि (इ की मात्रा) | इ |\n| G | ु (उ की मात्रा) | उ |\n| H | प | फ |\n| J | र | ऱ |\n| K | क | ख |\n| L | त | थ |\n| ; | च | छ |\n| ' | ट | ठ |\n| Z | ॆ | ऎ |\n| X | ं (अनुस्वार) | ँ (चंद्रबिंदु) |\n| C | म | ण |\n| V | न | ऩ |\n| B | व | ऴ |\n| N | ल | ळ |\n| M | स | श |\n| , | , | ष |\n| . | . | । (पूर्ण विराम) |\n| / | य | ? |\n\n- E कुंजी को सामान्य रूप से दबाने पर **ा** मात्रा प्राप्त होती है।\n- Shift + E दबाने पर स्वतंत्र स्वर **आ** प्राप्त होता है।\n\nयह इनस्क्रिप्ट लेआउट का मूलभूत सिद्धांत है: **सामान्य कुंजी से मात्रा और शिफ्ट के साथ पूर्ण स्वर प्राप्त होता है।**\n\n![हिंदी इनस्क्रिप्ट कीबोर्ड लेआउट चार्ट - सामान्य और शिफ्ट की मैपिंग](/images/hindi-inscript-keyboard-chart.jpg)\n\n---\n\n## सामान्य कुंजियों और शिफ्ट कुंजियों को समझना (Normal Keys and Shift Keys)\n\nइनस्क्रिप्ट कीबोर्ड अलग-अलग वर्ण स्तरों (Character Layers) का उपयोग करता है। सामान्य कुंजी एक अक्षर बनाती है, जबकि उसी कुंजी को Shift के साथ दबाने पर दूसरा संबंधित अक्षर बनता है।\n\nउदाहरण के लिए:\n\n| कुंजी संयोजन | आउटपुट |\n|---|---|\n| k | क |\n| Shift + k | ख |\n| i | ग |\n| Shift + i | घ |\n| l | त |\n| Shift + l | थ |\n| o | द |\n| Shift + o | ध |\n| h | प |\n| Shift + h | फ |\n| y | ब |\n| Shift + y | भ |\n\n### शिफ्ट संयोजनों का अभ्यास करना\n\nशिफ्ट संयोजनों में निपुणता प्राप्त करने के लिए इन जोड़ियों का नियमित अभ्यास करें:\n\n1. **क और ख जोड़ी:** k दबाकर क टाइप करें, फिर Shift + k दबाकर ख टाइप करें। (क - ख)\n2. **ग और घ जोड़ी:** i दबाकर ग टाइप करें, फिर Shift + i दबाकर घ टाइप करें। (ग - घ)\n3. **त और थ जोड़ी:** l दबाकर त टाइप करें, फिर Shift + l दबाकर थ टाइप करें। (त - थ)\n4. **द और ध जोड़ी:** o दबाकर द टाइप करें, फिर Shift + o दबाकर ध टाइप करें। (द - ध)\n5. **प और फ जोड़ी:** h दबाकर प टाइप करें, फिर Shift + h दबाकर फ टाइप करें। (प - फ)\n6. **ब और भ जोड़ी:** y दबाकर ब टाइप करें, फिर Shift + y दबाकर भ टाइप करें। (ब - भ)\n7. **च और छ जोड़ी:** ; दबाकर च टाइप करें, फिर Shift + ; दबाकर छ टाइप करें। (च - छ)\n8. **ज और झ जोड़ी:** p दबाकर ज टाइप करें, फिर Shift + p दबाकर झ टाइप करें। (ज - झ)\n9. **ट और ठ जोड़ी:** ' दबाकर ट टाइप करें, फिर Shift + ' दबाकर ठ टाइप करें। (ट - ठ)\n10. **ड और ढ जोड़ी:** [ दबाकर ड टाइप करें, फिर Shift + [ दबाकर ढ टाइप करें। (ड - ढ)\n\n### आपको शिफ्ट संयोजन क्यों सीखने चाहिए?\n\nहिंदी में कई महाप्राण व्यंजन (Aspirated Consonants जैसे ख, घ, छ, झ, ठ, ढ, थ, ध, फ, भ) और स्वतंत्र स्वर (आ, ई, ऊ, ऐ, औ) शिफ्ट कुंजी के साथ उपलब्ध होते हैं। यदि आप शिफ्ट लेयर को नजरअंदाज करेंगे, तो आपकी टाइपिंग अधूरी रह जाएगी। नियमित अभ्यास से उंगलियों की मांसपेशीय स्मृति (Muscle Memory) मजबूत होती है।\n\n![हिंदी इनस्क्रिप्ट सामान्य और शिफ्ट कीबोर्ड वर्ण संयोजन](/images/hindi-inscript-shift-keys-chart.jpg)\n\n---\n\n## हिंदी इनस्क्रिप्ट स्वर और मात्राएँ (Vowels and Matras)\n\nहिंदी में स्वर दो रूपों में आते हैं: स्वतंत्र स्वर (जैसे अ, आ, इ, ई) जो शब्द की शुरुआत या स्वतंत्र रूप से आते हैं, और निर्भर मात्राएँ (जैसे ा, ि, ी, ु) जो व्यंजनों के साथ जुड़कर उनका उच्चारण बदलती हैं।\n\n### स्वतंत्र स्वर (Independent Vowels)\n\n| स्वर | अंग्रेजी कुंजी संयोजन |\n|---|---|\n| अ | Shift + D |\n| आ | Shift + E |\n| इ | Shift + F |\n| ई | Shift + R |\n| उ | Shift + G |\n| ऊ | Shift + T |\n| ऋ | Shift + = |\n| ए | Shift + S |\n| ऐ | Shift + W |\n| ओ | Shift + A |\n| औ | Shift + Q |\n\n### निर्भर मात्राएँ (Dependent Matras)\n\n| मात्रा | नाम | भौतिक कुंजी (Normal) | व्यंजन के साथ उदाहरण (क + मात्रा) |\n|---|---|---|---|\n| ा | आ की मात्रा | E | का |\n| ि | इ की मात्रा | F | कि |\n| ी | ई की मात्रा | R | की |\n| ु | उ की मात्रा | G | कु |\n| ू | ऊ की मात्रा | T | कू |\n| ृ | ऋ की मात्रा | = | कृ |\n| े | ए की मात्रा | S | के |\n| ै | ऐ की मात्रा | W | कै |\n| ो | ओ की मात्रा | A | को |\n| ौ | औ की मात्रा | Q | कौ |\n| ं | अनुस्वार | X | कं |\n| ँ | चंद्रबिंदु | Shift + X | कँ |\n| ः | विसर्ग | Shift + - | कः |\n\n### व्यंजनों के साथ मात्राएँ कैसे टाइप करें\n\nदेवनागरी लिपि में मात्रा टाइप करने का क्रम हमेशा **व्यंजन पहले, फिर मात्रा** होता है:\n\n1. **का टाइप करना:** पहले k (क) दबाएं, फिर e (ा) दबाएं = **का**।\n2. **कि टाइप करना:** पहले k (क) दबाएं, फिर f (ि) दबाएं = **कि** (स्क्रीन पर मात्रा अपने आप व्यंजन के बाईं ओर व्यवस्थित हो जाएगी)।\n3. **की टाइप करना:** पहले k (क) दबाएं, फिर r (ी) दबाएं = **की**।\n4. **कु टाइप करना:** पहले k (क) दबाएं, फिर g (ु) दबाएं = **कु**।\n5. **कू टाइप करना:** पहले k (क) दबाएं, फिर t (ू) दबाएं = **कू**।\n6. **के टाइप करना:** पहले k (क) दबाएं, फिर s (े) दबाएं = **के**।\n7. **कै टाइप करना:** पहले k (क) दबाएं, फिर w (ै) दबाएं = **कै**।\n8. **को टाइप करना:** पहले k (क) दबाएं, फिर a (ो) दबाएं = **को**।\n9. **कौ टाइप करना:** पहले k (क) दबाएं, फिर q (ौ) दबाएं = **कौ**।\n\n---\n\n## इनस्क्रिप्ट का उपयोग करके हिंदी व्यंजन कैसे टाइप करें (How to Type Hindi Consonants)\n\nव्यंजन हिंदी भाषा की नींव हैं। इनस्क्रिप्ट में व्यंजन वैज्ञानिक रूप से वर्गों (कवर्ग, चवर्ग, टवर्ग, तवर्ग, पवर्ग) के आधार पर व्यवस्थित हैं:\n\n### महत्वपूर्ण व्यंजन उदाहरण\n\n| अंग्रेजी कुंजी | हिंदी अक्षर | शिफ्ट संयोजन | शिफ्ट आउटपुट |\n|---|---|---|---|\n| k | क | Shift + k | ख |\n| i | ग | Shift + i | घ |\n| ; | च | Shift + ; | छ |\n| p | ज | Shift + p | झ |\n| ' | ट | Shift + ' | ठ |\n| [ | ड | Shift + [ | ढ |\n| l | त | Shift + l | थ |\n| o | द | Shift + o | ध |\n| v | न | Shift + c | ण |\n| h | प | Shift + h | फ |\n| y | ब | Shift + y | भ |\n| c | म | Shift + v | ऩ |\n| / | य | Shift + / | ? |\n| j | र | Shift + j | ऱ |\n| n | ल | Shift + n | ळ |\n| b | व | Shift + b | ऴ |\n| m | स | Shift + m | श |\n| , | , | Shift + , | ष |\n| u | ह | Shift + u | ङ |\n\n---\n\n## हलंत और संयुक्त अक्षर कैसे टाइप करें (Halant and Conjunct Characters)\n\nहिंदी टाइपिंग में आधे अक्षर और संयुक्त वर्ण (Conjuncts) टाइप करने के लिए **हलंत (्)** कुंजी का उपयोग किया जाता है। इनस्क्रिप्ट में हलंत भौतिक कुंजी **D** पर स्थित है।\n\n**नियम:** किसी भी व्यंजन को आधा करने के लिए, उस व्यंजन की कुंजी दबाने के तुरंत बाद **D (हलंत)** दबाएं। यदि इसके बाद कोई अन्य व्यंजन दबाया जाता है, तो दोनों मिलकर स्वतः संयुक्त अक्षर बना लेते हैं।\n\n### सामान्य संयुक्त अक्षर उदाहरण\n\n| संयुक्त अक्षर | निर्माण क्रम (Key Sequence) | अर्थ / उदाहरण |\n|---|---|---|\n| क + ् + क = क्क | k + d + k | पक्का (h + e + k + d + k + e) |\n| क + ् + त = क्त | k + d + l | रक्त (j + k + d + l) |\n| स + ् + थ = स्थ | m + d + Shift + l | स्थान |\n| न + ् + य = न्य | v + d + / | न्याय |\n| द + ् + य = द्य | o + d + / | विद्या |\n| त + ् + त = त्त | l + d + l | उत्तर |\n\n### विशेष संयुक्ताक्षर (क्ष, त्र, ज्ञ, श्र)\n\n1. **क्ष:** k (क) + d (्) + Shift + , (ष) = **क्ष**\n2. **त्र:** l (त) + d (्) + j (र) = **त्र**\n3. **ज्ञ:** p (ज) + d (्) + Shift + ] (ञ) = **ज्ञ**\n4. **श्र:** Shift + m (श) + d (्) + j (र) = **श्र**\n5. **प्र (पदान्वय र):** h (प) + d (्) + j (र) = **प्र**\n6. **कर्म (रेफ र):** j (र) + d (्) + c (म) = **र्म** (कर्म = k + j + d + c)\n\n---\n\n## विशेष हिंदी वर्ण कैसे टाइप करें (Special Hindi Characters)\n\nहिंदी और उर्दू/फारसी मूल के शब्दों में नुक्ता वाले वर्णों का प्रयोग होता है:\n\n| वर्ण | कुंजी क्रम | उदाहरण |\n|---|---|---|\n| ज़ | p (ज) + ] (नुक्ता) | ज़िंदगी |\n| फ़ | Shift + h (फ) + ] (नुक्ता) | फ़िल्म |\n| ख़ | Shift + k (ख) + ] (नुक्ता) | ख़ास |\n| ग़ | Shift + i (घ) + ] (नुक्ता) | ग़लत |\n| ड़ | [ (ड) + ] (नुक्ता) | पेड़ |\n| ढ़ | Shift + [ (ढ) + ] (नुक्ता) | पढ़ना |\n| पूर्ण विराम (।) | Shift + . | वाक्य के अंत में |\n\n---\n\n## विंडोज 11 में हिंदी इनस्क्रिप्ट कीबोर्ड कैसे सक्रिय करें (Windows 11 Setup)\n\nविंडोज 11 में इनस्क्रिप्ट कीबोर्ड पहले से अंतर्निहित (Built-in) होता है, किसी बाहरी सॉफ्टवेयर को डाउनलोड करने की आवश्यकता नहीं है। इसे सक्षम करने के चरण:\n\n### चरण 1: सेटिंग्स खोलें\nकीबोर्ड पर **Windows + I** दबाएं या स्टार्ट मेनू से **Settings** पर क्लिक करें।\n\n### चरण 2: Time & Language पर जाएं\nबाएं पैनल में **Time & Language** चुनें और फिर **Language & region** पर क्लिक करें।\n\n### चरण 3: हिंदी भाषा जोड़ें\nयदि हिंदी सूची में नहीं है, तो **Add a language** पर क्लिक करें, **Hindi (हिंदी)** खोजें और **Next → Install** पर क्लिक करें।\n\n### चरण 4: भाषा विकल्प (Language Options) खोलें\nहिंदी भाषा के सामने तीन बिंदुओं (**...**) पर क्लिक करें और **Language options** चुनें।\n\n### चरण 5: इनस्क्रिप्ट कीबोर्ड चुनें\n**Keyboards** अनुभाग में नीचे स्क्रॉल करें। यदि पहले से इनस्क्रिप्ट नहीं है, तो **Add a keyboard** पर क्लिक करें और **Hindi (InScript)** चुनें।\n\n### चरण 6: टाइपिंग शुरू करें\nअब कीबोर्ड पर **Windows + Spacebar** या **Alt + Shift** दबाकर अंग्रेजी और हिंदी इनस्क्रिप्ट के बीच स्विच करें।\n\n### अंग्रेजी में वापस कैसे आएं\nदोबारा **Windows + Spacebar** दबाएं और English (US/India) चुन लें।\n\n---\n\n## इनस्क्रिप्ट बनाम हिंदी फोनेटिक टाइपिंग (InScript vs Hindi Phonetic)\n\n| विशेषता | हिंदी इनस्क्रिप्ट (InScript) | हिंदी फोनेटिक / ट्रांसलिट्रेशन |\n|---|---|---|\n| **कार्यप्रणाली** | प्रत्येक भौतिक कुंजी एक निश्चित देवनागरी वर्ण से बंधी होती है | अंग्रेजी अक्षरों के उच्चारण से हिंदी शब्द बनते हैं (जैसे 'namaste' → नमस्ते) |\n| **सरकारी परीक्षा मान्यता** | लगभग सभी सरकारी भर्ती परीक्षाओं (SSC, High Court आदि) में अनिवार्य | अधिकांश सरकारी परीक्षाओं में प्रतिबंधित |\n| **टाइपिंग गति क्षमता** | अभ्यास के बाद 40-60+ WPM तक उच्च गति संभव | सुझावों पर निर्भर रहने के कारण गति सीमित हो सकती है |\n| **इंटरनेट निर्भरता** | पूर्णतः ऑफलाइन, किसी टूल की आवश्यकता नहीं | कभी-कभी टूल या डिक्शनरी पर निर्भर |\n| **सीखने का समय** | शुरुआत में 1-2 सप्ताह का अभ्यास आवश्यक | बिना सीखे तुरंत शुरू किया जा सकता है |\n\n---\n\n## इनस्क्रिप्ट सीखते समय होने वाली सामान्य गलतियाँ\n\n1. **सामान्य और शिफ्ट अक्षरों में भ्रम:** बिना अभ्यास के अक्सर क की जगह ख या प की जगह फ टाइप हो जाता है। हमेशा की-पेयर अभ्यास करें।\n2. **गलत कीबोर्ड लेआउट का चयन:** कई अभ्यर्थी रेमिंगटन गेल (Remington GAIL) और इनस्क्रिप्ट में भ्रमित हो जाते हैं। अपनी परीक्षा की अधिसूचना में जांच लें कि कौन सा लेआउट मांगा गया है।\n3. **गलत मात्रा क्रम:** कभी भी मात्रा पहले टाइप न करें (जैसे कि के लिए f + k दबाना गलत है, सही क्रम k + f है)।\n4. **हलंत का गलत उपयोग:** आधे अक्षर के लिए हमेशा अक्षर के बाद तुरंत D (हलंत) दबाएं।\n5. **बार-बार कीबोर्ड की तरफ देखना:** स्क्रीन और टच टाइपिंग पर ध्यान दें, कीबोर्ड देखने से गति धीमी होती है।\n\n---\n\n## हिंदी इनस्क्रिप्ट टाइपिंग प्रैक्टिस एक्सरसाइज (Practice Exercises)\n\n### एक्सरसाइज 1: बुनियादी स्वर अभ्यास\nShift+D Shift+E Shift+F Shift+R Shift+G Shift+T Shift+S Shift+W Shift+A Shift+Q  \nअ आ इ ई उ ऊ ए ऐ ओ औ\n\n### एक्सरसाइज 2: व्यंजन अभ्यास\nk Shift+k i Shift+i u  \nक ख ग घ ङ  \n\n; Shift+; p Shift+p Shift+]  \nच छ ज झ ञ  \n\n' Shift+' [ Shift+[ Shift+c  \nट ठ ड ढ ण  \n\nl Shift+l o Shift+o v  \nत थ द ध न  \n\nh Shift+h y Shift+y c  \nप फ ब भ म  \n\n/ j n b m Shift+, Shift+m u  \nय र ल व स ष श ह\n\n### एक्सरसाइज 3: मात्रा संयोजन अभ्यास\nk ke kf kr kg kt ks kw ka kq  \nक का कि की कु कू के कै को कौ\n\n### एक्सरसाइज 4: शब्द टाइपिंग अभ्यास\nकमल (k c n) | भारत (Shift+y e j l) | विकास (b f k e m) | सरकार (m j k e j) | पुस्तक (h g m d l k) | संविधान (m x b f Shift+o e v)\n\n### एक्सरसाइज 5: वाक्य टाइपिंग अभ्यास\n- भारत हमारा महान देश है।\n- हिंदी हमारी मातृभाषा और राजभाषा है।\n- नियमित अभ्यास करने से टाइपिंग गति में सुधार होता है।\n- इनस्क्रिप्ट कीबोर्ड सीखना बहुत सरल और वैज्ञानिक है।\n\n### एक्सरसाइज 6: पैराग्राफ अभ्यास\nबिना कीबोर्ड देखे निम्नलिखित पैराग्राफ टाइप करें:\n\n**हिंदी टाइपिंग का महत्व**\n\nहिंदी भारत की प्रमुख भाषाओं में से एक है। कंप्यूटर पर हिंदी में काम करने के लिए सही कीबोर्ड लेआउट सीखना जरूरी है। इनस्क्रिप्ट कीबोर्ड एक व्यवस्थित तरीका प्रदान करता है, जिससे उपयोगकर्ता देवनागरी अक्षर, स्वर, व्यंजन और मात्राएँ टाइप कर सकते हैं। नियमित अभ्यास से कीबोर्ड की पहचान बेहतर होती है और टाइपिंग में होने वाली गलतियाँ कम होती हैं। इसलिए शुरुआत में सही अक्षरों और कुंजियों का अभ्यास करना चाहिए।\n\n![हिंदी इनस्क्रिप्ट टाइपिंग प्रैक्टिस वर्कशीट और देवनागरी एक्सरसाइज](/images/hindi-inscript-typing-practice-worksheet.jpg)\n\n---\n\n## हिंदी इनस्क्रिप्ट टाइपिंग स्पीड कैसे बढ़ाएं (Speed Improvement Tips)\n\n1. **पंक्ति-दर-पंक्ति लेआउट सीखें (Row by Row):** पहले होम रो (A S D F G H J K L), फिर अपर रो और बॉटम रो का अभ्यास करें।\n2. **प्रतिदिन शिफ्ट कुंजियों का अभ्यास करें:** महाप्राण व्यंजनों और स्वतंत्र स्वरों के लिए शिफ्ट का सहज प्रयोग करें।\n3. **मात्राओं और हलंत की सटीकता पर ध्यान दें:** गलतियों को तुरंत सुधारने के बजाय शुरुआत में सही की दबाने पर ध्यान दें।\n4. **गति से पहले सटीकता (Accuracy First):** 95%+ सटीकता लक्ष्य रखें, गति अपने आप बढ़ती जाएगी।\n5. **समयबद्ध टेस्ट (Timed Tests) दें:** TypeHindi पर 1 मिनट, 5 मिनट और 10 मिनट के टाइपिंग टेस्ट का अभ्यास करें।\n6. **नियमित दिनचर्या:** रोजाना 30 से 45 मिनट का समर्पित अभ्यास सबसे प्रभावी परिणाम देता है।\n\n---\n\n## TypeHindi पर ऑनलाइन हिंदी इनस्क्रिप्ट टाइपिंग अभ्यास करें\n\nइनस्क्रिप्ट सीखने के लिए आपको केवल कागजी चार्ट पर निर्भर रहने की आवश्यकता नहीं है। **TypeHindi.in** पर आप सीधे अपने ब्राउज़र में इंटरैक्टिव इनस्क्रिप्ट टाइपिंग टूल, लाइव वर्चुअल कीबोर्ड, रियल-टाइम एरर हाइलाइटिंग, WPM स्पीड ट्रैकर और सरकारी परीक्षा पैटर्न पर आधारित टेस्ट का निःशुल्क लाभ उठा सकते हैं।\n\n---\n\n## अक्सर पूछे जाने वाले प्रश्न (FAQs)\n\n**1. क्या इनस्क्रिप्ट एक फॉन्ट है या कीबोर्ड लेआउट?**  \nइनस्क्रिप्ट एक आधिकारिक कीबोर्ड लेआउट (Input Method) है। मंगल (Mangal) या अपराजिता एक यूनिकोड फॉन्ट है। आप इनस्क्रिप्ट लेआउट से टाइप करके मंगल फॉन्ट में टेक्स्ट प्रदर्शित कर सकते हैं।\n\n**2. क्या मैं सामान्य अंग्रेजी कीबोर्ड पर इनस्क्रिप्ट टाइप कर सकता हूँ?**  \nहाँ, बिल्कुल। आपका सामान्य अंग्रेजी QWERTY कीबोर्ड ही इनस्क्रिप्ट इनपुट के लिए प्रयोग किया जाता है। विंडोज सेटिंग्स में लेआउट बदलने पर भौतिक कुंजियाँ देवनागरी वर्ण टाइप करती हैं।\n\n**3. क्या सरकारी टाइपिंग परीक्षाओं में इनस्क्रिप्ट स्वीकार्य है?**  \nहाँ, SSC, CPCT, इलाहाबाद हाईकोर्ट, कनिष्ठ सहायक, दिल्ली अधीनस्थ सेवा (DSSSB) और अन्य कई केंद्र व राज्य स्तरीय परीक्षाओं में इनस्क्रिप्ट अनिवार्य या मुख्य विकल्पों में से एक होता है।\n\n**4. आधा अक्षर कैसे टाइप किया जाता है?**  \nव्यंजन की कुंजी दबाएं और तुरंत बाद **D (हलंत)** कुंजी दबाएं। जैसे: क (k) + ् (d) = क्।\n\n**5. इनस्क्रिप्ट और रेमिंगटन गेल में क्या अंतर है?**  \nइनस्क्रिप्ट वैज्ञानिक रूप से स्वरों और व्यंजनों के भाषाई विभाजन पर आधारित है, जबकि रेमिंगटन गेल पुराने मैकेनिकल टाइपराइटर की लेआउट व्यवस्था पर आधारित है।\n\n**6. क्या इनस्क्रिप्ट सीखने के लिए कोई सॉफ्टवेयर खरीदना पड़ता है?**  \nनहीं, विंडोज 10/11, मैकओएस, लिनक्स और एंड्रॉइड में इनस्क्रिप्ट लेआउट पहले से मुफ्त में उपलब्ध होता है।\n\n---\n\n## निष्कर्ष (Final Words)\n\nहिंदी इनस्क्रिप्ट कीबोर्ड लेआउट मानक कंप्यूटर कीबोर्ड पर देवनागरी वर्ण टाइप करने का सबसे वैज्ञानिक, कुशल और मानकीकृत माध्यम है। एक बार जब आप सामान्य और शिफ्ट कुंजियों, मात्राओं और हलंत के संयोजनों में अभ्यस्त हो जाते हैं, तो आप बिना किसी संकोच के शुद्ध और तीव्र गति से हिंदी टाइप कर सकते हैं।\n\nअपनी परीक्षा की तैयारी को मजबूत करने के लिए **TypeHindi** के ऑनलाइन टाइपिंग टूल्स और गाइड्स का नियमित उपयोग करें।",
  "contentEn": "The Hindi InScript keyboard layout is one of the most important keyboard arrangements for people who want to type Hindi using a standard English QWERTY keyboard. It allows users to enter Devanagari characters directly instead of typing Hindi words using Roman letters.\n\nInScript is particularly useful for students, government job aspirants, office employees and anyone who regularly works with Hindi documents. Once you understand the positions of vowels, consonants, matras and special characters, you can develop a consistent Hindi typing technique without memorising a separate key for every possible word.\n\nMany beginners find the layout confusing because the physical keyboard shows English letters while the selected Hindi input method produces Devanagari characters. However, the arrangement follows a systematic structure. Vowels and their signs occupy one part of the keyboard, while consonants are arranged in another part.\n\nIn this guide, you will learn the Hindi InScript keyboard layout, normal and Shift key combinations, consonant and vowel mappings, matra typing, conjunct characters, Windows setup instructions and practical exercises.\n\n## What Is the Hindi InScript Keyboard Layout?\n\nInScript stands for **Indian Script**. It is a standardised keyboard layout designed for entering Indian-language characters using a conventional computer keyboard.\n\nIt uses a standard QWERTY-style keyboard arrangement, generally with 101 physical keys. Instead of entering English letters, the selected InScript input method maps physical keyboard keys to characters from the relevant Indian script.\n\nThe layout is designed around the structure of Indian scripts, including vowels, consonants, vowel signs and other commonly used characters.\n\nOne important characteristic is that vowels are generally placed on the left side of the keyboard, while consonants are arranged towards the right. The arrangement is intended to provide a systematic approach to Indian-language typing.\n\nThe Government of India notified the Enhanced InScript Keyboard Layout Standard, **IS 16350:2016**, for use in e-governance systems in October 2016. The standard was published by the Bureau of Indian Standards. \n\n### Why Is InScript Used for Hindi Typing?\n\nThe InScript layout offers several advantages:\n\n1. **Standardised arrangement:** It provides a defined mapping between physical keyboard keys and Devanagari characters.\n2. **Direct character input:** You can enter Hindi consonants, vowels and signs directly.\n3. **Unicode compatibility:** Compatible InScript input methods generate Unicode Devanagari text.\n4. **Consistent learning:** Once you learn the layout, you can practise character positions instead of depending on word suggestions.\n5. **Multilingual support:** InScript layouts are available for multiple Indian languages, with language-specific character mappings.\n\nIt is useful for candidates whose recruitment examinations or workplaces specifically require an InScript keyboard.\n\n## Hindi InScript Keyboard Layout Chart\n\nThe keyboard chart is the most important reference for learning InScript typing.\n\nBefore starting practice, understand that each English key on your keyboard can produce a different Hindi character depending on whether you press it normally or with Shift.\n\nThe following examples use the Windows Devanagari InScript arrangement listed in the Unicode Common Locale Data Repository. Other software or examination-specific versions may use different mappings. \n\n### Hindi InScript: Important Key Mapping Chart\n\nHere are some useful key combinations to begin learning.\n\n| English Key | Normal Output | Shift + Key |\n|---|---|---|\n| Q | ौ | औ |\n| W | ै | ऐ |\n| E | ा | आ |\n| R | ी | ई |\n| T | ू | ऊ |\n| Y | ब | भ |\n| U | ह | ङ |\n| I | ग | घ |\n| O | द | ध |\n| P | ज | झ |\n| A | ो | ओ |\n| S | े | ए |\n| D | ् | अ |\n| F | ि | इ |\n| G | ु | उ |\n| H | प | फ |\n| J | र | ऱ |\n| K | क | ख |\n| L | त | थ |\n\n**How to read this table:**\n\n- Pressing Q normally produces ौ.\n- Pressing Shift + Q produces औ.\n- Pressing K normally produces क.\n- Pressing Shift + K produces ख.\n- Pressing E normally produces ा.\n- Pressing Shift + E produces आ.\n\nThis is the basic principle of the InScript layout.\n\n![Complete Hindi InScript keyboard layout chart showing English keys, Hindi characters and Shift combinations](/images/hindi-inscript-keyboard-chart.jpg)\n\n## Understanding Normal Keys and Shift Keys\n\nThe InScript keyboard uses different character layers. The normal key produces one character, while pressing Shift with the same key produces another character.\n\nFor example:\n\n| Key Combination | Output |\n|---|---|\n| k | क |\n| Shift + k | ख |\n| y | ब |\n| Shift + y | भ |\n| i | ग |\n| Shift + i | घ |\n| o | द |\n| Shift + o | ध |\n| p | ज |\n| Shift + p | झ |\n\nThis arrangement helps organise related Devanagari characters within the same keyboard region.\n\n### Practising Shift Combinations\n\nStart with the following pairs:\n\n- क / ख\n- ग / घ\n- च / छ\n- ज / झ\n- ट / ठ\n- ड / ढ\n- त / थ\n- द / ध\n- प / फ\n- ब / भ\n\nPractise the normal character first, followed by its Shift counterpart.\n\nFor example:\n\nक ख क ख क ख\n\nग घ ग घ ग घ\n\nत थ त थ त थ\n\nद ध द ध द ध\n\nThis exercise helps you develop familiarity with the two character layers.\n\n### Why Should You Learn Shift Combinations?\n\nMany Hindi characters are available through Shift combinations rather than separate normal keys.\n\nIf you ignore the Shift layer, you will have difficulty typing several aspirated consonants and additional characters.\n\nRegular practice helps you learn which fingers should press the keys and reduces unnecessary movement.\n\n![Hindi InScript normal and Shift keyboard character combinations](/images/hindi-inscript-shift-keys-chart.jpg)\n\n## Hindi InScript Vowels and Matras\n\nVowels and matras are an important part of the InScript keyboard.\n\nIndependent vowels and dependent vowel signs are not the same. An independent vowel can appear as a standalone character, while a matra attaches to a consonant.\n\nHere are some commonly used mappings in the Windows InScript arrangement.\n\n### Independent Vowels\n\n| English Key Combination | Hindi Output |\n|---|---|\n| Shift + D | अ |\n| Shift + E | आ |\n| Shift + F | इ |\n| Shift + R | ई |\n| Shift + G | उ |\n| Shift + T | ऊ |\n| Shift + S | ए |\n| Shift + W | ऐ |\n| Shift + A | ओ |\n| Shift + Q | औ |\n\n### Dependent Matras\n\n| English Key | Matra |\n|---|---|\n| E | ा |\n| F | ि |\n| R | ी |\n| G | ु |\n| T | ू |\n| S | े |\n| W | ै |\n| A | ो |\n| Q | ौ |\n\nThe above mapping follows the Windows Devanagari InScript chart.\n\n### How to Type Matras with Consonants\n\nA useful way to understand the layout is to practise one consonant with different matras.\n\nFor example, the consonant क can be combined with several vowel signs.\n\n| Word Combination | Key Sequence |\n|---|---|\n| क | K |\n| का | K + E |\n| कि | K + F |\n| की | K + R |\n| कु | K + G |\n| कू | K + T |\n| के | K + S |\n| कै | K + W |\n| को | K + A |\n| कौ | K + Q |\n\nNotice that the consonant is entered first, followed by its dependent vowel sign.\n\nAn interesting detail is that the ि sign appears visually to the left of its consonant. However, the consonant is encoded first and the dependent sign follows it in the Unicode sequence.\n\nFor example:\n\n- Press K to enter क.\n- Press F to enter ि.\n- The displayed result becomes कि.\n\nThis is the expected Devanagari rendering behaviour.\n\n## How to Type Hindi Consonants Using InScript\n\nConsonants are called व्यंजन in Hindi. They form the foundation of most Hindi words.\n\nThe InScript arrangement places consonants in a systematic order, making it easier to practise related sounds.\n\n### Important Consonant Examples\n\n| English Key | Hindi Character | Shift Combination | Shift Output |\n|---|---|---|---|\n| Y | ब | Shift + Y | भ |\n| U | ह | Shift + U | ङ |\n| I | ग | Shift + I | घ |\n| O | द | Shift + O | ध |\n| P | ज | Shift + P | झ |\n| H | प | Shift + H | फ |\n| J | र | Shift + J | ऱ |\n| K | क | Shift + K | ख |\n| L | त | Shift + L | थ |\n\nThe keyboard chart should always be kept available during the initial practice period.\n\n### Practise Consonants in Groups\n\nStart with simple consonant exercises:\n\nक ख ग घ\n\nच छ ज झ\n\nट ठ ड ढ\n\nत थ द ध\n\nप फ ब भ\n\nPractise each group slowly. Try to press the correct key without looking at the keyboard once you become familiar with the positions.\n\n## How to Type Halant and Conjunct Characters\n\nHalant, represented by ्, is used to suppress the inherent vowel of a consonant.\n\nIt plays an important role in creating conjunct characters.\n\nFor example:\n\n- क + ् + ष = क्ष\n- त + ् + र = त्र\n- ज + ् + ञ = ज्ञ\n- श + ् + र = श्र\n\nIn the Windows InScript mapping used in this guide, the D key produces the halant sign ्.\n\nFor example, a basic conjunct sequence is entered by typing:\n\nक + ् + ष\n\nThe shaping engine then displays the appropriate conjunct form when the font and text-rendering system support it.\n\n### Common Conjunct Examples\n\n| Combination | Result |\n|---|---|\n| क् + ष | क्ष |\n| त् + र | त्र |\n| ज् + ञ | ज्ञ |\n| श् + र | श्र |\n| द् + ध | द्ध |\n| क् + त | क्त |\n| न् + द | न्द |\n| स् + थ | स्थ |\n\nNot every possible conjunct has a dedicated physical key. Many are formed by entering the relevant consonants and halant in the correct order.\n\n### Practise Conjunct Characters\n\nTry typing these combinations:\n\nक्ष, त्र, ज्ञ, श्र, द्ध, क्त, न्द, स्थ\n\nAfter becoming comfortable with individual combinations, practise complete words:\n\n- शिक्षा\n- ज्ञान\n- क्षेत्र\n- राष्ट्र\n- प्रश्न\n- संस्कृति\n- व्यवस्था\n- विद्यालय\n\n**Important:** The exact appearance of conjuncts depends on the rendering engine and font. A correctly entered Unicode sequence may be displayed differently by different applications.\n\n## How to Type Special Hindi Characters\n\nBesides vowels and consonants, Hindi typing requires several additional signs.\n\nSome commonly used characters include:\n\n| Character | Name | Example |\n|---|---|---|\n| ं | Anusvara | हिंदी |\n| ँ | Chandrabindu | माँ |\n| ः | Visarga | दुःख |\n| ् | Halant | क् |\n| ़ | Nukta | क़, ख़, ग़ |\n| । | Danda | भारत। |\n\nThe normal and Shift layers of the InScript keyboard include additional signs and characters beyond everyday Hindi letters.\n\nFor rare Devanagari characters, extended signs and additional layers, consult the complete keyboard chart corresponding to your actual input method.\n\nDo not assume that every rare character can be entered through the basic QWERTY layer alone.\n\n## How to Enable Hindi InScript Keyboard in Windows 11\n\nWindows includes Hindi keyboard input support. You can install Hindi while keeping English as your Windows display language.\n\nMicrosoft documents the process through Windows Language and Region settings. \n\nFollow these steps:\n\n### Step 1: Open Settings\n\nPress:\n\n**Windows + I**\n\nThis opens the Windows Settings application.\n\n### Step 2: Open Language and Region\n\nNavigate to:\n\n**Time & Language → Language & Region**\n\n### Step 3: Add Hindi\n\nSelect the option to add a language.\n\nSearch for Hindi and choose it from the available languages.\n\nClick Next and complete the installation.\n\n### Step 4: Open Hindi Language Options\n\nAfter installation:\n\n1. Find Hindi in the Preferred Languages list.\n2. Select the three-dot menu.\n3. Open Language Options.\n4. Check the installed keyboard options.\n\nWindows commonly installs Hindi with the Hindi Traditional keyboard. You can use the relevant Devanagari input arrangement supported by your Windows version.\n\n### Step 5: Select the Hindi Keyboard\n\nOpen the keyboard selector from the taskbar or press:\n\n**Windows + Spacebar**\n\nSelect the required Hindi keyboard.\n\nVerify that the active layout is the one you intend to practise. Do not assume that Hindi Phonetic and Hindi Traditional use the same key mapping.\n\n### Step 6: Start Typing\n\nOpen Notepad or Microsoft Word.\n\nSelect the Hindi keyboard and try typing a few characters.\n\nFor example, using the Windows Devanagari InScript mapping covered in this guide:\n\n- K produces क.\n- Shift + K produces ख.\n- E produces ा.\n- Shift + E produces आ.\n\nIf the output differs, check the active input layout and its corresponding keyboard chart.\n\n### How to Switch Back to English\n\nPress Windows + Spacebar again and select English (US) or the required English keyboard.\n\nYou can switch between installed input methods without changing your entire Windows display language.\n\n## InScript vs Hindi Phonetic Typing\n\nBoth InScript and phonetic typing allow users to enter Hindi text through an English physical keyboard, but their methods are different.\n\n### InScript Typing\n\nInScript uses fixed character-to-key mappings.\n\nFor example:\n\n- The K key produces क.\n- The Shift + K combination produces ख.\n\nYou need to learn the character positions and practise them.\n\n### Hindi Phonetic Typing\n\nHindi Phonetic typing uses Roman transliteration.\n\nFor example, typing:\n\nnamaste\n\ncan produce:\n\nनमस्ते\n\nThe input method analyses the Roman spelling and provides possible Hindi word suggestions.\n\nMicrosoft documents this phonetic suggestion process in its Hindi IME guide. \n\n### Difference Between InScript and Phonetic\n\n| Feature | InScript | Hindi Phonetic |\n|---|---|---|\n| Typing Method | Direct character mapping | Roman transliteration |\n| Key Positions | Fixed layout | Based on pronunciation |\n| Learning Requirement | Keyboard mapping practice | Roman spelling familiarity |\n| Suggestions | Not normally required | Provides word suggestions |\n| Suitable For | Direct keyboard typing | Quick everyday Hindi input |\n| Examination Use | Where InScript is specified | Only where permitted |\n\nIf your examination requires InScript, practising with Hindi Phonetic alone will not prepare you for the required key positions.\n\n## Common Mistakes While Learning InScript\n\nBeginners often make mistakes because they try to type quickly before understanding the keyboard.\n\nHere are some common problems.\n\n### 1. Confusing Normal and Shift Characters\n\nSome keys produce entirely different characters when Shift is pressed.\n\nFor example:\n\n- K = क\n- Shift + K = ख\n\nPractise these combinations separately until they become familiar.\n\n### 2. Learning the Wrong Keyboard Layout\n\nHindi Traditional, Hindi Phonetic and other Hindi input methods are not identical.\n\nAlways check which input method is active before practising.\n\n### 3. Incorrect Matra Combinations\n\nA small matra mistake can change the spelling of a word.\n\nPractise combinations such as:\n\nका, कि, की, कु, कू, के, कै, को, कौ\n\n### 4. Forgetting the Halant\n\nThe halant is important for creating conjunct consonants.\n\nFor example:\n\nक् + ष = क्ष\n\nWithout the correct sequence, you may produce an incorrect character combination.\n\n### 5. Looking at the Keyboard Too Frequently\n\nBeginners often become dependent on looking down at every key.\n\nStart with slow exercises and gradually try to type without looking at the keyboard.\n\n### 6. Practising Too Many Things Together\n\nDo not begin by typing long paragraphs containing unfamiliar characters.\n\nFirst practise vowels, then consonants, then matras and finally conjuncts.\n\n## Hindi InScript Typing Practice Exercises\n\nThe best way to learn InScript is through regular practice.\n\nStart with basic letters and gradually move towards complete words and sentences.\n\n### Exercise 1: Basic Vowel Practice\n\nPractise the following independent vowels:\n\nअ आ इ ई उ ऊ ऋ ए ऐ ओ औ\n\nRepeat each character several times.\n\nThen practise the dependent vowel signs:\n\nा ि ी ु ू ृ े ै ो ौ\n\n### Exercise 2: Consonant Practice\n\nPractise these groups:\n\nक ख ग घ\n\nच छ ज झ\n\nट ठ ड ढ\n\nत थ द ध\n\nप फ ब भ\n\nम न व ल\n\nस श ष ह\n\nFocus on producing the correct character with the corresponding normal or Shift key.\n\n### Exercise 3: Matra Combination Practice\n\nPractise these combinations:\n\nका कि की कु कू कृ के कै को कौ\n\nगा गि गी गु गू गृ गे गै गो गौ\n\nपा पि पी पु पू पृ पे पै पो पौ\n\nमा मि मी मु मू मृ मे मै मो मौ\n\n### Exercise 4: Word Typing Practice\n\nTry typing these Hindi words:\n\n1. भारत\n2. विद्यालय\n3. पुस्तक\n4. किसान\n5. सरकार\n6. विद्यार्थी\n7. संस्कृति\n8. परीक्षा\n9. शिक्षा\n10. समाचार\n\n### Exercise 5: Sentence Typing\n\nPractise the following sentences:\n\n1. भारत एक विशाल देश है।\n2. विद्यार्थी नियमित रूप से पढ़ाई करते हैं।\n3. हमें अपनी भाषा का सम्मान करना चाहिए।\n4. किसान खेत में मेहनत से काम करता है।\n5. नियमित अभ्यास से टाइपिंग की गति बढ़ती है।\n\n### Exercise 6: Paragraph Typing\n\nType the following paragraph without looking at the keyboard.\n\n**हिंदी टाइपिंग का महत्व**\n\nहिंदी भारत की प्रमुख भाषाओं में से एक है। कंप्यूटर पर हिंदी में काम करने के लिए सही कीबोर्ड लेआउट सीखना जरूरी है। इनस्क्रिप्ट कीबोर्ड एक व्यवस्थित तरीका प्रदान करता है, जिससे उपयोगकर्ता देवनागरी अक्षर, स्वर, व्यंजन और मात्राएँ टाइप कर सकते हैं। नियमित अभ्यास से कीबोर्ड की पहचान बेहतर होती है और टाइपिंग में होने वाली गलतियाँ कम होती हैं। इसलिए शुरुआत में सही अक्षरों और कुंजियों का अभ्यास करना चाहिए।\n\n![Hindi InScript typing practice worksheet with Devanagari exercises](/images/hindi-inscript-typing-practice-worksheet.jpg)\n\n## How to Improve Hindi InScript Typing Speed\n\nLearning the keyboard layout is only the first step. You must also develop consistency, accuracy and proper finger movement.\n\n### 1. Learn the Layout Row by Row\n\nStart with the vowel and consonant positions.\n\nDo not try to memorise the entire keyboard in one sitting.\n\n### 2. Practise Shift Combinations\n\nMake a separate practice list for normal and Shift characters.\n\nThis will help you avoid confusion between related consonants.\n\n### 3. Practise Matras Daily\n\nMatras appear in almost every Hindi passage.\n\nSpend a few minutes daily typing combinations with different consonants.\n\n### 4. Focus on Accuracy First\n\nDo not try to achieve a high typing speed immediately.\n\nFirst develop correct key recognition, then gradually increase your typing speed.\n\n### 5. Use Timed Typing Tests\n\nOnce you become familiar with the layout, start taking timed typing tests.\n\nTrack:\n\n- Words per minute.\n- Accuracy.\n- Correct characters.\n- Incorrect characters.\n- Frequently mistyped keys.\n\n### 6. Follow a Daily Practice Routine\n\n| Practice Activity | Time |\n|---|---:|\n| Vowel practice | 5 Minutes |\n| Consonant practice | 5 Minutes |\n| Shift combinations | 5 Minutes |\n| Matra combinations | 5 Minutes |\n| Word and sentence practice | 5 Minutes |\n| Timed typing test | 5 Minutes |\n| **Total** | **30 Minutes** |\n\nConsistency is more important than practising for several hours on only one day.\n\n## Practise Hindi InScript Typing Online on TypeHindi\n\nYou do not need to rely only on a physical keyboard chart while learning InScript.\n\nTypeHindi provides tools to help you understand Hindi typing and practise character combinations.\n\nYou can use the following resources:\n\n**Hindi Typing Practice**\n\nPractise Hindi words and passages while tracking your speed and accuracy.\n\nhttps://www.typehindi.in/practice/hindi-typing\n\n**Hindi Keyboard Layout**\n\nExplore the Hindi keyboard layout to identify character positions and Shift combinations.\n\nhttps://www.typehindi.in/keyboard-layout/hindi\n\n**Hindi Typing Test**\n\nTake a timed test to evaluate your Hindi typing performance.\n\nhttps://www.typehindi.in/test/hindi-typing\n\nUse the keyboard layout reference alongside the practice tool until you become comfortable typing without looking at the chart.\n\n## Frequently Asked Questions (FAQs)\n\n**1. What is the Hindi InScript keyboard layout?**\n\nThe Hindi InScript keyboard is a standardised Devanagari input layout that maps Hindi characters to keys on a conventional QWERTY keyboard.\n\n**2. Is InScript an official Indian keyboard layout?**\n\nYes. The Government of India notified the Enhanced InScript Keyboard Layout Standard IS 16350:2016 for e-governance systems in October 2016.\n\n**3. What is the difference between InScript and Hindi Phonetic?**\n\nInScript uses fixed character-to-key mappings, whereas Hindi Phonetic uses Roman transliteration to produce Hindi word suggestions.\n\n**4. Is Mangal a keyboard layout?**\n\nNo. Mangal is a Unicode Devanagari font. InScript is a keyboard layout that determines which characters are entered.\n\n**5. How do I enable InScript in Windows 11?**\n\nOpen Settings, navigate to Time & Language, select Language & Region, add Hindi and check the available keyboard options. Switch between input methods using Windows + Spacebar.\n\n**6. What is the shortcut to switch between English and Hindi?**\n\nPress Windows + Spacebar to switch between installed keyboard layouts.\n\n**7. How do I type ख using InScript?**\n\nIn the Windows Devanagari InScript mapping used in this guide, press Shift + K.\n\n**8. How do I type आ using InScript?**\n\nPress Shift + E in the Windows Devanagari InScript mapping used in this guide.\n\n**9. How do I type Hindi matras in InScript?**\n\nUse the relevant vowel-sign keys after the consonant. For example, K followed by E produces का in the layout described here.\n\n**10. How do I type conjunct characters?**\n\nEnter the relevant consonants with the halant in between. For example, क + ् + ष produces क्ष when correctly rendered.\n\n**11. Is InScript the same as Remington GAIL?**\n\nNo. These are different Hindi keyboard layouts with different character mappings. Their key positions should not be treated as interchangeable.\n\n**12. Can I use InScript for government typing examinations?**\n\nIt depends on the recruitment examination. Some examinations specify InScript or a modified InScript layout, while others prescribe different arrangements. Always follow the official instructions.\n\n**13. Do I need to install a separate Hindi font to use InScript?**\n\nNot necessarily. The input method and the font are separate. Your system needs compatible Devanagari text rendering, but the InScript layout itself is responsible for entering the characters.\n\n**14. Is InScript difficult to learn?**\n\nIt may seem unfamiliar initially, but learning the keyboard row by row, practising Shift combinations and typing regular exercises makes it easier.\n\n## Final Words\n\nThe Hindi InScript keyboard layout provides a systematic way to type Devanagari characters using a standard computer keyboard. Once you understand the normal and Shift key combinations, you can practise vowels, consonants, matras and conjunct characters more confidently.\n\nStart by learning the character positions, then move towards word and sentence exercises. Do not rush to increase your typing speed before you become comfortable with the layout.\n\nIf you are preparing for a government typing test, verify the exact layout required by the recruiting organisation. Some examinations may use modified InScript arrangements, so practising the correct version is essential.\n\nUse the Hindi keyboard layout reference and regular online typing tests on TypeHindi to improve your accuracy and develop consistent typing skills."
},
  {
  "slug": "hindi-matra-typing-practice",
  "titleEn": "Hindi Matra Typing Practice: Complete Guide with Examples and Exercises",
  "title": "हिंदी मात्रा टाइपिंग अभ्यास: संपूर्ण गाइड, उदाहरण और एक्सरसाइज",
  "date": "15 नवंबर, 2026",
  "dateEn": "15 November, 2026",
  "author": "TypeHindi Team",
  "categoryEn": "Typing Guide",
  "category": "टाइपिंग गाइड",
  "tags": [
    "Hindi Matra",
    "Hindi Matra Typing",
    "Matra Typing Practice",
    "Hindi Typing Guide",
    "InScript Matra Typing",
    "Devanagari Vowels",
    "Hindi Typing Exercises",
    "Hindi Typing Test"
  ],
  "excerptEn": "Master all Hindi matras (मात्राएँ) with our comprehensive typing guide. Includes complete vowel charts, consonant combinations, independent vs dependent vowels, common mistakes, and step-by-step practice exercises.",
  "excerpt": "सभी हिंदी मात्राओं (मात्राएँ) पर पकड़ मजबूत करें। संपूर्ण स्वर-मात्रा चार्ट, व्यंजन संयोजन, स्वतंत्र स्वर बनाम मात्रा, सामान्य गलतियां और अभ्यास एक्सरसाइज की विस्तृत गाइड।",
  "image": "/images/hindi-matra-typing-practice.jpg",
  "content": "हिंदी टाइपिंग (Hindi Typing) सीखना केवल कीबोर्ड पर अक्षरों की स्थिति याद करने तक सीमित नहीं है। इसका सबसे महत्वपूर्ण और संवेदनशील हिस्सा **हिंदी मात्राओं (मात्राएँ - Hindi Matras)** को समझना और शुद्धता से टाइप करना है।\n\nमात्राएँ वे स्वर-चिह्न हैं जो किसी व्यंजन से जुड़कर उसके उच्चारण को बदल देते हैं। हिंदी के लगभग प्रत्येक वाक्य में मात्राओं का प्रयोग होता है, इसलिए टाइपिंग के दौरान एक छोटी सी चूक भी शब्द का अर्थ या वर्तनी (Spelling) बदल सकती है।\n\nउदाहरण के लिए, इन संयोजनों को देखें:\n- **क** = Ka\n- **का** = Kaa\n- **कि** = Ki\n- **की** = Kee\n- **कु** = Ku\n- **कू** = Koo\n\nइन सभी में मूल व्यंजन 'क' समान है, लेकिन मात्रा के अनुसार स्वर का उच्चारण पूरी तरह बदल जाता है।\n\nचाहे आप एसएससी (SSC), रेलवे, हाई कोर्ट या किसी भी सरकारी टाइपिंग परीक्षा की तैयारी कर रहे हों, इनस्क्रिप्ट (InScript) कीबोर्ड सीख रहे हों, या दैनिक कार्यों के लिए टाइपिंग सीख रहे हों — मात्राओं पर मजबूत पकड़ होना अनिवार्य है।\n\nइस संपूर्ण मार्गदर्शिका में आप सभी प्रमुख हिंदी मात्राओं, स्वतंत्र स्वरों, व्यंजन संयोजनों, टाइपिंग की सामान्य गलतियों और गति बढ़ाने की व्यावहारिक एक्सरसाइज के बारे में विस्तार से जानेंगे।\n\n---\n\n## हिंदी मात्राएँ क्या हैं? (What Are Hindi Matras?)\n\nहिंदी देवनागरी लिपि में लिखी जाती है। देवनागरी में प्रत्येक मूल व्यंजन में अंतर्निहित रूप से 'अ' का स्वर जुड़ा होता है।\n\nउदाहरण के लिए, व्यंजन **क** का स्वाभाविक उच्चारण \"Ka\" होता है। जब इसके बाद कोई अन्य स्वर आता है, तो उस स्वर का एक विशेष प्रतीक (मात्रा) उस व्यंजन के साथ जोड़ दिया जाता है।\n\n| संयोजन | परिणामी अक्षर | उच्चारण |\n|:---:|:---:|:---:|\n| **क + ा** | **का** | Kaa |\n| **क + ि** | **कि** | Ki |\n| **क + ी** | **की** | Kee |\n| **क + ु** | **कु** | Ku |\n| **क + ू** | **कू** | Koo |\n| **क + े** | **के** | Ke |\n| **क + ै** | **कै** | Kai |\n| **क + ो** | **को** | Ko |\n| **क + ौ** | **कौ** | Kau |\n\nमात्रा स्वतंत्र रूप से एक पूर्ण स्वर अक्षर की तरह अकेले नहीं लिखी जाती। यह एक आश्रित स्वर-चिह्न (Dependent Vowel Sign) है जो किसी व्यंजन या संयुक्त वर्ण के साथ ही प्रयुक्त होता है:\n- **इ** एक स्वतंत्र स्वर (Independent Vowel) है।\n- **ि** इसका आश्रित मात्रा-चिह्न है।\n- **ई** एक स्वतंत्र स्वर है।\n- **ी** इसका आश्रित मात्रा-चिह्न है।\n\n---\n\n## संपूर्ण हिंदी मात्रा चार्ट (Hindi Matra Chart with Examples)\n\nहिंदी में आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ और औ — इन दस स्वतंत्र स्वरों के लिए दस आश्रित मात्रा-चिह्न होते हैं। 'अ' का स्वर सभी व्यंजनों में स्वतः समाहित होता है, इसलिए इसका कोई अलग मात्रा चिह्न नहीं होता।\n\n| स्वतंत्र स्वर | मात्रा चिह्न | 'क' के साथ संयोजन | उच्चारण |\n|:---:|:---:|:---:|:---:|\n| **अ** | *(कोई अलग मात्रा नहीं)* | **क** | Ka |\n| **आ** | **ा** | **का** | Kaa |\n| **इ** | **ि** | **कि** | Ki |\n| **ई** | **ी** | **की** | Kee |\n| **उ** | **ु** | **कु** | Ku |\n| **ऊ** | **ू** | **कू** | Koo |\n| **ऋ** | **ृ** | **कृ** | Kri / Kṛ |\n| **ए** | **े** | **के** | Ke |\n| **ऐ** | **ै** | **कै** | Kai |\n| **ओ** | **ो** | **को** | Ko |\n| **औ** | **ौ** | **कौ** | Kau |\n\n![Complete Hindi matra chart with independent vowels and dependent signs](/images/complete-hindi-matra-chart.jpg)\n*चित्र 1: संपूर्ण हिंदी मात्रा चार्ट (स्वर, मात्रा चिह्न और व्यंजनों का संयोजन)।*\n\n---\n\n## प्रत्येक मात्रा का विस्तार से विश्लेषण और उदाहरण\n\n### 1. आ की मात्रा (ा)\nव्यंजन के अंतर्निहित स्वर को दीर्घ 'आ' में बदलती है।\n- **शब्द**: राम (र + ा + म), बात (ब + ा + त), काम, खाना, बाजार, समाचार।\n- **अभ्यास**: राम, बात, काम, नाम, खाना, बाजार, सामान, मकान, परिवार, समाचार।\n\n### 2. इ की मात्रा (ि)\nह्रस्व 'इ' का उच्चारण देती है। यह दिखने में व्यंजन के बायीं ओर लगती है, लेकिन कंप्यूटर में टाइप करते समय इसे व्यंजन के *बाद* ही टाइप किया जाता है (क + ि = कि)।\n- **शब्द**: दिन, किताब, किसान, चित्र, शिक्षा, विकास।\n- **अभ्यास**: दिन, किताब, किसान, चित्र, शिक्षा, विकास, विचार, नियम, विज्ञान, विभाग।\n\n### 3. ई की मात्रा (ी)\nदीर्घ 'ई' का उच्चारण देती है और व्यंजन के दायीं ओर लगती है।\n- **शब्द**: पानी, नदी, दीपक, जीवन, सीता, पीला।\n- **अभ्यास**: पानी, नदी, दीपक, जीवन, सीता, पीला, संगीत, कहानी, मशीन, परीक्षा।\n- **सावधानी**: 'ि' और 'ी' में कभी भ्रमित न हों। इनके बदलने से शब्द का अर्थ बदल जाता है (जैसे: दिन = दिवस, दीन = गरीब)।\n\n### 4. उ की मात्रा (ु)\nव्यंजन के नीचे बायीं ओर मुड़ती है।\n- **शब्द**: पुल, कुशल, दुकान, गुलाब, सुबह, कुत्ता।\n- **अभ्यास**: पुल, दुकान, कुशल, सुबह, गुलाब, कुत्ता, दुनिया, पुस्तक, सुरक्षा, मुकाबला।\n\n### 5. ऊ की मात्रा (ू)\nव्यंजन के नीचे दायीं ओर लटकती है।\n- **शब्द**: फूल, सूरज, झूला, धूप, भूगोल, स्कूल।\n- **अभ्यास**: फूल, सूरज, झूला, धूप, भूगोल, स्कूल, सूचना, मजबूत, जरूरी, दूध।\n\n### 6. ऋ की मात्रा (ृ)\nव्यंजन के नीचे अर्ध-वृत्ताकार हुक की तरह लगती है। संस्कृतनिष्ठ शब्दों में इसका विशेष प्रयोग होता है।\n- **शब्द**: कृपा, कृषि, वृक्ष, पृथ्वी, गृह, स्मृति।\n- **अभ्यास**: कृपा, कृषि, वृक्ष, पृथ्वी, गृह, स्मृति, कृत्रिम, संस्कृति।\n\n### 7. ए की मात्रा (े)\nशिरोरेखा के ऊपर एक तिरछी मात्रा।\n- **शब्द**: केला, मेज, रेल, देश, खेल, मेहनत।\n- **अभ्यास**: केला, मेज, रेल, देश, खेल, मेहनत, लेख, नेता, सेवा, प्रवेश।\n\n### 8. ऐ की मात्रा (ै)\nशिरोरेखा के ऊपर दो तिरछी मात्राएं।\n- **शब्द**: पैसा, बैल, मैना, नैना, बैठक, कैसा।\n- **अभ्यास**: पैसा, बैल, मैना, नैना, कैसा, जैसा, बैठक, दैनिक, नैतिक, मैदान।\n\n### 9. ओ की मात्रा (ो)\nएक खड़ी डंडी (ा) और ऊपर एक मात्रा (े)।\n- **शब्द**: मोर, सोना, दोस्त, भोजन, रोजगार, कोमल।\n- **अभ्यास**: मोर, सोना, दोस्त, भोजन, कोमल, मौसम, बोलना, रोजगार, कारोबार, सोच।\n\n### 10. औ की मात्रा (ौ)\nएक खड़ी डंडी (ा) और ऊपर दो मात्राएं (ै)।\n- **शब्द**: कौआ, नौका, मौसम, चौक, दौड़, मौन।\n- **अभ्यास**: कौआ, नौका, मौसम, चौक, दौड़, मौन, चौकी, नौकर, पौधा, मौजूदा।\n\n---\n\n## स्वतंत्र स्वर बनाम मात्रा: बुनियादी अंतर समझें\n\n- **स्वतंत्र स्वर (Independent Vowels)**: जब कोई शब्द या शब्दांश किसी स्वर से शुरू होता है और उसके आगे कोई व्यंजन नहीं होता (जैसे: आम, इमली, ऊन, एक)।\n- **आश्रित मात्रा (Dependent Matras)**: जब स्वर का उच्चारण किसी व्यंजन के तुरंत बाद आता है (जैसे: राम, दिन, फूल, केला)।\n\n| स्वतंत्र स्वर | शब्द | आश्रित मात्रा | शब्द |\n|:---:|:---:|:---:|:---:|\n| **आ** | आम | **ा** | राम |\n| **इ** | इमली | **ि** | दिन |\n| **ई** | ईख | **ी** | पानी |\n| **उ** | उल्लू | **ु** | पुल |\n| **ऊ** | ऊन | **ू** | फूल |\n| **ऋ** | ऋषि | **ृ** | कृपा |\n| **ए** | एक | **े** | केला |\n| **ऐ** | ऐनक | **ै** | बैल |\n| **ओ** | ओस | **ो** | मोर |\n| **औ** | और | **ौ** | नौका |\n\n![Difference between independent Hindi vowels and dependent matras](/images/independent-vowels-vs-matras.png)\n*चित्र 2: स्वतंत्र स्वर बनाम आश्रित मात्राओं का सचित्र तुलनात्मक चार्ट।*\n\n---\n\n## कीबोर्ड पर हिंदी मात्राएं कैसे टाइप करें?\n\nमानक हिंदी **इनस्क्रिप्ट (InScript)** कीबोर्ड लेआउट में सभी स्वर मात्राएं कीबोर्ड के बायीं ओर (Left Side) वैज्ञानिक रूप से व्यवस्थित हैं:\n- **E key** → **ा**\n- **F key** → **ि**\n- **R key** → **ी**\n- **G key** → **ु**\n- **T key** → **ू**\n- **S key** → **े**\n- **W key** → **ै**\n- **A key** → **ो**\n- **Q key** → **ौ**\n- **D key** → **्** (हलंत)\n\n### टाइपिंग अभ्यास का सही क्रम:\n1. पहले व्यंजन टाइप करें, फिर संबंधित मात्रा दबाएं।\n2. क, का, कि, की, कु, कू, कृ, के, कै, को, कौ — इस क्रम को प्रत्येक व्यंजन के साथ 5 बार दोहराएं।\n3. दो और तीन अक्षरों वाले शब्दों का अभ्यास करें।\n4. पूर्ण वाक्यों का अभ्यास करें ताकि अंगुलियों की मसल मेमोरी मजबूत हो सके।\n\n![Hindi matra typing exercises with words and sentences](/images/hindi-matra-typing-worksheet.jpg)\n*चित्र 3: हिंदी मात्रा टाइपिंग अभ्यास वर्कशीट (वर्ण, शब्द और वाक्य अभ्यास)।*\n\n---\n\n## हिंदी टाइपिंग में अन्य महत्वपूर्ण चिह्न\n\n| चिह्न | नाम | कार्य | उदाहरण |\n|:---:|:---:|:---:|:---:|\n| **ं** | **अनुस्वार** | नासिका ध्वनि | **हिंदी, रंग, संबंध** |\n| **ँ** | **चन्द्रबिन्दु** | अनुनासिक स्वर | **माँ, आँख, चाँद** |\n| **ः** | **विसर्ग** | अः की ध्वनि | **दुःख, अतः, प्रातः** |\n| **्** | **हलंत** | आधा अक्षर बनाना | **क्, त्, विद्या, संयुक्त** |\n| **़** | **नुक्ता** | आगत ध्वनियों के लिए बिंदु | **क़, ख़, ग़, ज़, फ़, ड़, ढ़** |\n\n---\n\n## मात्रा टाइपिंग की 4 व्यावहारिक एक्सरसाइज\n\n### एक्सरसाइज 1: व्यंजन-मात्रा संयोजन\n- क का कि की कु कू कृ के कै को कौ\n- ग गा गि गी गु गू गृ गे गै गो गौ\n- म मा मि मी मु मू मृ मे मै मो मौ\n- प पा पि पी पु पू पृ पे पै पो पौ\n\n### एक्सरसाइज 2: शब्द अभ्यास\n- **आ**: राम, नाम, बात, काम, खाना, बाजार, समाचार।\n- **इ**: दिन, किताब, किसान, चित्र, शिक्षा, विचार, नियम।\n- **ई**: पानी, नदी, दीपक, जीवन, सीता, कहानी, संगीत।\n- **उ/ऊ**: पुल, दुकान, गुलाब, सुबह, फूल, सूरज, झूला, धूप।\n- **ए/ऐ**: केला, मेज, रेल, देश, पैसा, बैल, मैना, मैदान।\n- **ओ/औ**: मोर, सोना, दोस्त, भोजन, कौआ, नौका, मौसम, पौधा।\n\n### एक्सरसाइज 3: वाक्य अभ्यास\n1. राम रोज़ सुबह जल्दी उठकर पढ़ाई करता है।\n2. किसान अपने खेत में मेहनत से काम करता है।\n3. दीपक ने अपनी नई किताब खरीदी।\n4. बच्चे मैदान में खेल रहे हैं।\n5. आज मौसम बहुत अच्छा है।\n\n### एक्सरसाइज 4: पैराग्राफ अभ्यास\n> नियमित अभ्यास किसी भी कौशल को बेहतर बनाने का सबसे अच्छा तरीका है। हिंदी टाइपिंग सीखने के लिए सबसे पहले अक्षरों और मात्राओं को समझना जरूरी है। इसके बाद छोटे शब्दों, वाक्यों और लंबे अनुच्छेदों का अभ्यास करना चाहिए। शुरुआत में गति धीमी हो सकती है, लेकिन सही तकनीक और नियमित मेहनत से टाइपिंग की शुद्धता और गति दोनों में सुधार होता है।\n\n---\n\n## TypeHindi पर ऑनलाइन अभ्यास करें\n\nTypeHindi पर परीक्षा स्तर की तैयारी के लिए निःशुल्क टूल्स उपलब्ध हैं:\n- **[हिंदी टाइपिंग प्रैक्टिस](https://www.typehindi.in/practice/hindi-typing)**: लाइव स्पीड और एक्यूरेसी मीटर के साथ पैराग्राफ अभ्यास।\n- **[हिंदी कीबोर्ड लेआउट](https://www.typehindi.in/keyboard-layout/hindi)**: इनस्क्रिप्ट कीबोर्ड की सभी कुंजियों का इंटरएक्टिव नक्शा।\n- **[मंगल फ़ॉन्ट टाइपिंग टेस्ट](https://www.typehindi.in/mangal-font-typing-test)**: सरकारी परीक्षा पैटर्न पर आधारित टाइम टेस्ट।\n- **[टाइपिंग स्पीड टेस्ट](https://www.typehindi.in/test/hindi-typing)**: गति प्रमाण पत्र और गलती विश्लेषण के साथ।\n\n---\n\n## निष्कर्ष\n\nहिंदी मात्राओं पर पूर्ण नियंत्रण ही तीव्र और त्रुटिहीन हिंदी टाइपिंग की कुंजी है। स्वतंत्र स्वर और आश्रित मात्राओं के अंतर को समझकर, दैनिक 25 मिनट के अनुशासित अभ्यास से आप किसी भी सरकारी टाइपिंग परीक्षा में शत-प्रतिशत सफलता प्राप्त कर सकते हैं।",
  "contentEn": "Learning Hindi typing is not just about memorising the positions of Hindi characters on a keyboard. One of the most important skills is understanding and correctly typing **Hindi matras (मात्राएँ)**.\n\nMatras are vowel signs that are attached to consonants to change their pronunciation. They appear in almost every Hindi sentence, so even a small mistake while typing them can change the meaning or spelling of a word.\n\nFor example, consider these combinations:\n- **क** = Ka\n- **का** = Kaa\n- **कि** = Ki\n- **की** = Kee\n- **कु** = Ku\n- **कू** = Koo\n\nAll these combinations use the same consonant, but the vowel sound changes depending on the matra.\n\nWhether you are preparing for a Hindi typing examination, learning the InScript keyboard, practising Mangal Unicode typing or improving your everyday typing skills, understanding matras is essential.\n\nIn this guide, you will learn all the commonly used Hindi matras, their independent vowel forms, how they combine with consonants, common typing mistakes and practical exercises to improve your accuracy and speed.\n\n---\n\n## What Are Hindi Matras (मात्राएँ)?\n\nHindi is written using the Devanagari script. In this writing system, consonants generally carry an inherent vowel sound.\n\nFor example, the consonant **क** is normally pronounced as \"ka\". When another vowel sound follows it, a vowel sign called a matra is attached to the consonant.\n\nConsider the following examples:\n\n| Combination | Hindi Character | Pronunciation |\n|:---:|:---:|:---:|\n| **क + ा** | **का** | Kaa |\n| **क + ि** | **कि** | Ki |\n| **क + ी** | **की** | Kee |\n| **क + ु** | **कु** | Ku |\n| **क + ू** | **कू** | Koo |\n| **क + े** | **के** | Ke |\n| **क + ै** | **कै** | Kai |\n| **क + ो** | **को** | Ko |\n| **क + ौ** | **कौ** | Kau |\n\nNotice how the consonant remains the same while the vowel sound changes.\n\nA matra does not normally stand independently like a complete vowel letter. It is a dependent vowel sign used with a consonant or consonant cluster.\n\nFor example:\n- **इ** is an independent vowel.\n- **ि** is its dependent vowel sign.\n- **ई** is an independent vowel.\n- **ी** is its dependent vowel sign.\n\nUnderstanding this distinction is the first step towards accurate Hindi typing.\n\n---\n\n## Complete Hindi Matra Chart with Examples\n\nThere are ten commonly taught dependent vowel signs corresponding to the independent vowels आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ and औ.\n\nThe vowel **अ** has an inherent representation in a basic consonant and does not have a separate dependent matra.\n\nHere is a useful chart for beginners:\n\n| Independent Vowel | Matra Sign | Example with क | Pronunciation Guide |\n|:---:|:---:|:---:|:---:|\n| **अ** | *(No separate matra)* | **क** | Ka |\n| **आ** | **ा** | **का** | Kaa |\n| **इ** | **ि** | **कि** | Ki |\n| **ई** | **ी** | **की** | Kee |\n| **उ** | **ु** | **कु** | Ku |\n| **ऊ** | **ू** | **कू** | Koo |\n| **ऋ** | **ृ** | **कृ** | Kri / Kṛ |\n| **ए** | **े** | **के** | Ke |\n| **ऐ** | **ै** | **कै** | Kai |\n| **ओ** | **ो** | **को** | Ko |\n| **औ** | **ौ** | **कौ** | Kau |\n\n*The pronunciation shown is an approximate learning aid. Actual Hindi pronunciation depends on the word and its linguistic context.*\n\n### Visual Understanding of Hindi Matras\n\nThe easiest way to understand matras is to compare the independent vowel with its corresponding dependent sign:\n\n| Independent Vowel | With Consonant | Resulting Syllable |\n|:---:|:---:|:---:|\n| **आ** | क + ा | **का** |\n| **इ** | क + ि | **कि** |\n| **ई** | क + ी | **की** |\n| **उ** | क + ु | **कु** |\n| **ऊ** | क + ू | **कू** |\n| **ऋ** | क + ृ | **कृ** |\n| **ए** | क + े | **के** |\n| **ऐ** | क + ै | **कै** |\n| **ओ** | क + ो | **को** |\n| **औ** | क + ौ | **कौ** |\n\n![Complete Hindi matra chart with independent vowels and dependent signs](/images/complete-hindi-matra-chart.jpg)\n*Figure 1: Complete Hindi matra chart showing independent vowels, dependent vowel signs, and consonant combinations.*\n\n---\n\n## Understanding Each Hindi Matra with Examples\n\nNow let's examine each matra separately with clear word examples to help you recognise characters before typing them.\n\n### 1. आ की मात्रा (ा)\nThe **आ** matra changes the inherent vowel sound of a consonant to a long **आ** sound.\n\n| Word | Matra Combination |\n|---|---|\n| **राम** | र + ा + म |\n| **बात** | ब + ा + त |\n| **काम** | क + ा + म |\n| **खाना** | ख + ा + न + ा |\n| **बाजार** | ब + ा + ज + ा + र |\n| **समाचार** | स + म + ा + च + ा + र |\n\n> **Practice Drill:** राम, बात, काम, नाम, खाना, बाजार, सामान, मकान, परिवार, समाचार।\n\n---\n\n### 2. इ की मात्रा (ि)\nThe **इ** matra is represented by **ि**.\n\nOne crucial characteristic is that this sign appears visually to the left of the consonant, even though in the underlying Unicode encoding sequence it is typed and stored *after* the consonant.\n\nFor example:\n**क + ि = कि**\n\n| Word | Matra Combination |\n|---|---|\n| **दिन** | द + ि + न |\n| **किताब** | क + ि + त + ा + ब |\n| **किसान** | क + ि + स + ा + न |\n| **चित्र** | च + ि + त् + र |\n| **शिक्षा** | श + ि + क् + ष + ा |\n| **विकास** | व + ि + क + ा + स |\n\n> **Practice Drill:** दिन, किताब, किसान, चित्र, शिक्षा, विकास, विचार, नियम, विज्ञान, विभाग।\n\n---\n\n### 3. ई की मात्रा (ी)\nThe **ई** matra produces a long **ई** sound and curves over to the right of the consonant.\n\n| Word | Matra Combination |\n|---|---|\n| **पानी** | प + ा + न + ी |\n| **नदी** | न + द + ी |\n| **दीपक** | द + ी + प + क |\n| **जीवन** | ज + ी + व + न |\n| **सीता** | स + ी + त + ा |\n| **पीला** | प + ी + ल + ा |\n\n> **Practice Drill:** पानी, नदी, दीपक, जीवन, सीता, पीला, संगीत, कहानी, मशीन, परीक्षा।\n\n> **Important:** Do not confuse **ि** (short 'i') and **ी** (long 'ee'). Their appearance and pronunciation are completely different, and substituting one for the other changes word meanings (e.g., दिन = day vs. दीन = poor).\n\n---\n\n### 4. उ की मात्रा (ु)\nThe **उ** matra attaches underneath the consonant with a leftward loop.\n\n| Word | Matra Combination |\n|---|---|\n| **पुल** | प + ु + ल |\n| **कुशल** | क + ु + श + ल |\n| **दुकान** | द + ु + क + ा + न |\n| **गुलाब** | ग + ु + ल + ा + ब |\n| **सुबह** | स + ु + ब + ह |\n| **कुत्ता** | क + ु + त् + त + ा |\n\n> **Practice Drill:** पुल, दुकान, कुशल, सुबह, गुलाब, कुत्ता, दुनिया, पुस्तक, सुरक्षा, मुकाबला।\n\n---\n\n### 5. ऊ की मात्रा (ू)\nThe **ऊ** matra attaches underneath the consonant with a rightward descending tail.\n\n| Word | Matra Combination |\n|---|---|\n| **फूल** | फ + ू + ल |\n| **सूरज** | स + ू + र + ज |\n| **झूला** | झ + ू + ल + ा |\n| **धूप** | ध + ू + प |\n| **भूगोल** | भ + ू + ग + ो + ल |\n| **स्कूल** | स + ् + क + ू + ल |\n\n> **Practice Drill:** फूल, सूरज, झूला, धूप, भूगोल, स्कूल, सूचना, मजबूत, जरूरी, दूध।\n\n---\n\n### 6. ऋ की मात्रा (ृ)\nThe **ऋ** matra attaches underneath consonants as a small semi-circular hook. It is essential for typing Sanskrit-derived formal words.\n\n| Word | Matra Combination |\n|---|---|\n| **कृपा** | क + ृ + प + ा |\n| **कृषि** | क + ृ + ष + ि |\n| **वृक्ष** | व + ृ + क् + ष |\n| **पृथ्वी** | प + ृ + थ् + व + ी |\n| **गृह** | ग + ृ + ह |\n| **स्मृति** | स् + म + ृ + त + ि |\n\n> **Practice Drill:** कृपा, कृषि, वृक्ष, पृथ्वी, गृह, स्मृति, कृत्रिम, संस्कृति।\n\n---\n\n### 7. ए की मात्रा (े)\nThe **ए** matra is represented by a single diagonal flag atop the horizontal headline (shirorekha).\n\n| Word | Matra Combination |\n|---|---|\n| **केला** | क + े + ल + ा |\n| **मेज** | म + े + ज |\n| **रेल** | र + े + ल |\n| **देश** | द + े + श |\n| **खेल** | ख + े + ल |\n| **मेहनत** | म + े + ह + न + त |\n\n> **Practice Drill:** केला, मेज, रेल, देश, खेल, मेहनत, लेख, नेता, सेवा, प्रवेश।\n\n---\n\n### 8. ऐ की मात्रा (ै)\nThe **ऐ** matra is represented by two diagonal flags atop the shirorekha.\n\n| Word | Matra Combination |\n|---|---|\n| **पैसा** | प + ै + स + ा |\n| **बैल** | ब + ै + ल |\n| **मैना** | म + ै + न + ा |\n| **नैना** | न + ै + न + ा |\n| **बैठक** | ब + ै + ठ + क |\n| **कैसा** | क + ै + स + ा |\n\n> **Practice Drill:** पैसा, बैल, मैना, नैना, कैसा, जैसा, बैठक, दैनिक, नैतिक, मैदान।\n\n---\n\n### 9. ओ की मात्रा (ो)\nThe **ओ** matra combines a vertical stem (ा) with a top flag (े).\n\n| Word | Matra Combination |\n|---|---|\n| **मोर** | म + ो + र |\n| **सोना** | स + ो + न + ा |\n| **दोस्त** | द + ो + स् + त |\n| **भोजन** | भ + ो + ज + न |\n| **रोजगार** | र + ो + ज + ग + ा + र |\n| **कोमल** | क + ो + म + ल |\n\n> **Practice Drill:** मोर, सोना, दोस्त, भोजन, कोमल, मौसम, बोलना, रोजगार, कारोबार, सोच।\n\n---\n\n### 10. औ की मात्रा (ौ)\nThe **औ** matra combines a vertical stem (ा) with two top flags (ै).\n\n| Word | Matra Combination |\n|---|---|\n| **कौआ** | क + ौ + आ |\n| **नौका** | न + ौ + क + ा |\n| **मौसम** | म + ौ + स + म |\n| **चौक** | च + ौ + क |\n| **दौड़** | द + ौ + ड़ |\n| **मौन** | म + ौ + न |\n\n> **Practice Drill:** कौआ, नौका, मौसम, चौक, दौड़, मौन, चौकी, नौकर, पौधा, मौजूदा।\n\n---\n\n## Independent Vowels vs Matras: Understand the Difference\n\nThis is one of the most critical fundamentals for Hindi typing learners.\n\n- **Independent Vowels (स्वतंत्र स्वर)**: Used when a vowel begins a syllable or word without an attached consonant (e.g., आम, इमली, ऊन, एक).\n- **Dependent Matras (आश्रित मात्राएँ)**: Used when a vowel sound immediately follows a consonant (e.g., राम, दिन, फूल, केला).\n\n| Independent Vowel | Word Example | Dependent Matra | Word Example |\n|:---:|:---:|:---:|:---:|\n| **आ** | आम | **ा** | राम |\n| **इ** | इमली | **ि** | दिन |\n| **ई** | ईख | **ी** | पानी |\n| **उ** | उल्लू | **ु** | पुल |\n| **ऊ** | ऊन | **ू** | फूल |\n| **ऋ** | ऋषि | **ृ** | कृपा |\n| **ए** | एक | **े** | केला |\n| **ऐ** | ऐनक | **ै** | बैल |\n| **ओ** | ओस | **ो** | मोर |\n| **औ** | और | **ौ** | नौका |\n\nFor example, the word **आम** begins with the independent vowel **आ**. However, in the word **राम**, the consonant **र** is followed by the dependent matra **ा**.\n\n![Difference between independent Hindi vowels and dependent matras](/images/independent-vowels-vs-matras.png)\n*Figure 2: Visual comparison of independent Hindi vowels versus dependent vowel signs (matras).*\n\n---\n\n## How to Type Hindi Matras on a Keyboard\n\nThe exact physical key used to type a matra depends on your chosen keyboard layout. On **Hindi InScript**, vowel matras are grouped logically on the left side of the keyboard.\n\n### Step 1: Select Your Hindi Keyboard Layout\nMake sure your operating system is using the designated layout required for your target exam:\n- **Hindi InScript / Traditional**: Mandated for SSC, Railway, and central examinations.\n- **Remington GAIL**: Commonly used for High Court, CPCT, and state clerical tests.\n\n### Step 2: Learn Matra Key Positions (InScript Reference)\nOn standard Hindi InScript, matras are located on the left-hand keys:\n- **E key** → **ा** (Aa matra)\n- **F key** → **ि** (Short I matra)\n- **R key** → **ी** (Long Ee matra)\n- **G key** → **ु** (Short U matra)\n- **T key** → **ू** (Long Oo matra)\n- **S key** → **े** (E matra)\n- **W key** → **ै** (Ai matra)\n- **A key** → **ो** (O matra)\n- **Q key** → **ौ** (Au matra)\n- **D key** → **्** (Halant / Virama)\n\n### Step 3: Practise Consonant and Matra Combinations\nType systematically across the rows:\n- **क, का, कि, की, कु, कू, कृ, के, कै, को, कौ**\n- **ग, गा, गि, गी, गु, गू, गृ, गे, गै, गो, गौ**\n- **म, मा, मि, मी, मु, मू, मृ, मे, मै, मो, मौ**\n\n### Step 4: Move to Complete Words\nType short two- and three-letter words:\n- **राम, नाम, दिन, नदी, पुल, फूल, देश, पैसा, मोर, नौका**\n\n### Step 5: Practise Full Sentences\nTyping complete sentences trains your reflexes to type matras smoothly in context:\n- राम रोज़ सुबह समय पर उठता है।\n- दीपक अपनी किताब पढ़ रहा है।\n- किसान खेत में काम करता है।\n- बच्चे मैदान में खेल रहे हैं।\n- मौसम अच्छा है और धूप निकल रही है।\n\n![Hindi matra typing exercises with words and sentences](/images/hindi-matra-typing-worksheet.jpg)\n*Figure 3: Hindi matra typing practice worksheet with letter drills, vocabulary words, and short sentences.*\n\n---\n\n## Common Hindi Matra Typing Mistakes\n\nEven experienced typists occasionally make matra errors. Watch out for these six common pitfalls:\n\n### 1. Confusing ि and ी\nSubstituting short **ि** with long **ी** completely alters word meanings:\n- **दिन** (day) vs. **दीन** (poor/needy)\n- **मिल** (meet) vs. **मील** (mile)\n\n### 2. Confusing ु and ू\nBe mindful of whether words call for the short **ु** or long **ू**:\n- **कुल** (family/total) vs. **कूल** (river bank)\n- **सुना** (heard) vs. **सूना** (deserted/empty)\n\n### 3. Confusing े and ै\n- **बेल** (creeper/vine) vs. **बैल** (ox/bull)\n- **मेला** (fair) vs. **मैला** (dirty)\n\n### 4. Typing ि in the Wrong Order\nIn Unicode Devanagari, **always type the consonant first, then type the matra**.\n- Correct sequence: `क` followed by `ि` = **कि**\n- The text engine automatically displays the curve to the left of the letter.\n\n### 5. Mixing Up Layouts\nNever switch between InScript and Remington GAIL in the middle of a typing drill. Stick to one layout until muscle memory is permanent.\n\n### 6. Guessing Keys\nNever guess or hunt-and-peck. Keep an interactive [Hindi Keyboard Layout Chart](https://www.typehindi.in/keyboard-layout/hindi) open on screen.\n\n---\n\n## Other Essential Devanagari Signs\n\nIn addition to vowel matras, these auxiliary signs are fundamental for accurate Hindi writing:\n\n| Sign | Name | Role | Example |\n|:---:|:---:|:---:|:---:|\n| **ं** | **Anusvara** | Nasal sound on headline | **हिंदी, रंग, संबंध** |\n| **ँ** | **Chandrabindu** | Nasalized vowel | **माँ, आँख, चाँद** |\n| **ः** | **Visarga** | Soft aspirated 'h' ending | **दुःख, अतः, प्रातः** |\n| **्** | **Halant / Virama** | Suppresses inherent vowel / creates half-letters | **क्, त्, विद्या, संयुक्त** |\n| **़** | **Nukta** | Diacritic dot for modified sounds | **क़, ख़, ग़, ज़, फ़, ड़, ढ़** |\n\n---\n\n## Hindi Matra Typing Practice Exercises\n\n### Exercise 1: Basic Matra Combinations\nType each series 5 times consecutively:\n- **Series A**: क का कि की कु कू कृ के कै को कौ\n- **Series B**: ग गा गि गी गु गू गृ गे गै गो गौ\n- **Series C**: म मा मि मी मु मू मृ मे मै मो मौ\n- **Series D**: प पा पि पी पु पू पृ पे पै पो पौ\n- **Series E**: न ना नि नी नु नू नृ ने नै नो नौ\n\n### Exercise 2: Grouped Vocabulary Drills\n- **आ matra**: राम, नाम, बात, काम, खाना, बाजार, समाचार।\n- **इ matra**: दिन, किताब, किसान, चित्र, शिक्षा, विचार, नियम।\n- **ई matra**: पानी, नदी, दीपक, जीवन, सीता, कहानी, संगीत।\n- **उ matra**: पुल, कुशल, दुकान, गुलाब, सुबह, दुनिया, सुरक्षा।\n- **ऊ matra**: फूल, सूरज, झूला, धूप, भूगोल, स्कूल, मजबूत।\n- **ए matra**: केला, मेज, रेल, देश, खेल, मेहनत, प्रवेश।\n- **ऐ matra**: पैसा, बैल, मैना, नैना, बैठक, मैदान, नैतिक।\n- **ओ matra**: मोर, सोना, दोस्त, भोजन, कोमल, रोजगार, कारोबार।\n- **औ matra**: कौआ, नौका, मौसम, चौक, दौड़, मौन, पौधा।\n\n### Exercise 3: Complete Sentence Practice\n1. राम रोज़ सुबह जल्दी उठकर पढ़ाई करता है।\n2. किसान अपने खेत में मेहनत से काम करता है।\n3. दीपक ने अपनी नई किताब खरीदी।\n4. बच्चे मैदान में खेल रहे हैं।\n5. आज मौसम बहुत अच्छा है।\n6. मोर बारिश के मौसम में नाचता है।\n7. माँ ने बाजार से ताज़े फल खरीदे।\n8. विद्यार्थी परीक्षा की तैयारी कर रहे हैं।\n9. भारत एक विविध भाषाओं वाला देश है।\n10. अच्छे अभ्यास से टाइपिंग की गति बढ़ती है।\n\n### Exercise 4: Comprehensive Paragraph Drill\n\n> **अभ्यास का महत्व**  \n> नियमित अभ्यास किसी भी कौशल को बेहतर बनाने का सबसे अच्छा तरीका है। हिंदी टाइपिंग सीखने के लिए सबसे पहले अक्षरों और मात्राओं को समझना जरूरी है। इसके बाद छोटे शब्दों, वाक्यों और लंबे अनुच्छेदों का अभ्यास करना चाहिए। शुरुआत में गति धीमी हो सकती है, लेकिन सही तकनीक और नियमित मेहनत से टाइपिंग की शुद्धता और गति दोनों में सुधार होता है। इसलिए रोज़ कुछ समय निकालकर अभ्यास करना चाहिए और अपनी गलतियों को पहचानकर उन्हें सुधारना चाहिए।\n\n---\n\n## How to Improve Speed and Accuracy\n\n1. **Practise One Matra at a Time**: Spend 5 minutes on a single matra before mixing them together.\n2. **Prioritise 95%+ Accuracy**: Never rush. A high gross speed with 80% accuracy will fail government typing cutoffs.\n3. **Master Difficult Vocabulary**: Regularly drill words with multiple matras and conjuncts (**संस्कृति, विश्वविद्यालय, प्रतियोगिता, स्वास्थ्य, दृष्टिकोण**).\n4. **Follow a 25-Minute Daily Routine**:\n   - 5 mins: Character & matra combinations\n   - 5 mins: Word drills\n   - 5 mins: Full sentences\n   - 5 mins: Paragraph transcription\n   - 5 mins: Timed online typing test\n\n---\n\n## Practise Hindi Matras Online on TypeHindi\n\nPut theory into practice with our free interactive typing tools:\n\n- **[Hindi Typing Practice](https://www.typehindi.in/practice/hindi-typing)**: Drill matras and words with real-time keystroke guidance and WPM tracking.\n- **[Interactive Hindi Keyboard Layout](https://www.typehindi.in/keyboard-layout/hindi)**: Dynamic on-screen keyboard showing InScript key mappings.\n- **[Mangal Font Typing Test](https://www.typehindi.in/mangal-font-typing-test)**: Timed tests simulating official SSC and High Court typing environments.\n- **[Free Hindi Typing Test](https://www.typehindi.in/test/hindi-typing)**: Measure gross and net WPM with instant performance reports.\n\n---\n\n## Frequently Asked Questions (FAQs)\n\n### 1. What are Hindi matras?\nHindi matras are dependent vowel signs attached to consonants to change their default vowel sound (e.g., ा, ि, ी, ु, ू, े, ै, ो, ौ).\n\n### 2. How many Hindi matras are there?\nThere are 10 core dependent vowel signs corresponding to vowels आ through औ. The vowel 'अ' is inherent in every consonant and does not have a separate matra.\n\n### 3. What is the difference between an independent vowel and a matra?\nAn independent vowel (like आ in आम) starts a word or syllable on its own. A matra (like ा in राम) must attach to a consonant.\n\n### 4. Why does the 'ि' matra appear before the letter when typed?\nDevanagari rendering rules position the visual glyph of **ि** to the left of the consonant, but in Unicode it is typed and stored after the consonant.\n\n### 5. Which keyboard layout is recommended for Hindi matra typing?\nThe government standard **InScript layout (IS 16350:2016)** is highly recommended. It groups all vowel matras systematically on the left side of the keyboard.\n\n### 6. Are Anusvara (ं) and Chandrabindu (ँ) matras?\nNo, they are nasalization marks (modifying diacritics), not vowel matras, though they attach to consonants and vowels similarly.\n\n---\n\n## Final Words\n\nMastering Hindi matras is the foundation of high-speed, error-free Hindi typing. By memorising independent versus dependent vowel pairs, understanding the proper Unicode typing sequence, and practising daily with TypeHindi's free typing simulators, you will achieve the accuracy and speed required for any government typing test."
},
  {
  "slug": "mangal-typing-keyboard-layout",
  "titleEn": "Mangal Typing Keyboard Layout: Complete Guide to Hindi Typing, InScript and Remington GAIL",
  "title": "मंगल टाइपिंग कीबोर्ड लेआउट: हिंदी टाइपिंग, इनस्क्रिप्ट और रेमिंगटन गेल की संपूर्ण गाइड",
  "date": "15 नवंबर, 2026",
  "dateEn": "15 November, 2026",
  "author": "TypeHindi Team",
  "categoryEn": "Keyboard Guide",
  "category": "कीबोर्ड गाइड",
  "tags": [
    "Mangal Typing",
    "Mangal Font",
    "Hindi Keyboard Layout",
    "InScript Keyboard",
    "Remington GAIL",
    "Hindi Typing Test",
    "SSC Typing Test",
    "Windows 11 Hindi Typing",
    "Unicode Hindi Font"
  ],
  "excerptEn": "Complete guide to Mangal typing, Hindi Unicode fonts, InScript and Remington GAIL keyboard layouts, Windows 11 setup, and government exam preparation.",
  "excerpt": "मंगल टाइपिंग, हिंदी यूनिकोड फॉन्ट, इनस्क्रिप्ट और रेमिंगटन गेल कीबोर्ड लेआउट, विंडोज 11 सेटअप और सरकारी टाइपिंग परीक्षाओं की तैयारी की संपूर्ण गाइड।",
  "image": "/images/mangal-typing-keyboard-layout.jpg",
  "content": "मंगल टाइपिंग (Mangal Typing) का उपयोग सरकारी कार्यालयों, भर्ती परीक्षाओं और कंप्यूटर आधारित टाइपिंग टेस्ट में बड़े पैमाने पर किया जाता है। एसएससी (SSC), रेलवे, हाई कोर्ट, पुलिस और विभिन्न राज्य सेवा चयन आयोगों की परीक्षाओं की तैयारी करने वाले अधिकांश अभ्यर्थी मंगल हिंदी कीबोर्ड लेआउट (Mangal Hindi Keyboard Layout) खोजते हैं।\n\nलेकिन शुरुआत करने वाले प्रत्येक अभ्यर्थी के लिए यह समझना अत्यंत आवश्यक है: **मंगल एक हिंदी यूनिकोड फ़ॉन्ट (Unicode Font) है, कीबोर्ड लेआउट (Keyboard Layout) नहीं।** कीबोर्ड लेआउट यह तय करता है कि किसी विशेष कुंजी (Key) को दबाने पर कौन सा हिंदी अक्षर टाइप होगा, जबकि फ़ॉन्ट यह तय करता है कि वह अक्षर स्क्रीन पर कैसा दिखाई देगा।\n\nआप इनस्क्रिप्ट (InScript) और रेमिंगटन गेल (Remington GAIL) सहित विभिन्न इनपुट लेआउट का उपयोग करके हिंदी टेक्स्ट टाइप कर सकते हैं और परिणामस्वरूप बनने वाले यूनिकोड टेक्स्ट को मंगल फ़ॉन्ट में देख सकते हैं।\n\nइस विस्तृत मार्गदर्शिका में हम समझाएंगे कि मंगल टाइपिंग का क्या अर्थ है, हिंदी कीबोर्ड कैसे काम करता है, इनस्क्रिप्ट और रेमिंगटन गेल में क्या अंतर है, विंडोज में हिंदी टाइपिंग कैसे चालू करें और सरकारी टाइपिंग परीक्षाओं की प्रभावी तैयारी कैसे करें।\n\n---\n\n## मंगल टाइपिंग क्या है? (What Is Mangal Typing?)\n\nमंगल (Mangal) देवनागरी लिपि के लिए डिज़ाइन किया गया एक ओपन-टाइप यूनिकोड फ़ॉन्ट (OpenType Unicode Font) है। इसका उपयोग मुख्य रूप से आधिकारिक दस्तावेजों, सरकारी पत्राचार, शैक्षिक सामग्री और सॉफ्टवेयर अनुप्रयोगों में हिंदी टेक्स्ट प्रदर्शित करने के लिए किया जाता है।\n\nजब कोई कहता है कि वह मंगल टाइपिंग का अभ्यास कर रहा है, तो उसका सामान्यतः अर्थ यह होता है कि वह यूनिकोड-संगत कीबोर्ड लेआउट (जैसे इनस्क्रिप्ट या रेमिंगटन गेल) का उपयोग करके हिंदी लिख रहा है और उस टेक्स्ट को मंगल फ़ॉन्ट में प्रस्तुत कर रहा है।\n\nउदाहरण के लिए, जब आप हिंदी शब्द टाइप करते हैं:\n\n**भारत**\n\nतो यह टेक्स्ट कंप्यूटर मेमोरी में यूनिकोड कोड-पॉइंट्स के रूप में सहेजा जाता है, न कि अंग्रेजी अक्षरों के किसी विशेष लेआउट के रूप में जो केवल हिंदी जैसा दिखाई दे।\n\nयूनिकोड हिंदी टेक्स्ट को किसी भी कंप्यूटर पर बिना फॉन्ट बदले कॉपी, सर्च, एडिट और प्रोसेस किया जा सकता है। मंगल फॉन्ट देवनागरी अक्षरों के जटिल संयोजनों (संयुक्त अक्षरों और मात्राओं) को सटीक रूप से रेंडर करने में सक्षम है।\n\n### मंगल फ़ॉन्ट बनाम हिंदी कीबोर्ड लेआउट\n\nशुरुआती अभ्यर्थियों के बीच इन दोनों शब्दों को लेकर अक्सर भ्रम की स्थिति रहती है:\n\n| विशेषता | मंगल फ़ॉन्ट (Mangal Font) | हिंदी कीबोर्ड लेआउट (Keyboard Layout) |\n|---|---|---|\n| **उद्देश्य** | हिंदी अक्षरों को प्रदर्शित करना | हिंदी अक्षरों को इनपुट/टाइप करना |\n| **कार्य** | लिखावट का स्वरूप (Appearance) तय करना | कुंजियों का मैपिंग (Key Mapping) नियंत्रित करना |\n| **उदाहरण** | Mangal | InScript |\n| **अन्य उदाहरण** | Nirmala UI, Aparajita | Remington GAIL, Hindi Phonetic |\n| **मुख्य भूमिका** | टेक्स्ट रेंडरिंग (Display) | टेक्स्ट इनपुट (Typing) |\n\nइसे सरल शब्दों में इस प्रकार समझें:\n- कीबोर्ड लेआउट यह तय करता है कि आप क्या टाइप कर रहे हैं।\n- यूनिकोड एन्कोडिंग उन अक्षरों को मानक पहचान देती है।\n- मंगल फ़ॉन्ट यह तय करता है कि वे अक्षर स्क्रीन पर कैसे दिखेंगे।\n\nफ़ॉन्ट और कीबोर्ड लेआउट के संबंध को नीचे दिए गए चार्ट से आसानी से समझा जा सकता है:\n\n![Mangal Unicode font versus Hindi keyboard layout explained](/images/mangal-typing-inscript-chart.jpg)\n*चित्र 1: मंगल यूनिकोड फ़ॉन्ट और हिंदी कीबोर्ड लेआउट की कार्यप्रणाली (स्वर, मात्रा और व्यंजनों का इनस्क्रिप्ट चार्ट)।*\n\n---\n\n## मंगल टाइपिंग के लिए कौन सा कीबोर्ड लेआउट उपयोग होता है?\n\n'मंगल' नाम का कोई विशिष्ट कीबोर्ड लेआउट नहीं होता है। विभिन्न हिंदी इनपुट पद्धतियाँ यूनिकोड टेक्स्ट उत्पन्न करती हैं जिसे मंगल फ़ॉन्ट में प्रदर्शित किया जा सकता है।\n\nसरकारी परीक्षाओं और सामान्य टाइपिंग में तीन प्रमुख इनपुट विकल्प प्रचलित हैं:\n\n1. **हिंदी इनस्क्रिप्ट कीबोर्ड लेआउट (InScript)**\n2. **रेमिंगटन गेल कीबोर्ड लेआउट (Remington GAIL)**\n3. **हिंदी फोनेटिक कीबोर्ड लेआउट (Phonetic)**\n\nतीनों लेआउट अलग-अलग तरीके से कार्य करते हैं, और सही लेआउट का चयन आपकी परीक्षा के नियमों पर निर्भर करता है।\n\n### 1. हिंदी इनस्क्रिप्ट कीबोर्ड लेआउट (InScript)\n\nइनस्क्रिप्ट भारतीय भाषाओं के लिए भारत सरकार द्वारा मानकीकृत आधिकारिक कीबोर्ड लेआउट है।\n\nइस लेआउट को भारतीय लिपियों की वैज्ञानिक संरचना के अनुसार व्यवस्थित किया गया है। इसमें सभी स्वर और उनकी मात्राएं कीबोर्ड के बायीं ओर (Left Side) तथा सभी व्यंजन दायीं ओर (Right Side) स्थित होते हैं। एक बार कुंजियों की स्थिति याद हो जाने पर इस पर टाइप करना अत्यंत स्वाभाविक और तीव्र हो जाता है।\n\nइनस्क्रिप्ट की प्रमुख विशेषताएं:\n- स्वर और व्यंजनों के लिए निर्धारित कुंजियां।\n- शिफ्ट कुंजी के साथ अतिरिक्त अक्षर और मात्राएं।\n- हलंत (्) की सहायता से संयुक्त अक्षरों का वैज्ञानिक निर्माण।\n- भारत सरकार द्वारा अधिसूचित राष्ट्रीय मानक **IS 16350:2016** पर आधारित।\n- सभी आधुनिक ऑपरेटिंग सिस्टम (Windows, Linux, Android, macOS) में पहले से उपलब्ध।\n\n#### इनस्क्रिप्ट टाइपिंग कैसे काम करती है?\n\nजब आप कोई व्यंजन और उसके बाद स्वर मात्रा टाइप करते हैं, तो इनस्क्रिप्ट लेआउट स्वतः सही यूनिकोड अनुक्रम तैयार करता है।\n\nउदाहरण के लिए, शब्द **बगीचा** टाइप करने के लिए माइक्रोसॉफ्ट इनस्क्रिप्ट कीबोर्ड पर निम्नलिखित कुंजियां दबाई जाती हैं:\n\n| अक्षर / मात्रा | कीबोर्ड कुंजी (Key) |\n|:---:|:---:|\n| **ब** | Y |\n| **ग** | I |\n| **ी** | R |\n| **च** | ; |\n| **ा** | E |\n\nपरिणामी शब्द: **बगीचा**\n\n*(नोट: यह उदाहरण मानक इनस्क्रिप्ट लेआउट के लिए है। रेमिंगटन गेल में इन कुंजियों से अलग अक्षर टाइप होंगे।)*\n\n#### इनस्क्रिप्ट कीबोर्ड अभ्यास के चरण\n\n1. बुनियादी स्वर और व्यंजन की स्थिति याद करें।\n2. सामान्य और शिफ्ट (Shift) संयोजनों का अभ्यास करें।\n3. मात्राओं के क्रम को समझें।\n4. हलंत वाले संयुक्त अक्षरों का अभ्यास करें।\n5. बड़े पैराग्राफ और गति परीक्षणों पर जाएं।\n\nआप TypeHindi के [हिंदी कीबोर्ड लेआउट टूल](https://www.typehindi.in/keyboard-layout/hindi) पर जाकर इनस्क्रिप्ट की प्रत्येक कुंजी का लाइव अभ्यास कर सकते हैं।\n\n![Hindi InScript keyboard layout with Devanagari letters](/images/hindi-inscript-keyboard-diagram.jpg)\n*चित्र 2: मानक हिंदी इनस्क्रिप्ट कीबोर्ड लेआउट डायग्राम (सामान्य एवं शिफ्ट कुंजियों के साथ)।*\n\n---\n\n### 2. रेमिंगटन गेल कीबोर्ड लेआउट (Remington GAIL)\n\nरेमिंगटन गेल दूसरा सर्वाधिक लोकप्रिय हिंदी टाइपिंग लेआउट है, विशेष रूप से उन अभ्यर्थियों के लिए जो पारंपरिक टाइपराइटर पर सीख चुके हैं।\n\nइनस्क्रिप्ट के विपरीत, रेमिंगटन गेल मैकेनिकल टाइपराइटर के की-अरेंजमेंट पर आधारित है:\n- टाइपराइटर शैली का की-मैपिंग।\n- इनस्क्रिप्ट से पूरी तरह अलग कुंजियों की स्थिति।\n- स्पेशल कैरेक्टर और मात्राओं के लिए विशेष कोड व शिफ्ट संयोजन।\n- सीपीसीटी (CPCT), इलाहाबाद हाई कोर्ट और कई राज्य स्तरीय परीक्षाओं में विशेष रूप से मान्य।\n\n**महत्वपूर्ण चेतावनी**: इनस्क्रिप्ट और रेमिंगटन गेल आपस में बदले नहीं जा सकते। यदि आप इनस्क्रिप्ट सीखते हैं और परीक्षा में केवल रेमिंगटन गेल का विकल्प है, तो आप टाइप नहीं कर पाएंगे। इसलिए हमेशा अपने परीक्षा नोटिफिकेशन को ध्यान से पढ़ें।\n\n#### रेमिंगटन गेल बनाम इनस्क्रिप्ट: त्वरित तुलना\n\n| विशेषता | इनस्क्रिप्ट (InScript) | रेमिंगटन गेल (Remington GAIL) |\n|---|---|---|\n| **लेआउट प्रकार** | मानकीकृत वैज्ञानिक लेआउट | टाइपराइटर शैली लेआउट |\n| **की-पोजिशन** | स्वर बायीं ओर, व्यंजन दायीं ओर | टाइपराइटर पैटर्न पर आधारित |\n| **सरकारी मान्यता** | भारत सरकार का राष्ट्रीय मानक | राज्यों एवं हाई कोर्टों में अत्यधिक प्रचलित |\n| **शिफ्ट का उपयोग** | हां | हां |\n| **सीखने में सुगमता** | नए विद्यार्थियों के लिए अत्यंत आसान | टाइपराइटर सीखने वालों के लिए आसान |\n\n---\n\n### 3. हिंदी फोनेटिक कीबोर्ड (Phonetic)\n\nफोनेटिक टाइपिंग उन उपयोगकर्ताओं के लिए है जो अंग्रेजी अक्षरों (Roman Transliteration) से हिंदी लिखना चाहते हैं। जैसे `namaste` टाइप करने पर 'नमस्ते' का सुझाव मिलता है। \n\nयह ईमेल या व्हाट्सएप के लिए बहुत सुविधाजनक है, किंतु सरकारी भर्ती परीक्षाओं में फोनेटिक टाइपिंग की अनुमति **नहीं** होती। अतः प्रतियोगी परीक्षाओं के लिए केवल इनस्क्रिप्ट या रेमिंगटन गेल का ही अभ्यास करें।\n\n---\n\n## विंडोज 10 और विंडोज 11 में मंगल हिंदी टाइपिंग कैसे चालू करें?\n\nविंडोज ऑपरेटिंग सिस्टम में हिंदी टाइपिंग टूल पहले से मौजूद होते हैं। आपको अलग से कोई अविश्वसनीय सॉफ्टवेयर डाउनलोड करने की आवश्यकता नहीं है:\n\n### चरण 1: विंडोज सेटिंग्स खोलें\nकीबोर्ड पर **Windows Key + I** दबाएं।\n\n### चरण 2: भाषा सेटिंग्स में जाएं\n**Time & Language → Language & Region** पर क्लिक करें।\n\n### चरण 3: हिंदी भाषा जोड़ें\n**Add a language** बटन पर क्लिक करें। सर्च बार में **Hindi (हिन्दी)** खोजें और इंस्टॉल करें।\n\n### चरण 4: कीबोर्ड लेआउट चुनें\nहिंदी के विकल्प (Options) में जाएं और **Add a keyboard** पर क्लिक करें। यहां **Hindi Traditional (InScript)** अथवा अपनी पसंद का लेआउट चुनें।\n\n### चरण 5: अंग्रेजी और हिंदी के बीच स्विच करें\nटाइपिंग के दौरान भाषा बदलने के लिए कीबोर्ड पर **Windows Key + Spacebar** दबाएं। टास्कबार में सक्रिय कीबोर्ड दिखाई देगा।\n\n### चरण 6: एमएस वर्ड में मंगल फ़ॉन्ट चुनें\nमाइक्रोसॉफ्ट वर्ड में टाइप करते समय फॉन्ट ड्रॉपडाउन से **Mangal** का चयन करें। आपका टाइप किया हुआ यूनिकोड हिंदी टेक्स्ट मंगल फ़ॉन्ट में खूबसूरती से प्रदर्शित होगा।\n\n![Steps to enable Hindi typing keyboard in Windows 11](/images/windows-11-hindi-keyboard-setup.jpg)\n*चित्र 3: विंडोज 11 सेटिंग्स में हिंदी टाइपिंग कीबोर्ड और भाषा सुविधाएं जोड़ने की विधि।*\n\n---\n\n## मंगल टाइपिंग बनाम कृति देव टाइपिंग (Mangal vs Kruti Dev)\n\n| विशेषता | मंगल (Mangal - Unicode) | कृति देव (Kruti Dev - Legacy) |\n|---|---|---|\n| **तकनीक** | अंतरराष्ट्रीय यूनिकोड मानक | 8-बिट लिगेसी ASCII फ़ॉन्ट |\n| **इंटरनेट व सर्च** | इंटरनेट पर आसानी से सर्च और इंडेक्स होता है | गूगल पर सर्च नहीं हो सकता |\n| **कॉपी-पेस्ट** | किसी भी फोन, वेबसाइट या सॉफ्टवेयर पर वैसा ही दिखता है | फॉन्ट न होने पर अंग्रेजी के अजीब चिन्ह दिखते हैं |\n| **सरकारी परीक्षाएं** | एसएससी, रेलवे, केंद्रीय सेवाओं में अनिवार्य | कुछ राज्य बोर्डों में अभी भी चलन में |\n| **फॉन्ट कन्वर्जन** | किसी कन्वर्जन की आवश्यकता नहीं | यूनिकोड में बदलने के लिए कन्वर्टर चाहिए |\n\n---\n\n## मंगल हिंदी टाइपिंग की सामान्य समस्याएं और समाधान\n\n1. **हिंदी के स्थान पर अंग्रेजी टाइप होना**:\n   - **कारण**: अंग्रेजी कीबोर्ड सक्रिय है।\n   - **समाधान**: **Windows + Spacebar** दबाकर हिंदी कीबोर्ड चुनें।\n2. **गलत अक्षर टाइप होना**:\n   - **कारण**: आपने इनस्क्रिप्ट का अभ्यास किया है लेकिन विंडोज में फोनेटिक या रेमिंगटन सक्रिय है।\n   - **समाधान**: सेटिंग्स में जाकर सही कीबोर्ड लेआउट की पुष्टि करें।\n3. **मात्राएं उल्टी या गलत दिखना**:\n   - **कारण**: मात्रा पहले और व्यंजन बाद में टाइप करना।\n   - **समाधान**: हिंदी यूनिकोड में हमेशा पहले व्यंजन और उसके तुरंत बाद मात्रा टाइप की जाती है।\n4. **टाइपिंग स्पीड न बढ़ना**:\n   - **समाधान**: बैकस्पेस का प्रयोग कम करें, होम रो पर अंगुलियों का सही अनुशासन बनाए रखें और प्रतिदिन 30 मिनट का अनुशासित अभ्यास करें।\n\n---\n\n## मंगल टाइपिंग स्पीड सुधारने की 4-सप्ताह की रणनीति\n\n- **सप्ताह 1 (कीबोर्ड पहचान)**: केवल कुंजियों की स्थिति याद करें और बिना देखे उंगलियां चलाने का अभ्यास करें।\n- **सप्ताह 2 (शब्द अभ्यास)**: छोटे व सामान्य हिंदी शब्दों (जैसे: भारत, सरकार, समय, समाज) का अभ्यास करें।\n- **सप्ताह 3 (मात्राएं व संयुक्त अक्षर)**: सभी मात्राओं और हलंत युक्त संयुक्त अक्षरों (जैसे: स्वास्थ्य, संस्थान, राष्ट्र) पर नियंत्रण पाएं।\n- **सप्ताह 4 (टाइम टेस्ट)**: 10 मिनट और 15 मिनट के वास्तविक परीक्षा पैटर्न पर स्पीड टेस्ट दें। शुद्धता 95% से अधिक रखने का लक्ष्य बनाएं।\n\n---\n\n## TypeHindi पर मंगल टाइपिंग का अभ्यास करें\n\nTypeHindi आपको परीक्षा स्तर की तैयारी के लिए पूरी तरह निःशुल्क टूल्स प्रदान करता है:\n- **[हिंदी टाइपिंग प्रैक्टिस](https://www.typehindi.in/practice/hindi-typing)**: लाइव स्पीड और एक्यूरेसी मीटर के साथ पैराग्राफ अभ्यास।\n- **[हिंदी कीबोर्ड लेआउट टूल](https://www.typehindi.in/keyboard-layout/hindi)**: इनस्क्रिप्ट कीबोर्ड की सभी कुंजियों का विजुअल नक्शा।\n- **[मंगल फ़ॉन्ट टाइपिंग टेस्ट सिमुलेटर](https://www.typehindi.in/mangal-font-typing-test)**: सरकारी परीक्षा पैटर्न पर आधारित 10-मिनट का टाइम टेस्ट।\n- **[टाइपिंग टेस्ट स्पीड इंजन](https://www.typehindi.in/test/hindi-typing)**: स्पीड सर्टिफिकेट और गलती विश्लेषण के साथ।\n\n---\n\n## अक्सर पूछे जाने वाले प्रश्न (FAQs)\n\n### 1. क्या मंगल एक कीबोर्ड लेआउट है?\nनहीं, मंगल एक यूनिकोड फ़ॉन्ट है। टाइपिंग के लिए इनस्क्रिप्ट या रेमिंगटन गेल कीबोर्ड लेआउट का उपयोग किया जाता है।\n\n### 2. एसएससी (SSC) परीक्षा में कौन सा कीबोर्ड लेआउट मिलता है?\nएसएससी की टाइपिंग परीक्षाओं में अभ्यर्थियों को इनस्क्रिप्ट और रेमिंगटन गेल दोनों का विकल्प दिया जाता है।\n\n### 3. क्या विंडोज 10/11 में मंगल फॉन्ट अलग से डाउनलोड करना पड़ता है?\nनहीं, जब आप विंडोज में हिंदी भाषा पैक इंस्टॉल करते हैं, तो मंगल फॉन्ट अपने आप सिस्टम में आ जाता है।\n\n### 4. क्या मोबाइल पर मंगल टाइपिंग सीखी जा सकती है?\nहाँ, आप ओटीजी (OTG) केबल की मदद से फिजिकल कीबोर्ड मोबाइल से जोड़कर TypeHindi पर अभ्यास कर सकते हैं।\n\n---\n\n## निष्कर्ष\n\nमंगल टाइपिंग आधुनिक डिजिटल युग और सरकारी सेवाओं के लिए अनिवार्य कौशल है। बस यह स्पष्ट ध्यान रखें कि मंगल फॉन्ट आपकी लिखावट का रूप है, जबकि इनस्क्रिप्ट या रेमिंगटन आपका टाइपिंग टूल है। सही लेआउट का चुनाव करें और नियमित अभ्यास से अपनी गति और शुद्धता को सफलता के शिखर तक ले जाएं।",
  "contentEn": "Mangal typing is widely used for Hindi typing in government offices, recruitment examinations and computer-based typing tests. Many candidates search for the Mangal Hindi keyboard layout when preparing for SSC, railway, clerical and other government examinations.\n\nHowever, there is one important thing every beginner should understand: **Mangal is a Hindi Unicode font, not a keyboard layout.** The keyboard layout determines which Hindi character appears when you press a particular key, while the font determines how that character looks on the screen.\n\nYou can type Hindi text using different input layouts, including InScript and Remington GAIL, and display the resulting Unicode text using the Mangal font.\n\nIn this guide, we will explain what Mangal typing means, how the Hindi keyboard works, the differences between InScript and Remington GAIL, how to enable Hindi typing on Windows and how to practise for government typing examinations.\n\n---\n\n## What Is Mangal Typing?\n\nMangal is an OpenType Unicode font designed for the Devanagari script. It is commonly used for displaying Hindi text in documents, official correspondence, educational material and government applications.\n\nWhen someone says they are practising Mangal typing, they generally mean that they are entering Hindi text using a Unicode-compatible keyboard layout and displaying the text in the Mangal font.\n\nFor example, when you type the Hindi word:\n\n**भारत**\n\nThe text is stored as Unicode characters rather than as an arrangement of English letters that merely looks like Hindi.\n\nThis is important because Unicode Hindi text can be copied, searched, edited and processed by compatible applications without depending on the exact font installed on another computer.\n\nMangal supports Devanagari text rendering, including the character combinations required for proper Hindi display.\n\n### Mangal Font vs Hindi Keyboard Layout\n\nThese two terms are often confused by beginners.\n\n| Feature | Mangal Font | Hindi Keyboard Layout |\n|---|---|---|\n| **Purpose** | Displays Hindi characters | Enters Hindi characters |\n| **Function** | Controls appearance | Controls key mapping |\n| **Example** | Mangal | InScript |\n| **Another Example** | Nirmala UI | Remington GAIL |\n| **Main Role** | Text rendering | Text input |\n\nThink of it this way:\n\n- The keyboard layout decides what you type.\n- The Unicode encoding represents the characters.\n- The font determines how those characters are displayed.\n\nYou can understand this better by looking at the difference between the Hindi font and keyboard layout:\n\n![Mangal Unicode font versus Hindi keyboard layout explained](/images/mangal-typing-inscript-chart.jpg)\n*Figure 1: Mangal Unicode font versus Hindi keyboard layout explained (Standard InScript layout chart with vowels, matras, and consonants).*\n\n---\n\n## Which Keyboard Layout Is Used for Mangal Typing?\n\nThere is no single keyboard layout called Mangal. Different Hindi input methods can produce Unicode Hindi text that can be displayed using Mangal.\n\nThree commonly discussed input options are:\n\n1. **Hindi InScript keyboard**\n2. **Remington GAIL keyboard**\n3. **Hindi Phonetic keyboard**\n\nEach works differently, and choosing the correct one depends on your typing requirements and examination rules.\n\n### 1. Hindi InScript Keyboard Layout\n\nInScript is a standardised keyboard layout designed for Indian-language typing.\n\nThe layout organises characters according to the structure of the Indian scripts. In the traditional arrangement, consonants and vowels are placed in separate keyboard regions, making the layout systematic once you learn the key positions.\n\nSome important features of InScript include:\n\n- Hindi vowels and consonants have defined key positions.\n- Shift combinations provide additional characters.\n- Dependent vowel signs (matras) have their own key mappings.\n- The layout supports the formation of Hindi conjunct characters.\n- It is designed for direct Indian-language character input.\n\nThe Government of India notified the Enhanced InScript Keyboard Layout Standard, **IS 16350:2016**, for e-governance systems in October 2016.\n\nInScript is particularly useful for candidates who want to learn a standardised Hindi keyboard layout and develop transferable typing skills.\n\n#### How InScript Typing Works\n\nSuppose you want to type a Hindi word containing a consonant followed by a vowel sign.\n\nInScript uses individual key mappings for consonants and dependent vowel signs. You type the required characters through the keyboard, and the input system produces the appropriate Unicode sequence.\n\nThe Hindi word **बगीचा** is a useful example.\n\nOn Microsoft's documented Hindi Traditional keyboard, the keystrokes are:\n\n| Character | Keyboard Key |\n|:---:|:---:|\n| **ब** | Y |\n| **ग** | I |\n| **ी** | R |\n| **च** | ; |\n| **ा** | E |\n\nThe resulting word is: **बगीचा**\n\nThis is an example for the specific Windows Hindi Traditional layout documented by Microsoft. Do not assume that the same keys will produce the same output in Remington GAIL or another Hindi input method.\n\n#### InScript Keyboard Layout Practice\n\nBeginners should practise the keyboard in stages:\n\n1. Learn the basic vowel and consonant positions.\n2. Practise the normal and Shift key combinations.\n3. Learn the dependent vowel signs (matras).\n4. Practise words containing different matras.\n5. Move towards conjunct letters and longer Hindi passages.\n\nYou can explore the keyboard positions using the interactive [Hindi Keyboard Layout Tool](https://www.typehindi.in/keyboard-layout/hindi) on TypeHindi.\n\n![Hindi InScript keyboard layout with Devanagari letters](/images/hindi-inscript-keyboard-diagram.jpg)\n*Figure 2: Hindi InScript keyboard layout diagram showing Devanagari characters and Shift key combinations.*\n\n---\n\n### 2. Remington GAIL Keyboard Layout\n\nRemington GAIL is another commonly used Hindi typing layout, particularly among candidates preparing for clerical and other government typing examinations.\n\nUnlike InScript, Remington GAIL follows a typewriter-style arrangement.\n\nThis means that its character positions are based on a different keyboard mapping. Candidates familiar with traditional Hindi typewriters may find this layout more comfortable.\n\nImportant characteristics include:\n\n- Typewriter-style key arrangement.\n- Different character positions from InScript.\n- Special key combinations for producing Hindi characters.\n- Use in various Hindi typing practice and examination environments.\n\nOne important point is that Remington GAIL and InScript are not interchangeable. If you practise on InScript but your examination requires Remington GAIL, you will need to learn the correct Remington key positions separately.\n\n#### Why Is Remington GAIL Important for Government Exams?\n\nDifferent recruiting organisations specify different Hindi typing requirements.\n\nSome examinations require candidates to use Mangal Unicode with a particular keyboard arrangement, while others specify a Remington-style layout or another input method.\n\nFor this reason, candidates should never assume that every Hindi typing examination uses InScript simply because it is a standardised layout.\n\nAlways check the official recruitment notification or typing-test instructions.\n\n#### Remington GAIL vs InScript\n\n| Feature | InScript | Remington GAIL |\n|---|---|---|\n| **Layout Style** | Standardised Indian-language keyboard | Typewriter-style keyboard |\n| **Key Positions** | InScript mapping | Remington mapping |\n| **Learning Method** | Character-position practice | Typewriter-style position practice |\n| **Shift Combinations** | Yes | Yes |\n| **Suitable For** | Standardised Hindi input | Exams and workplaces specifying Remington GAIL |\n| **Interchangeable** | No | No |\n\nIf your target examination specifically asks for Remington GAIL, practise using that layout from the beginning.\n\n---\n\n### 3. Hindi Phonetic Keyboard\n\nHindi Phonetic typing is designed for users who are more comfortable typing Hindi words using English letters.\n\nFor example, you might type:\n\n- `namaste` → नमस्ते\n- `bharat` → भारत\n- `hindi` → हिंदी\n- `pustak` → पुस्तक\n\nThe input system recognises the Roman transliteration and offers corresponding Hindi text suggestions.\n\nThis is different from InScript and Remington because you do not need to memorise a traditional Hindi key-to-character mapping in the same way.\n\nFor beginners who want to write emails, messages or general Hindi content, phonetic input can be convenient.\n\nHowever, if your government examination specifically requires InScript or Remington GAIL, phonetic typing should not be treated as a substitute.\n\n---\n\n## How to Enable Mangal Hindi Typing in Windows 10 and Windows 11\n\nWindows provides Hindi keyboard input options, allowing users to type Devanagari text without changing the display language of their computers.\n\nYou can enable Hindi typing through Windows language settings:\n\n### Step 1: Open Windows Settings\nPress **Windows Key + I** to open the Settings application.\n\n### Step 2: Open Language Settings\nNavigate to **Time & Language → Language & Region**. This section allows you to add languages and manage keyboard options.\n\n### Step 3: Add Hindi\nSelect **Add a language**. Search for **Hindi** (हिन्दी) and select it from the available language list. Follow the installation instructions.\n\n### Step 4: Add a Hindi Keyboard\nOpen the Hindi language options and select the keyboard options. You can add the available Hindi keyboard layouts, including **Hindi Traditional (InScript)** and **Hindi Phonetic** where supported. Choose the layout that matches your intended typing method.\n\n### Step 5: Switch Between English and Hindi\nOnce Hindi has been installed, you can switch between the available keyboard layouts using:\n**Windows Key + Spacebar** (or **Alt + Shift**).\n\nThe active input layout will be shown in the Windows taskbar. Select Hindi when you want to type Hindi and switch back to English when needed.\n\n### Step 6: Select Mangal in Your Application\nIf you are working in Microsoft Word and want to display your Hindi text using Mangal:\n1. Open Microsoft Word.\n2. Type or paste your Unicode Hindi text.\n3. Select the Hindi text.\n4. Open the font dropdown.\n5. Select **Mangal**, if installed.\n6. Check that the Hindi characters and matras are displaying correctly.\n\nRemember that selecting Mangal changes the appearance of the text, not the keyboard mapping.\n\n![Steps to enable Hindi typing keyboard in Windows 11](/images/windows-11-hindi-keyboard-setup.jpg)\n*Figure 3: Steps to enable Hindi typing keyboard and language features in Windows 11 Settings.*\n\n---\n\n## Mangal Typing vs Kruti Dev Typing\n\nAnother common question among Hindi typing learners is whether Mangal and Kruti Dev are the same.\n\nThey are completely different.\n\nMangal is a Unicode-based Devanagari font, whereas Kruti Dev is a legacy Hindi font commonly associated with older non-Unicode typing workflows.\n\nThe difference affects how Hindi text is stored, shared and processed:\n\n| Feature | Mangal | Kruti Dev |\n|---|---|---|\n| **Technology** | Unicode Standard | Legacy 8-bit Font Encoding |\n| **Main Use** | Modern digital documents, websites & exams | Older government department workflows |\n| **Text Compatibility** | Broad Unicode compatibility across all devices | Depends on Kruti Dev font being installed |\n| **Searchability** | Unicode text can be searched and indexed normally | Text cannot be searched on Google or web |\n| **Copy and Paste** | Works across WhatsApp, web browsers & Word | Appears as garbled English symbols without the font |\n| **Conversion** | No special conversion needed | Conversion tools required to transform to Unicode |\n\nFor modern digital documents, Unicode Hindi typing offers important compatibility advantages. However, some government examinations may still specify a particular legacy font or typing workflow. Always follow the examination notification.\n\n---\n\n## Common Problems in Mangal Hindi Typing\n\nBeginners often encounter problems while setting up Hindi typing. Here are common issues and their solutions:\n\n### 1. English Letters Appear Instead of Hindi\n- **Possible reason**: The English keyboard is still active.\n- **Solution**: Press **Windows + Spacebar** and select the required Hindi keyboard.\n\n### 2. Wrong Hindi Characters Appear\n- **Possible reason**: You are using a different keyboard layout from the one you have practised.\n- **Solution**: Check whether the selected input method is Hindi Traditional (InScript), Remington GAIL or Hindi Phonetic.\n\n### 3. Matras Appear Incorrectly\n- **Possible reason**: Incorrect key combinations, missing Unicode input support or typing order confusion.\n- **Solution**: Test the input in a Unicode-compatible editor and confirm that you are typing the consonant first, followed by the dependent vowel sign (matra).\n\n### 4. Hindi Text Looks Different on Another Computer\n- **Possible reason**: The destination application is using a different font (such as Nirmala UI or Aparajita).\n- **Solution**: The underlying Unicode characters remain intact. Simply select the text and choose Mangal from the font dropdown if required.\n\n### 5. Kruti Dev Text Does Not Display Correctly After Copying\n- **Possible reason**: The source document uses legacy font encoding.\n- **Solution**: Use an online Kruti Dev to Unicode converter rather than merely changing the font name.\n\n### 6. Typing Speed Is Not Improving\n- **Possible reason**: Focusing on raw speed instead of touch typing accuracy and home-row discipline.\n- **Solution**: Practise basic character combinations before attempting long paragraphs. Increase your speed gradually while maintaining at least 95% accuracy.\n\n---\n\n## How to Improve Your Mangal Hindi Typing Speed\n\nLearning the keyboard is only the beginning. You also need regular practice to develop speed and accuracy:\n\n### Week 1: Learn the Keyboard\n- Understand the selected keyboard layout (InScript or Remington GAIL).\n- Memorize the home row, top row, and bottom row character positions.\n- Practise normal and Shift combinations without looking at the keyboard.\n- Recognise matras and common Hindi consonants.\n\n### Week 2: Practise Hindi Words\nStart practising short Hindi words:\n- **भारत, समय, भाषा, पुस्तक, विद्यालय, सरकार, विद्यार्थी, परीक्षा**\n- Concentrate on muscle memory and zero backspace usage.\n\n### Week 3: Practise Matras and Conjuncts\nMove towards longer and more difficult words. Practise combinations involving:\n- **ा, ि, ी, ु, ू, े, ै, ो, ौ**\n- Practise halant (्) combinations to form conjunct characters (जैसे: संयुक्त, प्रान्त, राष्ट्र, धर्म).\n\n### Week 4: Start Timed Typing Tests\nOnce you are comfortable with the keyboard, begin timed exercises:\n- Start with 2-minute and 5-minute tests, gradually moving to standard 10-minute and 15-minute exam tests.\n- Monitor Gross WPM, Net WPM, Accuracy, and frequent mistake patterns.\n- Never sacrifice accuracy for speed. In government exams, errors are heavily penalised.\n\n---\n\n## Mangal Typing Practice on TypeHindi\n\nYou do not need to rely only on Microsoft Word to learn Hindi typing. TypeHindi provides dedicated, interactive tools to help you master the layout:\n\n- **[Hindi Typing Practice](https://www.typehindi.in/practice/hindi-typing)**: Practise words, sentences, and exam-level paragraphs with live WPM and error tracking.\n- **[Interactive Hindi Keyboard Layout](https://www.typehindi.in/keyboard-layout/hindi)**: Visualise normal and Shift key mappings with dynamic keyboard diagrams.\n- **[Mangal Font Typing Test Simulator](https://www.typehindi.in/mangal-font-typing-test)**: Take real-time exam simulations calibrated to SSC, CPCT, and High Court test standards.\n- **[Free Hindi Typing Tests](https://www.typehindi.in/test/hindi-typing)**: Timed typing exercises with certificate generation to test your performance.\n\n---\n\n## Frequently Asked Questions (FAQs)\n\n### 1. What is Mangal typing?\nMangal typing refers to entering Hindi Unicode text that is displayed using the Mangal font. It is commonly performed using a compatible Hindi input layout such as InScript or Remington GAIL.\n\n### 2. Is Mangal a keyboard layout?\nNo. Mangal is a Unicode OpenType font for the Devanagari script. InScript and Remington GAIL are examples of Hindi keyboard layouts.\n\n### 3. Which keyboard layout is used for Mangal typing?\nInScript and Remington GAIL can both produce Unicode Hindi text rendered in Mangal. The correct layout depends on your examination requirements.\n\n### 4. Is InScript better than Remington GAIL?\nNeither is universally better. InScript is a standardised Indian-language layout mandated for e-governance (IS 16350:2016), while Remington GAIL is preferred by typists trained on mechanical typewriters and in exams like CPCT and Allahabad High Court.\n\n### 5. Can I use Mangal in Microsoft Word?\nYes. If the Mangal font is installed on your Windows system, select it from the font dropdown in Word to display your Hindi Unicode text.\n\n### 6. How do I enable Hindi typing in Windows 11?\nOpen Settings (**Win + I**) → Time & Language → Language & Region → Add a language → Select Hindi → Install Hindi Traditional (InScript) or Hindi Phonetic. Switch layouts anytime using **Win + Spacebar**.\n\n### 7. Is Mangal Unicode?\nYes. Mangal is Microsoft's default Unicode-compliant OpenType font designed specifically for the Devanagari script.\n\n### 8. What is the difference between Mangal and Kruti Dev?\nMangal is a Unicode font where characters have global standard encodings. Kruti Dev is a legacy 8-bit font that remaps English ASCII characters into Hindi glyphs. They cannot be interchanged simply by renaming the font.\n\n### 9. Can I learn Mangal typing online?\nYes. You can use TypeHindi's free online Hindi typing tools, keyboard layout guides, and timed practice sessions to learn and master Mangal typing from home.\n\n### 10. Is Hindi Phonetic the same as InScript?\nNo. Hindi Phonetic typing uses English alphabet transliteration (e.g., typing 'bharat' produces 'भारत'). InScript uses direct key-to-character mapping designed specifically for Indian languages.\n\n### 11. Do I need to install the Mangal font separately?\nMangal is pre-installed on modern Windows editions (Windows 10 and 11) whenever Hindi language features are added. You do not need to download third-party files.\n\n### 12. Which Hindi keyboard should I learn for a government typing test?\nAlways refer to the official recruitment notification. SSC exams usually support both InScript and Remington, whereas State High Courts or Police clerical tests may specify one particular layout.\n\n---\n\n## Final Words\n\nMangal typing is an essential skill for candidates preparing for government typing examinations and anyone working with official Hindi documentation. \n\nRemember the core distinction: **Mangal determines how your Hindi text looks on the screen, while InScript and Remington GAIL determine which keys you press to produce that text.**\n\nChoose the layout prescribed for your target exam, practice home-row keys systematically, and use TypeHindi's free interactive practice tests to build the typing speed and 95%+ accuracy needed to crack your examination."
},
  {
    "slug": "iiest-shibpur-recruitment-2026",
    "titleEn": "IIEST Shibpur Recruitment 2026: Apply Online for 12 Superintendent, Personal Assistant and Senior Assistant Posts",
    "title": "आईआईईएसटी शिबपुर भर्ती 2026: 12 सुपरिंटेंडेंट, पर्सनल असिस्टेंट और सीनियर असिस्टेंट पदों के लिए ऑनलाइन आवेदन",
    "date": "11 नवंबर, 2026",
    "dateEn": "11 November, 2026",
    "author": "TypeHindi Team",
    "categoryEn": "Institute Jobs",
    "category": "संस्थान भर्ती",
    "tags": [
      "IIEST Shibpur",
      "IIEST Recruitment 2026",
      "Superintendent",
      "Personal Assistant",
      "Senior Assistant",
      "Stenographer Jobs",
      "Typist Jobs",
      "Central Government Jobs 2026",
      "West Bengal Jobs"
    ],
    "excerptEn": "IIEST Shibpur has invited online applications for 12 non-teaching positions including Superintendent, Personal Assistant and Senior Assistant under Advt Nos. RO/NO/26/35 and RO/NO/26/34. Apply via SAMARTH portal by 9 Dec 2026 and submit Google Form with PDF by 14 Dec 2026.",
    "excerpt": "आईआईईएसटी शिबपुर ने विज्ञापन संख्या RO/NO/26/35 और RO/NO/26/34 के तहत सुपरिंटेंडेंट, पर्सनल असिस्टेंट और सीनियर असिस्टेंट के 12 पदों पर भर्ती निकाली है। समर्थ पोर्टल पर 9 दिसंबर 2026 तक ऑनलाइन आवेदन करें और 14 दिसंबर 2026 तक गूगल फॉर्म भरें।",
    "image": "/images/iiest-shibpur-recruitment-2026.jpg",
    "content": "**भारतीय अभियांत्रिकी विज्ञान एवं प्रौद्योगिकी संस्थान (IIEST), शिबपुर**, हावड़ा (पश्चिम बंगाल) ने गैर-शैक्षणिक (Non-Teaching) पदों पर सीधी भर्ती के लिए दो अलग-अलग रोजगार अधिसूचनाएं जारी की हैं। यह भर्ती **विज्ञापन संख्या RO/NO/26/35 और RO/NO/26/34** (दिनांक 9 नवंबर 2026) के तहत **सुपरिंटेंडेंट (Superintendent), पर्सनल असिस्टेंट (Personal Assistant) और सीनियर असिस्टेंट (Senior Assistant)** के पदों पर निकाली गई है।\n\nइस भर्ती अभियान के माध्यम से कुल **12 रिक्तियां** भरी जाएंगी। इनमें 3 पद सुपरिंटेंडेंट, 2 पद पर्सनल असिस्टेंट और 7 पद सीनियर असिस्टेंट के शामिल हैं। स्नातक (Graduation), 12वीं पास और कंप्यूटर, 35 शब्द प्रति मिनट टाइपिंग अथवा 100 शब्द प्रति मिनट आशुलिपि (Stenography) दक्षता रखने वाले पात्र अभ्यर्थी ऑनलाइन आवेदन कर सकते हैं।\n\nचयनित उम्मीदवारों को 7वें केंद्रीय वेतन आयोग (7th CPC) के तहत वेतन मिलेगा। सुपरिंटेंडेंट एवं पर्सनल असिस्टेंट पदों के लिए **पे लेवल 6** (मूल वेतन ₹35,400 – ₹1,12,400) तथा सीनियर असिस्टेंट पद के लिए **पे लेवल 4** (मूल वेतन ₹25,500 – ₹81,100) निर्धारित है।\n\n> **अति महत्वपूर्ण आवेदन निर्देश**: इस भर्ती में उम्मीदवारों को **दो चरणों में आवेदन प्रक्रिया पूरी करनी होगी**:\n> 1. सबसे पहले **समर्थ भर्ती पोर्टल (SAMARTH Portal)** पर **9 दिसंबर 2026 (रात्रि 11:55 बजे)** तक ऑनलाइन फॉर्म भरकर शुल्क जमा करना होगा।\n> 2. इसके बाद जमा किए गए फॉर्म का प्रिंट निकालकर सभी स्व-प्रमाणित दस्तावेजों के साथ **एक सिंगल पीडीएफ (Single PDF)** बनाकर संबंधित **गूगल फॉर्म (Google Form)** पर **14 दिसंबर 2026 (रात्रि 11:55 बजे)** तक अपलोड करना अनिवार्य है।\n> \n> केवल समर्थ पोर्टल पर या केवल गूगल फॉर्म पर भरा गया आवेदन निरस्त कर दिया जाएगा।\n\n---\n\n## आईआईईएसटी शिबपुर गैर-शैक्षणिक भर्ती 2026: संक्षिप्त विवरण\n\n| विवरण | जानकारी |\n| :--- | :--- |\n| **संस्थान का नाम** | भारतीय अभियांत्रिकी विज्ञान एवं प्रौद्योगिकी संस्थान (IIEST), शिबपुर |\n| **संस्थान की स्थिति** | राष्ट्रीय महत्व का संस्थान (Institute of National Importance) |\n| **स्थान** | शिबपुर, हावड़ा – 711103, पश्चिम बंगाल |\n| **नोडल मंत्रालय** | शिक्षा मंत्रालय, भारत सरकार |\n| **भर्ती का प्रकार** | सीधी भर्ती (गैर-शैक्षणिक पद) |\n| **कुल रिक्तियां** | 12 पद |\n| **पदों के नाम** | सुपरिंटेंडेंट, पर्सनल असिस्टेंट, सीनियर असिस्टेंट |\n| **विज्ञापन संख्या** | RO/NO/26/35 एवं RO/NO/26/34 |\n| **अधिसूचना तिथि** | 9 नवंबर 2026 |\n| **वेतन स्तर** | पे लेवल 6 (सुपरिंटेंडेंट व PA) एवं पे लेवल 4 (सीनियर असिस्टेंट) |\n| **चयन प्रक्रिया** | स्टेज-I लिखित परीक्षा (मेरिट) + स्टेज-II स्किल टेस्ट (क्वालीफाइंग) |\n| **समर्थ पोर्टल आवेदन अंतिम तिथि** | 9 दिसंबर 2026 (रात्रि 11:55 बजे) |\n| **गूगल फॉर्म सिंगल पीडीएफ अंतिम तिथि** | 14 दिसंबर 2026 (रात्रि 11:55 बजे) |\n| **आधिकारिक वेबसाइट** | [iiests.ac.in](https://www.iiests.ac.in/) |\n\n---\n\n## पद-वार एवं श्रेणी-वार रिक्ति विवरण 2026\n\nसंस्थान द्वारा जारी दोनों विज्ञापनों में कुल 12 पदों का विवरण इस प्रकार है:\n\n| पद का नाम | विज्ञापन संख्या | कुल पद | श्रेणी-वार विवरण | 7th CPC पे लेवल | मूल वेतनमान |\n| :--- | :---: | :---: | :--- | :---: | :--- |\n| **सुपरिंटेंडेंट** | RO/NO/26/35 | 3 | अनारक्षित: 2, ओबीसी-एनसीएल: 1 | लेवल 6 | ₹35,400 – ₹1,12,400 |\n| **पर्सनल असिस्टेंट** | RO/NO/26/35 | 2 | अनारक्षित: 2 | लेवल 6 | ₹35,400 – ₹1,12,400 |\n| **सीनियर असिस्टेंट** | RO/NO/26/34 | 7 | अनारक्षित: 5, ओबीसी-एनसीएल: 1, एससी: 1 | लेवल 4 | ₹25,500 – ₹81,100 |\n| **कुल योग** | | **12** | **UR: 9, OBC-NCL: 2, SC: 1, ST: 0** | | |\n\n---\n\n## शैक्षणिक योग्यता एवं कौशल मापदंड (Eligibility Criteria)\n\nएनआईटी गैर-शैक्षणिक भर्ती नियम (NIT Non-Teaching Recruitment Rules 2019) के अनुसार पदों की योग्यताएं निम्नलिखित हैं:\n\n### 1. सुपरिंटेंडेंट (3 पद — विज्ञापन RO/NO/26/35)\n- **अनिवार्य योग्यता**:\n  - किसी मान्यता प्राप्त विश्वविद्यालय या संस्थान से किसी भी विषय में **प्रथम श्रेणी स्नातक डिग्री (First Class Bachelor's Degree)** अथवा समकक्ष; **अथवा**\n  - किसी भी विषय में कम से कम **50% अंकों** या समकक्ष ग्रेड के साथ **मास्टर डिग्री (स्नातकोत्तर)**।\n  - कंप्यूटर अनुप्रयोगों, विशेषकर **वर्ड प्रोसेसिंग (MS Word) एवं स्प्रेडशीट (MS Excel)** का व्यावहारिक ज्ञान।\n- **आयु सीमा**: सीधी भर्ती के लिए अधिकतम **30 वर्ष** (अंतिम तिथि को गणना)।\n- **स्किल टेस्ट**: कंप्यूटर एप्लीकेशन्स (Word Processing & Spreadsheet) में दक्षता परीक्षा पास करना अनिवार्य है।\n\n### 2. पर्सनल असिस्टेंट (2 पद — विज्ञापन RO/NO/26/35)\n- **अनिवार्य योग्यता**:\n  - किसी मान्यता प्राप्त विश्वविद्यालय या संस्थान से किसी भी विषय में **स्नातक डिग्री (Bachelor's Degree)** अथवा समकक्ष।\n  - आशुलिपि (Stenography/Shorthand) में न्यूनतम **100 शब्द प्रति मिनट (WPM)** की गति।\n- **आयु सीमा**: सीधी भर्ती के लिए अधिकतम **30 वर्ष**।\n- **स्किल टेस्ट**: 100 शब्द प्रति मिनट की गति से डिक्टेशन एवं कंप्यूटर पर ट्रांसक्रिप्शन का क्वालिफाइंग टेस्ट अनिवार्य है।\n\n### 3. सीनियर असिस्टेंट (7 पद — विज्ञापन RO/NO/26/34)\n- **अनिवार्य योग्यता**:\n  - मान्यता प्राप्त बोर्ड से **सीनियर सेकेंडरी (10+2 / 12वीं कक्षा)** उत्तीर्ण।\n  - कंप्यूटर पर न्यूनतम **35 शब्द प्रति मिनट (WPM)** की टाइपिंग स्पीड।\n  - कंप्यूटर वर्ड प्रोसेसिंग एवं स्प्रेडशीट में कार्यसाधक दक्षता।\n- **वांछनीय योग्यताएं (Desirable)**:\n  - अन्य कंप्यूटर अनुप्रयोगों में प्रवीणता।\n  - स्टेनोग्राफी का ज्ञान।\n  - मान्यता प्राप्त विश्वविद्यालय से स्नातक डिग्री।\n- **आयु सीमा**: सीधी भर्ती के लिए अधिकतम **33 वर्ष**।\n- **स्किल टेस्ट**: 35 शब्द प्रति मिनट की कंप्यूटर टाइपिंग गति एवं वर्ड/एक्सेल टेस्ट पास करना अनिवार्य।\n\n---\n\n## आयु सीमा एवं छूट नियम\n\nविभिन्न पदों के लिए अधिकतम आयु सीमा (सीधी भर्ती) आवेदन की अंतिम तिथि को आंकी जाएगी:\n\n| पद का नाम | अधिकतम आयु सीमा |\n| :--- | :---: |\n| **सुपरिंटेंडेंट** | 30 वर्ष |\n| **पर्सनल असिस्टेंट** | 30 वर्ष |\n| **सीनियर असिस्टेंट** | 33 वर्ष |\n\n### आयु में छूट:\n- **विभागीय उम्मीदवार**: केंद्र सरकार / एनआईटी नियमों के अनुसार अधिकतम **5 वर्ष** तक की छूट।\n- **अनुसूचित जाति (SC)**: आरक्षित पदों हेतु **5 वर्ष** की छूट।\n- **अन्य पिछड़ा वर्ग (OBC-NCL)**: आरक्षित पदों हेतु **3 वर्ष** की छूट (प्रमाण पत्र 1 अप्रैल 2026 के बाद का होना चाहिए)।\n- **दिव्यांग (PwD)**: सामान्य वर्ग के लिए 10 वर्ष, ओबीसी के लिए 13 वर्ष और एससी वर्ग के लिए 15 वर्ष की छूट।\n- **भूतपूर्व सैनिक**: केंद्र सरकार के दिशा-निर्देशानुसार छूट देय होगी।\n\n---\n\n## वेतनमान एवं भत्ते (7th Pay Commission)\n\nनियुक्त होने वाले उम्मीदवारों को केंद्र सरकार के वेतन मैट्रिक्स के अनुसार नियमित वेतन और भत्ते मिलेंगे:\n\n| पद का नाम | पे लेवल | मूल वेतनमान | अनुमानित प्रारंभिक इन-हैंड / सकल वेतन |\n| :--- | :---: | :---: | :--- |\n| **सुपरिंटेंडेंट** | लेवल 6 | ₹35,400 – ₹1,12,400 | लगभग ₹55,000 – ₹62,000 प्रति माह + भत्ते |\n| **पर्सनल असिस्टेंट** | लेवल 6 | ₹35,400 – ₹1,12,400 | लगभग ₹55,000 – ₹62,000 प्रति माह + भत्ते |\n| **सीनियर असिस्टेंट** | लेवल 4 | ₹25,500 – ₹81,100 | लगभग ₹40,000 – ₹46,000 प्रति माह + भत्ते |\n\nमूल वेतन के साथ मिलने वाले प्रमुख भत्ते:\n- महंगाई भत्ता (DA - केंद्र सरकार की प्रचलित दर अनुसार)।\n- मकान किराया भत्ता (HRA) या संस्थान परिसर में आवास।\n- परिवहन भत्ता (Transport Allowance)।\n- राष्ट्रीय पेंशन प्रणाली (NPS) का लाभ।\n- चिकित्सा सुविधा, बाल शिक्षा भत्ता (CEA) एवं अवकाश यात्रा रियायत (LTC)।\n\n---\n\n## आवेदन शुल्क (Application Fee)\n\nआवेदन शुल्क ऑनलाइन माध्यम से समर्थ पोर्टल पर भुगतान करना होगा (अप्रतिदेय / Non-Refundable):\n\n| श्रेणी / वर्ग | आवेदन शुल्क |\n| :--- | :---: |\n| **सामान्य / अनारक्षित (UR)** | **₹1,500** |\n| **अन्य पिछड़ा वर्ग (OBC-NCL)** | **₹1,500** |\n| **आर्थिक रूप से कमजोर वर्ग (EWS)** | **₹1,500** |\n| **अनुसूचित जाति (SC)** | **₹1,000** |\n| **अनुसूचित जनजाति (ST)** | **₹1,000** |\n| **दिव्यांग अभ्यर्थी (PwD)** | **₹1,000** |\n\n---\n\n## चयन प्रक्रिया (Selection Process)\n\nभर्ती प्रक्रिया दो चरणों में संपन्न होगी:\n\n### स्टेज-I: लिखित परीक्षा (Written Test)\n- IIEST शिबपुर द्वारा आयोजित लिखित परीक्षा में सभी पात्र उम्मीदवारों को शामिल होना होगा।\n- **अंतिम मेरिट सूची केवल स्टेज-I लिखित परीक्षा के प्राप्तांकों के आधार पर तैयार की जाएगी।**\n- लिखित परीक्षा में सामान्य योग्यता, अंग्रेजी, सामान्य ज्ञान, अंकगणित और प्रशासनिक/कार्यालय कार्यप्रणाली से जुड़े प्रश्न पूछे जाते हैं।\n\n### स्टेज-II: स्किल टेस्ट (Skill Test - केवल क्वालीफाइंग)\nलिखित परीक्षा में चयनित अभ्यर्थियों को पद के अनुसार अनिवार्य दक्षता परीक्षा में शामिल होना होगा:\n- **सुपरिंटेंडेंट**: वर्ड प्रोसेसिंग और स्प्रेडशीट का कंप्यूटर टेस्ट।\n- **पर्सनल असिस्टेंट**: 100 शब्द प्रति मिनट की स्टेनोग्राफी डिक्टेशन और कंप्यूटर ट्रांसक्रिप्शन।\n- **सीनियर असिस्टेंट**: कंप्यूटर पर 35 शब्द प्रति मिनट की टाइपिंग स्पीड और वर्ड/एक्सेल टेस्ट।\n- **ध्यान दें**: स्किल टेस्ट केवल क्वालीफाइंग प्रकृति का है। इसके अंक मेरिट में नहीं जुड़ेंगे, किंतु इसे पास करना अनिवार्य है।\n\n### टाई-ब्रेकिंग नियम (समान अंक होने पर)\nलिखित परीक्षा में समान अंक आने पर वरीयता का क्रम:\n1. परीक्षा में अधिक सही/धनात्मक अंक प्राप्त करने वाले को वरीयता दी जाएगी।\n2. इसके बाद भी टाई रहने पर अधिक उम्र (जन्म तिथि) वाले अभ्यर्थी को ऊपर रखा जाएगा।\n3. जन्म तिथि भी समान होने पर न्यूनतम शैक्षणिक योग्यता परीक्षा में अधिक प्रतिशत प्राप्त करने वाले उम्मीदवार को प्राथमिकता मिलेगी।\n\n---\n\n## आवेदन कैसे करें: दो-चरणीय प्रक्रिया (Step-by-Step Guide)\n\nउम्मीदवारों को दोनों चरणों को अनिवार्य रूप से पूरा करना होगा:\n\n### चरण 1: समर्थ पोर्टल पर ऑनलाइन फॉर्म भरें\n1. आधिकारिक भर्ती पोर्टल **[https://iiestsnt.samarth.edu.in](https://iiestsnt.samarth.edu.in)** पर जाएं।\n2. वैध ईमेल आईडी और मोबाइल नंबर से पंजीकरण करें।\n3. विज्ञापन संख्या चुनें:\n   - **RO/NO/26/35**: सुपरिंटेंडेंट एवं पर्सनल असिस्टेंट\n   - **RO/NO/26/34**: सीनियर असिस्टेंट\n4. व्यक्तिगत, शैक्षणिक एवं श्रेणी विवरण भरें और फोटो, हस्ताक्षर तथा प्रमाण पत्र अपलोड करें।\n5. ऑनलाइन आवेदन शुल्क का भुगतान करें।\n6. **9 दिसंबर 2026 (रात्रि 11:55 बजे)** से पूर्व फॉर्म फाइनल सबमिट करें।\n\n### चरण 2: फॉर्म डाउनलोड करें और सिंगल पीडीएफ बनाएं\n1. समर्थ पोर्टल से भरे हुए फॉर्म का फाइनल प्रिंट डाउनलोड करें।\n2. 10वीं, 12वीं, स्नातक, परास्नातक, जाति प्रमाण पत्र, अनुभव प्रमाण पत्र की फोटोकॉपी पर अपने हस्ताक्षर (Self-Attest) करें।\n3. भरे हुए फॉर्म और सभी स्व-प्रमाणित दस्तावेजों को मिलाकर **एक ही पीडीएफ फाइल (Single PDF)** तैयार करें।\n\n### चरण 3: गूगल फॉर्म पर पीडीएफ अपलोड करें\nतैयार सिंगल पीडीएफ को संबंधित पद के गूगल फॉर्म पर **14 दिसंबर 2026 (रात्रि 11:55 बजे)** से पहले अपलोड करें:\n- **सुपरिंटेंडेंट एवं पर्सनल असिस्टेंट हेतु**: [Google Form Link](https://forms.gle/4NY2VrS6dudkrBaZA)\n- **सीनियर असिस्टेंट हेतु**: [Google Form Link](https://forms.gle/eTbtScUCrWzcE3Xt9)\n\n---\n\n## सेवारत कर्मचारियों के लिए महत्वपूर्ण निर्देश\n\n- केंद्र/राज्य सरकार, स्वायत्त संस्थानों या सार्वजनिक उपक्रमों में कार्यरत अभ्यर्थियों को अपने संस्थान के उचित माध्यम (Proper Channel) से आवेदन करना होगा।\n- आवेदन पत्र **कुलसचिव (The Registrar), IIEST शिबपुर, हावड़ा – 711103** को संबोधित होना चाहिए।\n- लिखित परीक्षा एवं स्किल टेस्ट के समय नियोक्ता द्वारा जारी अनापत्ति प्रमाण पत्र (**NOC**) प्रस्तुत करना अनिवार्य होगा।\n- चयन के उपरांत सेवा सत्यापन एवं सतर्कता अनापत्ति प्रमाण पत्र (Vigilance Clearance Certificate) जमा करना होगा।\n\n---\n\n## महत्वपूर्ण तिथियां (Important Dates)\n\n| कार्यक्रम | तिथि / समय |\n| :--- | :--- |\n| अधिसूचना जारी होने की तिथि | 9 नवंबर 2026 |\n| ऑनलाइन आवेदन प्रारंभ तिथि | 9 नवंबर 2026 |\n| **समर्थ पोर्टल आवेदन की अंतिम तिथि** | **9 दिसंबर 2026 (रात्रि 11:55 बजे)** |\n| **गूगल फॉर्म पर पीडीएफ अपलोड की अंतिम तिथि** | **14 दिसंबर 2026 (रात्रि 11:55 बजे)** |\n| एडमिट कार्ड जारी होने की तिथि | यथासमय सूचित की जाएगी |\n| लिखित परीक्षा की तिथि | यथासमय सूचित की जाएगी |\n| स्किल टेस्ट की तिथि | यथासमय सूचित की जाएगी |\n\n---\n\n## महत्वपूर्ण लिंक्स (Important Links)\n\n| विवरण | आधिकारिक लिंक |\n| :--- | :--- |\n| **समर्थ ऑनलाइन आवेदन पोर्टल** | [SAMARTH Recruitment Portal](https://iiestsnt.samarth.edu.in/) |\n| **सुपरिंटेंडेंट व PA अधिसूचना (RO/NO/26/35)** | [Download Official PDF](https://www.iiests.ac.in/en/updates?tab=notifications&category=Employment) |\n| **सीनियर असिस्टेंट अधिसूचना (RO/NO/26/34)** | [Download Official PDF](https://www.iiests.ac.in/en/updates?tab=notifications&category=Employment) |\n| **गूगल फॉर्म लिंक (सुपरिंटेंडेंट व PA)** | [Upload PDF Form](https://forms.gle/4NY2VrS6dudkrBaZA) |\n| **गूगल फॉर्म लिंक (सीनियर असिस्टेंट)** | [Upload PDF Form](https://forms.gle/eTbtScUCrWzcE3Xt9) |\n| **आईआईईएसटी शिबपुर आधिकारिक वेबसाइट** | [iiests.ac.in](https://www.iiests.ac.in/) |\n| **संस्थान सहायता ईमेल** | [recruitment.nonfac@officer.iiests.ac.in](mailto:recruitment.nonfac@officer.iiests.ac.in) |\n| **हिंदी एवं अंग्रेजी टाइपिंग प्रैक्टिस (35 WPM)** | [TypeHindi Practice Platform](https://www.typehindi.in/practice) |\n| **टाइपिंग स्पीड टेस्ट इंजन** | [TypeHindi Typing Test Simulator](https://www.typehindi.in/test) |\n| **आशुलिपि (Stenography) सीखें** | [TypeHindi Shorthand Portal](https://www.typehindi.in/shorthand) |\n\n---\n\n## अक्सर पूछे जाने वाले प्रश्न (FAQs)\n\n### 1. आईआईईएसटी शिबपुर भर्ती 2026 में कुल कितने पद हैं?\nकुल 12 गैर-शैक्षणिक पद हैं: सुपरिंटेंडेंट (3), पर्सनल असिस्टेंट (2) और सीनियर असिस्टेंट (7)।\n\n### 2. आवेदन करने की अंतिम तिथि क्या है?\nसमर्थ पोर्टल पर ऑनलाइन आवेदन 9 दिसंबर 2026 (11:55 PM) तक और गूगल फॉर्म पर पीडीएफ 14 दिसंबर 2026 (11:55 PM) तक अपलोड करना होगा।\n\n### 3. क्या दोनों जगह फॉर्म भरना जरूरी है?\nहां, समर्थ पोर्टल पर आवेदन और संबंधित गूगल फॉर्म पर सिंगल पीडीएफ अपलोड दोनों अनिवार्य हैं।\n\n### 4. सीनियर असिस्टेंट पद के लिए शैक्षणिक योग्यता क्या है?\n12वीं (10+2) उत्तीर्ण के साथ कंप्यूटर पर 35 शब्द प्रति मिनट की टाइपिंग गति और वर्ड/एक्सेल की दक्षता।\n\n### 5. पर्सनल असिस्टेंट पद हेतु आशुलिपि की क्या गति चाहिए?\nन्यूनतम 100 शब्द प्रति मिनट (WPM) की स्टेनोग्राफी गति अनिवार्य है।\n\n### 6. सुपरिंटेंडेंट पद हेतु क्या योग्यता चाहिए?\nप्रथम श्रेणी स्नातक डिग्री अथवा कम से कम 50% अंकों के साथ स्नातकोत्तर (Master's Degree) तथा कंप्यूटर अनुप्रयोगों का ज्ञान।\n\n### 7. वेतन स्तर क्या रहेगा?\nसुपरिंटेंडेंट और पर्सनल असिस्टेंट के लिए पे लेवल 6 (₹35,400–₹1,12,400) तथा सीनियर असिस्टेंट के लिए पे लेवल 4 (₹25,500–₹81,100)।\n\n### 8. क्या स्किल टेस्ट के अंक मेरिट में जुड़ेंगे?\nनहीं। स्किल टेस्ट केवल क्वालीफाइंग प्रकृति का है। मेरिट का निर्धारण लिखित परीक्षा के अंकों से होगा।\n\n---\n\n## निष्कर्ष\n\nआईआईईएसटी शिबपुर भर्ती 2026 केंद्र सरकार के प्रतिष्ठित राष्ट्रीय महत्व के तकनीकी संस्थान में सुपरिंटेंडेंट, पर्सनल असिस्टेंट और सीनियर असिस्टेंट के पदों पर नौकरी पाने का एक उत्तम अवसर है। टाइपिंग और स्टेनोग्राफी पदों की तैयारी कर रहे युवा अपनी गति बढ़ाने के लिए नियमित अभ्यास करें और निर्धारित समय सीमा के भीतर अपने दोनों आवेदन चरण अवश्य पूर्ण करें।\n",
    "contentEn": "The **Indian Institute of Engineering Science and Technology (IIEST), Shibpur**, Howrah, West Bengal, an Institute of National Importance under the Ministry of Education, Government of India, has issued two separate employment notifications for direct recruitment to non-teaching positions. The recruitment covers **Superintendent, Personal Assistant, and Senior Assistant** vacancies under **Advertisement Nos. RO/NO/26/35 and RO/NO/26/34**, both dated 9 November 2026.\n\nA total of **12 vacancies** have been announced across these three designations. Eligible candidates with Graduation, Class 12, and the required computer, typing (35 WPM), or stenography (100 WPM) skills can submit their applications online.\n\nSelected candidates will be placed under the **7th Central Pay Commission (CPC)** pay matrix. The Superintendent and Personal Assistant posts carry **Pay Level 6** (Basic Pay ₹35,400 – ₹1,12,400), while Senior Assistant carries **Pay Level 4** (Basic Pay ₹25,500 – ₹81,100).\n\n> **Crucial Application Instruction**: Candidates must complete a **two-tier submission process**:\n> 1. Submit the online application and fee through the **SAMARTH Recruitment Portal** by **9 December 2026 (11:55 PM)**.\n> 2. Download the submitted application form, attach self-attested copies of all testimonials, merge them into a **single PDF**, and upload it via the dedicated **Google Form** by **14 December 2026 (11:55 PM)**.\n> \n> Applications submitted through SAMARTH only or Google Form only will be summarily rejected.\n\n---\n\n## IIEST Shibpur Non-Teaching Recruitment 2026: Overview\n\n| Particulars | Details |\n| :--- | :--- |\n| **Recruiting Organisation** | Indian Institute of Engineering Science and Technology (IIEST), Shibpur |\n| **Status of Institute** | Institute of National Importance (INI) |\n| **Location** | Shibpur, Howrah – 711103, West Bengal |\n| **Nodal Ministry** | Ministry of Education, Government of India |\n| **Recruitment Type** | Direct Recruitment (Non-Teaching) |\n| **Total Vacancies** | 12 Posts |\n| **Post Names** | Superintendent, Personal Assistant, Senior Assistant |\n| **Advertisement Numbers** | RO/NO/26/35 and RO/NO/26/34 |\n| **Notification Date** | 9 November 2026 |\n| **Pay Matrix Levels** | Level 6 (Superintendent & PA) & Level 4 (Senior Assistant) |\n| **Selection Process** | Stage-I Written Test (Merit) + Stage-II Skill Test (Qualifying) |\n| **SAMARTH Portal Deadline** | 9 December 2026 (11:55 PM) |\n| **Google Form Submission Deadline** | 14 December 2026 (11:55 PM) |\n| **Official Portal** | [iiests.ac.in](https://www.iiests.ac.in/) |\n\n---\n\n## Post-Wise & Category-Wise Vacancy Breakdown\n\nThe 12 vacancies are distributed across two recruitment notifications as follows:\n\n| Post Name | Advt. No. | Vacancies | Category-Wise Distribution | 7th CPC Pay Level | Pay Scale |\n| :--- | :---: | :---: | :--- | :---: | :--- |\n| **Superintendent** | RO/NO/26/35 | 3 | UR: 2, OBC-NCL: 1 | Level 6 | ₹35,400 – ₹1,12,400 |\n| **Personal Assistant** | RO/NO/26/35 | 2 | UR: 2 | Level 6 | ₹35,400 – ₹1,12,400 |\n| **Senior Assistant** | RO/NO/26/34 | 7 | UR: 5, OBC-NCL: 1, SC: 1 | Level 4 | ₹25,500 – ₹81,100 |\n| **Total Vacancies** | | **12** | **UR: 9, OBC-NCL: 2, SC: 1, ST: 0** | | |\n\n---\n\n## Eligibility Criteria: Educational Qualification & Skills\n\nApplicants must fulfill the minimum qualifications and experience as per the NIT Non-Teaching Recruitment Rules 2019:\n\n### 1. Superintendent (3 Posts — Advt. RO/NO/26/35)\n- **Essential Qualification**:\n  - **First Class Bachelor's Degree** or its equivalent from a recognised university or institute in any discipline; **OR**\n  - **Master's Degree** in any discipline from a recognised university or institute with at least **50% marks** or equivalent grade.\n  - Knowledge of computer applications, especially **Word Processing and Spreadsheet**.\n- **Age Limit**: Maximum **30 years** for direct recruitment (counted as on the closing date).\n- **Skill Test**: Mandatory qualifying test assessing computer proficiency in Office Word Processing and Spreadsheet packages.\n\n### 2. Personal Assistant (2 Posts — Advt. RO/NO/26/35)\n- **Essential Qualification**:\n  - **Bachelor's Degree** in any discipline or equivalent from a recognised university or institute.\n  - Minimum **Stenography speed of 100 words per minute (WPM)** in shorthand.\n- **Age Limit**: Maximum **30 years** for direct recruitment.\n- **Skill Test**: Mandatory qualifying shorthand stenography test at 100 WPM followed by transcription on computer.\n\n### 3. Senior Assistant (7 Posts — Advt. RO/NO/26/34)\n- **Essential Qualification**:\n  - **Senior Secondary (Class 10+2)** from a recognised board.\n  - Minimum **typing speed of 35 words per minute (WPM)** on computer.\n  - Proficiency in computer word processing and spreadsheet applications.\n- **Desirable Qualifications**:\n  - Proficiency in other computer applications.\n  - Stenography skills.\n  - Bachelor's Degree from a recognised university.\n- **Age Limit**: Maximum **33 years** for direct recruitment.\n- **Skill Test**: Mandatory qualifying typing speed test (35 WPM) and computer application test.\n\n---\n\n## Age Limit and Relaxation Rules\n\nThe maximum age limit for each post is calculated as on the closing date for application submission:\n\n| Post Name | Maximum Age Limit (Direct Recruits) |\n| :--- | :---: |\n| **Superintendent** | 30 Years |\n| **Personal Assistant** | 30 Years |\n| **Senior Assistant** | 33 Years |\n\n### Permissible Age Relaxations:\n- **Departmental Candidates**: Eligible for relaxation of up to **5 years** in accordance with Central Government / NIT Council instructions.\n- **SC / ST Candidates**: Relaxation of **5 years** for posts reserved for them.\n- **OBC-NCL Candidates**: Relaxation of **3 years** for reserved posts (certificate must be issued on or after 1 April 2026).\n- **PwD Candidates**: Relaxation of **10 years** (General/EWS), **13 years** (OBC-NCL), or **15 years** (SC/ST) for candidates with minimum 40% benchmark disability.\n- **Ex-Servicemen**: As per Government of India orders.\n\n---\n\n## Salary & Allowances (7th Pay Commission)\n\nCandidates appointed to these posts will draw regular salary under the Central Government pay matrix:\n\n| Post Name | Pay Level | Basic Pay Scale | Approximate Initial In-Hand / Gross |\n| :--- | :---: | :---: | :--- |\n| **Superintendent** | Level 6 | ₹35,400 – ₹1,12,400 | ~₹55,000 – ₹62,000 per month + allowances |\n| **Personal Assistant** | Level 6 | ₹35,400 – ₹1,12,400 | ~₹55,000 – ₹62,000 per month + allowances |\n| **Senior Assistant** | Level 4 | ₹25,500 – ₹81,100 | ~₹40,000 – ₹46,000 per month + allowances |\n\nIn addition to basic pay, appointees receive:\n- Dearness Allowance (DA) as per Central Government rates.\n- House Rent Allowance (HRA) or campus quarters allocation.\n- Transport Allowance (TA) with applicable DA.\n- Contributory Pension Scheme under the National Pension System (NPS).\n- Medical benefits, Children Education Allowance (CEA), and Leave Travel Concession (LTC).\n\n---\n\n## Application Fee\n\nThe application fee is non-refundable and must be paid online via the payment gateway integrated in the SAMARTH portal:\n\n| Category | Application Fee |\n| :--- | :---: |\n| **General / Unreserved (UR)** | **₹1,500** |\n| **Other Backward Classes (OBC-NCL)** | **₹1,500** |\n| **Economically Weaker Sections (EWS)** | **₹1,500** |\n| **Scheduled Caste (SC)** | **₹1,000** |\n| **Scheduled Tribe (ST)** | **₹1,000** |\n| **Persons with Benchmark Disabilities (PwD)** | **₹1,000** |\n\n*Note: Transaction processing charges, if any, are to be borne by the applicant.*\n\n---\n\n## Selection Process & Examination Scheme\n\nThe recruitment process consists of two successive stages:\n\n### Stage-I: Written Examination\n- A competitive written examination will be conducted by IIEST Shibpur.\n- Marks secured in **Stage-I alone will determine the merit ranking** of eligible candidates.\n- The written test evaluates general aptitude, English comprehension, general awareness, arithmetic, and domain knowledge relevant to administrative, computer, and office procedures.\n\n### Stage-II: Skill Test (Qualifying Nature)\nCandidates shortlisted on the basis of Stage-I written examination performance will be called for the mandatory skill test:\n- **Superintendent**: Proficiency in Word Processing, Spreadsheet, and basic office automation software.\n- **Personal Assistant**: Shorthand dictation at **100 WPM** with computerized transcription.\n- **Senior Assistant**: Typing speed of **35 WPM** on computer plus Word Processing / Spreadsheet test.\n- **Note**: The skill test is **strictly qualifying in nature**. Marks scored in the skill test do not alter the merit order, but failure in the skill test leads to immediate disqualification.\n\n### Tie-Breaking Protocol\nIn case two or more candidates achieve identical aggregate marks in the Stage-I written examination:\n1. **Higher Positive Marks**: The candidate with more positive/correct answers receives higher rank.\n2. **Date of Birth**: If the tie persists, the older candidate in age will be ranked higher.\n3. **Academic Merit**: If birthdates are also identical, the candidate with higher percentage in the minimum qualifying educational examination (calculated from top five subjects including core compulsory language) receives priority.\n\n---\n\n## Step-by-Step Application Process (Two-Step Submission)\n\nCandidates must execute both steps accurately to ensure their application is accepted:\n\n### Step 1: SAMARTH Recruitment Portal Registration\n1. Visit the IIEST Shibpur SAMARTH portal at **[https://iiestsnt.samarth.edu.in](https://iiestsnt.samarth.edu.in)**.\n2. Register with an active email address and mobile phone number.\n3. Select the advertisement:\n   - **Advt. RO/NO/26/35**: Superintendent / Personal Assistant\n   - **Advt. RO/NO/26/34**: Senior Assistant\n4. Complete the personal, educational, reservation category, and experience sections.\n5. Upload scanned copy of photograph, signature, and educational/caste certificates.\n6. Pay the prescribed application fee (₹1,500 or ₹1,000) online.\n7. Final submit the form before **9 December 2026 (11:55 PM)**.\n\n### Step 2: Download Application & Prepare Single PDF\n1. Download the complete submitted application form from SAMARTH.\n2. Print and self-attest photocopies of:\n   - Proof of Date of Birth (Class 10 Certificate).\n   - Class 12 / Higher Secondary marksheets and certificate.\n   - Bachelor's / Master's degree certificates and marksheets.\n   - Category / Caste Certificate (OBC-NCL / EWS issued on or after 1 April 2026).\n   - PwD Certificate (if applicable).\n   - Experience Certificates (if any).\n   - NOC from current employer (if serving in Govt / PSU / Autonomous body).\n3. Combine the downloaded SAMARTH application form and all self-attested documents into **one single PDF file**.\n\n### Step 3: Google Form Upload\nUpload the merged PDF document via the designated Google Form corresponding to the advertised post by **14 December 2026 (11:55 PM)**:\n- **Superintendent / Personal Assistant Form**: [https://forms.gle/4NY2VrS6dudkrBaZA](https://forms.gle/4NY2VrS6dudkrBaZA)\n- **Senior Assistant Form**: [https://forms.gle/eTbtScUCrWzcE3Xt9](https://forms.gle/eTbtScUCrWzcE3Xt9)\n\n---\n\n## Instructions for In-Service & Government Employees\n\n- Candidates employed in Central/State Government departments, autonomous bodies, public sector undertakings (PSUs), or universities must route their applications through proper channel.\n- Applications should be addressed to:\n  > **The Registrar**  \n  > Indian Institute of Engineering Science and Technology (IIEST), Shibpur  \n  > P.O. Botanic Garden, Howrah – 711103, West Bengal  \n- Candidates must bring an original **No Objection Certificate (NOC)** from the appointing authority at the time of the written examination and skill test.\n- Selected employees must furnish an updated **Vigilance Clearance Certificate** during final document verification.\n\n---\n\n## Important Dates\n\n| Event | Date / Timing |\n| :--- | :--- |\n| **Notification Release Date** | 9 November 2026 |\n| **Online Application Opening Date** | 9 November 2026 |\n| **Last Date for SAMARTH Portal Submission** | **9 December 2026 (11:55 PM)** |\n| **Last Date for Google Form PDF Upload** | **14 December 2026 (11:55 PM)** |\n| **Release of Admit Cards for Written Test** | To Be Announced |\n| **Stage-I Written Examination Date** | To Be Announced |\n| **Stage-II Skill Test Date** | To Be Announced |\n\n---\n\n## Important Links\n\n| Description | Link |\n| :--- | :--- |\n| **Online Application Portal (SAMARTH)** | [IIEST SAMARTH Recruitment Portal](https://iiestsnt.samarth.edu.in/) |\n| **Superintendent & PA Notification (RO/NO/26/35)** | [Download Official PDF](https://www.iiests.ac.in/en/updates?tab=notifications&category=Employment) |\n| **Senior Assistant Notification (RO/NO/26/34)** | [Download Official PDF](https://www.iiests.ac.in/en/updates?tab=notifications&category=Employment) |\n| **Google Form (Superintendent & PA)** | [Upload Single PDF Form](https://forms.gle/4NY2VrS6dudkrBaZA) |\n| **Google Form (Senior Assistant)** | [Upload Single PDF Form](https://forms.gle/eTbtScUCrWzcE3Xt9) |\n| **IIEST Shibpur Official Website** | [iiests.ac.in](https://www.iiests.ac.in/) |\n| **Query Support Email** | [recruitment.nonfac@officer.iiests.ac.in](mailto:recruitment.nonfac@officer.iiests.ac.in) |\n| **Free Typing Speed Practice (35 WPM)** | [TypeHindi Practice Platform](https://www.typehindi.in/practice) |\n| **Typing Test Simulator** | [TypeHindi Speed Test](https://www.typehindi.in/test) |\n| **Shorthand & Stenography Guide** | [TypeHindi Shorthand Learning Hub](https://www.typehindi.in/shorthand) |\n\n---\n\n## Frequently Asked Questions (FAQs)\n\n### 1. How many total vacancies are announced in IIEST Shibpur Recruitment 2026?\nThere are 12 vacancies across three non-teaching positions: Superintendent (3), Personal Assistant (2), and Senior Assistant (7).\n\n### 2. What are the advertisement numbers?\n- **RO/NO/26/35**: Superintendent and Personal Assistant posts.\n- **RO/NO/26/34**: Senior Assistant posts.\n\n### 3. What is the last date to apply on SAMARTH portal?\nThe last date for submitting the SAMARTH online application and paying the fee is **9 December 2026 (11:55 PM)**.\n\n### 4. What is the deadline for submitting the Google Form?\nThe completed application and self-attested documents merged into a single PDF must be uploaded to the Google Form by **14 December 2026 (11:55 PM)**.\n\n### 5. Is Google Form submission compulsory?\nYes. Submitting both the SAMARTH application and the Google Form is mandatory. Applications submitted on only one platform will be rejected.\n\n### 6. What is the educational qualification for Senior Assistant?\nClass 12 (10+2) from a recognised board with a minimum computer typing speed of 35 words per minute and proficiency in Word Processing and Spreadsheets.\n\n### 7. What is the shorthand stenography speed required for Personal Assistant?\nA minimum stenography speed of **100 words per minute (WPM)** is required for the Personal Assistant post.\n\n### 8. What is the qualification for Superintendent?\nA First Class Bachelor's Degree in any discipline OR a Master's Degree with at least 50% marks, accompanied by knowledge of computer applications (Word Processing and Spreadsheets).\n\n### 9. What are the pay scales for these posts?\n- Superintendent & Personal Assistant: **Pay Level 6** (₹35,400 – ₹1,12,400).\n- Senior Assistant: **Pay Level 4** (₹25,500 – ₹81,100).\n\n### 10. What is the age limit for direct recruitment?\n- Superintendent and Personal Assistant: 30 Years.\n- Senior Assistant: 33 Years. (Age relaxations apply as per Central Govt rules).\n\n### 11. What is the application fee?\n₹1,500 for General, OBC-NCL, and EWS candidates; ₹1,000 for SC, ST, and PwD candidates.\n\n### 12. Does the skill test carry marks in the merit list?\nNo. The skill test is strictly qualifying in nature. Merit rank is determined exclusively by marks obtained in the Stage-I written examination.\n\n---\n\n## Final Words\n\nThe **IIEST Shibpur Recruitment 2026** provides an excellent opportunity to secure a central government non-teaching career in a prestigious Institute of National Importance. With 35 WPM typing required for Senior Assistant and 100 WPM stenography for Personal Assistant, candidates should begin regular speed practice. Be sure to complete both the **SAMARTH portal application by 9 December 2026** and the **Google Form PDF submission by 14 December 2026**.\n"
  },
  {
  "slug": "national-library-lis-intern-recruitment-2026",
  "titleEn": "National Library LIS Intern Recruitment 2026: Apply Online for 25 Posts, ₹25,000 Monthly Stipend",
  "title": "नेशनल लाइब्रेरी LIS इंटर्न भर्ती 2026: 25 पदों के लिए ऑनलाइन आवेदन, ₹25,000 मासिक स्टाइपेंड",
  "date": "11 नवंबर, 2026",
  "dateEn": "11 November, 2026",
  "author": "TypeHindi Team",
  "categoryEn": "Internship / Jobs",
  "category": "इंटर्नशिप भर्ती",
  "tags": [
    "National Library",
    "LIS Intern Recruitment",
    "Ministry of Culture",
    "Library Science Jobs",
    "M.Lib.I.Sc",
    "Government Internship",
    "Kolkata Jobs",
    "Central Government Jobs 2026"
  ],
  "excerptEn": "The National Library, Ministry of Culture, Government of India has invited online applications for 25 LIS Intern positions across 23 Indian languages with a monthly stipend of ₹25,000 under Notice No. ADM/S-I(40)/Intern.26-27/5143. Check language-wise posts, eligibility & selection process.",
  "excerpt": "भारतीय राष्ट्रीय पुस्तकालय (संस्कृति मंत्रालय, भारत सरकार) ने 23 भारतीय भाषाओं में 25 LIS इंटर्न पदों के लिए ऑनलाइन आवेदन आमंत्रित किए हैं। चयनित इंटर्न्स को प्रति माह ₹25,000 का स्टाइपेंड मिलेगा। भाषा-वार पद, पात्रता, कार्य दायित्व एवं चयन प्रक्रिया की पूरी जानकारी देखें।",
  "image": "/images/national-library-lis-intern-recruitment-2026.jpg",
  "content": "**भारतीय राष्ट्रीय पुस्तकालय (National Library of India), संस्कृति मंत्रालय, भारत सरकार** ने पुस्तकालय एवं सूचना विज्ञान (Library and Information Science - LIS) में स्नातकोत्तर युवाओं के लिए एक वर्षीय इंटर्नशिप कार्यक्रम की घोषणा की है। वित्तीय वर्ष 2026–27 के लिए **\"Young Professional Graduates from Library & Information Science as LIS Interns\"** शीर्षक वाले इस कार्यक्रम के अंतर्गत राष्ट्रीय पुस्तकालय, कोलकाता में **25 LIS इंटर्न्स** का चयन किया जाएगा।\n\nयह इंटर्नशिप **23 भारतीय भाषाओं** (हिंदी, अंग्रेजी, बंगाली, तमिल, उर्दू, संस्कृत, पंजाबी, मराठी, गुजराती, तेलुगु आदि) में विभाजित है। चयनित अभ्यर्थियों को एक वर्ष की अवधि के दौरान **₹25,000 प्रति माह** का मानदेय (स्टाइपेंड) प्रदान किया जाएगा।\n\nइस पद के लिए अनिवार्य योग्यता पुस्तकालय एवं सूचना विज्ञान में स्नातकोत्तर डिग्री (**M.Lib.I.Sc. / MLISc**) या समकक्ष उपाधि है। इसके साथ ही अभ्यर्थी को संबंधित भाषा का समुचित पठन एवं लेखन ज्ञान होना आवश्यक है। आवेदन की अंतिम तिथि को अभ्यर्थी की आयु **35 वर्ष से कम** होनी चाहिए।\n\nयह अधिसूचना सूचना संख्या **ADM/S-I(40)/Intern.26-27/5143** (दिनांक 30 अक्टूबर 2026) के तहत जारी की गई है। आवेदन केवल राष्ट्रीय पुस्तकालय द्वारा उपलब्ध कराए गए आधिकारिक गूगल फॉर्म (Google Forms) लिंक के माध्यम से ऑनलाइन जमा किए जाने हैं।\n\n> **विशेष सूचना**: आधिकारिक अधिसूचना में आवेदन शुल्क, आवेदन प्रारंभ तिथि या अंतिम तिथि का उल्लेख नहीं किया गया है। इच्छुक अभ्यर्थियों को सलाह दी जाती है कि वे अविलंब अपना ऑनलाइन फॉर्म भरें और अद्यतन सूचनाओं के लिए आधिकारिक वेबसाइट पर नज़र रखें।\n\n## नेशनल लाइब्रेरी LIS इंटर्न भर्ती 2026: संक्षिप्त विवरण\n\n| विवरण | जानकारी |\n| :--- | :--- |\n| **संगठन का नाम** | राष्ट्रीय पुस्तकालय (National Library of India) |\n| **मंत्रालय** | संस्कृति मंत्रालय, भारत सरकार |\n| **कार्यक्रम का नाम** | LIS इंटर्नशिप 2026–27 |\n| **सूचना संख्या** | ADM/S-I(40)/Intern.26-27/5143 |\n| **अधिसूचना तिथि** | 30 अक्टूबर 2026 |\n| **पद का नाम** | LIS इंटर्न (Library & Information Science Intern) |\n| **कुल रिक्तियां** | 25 पद |\n| **भाषा श्रेणियां** | 23 भाषाएं |\n| **इंटर्नशिप अवधि** | 1 वर्ष (12 माह) |\n| **अनिवार्य शैक्षणिक योग्यता** | M.Lib.I.Sc. (पुस्तकालय विज्ञान में परास्नातक) |\n| **आयु सीमा** | अधिकतम 35 वर्ष से कम |\n| **मासिक स्टाइपेंड** | ₹25,000 प्रतिमाह |\n| **वार्षिक कुल स्टाइपेंड** | ₹3,00,000 |\n| **कार्यस्थल** | राष्ट्रीय पुस्तकालय, बेलवेडियर, अलीपुर, कोलकाता |\n| **आवेदन मोड** | ऑनलाइन (गूगल फॉर्म द्वारा) — हार्ड कॉपी नहीं भेजनी है |\n| **चयन प्रक्रिया** | शैक्षणिक मेरिट (45%) + लिखित, प्रैक्टिकल व साक्षात्कार (55%) |\n| **आधिकारिक वेबसाइट** | [nationallibrary.gov.in](https://www.nationallibrary.gov.in/) |\n| **आवेदन फॉर्म लिंक** | [गूगल फॉर्म ऑनलाइन आवेदन](https://forms.gle/9FU3HUiuDTvMnVei6) |\n\n## भाषा-वार रिक्ति विवरण 2026\n\nराष्ट्रीय पुस्तकालय ने 23 भारतीय भाषाओं के लिए कुल 25 पद विज्ञापित किए हैं। **हिंदी और तमिल के लिए 2-2 पद** हैं, जबकि अन्य 21 भाषाओं के लिए 1-1 पद निर्धारित है:\n\n| क्र. सं. | भाषा (Language) | रिक्तियां |\n| :---: | :--- | :---: |\n| 1 | असमिया (Assamese) | 1 |\n| 2 | बंगाली (Bengali) | 1 |\n| 3 | बोडो (Bodo) | 1 |\n| 4 | डोगरी (Dogri) | 1 |\n| 5 | अंग्रेजी (English) | 1 |\n| 6 | गुजराती (Gujarati) | 1 |\n| 7 | हिंदी (Hindi) | 2 |\n| 8 | कन्नड़ (Kannada) | 1 |\n| 9 | कश्मीरी (Kashmiri) | 1 |\n| 10 | कोंकणी (Konkani) | 1 |\n| 11 | मैथिली (Maithili) | 1 |\n| 12 | मलयालम (Malayalam) | 1 |\n| 13 | मणिपुरी (Manipuri) | 1 |\n| 14 | मराठी (Marathi) | 1 |\n| 15 | नेपाली (Nepali) | 1 |\n| 16 | उड़िया (Odia) | 1 |\n| 17 | पंजाबी (Punjabi) | 1 |\n| 18 | संस्कृत (Sanskrit) | 1 |\n| 19 | संथाली (Santali) | 1 |\n| 20 | सिंधी (Sindhi) | 1 |\n| 21 | तमिल (Tamil) | 2 |\n| 22 | तेलुगु (Telugu) | 1 |\n| 23 | उर्दू (Urdu) | 1 |\n| **कुल** | **सभी 23 भाषाएं** | **25 पद** |\n\n## पात्रता मापदंड (Eligibility Criteria)\n\n### 1. शैक्षणिक योग्यता\n- **अनिवार्य योग्यता**: किसी मान्यता प्राप्त विश्वविद्यालय या संस्थान से लाइब्रेरी एंड इंफॉर्मेशन साइंस में मास्टर डिग्री (**M.Lib.I.Sc. / MLISc**) या समकक्ष उपाधि।\n- यह डिग्री आवेदन की तिथि तक पूर्ण होनी चाहिए। परिणाम प्रतीक्षारत अभ्यर्थी पात्र नहीं हैं।\n- जिन अभ्यर्थियों ने पूर्व में राष्ट्रीय पुस्तकालय में इंटर्नशिप पूरी कर ली है, वे पुनः आवेदन के पात्र नहीं हैं।\n\n### 2. भाषा प्रवीणता एवं भाषा बोर्ड शर्त\n- अभ्यर्थी को संबंधित भाषा का **शुद्ध पठन एवं लेखन ज्ञान** होना अनिवार्य है।\n- इंटरमीडिएट (12वीं कक्षा) स्तर पर संबंधित भाषा का अध्ययन किया होना वांछनीय है।\n- **सेवा समाप्ति चेतावनी**: यदि चयनित इंटर्न संबंधित भाषा में पर्याप्त दक्ष नहीं पाया जाता है, तो एक भाषा बोर्ड गठित किया जाएगा। भाषा बोर्ड की सिफारिश पर राष्ट्रीय पुस्तकालय बिना किसी पूर्व सूचना के इंटर्नशिप समाप्त कर सकता है।\n\n### 3. आयु सीमा\n- अभ्यर्थी की आयु आवेदन की अंतिम तिथि को **35 वर्ष से कम** होनी चाहिए।\n- अधिसूचना में अलग से श्रेणीवार आयु छूट तालिका का उल्लेख नहीं है।\n\n## मासिक स्टाइपेंड एवं स्वास्थ्य बीमा\n\n- **मासिक स्टाइपेंड**: **₹25,000 प्रति माह** (12 माह का कुल योग: ₹3,00,000)।\n- **चिकित्सा बीमा अनिवार्य**: मानदेय में चिकित्सा बीमा की राशि सम्मिलित है। चयनित इंटर्न्स को इंटर्नशिप अवधि के दौरान किसी मान्यता प्राप्त बीमा कंपनी से अनिवार्य मेडिकल इंश्योरेंस पॉलिसी लेनी होगी।\n- **प्रकृति**: यह एक वर्षीय प्रशिक्षण इंटर्नशिप है, यह किसी भी प्रकार से स्थायी सरकारी नौकरी या नियमित सेवा का दावा प्रदान नहीं करती।\n\n## कार्य अवधि, छुट्टियां एवं रोटेशनल ड्यूटी\n\n| विवरण | नियम |\n| :--- | :--- |\n| **कुल अवधि** | कार्यभार ग्रहण करने की तिथि से 1 वर्ष |\n| **साप्ताहिक कार्य घंटे** | 40 घंटे प्रति सप्ताह |\n| **दैनिक समय** | प्रातः 9:30 बजे से सायं 6:00 बजे तक |\n| **कार्य दिवस** | सोमवार से शुक्रवार (सामान्यतः 5 दिवसीय सप्ताह) |\n| **आकस्मिक अवकाश (CL)** | वर्ष भर में कुल 10 दिन |\n| **प्रतिकरात्मक अवकाश (Compensatory Leave)** | माह में अधिकतम 2 दिन संचित, एक बार में अधिकतम 5 दिन स्वीकृत |\n\n- शनिवार, रविवार या सार्वजनिक अवकाश के दिन आवश्यकतानुसार सुबह 8:00 से रात 8:00 बजे के मध्य रोस्टर अनुसार ड्यूटी लगाई जा सकती है, जिसके बदले प्रतिकरात्मक अवकाश देय होगा।\n\n## मुख्य कार्य एवं जिम्मेदारियां\n\n1. **कैटलॉगिंग एवं वर्गीकरण**: MARC 21 प्रारूप में पुस्तकों, पत्रिकाओं और दस्तावेजों की डेटा एंट्री, वर्गीकरण और संरक्षण।\n2. **अधिग्रहण (Acquisition) एवं डीबी एक्ट**: डिलीवरी ऑफ बुक्स एक्ट (DB Act) के तहत प्राप्त पुस्तकों की छंटनी, स्टॉक वेरिफिकेशन और इंडेक्सिंग।\n3. **डिजिटल लाइब्रेरी एवं कोहा (KOHA)**: ओपन सोर्स KOHA सॉफ्टवेयर में डेटा एंट्री, ई-रिसोर्स प्रबंधन और पाठकों को संदर्भ सेवाएं।\n4. **शोध एवं वाचनालय सेवाएं**: शोधार्थियों और दिव्यांग पाठकों को संदर्भ सहायता प्रदान करना।\n5. **आउटसोर्सिंग डेटा सत्यापन**: सहायक पुस्तकालय एवं सूचना अधिकारियों के निर्देशन में तकनीकी डेटा का सत्यापन।\n\n## मासिक कार्य लक्ष्य (Monthly Work Targets)\n\nप्रथम माह प्रशिक्षण का होता है, अतः दूसरे माह से 11 माह तक निम्नलिखित मासिक लक्ष्य निर्धारित हैं:\n- **अंग्रेजी इंटर्न**: 400 पुस्तकें/प्रविष्टियां प्रतिमाह (वार्षिक: 4,400)।\n- **हिंदी, तमिल एवं अन्य सभी 21 भाषाएं**: 300 पुस्तकें/प्रविष्टियां प्रतिमाह प्रति इंटर्न (वार्षिक: 3,300)।\n- कुल कार्य समय का 75% समय मूल भाषा प्रभाग में और 25% समय अन्य प्रभागों में व्यतीत करना होगा।\n\n## चयन प्रक्रिया 2026 (Selection Process)\n\nकुल मूल्यांकन **100 अंकों (वेटेज)** पर आधारित होगा:\n\n| मूल्यांकन घटक | वेटेज प्रतिशत |\n| :--- | :---: |\n| **1. शैक्षणिक एवं व्यावसायिक योग्यताएं** | **45%** |\n| • शैक्षणिक योग्यता (12वीं + स्नातक) | 15 अंक |\n| • व्यावसायिक योग्यता (B.Lib. + M.Lib. / 2 वर्षीय M.Lib.) | 30 अंक |\n| **2. लिखित परीक्षा, प्रैक्टिकल व साक्षात्कार** | **55%** |\n| • वस्तुनिष्ठ परीक्षा (MCQ) | 50 अंक |\n| • प्रैक्टिकल परीक्षा (MARC 21 कैटलॉगिंग) | 25 अंक |\n| • व्यक्तिगत साक्षात्कार (Interview) | 25 अंक |\n| **कुल योग** | **100%** |\n\n- **शॉर्टलिस्टिंग अनुपात**: प्रत्येक भाषा रिक्ति के सापेक्ष मेरिट के आधार पर शीर्ष 10 अभ्यर्थियों (1:10 अनुपात) को लिखित/प्रैक्टिकल परीक्षा और साक्षात्कार हेतु बुलाया जाएगा।\n- **प्रैक्टिकल टेस्ट (25 अंक)**: अंग्रेजी में कैटलॉगिंग (10 अंक), संबंधित भारतीय भाषा में कैटलॉगिंग (10 अंक), और MARC टैग्स की पहचान (5 अंक)।\n\n## पूर्णता प्रमाण पत्र एवं ग्रेडिंग\n\nसफलतापूर्वक इंटर्नशिप पूर्ण करने पर राष्ट्रीय पुस्तकालय द्वारा ग्रेडिंग युक्त प्रमाण पत्र जारी किया जाएगा:\n- **85% और अधिक**: A+ (Outstanding)\n- **75% से 84%**: A (Excellent)\n- **60% से 74%**: B (Very Good)\n- **50% से 59%**: C (Good)\n- **50% से कम**: D (Average)\n\n## आवेदन कैसे करें (How to Apply Online)\n\n1. राष्ट्रीय पुस्तकालय के आधिकारिक आवेदन लिंक **[गूगल फॉर्म लिंक](https://forms.gle/9FU3HUiuDTvMnVei6)** पर जाएं।\n2. अपनी जीमेल आईडी से लॉगिन करें।\n3. व्यक्तिगत विवरण, संपर्क नंबर, पता और शैक्षणिक अंक (10वीं, 12वीं, स्नातक, M.Lib.I.Sc.) सावधानीपूर्वक भरें।\n4. अपनी संबंधित भाषा श्रेणी (जैसे Hindi, Tamil, Bengali आदि) का चयन करें।\n5. फॉर्म की समीक्षा करें और सबमिट करें। कन्फर्मेशन पेज का स्क्रीनशॉट सुरक्षित रखें।\n6. **ध्यान दें**: डाक या कूरियर द्वारा हार्ड कॉपी नहीं भेजनी है।\n\n## महत्वपूर्ण लिंक्स\n\n| विवरण | लिंक |\n| :--- | :--- |\n| **ऑनलाइन आवेदन गूगल फॉर्म** | [Apply Online Form](https://forms.gle/9FU3HUiuDTvMnVei6) |\n| **राष्ट्रीय पुस्तकालय आधिकारिक वेबसाइट** | [nationallibrary.gov.in](https://www.nationallibrary.gov.in/) |\n| **संस्कृति मंत्रालय पोर्टल** | [indiaculture.gov.in](https://www.indiaculture.gov.in/) |\n| **फ्री हिंदी टाइपिंग अभ्यास** | [TypeHindi Practice Platform](https://www.typehindi.in/practice) |\n| **टाइपिंग स्पीड टेस्ट सिम्युलेटर** | [TypeHindi Typing Test Engine](https://www.typehindi.in/test) |\n\n## अक्सर पूछे जाने वाले प्रश्न (FAQs)\n\n### 1. नेशनल लाइब्रेरी LIS इंटर्नशिप 2026 में कुल कितने पद हैं?\n23 भारतीय भाषाओं में कुल 25 पद हैं।\n\n### 2. इस इंटर्नशिप के लिए क्या शैक्षणिक योग्यता चाहिए?\nपुस्तकालय एवं सूचना विज्ञान में परास्नातक (M.Lib.I.Sc. / MLISc) या समकक्ष डिग्री।\n\n### 3. मासिक स्टाइपेंड कितना मिलेगा?\nचयनित अभ्यर्थियों को ₹25,000 प्रति माह स्टाइपेंड दिया जाएगा।\n\n### 4. अधिकतम आयु सीमा क्या है?\nआवेदन की तिथि को अभ्यर्थी की आयु 35 वर्ष से कम होनी चाहिए।\n\n### 5. क्या आवेदन शुल्क देना होगा?\nनहीं, अधिसूचना में किसी भी आवेदन शुल्क का उल्लेख नहीं है।\n\n### 6. क्या हार्ड कॉपी भेजना आवश्यक है?\nनहीं, आवेदन केवल ऑनलाइन गूगल फॉर्म के माध्यम से स्वीकार किए जाएंगे।\n\n### 7. क्या इंटर्नशिप के बाद स्थायी नौकरी मिलेगी?\nनहीं, यह विशुद्ध रूप से एक वर्ष का व्यावसायिक प्रशिक्षण कार्यक्रम है।\n\n## निष्कर्ष\n\nनेशनल लाइब्रेरी LIS इंटर्न भर्ती 2026 पुस्तकालय विज्ञान के परास्नातक युवाओं के लिए भारत के सबसे बड़े राष्ट्रीय पुस्तकालय में काम करने और ₹25,000 मासिक स्टाइपेंड प्राप्त करने का एक शानदार अवसर है। इच्छुक अभ्यर्थी बिना अंतिम तिथि का इंतजार किए तुरंत आधिकारिक गूगल फॉर्म के माध्यम से अपना आवेदन दर्ज करें।",
  "contentEn": "The **National Library, Ministry of Culture, Government of India**, has announced an internship opportunity for young professionals with qualifications in Library and Information Science (LIS). Under the prestigious programme titled **\"Young Professional Graduates from Library & Information Science as LIS Interns\"** for the financial year 2026–27, the National Library will engage **25 LIS professionals** for a period of one year at its historic campus in Kolkata.\n\nThe internship positions are distributed across **23 Indian languages**, including Hindi, English, Bengali, Tamil, Urdu, Sanskrit, Punjabi, Marathi, Gujarati, Telugu, and other regional languages. Candidates selected for the programme will receive a consolidated monthly stipend of **₹25,000**.\n\nApplicants must possess a **Master's Degree in Library and Information Science (M.Lib.I.Sc. / MLISc)** or an equivalent qualification and should possess proficient reading and writing knowledge of the concerned language. The maximum age limit is **below 35 years** on the closing date of application.\n\nThe notification was issued under **Notice No. ADM/S-I(40)/Intern.26-27/5143**, dated 30 October 2026. Applications must be submitted online exclusively through the official Google Forms application link provided by the National Library.\n\n> **Important Notice**: The uploaded notification does not prescribe a specific application fee, application opening date, or closing deadline. Interested candidates are strongly advised to submit their applications promptly and check the official National Library portal regularly for updates.\n\n## National Library LIS Intern Recruitment 2026: Overview\n\n| Particulars | Details |\n| :--- | :--- |\n| **Organisation** | National Library of India, Kolkata |\n| **Nodal Ministry** | Ministry of Culture, Government of India |\n| **Programme Title** | Young Professional Graduates from LIS as Interns (2026–27) |\n| **Notice Number** | ADM/S-I(40)/Intern.26-27/5143 |\n| **Notification Date** | 30 October 2026 |\n| **Position Name** | LIS Intern (Library & Information Science Intern) |\n| **Total Positions** | 25 Posts |\n| **Language Categories** | 23 Indian Languages |\n| **Internship Duration** | 1 Year (12 Months) |\n| **Educational Qualification** | Master's Degree in Library & Information Science (MLISc) |\n| **Age Limit** | Below 35 Years |\n| **Monthly Stipend** | ₹25,000 per month |\n| **Total Annual Stipend** | ₹3,00,000 |\n| **Job / Training Location** | National Library, Belvedere, Alipore, Kolkata, West Bengal |\n| **Application Mode** | Online (Google Forms) — No Hard Copy Required |\n| **Selection Process** | Academic Merit (45%) + MCQ, Practical Exam & Interview (55%) |\n| **Official Website** | [nationallibrary.gov.in](https://www.nationallibrary.gov.in/) |\n| **Application Link** | [Online Application Form](https://forms.gle/9FU3HUiuDTvMnVei6) |\n\n## National Library LIS Internship Vacancy 2026: Language-Wise Distribution\n\nThe National Library has announced 25 internship slots across 23 Indian languages. **Hindi and Tamil have 2 positions each**, while the remaining 21 languages have 1 position each:\n\n| S. No. | Language Category | Vacancies |\n| :---: | :--- | :---: |\n| 1 | Assamese | 1 |\n| 2 | Bengali | 1 |\n| 3 | Bodo | 1 |\n| 4 | Dogri | 1 |\n| 5 | English | 1 |\n| 6 | Gujarati | 1 |\n| 7 | Hindi | 2 |\n| 8 | Kannada | 1 |\n| 9 | Kashmiri | 1 |\n| 10 | Konkani | 1 |\n| 11 | Maithili | 1 |\n| 12 | Malayalam | 1 |\n| 13 | Manipuri | 1 |\n| 14 | Marathi | 1 |\n| 15 | Nepali | 1 |\n| 16 | Odia | 1 |\n| 17 | Punjabi | 1 |\n| 18 | Sanskrit | 1 |\n| 19 | Santali | 1 |\n| 20 | Sindhi | 1 |\n| 21 | Tamil | 2 |\n| 22 | Telugu | 1 |\n| 23 | Urdu | 1 |\n| **Total** | **All 23 Languages** | **25 Posts** |\n\n*Note: The notification states that the total number of LIS interns and their language-wise allocation may be modified as and when required by the competent authority.*\n\n## Eligibility Criteria for National Library LIS Interns 2026\n\nCandidates must satisfy the prescribed educational qualifications, language proficiency, and age requirements:\n\n### 1. Educational Qualification\n- **Essential Qualification**: Master's Degree in Library and Information Science (**M.Lib.I.Sc. / MLISc**) or an equivalent degree from a recognised university or institute.\n- The Master's degree must have been completed and obtained **on or before the last date of application**. Candidates awaiting final results are not eligible.\n- Applicants who have already completed an internship programme at the National Library previously are **not eligible** to apply.\n\n### 2. Language Competency & Language Board Clause\n- Applicants must be thoroughly competent in **reading and writing the concerned language** for which they are applying.\n- It is **desirable** that the concerned language was studied as one of the subjects at the **Intermediate (Class 12) level**.\n  - For example, candidates applying for Hindi slots should possess strong proficiency in reading and typing/writing Hindi.\n  - Candidates applying for Urdu, Bengali, Tamil, etc., must be fluent in their respective scripts.\n- **Termination Warning**: If a selected intern is found lacking adequate reading/writing competency in the allocated language during the internship, a specialized **Language Board** will be constituted. Upon its recommendation, the National Library reserves the right to terminate the internship immediately.\n\n### 3. Age Limit\n- Candidates must be **below 35 years of age** on the last date of application submission.\n- There is no separate category-wise relaxation table mentioned in the official notification.\n\n## Monthly Stipend & Insurance\n\n| Component | Amount |\n| :--- | :--- |\n| **Monthly Stipend** | **₹25,000 per month** |\n| **Internship Tenure** | 12 Months (1 Year) |\n| **Total Annual Earnings** | **₹3,00,000** |\n\n- **Medical Insurance Mandate**: The monthly stipend includes provision for the intern's medical insurance policy. Every selected intern must take a **compulsory medical insurance policy** from a recognised insurance provider during their tenure.\n- **Nature of Appointment**: This is strictly a temporary professional training internship. It does **not confer any right or claim to regular absorption or permanent appointment** in the National Library or the Ministry of Culture.\n\n## Internship Working Hours, Leave & Rotational Duties\n\nThe National Library has established clear operational terms for the LIS Intern cohort:\n\n| Particulars | Details |\n| :--- | :--- |\n| **Internship Duration** | 1 Year from the date of joining |\n| **Weekly Workload** | 40 Hours per week |\n| **Standard Timings** | 9:30 AM to 6:00 PM |\n| **Working Days** | Monday to Friday (5-Day Week) |\n| **Casual Leave** | 10 Days during the full year |\n| **Compensatory Leave** | Up to 2 days/month accumulated; max 5 days availed at a time |\n\n### Rotational & Weekend Duties\nWhile the library normally follows a 5-day week, interns may be assigned **rotational duties on Saturdays, Sundays, and public holidays** between 8:00 AM and 8:00 PM according to duty rosters prepared by the competent authority.\n- Performing duties on weekends/holidays earns compensatory leave, which must be approved and availed within the respective month.\n\n## Work Responsibilities & Training Exposure\n\nSelected LIS Interns will rotate through various technical, digital, and public service divisions of the National Library to gain hands-on professional expertise:\n\n### 1. Cataloguing & Technical Classification\n- Data entry and cataloguing of monographs, serials, and rare materials using the standard **MARC 21 format**.\n- Subject classification, accessioning, and shelf management.\n- Preservation, conservation, and physical care of fragile archival documents.\n\n### 2. Acquisition & Legal Deposit Processing\n- Processing books received under the **Delivery of Books and Newspapers (Public Libraries) Act (DB Act)**.\n- Inventory sorting, receiving, and accession recording.\n- Newspaper, periodical, and journal processing in stack areas.\n- Abstracting, indexing, and bibliographic compilation.\n\n### 3. Digital Library & Automation Systems\n- Hands-on operations using **KOHA Open Source Integrated Library Management Software (ILMS)**.\n- Assisting in KOHA database configuration, record import/export, and OPAC management.\n- Managing digital repositories, e-resources, and reading room inquiries.\n\n### 4. Public Services & Outreach\n- Assisting research scholars, historians, and academicians with complex reference searches.\n- Supporting specialised information services for visually impaired and differently-abled readers.\n- Participating in community outreach, children's literature sessions, and exhibitions.\n\n### 5. Retrospective Conversion & Project Supervision\n- Supervising and quality-checking outsourced retro-conversion and digital cataloguing projects under the guidance of Assistant Library & Information Officers (ALIOs).\n\n## Monthly Work Targets for LIS Interns\n\nTo ensure rigorous learning and performance monitoring, the National Library has laid down language-wise monthly cataloguing/processing benchmarks:\n\n| Language | Monthly Target per Intern | Working Months | Individual Annual Target |\n| :--- | :---: | :---: | :---: |\n| **English** | **400 Items** | 11 Months | **4,400 Items** |\n| **Hindi (2 Interns)** | **300 Items each** | 11 Months | **3,300 Items each** |\n| **Tamil (2 Interns)** | **300 Items each** | 11 Months | **3,300 Items each** |\n| **All Other 20 Languages** | **300 Items each** | 11 Months | **3,300 Items each** |\n\n- The **first month is dedicated to orientation, workflow familiarisation, and software training**; formal targets apply from the second month onwards.\n- **75% of working hours** are allocated to achieving primary targets in the assigned language division.\n- **25% of working hours** are allocated to rotational duties across other sections.\n- For interns supervising outsourced retrospective data-storage and cataloguing work, the target may be adjusted up to **150%**.\n\n## National Library LIS Intern Selection Process 2026\n\nSelection is conducted on a multi-tier merit framework combining academic excellence, subject knowledge, practical classification/cataloguing tests, and personal interviews:\n\n- **Total Assessment: 100 Marks**\n  - **1. Academic & Professional Qualifications**: 45% Weightage (Academic Background: 15 Marks; Professional LIS Qualifications: 30 Marks).\n  - **2. Examination & Interview**: 55% Weightage (MCQ Exam: 50 Marks; Practical Cataloguing & MARC Tag Test: 25 Marks; Personal Interview: 25 Marks).\n\n### Shortlisting Ratio\nApplications will be scrutinized by a Screening Committee. Qualified applicants will be shortlisted in a **1:10 ratio** (approximately the top 10 candidates per language vacancy based on academic percentage) to appear for the written examination, practical test, and interview.\n\n### 1. Academic Qualification Assessment (15 Marks)\n| Academic Level | 75% and Above | 60% to Below 75% | Below 60% |\n| :--- | :---: | :---: | :---: |\n| **Higher Secondary / Class 12** | 7 Marks | 5 Marks | 3 Marks |\n| **Graduation (Bachelor's Degree)** | 8 Marks | 7 Marks | 6 Marks |\n\n### 2. Professional LIS Qualification Assessment (30 Marks)\n\n#### For Integrated 2-Year Master's Degree in LIS (M.L.I.Sc.):\n| Percentage Range in M.L.I.Sc. | Marks Awarded |\n| :--- | :---: |\n| **75% and Above** | 30 Marks |\n| **60% to Below 75%** | 25 Marks |\n| **55% to Below 60%** | 15 Marks |\n| **50% to Below 55%** | 10 Marks |\n\n#### For 1-Year B.L.I.Sc. followed by 1-Year M.L.I.Sc.:\n| Degree | 75% & Above | 60% to <75% | 55% to <60% | 50% to <55% |\n| :--- | :---: | :---: | :---: | :---: |\n| **B.L.I.Sc.** | 15 Marks | 12 Marks | 7 Marks | 4 Marks |\n| **M.L.I.Sc.** | 15 Marks | 13 Marks | 8 Marks | 6 Marks |\n\n### 3. LIS Written Test, Practical Exam & Interview (55% Weightage)\nThe practical and personal evaluation consists of 100 raw marks scaled to 55%:\n- **Multiple Choice Questions (MCQ)**: 50 Marks (covering Library Classification, Cataloguing, Reference, Information Retrieval, and Automation).\n- **Practical Examination**: 25 Marks:\n  - Cataloguing in English: 10 Marks\n  - Cataloguing in the Applied Indian Language: 10 Marks\n  - Identification of MARC 21 Tags & Fields: 5 Marks\n- **Personal Interview**: 25 Marks.\n\n## Completion Certificate & Grading Scheme\n\nUpon successful completion of the 12-month internship, interns will be issued an official **National Library LIS Internship Completion Certificate** with merit grading:\n\n| Final Percentage | Grade | Performance Descriptor |\n| :---: | :---: | :--- |\n| **85% and Above** | **A+** | Outstanding |\n| **75% to 84%** | **A** | Excellent |\n| **60% to 74%** | **B** | Very Good |\n| **50% to 59%** | **C** | Good |\n| **Below 50%** | **D** | Average |\n\n## Documents Required for Application\n\nHave clear scanned copies/information ready before accessing the Google Form:\n1. Proof of Date of Birth (Class 10 Certificate / Birth Certificate).\n2. Class 12 Marksheet & Certificate (indicating language studied).\n3. Bachelor's Degree Certificate and Consolidated Marksheets.\n4. M.Lib.I.Sc. / MLISc Degree Certificate and Final Marksheets.\n5. B.L.I.Sc. Marksheet & Certificate (if applicable).\n6. Proof of language proficiency in the applied Indian language.\n7. Recent passport-size photograph.\n8. Medical fitness certificate (required from a Government Hospital at the time of joining).\n\n## How to Apply Online for National Library LIS Internship 2026\n\nThe application process is strictly online:\n\n1. Open the official application link: **[National Library LIS Intern Application Form](https://forms.gle/9FU3HUiuDTvMnVei6)**.\n2. Sign in with your valid Google account.\n3. Read the declarations and eligibility requirements carefully.\n4. Fill in your full name, father's/mother's name, date of birth, contact phone number, and residential address.\n5. Enter academic details: Class 10, Class 12, Graduation, and M.Lib.I.Sc. marks/percentages.\n6. Select your **specific language category** (e.g., Hindi, English, Bengali, Tamil, etc.).\n7. Provide verified details regarding language study background.\n8. Review all entered details for accuracy and submit the form.\n9. Take a screenshot or save the submission receipt for your records.\n\n> **Caution**: Do **NOT** send physical hard copies to the National Library. Only submissions via the online Google Form link will be considered.\n\n## Important Dates\n\n| Event | Date |\n| :--- | :--- |\n| Official Notification Issued | 30 October 2026 |\n| Notice Reference Number | ADM/S-I(40)/Intern.26-27/5143 |\n| Online Application Opening | Open Now |\n| **Application Closing Date** | **Check Official Portal** (Apply Promptly) |\n| Shortlist Announcement & Written Test | To Be Announced |\n| Practical Exam & Interview | To Be Announced |\n| Joining & Orientation | Within 2026–27 Financial Year |\n\n## Important Links\n\n| Description | Official Link |\n| :--- | :--- |\n| **Online Application Form (Google Form)** | [Apply Online Here](https://forms.gle/9FU3HUiuDTvMnVei6) |\n| **National Library of India Official Portal** | [www.nationallibrary.gov.in](https://www.nationallibrary.gov.in/) |\n| **Ministry of Culture Website** | [www.indiaculture.gov.in](https://www.indiaculture.gov.in/) |\n| **Free Hindi Typing & Font Practice** | [TypeHindi Practice Platform](https://www.typehindi.in/practice) |\n| **Typing Speed Test Engine** | [TypeHindi Typing Test Simulator](https://www.typehindi.in/test) |\n\n## Frequently Asked Questions (FAQs)\n\n### 1. How many total vacancies are available in National Library LIS Internship 2026?\nThere are 25 internship slots distributed across 23 Indian language categories.\n\n### 2. What is the educational qualification required?\nCandidates must possess a Master's Degree in Library and Information Science (M.Lib.I.Sc. / MLISc) or equivalent on or before the application date.\n\n### 3. What is the monthly stipend for National Library interns?\nSelected interns will receive a fixed monthly stipend of **₹25,000**, totaling ₹3,00,000 for the 1-year tenure.\n\n### 4. What is the upper age limit?\nCandidates must be **below 35 years of age** on the last date of application.\n\n### 5. How many slots are reserved for Hindi and Tamil?\nHindi has **2 positions** and Tamil has **2 positions**. All other 21 languages have 1 position each.\n\n### 6. Is knowledge of the applied language compulsory?\nYes. Candidates must be fully competent in reading and writing the concerned language. Studying the language at Class 12 level is desirable. A Language Board may examine interns who fail to demonstrate adequate language fluency.\n\n### 7. Is there any application fee?\nNo application fee has been specified in the official notification.\n\n### 8. Is hard copy submission needed?\nNo. Applications are accepted exclusively online through the National Library's Google Form link. Hard copies will not be accepted.\n\n### 9. What is the selection process?\nSelection is based on 45% weightage for academic/professional qualification marks, and 55% weightage for MCQ test, practical cataloguing test (MARC 21), and personal interview.\n\n### 10. Does this internship lead to a permanent government job?\nNo. This is strictly a 1-year professional learning programme aimed at skill development and practical exposure in library operations.\n\n## Final Words\n\nThe **National Library LIS Internship 2026** is a prestigious launchpad for postgraduates in Library and Information Science to work at India's largest library of national importance. Selected interns will gain invaluable exposure to MARC 21 cataloguing, KOHA library software, archival preservation, and rare book documentation while earning a handsome stipend of ₹25,000 per month.\n\nEligible candidates should submit their application via the official Google Form link at **[nationallibrary.gov.in](https://www.nationallibrary.gov.in/)** without delay."
},
  {
  "slug": "jamia-millia-islamia-non-teaching-recruitment-2026",
  "titleEn": "Jamia Millia Islamia Non Teaching Recruitment 2026: Apply Online for 85 Posts, Eligibility and Pay Level",
  "title": "जामिया मिलिया इस्लामिया नॉन टीचिंग भर्ती 2026: 85 पदों के लिए ऑनलाइन आवेदन, पात्रता और वेतन स्तर",
  "date": "11 नवंबर, 2026",
  "dateEn": "11 November, 2026",
  "author": "TypeHindi Team",
  "categoryEn": "University Jobs",
  "category": "विश्वविद्यालय भर्ती",
  "tags": [
    "Jamia Millia Islamia",
    "JMI Recruitment 2026",
    "JMI Non Teaching",
    "Hindi Typist Vacancy",
    "Urdu Typist Vacancy",
    "UDC Recruitment",
    "Central University Jobs",
    "Government Jobs 2026"
  ],
  "excerptEn": "Jamia Millia Islamia (JMI) has invited online applications for 85 non-teaching vacancies across 35 post designations including Hindi Typist, Urdu Typist, UDC, Assistant and Section Officer under Advt No. 01/2026-27 (NT). Apply online by 11 Dec 2026 and send hard copy by 21 Dec 2026.",
  "excerpt": "जामिया मिलिया इस्लामिया (JMI), नई दिल्ली ने विज्ञापन संख्या 01/2026-27 (NT) के तहत हिंदी टाइपिस्ट, उर्दू टाइपिस्ट, UDC, असिस्टेंट, सेक्शन ऑफिसर सहित 35 विभिन्न पदों पर 85 गैर-शैक्षणिक (Non-Teaching) रिक्तियों के लिए आवेदन आमंत्रित किए हैं। ऑनलाइन आवेदन 11 दिसंबर 2026 तक और हार्ड कॉपी 21 दिसंबर 2026 तक जमा करें।",
  "image": "/images/jamia-millia-islamia-non-teaching-recruitment-2026.jpg",
  "content": "**जामिया मिलिया इस्लामिया (JMI)**, नई दिल्ली ने विभिन्न गैर-शैक्षणिक (Non-Teaching) पदों पर भर्ती के लिए **विज्ञापन संख्या 01/2026-27 (NT)** (दिनांक 10 नवंबर 2026) के तहत आधिकारिक अधिसूचना जारी की है। विश्वविद्यालय ने विभिन्न विभागों, संकायों, केंद्रों तथा प्रशासनिक कार्यालयों में सीधी भर्ती एवं प्रतिनियुक्ति के माध्यम से भारतीय नागरिकों तथा प्रवासी भारतीय नागरिक (OCI) कार्डधारकों से ऑनलाइन आवेदन आमंत्रित किए हैं।\n\nइस भर्ती के तहत **35 विभिन्न पद श्रेणियों में कुल 85 रिक्तियां** विज्ञापित की गई हैं। उपलब्ध पदों में असिस्टेंट रजिस्ट्रार, सेक्शन ऑफिसर, असिस्टेंट, अपर डिवीजन क्लर्क (UDC), हिंदी टाइपिस्ट, उर्दू टाइपिस्ट, अकाउंटेंट, इलेक्ट्रीशियन, प्लंबर, फार्मासिस्ट, प्रोफेशनल असिस्टेंट, वीडियो एडिटर, केयरटेकर, कुक और कई अन्य तकनीकी एवं गैर-शैक्षणिक पद शामिल हैं।\n\nचयनित अभ्यर्थियों को **7वें केंद्रीय वेतन आयोग (7th CPC)** के अनुसार पे लेवल 1 से लेकर पे लेवल 13 तक का मूल वेतन और केंद्र सरकार के नियमानुसार स्वीकार्य भत्ते (DA, HRA, TA आदि) प्रदान किए जाएंगे।\n\nऑनलाइन आवेदन प्रक्रिया **12 नवंबर 2026** से प्रारंभ हो रही है तथा ऑनलाइन फॉर्म जमा करने की अंतिम तिथि **11 दिसंबर 2026** है। अभ्यर्थियों को यह ध्यान रखना अनिवार्य है कि ऑनलाइन आवेदन के पश्चात भरे हुए फॉर्म का प्रिंटआउट (हार्ड कॉपी) सभी स्व-प्रमाणित दस्तावेजों के साथ विश्वविद्यालय के कुलसचिव कार्यालय में **21 दिसंबर 2026** तक पहुंचना आवश्यक है।\n\n## जामिया मिलिया इस्लामिया नॉन टीचिंग भर्ती 2026: संक्षिप्त विवरण\n\n| विवरण | जानकारी |\n| :--- | :--- |\n| **विश्वविद्यालय का नाम** | जामिया मिलिया इस्लामिया (JMI) |\n| **विश्वविद्यालय का प्रकार** | केंद्रीय विश्वविद्यालय (NAAC A++ ग्रेड) |\n| **भर्ती का नाम** | नॉन-टीचिंग भर्ती 2026 |\n| **विज्ञापन संख्या** | 01/2026-27 (NT) |\n| **अधिसूचना तिथि** | 10 नवंबर 2026 |\n| **कुल पद श्रेणियां** | 35 पद |\n| **कुल रिक्तियां** | 85 पद |\n| **आवेदन का माध्यम** | ऑनलाइन + हार्ड कॉपी डाक द्वारा |\n| **नौकरी का स्थान** | जामिया नगर, नई दिल्ली |\n| **पात्र अभ्यर्थी** | भारतीय नागरिक एवं OCI कार्डधारक |\n| **वेतन संरचना** | 7वां वेतन आयोग (7th CPC) |\n| **वेतन स्तर** | पे लेवल 1 से लेवल 13 (₹18,000 – ₹2,15,900) |\n| **सामान्य आयु सीमा** | अधिकतम 40 वर्ष (नियमानुसार छूट) |\n| **चयन प्रक्रिया** | लिखित परीक्षा / स्किल टेस्ट / ट्रेड टेस्ट / साक्षात्कार |\n| **ऑनलाइन आवेदन प्रारंभ** | 12 नवंबर 2026 |\n| **ऑनलाइन आवेदन की अंतिम तिथि** | 11 दिसंबर 2026 |\n| **हार्ड कॉपी जमा करने की अंतिम तिथि** | 21 दिसंबर 2026 |\n| **आधिकारिक वेबसाइट** | [jmi.ac.in](https://www.jmi.ac.in/) |\n| **आवेदन पोर्टल** | [jobs.jmi.ac.in](https://jobs.jmi.ac.in/) |\n\n## JMI रिक्ति विवरण 2026: पद-वार रिक्तियां\n\nजामिया मिलिया इस्लामिया ने कुल 85 पदों की घोषणा की है। पद-वार रिक्तियों की संख्या और 7वें वेतन आयोग के अंतर्गत लागू पे लेवल का विवरण नीचे तालिका में दिया गया है:\n\n| क्र. सं. | पद का नाम | रिक्तियां | पे लेवल (7th CPC) |\n| :---: | :--- | :---: | :--- |\n| 1 | असिस्टेंट रजिस्ट्रार (Assistant Registrar) | 3 | लेवल 10 (₹56,100 – ₹1,77,500) |\n| 2 | सेक्शन ऑफिसर (Section Officer) | 4 | लेवल 7 (₹44,900 – ₹1,42,400) |\n| 3 | असिस्टेंट (Assistant) | 3 | लेवल 6 (₹35,400 – ₹1,12,400) |\n| 4 | अपर डिवीजन क्लर्क / यूडीसी (UDC) | 10 | लेवल 4 (₹25,500 – ₹81,100) |\n| 5 | हिंदी टाइपिस्ट (Hindi Typist) | 2 | लेवल 2 (₹19,900 – ₹63,200) |\n| 6 | उर्दू टाइपिस्ट (Urdu Typist) | 4 | लेवल 2 (₹19,900 – ₹63,200) |\n| 7 | लैंड रिकॉर्ड सुपरिंटेंडेंट | 1 | लेवल 6 (₹35,400 – ₹1,12,400) |\n| 8 | लैंड रिकॉर्ड कीपर | 1 | लेवल 4 (₹25,500 – ₹81,100) |\n| 9 | इंटरनल ऑडिट ऑफिसर | 1 | लेवल 12 (₹78,800 – ₹2,09,200) |\n| 10 | असिस्टेंट फाइनेंस ऑफिसर | 2 | लेवल 10 (₹56,100 – ₹1,77,500) |\n| 11 | अकाउंटेंट (Accountant) | 2 | लेवल 7 (₹44,900 – ₹1,42,400) |\n| 12 | सुपरिंटेंडेंट इंजीनियर (सिविल) | 1 | लेवल 13 (₹1,23,100 – ₹2,15,900) |\n| 13 | एग्जीक्यूटिव इंजीनियर (सिविल) | 1 | लेवल 11 (₹67,700 – ₹2,08,700) |\n| 14 | इलेक्ट्रीशियन (Electrician) | 5 | लेवल 2 (₹19,900 – ₹63,200) |\n| 15 | प्लंबर (Plumber) | 3 | लेवल 2 (₹19,900 – ₹63,200) |\n| 16 | कारपेंटर (Carpenter) | 5 | लेवल 2 (₹19,900 – ₹63,200) |\n| 17 | व्हाइटवाशर / पुताईकर्मी | 2 | लेवल 2 (₹19,900 – ₹63,200) |\n| 18 | मेशन / राजमिस्त्री | 1 | लेवल 2 (₹19,900 – ₹63,200) |\n| 19 | वायरमैन (Wireman) | 3 | लेवल 1 (₹18,000 – ₹56,900) |\n| 20 | बेलदार (Beldar) | 6 | लेवल 1 (₹18,000 – ₹56,900) |\n| 21 | मेट (Mate) | 4 | लेवल 1 (₹18,000 – ₹56,900) |\n| 22 | प्रोफेशनल असिस्टेंट (लाइब्रेरी) | 1 | लेवल 6 (₹35,400 – ₹1,12,400) |\n| 23 | गार्डन सुपरिंटेंडेंट | 1 | लेवल 7 (₹44,900 – ₹1,42,400) |\n| 24 | गार्डन सुपरवाइजर | 2 | लेवल 5 (₹29,200 – ₹92,300) |\n| 25 | हॉर्टिकल्चर असिस्टेंट | 2 | लेवल 3 (₹21,700 – ₹69,100) |\n| 26 | फार्मासिस्ट (Pharmacist) | 3 | लेवल 5 (₹29,200 – ₹92,300) |\n| 27 | ड्रेसर (Dresser) | 2 | लेवल 1 (₹18,000 – ₹56,900) |\n| 28 | मेडिकल अटेंडेंट | 1 | लेवल 1 (₹18,000 – ₹56,900) |\n| 29 | फोटोग्राफर (Photographer) | 1 | लेवल 5 (₹29,200 – ₹92,300) |\n| 30 | स्टोर कीपर (Store Keeper) | 1 | लेवल 4 (₹25,500 – ₹81,100) |\n| 31 | चेयर साइड अटेंडेंट (डेंटिस्ट्री) | 3 | लेवल 1 (₹18,000 – ₹56,900) |\n| 32 | वीडियो एडिटर (Video Editor) | 1 | लेवल 6 (₹35,400 – ₹1,12,400) |\n| 33 | केयरटेकर (Caretaker) | 1 | लेवल 6 (₹35,400 – ₹1,12,400) |\n| 34 | कुक / रसोइया (Cook) | 1 | लेवल 2 (₹19,900 – ₹63,200) |\n| 35 | सेनेटरी इंस्पेक्टर | 1 | लेवल 6 (₹35,400 – ₹1,12,400) |\n| **कुल** | **सभी 35 पद श्रेणियां** | **85 पद** | **लेवल 1 से लेवल 13** |\n\n*नोट: रिक्तियों की संख्या अनंतिम है। विश्वविद्यालय को चयन के समय पदों को घटाने, बढ़ाने या बिना कारण बताए किसी पद को निरस्त करने का अधिकार है।*\n\n## जामिया मिलिया इस्लामिया नॉन टीचिंग पात्रता मापदंड 2026\n\nपदों के अनुसार शैक्षणिक योग्यता, तकनीकी प्रमाण पत्र एवं कार्यानुभव का विवरण नीचे दिया गया है:\n\n### 1. कुलसचिव कार्यालय (Registrar's Office)\n\n#### असिस्टेंट रजिस्ट्रार (3 पद – पे लेवल 10)\n- **शैक्षणिक योग्यता**: मान्यता प्राप्त विश्वविद्यालय से न्यूनतम 55% अंकों या समकक्ष ग्रेड के साथ स्नातकोत्तर (Master's Degree)।\n- **अनुभव**: सरकारी कार्यालय, विश्वविद्यालय अथवा स्वायत्त संस्थान में पे लेवल 7 या उससे ऊपर सेक्शन ऑफिसर के रूप में कम से कम 3 वर्ष का नियमित सेवा अनुभव।\n- **वांछनीय**: हिंदी और उर्दू भाषा का कार्यसाधक ज्ञान।\n\n#### सेक्शन ऑफिसर (4 पद – पे लेवल 7)\n- **शैक्षणिक योग्यता**: मान्यता प्राप्त विश्वविद्यालय से किसी भी विषय में स्नातक (Bachelor's Degree)।\n- **अनुभव**: लेवल 6 में असिस्टेंट के रूप में 3 वर्ष का अनुभव, अथवा लेवल 4 में UDC के रूप में 8 वर्ष का अनुभव।\n- **कौशल**: कंप्यूटर संचालन, नोटिंग एवं ड्राफ्टिंग में प्रवीणता। हिंदी एवं उर्दू का ज्ञान वांछनीय।\n\n#### असिस्टेंट (3 पद – पे लेवल 6)\n- **शैक्षणिक योग्यता**: किसी मान्यता प्राप्त विश्वविद्यालय से स्नातक डिग्री।\n- **अनुभव**: लेवल 4 में UDC के रूप में 3 वर्ष का अनुभव, अथवा लेवल 2 में LDC के रूप में 8 वर्ष का अनुभव।\n- **कौशल**: टाइपिंग, कंप्यूटर एप्लीकेशन, नोटिंग और ड्राफ्टिंग में दक्षता।\n\n#### अपर डिवीजन क्लर्क / UDC (10 पद – पे लेवल 4)\n- **शैक्षणिक योग्यता**: मान्यता प्राप्त विश्वविद्यालय से स्नातक उपाधि।\n- **अनुभव**: सरकारी कार्यालय, विश्वविद्यालय अथवा स्वायत्त संस्थान में लोअर डिवीजन क्लर्क (LDC) के रूप में 2 वर्ष का नियमित अनुभव।\n- **टाइपिंग स्पीड**: कंप्यूटर पर अंग्रेजी में **35 शब्द प्रति मिनट (WPM)** अथवा हिंदी/उर्दू में **30 शब्द प्रति मिनट (WPM)** की गति।\n- **कौशल**: कंप्यूटर संचालन में प्रवीणता। हिंदी एवं उर्दू का ज्ञान वांछनीय।\n\n#### हिंदी टाइपिस्ट (2 पद – पे लेवल 2)\n- **शैक्षणिक योग्यता**: किसी मान्यता प्राप्त विश्वविद्यालय से स्नातक (Bachelor's Degree)।\n- **टाइपिंग स्पीड**: कंप्यूटर पर हिंदी टाइपिंग में न्यूनतम **30 शब्द प्रति मिनट (WPM)** की गति।\n- **वांछनीय**: उर्दू भाषा का ज्ञान।\n\n#### उर्दू टाइपिस्ट (4 पद – पे लेवल 2)\n- **शैक्षणिक योग्यता**: किसी मान्यता प्राप्त विश्वविद्यालय से स्नातक उपाधि।\n- **टाइपिंग स्पीड**: कंप्यूटर पर उर्दू टाइपिंग में न्यूनतम **30 शब्द प्रति मिनट (WPM)** की गति।\n- **वांछनीय**: हिंदी भाषा का ज्ञान।\n\n### 2. प्रॉपर्टी अनुभाग (Property Section)\n\n#### लैंड रिकॉर्ड सुपरिंटेंडेंट (1 पद – पे लेवल 6)\n- **योग्यता**: स्नातक उपाधि + राजस्व विभाग के नियमानुसार पटवारी प्रशिक्षण।\n- **अनुभव**: राजस्व, भू-अभिलेख अथवा पटवारी कार्यों में 8 वर्ष का मैदानी अनुभव।\n- **भाषा ज्ञान**: हिंदी, उर्दू और अंग्रेजी का ज्ञान। कंप्यूटर और ड्राफ्टिंग वांछनीय।\n\n#### लैंड रिकॉर्ड कीपर (1 पद – पे लेवल 4)\n- **योग्यता**: स्नातक उपाधि।\n- **अनुभव**: तहसील अथवा उप-संभाग कार्यालय में लैंड रिकॉर्ड क्लर्क के रूप में 5 वर्ष का कार्य अनुभव।\n- **भाषा ज्ञान**: हिंदी, उर्दू और अंग्रेजी का ज्ञान।\n\n### 3. वित्त एवं लेखा कार्यालय (Finance & Accounts)\n\n#### इंटरनल ऑडिट ऑफिसर (1 पद – पे लेवल 12 – प्रतिनियुक्ति)\n- केंद्र/राज्य सरकार की ऑडिट एवं लेखा सेवाओं में नियमित रूप से समतुल्य पद धारण करने वाले अधिकारी, या लेवल 11 में 3 वर्ष या लेवल 10 में 5 वर्ष की सेवा। आयु: 56 वर्ष से कम।\n\n#### असिस्टेंट फाइनेंस ऑफिसर (2 पद – पे लेवल 10)\n- वाणिज्य में परास्नातक (M.Com) अथवा MBA (फाइनेंस) में कम से कम 55% अंक।\n- शैक्षणिक प्रशासन में पे लेवल 7 (अकाउंटेंट या सेक्शन ऑफिसर) में कम से कम 5 वर्ष का अनुभव। CAIIB/CS वांछनीय।\n\n#### अकाउंटेंट (2 पद – पे लेवल 7)\n- वाणिज्य में प्रथम श्रेणी के साथ स्नातक (B.Com First Division)।\n- लेवल 6 में असिस्टेंट के रूप में 3 वर्ष या लेवल 4 में UDC के रूप में 8 वर्ष का लेखा संबंधी कार्यानुभव। हिंदी और उर्दू का ज्ञान।\n\n### 4. भवन एवं निर्माण विभाग (Building & Construction)\n\n#### सुपरिंटेंडेंट इंजीनियर – सिविल (1 पद – पे लेवल 13)\n- सिविल इंजीनियरिंग में प्रथम श्रेणी स्नातक डिग्री + CPWD/PWD/PSU में एग्जीक्यूटिव इंजीनियर के रूप में 8 वर्ष का अनुभव।\n\n#### एग्जीक्यूटिव इंजीनियर – सिविल (1 पद – पे लेवल 11)\n- CPWD/PWD/स्वायत्त निकाय में समतुल्य पदधारी अथवा 3 वर्ष की नियमित सेवा।\n\n#### इलेक्ट्रीशियन (5 पद – पे लेवल 2)\n- **विकल्प 1**: 10+2 + ITI इलेक्ट्रीशियन ट्रेड सर्टिफिकेट + स्टार्टर्स, मोटर बाइंडिंग एवं वायरिंग में 4 वर्ष का अनुभव।\n- **विकल्प 2**: 10वीं पास + इलेक्ट्रिकल अधिष्ठापन में कम से कम 6 वर्ष का अनुभव।\n\n#### प्लंबर (3 पद – पे लेवल 2)\n- 10+2 के साथ ITI प्लंबिंग प्रमाण पत्र; अथवा 10वीं पास के साथ 6 वर्ष का व्यावहारिक प्लंबिंग अनुभव।\n\n#### कारपेंटर (5 पद – पे लेवल 2)\n- 10+2 के साथ ITI कारपेंटर ट्रेड प्रमाण पत्र; अथवा 10वीं के बाद 6 वर्ष का अनुभव।\n\n#### पुताईकर्मी / व्हाइटवाशर (2 पद – पे लेवल 2)\n- 10+2 पास तथा सरकारी कार्यालय/विश्वविद्यालय में व्हाइटवाशर के रूप में 6 वर्ष का अनुभव।\n\n#### मेशन / राजमिस्त्री (1 पद – पे लेवल 2)\n- 10+2 साथ में ITI मेशन ट्रेड; अथवा 10वीं के बाद 6 वर्ष का अनुभव।\n\n#### वायरमैन (3 पद – पे लेवल 1)\n- 10वीं पास + वायरमैन ग्रेड-II प्रमाण पत्र + आंतरिक वायरिंग में कम से कम 2 वर्ष का अनुभव।\n\n#### बेलदार (6 पद – पे लेवल 1)\n- 10वीं कक्षा उत्तीर्ण। शारीरिक रूप से स्वस्थ एवं सामग्री उठाने/कारीगरों की सहायता करने का पर्याप्त अनुभव।\n\n#### मेट (4 पद – पे लेवल 1)\n- 10वीं उत्तीर्ण + संबंधित क्षेत्र में मेट/पर्यवेक्षक के रूप में कम से कम 6 वर्ष का कार्यानुभव।\n\n### 5. डॉ. ज़ाकिर हुसैन लाइब्रेरी\n\n#### प्रोफेशनल असिस्टेंट (1 पद – पे लेवल 6)\n- लाइब्रेरी एवं इंफॉर्मेशन साइंस में मास्टर डिग्री (M.Lib.I.Sc) के साथ 2 वर्ष का अनुभव; अथवा B.Lib.I.Sc के साथ 3 वर्ष का अनुभव। कंप्यूटर ज्ञान अनिवार्य।\n\n### 6. उद्यान विभाग (Horticulture)\n\n#### गार्डन सुपरिंटेंडेंट (1 पद – पे लेवल 7)\n- कृषि/हॉर्टिकल्चर/बॉटनिकल साइंस में M.Sc के साथ 5 वर्ष का अनुभव; अथवा B.Sc के साथ 10 वर्ष का अनुभव।\n\n#### गार्डन सुपरवाइजर (2 पद – पे लेवल 5)\n- कृषि या हॉर्टिकल्चर में प्रथम श्रेणी में B.Sc उपाधि + 5 वर्ष का कार्यानुभव।\n\n#### हॉर्टिकल्चर असिस्टेंट (2 पद – पे लेवल 3)\n- कृषि या हॉर्टिकल्चर में कम से कम 55% अंकों के साथ B.Sc डिग्री।\n\n### 7. डॉ. एम. ए. अंसारी स्वास्थ्य केंद्र\n\n#### फार्मासिस्ट (3 पद – पे लेवल 5)\n- मान्यता प्राप्त कॉलेज से बी.फार्मा (B.Pharm) डिग्री + सरकारी या प्रतिष्ठित कॉर्पोरेट अस्पताल में 3 वर्ष का कार्यानुभव।\n\n#### ड्रेसर (2 पद – पे लेवल 1)\n- 10+2 जीव विज्ञान (Biology) के साथ + सर्जिकल वार्ड, OPD या OT में 2 वर्ष का अनुभव + प्राथमिक चिकित्सा एवं घाव ड्रेसिंग का ज्ञान।\n\n#### मेडिकल अटेंडेंट (1 पद – पे लेवल 1)\n- 10+2 जीव विज्ञान के साथ + अस्पताल/मेडिकल कॉलेज में 2 वर्ष का अनुभव।\n\n### 8. दंत चिकित्सा संकाय (Faculty of Dentistry)\n\n#### फोटोग्राफर (1 पद – पे लेवल 5)\n- स्नातक उपाधि + फोटोग्राफी में डिप्लोमा/पीजी डिप्लोमा + 3 वर्ष का अनुभव।\n\n#### स्टोर कीपर (1 पद – पे लेवल 4)\n- बी.फार्मा (B.Pharm) डिग्री + सरकारी/प्रतिष्ठित अस्पताल में 3 वर्ष का अनुभव।\n\n#### चेयर साइड अटेंडेंट (3 पद – पे level 1)\n- 10+2 उत्तीर्ण + दंत चिकित्सालय/क्लिनिक में कम से कम 2 वर्ष का कार्य अनुभव।\n\n### 9. एजेके मास कम्युनिकेशन रिसर्च सेंटर (MCRC)\n\n#### वीडियो एडिटर (1 पद – पे लेवल 6)\n- किसी भी विषय में स्नातक + वीडियो एडिटिंग में न्यूनतम 1 वर्ष का डिप्लोमा + FCP, एडोब, वीएफएक्स, साउंड एडिटिंग में कम से कम 5 वर्ष का अनुभव।\n\n#### केयरटेकर (1 पद – पे लेवल 6)\n- स्नातक उपाधि + सरकारी कार्यालय, विश्वविद्यालय या प्रतिष्ठित होटल/गेस्ट हाउस में 8 वर्ष का कार्य अनुभव।\n\n### 10. यूनिवर्सिटी गेस्ट हाउस\n\n#### कुक / रसोइया (1 पद – पे लेवल 2)\n- 10वीं पास + बेकरी एवं कन्फेक्शनरी में ITI ट्रेड सर्टिफिकेट अथवा कुकरी में 1 वर्षीय डिप्लोमा + 3 वर्ष का अनुभव।\n\n### 11. स्वच्छता इकाई (Sanitation Unit)\n\n#### सेनेटरी इंस्पेक्टर (1 पद – पे लेवल 6)\n- स्नातक + सेनेटरी इंस्पेक्टर/सुपरवाइजर सर्टिफिकेट + नगर निगम या स्वास्थ्य विभाग में कम से कम 2 वर्ष का अनुभव। हिंदी व उर्दू का ज्ञान।\n\n## जामिया मिलिया इस्लामिया आयु सीमा 2026\n\nअधिकांश गैर-शैक्षणिक एवं लिपिकीय पदों के लिए सामान्य अधिकतम आयु सीमा **40 वर्ष** निर्धारित है। कुछ विशिष्ट इंजीनियरिंग एवं ऑडिट पदों पर 56 वर्ष से कम आयु को वरीयता दी जाएगी:\n\n| पद वर्ग | निर्धारित आयु सीमा |\n| :--- | :--- |\n| अधिकांश प्रशासनिक, लिपिकीय व तकनीकी पद | **अधिकतम 40 वर्ष** |\n| इंटरनल ऑडिट ऑफिसर | अधिमानतः 56 वर्ष से कम |\n| सुपरिंटेंडेंट इंजीनियर (सिविल) | अधिमानतः 56 वर्ष से कम |\n| एग्जीक्यूटिव इंजीनियर (सिविल) | अधिमानतः 56 वर्ष से कम |\n\n- **आयु गणना की निर्णायक तिथि**: **11 दिसंबर 2026** (ऑनलाइन आवेदन की अंतिम तिथि)।\n\n### आयु में छूट (Age Relaxation)\nकेंद्र सरकार के नियमों के अनुसार आरक्षित वर्गों को ऊपरी आयु सीमा में नियमानुसार छूट प्रदान की जाएगी:\n- **SC / ST**: 5 वर्ष\n- **OBC (नॉन-क्रीमी लेयर - केंद्रीय सूची)**: 3 वर्ष\n- **दिव्यांगजन (PwBD)**: 10 वर्ष (SC/ST हेतु 15 वर्ष एवं OBC हेतु 13 वर्ष)\n- **भूतपूर्व सैनिक**: नियमानुसार\n- **जामिया के नियमित कर्मचारी**: यदि अंतिम तिथि तक कम से कम 3 वर्ष की नियमित सेवा पूर्ण कर ली हो, तो कोई ऊपरी आयु सीमा नहीं होगी।\n\n## वेतनमान (Salary Structure 2026)\n\nचयनित अभ्यर्थियों को 7वें केंद्रीय वेतन आयोग (7th CPC) के पे मैट्रिक्स के अनुसार मासिक वेतन दिया जाएगा:\n\n| पे लेवल | मूल वेतनमान (Basic Pay) | संबंधित पद (उदाहरण) |\n| :---: | :--- | :--- |\n| **लेवल 1** | ₹18,000 – ₹56,900 | वायरमैन, बेलदार, मेट, ड्रेसर, मेडिकल अटेंडेंट, चेयर साइड अटेंडेंट |\n| **लेवल 2** | ₹19,900 – ₹63,200 | हिंदी टाइपिस्ट, उर्दू टाइपिस्ट, इलेक्ट्रीशियन, प्लंबर, कारपेंटर, पुताईकर्मी, राजमिस्त्री, कुक |\n| **लेवल 3** | ₹21,700 – ₹69,100 | हॉर्टिकल्चर असिस्टेंट |\n| **लेवल 4** | ₹25,500 – ₹81,100 | अपर डिवीजन क्लर्क (UDC), लैंड रिकॉर्ड कीपर, स्टोर कीपर |\n| **लेवल 5** | ₹29,200 – ₹92,300 | फार्मासिस्ट, गार्डन सुपरवाइजर, फोटोग्राफर |\n| **लेवल 6** | ₹35,400 – ₹1,12,400 | असिस्टेंट, प्रोफेशनल असिस्टेंट, वीडियो एडिटर, केयरटेकर, सेनेटरी इंस्पेक्टर |\n| **लेवल 7** | ₹44,900 – ₹1,42,400 | सेक्शन ऑफिसर, अकाउंटेंट, गार्डन सुपरिंटेंडेंट |\n| **लेवल 10** | ₹56,100 – ₹1,77,500 | असिस्टेंट रजिस्ट्रार, असिस्टेंट फाइनेंस ऑफिसर |\n| **लेवल 11** | ₹67,700 – ₹2,08,700 | एग्जीक्यूटिव इंजीनियर (सिविल) |\n| **लेवल 12** | ₹78,800 – ₹2,09,200 | इंटरनल ऑडिट ऑफिसर |\n| **लेवल 13** | ₹1,23,100 – ₹2,15,900 | सुपरिंटेंडेंट इंजीनियर (सिविल) |\n\nमूल वेतन के अतिरिक्त महंगाई भत्ता (DA), मकान किराया भत्ता (HRA) तथा परिवहन भत्ता (TA) देय होगा।\n\n## आवेदन शुल्क (Application Fee)\n\nआवेदन शुल्क अप्रतिदेय (Non-Refundable) है और यह पद के ग्रुप एवं वेतन स्तर पर निर्भर करता है:\n\n### ग्रुप A पद (पे लेवल 10 एवं उससे ऊपर)\n| श्रेणी | आवेदन शुल्क |\n| :--- | :---: |\n| सामान्य / अनारक्षित (UR) एवं OBC | **₹1,000** |\n| अनुसूचित जाति (SC) एवं अनुसूचित जनजाति (ST) | **₹500** |\n| दिव्यांगजन (PwBD) | **शून्य (निःशुल्क)** |\n\n### ग्रुप B एवं C पद (पे लेवल 7 एवं उससे नीचे)\n| श्रेणी | आवेदन शुल्क |\n| :--- | :---: |\n| सामान्य / अनारक्षित (UR) एवं OBC | **₹700** |\n| अनुसूचित जाति (SC) एवं अनुसूचित जनजाति (ST) | **₹350** |\n| दिव्यांगजन (PwBD) | **शून्य (निःशुल्क)** |\n\n*भुगतान मोड: नेट बैंकिंग, क्रेडिट/डेबिट कार्ड या यूपीआई के माध्यम से ऑनलाइन। SC/ST को 50% छूट तथा PwBD को पूर्ण छूट है।*\n\n## चयन प्रक्रिया 2026\n\nविश्वविद्यालय की भर्ती नियमावली (Recruitment Rules) के तहत चयन निम्नलिखित चरणों में होगा:\n\n1. **लिखित परीक्षा**: सामान्य ज्ञान, भाषा ज्ञान, तार्किक क्षमता तथा पद से संबंधित विषय ज्ञान का परीक्षण।\n2. **स्किल / टाइपिंग टेस्ट**: लिपिकीय एवं टाइपिस्ट पदों हेतु अनिवार्य:\n   - **हिंदी टाइपिस्ट**: कंप्यूटर पर न्यूनतम 30 शब्द प्रति मिनट (WPM)।\n   - **उर्दू टाइपिस्ट**: कंप्यूटर पर न्यूनतम 30 शब्द प्रति मिनट (WPM)।\n   - **UDC**: अंग्रेजी में 35 WPM अथवा हिंदी/उर्दू में 30 WPM।\n3. **ट्रेड टेस्ट**: तकनीकी पदों (इलेक्ट्रीशियन, प्लंबर, कारपेंटर, वायरमैन, कुक आदि) के लिए प्रायोगिक ट्रेड टेस्ट।\n4. **साक्षात्कार**: ग्रुप A पदों (जैसे असिस्टेंट रजिस्ट्रार) के लिए लिखित परीक्षा के बाद साक्षात्कार आयोजित होगा।\n5. **दस्तावेज सत्यापन एवं चिकित्सा परीक्षण**: मूल शैक्षणिक, अनुभव व जाति प्रमाण पत्रों की जांच तथा मेडिकल परीक्षण।\n\n> **शॉर्टलिस्टिंग**: केवल न्यूनतम योग्यता होने से परीक्षा या साक्षात्कार हेतु बुलाए जाने की गारंटी नहीं होती। विश्वविद्यालय उच्चतर योग्यता या अनुभव के आधार पर अभ्यर्थियों को शॉर्टलिस्ट करने का अधिकार रखता है।\n\n## महत्वपूर्ण आवेदन निर्देश\n\n1. **प्रत्येक पद के लिए अलग आवेदन**: यदि कोई अभ्यर्थी एक से अधिक पदों के लिए आवेदन करना चाहता है, तो उसे प्रत्येक पद हेतु अलग ऑनलाइन फॉर्म भरना होगा और अलग शुल्क जमा करना होगा।\n2. **एनओसी (NOC) अनिवार्य**: सरकारी, अर्ध-सरकारी या स्वायत्त संस्थानों में कार्यरत अभ्यर्थियों को अपने नियोक्ता से अनापत्ति प्रमाण पत्र (NOC) प्राप्त कर हार्ड कॉपी के साथ संलग्न करना अनिवार्य है।\n3. **हार्ड कॉपी जमा करना अनिवार्य**: केवल ऑनलाइन फॉर्म भरना पर्याप्त नहीं है। ऑनलाइन सबमिशन के बाद फॉर्म का A4 साइज पर प्रिंटआउट निकालें, उस पर हस्ताक्षर करें, फोटो चिपकाएं, सभी मार्कशीट व अनुभव प्रमाण पत्र स्व-प्रमाणित कर संलग्न करें और **21 दिसंबर 2026** तक विश्वविद्यालय के पते पर पहुंचाएं।\n4. **पूर्व आवेदकों के लिए विशेष छूट**: विज्ञापन संख्या 02/2025-26 (NT) के तहत तारांकित (*) पदों के लिए आवेदन कर चुके अभ्यर्थियों को पुनः ऑनलाइन आवेदन करना होगा, परंतु पूर्व आवेदन रसीद या डाक रसीद संलग्न करने पर उन्हें आवेदन शुल्क से छूट मिलेगी।\n\n## आवेदन कैसे करें (Step-by-Step Guide)\n\n### चरण 1: ऑनलाइन आवेदन\n1. आधिकारिक भर्ती पोर्टल **[jobs.jmi.ac.in](https://jobs.jmi.ac.in/)** पर जाएं।\n2. Advertisement No. 01/2026-27 (NT) के लिंक पर क्लिक करें।\n3. अपनी ईमेल आईडी और मोबाइल नंबर से नया पंजीकरण (Register) करें।\n4. लॉग इन करके इच्छित पद का चयन करें।\n5. व्यक्तिगत विवरण, शैक्षणिक योग्यता और कार्यानुभव भरें।\n6. फोटो, हस्ताक्षर और आवश्यक दस्तावेज अपलोड करें।\n7. ऑनलाइन माध्यम से आवेदन शुल्क का भुगतान करें।\n8. फॉर्म को सबमिट करें और भरे हुए फॉर्म की PDF डाउनलोड कर प्रिंट लें।\n\n### चरण 2: हार्ड कॉपी तैयार करना एवं भेजना\n1. प्रिंटेड फॉर्म पर निर्धारित स्थान पर पासपोर्ट साइज फोटो चिपकाएं और हस्ताक्षर करें।\n2. 10वीं, 12वीं, स्नातक, डिग्री, मार्कशीट, अनुभव प्रमाण पत्र और जाति प्रमाण पत्र की स्व-प्रमाणित प्रतियां संलग्न करें।\n3. सभी संलग्नकों पर क्रम संख्या (Page Number) लिखें।\n4. लिफाफे के ऊपर स्पष्ट रूप से लिखें:  \n   **\"Application for the post of [पद का नाम], Advt. No. 01/2026-27 (NT)\"**\n5. स्पीड पोस्ट, कूरियर या व्यक्तिगत रूप से नीचे दिए गए पते पर भेजें:\n\n> **Recruitment & Promotion Section**  \n> 2nd Floor, Registrar's Office  \n> Jamia Millia Islamia, Jamia Nagar  \n> New Delhi – 110025  \n\n- **हार्ड कॉपी पहुंचने की अंतिम तिथि**: **21 दिसंबर 2026 (शाम 5:00 बजे तक)**।\n\n## महत्वपूर्ण तिथियां\n\n| कार्यक्रम | तिथि |\n| :--- | :--- |\n| आधिकारिक अधिसूचना जारी | 10 नवंबर 2026 |\n| ऑनलाइन आवेदन प्रारंभ | 12 नवंबर 2026 |\n| **ऑनलाइन आवेदन की अंतिम तिथि** | **11 दिसंबर 2026** |\n| **हार्ड कॉपी पहुंचने की अंतिम तिथि** | **21 दिसंबर 2026** |\n| लिखित परीक्षा / स्किल टेस्ट | बाद में सूचित की जाएगी |\n| साक्षात्कार तिथि | बाद में सूचित की जाएगी |\n\n## महत्वपूर्ण लिंक्स\n\n| विवरण | आधिकारिक लिंक |\n| :--- | :--- |\n| **JMI ऑनलाइन आवेदन पोर्टल** | [jobs.jmi.ac.in](https://jobs.jmi.ac.in/) |\n| **आधिकारिक नोटिफिकेशन PDF** | [JMI Official Notification](https://www.jmi.ac.in/) |\n| **जामिया मिलिया इस्लामिया आधिकारिक वेबसाइट** | [www.jmi.ac.in](https://www.jmi.ac.in/) |\n| **हिंदी टाइपिस्ट परीक्षा हेतु फ्री टाइपिंग प्रैक्टिस** | [TypeHindi Practice Platform](https://www.typehindi.in/practice) |\n| **ऑनलाइन टाइपिंग टेस्ट (WPM व सटीकता चेकर)** | [TypeHindi Typing Test Engine](https://www.typehindi.in/test) |\n\n## अक्सर पूछे जाने वाले प्रश्न (FAQs)\n\n### 1. JMI नॉन टीचिंग भर्ती 2026 में कुल कितने पद हैं?\nविश्वविद्यालय ने 35 विभिन्न पद श्रेणियों में कुल 85 रिक्तियों के लिए विज्ञापन जारी किया है।\n\n### 2. इस भर्ती का विज्ञापन संख्या क्या है?\nविज्ञापन संख्या **01/2026-27 (NT)** (दिनांक 10 नवंबर 2026) है।\n\n### 3. ऑनलाइन आवेदन कब से कब तक होंगे?\nऑनलाइन आवेदन **12 नवंबर 2026** से शुरू होकर **11 दिसंबर 2026** तक भरे जा सकते हैं।\n\n### 4. क्या हार्ड कॉपी भेजना अनिवार्य है?\n**हां, बिल्कुल अनिवार्य है।** ऑनलाइन आवेदन के बाद प्रिंटआउट निकालकर स्व-प्रमाणित दस्तावेजों सहित 21 दिसंबर 2026 तक कुलसचिव कार्यालय में पहुंचना आवश्यक है।\n\n### 5. हार्ड कॉपी किस पते पर भेजनी है?\nभर्ती एवं पदोन्नति अनुभाग, द्वितीय तल, कुलसचिव कार्यालय, जामिया मिलिया इस्लामिया, जामिया नगर, नई दिल्ली - 110025।\n\n### 6. हिंदी टाइपिस्ट पद के लिए टाइपिंग स्पीड कितनी होनी चाहिए?\nकंप्यूटर पर हिंदी टाइपिंग में न्यूनतम **30 शब्द प्रति मिनट (WPM)** की गति आवश्यक है।\n\n### 7. उर्दू टाइपिस्ट पद के लिए क्या योग्यता चाहिए?\nस्नातक उपाधि तथा कंप्यूटर पर न्यूनतम **30 शब्द प्रति मिनट (WPM)** उर्दू टाइपिंग स्पीड।\n\n### 8. अपर डिवीजन क्लर्क (UDC) के लिए क्या योग्यता है?\nस्नातक + 2 वर्ष का LDC अनुभव + अंग्रेजी में 35 WPM अथवा हिंदी/उर्दू में 30 WPM टाइपिंग स्पीड।\n\n### 9. आवेदन शुल्क कितना है?\nग्रुप A पदों हेतु ₹1,000 (SC/ST ₹500) तथा ग्रुप B व C पदों हेतु ₹700 (SC/ST ₹350)। दिव्यांगजन निःशुल्क आवेदन कर सकते हैं।\n\n### 10. JMI टाइपिस्ट परीक्षा की तैयारी कैसे करें?\nअभ्यर्थी **[TypeHindi.in](https://www.typehindi.in/)** पर बिल्कुल मुफ्त में मंगल फॉन्ट और इनस्क्रिप्ट लेआउट पर 30 से 35 WPM की स्पीड का अभ्यास कर सकते हैं।\n\n## निष्कर्ष\n\nजामिया मिलिया इस्लामिया नॉन टीचिंग भर्ती 2026 नई दिल्ली स्थित प्रतिष्ठित केंद्रीय विश्वविद्यालय में सरकारी नौकरी प्राप्त करने का एक बेहतरीन अवसर है। क्लर्क, हिंदी टाइपिस्ट, उर्दू टाइपिस्ट, तकनीकी और प्रशासनिक पदों पर आवेदन करने के इच्छुक अभ्यर्थी अपनी योग्यतानुसार समय रहते 11 दिसंबर 2026 तक ऑनलाइन आवेदन पूर्ण करें और 21 दिसंबर 2026 से पूर्व हार्ड कॉपी विश्वविद्यालय को अवश्य प्रेषित करें।",
  "contentEn": "**Jamia Millia Islamia (JMI)**, New Delhi, a premier Central University, has released a comprehensive recruitment notification for various non-teaching positions under **Advertisement No. 01/2026-27 (NT)**, dated 10 November 2026. The university has invited applications from Indian Nationals, including Overseas Citizen of India (OCI) Cardholders, for recruitment across various academic faculties, departments, centres, and administrative offices.\n\nA total of **85 vacancies across 35 different post designations** have been advertised. The available positions range from group A administrative roles like Assistant Registrar and Section Officer to ministerial and clerical posts like Upper Division Clerk (UDC), Assistant, Hindi Typist, and Urdu Typist, as well as specialised technical, healthcare, engineering, and maintenance roles.\n\nSelected candidates will receive attractive salary packages under the **7th Central Pay Commission (CPC)**, with pay levels ranging from **Pay Level 1 to Pay Level 13**, plus applicable central government allowances.\n\nThe online application process begins on **12 November 2026**, and the closing date for online submission is **11 December 2026**. Candidates must note that physical submission of the printed application form along with self-attested documents to the university is mandatory and must reach the Registrar's Office by **21 December 2026**.\n\n## Jamia Millia Islamia Non Teaching Recruitment 2026: Overview\n\n| Particulars | Details |\n| :--- | :--- |\n| **University Name** | Jamia Millia Islamia (JMI) |\n| **University Type** | Central University, NAAC A++ Accredited |\n| **Recruitment Name** | Non-Teaching Recruitment 2026 |\n| **Advertisement Number** | 01/2026-27 (NT) |\n| **Notification Date** | 10 November 2026 |\n| **Total Post Designations** | 35 Designations |\n| **Total Vacancies** | 85 Posts |\n| **Application Mode** | Online + Physical Hard Copy Submission |\n| **Job Location** | Jamia Nagar, New Delhi |\n| **Eligible Candidates** | Indian Nationals and OCI Cardholders |\n| **Salary Structure** | 7th CPC Pay Matrix |\n| **Pay Levels** | Level 1 to Level 13 (₹18,000 – ₹2,15,900) |\n| **General Age Limit** | Generally 40 Years (Relaxations applicable) |\n| **Selection Process** | Written Test / Skill Test / Trade Test / Interview (as per post) |\n| **Online Application Start** | 12 November 2026 |\n| **Last Date for Online Application** | 11 December 2026 |\n| **Last Date for Hard Copy Receipt** | 21 December 2026 |\n| **Official Website** | [jmi.ac.in](https://www.jmi.ac.in/) |\n| **Recruitment Portal** | [jobs.jmi.ac.in](https://jobs.jmi.ac.in/) |\n\n## Jamia Millia Islamia Vacancy 2026: Post-Wise Details\n\nJamia Millia Islamia has announced 85 non-teaching vacancies across the Registrar's Office, Finance and Accounts Office, Property Section, Building and Construction Department, Dr. Zakir Husain Library, Horticulture Department, Dr. M. A. Ansari Health Centre, Faculty of Dentistry, AJK MCRC, University Guest House, and Sanitation Unit.\n\nThe complete post-wise vacancy distribution and applicable pay level are given below:\n\n| S. No. | Post Name | Vacancies | Pay Level (7th CPC) |\n| :---: | :--- | :---: | :--- |\n| 1 | Assistant Registrar | 3 | Level 10 (₹56,100 – ₹1,77,500) |\n| 2 | Section Officer | 4 | Level 7 (₹44,900 – ₹1,42,400) |\n| 3 | Assistant | 3 | Level 6 (₹35,400 – ₹1,12,400) |\n| 4 | Upper Division Clerk (UDC) | 10 | Level 4 (₹25,500 – ₹81,100) |\n| 5 | Hindi Typist | 2 | Level 2 (₹19,900 – ₹63,200) |\n| 6 | Urdu Typist | 4 | Level 2 (₹19,900 – ₹63,200) |\n| 7 | Land Record Superintendent | 1 | Level 6 (₹35,400 – ₹1,12,400) |\n| 8 | Land Record Keeper | 1 | Level 4 (₹25,500 – ₹81,100) |\n| 9 | Internal Audit Officer | 1 | Level 12 (₹78,800 – ₹2,09,200) |\n| 10 | Assistant Finance Officer | 2 | Level 10 (₹56,100 – ₹1,77,500) |\n| 11 | Accountant | 2 | Level 7 (₹44,900 – ₹1,42,400) |\n| 12 | Superintendent Engineer (Civil) | 1 | Level 13 (₹1,23,100 – ₹2,15,900) |\n| 13 | Executive Engineer (Civil) | 1 | Level 11 (₹67,700 – ₹2,08,700) |\n| 14 | Electrician | 5 | Level 2 (₹19,900 – ₹63,200) |\n| 15 | Plumber | 3 | Level 2 (₹19,900 – ₹63,200) |\n| 16 | Carpenter | 5 | Level 2 (₹19,900 – ₹63,200) |\n| 17 | Whitewasher | 2 | Level 2 (₹19,900 – ₹63,200) |\n| 18 | Mason | 1 | Level 2 (₹19,900 – ₹63,200) |\n| 19 | Wireman | 3 | Level 1 (₹18,000 – ₹56,900) |\n| 20 | Beldar | 6 | Level 1 (₹18,000 – ₹56,900) |\n| 21 | Mate | 4 | Level 1 (₹18,000 – ₹56,900) |\n| 22 | Professional Assistant | 1 | Level 6 (₹35,400 – ₹1,12,400) |\n| 23 | Garden Superintendent | 1 | Level 7 (₹44,900 – ₹1,42,400) |\n| 24 | Garden Supervisor | 2 | Level 5 (₹29,200 – ₹92,300) |\n| 25 | Horticulture Assistant | 2 | Level 3 (₹21,700 – ₹69,100) |\n| 26 | Pharmacist | 3 | Level 5 (₹29,200 – ₹92,300) |\n| 27 | Dresser | 2 | Level 1 (₹18,000 – ₹56,900) |\n| 28 | Medical Attendant | 1 | Level 1 (₹18,000 – ₹56,900) |\n| 29 | Photographer | 1 | Level 5 (₹29,200 – ₹92,300) |\n| 30 | Store Keeper | 1 | Level 4 (₹25,500 – ₹81,100) |\n| 31 | Chair Side Attendant | 3 | Level 1 (₹18,000 – ₹56,900) |\n| 32 | Video Editor | 1 | Level 6 (₹35,400 – ₹1,12,400) |\n| 33 | Caretaker | 1 | Level 6 (₹35,400 – ₹1,12,400) |\n| 34 | Cook | 1 | Level 2 (₹19,900 – ₹63,200) |\n| 35 | Sanitary Inspector | 1 | Level 6 (₹35,400 – ₹1,12,400) |\n| **Total** | **All 35 Post Designations** | **85** | **Level 1 to Level 13** |\n\n*Note: The vacancies are tentative. Jamia Millia Islamia reserves the right to increase or decrease the number of posts or not to fill any of the vacancies.*\n\n## Jamia Millia Islamia Non Teaching Eligibility Criteria 2026\n\nThe educational qualifications, technical certifications, and work experience requirements vary by post. Below is the detailed department-wise breakdown:\n\n### 1. Registrar's Office\n\n#### Assistant Registrar (3 Posts – Pay Level 10)\n- **Qualification**: Master's Degree from a recognised university or college with at least 55% marks or an equivalent grade.\n- **Experience**: At least three years of regular experience as a Section Officer in Pay Level 7 or above in a Central/State Government office, government university, or autonomous institution.\n- **Desirable**: Good working knowledge of Hindi and Urdu.\n\n#### Section Officer (4 Posts – Pay Level 7)\n- **Qualification**: Bachelor's Degree in any discipline from a recognised university or institution.\n- **Experience**: Three years of experience as an Assistant in Level 6, OR eight years of experience as a UDC in Level 4 in a Central/State Government office, university, or autonomous institution.\n- **Skills**: Proficiency in computer operations, noting, and drafting. Knowledge of Hindi and Urdu is desirable.\n\n#### Assistant (3 Posts – Pay Level 6)\n- **Qualification**: Bachelor's Degree from a recognised university or institution.\n- **Experience**: Three years of experience as a UDC or equivalent in Level 4, OR eight years as an LDC in Level 2.\n- **Skills**: Proficiency in typing, computer applications, noting, and drafting. Knowledge of Hindi and Urdu is desirable.\n\n#### Upper Division Clerk / UDC (10 Posts – Pay Level 4)\n- **Qualification**: Bachelor's Degree from a recognised university or institution.\n- **Experience**: Two years of experience as a Lower Division Clerk (LDC) or equivalent post in a Central/State Government office, government university, or autonomous institution.\n- **Typing Speed**: English typing speed of **35 WPM** OR Hindi/Urdu typing speed of **30 WPM**.\n- **Skills**: Proficiency in computer operations. Knowledge of Hindi and Urdu is desirable.\n\n#### Hindi Typist (2 Posts – Pay Level 2)\n- **Qualification**: Bachelor's Degree from a recognised university or institution.\n- **Typing Speed**: Minimum Hindi typing speed of **30 WPM** on computer.\n- **Desirable**: Working knowledge of Urdu.\n\n#### Urdu Typist (4 Posts – Pay Level 2)\n- **Qualification**: Bachelor's Degree from a recognised university or institution.\n- **Typing Speed**: Minimum Urdu typing speed of **30 WPM** on computer.\n- **Desirable**: Working knowledge of Hindi.\n\n### 2. Property Section\n\n#### Land Record Superintendent (1 Post – Pay Level 6)\n- **Qualification**: Graduation from a recognised university.\n- **Training**: Patwari training as required in the Revenue Department.\n- **Experience**: Eight years of field experience in revenue, land record, or Patwari-related matters.\n- **Languages**: Knowledge of Hindi, Urdu, and English. Computer knowledge, noting, and drafting are desirable.\n\n#### Land Record Keeper (1 Post – Pay Level 4)\n- **Qualification**: Graduation from a recognised university.\n- **Experience**: Five years of experience as a Land Record Clerk in a Tehsil or Sub-Division Office.\n- **Languages**: Knowledge of Hindi, Urdu, and English.\n\n### 3. Finance and Accounts Office\n\n#### Internal Audit Officer (1 Post – Pay Level 12 – Deputation)\n- **Appointment Mode**: Deputation.\n- **Cadre**: Candidates belonging to Audit and Accounts Services or similar organised Accounts Services in Central or State Government holding an analogous post on regular basis, OR 3 years regular service in Pay Level 11, OR 5 years in Pay Level 10.\n- **Age**: Preferably below 56 years.\n\n#### Assistant Finance Officer (2 Posts – Pay Level 10)\n- **Qualification**: Master's Degree in Commerce or MBA (Finance) with at least 55% marks or equivalent grade.\n- **Experience**: At least five years of experience in educational administration at a level not lower than Accountant or Section Officer in Pay Level 7 in a government office, university, or autonomous body.\n- **Desirable**: CAIIB, Cost & Works, Company Secretary qualifications, and computer applications.\n\n#### Accountant (2 Posts – Pay Level 7)\n- **Qualification**: Bachelor's Degree in Commerce with First Division from a recognised university.\n- **Experience**: Three years of experience as an Assistant in Level 6 OR eight years as a UDC in Level 4 involving accounts-related work in a Central/State Government office, university, or autonomous institution.\n- **Skills**: Proficiency in computer operations, noting, drafting, and knowledge of Hindi and Urdu.\n\n### 4. Building and Construction Department\n\n#### Superintendent Engineer – Civil (1 Post – Pay Level 13)\n- **Appointment Mode**: Deputation or Tenure basis.\n- **Qualification**: First Class Bachelor's Degree in Civil Engineering from a recognised institute/university.\n- **Experience**: Eight years of experience as an Executive Engineer in CPWD, State PWD, PSUs, or autonomous bodies.\n- **Age**: Preferably below 56 years.\n\n#### Executive Engineer – Civil (1 Post – Pay Level 11)\n- **Appointment Mode**: Deputation.\n- **Experience**: Officers holding analogous post or three years of experience in CPWD, State PWD, PSUs, or university systems.\n- **Age**: Preferably below 56 years.\n\n#### Electrician (5 Posts – Pay Level 2)\n- **Route 1**: 10+2 from a recognised board + ITI Electrician Certificate + 4 years of relevant experience in maintenance of starters, motor binding, and wireman work in a government office, university, or autonomous body.\n- **OR Route 2**: High School (10th) from a recognised board with at least 6 years of experience in electrical installations, starters, and motors.\n\n#### Plumber (3 Posts – Pay Level 2)\n- **Route 1**: 10+2 with ITI Certificate in Plumbing Trade; OR\n- **Route 2**: High School (10th) with at least 6 years of relevant experience after passing High School.\n\n#### Carpenter (5 Posts – Pay Level 2)\n- **Route 1**: 10+2 with ITI Certificate in Carpenter Trade; OR\n- **Route 2**: High School with at least 6 years of relevant experience.\n\n#### Whitewasher (2 Posts – Pay Level 2)\n- 10+2 from a recognised board with 6 years of experience as a Whitewasher in a Central/State Government office, university, or autonomous institution.\n\n#### Mason (1 Post – Pay Level 2)\n- 10+2 with ITI Certificate in Mason Trade; OR High School with at least 6 years of relevant experience.\n\n#### Wireman (3 Posts – Pay Level 1)\n- High School from a recognised board + Wireman's Grade-II Certificate of Competency + at least 2 years of experience in internal wiring and meter boards.\n\n#### Beldar (6 Posts – Pay Level 1)\n- High School from a recognised board. General suitability and good physical fitness for unskilled work (carrying materials, assisting artisans). Adequate relevant experience.\n\n#### Mate (4 Posts – Pay Level 1)\n- High School from a recognised board with at least 6 years of experience as a Mate/Supervisor in the relevant field.\n\n### 5. Dr. Zakir Husain Library\n\n#### Professional Assistant (1 Post – Pay Level 6)\n- Master's Degree in Library and Information Science with 2 years of relevant experience; OR\n- Bachelor's Degree in Library or Library and Information Science with 3 years of relevant experience in a university, research establishment, government office, PSU, or autonomous body.\n- Computer applications knowledge is essential.\n\n### 6. Horticulture Department\n\n#### Garden Superintendent (1 Post – Pay Level 7)\n- M.Sc. in Agriculture, Horticulture, or Botany with at least 5 years of experience as Garden Supervisor; OR\n- B.Sc. in Agriculture, Horticulture, or Botany with at least 10 years of experience, including 5 years as Garden Supervisor.\n\n#### Garden Supervisor (2 Posts – Pay Level 5)\n- B.Sc. in Agriculture or Horticulture with First Division from a recognised university + 5 years practical experience.\n\n#### Horticulture Assistant (2 Posts – Pay Level 3)\n- B.Sc. in Agriculture or Horticulture with at least 55% marks from a recognised university.\n\n### 7. Dr. M. A. Ansari Health Centre\n\n#### Pharmacist (3 Posts – Pay Level 5)\n- Bachelor's Degree in Pharmacy (B.Pharm) from a recognised college/institution.\n- Three years of experience in a government hospital/institute or reputed corporate hospital.\n\n#### Dresser (2 Posts – Pay Level 1)\n- 10+2 or equivalent with Biology from a recognised board + 2 years of experience in surgical ward, OPD, or OT + knowledge of first aid and wound dressing.\n\n#### Medical Attendant (1 Post – Pay Level 1)\n- 10+2 with Biology + 2 years of experience in hospital/medical college + elementary knowledge of first aid.\n\n### 8. Faculty of Dentistry\n\n#### Photographer (1 Post – Pay Level 5)\n- Graduation + PG Diploma/Diploma in Photography + 3 years of working experience in handling, exposing, and printing films.\n\n#### Store Keeper (1 Post – Pay Level 4)\n- Bachelor's Degree in Pharmacy (B.Pharm) + 3 years of experience in a government or reputed corporate hospital.\n\n#### Chair Side Attendant (3 Posts – Pay Level 1)\n- Senior Secondary (10+2) qualification from a recognised board + at least 2 years of experience in dental/clinical assistance.\n\n### 9. AJK Mass Communication and Research Centre (MCRC)\n\n#### Video Editor (1 Post – Pay Level 6)\n- Graduation in any discipline + Diploma in Video Editing of at least 1 year duration + at least 5 years of working experience in FCP, Adobe editing software, graphics, VFX, and colour grading.\n\n#### Caretaker (1 Post – Pay Level 6)\n- Graduation + at least 8 years of working experience in a reputed hotel, canteen, or guest house of a government office, university, or autonomous institution.\n\n### 10. University Guest House\n\n#### Cook (1 Post – Pay Level 2)\n- 10th Class pass + ITI Trade Certificate in Bakery and Confectionery (1 year) OR Diploma in Cookery + 3 years of cooking/catering experience in educational guest houses or 3-star hotels.\n\n### 11. Sanitation Unit\n\n#### Sanitary Inspector (1 Post – Pay Level 6)\n- Graduation + Sanitary Inspector/Supervisor Certificate + at least 2 years of experience in a recognized municipality or Public Health Department. Knowledge of Hindi and Urdu.\n\n## Jamia Millia Islamia Age Limit 2026\n\nThe upper age limit is generally **40 years** for most advertised administrative and non-teaching positions. Some senior deputation and tenure posts have a preferred age limit below 56 years:\n\n| Post Category | Prescribed Age Limit |\n| :--- | :--- |\n| Most Administrative & Non-Teaching Posts | **40 Years** |\n| Internal Audit Officer | Preferably below 56 Years |\n| Superintendent Engineer (Civil) | Preferably below 56 Years |\n| Executive Engineer (Civil) | Preferably below 56 Years |\n\n- **Crucial Date for Age Calculation**: **11 December 2026** (the online application closing date).\n\n### Age Relaxation\nRelaxation in the upper age limit is admissible to reserved categories as per Government of India rules:\n- **SC / ST**: 5 Years\n- **OBC (Non-Creamy Layer - Central List)**: 3 Years\n- **PwBD**: 10 Years (up to 15 years for SC/ST and 13 years for OBC)\n- **Ex-Servicemen**: As per Central Government guidelines\n- **Regular JMI Employees**: No upper age limit, provided they have completed at least three years of regular continuous service by the closing date.\n\n### Educational Marks Relaxation\nA relaxation of 5 percentage points (from 55% to 50%) at Graduate or Master's level is provided to SC, ST, PwBD, and OBC (Non-Creamy Layer) candidates.\n\n## Jamia Millia Islamia Salary Matrix 2026\n\nSelected candidates will receive basic pay as per the **7th Central Pay Commission (CPC)** Pay Matrix, along with Dearness Allowance (DA), House Rent Allowance (HRA), Transport Allowance (TA), and medical facilities applicable to Central University employees:\n\n| Pay Level (7th CPC) | Basic Pay Scale | Applicable Posts (Examples) |\n| :---: | :--- | :--- |\n| **Level 1** | ₹18,000 – ₹56,900 | Wireman, Beldar, Mate, Dresser, Medical Attendant, Chair Side Attendant |\n| **Level 2** | ₹19,900 – ₹63,200 | Hindi Typist, Urdu Typist, Electrician, Plumber, Carpenter, Whitewasher, Mason, Cook |\n| **Level 3** | ₹21,700 – ₹69,100 | Horticulture Assistant |\n| **Level 4** | ₹25,500 – ₹81,100 | Upper Division Clerk (UDC), Land Record Keeper, Store Keeper |\n| **Level 5** | ₹29,200 – ₹92,300 | Pharmacist, Garden Supervisor, Photographer |\n| **Level 6** | ₹35,400 – ₹1,12,400 | Assistant, Professional Assistant, Video Editor, Caretaker, Sanitary Inspector, Land Record Superintendent |\n| **Level 7** | ₹44,900 – ₹1,42,400 | Section Officer, Accountant, Garden Superintendent |\n| **Level 10** | ₹56,100 – ₹1,77,500 | Assistant Registrar, Assistant Finance Officer |\n| **Level 11** | ₹67,700 – ₹2,08,700 | Executive Engineer (Civil) |\n| **Level 12** | ₹78,800 – ₹2,09,200 | Internal Audit Officer |\n| **Level 13** | ₹1,23,100 – ₹2,15,900 | Superintendent Engineer (Civil) |\n\n## Jamia Millia Islamia Application Fee 2026\n\nThe non-refundable application fee varies based on the group and pay level of the post:\n\n### Group A Posts (Pay Level 10 and Above)\n| Category | Application Fee |\n| :--- | :---: |\n| General / Unreserved (UR) & OBC | **₹1,000** |\n| SC / ST | **₹500** |\n| Persons with Benchmark Disabilities (PwBD) | **Nil (Exempted)** |\n\n### Group B and C Posts (Pay Level 7 and Below)\n| Category | Application Fee |\n| :--- | :---: |\n| General / Unreserved (UR) & OBC | **₹700** |\n| SC / ST | **₹350** |\n| Persons with Benchmark Disabilities (PwBD) | **Nil (Exempted)** |\n\n*Payment mode: Online payment via Net Banking, Debit Card, Credit Card, or UPI.*\n\n## Jamia Millia Islamia Selection Process 2026\n\nSelection for non-teaching posts at Jamia Millia Islamia is conducted in accordance with the university's Cadre Recruitment Rules (CRR):\n\n1. **Written Examination**: Multiple-choice or descriptive test assessing general knowledge, English/Hindi language, reasoning, mathematical ability, and domain knowledge relevant to the post.\n2. **Skill / Typing Test**: Mandatory for clerical and ministerial positions:\n   - **Hindi Typist**: Minimum 30 WPM in Hindi.\n   - **Urdu Typist**: Minimum 30 WPM in Urdu.\n   - **Upper Division Clerk (UDC)**: 35 WPM in English OR 30 WPM in Hindi/Urdu.\n3. **Trade Test**: Practical evaluation of technical skills for posts like Electrician, Plumber, Carpenter, Mason, Wireman, Cook, and Video Editor.\n4. **Interview**: For Group A positions (including Assistant Registrar, Assistant Finance Officer, etc.).\n5. **Document Verification & Medical Fitness**: Verification of original marksheets, caste certificates, experience records, and medical examination.\n\n> **Screening & Shortlisting**: Possessing minimum eligibility does not confer automatic right to be called for the examination or interview. JMI may constitute a Screening Committee to shortlist candidates based on higher academic records or relevant experience.\n\n## Mandatory Application Conditions & Guidelines\n\n### 1. Separate Application for Multiple Posts\nCandidates wishing to apply for more than one position must register and submit **separate online application forms and pay the prescribed fee for each post individually**.\n\n### 2. No Objection Certificate (NOC)\nCandidates employed in Central/State Government, autonomous organisations, or Public Sector Undertakings (PSUs) must apply through the proper channel and enclose a valid **NOC (Annexure A)** with the hard copy.\n\n### 3. Physical Hard Copy Submission Is Compulsory\nMerely completing the online application is **NOT sufficient**. Candidates must print out the filled application form on A4-size paper and:\n- Affix their signature in blue/black ink.\n- Paste a recent passport-size photograph.\n- Attach self-attested photocopies of all educational marksheets, degrees, and certificates.\n- Attach experience certificates showing designation, pay scale, and exact duration.\n- Number all attachments serially.\n- Send by **Speed Post, Registered Post, Courier, or Hand Delivery** to reach by **21 December 2026**.\n\n### Special Exemption for Previous Applicants (Advt No. 02/2025-26 NT)\nCandidates who previously applied under Advt No. 02/2025-26 (NT) dated 2 December 2025 for posts marked with an asterisk (*) must **apply afresh online**. However, they are **exempted from paying the application fee** upon attaching:\n- Original acknowledgment receipt of the earlier application; OR\n- Valid Indian Post / courier booking slip.\n- These posts are: *Land Record Superintendent, Land Record Keeper, Internal Audit Officer, Superintendent Engineer (Civil), Executive Engineer (Civil), and Cook.*\n\n## Documents Required for Application\n\nPrepare self-attested copies of the following documents before submission:\n1. Matriculation (10th) Marksheet & Certificate (proof of date of birth).\n2. Senior Secondary (12th) Marksheet & Certificate.\n3. Bachelor's Degree and Year-wise/Semester-wise Marksheets.\n4. Master's Degree (wherever applicable).\n5. ITI Trade Certificate / Technical Diploma / B.Pharm / B.Lib. degree certificates.\n6. Experience Certificates clearly mentioning post held, pay level, and exact dates of service.\n7. Category Certificate (SC/ST/OBC-NCL/EWS) in Central Government format.\n8. PwBD Certificate from a competent medical authority.\n9. Ex-Servicemen discharge book / NOC, if applicable.\n10. Employer's NOC (Annexure A) for in-service candidates.\n11. Recent passport-sized color photograph and clear signature.\n12. Previous application receipt / postal slip (for fee exemption, if applicable).\n\n## How to Apply for JMI Non Teaching Recruitment 2026\n\nThe application process consists of two sequential steps:\n\n### Step 1: Online Application Submission\n1. Visit the official JMI recruitment portal: **[jobs.jmi.ac.in](https://jobs.jmi.ac.in/)**.\n2. Locate **Advertisement No. 01/2026-27 (NT)** and review instructions.\n3. Complete new user registration with your active email ID and mobile number.\n4. Log in and select the desired post from the active recruitment list.\n5. Fill in personal details, educational qualifications, and work experience accurately.\n6. Upload scanned copies of your photograph, signature, and necessary certificates.\n7. Pay the application fee online through the payment gateway.\n8. Verify all entries and click **Submit**.\n9. Download and print the generated PDF application form.\n\n### Step 2: Preparing and Dispatching the Hard Copy\n1. Print the downloaded application form on standard white A4 sheets.\n2. Sign in the designated space and paste your recent passport-size photograph.\n3. Assemble all self-attested certificates, degrees, marksheets, and experience letters.\n4. Serially number all supporting documents and cross-reference them in the form.\n5. Place the completed form and documents in an envelope marked:  \n   **\"Application for the post of [Post Name], Advt. No. 01/2026-27 (NT)\"**.\n6. Send by Speed Post, Courier, or submit in person to:\n\n> **The Recruitment & Promotion Section**  \n> 2nd Floor, Registrar's Office  \n> Jamia Millia Islamia, Jamia Nagar  \n> New Delhi – 110025  \n\n- **Last Date for Receipt of Hard Copy**: **21 December 2026 (5:00 PM)**.\n\n## Important Dates\n\n| Event | Date |\n| :--- | :--- |\n| Official Notification Issued | 10 November 2026 |\n| Online Application Opening Date | 12 November 2026 |\n| **Last Date for Online Application** | **11 December 2026 (11:59 PM)** |\n| **Last Date for Hard Copy Receipt** | **21 December 2026 (5:00 PM)** |\n| Written Test / Skill Test Schedule | To Be Announced |\n| Interview Dates | To Be Announced |\n\n## Important Links\n\n| Description | Official Link |\n| :--- | :--- |\n| **JMI Online Application Portal** | [jobs.jmi.ac.in](https://jobs.jmi.ac.in/) |\n| **Official Notification PDF** | [Download JMI Advt 01/2026-27 NT](https://www.jmi.ac.in/) |\n| **Jamia Millia Islamia Official Website** | [www.jmi.ac.in](https://www.jmi.ac.in/) |\n| **Hindi Typing Practice for JMI Typist Exam** | [TypeHindi Free Practice Hub](https://www.typehindi.in/practice) |\n| **Typing Speed Test Simulator (30 & 35 WPM)** | [TypeHindi Typing Test Engine](https://www.typehindi.in/test) |\n\n## Frequently Asked Questions (FAQs)\n\n### 1. How many total vacancies are available in JMI Non Teaching Recruitment 2026?\nThere are 85 vacancies across 35 post designations, including Assistant Registrar, UDC, Hindi Typist, Urdu Typist, Accountant, Electrician, and Pharmacist.\n\n### 2. What is the advertisement number of this JMI recruitment?\nThe advertisement number is **01/2026-27 (NT)**, dated 10 November 2026.\n\n### 3. When does the online application process start and close?\nThe online registration window opens on **12 November 2026** and closes on **11 December 2026**.\n\n### 4. Is it mandatory to send a hard copy of the application form?\n**Yes, absolutely.** Sending a printed copy of the signed online application form along with self-attested copies of all documents to the university by **21 December 2026** is mandatory.\n\n### 5. Where should the hard copy of the application be submitted?\nIt must be sent by Speed Post/Courier or submitted by hand to:  \n*Recruitment & Promotion Section, 2nd Floor, Registrar's Office, Jamia Millia Islamia, Jamia Nagar, New Delhi – 110025*.\n\n### 6. What is the required typing speed for the Hindi Typist post?\nCandidates must possess a minimum Hindi typing speed of **30 words per minute (WPM)** on computer.\n\n### 7. What is the typing speed required for the Urdu Typist post?\nCandidates must possess a minimum Urdu typing speed of **30 words per minute (WPM)** on computer.\n\n### 8. What is the typing speed requirement for Upper Division Clerk (UDC)?\nCandidates need an English typing speed of **35 WPM** OR a Hindi/Urdu typing speed of **30 WPM**, along with proficiency in computer operations.\n\n### 9. What is the general age limit for JMI Non Teaching posts?\nThe upper age limit is generally **40 years** as on 11 December 2026. Certain technical and engineering deputation posts prefer candidates below 56 years. Regular age relaxations apply for SC, ST, OBC, PwBD, and Ex-Servicemen.\n\n### 10. What is the application fee for Group A vs Group B/C posts?\nFor Group A positions (Level 10 and above), the fee is ₹1,000 for UR/OBC and ₹500 for SC/ST. For Group B & C positions (Level 7 and below), the fee is ₹700 for UR/OBC and ₹350 for SC/ST. PwBD candidates are exempted from fees.\n\n### 11. Can candidates apply for multiple posts?\nYes, but candidates must submit a separate online application, pay separate fees, and send separate hard-copy dossiers for each post.\n\n### 12. Are candidates who applied under Advt No. 02/2025-26 exempt from fee?\nCandidates who applied for asterisk-marked posts under Advt. 02/2025-26 must apply afresh online, but can claim fee exemption by attaching their original previous acknowledgment receipt or postal slip.\n\n### 13. What is the salary range for Jamia Millia Islamia non-teaching employees?\nSalaries range from Pay Level 1 (₹18,000 – ₹56,900) up to Pay Level 13 (₹1,23,100 – ₹2,15,900), plus central government DA, HRA, and allowances.\n\n### 14. Where can I practice Hindi and English typing for JMI Clerk & Typist exams?\nYou can practice on **[TypeHindi.in](https://www.typehindi.in/)** for free. It provides realistic exam timer modes, Mangal InScript keyboard practice, and real-time WPM calculation conforming to official exam standards.\n\n## Final Words\n\nThe **Jamia Millia Islamia Non Teaching Recruitment 2026** represents an exceptional opportunity to secure permanent employment in one of India's top-ranked Central Universities in New Delhi. With posts ranging from clerical typists and accountants to technical staff and administrative officers, applicants across diverse educational backgrounds can find suitable roles.\n\nEnsure that you complete your online registration at **jobs.jmi.ac.in** before **11 December 2026**, and immediately dispatch your signed hard copy with all verified documents so that it reaches JMI by **21 December 2026**. Aspirants targeting typist and clerk positions should start daily speed building on [TypeHindi.in](https://www.typehindi.in/) to easily achieve the required 30–35 WPM benchmark."
},
  {
    "slug": "rrc-nr-apprentice-recruitment-2026",
    "titleEn": "RRC NR Act Apprentice Recruitment 2026: Apply Online for 4,651 Railway Apprentice Posts",
    "title": "RRC NR एक्ट अपरेंटिस भर्ती 2026: 4,651 रेलवे अपरेंटिस पदों पर ऑनलाइन आवेदन करें",
    "date": "07 नवंबर, 2026",
    "dateEn": "07 November, 2026",
    "categoryEn": "Government Jobs",
    "category": "सरकारी नौकरी",
    "tags": [
      "RRC NR",
      "Northern Railway",
      "Railway Apprentice",
      "Act Apprentice 2026",
      "Railway Jobs",
      "10th Pass ITI Jobs",
      "Government Jobs 2026"
    ],
    "excerptEn": "Railway Recruitment Cell (RRC), Northern Railway has announced 4,651 Act Apprentice training slots across Lucknow, Delhi, Ambala, Firozpur, Moradabad and Jammu clusters. 10th Pass with 50% marks & ITI eligible. Apply online from 11 Nov to 11 Dec 2026.",
    "excerpt": "रेलवे भर्ती सेल (RRC), उत्तर रेलवे ने लखनऊ, दिल्ली, अंबाला, फिरोजपुर, मुरादाबाद और जम्मू क्लस्टरों में 4,651 एक्ट अपरेंटिस पदों पर अधिसूचना जारी की है। 10वीं में 50% अंक एवं ITI पास पात्र। 11 नवंबर से 11 दिसंबर 2026 तक ऑनलाइन आवेदन करें।",
    "image": "/images/rrc-nr-apprentice-recruitment-2026.jpg",
    "contentEn": "The Railway Recruitment Cell (RRC), Northern Railway, has released a comprehensive notification for the engagement of Act Apprentices under the Apprentices Act, 1961. A total of **4,651 apprenticeship training slots** are available across six major railway clusters: Lucknow, Delhi, Firozpur, Moradabad, Ambala and Jammu.\n\nThe recruitment is open to candidates who have passed Class 10 (Matriculation) with at least 50% aggregate marks and possess a National Trade Certificate (ITI) in the relevant trade issued by or affiliated with NCVT or SCVT.\n\nThe online application process will begin on **11 November 2026**. Eligible candidates can submit their applications until **11 December 2026 at 11:59 PM** through the official Northern Railway recruitment portal.\n\nSelection will be based entirely on a merit list prepared using the average percentage of marks obtained in Class 10 and ITI. There is strictly **no written examination and no interview** for this recruitment.\n\n## RRC NR Apprentice Recruitment 2026: Overview\n\n| Particulars | Details |\n| :--- | :--- |\n| **Recruiting Organisation** | Railway Recruitment Cell, Northern Railway (RRC NR) |\n| **Railway Zone** | Northern Railway |\n| **Post Name** | Act Apprentice |\n| **Notification Number** | RRC/NR/03/2026/Act Apprentice |\n| **Notification Date** | 6 November 2026 |\n| **Total Training Slots** | 4,651 Posts |\n| **Training Location** | Six Northern Railway clusters (LKO, DLI, FZR, MB, UMB, Jammu) |\n| **Application Mode** | Online |\n| **Educational Qualification** | Class 10 with 50% aggregate marks + ITI in relevant trade |\n| **Age Limit** | 15–24 Years (as on 11 December 2026) |\n| **Selection Process** | Merit List (10th + ITI marks), Document Verification & Medical Exam |\n| **Written Examination** | Not Applicable (No Exam) |\n| **Interview** | Not Applicable (No Interview) |\n| **Application Start Date** | 11 November 2026 |\n| **Last Date to Apply** | 11 December 2026 (11:59 PM) |\n| **Official Website** | [rrcnr.org](https://www.rrcnr.org/) |\n\n## RRC Northern Railway Apprentice Vacancy 2026\n\nNorthern Railway has announced 4,651 apprenticeship slots across six administrative clusters. Candidates must select an appropriate cluster and unit according to the availability of their ITI trade.\n\n### Cluster-Wise Vacancy Details\n\n| Cluster | Vacancies |\n| :--- | :--- |\n| **Lucknow (LKO)** | 1,525 |\n| **Delhi (DLI)** | 1,312 |\n| **Ambala (UMB)** | 979 |\n| **Firozpur (FZR)** | 740 |\n| **Moradabad (MB)** | 63 |\n| **Jammu** | 32 |\n| **Total Vacancies** | **4,651** |\n\n*Lucknow accounts for the highest number of training slots (1,525), followed by Delhi (1,312) and Ambala (979).*\n\n### Category-Wise Vacancy Details\n\nThe category-wise distribution of the 4,651 training slots is as follows:\n\n| Category | Vacancies |\n| :--- | :--- |\n| **Unreserved (UR)** | 2,433 |\n| **Scheduled Caste (SC)** | 755 |\n| **Scheduled Tribe (ST)** | 300 |\n| **Other Backward Classes (OBC)** | 1,163 |\n| **Total** | **4,651** |\n\n> **Note:** The notification's vacancy summary does not show a separate EWS vacancy column. PwBD and Ex-Servicemen reservations are applied horizontally within the notified vacancies as per government norms.\n\n### Cluster-Wise Category Distribution\n\n| Cluster | UR | SC | ST | OBC | Total |\n| :--- | :---: | :---: | :---: | :---: | :---: |\n| **Lucknow** | 774 | 229 | 112 | 410 | **1,525** |\n| **Delhi** | 668 | 198 | 94 | 352 | **1,312** |\n| **Firozpur** | 442 | 169 | 12 | 117 | **740** |\n| **Moradabad** | 32 | 9 | 6 | 16 | **63** |\n| **Ambala** | 501 | 144 | 72 | 262 | **979** |\n| **Jammu** | 16 | 6 | 4 | 6 | **32** |\n| **Total** | **2,433** | **755** | **300** | **1,163** | **4,651** |\n\n> **Important:** Candidates must choose a cluster and unit where training slots are available for their specific ITI trade. Selecting a unit without a vacancy for the relevant trade may lead to automatic rejection of the application.\n\n## Available ITI Trades\n\nThe apprenticeship notification covers multiple engineering and non-engineering trades across Northern Railway workshops and divisions:\n\n- Fitter\n- Electrician\n- Welder (Gas and Electric)\n- Mechanic (Diesel)\n- Carpenter\n- Refrigeration and Air Conditioning Mechanic\n- Stenographer (English)\n- Stenographer (Hindi)\n- Machinist\n- Data Entry Operator\n- Computer Operator and Programming Assistant (COPA)\n- Electronics Mechanic\n- Electronics Mechanic (Signal)\n- Wireman\n- Painter (General)\n- Turner\n- Blacksmith\n- Mechanic (Motor Vehicle)\n- Mason (Building Constructor)\n- Instrument Mechanic\n\nThe exact availability of a trade differs by cluster, division, workshop and unit. Candidates must review Annexure A of the official notification before locking in their preferred unit.\n\n## RRC NR Apprentice Recruitment 2026: Eligibility Criteria\n\n### Educational Qualification\n\n- Candidates must have passed **Class 10 (Matriculation/SSC)** under the 10+2 examination system from a recognised education board.\n- A minimum of **50% aggregate marks** in Class 10 is mandatory.\n- Candidates must possess a **National Trade Certificate (ITI)** in the relevant trade issued by or affiliated with NCVT or SCVT.\n- Both the Class 10 qualification and the relevant ITI certificate must have been completed on or before **6 November 2026**.\n- Candidates whose Class 10 or ITI results were awaited on the qualification cut-off date are strictly not eligible.\n\n*Note: Possessing only a Class 10 certificate is not sufficient. An ITI qualification in the relevant trade is compulsory.*\n\n### Age Limit (As on 11 December 2026)\n\n| Particulars | Age Criteria |\n| :--- | :--- |\n| **Minimum Age** | 15 Years |\n| **Maximum Age** | 24 Years |\n| **Age Calculation Date** | 11 December 2026 |\n\n#### Upper Age Relaxation\nUpper age relaxation is available for eligible reserved-category candidates as per government guidelines:\n\n| Category | Upper Age Relaxation |\n| :--- | :--- |\n| **SC / ST** | 5 Years (Up to 29 Years) |\n| **OBC (Non-Creamy Layer)** | 3 Years (Up to 27 Years) |\n| **Persons with Benchmark Disabilities (PwBD)** | 10 Years (Up to 34 Years) |\n| **Ex-Servicemen** | Service period + 3 Years |\n\nCandidates claiming age relaxation must upload and provide the prescribed valid community/category certificates during application and document verification.\n\n## Application Fee\n\n| Category | Application Fee |\n| :--- | :--- |\n| **General / OBC / EWS (Male)** | ₹100 |\n| **SC / ST Candidates** | Nil (Exempted) |\n| **PwBD Candidates** | Nil (Exempted) |\n| **All Women Candidates** | Nil (Exempted) |\n\n- The application fee is non-refundable.\n- Fee payment must be completed online through net banking, debit card, credit card, or UPI before final submission.\n\n## Stipend Details\n\nSelected candidates will receive a monthly stipend during their apprenticeship training in accordance with the Apprenticeship Rules and Ministry of Railways directives.\n\nAct Apprentices are engaged for vocational training. This is a skill development programme and not a permanent salaried Railway appointment. Completion of apprenticeship does not automatically guarantee permanent employment in Indian Railways. However, Course Completed Act Apprentices (CCAAs) trained in Railway establishments receive significant benefits, including 20% reservation and age relaxation in Railway Level-1 (Group D) recruitments.\n\n## Selection Process & Merit List Preparation\n\nThe selection process for RRC Northern Railway Act Apprentice Recruitment 2026 is entirely merit-based:\n\n1. **Screening of Applications**\n2. **Merit List Preparation**\n3. **Document Verification (DV)**\n4. **Medical Fitness Verification**\n\n### How Merit Percentage is Calculated\n\nThe merit list is prepared taking the average percentage of marks obtained in both Class 10 and ITI with equal 50:50 weightage:\n\n$\text{Merit Percentage} = \frac{\text{Class 10 Percentage} + \text{ITI Percentage}}{2}$\n\n*Example: If a candidate scored 80% in Class 10 and 90% in ITI, the combined merit score will be:*\n\n$\frac{80 + 90}{2} = 85%$\n\n### Tie-Breaking Rules\nIf two or more candidates obtain the exact same merit percentage:\n1. The candidate older in age will be placed higher in the merit list.\n2. If the date of birth is also identical, the candidate who passed the Matriculation examination earlier will be preferred.\n\n## Documents Required for Application and Verification\n\nKeep the following documents scanned and ready:\n\n- Class 10 (Matriculation) marksheet and certificate.\n- ITI trade marksheet (all semesters/consolidated) and National Trade Certificate (NCVT/SCVT).\n- Proof of Date of Birth (Class 10 certificate or Birth Certificate).\n- Aadhaar Card or valid Government Photo ID.\n- Recent passport-size colour photograph (light background).\n- Clear scanned signature in black ink.\n- Caste certificate for SC/ST/OBC (in Central Government format), if applicable.\n- Disability certificate (PwBD), if applicable.\n- Ex-Servicemen discharge book and service documents, where relevant.\n- Online application confirmation page and fee receipt.\n\n## How to Apply Online for RRC NR Apprentice Recruitment 2026\n\nThe online application window will be active from **11 November 2026** on the official RRC NR portal:\n\n1. **Visit Official Portal:** Go to the official website at [rrcnr.org](https://www.rrcnr.org/).\n2. **Open Notification:** Click on the Act Apprentice Recruitment 2026 (Advt No. RRC/NR/03/2026/Act Apprentice) link.\n3. **New Registration:** Complete initial registration with your name, date of birth, mobile number, and valid email address.\n4. **Login:** Use your generated registration credentials to log in.\n5. **Enter Educational Details:** Enter your Class 10 and ITI marks accurately.\n6. **Select Cluster & Unit:** Choose the appropriate cluster (Lucknow, Delhi, Ambala, Firozpur, Moradabad, or Jammu) and trade unit carefully based on vacancy availability.\n7. **Upload Documents:** Upload your photograph, signature, and required certificates in the specified formats and file sizes.\n8. **Fee Payment:** Pay the application fee of ₹100 online (if applicable).\n9. **Review & Submit:** Double-check all entries in preview mode before final submission.\n10. **Save Acknowledgement:** Submit the form and save or print the confirmation slip for your records.\n\n## Important Dates\n\n| Event | Date |\n| :--- | :--- |\n| **Notification Release Date** | 6 November 2026 |\n| **Online Application Start Date** | 11 November 2026 |\n| **Last Date for Online Application** | 11 December 2026 (11:59 PM) |\n| **Application Fee Payment Deadline** | 11 December 2026 (11:59 PM) |\n| **Merit List Release** | To Be Announced |\n| **Document Verification Schedule** | To Be Announced |\n\n## Important Links\n\n| Description | Link |\n| :--- | :--- |\n| **Online Application Portal** | [RRC Northern Railway Application Portal](https://www.rrcnr.org/) |\n| **Official Notification PDF** | [View Act Apprentice Notification PDF](https://rrcnr.org/downloads/Notification_Act_Appretice_2026.pdf) |\n| **Official Recruitment Website** | [Northern Railway RRC Portal](https://www.rrcnr.org/) |\n\n## Frequently Asked Questions (FAQs)\n\n**Q1. How many vacancies are available in RRC NR Apprentice Recruitment 2026?**  \nA total of 4,651 apprenticeship training slots have been announced across six Northern Railway clusters.\n\n**Q2. What is the last date to apply for Northern Railway Apprentice Recruitment 2026?**  \nThe last date for online applications is 11 December 2026 at 11:59 PM.\n\n**Q3. When will the online application process begin?**  \nThe online application process begins on 11 November 2026.\n\n**Q4. What is the educational qualification for RRC NR Apprentice Recruitment?**  \nCandidates must have passed Class 10 with at least 50% aggregate marks and possess an ITI certificate in the relevant trade from an NCVT- or SCVT-recognised institution.\n\n**Q5. What is the age limit for Northern Railway Apprentice Recruitment 2026?**  \nThe minimum age is 15 years and the maximum age is 24 years as on 11 December 2026, with applicable age relaxations for reserved categories.\n\n**Q6. How many vacancies are available in the Lucknow and Delhi clusters?**  \nThe Lucknow cluster has 1,525 vacancies, and the Delhi cluster has 1,312 vacancies.\n\n**Q7. Is there any written examination for RRC NR Apprentice Recruitment 2026?**  \nNo. Candidates are selected purely on the basis of a merit list prepared from Class 10 and ITI marks. There is no written examination or interview.\n\n**Q8. How is the merit list calculated?**  \nThe average percentage of Class 10 and ITI marks is calculated with equal 50:50 weightage: (10th% + ITI%) / 2.\n\n**Q9. What is the application fee?**  \nThe application fee is ₹100 for General, OBC, and EWS male candidates. SC, ST, PwBD, and all female candidates are exempted from paying the fee.\n\n**Q10. What stipend will selected apprentices receive?**  \nSelected apprentices will receive a monthly stipend during training as prescribed under the Apprenticeship Rules.\n\n**Q11. Can candidates from other states apply?**  \nYes, candidates from all states across India can apply, provided they meet the educational, trade, and age eligibility criteria.\n\n**Q12. Does completing this apprenticeship guarantee a Railway job?**  \nNo, apprenticeship is a training engagement. However, Railway apprentices (CCAAs) get 20% reservation and age relaxations in Railway Level-1 (Group D) recruitments.\n\n**Q13. Where can candidates view and access the official notification?**  \nCandidates can view and access the official notification directly on the official website at [rrcnr.org](https://www.rrcnr.org/).\n\n## Final Words\n\nRRC Northern Railway Apprentice Recruitment 2026 offers a massive opportunity with 4,651 apprenticeship training slots across six major clusters. Candidates possessing Class 10 with 50% marks and an ITI certificate in a relevant trade can secure valuable vocational training in Indian Railways without any entrance exam.\n\nBefore submitting your form, make sure your trade is available in your preferred cluster and unit. Complete your application on [rrcnr.org](https://www.rrcnr.org/) between **11 November 2026** and **11 December 2026** and keep your documents ready for merit list verification.",
    "content": "रेलवे भर्ती सेल (RRC), उत्तर रेलवे (Northern Railway) ने शिक्षुता अधिनियम, 1961 के तहत एक्ट अपरेंटिस के पदों पर प्रशिक्षण हेतु आधिकारिक अधिसूचना जारी की है। इसके तहत छह प्रमुख रेलवे क्लस्टरों—लखनऊ, दिल्ली, फिरोजपुर, मुरादाबाद, अंबाला और जम्मू—में कुल **4,651 अपरेंटिस प्रशिक्षण स्लॉट** उपलब्ध हैं।\n\nयह भर्ती उन सभी अभ्यर्थियों के लिए एक शानदार अवसर है जिन्होंने न्यूनतम 50% अंकों के साथ 10वीं कक्षा (मैट्रिक) उत्तीर्ण की है और संबंधित ट्रेड में NCVT या SCVT से मान्यता प्राप्त ITI प्रमाण पत्र रखते हैं।\n\nऑनलाइन आवेदन प्रक्रिया **11 नवंबर 2026** से शुरू होगी तथा पात्र उम्मीदवार **11 दिसंबर 2026 (रात 11:59 बजे)** तक उत्तर रेलवे की आधिकारिक भर्ती वेबसाइट के माध्यम से आवेदन कर सकते हैं।\n\nचयन प्रक्रिया 10वीं और ITI में प्राप्त अंकों के औसत प्रतिशत के आधार पर तैयार मेरिट सूची के अनुसार होगी। इस भर्ती में **कोई लिखित परीक्षा या साक्षात्कार नहीं होगा**।\n\n## RRC NR अपरेंटिस भर्ती 2026: संक्षिप्त विवरण\n\n| विवरण | जानकारी |\n| :--- | :--- |\n| **भर्ती संगठन** | रेलवे भर्ती सेल, उत्तर रेलवे (RRC NR) |\n| **रेलवे जोन** | उत्तर रेलवे (Northern Railway) |\n| **पद का नाम** | एक्ट अपरेंटिस (Act Apprentice) |\n| **अधिसूचना संख्या** | RRC/NR/03/2026/Act Apprentice |\n| **अधिसूचना जारी तिथि** | 6 नवंबर 2026 |\n| **कुल रिक्तियां / स्लॉट** | 4,651 पद |\n| **प्रशिक्षण स्थल** | 6 क्लस्टर (लखनऊ, दिल्ली, अंबाला, फिरोजपुर, मुरादाबाद, जम्मू) |\n| **आवेदन माध्यम** | ऑनलाइन |\n| **शैक्षणिक योग्यता** | 10वीं (न्यूनतम 50% अंक) + संबंधित ट्रेड में ITI |\n| **आयु सीमा** | 15 से 24 वर्ष (11 दिसंबर 2026 के अनुसार) |\n| **चयन प्रक्रिया** | मेरिट सूची (10वीं + ITI अंक), दस्तावेज सत्यापन व मेडिकल |\n| **लिखित परीक्षा** | कोई परीक्षा नहीं (सीधी मेरिट भर्ती) |\n| **साक्षात्कार** | कोई साक्षात्कार नहीं |\n| **आवेदन प्रारंभ तिथि** | 11 नवंबर 2026 |\n| **आवेदन की अंतिम तिथि** | 11 दिसंबर 2026 (रात 11:59 बजे तक) |\n| **आधिकारिक वेबसाइट** | [rrcnr.org](https://www.rrcnr.org/) |\n\n## क्लस्टरवार रिक्तियों का विवरण (Cluster-Wise Vacancy)\n\nउत्तर रेलवे ने 6 प्रमुख क्लस्टरों में 4,651 प्रशिक्षण पदों की घोषणा की है:\n\n| क्लस्टर | कुल स्लॉट |\n| :--- | :--- |\n| **लखनऊ (LKO)** | 1,525 |\n| **दिल्ली (DLI)** | 1,312 |\n| **अंबाला (UMB)** | 979 |\n| **फिरोजपुर (FZR)** | 740 |\n| **मुरादाबाद (MB)** | 63 |\n| **जम्मू** | 32 |\n| **कुल पद** | **4,651** |\n\n*लखनऊ क्लस्टर में सर्वाधिक 1,525 पद हैं, इसके बाद दिल्ली में 1,312 और अंबाला में 979 पद हैं।*\n\n## श्रेणीवार रिक्तियों का विवरण (Category-Wise Vacancy)\n\n| श्रेणी | रिक्त पद |\n| :--- | :--- |\n| **अनारक्षित (UR)** | 2,433 |\n| **अनुसूचित जाति (SC)** | 755 |\n| **अनुसूचित जनजाति (ST)** | 300 |\n| **अन्य पिछड़ा वर्ग (OBC)** | 1,163 |\n| **कुल रिक्तियां** | **4,651** |\n\n### क्लस्टरवार श्रेणीवार वितरण\n\n| क्लस्टर | UR | SC | ST | OBC | कुल पद |\n| :--- | :---: | :---: | :---: | :---: | :---: |\n| **लखनऊ** | 774 | 229 | 112 | 410 | **1,525** |\n| **दिल्ली** | 668 | 198 | 94 | 352 | **1,312** |\n| **फिरोजपुर** | 442 | 169 | 12 | 117 | **740** |\n| **मुरादाबाद** | 32 | 9 | 6 | 16 | **63** |\n| **अंबाला** | 501 | 144 | 72 | 262 | **979** |\n| **जम्मू** | 16 | 6 | 4 | 6 | **32** |\n| **कुल** | **2,433** | **755** | **300** | **1,163** | **4,651** |\n\n## प्रमुख ITI ट्रेड्स (Available Trades)\n\nउत्तर रेलवे की कार्यशालाओं और मंडलों में प्रमुख ट्रेड्स निम्नलिखित हैं:\n- फिटर (Fitter)\n- इलेक्ट्रीशियन (Electrician)\n- वेल्डर (गैस एवं इलेक्ट्रिक)\n- मैकेनिक डीजल\n- कारपेंटर\n- रेफ्रिजरेशन एवं एयर कंडीशनिंग मैकेनिक\n- स्टेनोग्राफर (अंग्रेजी व हिंदी)\n- मशीनिस्ट\n- डाटा एंट्री ऑपरेटर / COPA\n- इलेक्ट्रॉनिक्स मैकेनिक\n- वायरमैन\n- टर्नर, पेंटर, आदि।\n\n*उम्मीदवार आवेदन करने से पूर्व आधिकारिक अधिसूचना के अनुलग्नक-ए में अपने ट्रेड की क्लस्टरवार रिक्ति अवश्य जांच लें।*\n\n## शैक्षणिक योग्यता एवं आयु सीमा\n\n### शैक्षणिक योग्यता\n- किसी मान्यता प्राप्त बोर्ड से न्यूनतम **50% कुल अंकों** के साथ 10वीं कक्षा (मैट्रिक) उत्तीर्ण।\n- NCVT या SCVT से मान्यता प्राप्त संस्थान से संबंधित ट्रेड में **ITI प्रमाण पत्र**।\n- 10वीं और ITI दोनों योग्यताएं **6 नवंबर 2026** तक पूर्ण होनी अनिवार्य हैं।\n\n### आयु सीमा (11 दिसंबर 2026 के अनुसार)\n- न्यूनतम आयु: **15 वर्ष**\n- अधिकतम आयु: **24 वर्ष**\n- **आयु में छूट:** SC/ST को 5 वर्ष, OBC (NCL) को 3 वर्ष तथा दिव्यांग (PwBD) को 10 वर्ष की छूट देय होगी। भूतपूर्व सैनिकों को नियमानुसार छूट मिलेगी।\n\n## आवेदन शुल्क (Application Fee)\n\n| श्रेणी | आवेदन शुल्क |\n| :--- | :--- |\n| **सामान्य / OBC / EWS (पुरुष)** | ₹100 |\n| **SC / ST अभ्यर्थी** | निःशुल्क (छूट) |\n| **दिव्यांग (PwBD) अभ्यर्थी** | निःशुल्क (छूट) |\n| **सभी महिला अभ्यर्थी** | निःशुल्क (छूट) |\n\n*आवेदन शुल्क का भुगतान ऑनलाइन (डेबिट कार्ड, क्रेडिट कार्ड, नेट बैंकिंग, यूपीआई) के माध्यम से किया जाएगा।*\n\n## चयन प्रक्रिया एवं मेरिट निर्धारण\n\nचयन पूरी तरह **मेरिट आधारित** है:\n1. 10वीं के प्रतिशत और ITI के प्रतिशत को 50:50 का समान भार देकर औसत प्रतिशत निकाला जाएगा:\n   $\text{मेरिट प्रतिशत} = \frac{\text{10वीं का प्रतिशत} + \text{ITI का प्रतिशत}}{2}$\n2. टाई होने की स्थिति में अधिक आयु वाले अभ्यर्थी को प्राथमिकता दी जाएगी।\n3. शॉर्टलिस्ट किए गए अभ्यर्थियों को दस्तावेज सत्यापन (DV) और मेडिकल फिटनेस हेतु बुलाया जाएगा।\n4. चयन प्रक्रिया में **कोई लिखित परीक्षा या इंटरव्यू नहीं है**।\n\n## आवश्यक दस्तावेज (Documents Required)\n\n- 10वीं कक्षा की अंकतालिका एवं प्रमाण पत्र (जन्म तिथि प्रमाण हेतु)।\n- ITI की अंकतालिका एवं NCVT/SCVT प्रमाण पत्र।\n- हाल ही में खींचा गया पासपोर्ट साइज रंगीन फोटो एवं हस्ताक्षर।\n- केंद्र सरकार के प्रारूप में जाति प्रमाण पत्र (SC/ST/OBC हेतु)।\n- दिव्यांगता प्रमाण पत्र / डिस्चार्ज बुक (यदि लागू हो)।\n\n## ऑनलाइन आवेदन कैसे करें (How to Apply Online)\n\n1. आधिकारिक वेबसाइट [rrcnr.org](https://www.rrcnr.org/) पर जाएं।\n2. **Act Apprentice Recruitment 2026** अधिसूचना लिंक खोलें।\n3. न्यू रजिस्ट्रेशन पर क्लिक कर अपना नाम, जन्म तिथि, मोबाइल नंबर व ईमेल दर्ज करें।\n4. लॉगिन करके 10वीं और ITI के अंक सावधानीपूर्वक भरें।\n5. अपने ITI ट्रेड के अनुसार क्लस्टर व यूनिट का चयन करें।\n6. फोटो, हस्ताक्षर व आवश्यक प्रमाण पत्र अपलोड करें।\n7. ऑनलाइन माध्यम से ₹100 शुल्क (यदि लागू हो) का भुगतान करें।\n8. फॉर्म को अंतिम रूप से सबमिट करें और रसीद सुरक्षित रख लें।\n\n## महत्वपूर्ण तिथियां (Important Dates)\n\n| कार्यक्रम | तिथि |\n| :--- | :--- |\n| **अधिसूचना जारी होने की तिथि** | 6 नवंबर 2026 |\n| **ऑनलाइन आवेदन प्रारंभ तिथि** | 11 नवंबर 2026 |\n| **ऑनलाइन आवेदन की अंतिम तिथि** | 11 दिसंबर 2026 (रात 11:59 बजे) |\n| **मेरिट सूची जारी होने की तिथि** | यथासमय घोषित की जाएगी |\n\n## महत्वपूर्ण आधिकारिक लिंक्स (Important Links)\n\n| विवरण | लिंक |\n| :--- | :--- |\n| **ऑनलाइन आवेदन पोर्टल** | [RRC उत्तर रेलवे पोर्टल](https://www.rrcnr.org/) |\n| **आधिकारिक अधिसूचना PDF** | [एक्ट अपरेंटिस अधिसूचना PDF देखें](https://rrcnr.org/downloads/Notification_Act_Appretice_2026.pdf) |\n| **आधिकारिक वेबसाइट** | [उत्तर रेलवे RRC](https://www.rrcnr.org/) |\n\n## निष्कर्ष\n\nउत्तर रेलवे में 4,651 एक्ट अपरेंटिस पदों पर भर्ती बिना किसी लिखित परीक्षा के सीधे 10वीं और ITI की मेरिट पर आधारित है। रेलवे में अपरेंटिस पूरी करने वाले अभ्यर्थियों को भविष्य में रेलवे ग्रुप-डी (Level-1) भर्तियों में 20% आरक्षण व आयु में छूट का विशेष लाभ मिलता है।\n\nपात्र अभ्यर्थी **11 नवंबर से 11 दिसंबर 2026** के मध्य [rrcnr.org](https://www.rrcnr.org/) पर अपना ऑनलाइन आवेदन अवश्य पूर्ण करें।"
  },
  {
    "slug": "derc-recruitment-2026",
    "titleEn": "DERC Recruitment 2026: Apply Online for 25 Posts, LDC, Clerk, Steno, PA and Consultants",
    "title": "DERC भर्ती 2026: 25 पदों पर ऑनलाइन आवेदन करें, LDC, क्लर्क, स्टेनो, PA और कंसलटेंट",
    "date": "03 नवंबर, 2026",
    "dateEn": "03 November, 2026",
    "categoryEn": "Government Jobs",
    "category": "सरकारी नौकरी",
    "tags": [
      "DERC Recruitment",
      "Delhi Electricity Regulatory Commission",
      "LDC Recruitment",
      "Stenographer",
      "Personal Assistant",
      "Consultant Jobs",
      "Delhi Jobs 2026",
      "Government Jobs"
    ],
    "excerptEn": "Delhi Electricity Regulatory Commission (DERC) has invited online applications for 25 vacancies across 12 posts including LDC, Clerk, Steno, PA, and Consultants. Apply online before 10 Nov (Group 1) and 24 Nov 2026 (Group 2).",
    "excerpt": "दिल्ली विद्युत विनियामक आयोग (DERC) ने LDC, क्लर्क, स्टेनो, PA और सीनियर रिसर्च कंसलटेंट सहित 12 संवर्गों में 25 रिक्तियों पर ऑनलाइन आवेदन आमंत्रित किए हैं। ग्रुप 1 के लिए 10 नवंबर व ग्रुप 2 के लिए 24 नवंबर 2026 तक आवेदन करें।",
    "image": "/images/derc-recruitment-2026.jpg",
    "contentEn": "The Delhi Electricity Regulatory Commission (DERC) has announced multiple recruitment opportunities for candidates with qualifications and experience in finance, law, engineering, administration, secretarial work and computer operations. A total of 25 vacancies across 12 post designations are available through two separate recruitment notices.\n\nThe first recruitment notice covers 16 vacancies for Advisor (Finance), Junior Law Officer, Private Secretary, Personal Assistant, Steno-cum-Computer Operator, Clerk-cum-Computer Operator and Lower Division Clerk. The last date to apply for these positions is 10 November 2026. The preferred appointment mode is deputation, with contract engagement considered if suitable deputation candidates are unavailable.\n\nThe second notice covers nine vacancies for Senior Research Consultants and a Consultant (HR). These appointments are purely contractual, and the last date to submit applications is 24 November 2026.\n\nCandidates should note that these are not all ordinary fresh-recruitment vacancies. Several positions require existing government, PSU or equivalent service experience and eligibility under specified pay levels. Applicants should carefully read the conditions for their chosen post before applying.\n\n## DERC Recruitment 2026: Overview\n\n| Particulars | Details |\n| :--- | :--- |\n| **Organisation** | Delhi Electricity Regulatory Commission (DERC) |\n| **Location** | Malviya Nagar, New Delhi |\n| **Total Vacancies** | 25 Posts |\n| **Total Post Designations** | 12 Post Types |\n| **Recruitment Groups** | Group 1 (16 Posts) and Group 2 (9 Posts) |\n| **Application Mode** | Online |\n| **First Notice (Group 1) Last Date** | 10 November 2026 |\n| **Second Notice (Group 2) Last Date** | 24 November 2026 |\n| **Official Website** | [derc.gov.in](https://www.derc.gov.in/) |\n| **Application Portal** | [derc.gov.in/app/](https://www.derc.gov.in/app/) |\n\n## DERC Vacancy 2026: Post-Wise Details\n\nThe 25 vacancies are distributed across two recruitment notices.\n\n### Group 1: Finance, Law, Secretarial and Clerical Posts – 16 Vacancies\nThe first notice covers seven different positions. The preferred mode of appointment is deputation. Contract engagement may be considered if suitable candidates are not available through deputation.\n\n| Post Name | Vacancies | Pay Matrix Level |\n| :--- | :--- | :--- |\n| **Advisor (Finance)** | 1 | Level 13 (₹1,23,100–₹2,15,900) |\n| **Junior Law Officer** | 2 | Level 8 (₹47,600–₹1,51,100) |\n| **Private Secretary** | 1 | Level 8 (₹47,600–₹1,51,100) |\n| **Personal Assistant** | 4 | Level 7 (₹44,900–₹1,42,400) |\n| **Steno-cum-Computer Operator** | 4 | Level 7 (₹44,900–₹1,42,400) |\n| **Clerk-cum-Computer Operator** | 3 | Level 4 (₹25,500–₹81,100) |\n| **Lower Division Clerk (LDC)** | 1 | Level 2 (₹19,900–₹63,200) |\n| **Total** | **16** | |\n\n### Group 2: Senior Research Consultants and Consultant (HR) – 9 Vacancies\nThe second notice is for specialist positions on a purely contractual basis.\n\n| Post Name | Vacancies | Engagement Type |\n| :--- | :--- | :--- |\n| **Senior Research Consultant (Tariff – Engineering)** | 2 | Contract |\n| **Senior Research Consultant (Tariff – Finance)** | 2 | Contract |\n| **Senior Research Consultant (Engineering)** | 2 | Contract |\n| **Senior Research Consultant (Law)** | 2 | Contract |\n| **Consultant (HR)** | 1 | Contract |\n| **Total** | **9** | |\n\n## DERC Recruitment 2026: Eligibility Criteria\n\nThe educational qualifications and experience requirements are different for each position. Candidates should identify the relevant recruitment group before checking their eligibility.\n\n### 1. Group 1: Eligibility for 16 Posts\n\n#### Advisor (Finance) – 1 Post\n- **Educational qualification:** MBA in Finance, Chartered Accountant (CA) qualification, or Cost Accountant (CMA) qualification. An Engineering degree is preferred.\n- **Service requirement:** Holding an analogous post on a regular basis, OR 2 years of regular service in Pay Matrix Level 12, OR 5 years of regular service in Level 11 in Central/State Govt. or PSU.\n\n#### Junior Law Officer – 2 Posts\n- **Educational qualification:** LLB degree from a recognised university.\n- **Service requirement:** Holding an analogous post on a regular basis, OR 2 years of regular service in Pay Matrix Level 7, OR 4 years of regular service in Level 6.\n- Experience in legal drafting, pleadings, petitions, and electricity laws is desirable.\n\n#### Private Secretary – 1 Post\n- **Educational qualification:** Graduate degree from a recognised university. Proficiency in shorthand and typing with knowledge of computerised word processing.\n- **Service requirement:** Holding an analogous post on a regular basis, OR 2 years of regular service in Pay Matrix Level 7, OR 6 years of regular service in Level 6. Experience as Personal Assistant to HoD for 5 years is desirable.\n\n#### Personal Assistant – 4 Posts\n- **Educational qualification and skills:**\n  - Graduate degree from a recognised university.\n  - English shorthand speed of **80 words per minute**.\n  - English typing speed of **40 words per minute**.\n  - Computing proficiency of **8,000 key depressions per hour (KDPH)**.\n  - Diploma or certificate in Office Management and Secretariat Procedure from a recognised institution.\n  - 3 years of service in Central/State Government or PSU involving exposure to computer operations is desirable.\n\n#### Steno-cum-Computer Operator – 4 Posts\n- **Educational qualification and skills:**\n  - Graduate degree from a recognised university.\n  - English shorthand speed of **80 words per minute**.\n  - English typing speed of **40 words per minute**.\n  - Computing proficiency of **8,000 key depressions per hour (KDPH)**.\n  - Diploma or certificate in Computing from a recognised institution.\n  - 3 years of service in Central/State Govt. or PSU involving computer operations is desirable.\n\n#### Clerk-cum-Computer Operator – 3 Posts\n- **Educational qualification and skills:**\n  - Graduate degree from a recognised university.\n  - Typing speed of **30 words per minute**.\n  - Computing proficiency of **6,000 key depressions per hour (KDPH)**.\n  - Diploma or certificate in Computing from a recognised institution.\n  - 2 years of service in Central/State Govt. or a PSU/Corporation is required.\n\n#### Lower Division Clerk (LDC) – 1 Post\n- **Educational qualification and skills:**\n  - 12th Class pass from a recognised board or institution.\n  - English typing speed of **35 words per minute**.\n  - **Important service condition:** Candidates must hold an analogous post on a regular basis OR possess 2 years of regular service in the post of Daftry or an equivalent post in Govt./PSU/Autonomous body. *Note: This is not an open vacancy for fresh 12th-pass candidates without service experience.*\n\n---\n\n### 2. Group 2: Eligibility for 9 Consultant Posts\n\n#### Senior Research Consultant (Tariff – Engineering) – 2 Posts\n- Degree in Electrical Engineering, Power Engineering or equivalent from a recognised institution.\n- Minimum 8 years of experience in the power sector.\n- At least 4 years in tariff determination in a regulatory setup, framing of regulations, or commercial/regulatory work in GENCO, Transco or DISCOMs.\n\n#### Senior Research Consultant (Tariff – Finance) – 2 Posts\n- CA, CMA, MBA (Finance) or MBA (Power Management) full-time from a reputed institution.\n- Minimum 8 years of post-qualification experience in tariff determination, financial modelling, cost analysis, or annual accounts analysis.\n\n#### Senior Research Consultant (Engineering) – 2 Posts\n- Degree in Electrical Engineering, Power Engineering or equivalent from a recognised institution.\n- Minimum 8 years of experience in the power sector, with at least 4 years working in a Generation, Transmission or Distribution company.\n\n#### Senior Research Consultant (Law) – 2 Posts\n- LLB degree from a reputed institution or university.\n- Minimum 3 years of experience in civil matters, commercial disputes, writ petitions, and labour matters. Experience covering electricity tariff petitions before regulatory commissions, APTEL and higher courts is preferred.\n\n#### Consultant (HR) – 1 Post\n- Full-time MBA in Human Resources, PGDM in HR or equivalent qualification.\n- Minimum 3 years of post-qualification experience in Establishment, HR or Administration in Govt./PSUs/Autonomous bodies.\n\n---\n\n## DERC Recruitment 2026: Age Limit\n\nThe age requirements differ between the two recruitment notices:\n\n### Age Limit for Group 1 – 16 Posts\n| Appointment Mode | Maximum Age |\n| :--- | :--- |\n| **Deputation** | 56 Years |\n| **Contract** | 54 Years |\n\n*The age is calculated as on the closing date of application, 10 November 2026.*\n\n### Age Limit for Group 2 – 9 Consultant Posts\n| Post | Maximum Age |\n| :--- | :--- |\n| **Senior Research Consultant (Tariff – Engineering)** | 45 Years |\n| **Senior Research Consultant (Tariff – Finance)** | 45 Years |\n| **Senior Research Consultant (Engineering)** | 45 Years |\n| **Senior Research Consultant (Law)** | 45 Years |\n| **Consultant (HR)** | 35 Years |\n\n---\n\n## DERC Recruitment 2026: Salary and Remuneration\n\nRemuneration depends on the post and recruitment group. Group 1 provides both a 7th CPC Pay Matrix Level and a separate consolidated contract remuneration figure.\n\n### Group 1: Pay Scale and Contract Remuneration\n| Post | Pay Level | Regular Pay Matrix Range | Contract Remuneration | Monthly EPF Contribution |\n| :--- | :--- | :--- | :--- | :--- |\n| **Advisor (Finance)** | Level 13 | ₹1,23,100–₹2,15,900 | ₹2,45,410 / month | ₹23,635 |\n| **Junior Law Officer** | Level 8 | ₹47,600–₹1,51,100 | ₹96,200 / month | ₹9,139 |\n| **Private Secretary** | Level 8 | ₹47,600–₹1,51,100 | ₹96,200 / month | ₹9,139 |\n| **Personal Assistant** | Level 7 | ₹44,900–₹1,42,400 | ₹91,070 / month | ₹8,621 |\n| **Steno-cum-Computer Operator** | Level 7 | ₹44,900–₹1,42,400 | ₹91,070 / month | ₹8,621 |\n| **Clerk-cum-Computer Operator** | Level 4 | ₹25,500–₹81,100 | ₹54,210 / month | ₹4,896 |\n| **Lower Division Clerk (LDC)** | Level 2 | ₹19,900–₹63,200 | ₹39,970 / month | ₹3,821 |\n\n### Group 2: Consultant Remuneration\n| Post | Monthly Consolidated Remuneration |\n| :--- | :--- |\n| **Senior Research Consultant (Tariff – Engineering)** | ₹1,25,000–₹1,45,000 |\n| **Senior Research Consultant (Tariff – Finance)** | ₹1,25,000–₹1,45,000 |\n| **Senior Research Consultant (Engineering)** | ₹1,25,000–₹1,45,000 |\n| **Senior Research Consultant (Law)** | ₹1,25,000–₹1,45,000 |\n| **Consultant (HR)** | ₹1,05,000–₹1,20,000 |\n\n*These amounts are consolidated monthly fees for contractual engagement. Applicable tax deductions and terms are governed by contract conditions.*\n\n---\n\n## Nature of Appointment and Contract Period\n\n- **Group 1 (16 Posts):** Deputation is the preferred appointment mode. If suitable deputation candidates are unavailable, contract engagement may be considered. Initial contract appointments are for up to 3 years, extendable by up to another 3 years subject to performance.\n- **Group 2 (9 Posts):** Purely contractual appointments. Initial engagement is for 3 years, renewable on a yearly basis up to a maximum tenure of 6 years or until reaching 65 years of age.\n- *Neither group consists of ordinary permanent open-market recruitments.*\n\n---\n\n## DERC Recruitment 2026: Selection Process\n\n### Selection for Group 1 (16 Posts)\n- Applications will be screened against the prescribed educational qualifications, service eligibility, and experience requirements.\n- Shortlisted candidates will be invited for a skill test (typing/shorthand) or personal interview depending on the post.\n- Typing and shorthand proficiency tests are essential components for Personal Assistant, Steno-cum-Computer Operator, and Clerical positions.\n\n### Selection for Group 2 (9 Consultant Posts)\n- Selection involves shortlisting and interaction with the Selection Committee.\n- If the number of eligible applicants exceeds 10 for a post, the Commission may conduct a qualifying screening test before the interview.\n- No TA/DA is payable for appearing in the test or interview.\n\n---\n\n## Documents Required\n\nCandidates should prepare scanned copies of the following documents before beginning their online application:\n\n- Recent passport-size photograph and scanned signature.\n- Educational qualification certificates and marksheets.\n- Date of birth proof (Matriculation certificate).\n- Relevant service and experience certificates.\n- Proof of regular service in the prescribed pay level (for deputation/contract staff posts).\n- Cadre clearance / NOC from current employer (for government/PSU employees).\n- Professional qualifications (CA, CMA, LLB, MBA, or Engineering degrees).\n- Last three months' salary slips, Form 16, and Income Tax Return (ITR) statements.\n- Relieving order/certificate from previous employers, where applicable.\n\n---\n\n## Step-by-Step Guide: How to Apply Online\n\nApplications must be submitted through the official DERC recruitment portal:\n\n1. **Visit Portal:** Go to the official website of the Delhi Electricity Regulatory Commission at [derc.gov.in](https://www.derc.gov.in/) and navigate to the Current Openings section or directly visit [derc.gov.in/app/](https://www.derc.gov.in/app/).\n2. **Select Position:** Identify the relevant advertisement (Group 1 staff posts or Group 2 consultant positions).\n3. **Register/Login:** Complete new registration with your basic details, mobile number, and email. Log in to your candidate account.\n4. **Fill Application:** Enter personal, educational, professional, and service background details.\n5. **Upload Documents:** Upload photograph, signature, service certificates, educational credentials, salary slips, and ITR documents as requested.\n6. **Review Details:** Carefully verify all fields in the preview mode.\n7. **Final Submit:** Submit the application online and save the confirmation receipt.\n\n*Note: Candidates must submit separate applications for different posts as permitted by the portal.*\n\n---\n\n## Important Dates\n\n| Recruitment Group | Posts Covered | Application Deadline |\n| :--- | :--- | :--- |\n| **Group 1** | 16 Finance, Law, Secretarial & Clerical Posts | **10 November 2026** |\n| **Group 2** | 9 Senior Research Consultant & HR Posts | **24 November 2026** |\n\n---\n\n## Important Links\n\n| Description | Link |\n| :--- | :--- |\n| **Online Application Portal** | [Apply Online – DERC Portal](https://www.derc.gov.in/app/) |\n| **Group 1 Main Advertisement** | [View DERC Advertisement PDF](https://www.derc.gov.in/app/uploads/pdf/1/general_instructions/DERC_Advertisement1.pdf) |\n| **LDC Advertisement** | [View LDC Notification PDF](https://www.derc.gov.in/app/uploads/pdf/1/general_instructions/DERC_Advertisement6.pdf) |\n| **Clerk-cum-Computer Operator Advertisement** | [View Clerk Notification PDF](https://www.derc.gov.in/app/uploads/pdf/1/general_instructions/DERC_Advertisement5.pdf) |\n| **Steno-cum-Computer Operator Advertisement** | [View Steno Notification PDF](https://www.derc.gov.in/app/uploads/pdf/1/general_instructions/DERC_Advertisement4.pdf) |\n| **Personal Assistant Advertisement** | [View PA Notification PDF](https://www.derc.gov.in/app/uploads/pdf/1/general_instructions/DERC_Advertisement3.pdf) |\n| **Group 2 Consultant Advertisement** | [View Consultant Notification PDF](https://www.derc.gov.in/app/uploads/pdf/1/general_instructions/advertisment_164.pdf) |\n| **Official Website** | [Delhi Electricity Regulatory Commission](https://www.derc.gov.in/) |\n\n---\n\n## Frequently Asked Questions (FAQs)\n\n**Q1. How many vacancies are announced in DERC Recruitment 2026?**  \nA total of 25 vacancies across 12 distinct post designations have been announced under two separate recruitment notifications.\n\n**Q2. What is the last date to apply for DERC Recruitment 2026?**  \nThe deadline is 10 November 2026 for the 16 Group 1 positions (LDC, Clerk, Steno, PA, PS, JLO, Advisor) and 24 November 2026 for the 9 Group 2 Consultant positions.\n\n**Q3. Which posts are included in the 16-post recruitment notice?**  \nThe posts are Advisor (Finance), Junior Law Officer, Private Secretary, Personal Assistant, Steno-cum-Computer Operator, Clerk-cum-Computer Operator, and Lower Division Clerk (LDC).\n\n**Q4. Which posts are included in the 9-post consultant recruitment?**  \nThe positions are Senior Research Consultant (Tariff – Engineering), Senior Research Consultant (Tariff – Finance), Senior Research Consultant (Engineering), Senior Research Consultant (Law), and Consultant (HR).\n\n**Q5. Is DERC Recruitment 2026 a permanent direct-entry government job?**  \nNo. Group 1 posts prefer deputation from existing government/PSU employees, with contract engagement considered if suitable candidates are not available. Group 2 positions are strictly contractual.\n\n**Q6. What is the maximum age limit for Group 1 posts?**  \nThe maximum age limit is 56 years for deputation and 54 years for contract appointment as on 10 November 2026.\n\n**Q7. What is the age limit for Senior Research Consultant positions?**  \nThe upper age limit is 45 years for Senior Research Consultant posts and 35 years for the Consultant (HR) post.\n\n**Q8. What is the salary of an LDC in DERC?**  \nThe LDC post carries 7th CPC Pay Matrix Level 2 (₹19,900–₹63,200). If appointed on contract, the consolidated monthly pay is ₹39,970 plus ₹3,821 monthly EPF contribution.\n\n**Q9. What are the skill requirements for DERC Steno-cum-Computer Operator?**  \nCandidates require English shorthand speed of 80 WPM, English typing speed of 40 WPM, computing speed of 8,000 KDPH, and a recognized diploma/certificate in computing.\n\n**Q10. What is the typing speed required for DERC LDC?**  \nThe required English typing speed is 35 words per minute. Candidates must also have regular service experience as Daftry/equivalent.\n\n**Q11. Is there an application fee for DERC recruitment?**  \nNo application fee has been specified in the recruitment notices.\n\n**Q12. Where can candidates apply online for DERC posts?**  \nEligible candidates can submit their online applications through the official DERC portal at [derc.gov.in/app/](https://www.derc.gov.in/app/).\n\n---\n\n## Final Words\n\nDERC Recruitment 2026 is an exceptional opportunity for professionals in engineering, law, finance, and secretarial fields seeking to contribute to Delhi's regulatory authority.\n\nEnsure you check your service experience and educational eligibility before submitting your online form on [derc.gov.in/app/](https://www.derc.gov.in/app/) prior to the respective deadlines: **10 November 2026** for Group 1 staff positions and **24 November 2026** for Group 2 consultant positions.",
    "content": "दिल्ली विद्युत विनियामक आयोग (DERC) ने वित्त, कानून, इंजीनियरिंग, प्रशासन, आशुलिपि और कंप्यूटर संचालन में योग्यता व अनुभव रखने वाले अभ्यर्थियों के लिए भर्ती की घोषणा की है। दो अलग-अलग भर्ती विज्ञापनों के माध्यम से 12 संवर्गों में कुल 25 रिक्तियां जारी की गई हैं।\n\nपहले विज्ञापन के तहत सलाहकार (वित्त), कनिष्ठ विधि अधिकारी, निजी सचिव, वैयक्तिक सहायक (PA), स्टेनो-कम-कंप्यूटर ऑपरेटर, क्लर्क-कम-कंप्यूटर ऑपरेटर और अवर श्रेणी लिपिक (LDC) के कुल 16 पदों पर आवेदन मांगे गए हैं। इन पदों पर आवेदन की अंतिम तिथि 10 नवंबर 2026 है। इन पदों पर नियुक्ति का प्राथमिक माध्यम प्रतिनियुक्ति (Deputation) है, और उपयुक्त अभ्यर्थी न मिलने पर अनुबंध (Contract) पर विचार किया जाएगा।\n\nदूसरे विज्ञापन के तहत सीनियर रिसर्च कंसलटेंट और कंसलटेंट (HR) के 9 पदों पर आवेदन आमंत्रित किए गए हैं। ये नियुक्तियां पूर्णतः संविदा आधारित हैं और इसके लिए आवेदन की अंतिम तिथि 24 नवंबर 2026 है।\n\nउम्मीदवार कृपया ध्यान दें कि ये सभी पद सामान्य फ्रेशर्स भर्ती के नहीं हैं। कई पदों के लिए केंद्र/राज्य सरकार, PSU या स्वायत्त निकायों में नियमित सेवा अनुभव और निर्धारित पे-मैट्रिक्स स्तर अनिवार्य है।\n\n## DERC भर्ती 2026: संक्षिप्त विवरण\n\n| विवरण | जानकारी |\n| :--- | :--- |\n| **संगठन** | दिल्ली विद्युत विनियामक आयोग (DERC) |\n| **स्थान** | मालवीय नगर, नई दिल्ली |\n| **कुल रिक्तियां** | 25 पद |\n| **कुल संवर्ग** | 12 पद |\n| **भर्ती समूह** | ग्रुप 1 (16 पद) एवं ग्रुप 2 (9 पद) |\n| **आवेदन माध्यम** | ऑनलाइन |\n| **ग्रुप 1 आवेदन की अंतिम तिथि** | 10 नवंबर 2026 |\n| **ग्रुप 2 आवेदन की अंतिम तिथि** | 24 नवंबर 2026 |\n| **आधिकारिक वेबसाइट** | [derc.gov.in](https://www.derc.gov.in/) |\n| **आवेदन पोर्टल** | [derc.gov.in/app/](https://www.derc.gov.in/app/) |\n\n## पदवार रिक्तियों का विवरण (DERC Vacancy 2026)\n\nकुल 25 रिक्तियों को दो समूहों में विभाजित किया गया है:\n\n### ग्रुप 1: वित्त, विधि, लिपिकीय एवं स्टेनो पद – 16 रिक्तियां\n| पद का नाम | रिक्तियां | 7वां CPC पे मैट्रिक्स लेवल |\n| :--- | :--- | :--- |\n| **सलाहकार (वित्त) - Advisor (Finance)** | 1 | लेवल 13 (₹1,23,100–₹2,15,900) |\n| **कनिष्ठ विधि अधिकारी - Junior Law Officer** | 2 | लेवल 8 (₹47,600–₹1,51,100) |\n| **निजी सचिव - Private Secretary** | 1 | लेवल 8 (₹47,600–₹1,51,100) |\n| **वैयक्तिक सहायक - Personal Assistant (PA)** | 4 | लेवल 7 (₹44,900–₹1,42,400) |\n| **स्टेनो-कम-कंप्यूटर ऑपरेटर - Steno-cum-Computer Operator** | 4 | लेवल 7 (₹44,900–₹1,42,400) |\n| **क्लर्क-कम-कंप्यूटर ऑपरेटर - Clerk-cum-Computer Operator** | 3 | लेवल 4 (₹25,500–₹81,100) |\n| **अवर श्रेणी लिपिक - Lower Division Clerk (LDC)** | 1 | लेवल 2 (₹19,900–₹63,200) |\n| **कुल पद** | **16** | |\n\n### ग्रुप 2: सीनियर रिसर्च कंसलटेंट एवं कंसलटेंट (HR) – 9 रिक्तियां\n| पद का नाम | रिक्तियां | नियुक्ति प्रकार |\n| :--- | :--- | :--- |\n| **सीनियर रिसर्च कंसलटेंट (टैरिफ – इंजीनियरिंग)** | 2 | संविदा (Contract) |\n| **सीनियर रिसर्च कंसलटेंट (टैरिफ – फाइनेंस)** | 2 | संविदा (Contract) |\n| **सीनियर रिसर्च कंसलटेंट (इंजीनियरिंग)** | 2 | संविदा (Contract) |\n| **सीनियर रिसर्च कंसलटेंट (लॉ)** | 2 | संविदा (Contract) |\n| **कंसलटेंट (HR)** | 1 | संविदा (Contract) |\n| **कुल पद** | **9** | |\n\n## शैक्षणिक योग्यता एवं पात्रता (Eligibility Criteria)\n\n### 1. ग्रुप 1 (16 पद) पात्रता शर्तें\n\n- **लोअर डिवीजन क्लर्क (LDC) - 1 पद:** 12वीं कक्षा उत्तीर्ण, अंग्रेजी टाइपिंग स्पीड **35 शब्द प्रति मिनट**। साथ ही सरकारी/PSU में समकक्ष पद अथवा 2 वर्ष दफ्तरी पद पर नियमित सेवा अनुभव।\n- **क्लर्क-कम-कंप्यूटर ऑपरेटर - 3 पद:** स्नातक डिग्री, टाइपिंग गति **30 शब्द प्रति मिनट**, कंप्यूटर दक्षता (**6,000 KDPH**), कंप्यूटर में डिप्लोमा/सर्टिफिकेट तथा 2 वर्ष का सरकारी/PSU अनुभव।\n- **स्टेनो-कम-कंप्यूटर ऑपरेटर - 4 पद:** स्नातक डिग्री, अंग्रेजी शॉर्टहैंड स्पीड **80 शब्द प्रति मिनट**, अंग्रेजी टाइपिंग स्पीड **40 शब्द प्रति मिनट** (8,000 KDPH), कंप्यूटर में डिप्लोमा/सर्टिफिकेट तथा 3 वर्ष का अनुभव।\n- **वैयक्तिक सहायक (PA) - 4 पद:** स्नातक डिग्री, अंग्रेजी शॉर्टहैंड **80 wpm**, अंग्रेजी टाइपिंग **40 wpm**, ऑफिस मैनेजमेंट/सेक्रेटेरियल प्रैक्टिस में डिप्लोमा तथा 3 वर्ष का सेवा अनुभव।\n- **निजी सचिव (PS) - 1 पद:** स्नातक डिग्री, कंप्यूटर वर्ड प्रोसेसिंग, शॉर्टहैंड एवं टाइपिंग में निपुणता तथा पे मैट्रिक्स लेवल 7 में 2 वर्ष अथवा लेवल 6 में 6 वर्ष की नियमित सेवा।\n- **कनिष्ठ विधि अधिकारी (JLO) - 2 पद:** मान्यता प्राप्त विश्वविद्यालय से LLB डिग्री तथा लेवल 7 में 2 वर्ष अथवा लेवल 6 में 4 वर्ष की नियमित सेवा।\n- **सलाहकार (वित्त) - 1 पद:** MBA (Finance) / CA / CMA, लेवल 12 में 2 वर्ष अथवा लेवल 11 में 5 वर्ष की नियमित सेवा।\n\n### 2. ग्रुप 2 (9 कंसलटेंट पद) पात्रता शर्तें\n\n- **सीनियर रिसर्च कंसलटेंट (इंजीनियरिंग/टैरिफ):** इलेक्ट्रिकल/पावर इंजीनियरिंग में डिग्री तथा पावर सेक्टर में न्यूनतम 8 वर्ष का अनुभव (4 वर्ष टैरिफ/डिस्कॉम/ट्रांसको/जेनको में)।\n- **सीनियर रिसर्च कंसलटेंट (टैरिफ - फाइनेंस):** पूर्णकालिक CA / CMA / MBA (Finance) तथा टैरिफ निर्धारण, वित्तीय मॉडलिंग में न्यूनतम 8 वर्ष का अनुभव।\n- **सीनियर रिसर्च कंसलटेंट (लॉ):** LLB डिग्री तथा सिविल/वाणिज्यिक/विद्युत नियामक मामलों में न्यूनतम 3 वर्ष का अनुभव।\n- **कंसलटेंट (HR):** पूर्णकालिक MBA (HR) / PGDM (HR) तथा मानव संसाधन/प्रशासन में न्यूनतम 3 वर्ष का कार्यानुभव।\n\n## आयु सीमा (Age Limit)\n\n- **ग्रुप 1 पद:** प्रतिनियुक्ति (Deputation) हेतु अधिकतम आयु **56 वर्ष** तथा संविदा (Contract) हेतु अधिकतम आयु **54 वर्ष** (निर्णायक तिथि: 10 नवंबर 2026)।\n- **ग्रुप 2 कंसलटेंट पद:** सीनियर रिसर्च कंसलटेंट हेतु अधिकतम आयु **45 वर्ष** तथा कंसलटेंट (HR) हेतु अधिकतम आयु **35 वर्ष**।\n\n## वेतनमान एवं मानदेय (Salary)\n\n### ग्रुप 1: पे-लेवल एवं संविदा मानदेय\n- **सलाहकार (वित्त):** लेवल 13 (₹1,23,100–₹2,15,900) / संविदा मानदेय ₹2,45,410 प्रति माह + ₹23,635 EPF\n- **कनिष्ठ विधि अधिकारी:** लेवल 8 (₹47,600–₹1,51,100) / संविदा मानदेय ₹96,200 प्रति माह + ₹9,139 EPF\n- **निजी सचिव:** लेवल 8 (₹47,600–₹1,51,100) / संविदा मानदेय ₹96,200 प्रति माह + ₹9,139 EPF\n- **वैयक्तिक सहायक (PA):** लेवल 7 (₹44,900–₹1,42,400) / संविदा मानदेय ₹91,070 प्रति माह + ₹8,621 EPF\n- **स्टेनो-कम-कंप्यूटर ऑपरेटर:** लेवल 7 (₹44,900–₹1,42,400) / संविदा मानदेय ₹91,070 प्रति माह + ₹8,621 EPF\n- **क्लर्क-कम-कंप्यूटर ऑपरेटर:** लेवल 4 (₹25,500–₹81,100) / संविदा मानदेय ₹54,210 प्रति माह + ₹4,896 EPF\n- **लोअर डिवीजन क्लर्क (LDC):** लेवल 2 (₹19,900–₹63,200) / संविदा मानदेय ₹39,970 प्रति माह + ₹3,821 EPF\n\n### ग्रुप 2: कंसलटेंट मानदेय\n- **सीनियर रिसर्च कंसलटेंट:** ₹1,25,000 से ₹1,45,000 प्रति माह (समेकित)\n- **कंसलटेंट (HR):** ₹1,05,000 से ₹1,20,000 प्रति माह (समेकित)\n\n## चयन प्रक्रिया (Selection Process)\n\n- **ग्रुप 1:** प्राप्त आवेदनों की स्क्रूटनी के पश्चात शॉर्टलिस्ट किए गए अभ्यर्थियों को कौशल परीक्षण (Skill Test: टाइपिंग / आशुलिपि) अथवा साक्षात्कार के लिए बुलाया जाएगा।\n- **ग्रुप 2:** स्क्रीनिंग के उपरांत साक्षात्कार समिति द्वारा चयन किया जाएगा। यदि किसी पद हेतु योग्य अभ्यर्थियों की संख्या 10 से अधिक होती है, तो आयोग स्क्रीनिंग टेस्ट आयोजित कर सकता है।\n\n## आवश्यक दस्तावेज (Documents Required)\n\n- नवीनतम पासपोर्ट साइज फोटो एवं हस्ताक्षर।\n- शैक्षणिक प्रमाण पत्र एवं अंकतालिकाएं।\n- जन्म तिथि प्रमाण पत्र (10वीं बोर्ड सर्टिफिकेट)।\n- पद संबंधी कार्य अनुभव प्रमाण पत्र।\n- वर्तमान नियोक्ता से अनापत्ति प्रमाण पत्र (NOC / Cadre Clearance)।\n- पिछले 3 महीनों की वेतन पर्ची (Salary Slips), फॉर्म 16 एवं ITR।\n\n## ऑनलाइन आवेदन कैसे करें (How to Apply Online)\n\n1. आधिकारिक वेबसाइट [derc.gov.in](https://www.derc.gov.in/) पर जाएं और Current Openings अनुभाग खोलें या सीधे [derc.gov.in/app/](https://www.derc.gov.in/app/) पर जाएं।\n2. जिस पद के लिए आवेदन करना है उसका चयन करें।\n3. न्यू रजिस्ट्रेशन के माध्यम से अपना विवरण दर्ज करें और लॉगिन करें।\n4. व्यक्तिगत, शैक्षणिक एवं सेवा अनुभव का विवरण सावधानीपूर्वक भरें।\n5. फोटो, हस्ताक्षर, सेवा प्रमाण पत्र और वेतन पर्चियां अपलोड करें।\n6. प्रिव्यू देखकर फॉर्म को अंतिम रूप से सबमिट करें और रसीद सुरक्षित रख लें।\n\n## महत्वपूर्ण तिथियां (Important Dates)\n\n| भर्ती समूह | आवेदन की अंतिम तिथि |\n| :--- | :--- |\n| **ग्रुप 1 (16 पद - LDC, क्लर्क, स्टेनो, PA, PS, JLO, एडवाइजर)** | **10 नवंबर 2026** |\n| **ग्रुप 2 (9 पद - सीनियर रिसर्च कंसलटेंट एवं HR कंसलटेंट)** | **24 नवंबर 2026** |\n\n## महत्वपूर्ण आधिकारिक लिंक्स (Important Links)\n\n| विवरण | लिंक |\n| :--- | :--- |\n| **ऑनलाइन आवेदन पोर्टल** | [ऑनलाइन आवेदन करें – DERC पोर्टल](https://www.derc.gov.in/app/) |\n| **ग्रुप 1 मुख्य विज्ञापन** | [DERC विज्ञापन PDF देखें](https://www.derc.gov.in/app/uploads/pdf/1/general_instructions/DERC_Advertisement1.pdf) |\n| **LDC विज्ञापन** | [LDC अधिसूचना PDF देखें](https://www.derc.gov.in/app/uploads/pdf/1/general_instructions/DERC_Advertisement6.pdf) |\n| **क्लर्क-कम-कंप्यूटर ऑपरेटर विज्ञापन** | [क्लर्क अधिसूचना PDF देखें](https://www.derc.gov.in/app/uploads/pdf/1/general_instructions/DERC_Advertisement5.pdf) |\n| **स्टेनो-कम-कंप्यूटर ऑपरेटर विज्ञापन** | [स्टेनो अधिसूचना PDF देखें](https://www.derc.gov.in/app/uploads/pdf/1/general_instructions/DERC_Advertisement4.pdf) |\n| **वैयक्तिक सहायक (PA) विज्ञापन** | [PA अधिसूचना PDF देखें](https://www.derc.gov.in/app/uploads/pdf/1/general_instructions/DERC_Advertisement3.pdf) |\n| **ग्रुप 2 कंसलटेंट विज्ञापन** | [कंसलटेंट अधिसूचना PDF देखें](https://www.derc.gov.in/app/uploads/pdf/1/general_instructions/advertisment_164.pdf) |\n| **आधिकारिक वेबसाइट** | [दिल्ली विद्युत विनियामक आयोग](https://www.derc.gov.in/) |\n\n## निष्कर्ष\n\nDERC भर्ती 2026 उन अनुभवी पेशेवरों, आशुलिपिकों और लिपिक संवर्ग के कर्मचारियों के लिए एक प्रतिष्ठित अवसर है जो दिल्ली के नियामक आयोग में कार्य करना चाहते हैं। पात्र अभ्यर्थी अपने पद की अंतिम तिथि (**10 नवंबर या 24 नवंबर 2026**) से पूर्व आधिकारिक पोर्टल पर आवेदन अवश्य पूर्ण करें।"
  },
  {
    "slug": "concentrix-voice-vs-non-voice-process",
    "title": "कंसेंट्रिक्स वॉइस और नॉन-वॉइस प्रोसेस जॉब्स: सैलरी, योग्यता, इंटरव्यू और पूरी जानकारी",
    "titleEn": "Concentrix Voice vs Non Voice Process: Jobs, Salary, Eligibility, Interview Process and More",
    "excerpt": "Concentrix में फ्रेशर्स और अनुभवी उम्मीदवारों के लिए वॉइस और नॉन-वॉइस प्रोसेस जॉब्स की पूरी जानकारी। यहाँ सैलरी, काम के प्रकार और योग्यता के बारे में विस्तार से पढ़ें।",
    "excerptEn": "A complete guide to Concentrix voice and non voice process jobs for freshers, including eligibility, salary, interview process, and work-from-home opportunities.",
    "content": "If you are looking for a Concentrix voice process or non voice process job, you may already know that Concentrix is one of the major companies in the customer experience and business services industry. The company offers jobs in customer service, technical support, chat support, email support, back-office operations, sales, digital operations and several other areas.\n\nFor freshers, Concentrix can be an option to build experience in customer service, communication, computer operations and business-process work. However, the exact eligibility, salary, working hours and job responsibilities depend on the particular process and vacancy.\n\nIn this article, we will explain everything about Concentrix voice process and non voice process jobs, including the work profile, eligibility, salary, skills required, interview process, typing requirements, work-from-home opportunities and how to apply.\n\n## What Is Concentrix Voice Process?\n\nA voice process is a job in which you communicate with customers primarily through telephone calls.\n\nIn a typical Concentrix voice process job, you may receive customer calls and help customers with their questions, complaints, account-related issues, technical problems or product and service queries.\n\nYour work may include understanding the customer's problem, checking information using company software, providing the correct solution, documenting the interaction and escalating the issue when required.\n\nA voice process is not simply about talking to customers. You normally have to speak with customers while simultaneously working on a computer system.\n\n### Responsibilities in a Concentrix Voice Process\n\nDepending on the project, your responsibilities can include:\n- Answering incoming customer calls\n- Handling customer questions and complaints\n- Understanding customer requirements\n- Providing information about products or services\n- Troubleshooting basic issues\n- Following company procedures and scripts\n- Updating customer information\n- Recording call details\n- Escalating complicated issues\n- Maintaining customer satisfaction\n- Meeting quality and performance targets\n\nSome voice processes may also involve outbound calls, where employees contact customers rather than waiting for incoming calls.\nThe exact work depends on the client and process assigned to you.\n\n## What Is Concentrix Non Voice Process?\n\nA non voice process is a job in which customer communication or business operations are primarily handled without telephone conversations.\n\nInstead of talking to customers, you may work through:\n- Live chat\n- Email\n- Support tickets\n- Back-office systems\n- Online forms\n- Data processing\n- Digital platforms\n- Internal software\n\nBecause the employee is communicating through text or computer systems, typing speed, typing accuracy, English grammar and written communication can be especially important.\n\nNon voice jobs can be attractive to candidates who are more comfortable with computer-based work than talking continuously on calls.\n\n### Types of Concentrix Non Voice Jobs\n\nNon voice is a broad term, and the actual job can vary considerably.\n\n#### Concentrix Chat Process\nIn a chat process, customers contact the company through an online chat platform. You read the customer's message, understand the problem and type the appropriate response.\nA typical chat workflow may be: Customer asks a question → You understand the issue → Check the account or knowledge base → Provide a solution → Document the interaction → Close or escalate the case.\n\n#### Concentrix Email Process\nIn an email process, customer problems are handled through email. You may receive a customer's complaint, question or service request and then research the issue before sending a professional response.\nBecause the communication is written, you should be comfortable explaining problems and solutions in simple, understandable language.\n\n#### Concentrix Ticket Process\nIn a ticket-based process, customer requests are converted into support tickets. You may need to investigate the ticket, check the available information, perform the required action and update the ticket with the resolution.\n\n#### Concentrix Back Office Process\nBack-office jobs generally involve computer-based operational work that may not require direct communication with customers. Depending on the project, the work could involve data processing, documentation, account updates, verification, and reports.\n\n## Concentrix Voice Process vs Non Voice Process\n\nThe main difference is the communication method.\n\n| Feature | Voice Process | Non Voice Process |\n|---|---|---|\n| **Communication** | Phone calls | Chat, email, tickets or digital systems |\n| **Speaking** | Very important | Less important |\n| **Typing** | Useful | Usually very important |\n| **Listening** | Very important | Less important |\n| **Written English** | Important | Very important |\n| **Customer interaction** | Mostly verbal | Mostly written |\n| **Multitasking** | Calls + computer systems | Multiple chats, tickets or applications |\n| **Common work** | Customer service, technical support | Chat, email, tickets, back office |\n\nA voice process may suit someone who enjoys speaking and interacting with customers. A non voice process may suit someone who prefers typing and computer-based communication.\n\n## Concentrix Jobs for Freshers\n\nMany people search for Concentrix jobs for freshers because customer-service and business-process roles can provide an entry point into the corporate and BPO industry.\n\nEligibility varies from one job to another. Some positions may accept candidates without previous industry experience, while other roles may require previous customer-service or technical experience.\n\n**Common requirements can include:**\n- Required educational qualification\n- Good communication skills\n- Basic computer knowledge\n- Typing ability\n- Problem-solving skills\n- Customer-handling skills\n- Language proficiency\n- Shift flexibility\n\n## Concentrix Salary\n\nOne of the most common questions among candidates is \"What is the salary in Concentrix?\"\nThere is no single fixed salary for all Concentrix jobs. Salary can depend on:\n- Job title\n- City\n- Experience\n- Process\n- Language\n- Shift\n- Technical requirements\n- Client account\n- Performance incentives\n\nEntry-level customer-support roles generally have a different salary structure from experienced or specialized positions. Candidates should therefore check the salary mentioned in the specific vacancy instead of relying on a general Concentrix salary figure found online.\n\n## What Skills Are Required?\n\n**For Voice Process:**\n- Spoken English: You should be able to communicate clearly and understand what customers are saying.\n- Listening Skills: Good listening is essential to understand the customer's actual problem.\n- Customer Handling: You need to remain calm and professional while following company procedures.\n- Problem Solving: Determine the appropriate next step for resolutions.\n\n**For Non Voice Process:**\n- Fast and accurate typing\n- Good English grammar and spelling\n- Reading comprehension\n- Attention to detail\n- Computer multitasking\n\n### Is Typing Speed Important for Concentrix?\nTyping speed can be important, particularly for chat process, email process and other non voice jobs. However, speed alone is not enough. For example, typing 50 words per minute with numerous mistakes is less useful than typing 40 words per minute accurately. Focus on: **Speed + Accuracy + Grammar + Reading + Computer skills**.\n\n## How to Prepare and Apply\n\n**For Voice Process:** Practice speaking in English every day, prepare a clear self-introduction, and practice role-playing customer service scenarios (Listen → Acknowledge → Question → Resolve).\n**For Non Voice Process:** Practice typing daily, focusing on accuracy first. Write professional email responses to simple mock complaints.\n\n### Concentrix Interview Process\nA typical customer-service recruitment process may contain several stages:\n1. **HR Round:** Basic questions about yourself, education, shift flexibility, and salary expectations.\n2. **Communication Round:** Evaluated on spoken communication (voice) or written communication and typing (non voice).\n3. **Operations Round:** Situation-based questions about customer service.\n4. **Process Assessment:** Additional assessments related to typing, technical knowledge, or language.\n\n### How to Apply\nSearch for vacancies through the official Concentrix careers platform. Make sure you check the job title, location (onsite vs remote), eligibility, language requirements, and shift requirements before applying. \n\n**Important:** Beware of Fake Concentrix Jobs! Do not pay money to anyone who promises a job. Official recruitment does not ask for security deposits.\n\n## Final Words\n\nConcentrix voice process and non voice process jobs cover a wide variety of customer-service and business-support opportunities. With consistent preparation, improving your typing and communication skills, and a clear understanding of the role, you can approach the Concentrix recruitment process with great confidence.\n",
    "contentEn": "If you are looking for a Concentrix voice process or non voice process job, you may already know that Concentrix is one of the major companies in the customer experience and business services industry. The company offers jobs in customer service, technical support, chat support, email support, back-office operations, sales, digital operations and several other areas.\n\nFor freshers, Concentrix can be an option to build experience in customer service, communication, computer operations and business-process work. However, the exact eligibility, salary, working hours and job responsibilities depend on the particular process and vacancy.\n\nIn this article, we will explain everything about Concentrix voice process and non voice process jobs, including the work profile, eligibility, salary, skills required, interview process, typing requirements, work-from-home opportunities and how to apply.\n\n## What Is Concentrix Voice Process?\n\nA voice process is a job in which you communicate with customers primarily through telephone calls.\n\nIn a typical Concentrix voice process job, you may receive customer calls and help customers with their questions, complaints, account-related issues, technical problems or product and service queries.\n\nYour work may include understanding the customer's problem, checking information using company software, providing the correct solution, documenting the interaction and escalating the issue when required.\n\nA voice process is not simply about talking to customers. You normally have to speak with customers while simultaneously working on a computer system.\n\n### Responsibilities in a Concentrix Voice Process\n\nDepending on the project, your responsibilities can include:\n- Answering incoming customer calls\n- Handling customer questions and complaints\n- Understanding customer requirements\n- Providing information about products or services\n- Troubleshooting basic issues\n- Following company procedures and scripts\n- Updating customer information\n- Recording call details\n- Escalating complicated issues\n- Maintaining customer satisfaction\n- Meeting quality and performance targets\n\nSome voice processes may also involve outbound calls, where employees contact customers rather than waiting for incoming calls.\nThe exact work depends on the client and process assigned to you.\n\n## What Is Concentrix Non Voice Process?\n\nA non voice process is a job in which customer communication or business operations are primarily handled without telephone conversations.\n\nInstead of talking to customers, you may work through:\n- Live chat\n- Email\n- Support tickets\n- Back-office systems\n- Online forms\n- Data processing\n- Digital platforms\n- Internal software\n\nBecause the employee is communicating through text or computer systems, typing speed, typing accuracy, English grammar and written communication can be especially important.\n\nNon voice jobs can be attractive to candidates who are more comfortable with computer-based work than talking continuously on calls.\n\n### Types of Concentrix Non Voice Jobs\n\nNon voice is a broad term, and the actual job can vary considerably.\n\n#### Concentrix Chat Process\nIn a chat process, customers contact the company through an online chat platform. You read the customer's message, understand the problem and type the appropriate response.\nA typical chat workflow may be: Customer asks a question → You understand the issue → Check the account or knowledge base → Provide a solution → Document the interaction → Close or escalate the case.\n\n#### Concentrix Email Process\nIn an email process, customer problems are handled through email. You may receive a customer's complaint, question or service request and then research the issue before sending a professional response.\nBecause the communication is written, you should be comfortable explaining problems and solutions in simple, understandable language.\n\n#### Concentrix Ticket Process\nIn a ticket-based process, customer requests are converted into support tickets. You may need to investigate the ticket, check the available information, perform the required action and update the ticket with the resolution.\n\n#### Concentrix Back Office Process\nBack-office jobs generally involve computer-based operational work that may not require direct communication with customers. Depending on the project, the work could involve data processing, documentation, account updates, verification, and reports.\n\n## Concentrix Voice Process vs Non Voice Process\n\nThe main difference is the communication method.\n\n| Feature | Voice Process | Non Voice Process |\n|---|---|---|\n| **Communication** | Phone calls | Chat, email, tickets or digital systems |\n| **Speaking** | Very important | Less important |\n| **Typing** | Useful | Usually very important |\n| **Listening** | Very important | Less important |\n| **Written English** | Important | Very important |\n| **Customer interaction** | Mostly verbal | Mostly written |\n| **Multitasking** | Calls + computer systems | Multiple chats, tickets or applications |\n| **Common work** | Customer service, technical support | Chat, email, tickets, back office |\n\nA voice process may suit someone who enjoys speaking and interacting with customers. A non voice process may suit someone who prefers typing and computer-based communication.\n\n## Concentrix Jobs for Freshers\n\nMany people search for Concentrix jobs for freshers because customer-service and business-process roles can provide an entry point into the corporate and BPO industry.\n\nEligibility varies from one job to another. Some positions may accept candidates without previous industry experience, while other roles may require previous customer-service or technical experience.\n\n**Common requirements can include:**\n- Required educational qualification\n- Good communication skills\n- Basic computer knowledge\n- Typing ability\n- Problem-solving skills\n- Customer-handling skills\n- Language proficiency\n- Shift flexibility\n\n## Concentrix Salary\n\nOne of the most common questions among candidates is \"What is the salary in Concentrix?\"\nThere is no single fixed salary for all Concentrix jobs. Salary can depend on:\n- Job title\n- City\n- Experience\n- Process\n- Language\n- Shift\n- Technical requirements\n- Client account\n- Performance incentives\n\nEntry-level customer-support roles generally have a different salary structure from experienced or specialized positions. Candidates should therefore check the salary mentioned in the specific vacancy instead of relying on a general Concentrix salary figure found online.\n\n## What Skills Are Required?\n\n**For Voice Process:**\n- Spoken English: You should be able to communicate clearly and understand what customers are saying.\n- Listening Skills: Good listening is essential to understand the customer's actual problem.\n- Customer Handling: You need to remain calm and professional while following company procedures.\n- Problem Solving: Determine the appropriate next step for resolutions.\n\n**For Non Voice Process:**\n- Fast and accurate typing\n- Good English grammar and spelling\n- Reading comprehension\n- Attention to detail\n- Computer multitasking\n\n### Is Typing Speed Important for Concentrix?\nTyping speed can be important, particularly for chat process, email process and other non voice jobs. However, speed alone is not enough. For example, typing 50 words per minute with numerous mistakes is less useful than typing 40 words per minute accurately. Focus on: **Speed + Accuracy + Grammar + Reading + Computer skills**.\n\n## How to Prepare and Apply\n\n**For Voice Process:** Practice speaking in English every day, prepare a clear self-introduction, and practice role-playing customer service scenarios (Listen → Acknowledge → Question → Resolve).\n**For Non Voice Process:** Practice typing daily, focusing on accuracy first. Write professional email responses to simple mock complaints.\n\n### Concentrix Interview Process\nA typical customer-service recruitment process may contain several stages:\n1. **HR Round:** Basic questions about yourself, education, shift flexibility, and salary expectations.\n2. **Communication Round:** Evaluated on spoken communication (voice) or written communication and typing (non voice).\n3. **Operations Round:** Situation-based questions about customer service.\n4. **Process Assessment:** Additional assessments related to typing, technical knowledge, or language.\n\n### How to Apply\nSearch for vacancies through the official Concentrix careers platform. Make sure you check the job title, location (onsite vs remote), eligibility, language requirements, and shift requirements before applying. \n\n**Important:** Beware of Fake Concentrix Jobs! Do not pay money to anyone who promises a job. Official recruitment does not ask for security deposits.\n\n## Final Words\n\nConcentrix voice process and non voice process jobs cover a wide variety of customer-service and business-support opportunities. With consistent preparation, improving your typing and communication skills, and a clear understanding of the role, you can approach the Concentrix recruitment process with great confidence.\n",
    "date": "19 सितंबर, 2026",
    "dateEn": "19 September, 2026",
    "author": "TypeHindi Team",
    "category": "Exam Guide"
  },
  {
    "slug": "ssc-chsl-10-plus-2-recruitment-2026",
    "title": "SSC CHSL 10+2 भर्ती 2026 – 2536 पदों पर ऑनलाइन आवेदन, योग्यता, आयु सीमा और चयन प्रक्रिया",
    "titleEn": "SSC CHSL 2026 Notification: Apply Online for 10+2 Vacancies, Syllabus, Salary, and Exam Pattern",
    "excerpt": "कर्मचारी चयन आयोग (SSC) ने CHSL (10+2) परीक्षा 2026 के तहत 2536 पदों पर भर्ती के लिए अधिसूचना जारी की है। 12वीं पास उम्मीदवार 7 अक्टूबर 2026 तक ऑनलाइन आवेदन कर सकते हैं।",
    "excerptEn": "Staff Selection Commission (SSC) has released the CHSL 2026 notification for LDC, JSA, and DEO posts. Check detailed eligibility, salary breakdown, career growth, syllabus, and preparation strategy here.",
    "content": "# SSC CHSL 2026 Recruitment: Comprehensive Guide to Vacancies, Syllabus, and Salary\n\nThe Staff Selection Commission (SSC) has officially announced the Combined Higher Secondary Level (CHSL) Examination 2026, offering a golden opportunity for candidates who have completed their 10+2 education. The SSC CHSL is one of the most highly anticipated recruitment drives in India, opening doors to prestigious government jobs in various ministries, departments, and offices of the Government of India.\n\nThis massive 1500+ word guide will walk you through every critical aspect of the SSC CHSL 2026 recruitment. From a deep dive into the job profiles and day-to-day responsibilities to a comprehensive salary breakdown, career growth trajectory, and an in-depth syllabus analysis, we have covered everything you need to know to succeed in this examination.\n\n## 1. Introduction to SSC CHSL 2026\n\nThe SSC CHSL exam is conducted annually to recruit eligible candidates for various posts such as Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), and Data Entry Operator (DEO). With thousands of vacancies expected this year, competition will be fierce. However, with the right strategy and a clear understanding of the exam pattern, cracking SSC CHSL 2026 is entirely achievable.\n\n## 2. Overview of the Recruitment\n\nHere is a quick glance at the SSC CHSL 2026 recruitment:\n\n| Parameter | Details |\n| --- | --- |\n| Organization | Staff Selection Commission (SSC) |\n| Exam Name | Combined Higher Secondary Level (CHSL) 10+2 |\n| Posts | LDC, JSA, DEO, DEO Grade A |\n| Vacancies | Expected around 4,500+ |\n| Application Mode | Online |\n| Selection Process | Tier 1 (CBT), Tier 2 (CBT + Skill Test) |\n| Official Website | ssc.gov.in |\n\n## 3. Important Dates and Deadlines\n\nCandidates must keep track of the following crucial dates to avoid missing out on any important events:\n- **Notification Release Date**: September 2026\n- **Online Application Start Date**: September 2026\n- **Last Date to Apply**: October 2026\n- **Last Date for Fee Payment**: October 2026\n- **Tier 1 Exam Date**: Expected in December 2026 / January 2027\n\n## 4. Vacancy Details\n\nWhile the exact number of vacancies will be updated in the final vacancy list released by SSC, it is anticipated that there will be over 4,500 vacancies distributed across various ministries, statutory bodies, and tribunals. The vacancies are generally divided among:\n- Lower Division Clerk (LDC) / Junior Secretariat Assistant (JSA)\n- Data Entry Operator (DEO)\n\n## 5. Detailed Job Profile & Responsibilities\n\nUnderstanding the day-to-day work associated with each post is crucial before you apply. The job profiles for the SSC CHSL posts are as follows:\n\n### Lower Division Clerk (LDC) / Junior Secretariat Assistant (JSA)\nThe LDC/JSA is the backbone of clerical work in government offices. Their day-to-day responsibilities include:\n- **File Maintenance**: Managing the workflow of files, opening new files, and maintaining the filing system.\n- **Data Entry**: Entering crucial data into the computer systems of the respective departments.\n- **Drafting**: Drafting official letters, notes, and memos under the guidance of senior officers.\n- **Record Keeping**: Maintaining registers and records of the department.\n\n### Data Entry Operator (DEO)\nThe DEO primarily handles the IT and data management aspects. Their responsibilities include:\n- **Typing and Data Entry**: Rapid and accurate entry of data into the government databases.\n- **Database Management**: Updating and maintaining records on the system.\n- **Report Generation**: Generating daily/weekly reports based on the entered data.\n- **System Maintenance**: Basic troubleshooting and maintenance of the computer systems they operate on.\n\n## 6. Comprehensive Salary Breakdown & Allowances\n\nOne of the biggest attractions of the SSC CHSL recruitment is the lucrative salary package and the perks associated with central government jobs. The salary is governed by the 7th Pay Commission.\n\n### Pay Levels\n- **LDC/JSA**: Pay Level 2 (Rs. 19,900 - Rs. 63,200)\n- **DEO**: Pay Level 4 (Rs. 25,500 - Rs. 81,100) or Pay Level 5 (Rs. 29,200 - Rs. 92,300)\n\n### Detailed Breakdown for LDC/JSA (Pay Level 2)\n- **Basic Pay**: Rs. 19,900\n- **Dearness Allowance (DA)**: Currently at 50% (Subject to revision) - Rs. 9,950\n- **House Rent Allowance (HRA)**: Varies by city category (X, Y, Z). For X cities (27%) - Rs. 5,400 (minimum)\n- **Transport Allowance (TA)**: Rs. 1,350 + DA on TA\n- **Gross Salary**: Approximately Rs. 38,000 to Rs. 40,000 per month in X cities.\n- **Deductions**: NPS (10% of Basic + DA), CGHS, CGEGIS.\n- **In-hand Salary**: Approximately Rs. 33,000 to Rs. 35,000 per month.\n\n### Perks and Allowances\nApart from the salary, employees enjoy several benefits such as:\n- Medical facilities through CGHS.\n- Paid leaves (Earned Leave, Casual Leave, Medical Leave).\n- Leave Travel Concession (LTC).\n- Pension benefits under the National Pension System (NPS).\n\n## 7. Career Growth & Promotions Hierarchy\n\nA job secured through SSC CHSL is not just a job; it is the beginning of a long and secure career.\n\n### Promotion Path for LDC/JSA\n1. Lower Division Clerk (LDC)\n2. Upper Division Clerk (UDC)\n3. Section Officer (SO)\n4. Under Secretary\nPromotions are based on seniority, and candidates can also appear for departmental examinations to fast-track their growth.\n\n### Promotion Path for DEO\n1. Data Entry Operator Grade A\n2. Data Entry Operator Grade B\n3. Data Entry Operator Grade C\n4. Data Entry Operator Grade F (System Analyst)\n\n## 8. Eligibility Criteria\n\nBefore applying, candidates must ensure they meet the stringent eligibility criteria set by the SSC.\n\n## 9. Educational Qualification\nCandidates must have passed their 12th Standard or equivalent examination from a recognized Board or University. For the post of DEO Grade 'A' in the Office of Comptroller and Auditor General of India (C&AG), Science stream with Mathematics as a subject is mandatory.\n\n## 10. Age Limit and Relaxations\n- **Minimum Age**: 18 years\n- **Maximum Age**: 27 years\n(Age is usually calculated as of a specific cutoff date mentioned in the official notification, typically August 1 of the recruitment year).\n\n**Age Relaxations:**\n- SC/ST: 5 years\n- OBC: 3 years\n- PwD (Unreserved): 10 years\n- PwD (OBC): 13 years\n- PwD (SC/ST): 15 years\n\n## 11. Nationality\nA candidate must be either a citizen of India, a subject of Nepal, or a subject of Bhutan, provided they possess the necessary eligibility certificates issued by the Government of India.\n\n## 12. Application Process: Step-by-Step Guide\n\nApplying for SSC CHSL 2026 requires careful attention to detail to avoid application rejection.\n1. Visit the official SSC website: ssc.gov.in.\n2. Register yourself using a valid Email ID and Mobile Number.\n3. Note down the Registration Number and Password generated.\n4. Log in and fill out the detailed application form.\n5. Upload scanned copies of a recent passport-size photograph and signature in the prescribed format.\n6. Pay the application fee.\n7. Submit the form and take a printout for future reference.\n\n## 13. Application Fee Details\n- General/OBC/EWS Male candidates: Rs. 100/-\n- Women/SC/ST/PwD/Ex-servicemen candidates: Exempted from fee payment.\nPayment can be made online via BHIM UPI, Net Banking, or by using Visa, Mastercard, Maestro, RuPay Credit or Debit cards.\n\n## 14. Exam Pattern: Tier 1 & Tier 2\n\nThe selection process is divided into two tiers.\n\n### Tier 1 (Computer Based Examination)\nThe Tier 1 exam consists of four sections, each with 25 questions carrying 50 marks. Total time allowed is 60 minutes.\n1. English Language (Basic Knowledge)\n2. General Intelligence\n3. Quantitative Aptitude (Basic Arithmetic Skill)\n4. General Awareness\n*Note: There is a negative marking of 0.50 marks for each wrong answer.*\n\n### Tier 2 (Computer Based Examination & Skill Test)\nTier 2 is more comprehensive and includes:\n- **Section I**: Mathematical Abilities and Reasoning & General Intelligence.\n- **Section II**: English Language & Comprehension and General Awareness.\n- **Section III**: Computer Knowledge Test (Qualifying in nature).\n- **Skill Test/Typing Test**: Conducted for the specific posts to assess the typing speed and data entry skills of the candidates.\n\n## 15. In-depth Syllabus Analysis\n\nTo prepare effectively, you must understand the depths of the syllabus.\n\n### English Language\nFocus on Spot the Error, Fill in the Blanks, Synonyms/Homonyms, Antonyms, Spellings, Idioms & Phrases, One word substitution, Improvement of Sentences, Active/Passive Voice, and Reading Comprehension.\n\n### General Intelligence (Reasoning)\nThe syllabus covers both verbal and non-verbal reasoning. Key topics include Semantic Analogy, Symbolic operations, Symbolic/Number Analogy, Trends, Figural Analogy, Space Orientation, Venn Diagrams, and Coding-Decoding.\n\n### Quantitative Aptitude\n- **Number Systems**: Computation of Whole Number, Decimal and Fractions, Relationship between numbers.\n- **Fundamental arithmetical operations**: Percentages, Ratio and Proportion, Square roots, Averages, Interest, Profit and Loss, Discount, Time and distance, Time and work.\n- **Algebra**: Basic algebraic identities.\n- **Geometry**: Familiarity with elementary geometric figures and facts.\n- **Mensuration**: Triangle, Quadrilaterals, Regular Polygons, Circle, Right Prism, Right Circular Cone, Right Circular Cylinder, Sphere.\n- **Trigonometry**: Trigonometry, Trigonometric ratios, Complementary angles.\n- **Statistical Charts**: Use of Tables and Graphs, Histogram, Frequency polygon, Bar-diagram, Pie-chart.\n\n### General Awareness\nQuestions are designed to test the candidate’s general awareness of the environment around them. Focus heavily on Current Affairs (last 6-8 months), Indian History, Culture, Geography, Economic Scene, General policy, and scientific research.\n\n## 16. Preparation Strategy\n\nTo crack the SSC CHSL 2026, a structured preparation strategy is paramount.\n- **Understand the Exam Pattern**: Familiarize yourself completely with the Tier 1 and Tier 2 patterns.\n- **Create a Study Plan**: Dedicate 6-8 hours daily. Allocate specific time slots for each subject based on your strengths and weaknesses.\n- **Focus on Basics**: Clear your fundamental concepts, especially in Quantitative Aptitude and English Grammar.\n- **Mock Tests**: Take at least two full-length mock tests every week. Analyze your performance to identify weak areas.\n- **Time Management**: During practice, strictly adhere to the 60-minute time limit for Tier 1.\n- **Current Affairs**: Read a standard newspaper daily (e.g., The Hindu or Indian Express) and follow monthly current affairs magazines.\n\n## 17. Recommended Books for SSC CHSL\n\nChoosing the right study material can make a huge difference.\n- **English**: 'Objective General English' by SP Bakshi, 'Word Power Made Easy' by Norman Lewis.\n- **Quantitative Aptitude**: 'Quantitative Aptitude for Competitive Examinations' by RS Aggarwal, 'Advance Maths' by Rakesh Yadav.\n- **Reasoning**: 'A Modern Approach to Verbal & Non-Verbal Reasoning' by RS Aggarwal.\n- **General Awareness**: 'Lucent’s General Knowledge', Manorama Yearbook.\n\n## 18. Previous Year Cut-off Trends\n\nAnalyzing past cut-offs helps in setting a target score. For the unreserved (UR) category, the Tier 1 cut-off has typically ranged between 140 to 155 marks out of 200 in recent years. This high cut-off indicates the intense competition and the necessity to aim for at least 160+ to be in the safe zone.\n\n## 19. Exam Difficulty Level\n\nHistorically, the SSC CHSL Tier 1 exam is considered to be of easy to moderate difficulty. The Quantitative Aptitude section can sometimes be calculative, while the English section tests basic grammar and vocabulary. The General Awareness section is often unpredictable and requires broad reading.\n\n## 20. Skill Test / Typing Test Details\n\nThe final hurdle is the skill test.\n- **For DEO**: Data Entry Speed of 8,000 Key Depressions per hour on Computer. For DEO in C&AG, a speed of 15,000 Key Depressions per hour is required.\n- **For LDC/JSA**: Typing speed of 35 words per minute in English or 30 words per minute in Hindi on computer.\n\n## 21. Document Verification Process\n\nAfter clearing all tiers, candidates are called for Document Verification. You must carry:\n- 10th and 12th Marksheets and Certificates.\n- Category Certificate (if applicable).\n- PwD Certificate (if applicable).\n- Valid Photo ID Proof.\n\n## 22. Conclusion & Final Tips\n\nThe SSC CHSL 2026 is a stellar opportunity for 12th pass candidates to secure a central government job. The journey requires dedication, consistent hard work, and smart preparation. Stay focused, practice relentlessly, and you will surely find your name in the final merit list. All the best to all aspirants!\n",
    "contentEn": "# SSC CHSL 2026 Recruitment: Comprehensive Guide to Vacancies, Syllabus, and Salary\n\nThe Staff Selection Commission (SSC) has officially announced the Combined Higher Secondary Level (CHSL) Examination 2026, offering a golden opportunity for candidates who have completed their 10+2 education. The SSC CHSL is one of the most highly anticipated recruitment drives in India, opening doors to prestigious government jobs in various ministries, departments, and offices of the Government of India.\n\nThis massive 1500+ word guide will walk you through every critical aspect of the SSC CHSL 2026 recruitment. From a deep dive into the job profiles and day-to-day responsibilities to a comprehensive salary breakdown, career growth trajectory, and an in-depth syllabus analysis, we have covered everything you need to know to succeed in this examination.\n\n## 1. Introduction to SSC CHSL 2026\n\nThe SSC CHSL exam is conducted annually to recruit eligible candidates for various posts such as Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), and Data Entry Operator (DEO). With thousands of vacancies expected this year, competition will be fierce. However, with the right strategy and a clear understanding of the exam pattern, cracking SSC CHSL 2026 is entirely achievable.\n\n## 2. Overview of the Recruitment\n\nHere is a quick glance at the SSC CHSL 2026 recruitment:\n\n| Parameter | Details |\n| --- | --- |\n| Organization | Staff Selection Commission (SSC) |\n| Exam Name | Combined Higher Secondary Level (CHSL) 10+2 |\n| Posts | LDC, JSA, DEO, DEO Grade A |\n| Vacancies | Expected around 4,500+ |\n| Application Mode | Online |\n| Selection Process | Tier 1 (CBT), Tier 2 (CBT + Skill Test) |\n| Official Website | ssc.gov.in |\n\n## 3. Important Dates and Deadlines\n\nCandidates must keep track of the following crucial dates to avoid missing out on any important events:\n- **Notification Release Date**: September 2026\n- **Online Application Start Date**: September 2026\n- **Last Date to Apply**: October 2026\n- **Last Date for Fee Payment**: October 2026\n- **Tier 1 Exam Date**: Expected in December 2026 / January 2027\n\n## 4. Vacancy Details\n\nWhile the exact number of vacancies will be updated in the final vacancy list released by SSC, it is anticipated that there will be over 4,500 vacancies distributed across various ministries, statutory bodies, and tribunals. The vacancies are generally divided among:\n- Lower Division Clerk (LDC) / Junior Secretariat Assistant (JSA)\n- Data Entry Operator (DEO)\n\n## 5. Detailed Job Profile & Responsibilities\n\nUnderstanding the day-to-day work associated with each post is crucial before you apply. The job profiles for the SSC CHSL posts are as follows:\n\n### Lower Division Clerk (LDC) / Junior Secretariat Assistant (JSA)\nThe LDC/JSA is the backbone of clerical work in government offices. Their day-to-day responsibilities include:\n- **File Maintenance**: Managing the workflow of files, opening new files, and maintaining the filing system.\n- **Data Entry**: Entering crucial data into the computer systems of the respective departments.\n- **Drafting**: Drafting official letters, notes, and memos under the guidance of senior officers.\n- **Record Keeping**: Maintaining registers and records of the department.\n\n### Data Entry Operator (DEO)\nThe DEO primarily handles the IT and data management aspects. Their responsibilities include:\n- **Typing and Data Entry**: Rapid and accurate entry of data into the government databases.\n- **Database Management**: Updating and maintaining records on the system.\n- **Report Generation**: Generating daily/weekly reports based on the entered data.\n- **System Maintenance**: Basic troubleshooting and maintenance of the computer systems they operate on.\n\n## 6. Comprehensive Salary Breakdown & Allowances\n\nOne of the biggest attractions of the SSC CHSL recruitment is the lucrative salary package and the perks associated with central government jobs. The salary is governed by the 7th Pay Commission.\n\n### Pay Levels\n- **LDC/JSA**: Pay Level 2 (Rs. 19,900 - Rs. 63,200)\n- **DEO**: Pay Level 4 (Rs. 25,500 - Rs. 81,100) or Pay Level 5 (Rs. 29,200 - Rs. 92,300)\n\n### Detailed Breakdown for LDC/JSA (Pay Level 2)\n- **Basic Pay**: Rs. 19,900\n- **Dearness Allowance (DA)**: Currently at 50% (Subject to revision) - Rs. 9,950\n- **House Rent Allowance (HRA)**: Varies by city category (X, Y, Z). For X cities (27%) - Rs. 5,400 (minimum)\n- **Transport Allowance (TA)**: Rs. 1,350 + DA on TA\n- **Gross Salary**: Approximately Rs. 38,000 to Rs. 40,000 per month in X cities.\n- **Deductions**: NPS (10% of Basic + DA), CGHS, CGEGIS.\n- **In-hand Salary**: Approximately Rs. 33,000 to Rs. 35,000 per month.\n\n### Perks and Allowances\nApart from the salary, employees enjoy several benefits such as:\n- Medical facilities through CGHS.\n- Paid leaves (Earned Leave, Casual Leave, Medical Leave).\n- Leave Travel Concession (LTC).\n- Pension benefits under the National Pension System (NPS).\n\n## 7. Career Growth & Promotions Hierarchy\n\nA job secured through SSC CHSL is not just a job; it is the beginning of a long and secure career.\n\n### Promotion Path for LDC/JSA\n1. Lower Division Clerk (LDC)\n2. Upper Division Clerk (UDC)\n3. Section Officer (SO)\n4. Under Secretary\nPromotions are based on seniority, and candidates can also appear for departmental examinations to fast-track their growth.\n\n### Promotion Path for DEO\n1. Data Entry Operator Grade A\n2. Data Entry Operator Grade B\n3. Data Entry Operator Grade C\n4. Data Entry Operator Grade F (System Analyst)\n\n## 8. Eligibility Criteria\n\nBefore applying, candidates must ensure they meet the stringent eligibility criteria set by the SSC.\n\n## 9. Educational Qualification\nCandidates must have passed their 12th Standard or equivalent examination from a recognized Board or University. For the post of DEO Grade 'A' in the Office of Comptroller and Auditor General of India (C&AG), Science stream with Mathematics as a subject is mandatory.\n\n## 10. Age Limit and Relaxations\n- **Minimum Age**: 18 years\n- **Maximum Age**: 27 years\n(Age is usually calculated as of a specific cutoff date mentioned in the official notification, typically August 1 of the recruitment year).\n\n**Age Relaxations:**\n- SC/ST: 5 years\n- OBC: 3 years\n- PwD (Unreserved): 10 years\n- PwD (OBC): 13 years\n- PwD (SC/ST): 15 years\n\n## 11. Nationality\nA candidate must be either a citizen of India, a subject of Nepal, or a subject of Bhutan, provided they possess the necessary eligibility certificates issued by the Government of India.\n\n## 12. Application Process: Step-by-Step Guide\n\nApplying for SSC CHSL 2026 requires careful attention to detail to avoid application rejection.\n1. Visit the official SSC website: ssc.gov.in.\n2. Register yourself using a valid Email ID and Mobile Number.\n3. Note down the Registration Number and Password generated.\n4. Log in and fill out the detailed application form.\n5. Upload scanned copies of a recent passport-size photograph and signature in the prescribed format.\n6. Pay the application fee.\n7. Submit the form and take a printout for future reference.\n\n## 13. Application Fee Details\n- General/OBC/EWS Male candidates: Rs. 100/-\n- Women/SC/ST/PwD/Ex-servicemen candidates: Exempted from fee payment.\nPayment can be made online via BHIM UPI, Net Banking, or by using Visa, Mastercard, Maestro, RuPay Credit or Debit cards.\n\n## 14. Exam Pattern: Tier 1 & Tier 2\n\nThe selection process is divided into two tiers.\n\n### Tier 1 (Computer Based Examination)\nThe Tier 1 exam consists of four sections, each with 25 questions carrying 50 marks. Total time allowed is 60 minutes.\n1. English Language (Basic Knowledge)\n2. General Intelligence\n3. Quantitative Aptitude (Basic Arithmetic Skill)\n4. General Awareness\n*Note: There is a negative marking of 0.50 marks for each wrong answer.*\n\n### Tier 2 (Computer Based Examination & Skill Test)\nTier 2 is more comprehensive and includes:\n- **Section I**: Mathematical Abilities and Reasoning & General Intelligence.\n- **Section II**: English Language & Comprehension and General Awareness.\n- **Section III**: Computer Knowledge Test (Qualifying in nature).\n- **Skill Test/Typing Test**: Conducted for the specific posts to assess the typing speed and data entry skills of the candidates.\n\n## 15. In-depth Syllabus Analysis\n\nTo prepare effectively, you must understand the depths of the syllabus.\n\n### English Language\nFocus on Spot the Error, Fill in the Blanks, Synonyms/Homonyms, Antonyms, Spellings, Idioms & Phrases, One word substitution, Improvement of Sentences, Active/Passive Voice, and Reading Comprehension.\n\n### General Intelligence (Reasoning)\nThe syllabus covers both verbal and non-verbal reasoning. Key topics include Semantic Analogy, Symbolic operations, Symbolic/Number Analogy, Trends, Figural Analogy, Space Orientation, Venn Diagrams, and Coding-Decoding.\n\n### Quantitative Aptitude\n- **Number Systems**: Computation of Whole Number, Decimal and Fractions, Relationship between numbers.\n- **Fundamental arithmetical operations**: Percentages, Ratio and Proportion, Square roots, Averages, Interest, Profit and Loss, Discount, Time and distance, Time and work.\n- **Algebra**: Basic algebraic identities.\n- **Geometry**: Familiarity with elementary geometric figures and facts.\n- **Mensuration**: Triangle, Quadrilaterals, Regular Polygons, Circle, Right Prism, Right Circular Cone, Right Circular Cylinder, Sphere.\n- **Trigonometry**: Trigonometry, Trigonometric ratios, Complementary angles.\n- **Statistical Charts**: Use of Tables and Graphs, Histogram, Frequency polygon, Bar-diagram, Pie-chart.\n\n### General Awareness\nQuestions are designed to test the candidate’s general awareness of the environment around them. Focus heavily on Current Affairs (last 6-8 months), Indian History, Culture, Geography, Economic Scene, General policy, and scientific research.\n\n## 16. Preparation Strategy\n\nTo crack the SSC CHSL 2026, a structured preparation strategy is paramount.\n- **Understand the Exam Pattern**: Familiarize yourself completely with the Tier 1 and Tier 2 patterns.\n- **Create a Study Plan**: Dedicate 6-8 hours daily. Allocate specific time slots for each subject based on your strengths and weaknesses.\n- **Focus on Basics**: Clear your fundamental concepts, especially in Quantitative Aptitude and English Grammar.\n- **Mock Tests**: Take at least two full-length mock tests every week. Analyze your performance to identify weak areas.\n- **Time Management**: During practice, strictly adhere to the 60-minute time limit for Tier 1.\n- **Current Affairs**: Read a standard newspaper daily (e.g., The Hindu or Indian Express) and follow monthly current affairs magazines.\n\n## 17. Recommended Books for SSC CHSL\n\nChoosing the right study material can make a huge difference.\n- **English**: 'Objective General English' by SP Bakshi, 'Word Power Made Easy' by Norman Lewis.\n- **Quantitative Aptitude**: 'Quantitative Aptitude for Competitive Examinations' by RS Aggarwal, 'Advance Maths' by Rakesh Yadav.\n- **Reasoning**: 'A Modern Approach to Verbal & Non-Verbal Reasoning' by RS Aggarwal.\n- **General Awareness**: 'Lucent’s General Knowledge', Manorama Yearbook.\n\n## 18. Previous Year Cut-off Trends\n\nAnalyzing past cut-offs helps in setting a target score. For the unreserved (UR) category, the Tier 1 cut-off has typically ranged between 140 to 155 marks out of 200 in recent years. This high cut-off indicates the intense competition and the necessity to aim for at least 160+ to be in the safe zone.\n\n## 19. Exam Difficulty Level\n\nHistorically, the SSC CHSL Tier 1 exam is considered to be of easy to moderate difficulty. The Quantitative Aptitude section can sometimes be calculative, while the English section tests basic grammar and vocabulary. The General Awareness section is often unpredictable and requires broad reading.\n\n## 20. Skill Test / Typing Test Details\n\nThe final hurdle is the skill test.\n- **For DEO**: Data Entry Speed of 8,000 Key Depressions per hour on Computer. For DEO in C&AG, a speed of 15,000 Key Depressions per hour is required.\n- **For LDC/JSA**: Typing speed of 35 words per minute in English or 30 words per minute in Hindi on computer.\n\n## 21. Document Verification Process\n\nAfter clearing all tiers, candidates are called for Document Verification. You must carry:\n- 10th and 12th Marksheets and Certificates.\n- Category Certificate (if applicable).\n- PwD Certificate (if applicable).\n- Valid Photo ID Proof.\n\n## 22. Conclusion & Final Tips\n\nThe SSC CHSL 2026 is a stellar opportunity for 12th pass candidates to secure a central government job. The journey requires dedication, consistent hard work, and smart preparation. Stay focused, practice relentlessly, and you will surely find your name in the final merit list. All the best to all aspirants!\n",
    "date": "18 सितंबर, 2026",
    "dateEn": "18 September, 2026",
    "author": "TypeHindi Team",
    "category": "Exam Guide"
  },
  {
    "slug": "ibps-rrb-15th-2026",
    "title": "आईबीपीएस आरआरबी 15वीं भर्ती 2026 – 13,706 पदों पर अधिसूचना, योग्यता, वेतन व ऑनलाइन आवेदन",
    "titleEn": "IBPS RRB 15th Recruitment 2026: Apply Online for 13,706 Office Assistant Posts",
    "excerpt": "आईबीपीएस (IBPS) ने आरआरबी 15वीं भर्ती 2026 के तहत कार्यालय सहायक और अधिकारी स्केल I, II, III के 13,706 पदों पर बंपर भर्ती निकाली है। इच्छुक उम्मीदवार 21 सितंबर 2026 तक ऑनलाइन आवेदन कर सकते हैं। पूरी जानकारी यहाँ पढ़ें।",
    "excerptEn": "IBPS RRB 15th Recruitment 2026 notification has been released for 13,706 Office Assistant posts. Check eligibility, exam pattern, syllabus, salary, and how to apply online.",
    "content": "# IBPS RRB 15th Recruitment 2026: Apply Online for 13,706 Office Assistant Posts\n\nThe Institute of Banking Personnel Selection (IBPS) has officially released the much-awaited notification for the **IBPS RRB 15th Recruitment 2026**. This year, the recruitment drive aims to fill a massive **13,706 vacancies** for the post of **Office Assistant (Multipurpose)** in various Regional Rural Banks (RRBs) across the country. This presents a golden opportunity for banking aspirants looking for a stable and rewarding government job in the rural banking sector.\n\nIn this comprehensive guide, we will dive deep into every aspect of the IBPS RRB 15th Recruitment 2026, including important dates, eligibility criteria, in-depth syllabus analysis, job profile, salary breakdown, career growth, and the ultimate preparation strategy to help you ace the exam.\n\n---\n\n## 1. Introduction\n\nThe IBPS RRB (Regional Rural Bank) examination is one of the most popular banking exams in India, conducted annually to recruit eligible candidates for various positions, including Office Assistant (Clerk) and Officer Scale I, II, and III. The 15th edition of this exam brings a significantly high number of vacancies, making the competition both fierce and achievable for dedicated aspirants. \n\nThe Office Assistant role is an entry-level clerical position, which forms the backbone of the administrative operations in Regional Rural Banks. The job not only offers immense job security but also provides a dynamic environment where individuals can grow both personally and professionally while contributing to the financial inclusion of rural India.\n\n---\n\n## 2. Overview of IBPS RRB 15th Recruitment 2026\n\nHere is a quick snapshot of the IBPS RRB 15th Recruitment 2026 for the Office Assistant posts:\n\n| Particulars | Details |\n| --- | --- |\n| **Exam Conducting Body** | Institute of Banking Personnel Selection (IBPS) |\n| **Exam Name** | IBPS RRB (CRP RRBs XV) |\n| **Post Name** | Office Assistant (Multipurpose) |\n| **Total Vacancies** | 13,706 Posts |\n| **Job Category** | Bank Jobs |\n| **Application Mode** | Online |\n| **Job Location** | Across India |\n| **Official Website** | www.ibps.in |\n\n---\n\n## 3. Important Dates\n\nStaying updated with the crucial timeline is essential for a smooth application and preparation process. Below are the tentative dates for the IBPS RRB 15th Recruitment 2026:\n\n- **Notification Release Date:** Expected in June 2026\n- **Online Application Start Date:** June 2026\n- **Last Date to Apply Online:** July 2026\n- **Last Date for Fee Payment:** July 2026\n- **Pre-Exam Training (PET):** July/August 2026\n- **Preliminary Exam Admit Card:** August 2026\n- **Preliminary Examination Dates:** August 2026\n- **Prelims Result Declaration:** September 2026\n- **Mains Exam Admit Card:** September 2026\n- **Main Examination Date:** September/October 2026\n- **Final Provisional Allotment:** January 2027\n\n*(Note: The exact dates will be updated as per the official IBPS calendar).*\n\n---\n\n## 4. Vacancy Details\n\nThe IBPS RRB 15th Recruitment 2026 has announced a staggering **13,706 vacancies** for the post of Office Assistant. These vacancies are distributed state-wise and bank-wise. Candidates are advised to check the state-wise vacancy breakdown in the official notification to apply for the state where they are proficient in the local language, as language proficiency is a mandatory requirement for final selection.\n\n---\n\n## 5. Eligibility Criteria\n\nBefore applying, candidates must ensure they meet the rigorous eligibility criteria set by IBPS.\n\n### Nationality / Citizenship\nA candidate must be either:\n1. A Citizen of India\n2. A subject of Nepal or Bhutan\n3. A Tibetan Refugee who came over to India before 1st January 1962 with the intention of permanently settling in India.\n\n### Age Limit (As of specific cutoff date)\n- **Minimum Age:** 18 Years\n- **Maximum Age:** 28 Years\n- **Age Relaxation:** Applicable as per government rules (e.g., +3 years for OBC, +5 years for SC/ST, +10 years for PwBD).\n\n### Educational Qualification\n- A **Bachelor’s degree** in any discipline from a recognized University or its equivalent.\n- **Proficiency in local language** as prescribed by the participating RRB(s).\n- **Working knowledge of Computer** is highly desirable.\n\n---\n\n## 6. Application Fee\n\nThe application fee is non-refundable and must be paid online via Credit/Debit card, Net Banking, or UPI.\n\n- **For General / OBC / EWS Candidates:** Rs. 850/-\n- **For SC / ST / PwBD / EXSM Candidates:** Rs. 175/-\n\n*(Bank transaction charges for online payment will be borne by the candidate.)*\n\n---\n\n## 7. Selection Process\n\nThe selection process for the IBPS RRB Office Assistant post is straightforward and consists of two phases. **There is no interview for the Office Assistant post.**\n\n1. **Preliminary Examination:** An objective type online test serving as a screening process. Marks obtained are not added to the final merit.\n2. **Main Examination:** An objective type online test. The final merit list is prepared strictly based on the marks obtained in the Main Examination.\n3. **Document Verification & Language Proficiency Test (LPT):** Candidates shortlisted based on Mains scores must undergo Document Verification. If a candidate has not studied the local language at the 8th standard or above, they must pass the LPT.\n\n---\n\n## 8. Exam Pattern\n\nUnderstanding the exam pattern is the first step towards a solid preparation strategy.\n\n### Preliminary Exam Pattern\nThe Prelims exam assesses the candidate's speed and accuracy in basic reasoning and numerical ability.\n\n| Section | No. of Questions | Maximum Marks | Duration |\n| --- | --- | --- | --- |\n| Reasoning | 40 | 40 | Composite Time of 45 Minutes |\n| Numerical Ability | 40 | 40 | |\n| **Total** | **80** | **80** | |\n\n### Main Exam Pattern\nThe Main examination is comprehensive and tests the candidate across multiple domains.\n\n| Section | No. of Questions | Maximum Marks | Duration |\n| --- | --- | --- | --- |\n| Reasoning | 40 | 50 | Composite Time of 2 Hours |\n| Computer Knowledge | 40 | 20 | |\n| General Awareness | 40 | 40 | |\n| English / Hindi Language | 40 | 40 | |\n| Numerical Ability | 40 | 50 | |\n| **Total** | **200** | **200** | |\n\n*(Note: There is a negative marking of 1/4th of the marks assigned to a question for each wrong answer in both Prelims and Mains).*\n\n---\n\n## 9. In-depth Syllabus Analysis\n\nA thorough understanding of the syllabus is crucial. Here is a detailed breakdown, subject by subject.\n\n### Reasoning Ability\n- **Puzzles & Seating Arrangement:** Linear, Circular, Square seating, Floor-based, and Box-based puzzles. This forms the core of the reasoning section.\n- **Syllogism:** Statements and conclusions, involving possibilities.\n- **Inequalities:** Coded and direct inequalities.\n- **Coding-Decoding:** Fictitious language coding.\n- **Blood Relations:** Family tree problems and coded blood relations.\n- **Direction Sense:** Distance and direction based problems.\n- **Alphanumeric Series:** Number, symbol, and letter arrangement questions.\n- **Data Sufficiency:** Determining if the given statements are sufficient to answer a question.\n\n### Numerical Ability (Quantitative Aptitude)\n- **Data Interpretation (DI):** Tabular, Bar Graph, Line Graph, Pie Chart, and Caselet DI.\n- **Number Series:** Missing and wrong number series.\n- **Quadratic Equations:** Comparing variables (x and y).\n- **Simplification & Approximation:** Calculation-intensive questions using BODMAS.\n- **Arithmetic Word Problems:** Percentage, Ratio and Proportion, Average, Time and Work, Time, Speed and Distance, Partnership, Profit and Loss, Simple and Compound Interest, Mensuration, Permutation & Combination, and Probability.\n\n### English / Hindi Language\n- **Reading Comprehension (RC):** Passages based on economy, banking, or general topics.\n- **Cloze Test:** Filling in the blanks in a passage.\n- **Error Spotting:** Finding grammatical errors in sentences.\n- **Sentence Rearrangement (Para Jumbles):** Arranging jumbled sentences into a coherent paragraph.\n- **Fillers:** Single or double blank fillers testing vocabulary and grammar.\n- **Vocabulary:** Synonyms, Antonyms, Idioms, and Phrases.\n\n*(Candidates can choose either English or Hindi language section in the Mains).*\n\n### General Awareness\n- **Current Affairs:** Focus on the last 6 months (National & International news, MoUs, Summits, Awards).\n- **Banking & Financial Awareness:** RBI functions, banking terminology, monetary policy, recent banking reforms, and financial institutions.\n- **Static GK:** National Parks, Dams, Currencies, Capitals, Important Days, and Headquarters of Organizations.\n\n### Computer Knowledge\n- Basics of Computers, Hardware and Software, Operating Systems (Windows), MS Office (Word, Excel, PowerPoint), Internet and Networking, Computer Security (Viruses, Malware), and latest technology trends.\n\n---\n\n## 10. Detailed Job Profile & Responsibilities\n\nThe role of an Office Assistant (Multipurpose) in an RRB is akin to a clerical post in public sector banks but tailored to rural demographics. The day-to-day responsibilities include:\n\n- **Customer Interaction:** Being the first point of contact for customers, assisting them with queries, account opening, and transaction processes.\n- **Cash Management:** Handling cash deposits and withdrawals at the teller counter, managing cash receipts, and ensuring the cash balance tallies at the end of the day.\n- **Data Entry & Operations:** Updating passbooks, maintaining ledgers, managing inward and outward clearing of cheques, and issuing demand drafts.\n- **Loan Processing Support:** Assisting agricultural and rural loan disbursements by verifying documents and maintaining loan records.\n- **Promoting Government Schemes:** Educating rural customers about various financial inclusion schemes like PMJDY, APY, PMJJBY, and encouraging them to enroll.\n- **Administrative Tasks:** Handling emails, official correspondence, and assisting higher officers in the smooth functioning of the branch.\n\nThe job provides immense satisfaction as it directly contributes to the socio-economic upliftment of rural areas.\n\n---\n\n## 11. Comprehensive Salary Breakdown & Allowances\n\nOne of the major attractions of the IBPS RRB Office Assistant post is its lucrative salary and benefits package. The starting basic pay is generally around **Rs. 19,900/-** per month, but the gross salary is significantly higher due to various allowances.\n\n### Salary Components:\n- **Basic Pay:** Rs. 19,900/-\n- **Dearness Allowance (DA):** Revised quarterly based on the CPI (Consumer Price Index). It forms a substantial part of the salary.\n- **House Rent Allowance (HRA):** Varies depending on the posting location (Rural/Semi-urban/Urban).\n- **Special Allowance:** A fixed percentage of the basic pay.\n- **Transport Allowance (TA):** To compensate for commuting expenses.\n\n**Gross Salary:** Approximately **Rs. 32,000 to Rs. 36,000/-** per month (varies by location).\n\n### Perks and Benefits:\n- **Medical Reimbursement:** Annual fixed amount for medical expenses.\n- **Leave Travel Concession (LTC):** Reimbursement for travel expenses during leaves.\n- **Pension Scheme:** Covered under the New Pension Scheme (NPS).\n- **Low-Interest Loans:** Employees are eligible for housing, vehicle, and personal loans at concessional interest rates.\n- **Leased Accommodation:** In some cases, banks provide leased housing instead of HRA.\n\n---\n\n## 12. Career Growth & Promotions Hierarchy\n\nAn Office Assistant in an RRB has excellent career progression prospects. Promotions are conducted through internal exams (merit channel) or based on seniority (normal channel).\n\n**The Hierarchy:**\n1. **Office Assistant (Multipurpose) / Clerk**\n2. **Officer Scale I (Assistant Manager / PO)** - Usually eligible after 3 years of service via internal exams.\n3. **Officer Scale II (Manager)**\n4. **Officer Scale III (Senior Manager)**\n5. **Chief Manager**\n6. **Assistant General Manager (AGM)**\n7. **Deputy General Manager (DGM)**\n8. **General Manager (GM)**\n\nEmployees who are ambitious and perform well in internal JAIIB and CAIIB exams, along with promotion tests, can rapidly climb the corporate ladder within the Regional Rural Banks.\n\n---\n\n## 13. Preparation Strategy & Recommended Books\n\nTo conquer the IBPS RRB exam, a systematic and disciplined approach is required.\n\n### Subject-wise Strategy:\n- **Reasoning:** Practice 4-5 puzzles daily. Focus on accuracy first, then speed. Master basics of Syllogism and Inequalities as they are scoring areas.\n- **Quantitative Aptitude:** Memorize tables up to 30, squares up to 50, and cubes up to 20. Practice DI sets daily. Work on mental calculation to save time.\n- **English/Hindi Language:** Read a newspaper (e.g., The Hindu / Dainik Jagran) daily to improve reading speed and vocabulary. Practice RC and Cloze Test regularly.\n- **General Awareness:** Make daily/weekly notes of current affairs. Revise them multiple times. Attempt daily GA quizzes.\n- **Computer Knowledge:** Read basic computer awareness capsules provided by various platforms. Practice previous year computer questions.\n\n### Recommended Books:\n- **Reasoning:** A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal, Magical Book on Puzzles by K. Kundan.\n- **Quantitative Aptitude:** Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal, Fast Track Objective Arithmetic by Rajesh Verma.\n- **English Language:** Objective General English by S.P. Bakshi, Word Power Made Easy by Norman Lewis.\n- **General Awareness:** Lucent’s General Knowledge, Pratiyogita Darpan (monthly).\n- **Computer:** Computer Awareness by Arihant Publications.\n\n### Mock Tests and Analysis:\nAttempting mock tests is non-negotiable. Take at least 2-3 mocks weekly for Prelims and analyze them thoroughly. Identify weak areas and work on them. Time management is the key to clearing the Prelims cutoff.\n\n---\n\n## 14. Previous Year Cut-off Trends & Exam Difficulty\n\nThe IBPS RRB Office Assistant Prelims exam is known for its high cut-offs due to the relatively easier difficulty level compared to IBPS PO or SBI PO. Candidates often attempt 75+ out of 80 questions.\n\n### Cut-off Trends (State-wise Variations):\nCut-offs vary drastically from state to state based on vacancies and competition. Historically:\n- High competition states (UP, Haryana, Rajasthan, MP) see cut-offs ranging from **73 to 77** out of 80 in Prelims.\n- Moderate competition states see cut-offs around **68 to 72**.\n- North-eastern states often have lower cut-offs (around **60 to 65**).\n\n### Exam Difficulty:\n- **Prelims:** Easy to Moderate. The challenge lies entirely in speed and accuracy within the 45-minute window.\n- **Mains:** Moderate to Difficult. The questions test conceptual clarity and deep understanding, especially in Reasoning and DI.\n\n---\n\n## 15. How to Apply Online\n\nFollow these steps to apply for the IBPS RRB 15th Recruitment 2026:\n1. Visit the official website of IBPS (www.ibps.in).\n2. Click on the link for \"CRP RRBs XV - Office Assistant (Multipurpose)\".\n3. Click on \"Click here for New Registration\" and enter your basic details to generate a Registration Number and Password.\n4. Upload scanned photographs, signatures, left thumb impression, and a handwritten declaration as per the specified dimensions.\n5. Fill in all personal, educational, and experience details carefully. Choose your state and bank preferences wisely.\n6. Preview the application form to ensure all details are correct.\n7. Pay the application fee online.\n8. Submit the form and take a printout of the e-receipt and application form for future reference.\n\n---\n\n## 16. Admit Card Details\n\nAdmit cards for Prelims and Mains are released separately, approximately 10-14 days before the exam date. Candidates must access it from the official IBPS website using their Registration No / Roll No and Password / DOB. The admit card contains vital information such as exam venue, date, reporting time, and specific instructions. A hard copy of the admit card, along with an original Photo ID and its photocopy, is mandatory to carry to the exam center.\n\n---\n\n## 17. Result and Scorecard\n\nIBPS follows a transparent process.\n- **Prelims Result:** Shows the qualifying status (Shortlisted for Mains or not).\n- **Prelims Scorecard:** Released a week after the result, showing section-wise and overall marks obtained and the state cut-off.\n- **Mains Result:** This is the final result for provisional allotment, as there is no interview.\n- **Final Scorecard:** Shows the marks obtained in the Mains exam based on which the final merit list is prepared.\n\n---\n\n## 18. Training and Probation Period\n\nNewly recruited Office Assistants undergo a rigorous induction training program. This training familiarizes them with banking software, operational guidelines, customer service protocols, and RRB-specific banking policies. Following the training, candidates are placed on a **probation period of 6 months**. During this period, their performance is closely monitored, and upon successful completion, they are confirmed as permanent employees of the bank.\n\n---\n\n## 19. Work Environment and Culture\n\nWorking in a Regional Rural Bank is highly rewarding. The work environment is deeply rooted in rural and semi-urban communities. Employees enjoy fixed working hours (typically 10 AM to 5 PM), ensuring an excellent work-life balance compared to many corporate sector jobs. The culture is collaborative, and officers often build strong relationships with local customers, earning immense respect from the farming and rural communities they serve.\n\n---\n\n## 20. Frequently Asked Questions (FAQs)\n\n**Q1. Is there an interview for the IBPS RRB Office Assistant post?**\nNo, there is no interview for the Office Assistant (Clerk) post. Selection is purely based on the Mains examination marks.\n\n**Q2. Can a final year graduation student apply for IBPS RRB 2026?**\n\nCandidates must possess a valid Mark-sheet / Degree Certificate proving they are a graduate on the day they register and indicate the percentage of marks obtained. Final year students waiting for results are typically not eligible unless the result is declared on or before the cutoff date mentioned in the notification.\n\n**Q3. Is proficiency in the local language mandatory?**\nYes, it is strictly mandatory. Candidates must either have studied the language at the 8th std level or above, or they will have to pass a Local Language Test before joining.\n\n**Q4. Can I apply for a state other than my home state?**\nYes, you can apply from any state, provided you are proficient in the official local language of that state.\n\n**Q5. Is there negative marking in the exam?**\nYes, 0.25 marks are deducted for every incorrect answer in both the Preliminary and Main examinations.\n\n---\n\n## 21. Important Links\n\n- **Official IBPS Website:** [Click Here](https://www.ibps.in)\n- **View IBPS RRB 15th Notification PDF:** (Link will be updated once released)\n- **Apply Online Link:** (Link will be updated once released)\n- **Syllabus and Exam Pattern Guide:** [Click Here](#)\n\n*(Ensure to bookmark these links and visit the official website regularly for real-time updates).*\n\n---\n\n## 22. Conclusion\n\nThe **IBPS RRB 15th Recruitment 2026** for 13,706 Office Assistant posts is undoubtedly one of the biggest recruitment drives of the year. With a strategic study plan, consistent practice, and the right mindset, clearing this exam is highly achievable. The job offers a fantastic blend of stability, respectable salary, and the opportunity to make a tangible difference in rural India. Start your preparation early, take regular mock tests, and stay focused on your goal. We wish all the aspirants the very best of luck for their preparation journey!\n",
    "contentEn": "# IBPS RRB 15th Recruitment 2026: Apply Online for 13,706 Office Assistant Posts\n\nThe Institute of Banking Personnel Selection (IBPS) has officially released the much-awaited notification for the **IBPS RRB 15th Recruitment 2026**. This year, the recruitment drive aims to fill a massive **13,706 vacancies** for the post of **Office Assistant (Multipurpose)** in various Regional Rural Banks (RRBs) across the country. This presents a golden opportunity for banking aspirants looking for a stable and rewarding government job in the rural banking sector.\n\nIn this comprehensive guide, we will dive deep into every aspect of the IBPS RRB 15th Recruitment 2026, including important dates, eligibility criteria, in-depth syllabus analysis, job profile, salary breakdown, career growth, and the ultimate preparation strategy to help you ace the exam.\n\n---\n\n## 1. Introduction\n\nThe IBPS RRB (Regional Rural Bank) examination is one of the most popular banking exams in India, conducted annually to recruit eligible candidates for various positions, including Office Assistant (Clerk) and Officer Scale I, II, and III. The 15th edition of this exam brings a significantly high number of vacancies, making the competition both fierce and achievable for dedicated aspirants. \n\nThe Office Assistant role is an entry-level clerical position, which forms the backbone of the administrative operations in Regional Rural Banks. The job not only offers immense job security but also provides a dynamic environment where individuals can grow both personally and professionally while contributing to the financial inclusion of rural India.\n\n---\n\n## 2. Overview of IBPS RRB 15th Recruitment 2026\n\nHere is a quick snapshot of the IBPS RRB 15th Recruitment 2026 for the Office Assistant posts:\n\n| Particulars | Details |\n| --- | --- |\n| **Exam Conducting Body** | Institute of Banking Personnel Selection (IBPS) |\n| **Exam Name** | IBPS RRB (CRP RRBs XV) |\n| **Post Name** | Office Assistant (Multipurpose) |\n| **Total Vacancies** | 13,706 Posts |\n| **Job Category** | Bank Jobs |\n| **Application Mode** | Online |\n| **Job Location** | Across India |\n| **Official Website** | www.ibps.in |\n\n---\n\n## 3. Important Dates\n\nStaying updated with the crucial timeline is essential for a smooth application and preparation process. Below are the tentative dates for the IBPS RRB 15th Recruitment 2026:\n\n- **Notification Release Date:** Expected in June 2026\n- **Online Application Start Date:** June 2026\n- **Last Date to Apply Online:** July 2026\n- **Last Date for Fee Payment:** July 2026\n- **Pre-Exam Training (PET):** July/August 2026\n- **Preliminary Exam Admit Card:** August 2026\n- **Preliminary Examination Dates:** August 2026\n- **Prelims Result Declaration:** September 2026\n- **Mains Exam Admit Card:** September 2026\n- **Main Examination Date:** September/October 2026\n- **Final Provisional Allotment:** January 2027\n\n*(Note: The exact dates will be updated as per the official IBPS calendar).*\n\n---\n\n## 4. Vacancy Details\n\nThe IBPS RRB 15th Recruitment 2026 has announced a staggering **13,706 vacancies** for the post of Office Assistant. These vacancies are distributed state-wise and bank-wise. Candidates are advised to check the state-wise vacancy breakdown in the official notification to apply for the state where they are proficient in the local language, as language proficiency is a mandatory requirement for final selection.\n\n---\n\n## 5. Eligibility Criteria\n\nBefore applying, candidates must ensure they meet the rigorous eligibility criteria set by IBPS.\n\n### Nationality / Citizenship\nA candidate must be either:\n1. A Citizen of India\n2. A subject of Nepal or Bhutan\n3. A Tibetan Refugee who came over to India before 1st January 1962 with the intention of permanently settling in India.\n\n### Age Limit (As of specific cutoff date)\n- **Minimum Age:** 18 Years\n- **Maximum Age:** 28 Years\n- **Age Relaxation:** Applicable as per government rules (e.g., +3 years for OBC, +5 years for SC/ST, +10 years for PwBD).\n\n### Educational Qualification\n- A **Bachelor’s degree** in any discipline from a recognized University or its equivalent.\n- **Proficiency in local language** as prescribed by the participating RRB(s).\n- **Working knowledge of Computer** is highly desirable.\n\n---\n\n## 6. Application Fee\n\nThe application fee is non-refundable and must be paid online via Credit/Debit card, Net Banking, or UPI.\n\n- **For General / OBC / EWS Candidates:** Rs. 850/-\n- **For SC / ST / PwBD / EXSM Candidates:** Rs. 175/-\n\n*(Bank transaction charges for online payment will be borne by the candidate.)*\n\n---\n\n## 7. Selection Process\n\nThe selection process for the IBPS RRB Office Assistant post is straightforward and consists of two phases. **There is no interview for the Office Assistant post.**\n\n1. **Preliminary Examination:** An objective type online test serving as a screening process. Marks obtained are not added to the final merit.\n2. **Main Examination:** An objective type online test. The final merit list is prepared strictly based on the marks obtained in the Main Examination.\n3. **Document Verification & Language Proficiency Test (LPT):** Candidates shortlisted based on Mains scores must undergo Document Verification. If a candidate has not studied the local language at the 8th standard or above, they must pass the LPT.\n\n---\n\n## 8. Exam Pattern\n\nUnderstanding the exam pattern is the first step towards a solid preparation strategy.\n\n### Preliminary Exam Pattern\nThe Prelims exam assesses the candidate's speed and accuracy in basic reasoning and numerical ability.\n\n| Section | No. of Questions | Maximum Marks | Duration |\n| --- | --- | --- | --- |\n| Reasoning | 40 | 40 | Composite Time of 45 Minutes |\n| Numerical Ability | 40 | 40 | |\n| **Total** | **80** | **80** | |\n\n### Main Exam Pattern\nThe Main examination is comprehensive and tests the candidate across multiple domains.\n\n| Section | No. of Questions | Maximum Marks | Duration |\n| --- | --- | --- | --- |\n| Reasoning | 40 | 50 | Composite Time of 2 Hours |\n| Computer Knowledge | 40 | 20 | |\n| General Awareness | 40 | 40 | |\n| English / Hindi Language | 40 | 40 | |\n| Numerical Ability | 40 | 50 | |\n| **Total** | **200** | **200** | |\n\n*(Note: There is a negative marking of 1/4th of the marks assigned to a question for each wrong answer in both Prelims and Mains).*\n\n---\n\n## 9. In-depth Syllabus Analysis\n\nA thorough understanding of the syllabus is crucial. Here is a detailed breakdown, subject by subject.\n\n### Reasoning Ability\n- **Puzzles & Seating Arrangement:** Linear, Circular, Square seating, Floor-based, and Box-based puzzles. This forms the core of the reasoning section.\n- **Syllogism:** Statements and conclusions, involving possibilities.\n- **Inequalities:** Coded and direct inequalities.\n- **Coding-Decoding:** Fictitious language coding.\n- **Blood Relations:** Family tree problems and coded blood relations.\n- **Direction Sense:** Distance and direction based problems.\n- **Alphanumeric Series:** Number, symbol, and letter arrangement questions.\n- **Data Sufficiency:** Determining if the given statements are sufficient to answer a question.\n\n### Numerical Ability (Quantitative Aptitude)\n- **Data Interpretation (DI):** Tabular, Bar Graph, Line Graph, Pie Chart, and Caselet DI.\n- **Number Series:** Missing and wrong number series.\n- **Quadratic Equations:** Comparing variables (x and y).\n- **Simplification & Approximation:** Calculation-intensive questions using BODMAS.\n- **Arithmetic Word Problems:** Percentage, Ratio and Proportion, Average, Time and Work, Time, Speed and Distance, Partnership, Profit and Loss, Simple and Compound Interest, Mensuration, Permutation & Combination, and Probability.\n\n### English / Hindi Language\n- **Reading Comprehension (RC):** Passages based on economy, banking, or general topics.\n- **Cloze Test:** Filling in the blanks in a passage.\n- **Error Spotting:** Finding grammatical errors in sentences.\n- **Sentence Rearrangement (Para Jumbles):** Arranging jumbled sentences into a coherent paragraph.\n- **Fillers:** Single or double blank fillers testing vocabulary and grammar.\n- **Vocabulary:** Synonyms, Antonyms, Idioms, and Phrases.\n\n*(Candidates can choose either English or Hindi language section in the Mains).*\n\n### General Awareness\n- **Current Affairs:** Focus on the last 6 months (National & International news, MoUs, Summits, Awards).\n- **Banking & Financial Awareness:** RBI functions, banking terminology, monetary policy, recent banking reforms, and financial institutions.\n- **Static GK:** National Parks, Dams, Currencies, Capitals, Important Days, and Headquarters of Organizations.\n\n### Computer Knowledge\n- Basics of Computers, Hardware and Software, Operating Systems (Windows), MS Office (Word, Excel, PowerPoint), Internet and Networking, Computer Security (Viruses, Malware), and latest technology trends.\n\n---\n\n## 10. Detailed Job Profile & Responsibilities\n\nThe role of an Office Assistant (Multipurpose) in an RRB is akin to a clerical post in public sector banks but tailored to rural demographics. The day-to-day responsibilities include:\n\n- **Customer Interaction:** Being the first point of contact for customers, assisting them with queries, account opening, and transaction processes.\n- **Cash Management:** Handling cash deposits and withdrawals at the teller counter, managing cash receipts, and ensuring the cash balance tallies at the end of the day.\n- **Data Entry & Operations:** Updating passbooks, maintaining ledgers, managing inward and outward clearing of cheques, and issuing demand drafts.\n- **Loan Processing Support:** Assisting agricultural and rural loan disbursements by verifying documents and maintaining loan records.\n- **Promoting Government Schemes:** Educating rural customers about various financial inclusion schemes like PMJDY, APY, PMJJBY, and encouraging them to enroll.\n- **Administrative Tasks:** Handling emails, official correspondence, and assisting higher officers in the smooth functioning of the branch.\n\nThe job provides immense satisfaction as it directly contributes to the socio-economic upliftment of rural areas.\n\n---\n\n## 11. Comprehensive Salary Breakdown & Allowances\n\nOne of the major attractions of the IBPS RRB Office Assistant post is its lucrative salary and benefits package. The starting basic pay is generally around **Rs. 19,900/-** per month, but the gross salary is significantly higher due to various allowances.\n\n### Salary Components:\n- **Basic Pay:** Rs. 19,900/-\n- **Dearness Allowance (DA):** Revised quarterly based on the CPI (Consumer Price Index). It forms a substantial part of the salary.\n- **House Rent Allowance (HRA):** Varies depending on the posting location (Rural/Semi-urban/Urban).\n- **Special Allowance:** A fixed percentage of the basic pay.\n- **Transport Allowance (TA):** To compensate for commuting expenses.\n\n**Gross Salary:** Approximately **Rs. 32,000 to Rs. 36,000/-** per month (varies by location).\n\n### Perks and Benefits:\n- **Medical Reimbursement:** Annual fixed amount for medical expenses.\n- **Leave Travel Concession (LTC):** Reimbursement for travel expenses during leaves.\n- **Pension Scheme:** Covered under the New Pension Scheme (NPS).\n- **Low-Interest Loans:** Employees are eligible for housing, vehicle, and personal loans at concessional interest rates.\n- **Leased Accommodation:** In some cases, banks provide leased housing instead of HRA.\n\n---\n\n## 12. Career Growth & Promotions Hierarchy\n\nAn Office Assistant in an RRB has excellent career progression prospects. Promotions are conducted through internal exams (merit channel) or based on seniority (normal channel).\n\n**The Hierarchy:**\n1. **Office Assistant (Multipurpose) / Clerk**\n2. **Officer Scale I (Assistant Manager / PO)** - Usually eligible after 3 years of service via internal exams.\n3. **Officer Scale II (Manager)**\n4. **Officer Scale III (Senior Manager)**\n5. **Chief Manager**\n6. **Assistant General Manager (AGM)**\n7. **Deputy General Manager (DGM)**\n8. **General Manager (GM)**\n\nEmployees who are ambitious and perform well in internal JAIIB and CAIIB exams, along with promotion tests, can rapidly climb the corporate ladder within the Regional Rural Banks.\n\n---\n\n## 13. Preparation Strategy & Recommended Books\n\nTo conquer the IBPS RRB exam, a systematic and disciplined approach is required.\n\n### Subject-wise Strategy:\n- **Reasoning:** Practice 4-5 puzzles daily. Focus on accuracy first, then speed. Master basics of Syllogism and Inequalities as they are scoring areas.\n- **Quantitative Aptitude:** Memorize tables up to 30, squares up to 50, and cubes up to 20. Practice DI sets daily. Work on mental calculation to save time.\n- **English/Hindi Language:** Read a newspaper (e.g., The Hindu / Dainik Jagran) daily to improve reading speed and vocabulary. Practice RC and Cloze Test regularly.\n- **General Awareness:** Make daily/weekly notes of current affairs. Revise them multiple times. Attempt daily GA quizzes.\n- **Computer Knowledge:** Read basic computer awareness capsules provided by various platforms. Practice previous year computer questions.\n\n### Recommended Books:\n- **Reasoning:** A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal, Magical Book on Puzzles by K. Kundan.\n- **Quantitative Aptitude:** Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal, Fast Track Objective Arithmetic by Rajesh Verma.\n- **English Language:** Objective General English by S.P. Bakshi, Word Power Made Easy by Norman Lewis.\n- **General Awareness:** Lucent’s General Knowledge, Pratiyogita Darpan (monthly).\n- **Computer:** Computer Awareness by Arihant Publications.\n\n### Mock Tests and Analysis:\nAttempting mock tests is non-negotiable. Take at least 2-3 mocks weekly for Prelims and analyze them thoroughly. Identify weak areas and work on them. Time management is the key to clearing the Prelims cutoff.\n\n---\n\n## 14. Previous Year Cut-off Trends & Exam Difficulty\n\nThe IBPS RRB Office Assistant Prelims exam is known for its high cut-offs due to the relatively easier difficulty level compared to IBPS PO or SBI PO. Candidates often attempt 75+ out of 80 questions.\n\n### Cut-off Trends (State-wise Variations):\nCut-offs vary drastically from state to state based on vacancies and competition. Historically:\n- High competition states (UP, Haryana, Rajasthan, MP) see cut-offs ranging from **73 to 77** out of 80 in Prelims.\n- Moderate competition states see cut-offs around **68 to 72**.\n- North-eastern states often have lower cut-offs (around **60 to 65**).\n\n### Exam Difficulty:\n- **Prelims:** Easy to Moderate. The challenge lies entirely in speed and accuracy within the 45-minute window.\n- **Mains:** Moderate to Difficult. The questions test conceptual clarity and deep understanding, especially in Reasoning and DI.\n\n---\n\n## 15. How to Apply Online\n\nFollow these steps to apply for the IBPS RRB 15th Recruitment 2026:\n1. Visit the official website of IBPS (www.ibps.in).\n2. Click on the link for \"CRP RRBs XV - Office Assistant (Multipurpose)\".\n3. Click on \"Click here for New Registration\" and enter your basic details to generate a Registration Number and Password.\n4. Upload scanned photographs, signatures, left thumb impression, and a handwritten declaration as per the specified dimensions.\n5. Fill in all personal, educational, and experience details carefully. Choose your state and bank preferences wisely.\n6. Preview the application form to ensure all details are correct.\n7. Pay the application fee online.\n8. Submit the form and take a printout of the e-receipt and application form for future reference.\n\n---\n\n## 16. Admit Card Details\n\nAdmit cards for Prelims and Mains are released separately, approximately 10-14 days before the exam date. Candidates must access it from the official IBPS website using their Registration No / Roll No and Password / DOB. The admit card contains vital information such as exam venue, date, reporting time, and specific instructions. A hard copy of the admit card, along with an original Photo ID and its photocopy, is mandatory to carry to the exam center.\n\n---\n\n## 17. Result and Scorecard\n\nIBPS follows a transparent process.\n- **Prelims Result:** Shows the qualifying status (Shortlisted for Mains or not).\n- **Prelims Scorecard:** Released a week after the result, showing section-wise and overall marks obtained and the state cut-off.\n- **Mains Result:** This is the final result for provisional allotment, as there is no interview.\n- **Final Scorecard:** Shows the marks obtained in the Mains exam based on which the final merit list is prepared.\n\n---\n\n## 18. Training and Probation Period\n\nNewly recruited Office Assistants undergo a rigorous induction training program. This training familiarizes them with banking software, operational guidelines, customer service protocols, and RRB-specific banking policies. Following the training, candidates are placed on a **probation period of 6 months**. During this period, their performance is closely monitored, and upon successful completion, they are confirmed as permanent employees of the bank.\n\n---\n\n## 19. Work Environment and Culture\n\nWorking in a Regional Rural Bank is highly rewarding. The work environment is deeply rooted in rural and semi-urban communities. Employees enjoy fixed working hours (typically 10 AM to 5 PM), ensuring an excellent work-life balance compared to many corporate sector jobs. The culture is collaborative, and officers often build strong relationships with local customers, earning immense respect from the farming and rural communities they serve.\n\n---\n\n## 20. Frequently Asked Questions (FAQs)\n\n**Q1. Is there an interview for the IBPS RRB Office Assistant post?**\nNo, there is no interview for the Office Assistant (Clerk) post. Selection is purely based on the Mains examination marks.\n\n**Q2. Can a final year graduation student apply for IBPS RRB 2026?**\n\nCandidates must possess a valid Mark-sheet / Degree Certificate proving they are a graduate on the day they register and indicate the percentage of marks obtained. Final year students waiting for results are typically not eligible unless the result is declared on or before the cutoff date mentioned in the notification.\n\n**Q3. Is proficiency in the local language mandatory?**\nYes, it is strictly mandatory. Candidates must either have studied the language at the 8th std level or above, or they will have to pass a Local Language Test before joining.\n\n**Q4. Can I apply for a state other than my home state?**\nYes, you can apply from any state, provided you are proficient in the official local language of that state.\n\n**Q5. Is there negative marking in the exam?**\nYes, 0.25 marks are deducted for every incorrect answer in both the Preliminary and Main examinations.\n\n---\n\n## 21. Important Links\n\n- **Official IBPS Website:** [Click Here](https://www.ibps.in)\n- **View IBPS RRB 15th Notification PDF:** (Link will be updated once released)\n- **Apply Online Link:** (Link will be updated once released)\n- **Syllabus and Exam Pattern Guide:** [Click Here](#)\n\n*(Ensure to bookmark these links and visit the official website regularly for real-time updates).*\n\n---\n\n## 22. Conclusion\n\nThe **IBPS RRB 15th Recruitment 2026** for 13,706 Office Assistant posts is undoubtedly one of the biggest recruitment drives of the year. With a strategic study plan, consistent practice, and the right mindset, clearing this exam is highly achievable. The job offers a fantastic blend of stability, respectable salary, and the opportunity to make a tangible difference in rural India. Start your preparation early, take regular mock tests, and stay focused on your goal. We wish all the aspirants the very best of luck for their preparation journey!\n",
    "date": "18 सितंबर, 2026",
    "dateEn": "18 September, 2026",
    "author": "TypeHindi Team",
    "category": "Exam Guide"
  },
  {
    slug: "ssc-chsl-recruitment-2026-how-to-pass-typing-test",
    titleEn: "SSC CHSL Recruitment 2026: How to Pass the Typing Test",
    excerptEn: "Comprehensive guide to SSC CHSL 2026 Typing Test & Skill Test for LDC, JSA, and DEO posts. Covers 35 WPM English, 30 WPM Hindi in Mangal font, 10-minute test rules, key depressions, 30-day preparation plan, and tips to qualify Tier-II.",
    dateEn: "08 September, 2026",
    title: "SSC CHSL भर्ती 2026: टाइपिंग टेस्ट कैसे पास करें, 35 WPM इंग्लिश व 30 WPM हिंदी (मंगल फॉन्ट), नियम और तैयारी की रणनीति",
    excerpt: "SSC CHSL 2026 भर्ती में LDC, JSA व DEO पदों के लिए टाइपिंग टेस्ट व स्किल टेस्ट की पूरी जानकारी। 35 WPM इंग्लिश, 30 WPM हिंदी (मंगल फॉन्ट), 10 मिनट टेस्ट और परीक्षा पास करने का 30-दिवसीय प्लान।",
    date: "08 सितंबर, 2026",
    author: "TypeHindi Team",
    category: "Exam Guide",
    contentEn: "\n# SSC CHSL Recruitment 2026: How to Pass the Typing Test\n\n![SSC CHSL Recruitment 2026](/images/ssc-chsl-recruitment-2026-typing-test.jpg)\n\nThe **SSC Combined Higher Secondary (10+2) Level Examination, or SSC CHSL 2026**, is one of the most important government examinations for candidates looking for **LDC, JSA and Data Entry Operator jobs**. The 2026 notification has been issued by the Staff Selection Commission, with online applications scheduled from **7 September 2026 to 7 October 2026**. The examination includes posts such as **Lower Divisional Clerk (LDC), Junior Secretariat Assistant (JSA), Data Entry Operator (DEO) and Data Entry Operator Grade A**. \n\nFor typing aspirants, SSC CHSL is particularly important because **Tier-II contains a dedicated Skill Test/Typing Test**. LDC and JSA candidates have to qualify in a computer-based typing test, while DEO candidates have a separate data-entry skill test with key-depression requirements. \n\nThe good news is that the CHSL typing test is not something you need to fear. With the right practice method, a candidate can improve both speed and accuracy systematically.\n\nThis guide explains exactly what the typing test involves, what speed you need, what happens during the test, how Hindi and English typing differ, how **[Mangal font](/mangal-font-typing-test)** works, how to practice on our **[Typing Test Simulator](/test)**, what mistakes candidates commonly make and how to build a preparation plan that actually works.\n\n---\n\n# SSC CHSL 2026: Quick Overview\n\n| Particular | Details |\n| --- | --- |\n| Examination | SSC CHSL 2026 |\n| Main Posts | LDC, JSA, DEO, DEO Grade A |\n| Qualification | 12th Pass |\n| Application Dates | 7 September to 7 October 2026 |\n| Last Time to Apply | 7 October 2026, 11:00 PM |\n| Tier-I | Computer Based Examination |\n| Tier-II | Computer Based Examination |\n| Typing Test for LDC/JSA | Yes |\n| English Typing Speed | 35 WPM |\n| Hindi Typing Speed | 30 WPM |\n| Typing Test Duration | 10 Minutes |\n| Hindi Font | Mangal |\n| DEO Skill Test | Yes |\n| Typing/Skill Test Nature | Qualifying |\n\nThe examination has two computer-based tiers. Tier-II contains four sections, with **Section IV specifically dedicated to the Skill Test/Typing Test**.\n\n> 🎯 **Free Preparation Tools for SSC CHSL 2026 on TypeHindi:**\n> - ⏱️ **[10-Minute Exam Typing Test](/test)** — Practice with the official SSC 10-minute timer and real-time accuracy scoring.\n> - ⌨️ **[Mangal Font Typing Test Simulator](/mangal-font-typing-test)** — The exact Unicode font and layout required by SSC for LDC/JSA Hindi typing.\n> - 📖 **[Touch Typing Lessons for Beginners](/learn)** — Step-by-step guidance on finger placement, home-row keys, and matras.\n> - 🗺️ **[Hindi InScript Keyboard Layout Guide](/keyboard-layout)** — Complete visual map of keys, half-letters, and conjuncts.\n> - 🎮 **[Typing Speed Games](/game)** — Build reflex speed and finger muscle memory.\n\n--- \n\n---\n\n# Is There a Typing Test in SSC CHSL 2026?\n\n## Yes.\n\nCandidates applying for **LDC/JSA** have to appear for the **Typing Test** in Tier-II.\n\nCandidates applying for **DEO and DEO Grade A** appear for a **Skill Test** rather than the LDC/JSA typing test. \n\nThe typing or skill test is conducted in **Session-II of Tier-II on the same day** after the earlier sections of Tier-II are completed. The Skill/Typing Test is **qualifying in nature**. \n\nThis means the typing test is essential for qualifying, but it is not treated in the same way as a section where marks are added directly to your competitive score.\n\n---\n\n# SSC CHSL Typing Test for LDC/JSA\n\nFor LDC and JSA, candidates can select either:\n\n### English Typing\n\nor\n\n### Hindi Typing\n\nThe official requirement is:\n\n**English: 35 words per minute**\n\n**Hindi: 30 words per minute**\n\nThe Commission states that these speeds correspond approximately to:\n\n**10,500 key depressions per hour for English**\n\nand\n\n**9,000 key depressions per hour for Hindi**. \n\nThe typing speed is judged by typing a **given passage accurately on a computer for 10 minutes**. \n\nThis is the most important information for an LDC/JSA typing aspirant.\n\n---\n\n# What Does 35 WPM Actually Mean?\n\nWPM means:\n\n### Words Per Minute\n\nSo if you are taking the English typing test, you need to demonstrate the required typing speed of **35 words per minute**.\n\nHowever, candidates should not prepare to type exactly 35 WPM.\n\nThere is a major difference between:\n\n**Can type 35 WPM in practice**\n\nand\n\n**Can reliably type above 35 WPM during an examination.**\n\nOn exam day, several things can affect your performance:\n\n* Nervousness\n* Different keyboard\n* Different passage\n* Unfamiliar setup\n* Pressure\n* Mistakes\n* Losing your rhythm\n\nSo a better preparation target is to build a comfortable buffer.\n\nA candidate who consistently types around **45–50 WPM with good accuracy** will generally enter the test with much more confidence than someone who is barely touching 35 WPM.\n\n---\n\n# What Does 30 WPM Hindi Mean?\n\nFor candidates choosing Hindi typing, the requirement is:\n\n### 30 WPM\n\nThis corresponds to approximately **9,000 key depressions per hour**. \n\nThe Hindi typing test is particularly important for users of TypeHindi because the SSC notification specifies an exact font requirement.\n\n---\n\n# SSC CHSL Hindi Typing Test Uses Mangal Font\n\nThis is one of the most important details in the entire notification.\n\nCandidates opting for Hindi as the medium of the typing/skill test for LDC/JSA are required to type using:\n\n## Mangal Font\n\nThe notification clearly states that using any other font can result in **non-qualification in the typing/skill test**. \n\nSo if you are preparing for the Hindi CHSL typing test, don't practice only in some random Hindi font.\n\nYou should become comfortable with the **[Mangal-based Hindi typing environment](/mangal-font-typing-test)** and study the **[Hindi InScript keyboard layout](/keyboard-layout)** well before the examination.\n\nOn **[TypeHindi](/practice)**, candidates can practice with realistic passages in the exact same environment they will encounter in the actual test.\n\n---\n\n# What Is the SSC CHSL Typing Test Duration?\n\nThe standard typing test duration is:\n\n## 10 Minutes\n\nCandidates have to type the given passage on a computer, and the speed is judged on the basis of **accurate typing**. \n\nThis is why random short typing drills are not enough.\n\nYou should regularly practice the complete **[10-minute test format](/test)** to build genuine finger endurance.\n\n---\n\n# Is the Typing Test Qualifying?\n\nYes.\n\nThe Skill Test/Typing Test in Tier-II is explicitly described as **qualifying in nature**. \n\nThis creates a different strategy from the written examination.\n\nIn the written exam, you are trying to maximize marks.\n\nIn the typing test, the main objective is:\n\n### Cross the required standard without making too many mistakes.\n\nThat means:\n\n**Accuracy first → Speed second**\n\nOnce you can type accurately, speed becomes much easier to improve.\n\n---\n\n# How the SSC CHSL Selection Process Connects to Typing\n\nTier-II is divided into several sections.\n\n### Section I\n\nMathematical Abilities + Reasoning and General Intelligence\n\n### Section II\n\nEnglish Language and Comprehension + General Awareness\n\n### Section III\n\nComputer Knowledge Test\n\n### Section IV\n\nSkill Test / Typing Test\n\nSection IV is conducted in Session-II after the earlier sections. The Commission states that candidates must qualify all the required sections of Tier-II, while the Computer Knowledge Test and Skill/Typing Test have their specified qualifying character. \n\nTherefore, a typing aspirant cannot ignore the written portions of CHSL.\n\nYou need both:\n\n**Written Examination Preparation**\n\nand\n\n**Typing Preparation**\n\n---\n\n# SSC CHSL DEO Skill Test\n\nCandidates applying for Data Entry Operator positions have a different requirement.\n\nFor certain DEO/DEO Grade A posts, the skill test requires:\n\n### 15,000 key depressions per hour\n\nThe test lasts:\n\n### 15 minutes\n\nA passage containing approximately **3,700–4,000 key depressions** is provided. \n\nFor other DEO and DEO Grade A posts, the requirement is:\n\n### 8,000 key depressions per hour\n\nThe test is again conducted for:\n\n### 15 minutes\n\nwith approximately **2,000–2,200 key depressions** in the passage. \n\nThe exact DEO skill-test requirement therefore depends on the post you are applying for.\n\n---\n\n# LDC/JSA vs DEO: Which Typing Test Is Harder?\n\nThey are not directly comparable because the tests are measured differently.\n\n| Feature | LDC/JSA | DEO |\n| --- | --- | --- |\n| Test Type | Typing Test | Skill Test |\n| English | 35 WPM | Key depressions/hour |\n| Hindi | 30 WPM | Not the same LDC/JSA format |\n| Duration | 10 minutes | 15 minutes |\n| Nature | Qualifying | Qualifying |\n| Main Focus | Typing speed + accuracy | Data-entry speed + accuracy |\n\nDEO candidates should therefore practice specifically for **key depression-based data entry**, while LDC/JSA candidates should practice their selected typing language.\n\n---\n\n# How to Pass the SSC CHSL Typing Test\n\nThe best strategy is not complicated.\n\nYou need to build:\n\n### Speed\n\n### Accuracy\n\n### Endurance\n\n### Familiarity with the Test Format\n\nThe biggest mistake is trying to increase speed too quickly.\n\nA candidate who jumps from 25 WPM to 45 WPM without fixing accuracy will often find that their error rate also increases. You can also play our interactive **[Typing Games](/game)** to build finger dexterity and muscle memory naturally.\n\nInstead, build your speed gradually.\n\n---\n\n# Step 1: Learn Touch Typing\n\nThe first goal should be reducing dependence on looking at the keyboard.\n\nYour fingers should learn the key positions through repetition.\n\nFor English typing, focus on:\n\n* Home-row position\n* Finger placement\n* Proper use of Shift\n* Spacebar control\n* Backspace usage\n* Punctuation\n\nFor Hindi typing, become comfortable with the specific keyboard layout used for your chosen practice system and the Mangal-font environment required by SSC.\n\nThe less you look down at the keyboard, the easier it becomes to maintain rhythm.\n\n---\n\n# Step 2: Build Accuracy First\n\nSuppose you can type:\n\n**40 WPM with 95% accuracy**\n\nand another candidate types:\n\n**45 WPM with frequent errors.**\n\nThe first candidate has the more useful foundation.\n\nYour practice should therefore focus on producing clean passages on our **[Typing Practice tool](/practice)**.\n\nDon't restart the entire test every time you make one mistake.\n\nLearn to continue typing while maintaining rhythm.\n\n---\n\n# Step 3: Practice Common Words\n\nA large amount of typing consists of repeated patterns.\n\nEnglish practice should include common combinations and frequently used words.\n\nFor example:\n\n* government\n* department\n* examination\n* candidate\n* application\n* development\n* information\n* important\n* selection\n* document\n\nThe more familiar these patterns become, the less mental effort you need to type them.\n\nFor Hindi typing, practice common words, matras, conjuncts and frequently occurring character combinations.\n\n---\n\n# Step 4: Practice Full 10-Minute Tests\n\nThis is essential.\n\nEvery day or on most practice days, complete at least one full:\n\n## **[10-Minute Typing Test on TypeHindi](/test)**\n\nDo not spend all your time on 30-second or one-minute tests.\n\nShort tests are useful for measuring peak speed.\n\nBut SSC CHSL gives you a 10-minute task.\n\nYou need to learn how to maintain performance for the entire period.\n\n---\n\n# Step 5: Practice Under Exam Conditions\n\nYour practice environment should sometimes simulate the real test.\n\nTurn off distractions.\n\nSit properly.\n\nUse a normal keyboard.\n\nStart a timer.\n\nOpen a passage.\n\nBegin typing.\n\nDon't pause unnecessarily.\n\nDo not listen to music while doing serious test practice.\n\nThe goal is to make the examination environment feel familiar.\n\n---\n\n# Step 6: Build a Safety Buffer\n\nFor English, the required level is:\n\n### 35 WPM\n\nFor Hindi:\n\n### 30 WPM\n\nBut your practice target should be higher.\n\nA useful target could be:\n\n### English: 45–50 WPM+\n\n### Hindi: 38–45 WPM+\n\nThe exact target is not an SSC requirement; it is simply a preparation buffer.\n\nThe stronger your practice speed, the more comfortable the actual minimum requirement becomes.\n\n---\n\n# Step 7: Stop Chasing Maximum Speed\n\nThis is one of the most common mistakes.\n\nSuppose your normal performance is:\n\n**38 WPM at high accuracy.**\n\nYou don't necessarily need to force yourself to type at 50 WPM immediately.\n\nInstead, work toward:\n\n**40 → 42 → 44 → 46 WPM**\n\nwhile maintaining accuracy.\n\nThe objective is not to produce a record-breaking speed.\n\nThe objective is to **qualify reliably in the actual examination**.\n\n---\n\n# How to Improve Hindi Typing for SSC CHSL\n\nHindi typing requires additional preparation because the notification specifically specifies **Mangal font** for the LDC/JSA Hindi typing test. \n\nA Hindi typing learner should therefore practice:\n\n### 1. **[Mangal Environment](/mangal-font-typing-test)**\n\nPractice in the same font environment on our **[Mangal Font Typing Test](/mangal-font-typing-test)** that the SSC requirement specifies.\n\n### 2. Matras\n\nWords containing different vowel signs should be practiced regularly.\n\n### 3. Half Letters\n\nPractice words involving half characters and conjunct formations.\n\n### 4. Common Hindi Words\n\nBuild familiarity with everyday and administrative vocabulary.\n\n### 5. Full Passages\n\nEventually move from individual words to complete paragraphs and 10-minute tests.\n\n---\n\n# How to Improve English Typing for SSC CHSL\n\nEnglish typing is often easier to start with because most learners already have some exposure to the QWERTY keyboard.\n\nBut passing the test still requires deliberate practice.\n\nFocus on:\n\n### Home Row\n\nLearn proper finger positioning.\n\n### Frequently Used Letters\n\nBuild automatic finger movement.\n\n### Shift Keys\n\nPractice capital letters without slowing down.\n\n### Punctuation\n\nDon't ignore commas, full stops, quotation marks and other punctuation.\n\n### Numbers\n\nPractice occasional numerical content so that numbers don't destroy your rhythm.\n\n---\n\n# What Is More Important: Speed or Accuracy?\n\nFor the SSC CHSL typing test, **accuracy is extremely important** because the Commission states that typing speed is adjudged on the basis of the accurate entry of the given passage. \n\nA useful practice rule is:\n\n## Never sacrifice accuracy just to increase WPM.\n\nIf you are making many mistakes, slow down slightly.\n\nOnce your fingers become more familiar with the keyboard, the speed will naturally rise.\n\n---\n\n# What Should You Do When You Make a Typing Mistake?\n\nDon't panic.\n\nA mistake doesn't mean the test is over.\n\nThe worst reaction is to stop completely, search for the key, become nervous and lose several more seconds.\n\nTrain yourself to recover quickly.\n\nDuring practice, learn:\n\n**Mistake → Correct → Continue**\n\nrather than:\n\n**Mistake → Panic → Stop → Restart**\n\nThe more mock tests you take, the more naturally this becomes.\n\n---\n\n# Should You Use Backspace Frequently?\n\nBackspace can be useful, but excessive correction can destroy your rhythm.\n\nYour practice should teach you to maintain a balance.\n\nFor serious test simulations, concentrate on:\n\n**Typing continuously + minimizing errors**\n\nrather than constantly stopping after every typo.\n\nYour final goal is controlled typing, not frantic typing.\n\n---\n\n# A 30-Day SSC CHSL Typing Plan\n\n## Week 1: Build the Foundation\n\nPractice for:\n\n**20–30 minutes daily**\n\nFocus on:\n\n* Finger placement\n* Keyboard familiarity\n* Accuracy\n* Basic words\n* Common patterns\n\nDon't worry too much about speed.\n\n---\n\n## Week 2: Increase Practice Volume\n\nMove toward:\n\n**30–40 minutes daily**\n\nStart introducing:\n\n* Longer passages\n* Timed practice\n* Punctuation\n* Difficult words\n* Common exam vocabulary\n\nBegin monitoring your WPM and accuracy.\n\n---\n\n## Week 3: Full Test Practice\n\nPractice:\n\n**40–50 minutes daily**\n\nInclude at least one complete:\n\n**10-minute SSC-style test**\n\nevery practice session.\n\nTry to maintain your target speed without excessive mistakes.\n\n---\n\n## Week 4: Exam Simulation\n\nNow focus on realistic conditions.\n\nPractice:\n\n* 10-minute tests\n* Different passages\n* Different difficulty levels\n* Minimal pauses\n* Consistent speed\n* Accuracy\n\nYour goal is to make your qualifying speed feel comfortable.\n\n---\n\n# How Much Should You Practice Every Day?\n\nThere is no single perfect number of minutes, but consistency matters more than occasional marathon sessions.\n\nA useful routine is:\n\n### Beginner\n\n20–30 minutes\n\n### Intermediate\n\n30–45 minutes\n\n### Advanced / Exam Preparation\n\n45–60 minutes\n\nYou can divide this into:\n\n**10 minutes warm-up**\n\n*\n\n**10–20 minutes accuracy practice**\n\n*\n\n**10–20 minutes timed test**\n\nThis is usually more productive than doing an uncontrolled one-hour typing session.\n\n---\n\n# A Good Daily Practice Routine\n\nTry this structure:\n\n### 5 Minutes\n\nWarm-up with common words.\n\n### 10 Minutes\n\nAccuracy-focused passage.\n\n### 10 Minutes\n\nSpeed practice.\n\n### 10 Minutes\n\nFull SSC-style test.\n\n### 5 Minutes\n\nReview errors.\n\nThe last step is often ignored.\n\nBut analyzing your mistakes tells you what needs improvement.\n\n---\n\n# Track the Right Statistics\n\nDon't track only WPM.\n\nRecord:\n\n**WPM**\n\n**Accuracy**\n\n**Errors**\n\n**Words Typed**\n\n**Best Score**\n\n**Average Score**\n\nThis helps you identify whether your improvement is genuine.\n\nFor example:\n\nWeek 1:\n\n30 WPM / 96% accuracy\n\nWeek 2:\n\n34 WPM / 96% accuracy\n\nWeek 3:\n\n37 WPM / 97% accuracy\n\nWeek 4:\n\n41 WPM / 97% accuracy\n\nThat is a much healthier progression than:\n\nWeek 1:\n\n30 WPM / 98%\n\nWeek 2:\n\n38 WPM / 90%\n\nWeek 3:\n\n45 WPM / 82%\n\n---\n\n# Common Mistakes SSC CHSL Typing Aspirants Make\n\n## Practicing Only Short Tests\n\nA one-minute speed test does not prepare you for a 10-minute passage.\n\n## Chasing WPM\n\nTyping faster is useless if your error rate becomes too high.\n\n## Ignoring Punctuation\n\nCandidates often practice only ordinary words and become uncomfortable with punctuation during full passages.\n\n## Not Practicing in Mangal for Hindi\n\nThis is a serious mistake because the notification specifically requires **Mangal font** for Hindi LDC/JSA typing. \n\n## Using a Different Keyboard Layout\n\nBecome comfortable with the exact layout you will use for the test.\n\n## Practicing Only Easy Words\n\nReal passages contain longer and less familiar words.\n\n## Taking Long Breaks Between Practice Sessions\n\nTyping is a muscle-memory skill.\n\nConsistency matters.\n\n---\n\n# What About Candidates Who Are Slow Right Now?\n\nDon't worry.\n\nTyping speed improves with repetition.\n\nSomeone currently typing at:\n\n**20–25 WPM**\n\nshould not become obsessed with reaching 35 WPM in a few days.\n\nFirst reach:\n\n**25 → 28 → 30 → 32 → 35**\n\nThen build a buffer above the requirement.\n\nThe objective is controlled improvement.\n\n---\n\n# Can You Pass With 35 WPM Exactly?\n\nTechnically, the notified requirement is 35 WPM for English and 30 WPM for Hindi.\n\nBut relying on exactly the minimum is risky.\n\nYour actual examination performance can be lower than your best practice performance.\n\nTherefore:\n\n### Don't train to the minimum.\n\nTrain above the minimum.\n\nFor example:\n\n**English target: 45+ WPM**\n\n**Hindi target: 38–40+ WPM**\n\nAgain, these are preparation targets, not official SSC thresholds.\n\n---\n\n# What About DEO Candidates?\n\nDEO aspirants should not use the LDC/JSA 35 WPM benchmark as their main preparation target.\n\nTheir test is measured in **key depressions per hour**.\n\nFor some specified DEO posts, the target is:\n\n**15,000 key depressions per hour**\n\nFor other DEO/DEO Grade A posts:\n\n**8,000 key depressions per hour**\n\nBoth are conducted over 15 minutes under the respective skill-test formats. \n\nDEO candidates should therefore practice the specific data-entry format associated with their desired post. Candidates preparing for court or secretarial positions can also prepare their stenography in our **[Pitman Shorthand Section](/shorthand)** or check our **[Delhi High Court SPA/PA Recruitment Guide](/blog/delhi-high-court-recruitment-2026-spa-pa-typing-shorthand)**.\n\n---\n\n# What Happens If You Are Eligible for a Scribe?\n\nThe notification provides compensatory time for eligible candidates who qualify for the applicable scribe/assistive-technology provisions.\n\nFor the standard typing test, eligible candidates receive **5 additional minutes**, making the typing-test duration **15 minutes**. \n\nThe exact conditions and required certificates are specified in the examination notice.\n\n---\n\n# SSC CHSL Typing Test: Final Preparation Checklist\n\nBefore the examination, make sure you can comfortably do all of the following:\n\n**✓** Type above the required speed\n\n**✓** Maintain good accuracy\n\n**✓** Complete a 10-minute passage\n\n**✓** Handle punctuation\n\n**✓** Use the correct keyboard layout\n\n**✓** Recover quickly from mistakes\n\n**✓** Maintain speed without panicking\n\n**✓** For Hindi, practice using Mangal font\n\n**✓** Complete multiple mock tests\n\n**✓** Track your WPM and accuracy\n\n**✓** Practice under realistic examination conditions\n\n---\n\n# Final Verdict\n\nThe **SSC CHSL 2026 Typing Test** is very manageable when approached correctly.\n\nFor **LDC/JSA**, candidates must qualify a **10-minute computer-based typing test** at:\n\n**35 WPM in English**\n\nor\n\n**30 WPM in Hindi**. \n\nCandidates choosing Hindi must use **Mangal font**, making it important to practice in the correct environment before the examination. \n\nFor **DEO and DEO Grade A**, the recruitment uses a separate skill test measured through key depressions per hour, with requirements of either **15,000 or 8,000 key depressions per hour**, depending on the applicable post. \n\nThe most effective way to prepare is simple:\n\n**Learn proper typing technique**\n\n↓\n\n**Build accuracy**\n\n↓\n\n**Increase speed gradually**\n\n↓\n\n**Practice complete 10-minute tests**\n\n↓\n\n**Train above the minimum requirement**\n\n↓\n\n**Repeat until exam speed feels comfortable**\n\nDon't make 35 WPM your final goal. Make it your **minimum safety line**.\n\nA candidate who can consistently type around 45–50 WPM in English or comfortably above 30 WPM in Hindi, while maintaining good accuracy, enters the examination with a much stronger margin.\n\nAnd remember: the typing test is only one part of SSC CHSL. Tier-II also contains Mathematical Abilities, Reasoning, English, General Awareness and Computer Knowledge, so your overall preparation must cover the complete examination. \n\n**Practice every day. Build speed without sacrificing accuracy. When the 10-minute timer starts, your fingers should already know what to do.**\n",
    content: "\n# SSC CHSL भर्ती 2026: टाइपिंग टेस्ट कैसे पास करें, 35 WPM इंग्लिश व 30 WPM हिंदी (मंगल फॉन्ट), नियम और तैयारी की रणनीति\n\n![SSC CHSL Recruitment 2026](/images/ssc-chsl-recruitment-2026-typing-test.jpg)\n\n**कर्मचारी चयन आयोग (SSC) द्वारा संयुक्त उच्चतर माध्यमिक (10+2) स्तरीय परीक्षा, यानी SSC CHSL 2026** की अधिसूचना जारी कर दी गई है। सरकारी विभागों और मंत्रालयों में **लोअर डिवीजन क्लर्क (LDC), जूनियर सेक्रेटेरिएट असिस्टेंट (JSA), डाटा एंट्री ऑपरेटर (DEO) और डाटा एंट्री ऑपरेटर ग्रेड A** के पदों पर भर्ती के लिए ऑनलाइन आवेदन **7 सितंबर 2026 से 7 अक्टूबर 2026** तक आमंत्रित किए गए हैं।\n\nटाइपिंग और स्किल टेस्ट की तैयारी करने वाले अभ्यर्थियों के लिए SSC CHSL बेहद महत्वपूर्ण परीक्षा है, क्योंकि **Tier-II में सेक्शन IV के तहत अनिवार्य स्किल टेस्ट / टाइपिंग टेस्ट** आयोजित किया जाता है। LDC एवं JSA पदों के लिए कंप्यूटर आधारित टाइपिंग टेस्ट पास करना अनिवार्य होता है, जबकि DEO पदों के लिए की-डिप्रेशन (Key Depressions) आधारित डाटा एंट्री स्किल टेस्ट होता है।\n\nअच्छी बात यह है कि CHSL टाइपिंग टेस्ट से घबराने की कोई आवश्यकता नहीं है। सही रणनीति, नियमित अभ्यास और उचित फॉन्ट के ज्ञान के साथ कोई भी अभ्यर्थी निर्धारित स्पीड और सटीकता (Accuracy) आसानी से हासिल कर सकता है।\n\nइस विस्तृत मार्गदर्शिका में टाइपिंग टेस्ट के सभी नियम, आवश्यक स्पीड, परीक्षा प्रक्रिया, हिंदी व इंग्लिश टाइपिंग का अंतर, मंगल फॉन्ट की अनिवार्यता, सामान्य गलतियां और 30 दिनों का ठोस तैयारी प्लान विस्तार से समझाया गया है।\n\n---\n\n# SSC CHSL 2026: मुख्य विवरण (Quick Overview)\n\n| विवरण | जानकारी |\n| --- | --- |\n| परीक्षा का नाम | SSC CHSL 2026 (10+2) |\n| मुख्य पद | LDC, JSA, DEO, DEO Grade A |\n| शैक्षणिक योग्यता | 12वीं पास (10+2) |\n| आवेदन तिथियां | 7 सितंबर से 7 अक्टूबर 2026 |\n| आवेदन की अंतिम तिथि | 7 अक्टूबर 2026, रात्रि 11:00 बजे |\n| Tier-I परीक्षा | कंप्यूटर आधारित परीक्षा (CBE) |\n| Tier-II परीक्षा | कंप्यूटर आधारित परीक्षा (CBE) |\n| LDC/JSA के लिए टाइपिंग टेस्ट | हां, अनिवार्य (Tier-II Session-II) |\n| इंग्लिश टाइपिंग स्पीड | 35 WPM (शब्द प्रति मिनट) |\n| हिंदी टाइपिंग स्पीड | 30 WPM (शब्द प्रति मिनट) |\n| टाइपिंग टेस्ट की अवधि | 10 मिनट |\n| हिंदी टाइपिंग फॉन्ट | केवल मंगल (Mangal Font) |\n| DEO स्किल टेस्ट | हां (की-डिप्रेशन प्रति घंटा) |\n| टेस्ट की प्रकृति | क्वालिफाइंग (Qualifying in Nature) |\n\nTier-II परीक्षा एक ही दिन दो सत्रों में आयोजित की जाती है, जिसमें सत्र-II (Session-II) पूरी तरह से स्किल टेस्ट / टाइपिंग टेस्ट के लिए समर्पित होता है।\n\n> 🎯 **TypeHindi पर SSC CHSL 2026 के लिए मुफ़्त टूल्स:**\n> - ⏱️ **[10-मिनट टाइपिंग टेस्ट सिमुलेटर](/test)** — SSC के वास्तविक टाइमर और शुद्धता गणना के साथ अभ्यास करें।\n> - ⌨️ **[मंगल फॉन्ट टाइपिंग टेस्ट](/mangal-font-typing-test)** — SSC द्वारा LDC/JSA के लिए अनिवार्य मंगल फॉन्ट पर आधारित टेस्ट।\n> - 📖 **[टच टाइपिंग सीखें (शुरुआती पाठ)](/learn)** — बिना कीबोर्ड देखे टाइप करने की तकनीक सीखें।\n> - 🗺️ **[इनस्क्रिप्ट कीबोर्ड लेआउट गाइड](/keyboard-layout)** — स्वर, व्यंजन और मात्राओं का सचित्र मैप।\n> - 🎮 **[टाइपिंग स्पीड गेम्स](/game)** — गेम खेलते हुए उंगलियों की गति बढ़ाएं।\n\n---\n\n---\n\n# क्या SSC CHSL 2026 में टाइपिंग टेस्ट होता है?\n\n## हां, बिल्कुल।\n\n* **LDC और JSA** के पदों के लिए आवेदन करने वाले सभी अभ्यर्थियों को Tier-II में **टाइपिंग टेस्ट** देना होता है।\n* **DEO और DEO Grade A** पदों के लिए आवेदन करने वाले अभ्यर्थियों के लिए **डाटा एंट्री स्किल टेस्ट** आयोजित किया जाता है।\n* टाइपिंग या स्किल टेस्ट Tier-II के लिखित सेक्शन समाप्त होने के बाद उसी दिन Session-II में लिया जाता है।\n* यह टेस्ट **क्वालिफाइंग (Qualifying)** प्रकृति का होता है—अर्थात इसके अंक अंतिम मेरिट सूची में नहीं जुड़ते, लेकिन इसे पास करना नौकरी पाने के लिए 100% अनिवार्य है।\n\n---\n\n# LDC/JSA के लिए टाइपिंग टेस्ट के आधिकारिक नियम\n\nLDC और JSA पदों के अभ्यर्थी आवेदन भरते समय अपनी टाइपिंग का माध्यम चुन सकते हैं:\n\n### 1. इंग्लिश टाइपिंग (English Typing)\nअथवा\n### 2. हिंदी टाइपिंग (Hindi Typing)\n\nआधिकारिक न्यूनतम आवश्यकता निम्नलिखित है:\n\n* **इंग्लिश टाइपिंग:** 35 शब्द प्रति मिनट (WPM)\n* **हिंदी टाइपिंग:** 30 शब्द प्रति मिनट (WPM)\n\nआयोग के अनुसार यह स्पीड लगभग:\n* इंग्लिश के लिए **10,500 की-डिप्रेशन प्रति घंटा (Key Depressions Per Hour)**\n* हिंदी के लिए **9,000 की-डिप्रेशन प्रति घंटा** के बराबर होती है।\n\nअभ्यर्थियों को कंप्यूटर स्क्रीन पर दिए गए पैसेज को **10 मिनट की निर्धारित समय सीमा** में सटीकता के साथ टाइप करना होता है।\n\n---\n\n# 35 WPM इंग्लिश टाइपिंग का वास्तविक अर्थ क्या है?\n\nWPM का पूर्ण रूप **Words Per Minute (शब्द प्रति मिनट)** होता है।\n\nयदि आप इंग्लिश टाइपिंग चुनते हैं, तो आपको 10 मिनट में लगभग 350 शब्द (या लगभग 1750 की-डिप्रेशन) सही-सही टाइप करने होंगे।\n\nलेकिन ध्यान रखें: **प्रैक्टिस में 35 WPM निकालना और असली परीक्षा हॉल में 35 WPM निकालना दो बिल्कुल अलग बातें हैं।**\n\nपरीक्षा हॉल में कई परिस्थितियां आपके प्रदर्शन को प्रभावित करती हैं:\n* परीक्षा का स्वाभाविक तनाव व घबराहट\n* अलग प्रकार का कीबोर्ड (हार्ड या ढीली कीज़)\n* अन्य अभ्यर्थियों के कीबोर्ड खटखटाने की आवाज\n* नया पैसेज और समय का दबाव\n* गलतियों के कारण लय (Rhythm) टूटना\n\nइसलिए आपकी तैयारी का लक्ष्य केवल 35 WPM नहीं होना चाहिए। आपको **45 से 50 WPM** की स्पीड और 95%+ एक्यूरेसी का सुरक्षित बफर (Safety Buffer) तैयार करना चाहिए ताकि परीक्षा के दिन आप पूरे आत्मविश्वास के साथ क्वालिफाई कर सकें।\n\n---\n\n# 30 WPM हिंदी टाइपिंग का क्या अर्थ है?\n\nहिंदी माध्यम चुनने वाले अभ्यर्थियों के लिए न्यूनतम गति **30 WPM** निर्धारित है, जो लगभग 9,000 की-डिप्रेशन प्रति घंटा के बराबर है।\n\nहिंदी टाइपिंग इंग्लिश की तुलना में थोड़ी अधिक तकनीकी होती है क्योंकि इसमें मात्राएं (Matras), आधे अक्षर (Halant/Conjuncts) और शिफ्ट की का व्यापक उपयोग होता है।\n\n---\n\n# SSC CHSL हिंदी टाइपिंग टेस्ट में केवल \"मंगल फॉन्ट\" मान्य है\n\nयह इस परीक्षा का सबसे महत्वपूर्ण बिंदु है:\n\nSSC की आधिकारिक अधिसूचना में स्पष्ट रूप से निर्देश दिया गया है कि LDC/JSA हिंदी टाइपिंग टेस्ट के लिए केवल **मंगल फॉन्ट (Mangal Font)** का उपयोग किया जाएगा।\n\nकिसी भी अन्य फॉन्ट (जैसे कुर्ती देव - KrutiDev) में अभ्यास करना परीक्षा में नुकसानदेह साबित हो सकता है क्योंकि सिस्टम केवल यूनिकोड मंगल आधारित लेआउट स्वीकार करता है।\n\n**[TypeHindi.in](/)** पर आपको **[मंगल फॉन्ट टाइपिंग टेस्ट](/mangal-font-typing-test)** और **[इनस्क्रिप्ट कीबोर्ड लेआउट](/keyboard-layout)** पर पूरी तरह से मुफ़्त और सटीक परीक्षा सिमुलेशन मिलता है, जिससे आपकी तैयारी हूबहू सरकारी परीक्षा पैटर्न के अनुकूल होती है।\n\n---\n\n# टाइपिंग टेस्ट की समय अवधि कितनी होती है?\n\nमानक टाइपिंग टेस्ट की अवधि **10 मिनट** होती है।\n\nगति का मूल्यांकन दिए गए पैसेज की सटीक एंट्री के आधार पर किया जाता है। इसलिए 30 सेकंड या 1 मिनट के छोटे टेस्टों पर ही निर्भर न रहें। नियमित रूप से हमारे **[10-मिनट टाइपिंग टेस्ट सिमुलेटर](/test)** पर टेस्ट देने की आदत डालें ताकि आपकी उंगलियों की सहनशक्ति (Endurance) मजबूत हो सके।\n\n---\n\n# क्या टाइपिंग टेस्ट क्वालिफाइंग है?\n\nहां, Tier-II का स्किल/टाइपिंग टेस्ट पूरी तरह से **क्वालिफाइंग** है।\n\nइसका अर्थ यह है कि:\n* आपको अधिकतम अंक लाने की होड़ नहीं करनी है।\n* आपका प्राथमिक लक्ष्य निर्धारित गति और अनुमेय त्रुटि सीमा (Permissible Error Limit) के भीतर सुरक्षित रूप से पास होना है।\n* रणनीति स्पष्ट होनी चाहिए: **पहले एक्यूरेसी (Accuracy First) → फिर स्पीड (Speed Second)**।\n\n---\n\n# SSC CHSL चयन प्रक्रिया और Tier-II की संरचना\n\nTier-II परीक्षा को चार सेक्शनों में बांटा गया है:\n\n1. **सेक्शन I:** गणितीय क्षमताएं (Maths) + रीजनिंग और सामान्य बुद्धिमत्ता\n2. **सेक्शन II:** अंग्रेजी भाषा व समझ (English) + सामान्य जागरूकता (GK/GA)\n3. **सेक्शन III:** कंप्यूटर ज्ञान परीक्षा (Computer Knowledge Test)\n4. **सेक्शन IV:** स्किल टेस्ट / टाइपिंग टेस्ट (Session-II में आयोजित)\n\nअभ्यर्थियों को सभी आवश्यक सेक्शन क्वालिफाई करने होते हैं। अतः लिखित परीक्षा और टाइपिंग परीक्षा दोनों की तैयारी समानांतर चलनी चाहिए।\n\n---\n\n# SSC CHSL डाटा एंट्री ऑपरेटर (DEO) स्किल टेस्ट\n\nDEO पदों के लिए टाइपिंग टेस्ट के बजाय **डाटा एंट्री स्किल टेस्ट** होता है:\n* **कुछ विशिष्ट DEO पदों के लिए:** 15,000 की-डिप्रेशन प्रति घंटा (15 मिनट की परीक्षा में लगभग 3,700–4,000 की-डिप्रेशन का पैसेज)।\n* **अन्य DEO एवं DEO Grade A पदों के लिए:** 8,000 की-डिप्रेशन प्रति घंटा (15 मिनट में लगभग 2,000–2,200 की-डिप्रेशन का पैसेज)।\n\n| विशेषता | LDC / JSA | DEO / DEO Grade A |\n| --- | --- | --- |\n| टेस्ट का प्रकार | टाइपिंग टेस्ट (Typing Test) | स्किल टेस्ट (Skill Test) |\n| इंग्लिश स्पीड | 35 WPM | 8,000 या 15,000 की-डिप्रेशन/घंटा |\n| हिंदी स्पीड | 30 WPM (मंगल फॉन्ट) | संबंधित पद के अनुसार |\n| टेस्ट की अवधि | 10 मिनट | 15 मिनट |\n| टेस्ट की प्रकृति | क्वालिफाइंग | क्वालिफाइंग |\n| मुख्य फोकस | टाइपिंग स्पीड + एक्यूरेसी | डाटा एंट्री स्पीड + एक्यूरेसी |\n\n---\n\n# SSC CHSL टाइपिंग टेस्ट पास करने की अचूक रणनीति\n\n## 1. टच टाइपिंग सीखें (Touch Typing)\nकीबोर्ड की तरफ नीचे देखना बंद करें। हमारे **[टच टाइपिंग पाठों](/learn)** के जरिए अपनी उंगलियों को बिना देखे सभी कीज़ की स्थिति याद कराएं। होम रो (A S D F - J K L ;) पर हाथ की सही स्थिति बनाएं।\n\n## 2. पहले एक्यूरेसी पर ध्यान दें (Accuracy First)\nयदि आप 95% एक्यूरेसी के साथ 40 WPM टाइप करते हैं, तो वह 80% एक्यूरेसी पर 45 WPM टाइप करने वाले से कहीं बेहतर है। गलती होने पर तुरंत हड़बड़ाएं नहीं, अपनी लय बनाए रखें।\n\n## 3. सामान्य और कठिन शब्दों का अभ्यास करें\nपरीक्षा के पैसेज में प्रशासनिक, सरकारी और संवैधानिक शब्दावली (जैसे Government, Department, Administration, Development, Constitution) बार-बार आती है। इन शब्दों को अपनी फिंगर मेमोरी में बैठा लें।\n\n## 4. प्रतिदिन 10 मिनट के पूरे टेस्ट दें\nछोटे 1-मिनट के टेस्ट केवल उंगलियां गर्म करने के लिए अच्छे हैं। वास्तविक स्टेमिना के लिए रोजाना कम से कम 2 से 3 बार पूरे 10-मिनट का टेस्ट दें।\n\n## 5. परीक्षा जैसा माहौल बनाएं\nटाइपिंग करते समय गाने न सुनें। शांत कमरे में सीधे बैठकर सामान्य डेस्कटॉप कीबोर्ड से अभ्यास करें ताकि परीक्षा हॉल में कुछ भी नया न लगे।\n\n## 6. बैकस्पेस का संतुलित उपयोग करें\nबार-बार बैकस्पेस दबाने से आपकी गति बुरी तरह गिर जाती है। कोशिश करें कि टाइप करते समय गलती कम से कम हो, ताकि बैकस्पेस की आवश्यकता ही न पड़े।\n\n---\n\n# 30 दिनों का SSC CHSL टाइपिंग स्टडी प्लान\n\n* **सप्ताह 1 (बुनियाद मजबूत करें):** प्रतिदिन 20–30 मिनट अभ्यास। सही उंगली प्लेसमेंट, बेसिक शब्द और एक्यूरेसी पर फोकस।\n* **सप्ताह 2 (वॉल्यूम बढ़ाएं):** प्रतिदिन 30–40 मिनट। लंबे पैराग्राफ, विराम चिह्न (Punctuation) और टाइमर के साथ अभ्यास।\n* **सप्ताह 3 (फुल टेस्ट अभ्यास):** प्रतिदिन 40–50 मिनट। रोजाना 10-मिनट के कम से कम दो मॉक टेस्ट। WPM और एक्यूरेसी का विश्लेषण।\n* **सप्ताह 4 (एग्जाम सिमुलेशन):** प्रतिदिन 45–60 मिनट। विभिन्न कठिनाई स्तर के पैसेज, न्यूनतम बैकस्पेस और वास्तविक परीक्षा माहौल में अभ्यास।\n\n---\n\n# टाइपिंग परीक्षार्थियों द्वारा की जाने वाली 7 बड़ी गलतियां\n\n1. **केवल छोटे टेस्ट देना:** 1 मिनट के टेस्ट से 10 मिनट की परीक्षा नहीं निकलती।\n2. **केवल स्पीड के पीछे भागना:** अत्यधिक गलतियां होने पर अच्छी स्पीड भी बेकार हो जाती है।\n3. **विराम चिह्नों की अनदेखी:** कॉमा, फुल स्टॉप, कैपिटल लेटर्स का अभ्यास न करना।\n4. **हिंदी में गलत फॉन्ट चुनना:** मंगल के बजाय अन्य फॉन्ट पर समय बर्बाद करना।\n5. **कीबोर्ड बदलते रहना:** परीक्षा के नजदीक नया और अलग लेआउट वाला कीबोर्ड इस्तेमाल करना।\n6. **गलती होने पर घबरा जाना:** एक गलती होने पर टाइपिंग रोक देना और समय गंवाना।\n7. **अनियमित अभ्यास:** हफ्ते में दो दिन अभ्यास करना और बाकी दिन छोड़ देना।\n\n---\n\n# निष्कर्ष (Final Verdict)\n\nSSC CHSL 2026 का टाइपिंग टेस्ट पूरी तरह से साध्य है। LDC/JSA के लिए इंग्लिश में 35 WPM या हिंदी (मंगल फॉन्ट) में 30 WPM की गति 10 मिनट के टेस्ट में हासिल करनी होती है। \n\nअपनी तैयारी को 35 WPM तक सीमित न रखें; इंग्लिश में 45+ WPM और हिंदी में 38+ WPM का लक्ष्य बनाकर चलें। TypeHindi.in पर नियमित अभ्यास करें, अपनी एक्यूरेसी पर ध्यान दें और आत्मविश्वास के साथ परीक्षा में बैठें।\n",
  },
  {
    slug: "delhi-high-court-recruitment-2026-spa-pa-typing-shorthand",
    titleEn: "Delhi High Court Recruitment 2026: Senior Personal Assistant and Personal Assistant Vacancies, Typing Test, Shorthand, Eligibility, Salary and How to Apply",
    excerptEn: "Complete guide to Delhi High Court SPA & PA Recruitment 2026 for 150 vacancies. Check 40 WPM English typing test rules, 100/110 WPM shorthand criteria, Level 7/8 pay matrix, syllabus, and application process.",
    dateEn: "06 September, 2026",
    title: "दिल्ली उच्च न्यायालय भर्ती 2026: सीनियर पर्सनल असिस्टेंट व पर्सनल असिस्टेंट के 150 पद, टाइपिंग टेस्ट, शॉर्टहैंड, पात्रता, वेतन और आवेदन प्रक्रिया",
    excerpt: "दिल्ली हाईकोर्ट द्वारा सीनियर पर्सनल असिस्टेंट (SPA) और पर्सनल असिस्टेंट (PA) के 150 पदों पर भर्ती। 40 WPM टाइपिंग टेस्ट, 100/110 WPM शॉर्टहैंड, लेवल 7/8 वेतनमान और ऑनलाइन आवेदन की पूरी जानकारी।",
    date: "06 सितंबर, 2026",
    author: "TypeHindi Team",
    category: "Exam Guide",
    contentEn: `\n# Delhi High Court Recruitment 2026: Senior Personal Assistant and Personal Assistant Vacancies, Typing Test, Shorthand, Eligibility, Salary and How to Apply

![Delhi High Court Recruitment 2026](/images/delhi-high-court-spa-pa-recruitment-2026.jpg)

The **Delhi High Court, New Delhi** has announced recruitment for the posts of **Senior Personal Assistant (SPA)** and **Personal Assistant (PA)** through the **Senior Personal Assistant and Personal Assistant Examination 2026**.

For typing and stenography aspirants, this is one of the more important recruitment opportunities to watch because the selection process directly includes an **English Typing Test and English Shorthand Test**. Candidates who are preparing for SSC Stenographer, Court Stenographer, secretarial posts or other government typing examinations can find this recruitment particularly relevant.

The recruitment includes **117 vacancies for Senior Personal Assistant** and **33 vacancies for Personal Assistant**, taking the total number of advertised vacancies to **150**.

The posts require candidates to be graduates and have prescribed shorthand and English typing speeds. The selection process then moves through typing, shorthand, descriptive examination and interview stages.

This article explains the Delhi High Court Recruitment 2026 in detail, including vacancies, eligibility, age limit, typing test, shorthand test, written examination, fees, important dates, application procedure and preparation strategy.

---

# Delhi High Court Recruitment 2026: Overview

| Particular | Details |
|---|---|
| **Organization** | High Court of Delhi |
| **Recruitment** | Senior Personal Assistant and Personal Assistant Examination 2026 |
| **Total Vacancies** | 150 |
| **Senior Personal Assistant** | 117 |
| **Personal Assistant** | 33 |
| **Application Mode** | Online ([delhihighcourt.nic.in](https://delhihighcourt.nic.in)) |
| **Application Start** | 15 September 2026 |
| **Application Last Date** | 5 October 2026 |
| **Last Date Time** | 11:00 PM |
| **Correction Window** | 12 October to 14 October 2026 |
| **Minimum Qualification** | Graduation |
| **Typing Requirement** | 40 WPM English |
| **Shorthand Requirement – SPA** | 110 WPM English |
| **Shorthand Requirement – PA** | 100 WPM English |
| **Selection** | Typing + Shorthand + Descriptive Exam + Interview |
| **Exam Medium** | English |

The online application process begins on **15 September 2026 at 11:00 AM**, while the last date and time for submission is **5 October 2026 at 11:00 PM**.

The examination date and examination venue will be announced later through a public notice on the **[Delhi High Court Official Website](https://delhihighcourt.nic.in)**.

---

# Delhi High Court Vacancy 2026

The recruitment is divided into two posts.

## Senior Personal Assistant – 117 Vacancies

There are **117 vacancies** for Senior Personal Assistant.

The post is classified as **Group B** and is placed at **Level 8 of the 7th CPC Pay Matrix**.

The vacancy distribution includes General, EWS, OBC-NCL, SC and ST categories, along with horizontal reservation for eligible Persons with Benchmark Disabilities.

Out of the 117 vacancies, **7 vacancies are reserved horizontally for PwBD candidates**.

---

# Personal Assistant – 33 Vacancies

There are **33 vacancies** for Personal Assistant.

The Personal Assistant post is also classified as **Group B**, but is placed at **Level 7 of the 7th CPC Pay Matrix**.

The vacancies include EWS, OBC-NCL, SC and ST categories along with horizontal reservation for eligible PwBD candidates.

An important point for candidates is that there are **no General-category vacancies for the Personal Assistant post** in this recruitment.

Therefore, candidates should carefully check the category-wise vacancy details before applying.

---

# Total Vacancies

The complete vacancy count is:

| Post | Vacancies |
|---|---:|
| **Senior Personal Assistant** | 117 |
| **Personal Assistant** | 33 |
| **Total** | **150** |

This makes the recruitment particularly attractive for candidates preparing for shorthand and typing-based government jobs.

---

# Delhi High Court Senior Personal Assistant Eligibility

To apply for **Senior Personal Assistant**, candidates must meet both educational and skill requirements.

## Educational Qualification

Candidates must be:

**Graduates from a recognized University.**

The final result of the qualifying degree must have been declared on or before the last date of submission of the online application.

## Shorthand Requirement

Candidates must have:

### 110 words per minute in English Shorthand

## Typing Requirement

Candidates must have:

### 40 words per minute in English Typewriting on Computer

Candidates must also have:

### Good Working Knowledge of Computer

Therefore, the basic requirement can be summarized as:

**Graduation + 110 WPM Shorthand + 40 WPM English Typing + Computer Knowledge**

---

# Delhi High Court Personal Assistant Eligibility

For **Personal Assistant**, candidates must also be graduates from a recognized university.

The skill requirements are:

### 100 WPM English Shorthand

and

### 40 WPM English Typing on Computer

Candidates must also have good working knowledge of computers.

Therefore:

**Graduation + 100 WPM Shorthand + 40 WPM English Typing + Computer Knowledge**

is the basic eligibility combination.

---

# Typing Test in Delhi High Court Recruitment 2026

This is one of the most important sections for TypeHindi readers.

The Delhi High Court has made the **English Typing Test a qualifying stage**.

The test is conducted on computers.

## Duration

### 10 minutes

## Required Speed

### 40 words per minute

The typing speed calculation uses the **characters-with-space** method. Candidates can sharpen their continuous accuracy using the [TypeHindi Daily Practice Tool](/practice) and [Hindi InScript Keyboard Layout](/keyboard-layout).

This is important because candidates should not assume that the calculation is based only on the number of words appearing on the screen.

---

# How Many Mistakes Are Allowed in the Typing Test?

The permissible number of mistakes is:

### 3% of the total words typed

The typing test is qualifying in nature.

That means you need to successfully qualify the typing test before you can move forward in the selection process.

Marks from the typing test are **not added to the final merit list**.

So:

**Typing Test = Qualifying**

not

**Typing Test = Final Merit Marks**

This makes accuracy extremely important.

---

# What Does the Typing Test Mean for Candidates?

Candidates should not practice merely to touch 40 WPM.

A better strategy is to build a comfortable buffer.

For example, if your current speed is exactly 40 WPM but your accuracy is inconsistent, the margin for error is very small.

A safer preparation target would be to build:

**45–50+ WPM with strong accuracy**

so that you can comfortably handle the test conditions. You can evaluate your baseline speed through our [Mangal Font Hindi & English Typing Test](/mangal-font-typing-test).

The aim should be:

**Speed + Accuracy + Consistency**

rather than speed alone.

---

# Delhi High Court Shorthand Test – Senior Personal Assistant

Candidates who qualify the typing test move to the **English Shorthand Test**.

For Senior Personal Assistant, the required shorthand speed is:

## 110 words per minute

The shorthand test consists of:

### Dictation

A passage of:

**550 words**

is dictated in:

**5 minutes**

This corresponds to a speed of 110 words per minute.

---

# Transcription Time for Senior Personal Assistant

After dictation, candidates receive:

### 45 minutes

to transcribe the dictated passage on a computer.

There is **no additional time for reading the passage**.

Candidates therefore need to be comfortable with the entire process:

**Listen → Record in Shorthand → Read Notes → Type Accurately**

This is very different from an ordinary typing test.

---

# Mistakes Allowed in the SPA Shorthand Test

The permitted mistakes are:

### 5% of the total words dictated

Since the dictation contains 550 words, the maximum permissible level is **27.5 mistakes**.

Candidates making more than the prescribed limit are disqualified.

There is also a marks deduction system for shorthand mistakes.

A full mistake results in a deduction of **4 marks**, while a half mistake results in a deduction of **2 marks**.

Candidates who reach the maximum permissible mistakes receive the minimum stipulated marks rather than being automatically awarded zero.

---

# Two Shorthand Attempts

One useful feature of the recruitment is that candidates are given:

### Two opportunities

to appear in the shorthand dictation and transcription test.

The **better of the two performances** is considered.

This gives candidates some room to recover from an unexpectedly difficult first attempt.

---

# Delhi High Court Shorthand Test – Personal Assistant

For the Personal Assistant post, the shorthand requirement is slightly lower.

### Required Speed

**100 words per minute**

### Dictation

A passage of:

**500 words**

is dictated in:

**5 minutes**

### Transcription

Candidates get:

**45 minutes**

to transcribe the passage on a computer.

Again, the process is:

**5 minutes Dictation + 45 minutes Transcription**

Candidates are not given additional time specifically for reading the dictated material.

---

# Mistakes Allowed in PA Shorthand Test

For Personal Assistant, the maximum permissible mistakes are:

### 5% of the dictated words

For a 500-word passage, that works out to:

### 25 mistakes

Candidates exceeding this limit are disqualified.

Just like Senior Personal Assistant, candidates are given **two shorthand dictation/transcription opportunities**, with the better performance considered.

---

# Senior Personal Assistant vs Personal Assistant

The biggest difference between the two posts is the shorthand speed requirement.

![Delhi High Court SPA vs PA Comparison](/images/delhi-high-court-spa-vs-pa.jpg)

| Requirement | Senior Personal Assistant | Personal Assistant |
|---|---:|---:|
| **Graduation** | Yes | Yes |
| **English Typing** | 40 WPM | 40 WPM |
| **English Shorthand** | 110 WPM | 100 WPM |
| **Computer Knowledge** | Yes | Yes |
| **Typing Test** | Qualifying | Qualifying |
| **Descriptive Exam** | Yes | Yes |
| **Interview** | Yes | Yes |

So if you already have 110 WPM shorthand and 40 WPM typing, you can target the SPA requirement.

Candidates at 100 WPM shorthand may still be eligible for the PA requirement, provided they meet all other conditions.

---

# Delhi High Court Main Descriptive Examination

Candidates who qualify the typing and shorthand stages move to the **Main Descriptive Examination**.

The examination carries:

### 100 Marks

and has a duration of:

### 120 Minutes

The examination is conducted in **English**.

The paper includes:

### Essay Writing

A 250-word essay carries:

**40 marks**

### Letter Writing

Carries:

**15 marks**

### Grammar and Comprehension Passage

Carries:

**25 marks**

### Translation

Hindi to English:

**10 marks**

English to Hindi:

**10 marks**

Total:

**100 marks**

---

# Minimum Marks in the Descriptive Examination

Candidates belonging to the General category need:

### 50 marks out of 100

Candidates belonging to reserved categories, including PwBD candidates, need:

### 45 marks out of 100

Only candidates who qualify the Main Descriptive Examination move to the interview stage.

---

# Delhi High Court Interview

The final stage is the interview.

The interview carries:

### 15 Marks

There is **no minimum qualifying mark** specified for the interview.

Candidates who qualify the descriptive examination are called for the interview.

---

# How Is Final Merit Prepared?

This is a very important point.

The final selection or merit list is prepared by adding marks obtained in:

### Stage II – English Shorthand Test

### Stage III – Main Descriptive Examination

### Stage IV – Interview

The **English Typing Test is qualifying in nature** and is not added to the final merit score.

In simple terms:

**Typing → Qualify**

↓

**Shorthand → Merit Marks**

↓

**Descriptive Exam → Merit Marks**

↓

**Interview → Merit Marks**

↓

**Final Merit List**

Therefore, candidates should not underestimate the shorthand stage even after clearing the typing test.

---

# Tie-Breaking Rules

If two or more candidates obtain the same marks, the tie is resolved using prescribed criteria.

The first comparison is based on the marks obtained in the shorthand test.

If the tie continues, the marks obtained in the Main Descriptive Examination are considered.

The interview marks are then considered.

After those criteria, the candidate's date of birth is used, with the **older candidate receiving preference over the younger candidate**.

---

# Age Limit for Delhi High Court PA and SPA Recruitment

The candidate's age must be:

### Minimum: 18 years

### Maximum: 32 years

The age is calculated as on:

### 1 January 2026

The notification states that candidates should have been born:

**Not earlier than 2 January 1994**

and

**Not later than 1 January 2008**

The date of birth mentioned in the Matriculation or Secondary Examination certificate is used for determining age eligibility.

---

# Age Relaxation

Applicable age relaxation is available for eligible categories.

| Category | Relaxation |
|---|---:|
| **SC / ST** | 5 years |
| **OBC-NCL** | 3 years |
| **PwBD – General / EWS** | 10 years |
| **PwBD – OBC** | 13 years |
| **PwBD – SC / ST** | 15 years |
| **Ex-Servicemen** | 3 years, subject to applicable conditions |

PwBD candidates must satisfy the disability requirements specified for the reserved vacancies.

The notification also contains special provisions for employees already serving in the Delhi High Court.

---

# Reservation

The Delhi High Court provides reservation in direct recruitment broadly as follows:

| Category | Reservation |
|---|---:|
| **SC** | 15% |
| **ST** | 7.5% |
| **OBC-NCL** | 27% |
| **EWS** | 10% |
| **PwBD** | 4% horizontal |

Candidates seeking reservation or age relaxation must have the appropriate valid certificate by the specified cut-off date.

One particularly important point concerns **OBC candidates**.

Candidates seeking OBC reservation must possess an OBC certificate issued by the **Government of NCT of Delhi** for a caste recognized/notified as OBC in Delhi.

An OBC certificate issued by another state does not automatically provide the OBC reservation benefit in this recruitment.

---

# Application Fee

The examination fee differs according to category.

### General / OBC-NCL / EWS

**₹1,500**

### SC / ST / eligible PwBD categories

**₹1,300**

Applicable transaction charges may be extra.

The fee can be paid through:

* UPI
* Net Banking
* Credit Card
* Debit Card

The examination fee is non-refundable.

Candidates should therefore confirm their eligibility before making payment.

---

# How to Apply for Delhi High Court Recruitment 2026

The application process is completely online.

Candidates should apply through the **Delhi High Court's official recruitment website**.

The application procedure can be broadly divided into the following steps.

---

## Step 1: Registration

Register using:

* Active email ID
* Active mobile number

A system-generated registration/application number will be provided.

Save this number carefully because it will be required throughout the recruitment process.

---

## Step 2: Fill the Online Application

Log in and complete the application form.

Enter details such as:

* Name
* Date of Birth
* Parent/Spouse details
* Category
* Educational qualification
* Address
* Mobile number
* Email address

Your name, date of birth and other personal information should match your Matriculation certificate.

---

## Step 3: Select the Post

Candidates who want to apply for both:

**Senior Personal Assistant**

and

**Personal Assistant**

must submit **separate applications** for the two posts.

A separate fee is also required for each application.

This is an important point because submitting one application does not automatically make you a candidate for both posts.

---

# Step 4: Upload Photograph

Candidates need to upload a scanned colour passport-size photograph in JPEG format.

The photograph should be:

* 100 KB to 200 KB
* About 3.5 cm × 4.5 cm
* Not more than three months old from the publication of the examination notice

The photograph should be clear and show the candidate's face properly.

Candidates should not upload photographs in which the face is covered by a cap, mask or spectacles.

The face should cover approximately 75% of the photograph.

---

# Step 5: Capture Live Photograph

A **live photograph is mandatory** during the application process.

The photograph can be captured using:

* Webcam
* Mobile device

The image should be captured in good lighting.

The face should be clearly visible and properly aligned.

The live photograph is compared with the uploaded passport-size photograph.

A mismatch can prevent the candidate from continuing with the application.

---

# Step 6: Upload Thumb Impression

Candidates must upload their **left-hand thumb impression** in JPEG format.

The required file size is:

**50 KB to 200 KB**

If the left-hand thumb is unavailable, the right-hand thumb impression can be used.

---

# Step 7: Upload Signature

The scanned signature must be uploaded in JPEG format.

Required size:

**50 KB to 150 KB**

The signature must be clear and readable.

Writing your full name in capital letters instead of providing an actual signature is not accepted.

---

# Step 8: Pay the Examination Fee

Pay the applicable examination fee online.

Remember:

**SPA and PA require separate applications and separate fees.**

After successful payment, a **Confirmation Page** must be generated.

The application is considered successfully submitted only after the required fee has been paid and the confirmation page has been generated.

---

# Step 9: Save Your Application

After submitting the application, candidates should save and retain:

* Confirmation Page
* Application Form
* Registration Number
* Admit Card
* Score Card
* Other relevant documents

The Delhi High Court advises candidates to retain these documents for future reference.

There is no requirement to send a printed copy of the online application to the High Court.

---

# Application Correction Window

A correction window is provided after the application deadline.

The correction window starts on:

### 12 October 2026 at 11:00 AM

and ends on:

### 14 October 2026 at 11:00 PM

Candidates can make permitted corrections during this period.

However, certain critical fields cannot be changed, including:

* Name
* Category
* Date of Birth
* Mobile Number

Candidates should therefore take extreme care while filling the original application.

---

# What Is the Examination Medium?

The examination medium is:

## English

Candidates should therefore be comfortable writing and understanding English for the descriptive examination.

This is particularly important because the Main Descriptive Examination includes:

* Essay
* Letter writing
* Grammar
* Comprehension
* Hindi-English translation
* English-Hindi translation

---

# What Does a Delhi High Court Personal Assistant Do?

The job is much more than simply typing.

Senior Personal Assistants and Personal Assistants assist Hon'ble Judges with important secretarial and administrative responsibilities.

Their duties can include:

* Taking dictation
* Transcribing court proceedings
* Typing orders and judgments
* Checking documents for accuracy
* Handling court records
* Maintaining files
* Coordinating with Registry branches
* Uploading official documents
* Maintaining electronic records
* Handling confidential information
* Supporting the Private Secretary
* Managing official correspondence

The role therefore requires a combination of:

**Typing + Shorthand + Computer Skills + Accuracy + Confidentiality**

---

# Typing Is a Core Skill in This Job

The duties specified for SPA and PA make it clear why typing and shorthand are central to the recruitment.

Employees may need to take dictation related to:

* Court proceedings
* Orders
* Judgments
* Official correspondence

and then transcribe the material accurately and quickly.

They are also responsible for checking typed documents before they are placed before the Judge.

That means typing accuracy is not merely an examination requirement.

It is an important practical workplace skill.

---

# Computer Skills Are Also Important

The job involves modern digital court systems.

Responsibilities can include:

* Uploading documents
* Managing electronic records
* Handling digital files
* Working with official servers
* Updating records
* Processing court documents
* Securely managing confidential digital information

Candidates therefore need more than typing speed.

They should also be comfortable using computers and handling documents accurately. Touch typing lessons on [Step-by-Step Hindi & English Typing Guide](/learn) help candidates develop effortless muscle memory.

---

# Working Hours and Job Requirements

Candidates should be aware that the role can require work beyond normal office hours.

The notification states that selected candidates may have to work:

* At odd hours
* On holidays
* At the residential office of the Hon'ble Judge

when required in the interest of justice or efficient official work.

The job also requires strict confidentiality because employees may deal with:

* Draft judgments
* Judicial proceedings
* Official correspondence
* Case records
* Confidential electronic data

---

# How to Prepare for the Delhi High Court Typing Test

For a TypeHindi reader, the first practical goal should be:

## 40 WPM English Typing

But don't stop at 40.

Build enough speed that 40 WPM feels comfortable rather than maximum effort.

A useful preparation progression is:

**30 WPM → 35 WPM → 40 WPM → 45 WPM → 50+ WPM**

At every stage, maintain accuracy.

Because the test allows only a limited percentage of mistakes, inaccurate speed is not useful.

---

# How to Prepare for Shorthand

Shorthand preparation should be separated from ordinary typing preparation.

For SPA:

### Target 110 WPM

For PA:

### Target 100 WPM

Practice in three stages:

### Stage 1 – Accuracy

Become comfortable taking dictation correctly.

### Stage 2 – Speed

Gradually increase dictation speed.

### Stage 3 – Transcription

Practice converting shorthand notes into a properly formatted computer document within the 45-minute limit.

A candidate who can take shorthand at high speed but struggles with transcription can still lose valuable marks.

> ✍️ **Practice on TypeHindi Shorthand:**
> - [Learn Pitman Shorthand Step-by-Step (13 Levels)](/shorthand/learn) — Master basic strokes, 1st/2nd/3rd place vowels, and phraseography.
> - [Audio Dictation Studio (40–120 WPM)](/shorthand/dictation) — Practice taking notes from natural spoken English passages with countdown timers.
> - [Delhi High Court SPA & PA Exam Simulator](/shorthand/tests?exam=dhc-spa-2026) — Simulate the official 5-minute dictation and 45-minute transcription test with automatic word-diff error scoring.

---

# Best Strategy for the Typing Test

Do not spend the entire 10 minutes trying to type as quickly as possible.

Instead:

**Start controlled**

↓

**Maintain rhythm**

↓

**Avoid unnecessary corrections**

↓

**Keep accuracy high**

↓

**Build speed naturally**

The goal is to finish the test with a strong accuracy percentage while staying comfortably above the minimum speed. You can also build agility with our [Interactive Typing Games](/game).

---

# Practice Like the Real Test

A good practice session should recreate the actual conditions:

### 10-Minute Timer

Use exactly 10 minutes.

### English Text

Practice continuous English passages rather than isolated words.

### Characters With Spaces

Be aware that the recruitment calculates speed using the characters-with-space method.

### Error Control

Track both:

**WPM + Accuracy**

A candidate should know their average performance before entering the examination.

---

# Delhi High Court Recruitment Preparation Strategy

Candidates should divide their preparation into four areas.

## 1. Typing

Target:

**40 WPM comfortably**

Focus on:

* Accuracy
* Continuous typing
* Punctuation
* Numbers
* Common English words
* Keyboard familiarity

## 2. Shorthand

Target:

**100–110 WPM**

depending on the post.

Practice both:

**Dictation + Transcription**

## 3. Descriptive English

Prepare:

* Essay writing
* Letter writing
* Grammar
* Comprehension
* Translation

## 4. Interview

Prepare to discuss:

* Your education
* Typing and shorthand experience
* Computer skills
* General awareness
* Interest in the position
* Office and secretarial work

---

# Which Post Should You Target?

Your shorthand speed can help determine your target.

### If your shorthand speed is 100 WPM

You can target:

**Personal Assistant**

provided you meet the other eligibility requirements.

### If your shorthand speed is 110 WPM

You can target:

**Senior Personal Assistant**

provided you meet all other requirements.

Since separate applications are required, candidates who are eligible and want to compete for both posts need to submit separate applications and pay the applicable fee for each.

---

# Important Dates

| Event | Date |
|---|---|
| **Online Application Starts** | 15 September 2026 |
| **Application Start Time** | 11:00 AM |
| **Last Date to Apply** | 5 October 2026 |
| **Closing Time** | 11:00 PM |
| **Correction Window Starts** | 12 October 2026 |
| **Correction Window Ends** | 14 October 2026 |
| **Admit Card** | To be announced |
| **Examination Date** | To be announced |

The examination schedule is tentative and candidates should regularly check official Delhi High Court recruitment updates.

---

# Delhi High Court SPA and PA Recruitment: Frequently Asked Questions

## How many total vacancies are there?

There are **150 vacancies** in total.

117 are for Senior Personal Assistant and 33 are for Personal Assistant.

## Is typing required?

Yes.

Both posts require **40 WPM English typing on computer**.

## Is shorthand required?

Yes.

SPA requires **110 WPM English shorthand**, while PA requires **100 WPM English shorthand**.

## Is there a typing test?

Yes.

There is a **10-minute English typing test** conducted on computers.

## Is the typing test counted in final merit?

No.

The typing test is qualifying in nature.

## How many mistakes are allowed in typing?

The permissible number is **3% of the total words typed**.

## Is shorthand counted in final merit?

Yes.

Marks obtained in the shorthand test contribute to the final merit.

## How long is the shorthand dictation?

Five minutes.

For SPA, the passage contains 550 words.

For PA, it contains 500 words.

## How much time is given for transcription?

45 minutes.

## Are two shorthand attempts available?

Yes.

Candidates are given two opportunities, and the better performance is considered.

## How many marks is the descriptive examination?

100 marks.

## What is the duration of the descriptive exam?

120 minutes.

## Is there an interview?

Yes.

The interview carries 15 marks.

## Can I apply for both SPA and PA?

Yes, provided you are eligible for both, but you must submit **separate applications and separate fees** for each post.

## What is the application fee?

₹1,500 for General/OBC-NCL/EWS candidates and ₹1,300 for the specified SC/ST/PwBD categories.

## What is the age limit?

18 to 32 years as on 1 January 2026, subject to applicable relaxation.

---

# Final Verdict

The **Delhi High Court Senior Personal Assistant and Personal Assistant Examination 2026** is a major opportunity for candidates who have built skills in **English typing and shorthand**.

The recruitment offers:

**117 Senior Personal Assistant vacancies**

and

**33 Personal Assistant vacancies**

for a total of:

## 150 Vacancies

Both posts require graduation, **40 WPM English typing** and good computer knowledge. The main difference is the shorthand requirement:

**Senior Personal Assistant – 110 WPM**

**Personal Assistant – 100 WPM**

The selection process begins with a **10-minute qualifying English typing test**, followed by the shorthand test. Successful candidates then move to the **100-mark Main Descriptive Examination** and finally the **15-mark interview**.

The final merit is based on the shorthand test, descriptive examination and interview, while the typing test is qualifying.

For a serious typing or stenography aspirant, this recruitment is particularly valuable because the skills being tested are also directly connected to the actual job. Delhi High Court Personal Assistants and Senior Personal Assistants deal with dictation, transcription, orders, judgments, records, official correspondence and digital court documents.

The biggest mistake would be to prepare only for 40 WPM typing.

A serious candidate should aim for:

**40+ WPM typing**

*

**100/110 WPM shorthand**

*

**Strong English writing**

*

**Accurate computer work**

*

**Consistent practice under time pressure**

The application window opens on **15 September 2026** and closes on **5 October 2026 at 11:00 PM**. Candidates who are eligible should complete their applications carefully and avoid waiting until the final hours.

**Type fast. Write shorthand faster. But in the High Court, accuracy is what matters most.**
`,
    content: `\n# दिल्ली उच्च न्यायालय भर्ती 2026: सीनियर पर्सनल असिस्टेंट व पर्सनल असिस्टेंट के 150 पद, टाइपिंग टेस्ट, शॉर्टहैंड, पात्रता, वेतन और आवेदन प्रक्रिया

![Delhi High Court Recruitment 2026](/images/delhi-high-court-spa-pa-recruitment-2026.jpg)

**दिल्ली उच्च न्यायालय, नई दिल्ली (Delhi High Court)** ने **सीनियर पर्सनल असिस्टेंट (SPA)** और **पर्सनल असिस्टेंट (PA)** परीक्षा 2026 के माध्यम से कुल **150 पदों** पर भर्ती की आधिकारिक अधिसूचना जारी की है।

टाइपिंग और आशुलिपि (Stenography) के अभ्यर्थियों के लिए यह एक अत्यंत महत्वपूर्ण भर्ती है क्योंकि चयन प्रक्रिया में सीधे तौर पर **अंग्रेजी टाइपिंग टेस्ट और अंग्रेजी शॉर्टहैंड टेस्ट** शामिल हैं। जो उम्मीदवार एसएससी स्टेनोग्राफर, कोर्ट स्टेनोग्राफर या न्यायिक सेवा में जाने की तैयारी कर रहे हैं, उनके लिए यह एक शानदार अवसर है।

इस भर्ती में **सीनियर पर्सनल असिस्टेंट के 117 पद** और **पर्सनल असिस्टेंट के 33 पद** शामिल हैं।

---

# दिल्ली हाईकोर्ट भर्ती 2026: मुख्य विवरण

| विवरण | जानकारी |
|---|---|
| संस्था | दिल्ली उच्च न्यायालय (High Court of Delhi) |
| परीक्षा का नाम | सीनियर पर्सनल असिस्टेंट एवं पर्सनल असिस्टेंट परीक्षा 2026 |
| कुल रिक्तियां | 150 पद |
| सीनियर पर्सनल असिस्टेंट (SPA) | 117 पद |
| पर्सनल असिस्टेंट (PA) | 33 पद |
| आवेदन का माध्यम | ऑनलाइन ([delhihighcourt.nic.in](https://delhihighcourt.nic.in)) |
| ऑनलाइन आवेदन प्रारंभ | 15 सितंबर 2026 |
| आवेदन की अंतिम तिथि | 05 अक्टूबर 2026 (रात 11:00 बजे तक) |
| फॉर्म संशोधन विंडो | 12 से 14 अक्टूबर 2026 |
| न्यूनतम शैक्षणिक योग्यता | मान्यता प्राप्त विश्वविद्यालय से स्नातक (Graduation) |
| टाइपिंग गति आवश्यकता | 40 WPM (अंग्रेजी, कंप्यूटर पर) |
| शॉर्टहैंड गति – SPA | 110 WPM (अंग्रेजी) |
| शॉर्टहैंड गति – PA | 100 WPM (अंग्रेजी) |
| चयन के चरण | टाइपिंग टेस्ट + शॉर्टहैंड टेस्ट + वर्णनात्मक परीक्षा + साक्षात्कार |
| परीक्षा का माध्यम | अंग्रेजी |

---

# पदवार रिक्तियां एवं वेतनमान

## 1. सीनियर पर्सनल असिस्टेंट (SPA) – 117 पद
* **वेतन स्तर:** पे मैट्रिक्स का लेवल-8 (Level 8, 7th CPC Pay Matrix) – ग्रुप 'बी' अराजपत्रित।
* **आरक्षण:** 117 पदों में से 7 पद दिव्यांग (PwBD) श्रेणी के लिए क्षैतिज रूप से आरक्षित हैं।

## 2. पर्सनल असिस्टेंट (PA) – 33 पद
* **वेतन स्तर:** पे मैट्रिक्स का लेवल-7 (Level 7, 7th CPC Pay Matrix) – ग्रुप 'बी'।
* **महत्वपूर्ण बिंदु:** इस भर्ती में पर्सनल असिस्टेंट पद के लिए अनारक्षित (General) वर्ग की कोई रिक्ति नहीं है। यह पद केवल आरक्षित वर्गों (EWS, OBC-NCL, SC, ST) के लिए विज्ञापित है।

| पद का नाम | रिक्तियों की संख्या |
|---|---:|
| **सीनियर पर्सनल असिस्टेंट (SPA)** | 117 |
| **पर्सनल असिस्टेंट (PA)** | 33 |
| **कुल रिक्तियां** | **150** |

---

# शैक्षणिक योग्यता एवं कौशल मानदंड

## 1. सीनियर पर्सनल असिस्टेंट (SPA)
* **शैक्षणिक योग्यता:** किसी मान्यता प्राप्त विश्वविद्यालय से स्नातक डिग्री।
* **शॉर्टहैंड गति:** 110 शब्द प्रति मिनट (अंग्रेजी शॉर्टहैंड)।
* **टाइपिंग गति:** 40 शब्द प्रति मिनट (कंप्यूटर पर अंग्रेजी टाइपिंग)।
* **कंप्यूटर ज्ञान:** कंप्यूटर संचालन का उत्कृष्ट व्यावहारिक ज्ञान।

## 2. पर्सनल असिस्टेंट (PA)
* **शैक्षणिक योग्यता:** स्नातक डिग्री।
* **शॉर्टहैंड गति:** 100 शब्द प्रति मिनट (अंग्रेजी शॉर्टहैंड)।
* **टाइपिंग गति:** 40 शब्द प्रति मिनट (कंप्यूटर पर अंग्रेजी टाइपिंग)।
* **कंप्यूटर ज्ञान:** कंप्यूटर संचालन का ज्ञान।

---

# टाइपिंग टेस्ट का स्वरूप एवं नियम

दिल्ली हाईकोर्ट भर्ती में **अंग्रेजी टाइपिंग टेस्ट एक क्वालिफाइंग (Qualifying) चरण** है।

* **अवधि:** 10 मिनट
* **निर्धारित गति:** 40 शब्द प्रति मिनट
* **गति गणना पद्धति:** Characters with Space पद्धति के आधार पर।
* **अनुमेय त्रुटियां (Mistakes Allowed):** कुल टाइप किए गए शब्दों का अधिकतम **3%**।
* **महत्वपूर्ण:** टाइपिंग टेस्ट केवल अर्हक (Qualifying) है, इसके अंक अंतिम मेरिट में नहीं जुड़ते हैं।

अपनी टाइपिंग सटीकता और गति को 45-50 WPM तक बढ़ाने के लिए आप [TypeHindi डेली प्रैक्टिस टूल](/practice) और [हिंदी इनस्क्रिप्ट कीबोर्ड लेआउट](/keyboard-layout) पर नियमित अभ्यास कर सकते हैं।

---

# शॉर्टहैंड टेस्ट (Shorthand Dictation & Transcription)

टाइपिंग टेस्ट उत्तीर्ण करने वाले अभ्यर्थी शॉर्टहैंड टेस्ट में भाग लेंगे।

## सीनियर पर्सनल असिस्टेंट (SPA)
* **डिक्टेशन:** 550 शब्द (5 मिनट में, 110 WPM की गति से)।
* **ट्रांसक्रिप्शन समय:** कंप्यूटर पर टाइप करने के लिए 45 मिनट।
* **अधिकतम गलतियां:** कुल शब्दों का 5% (अधिकतम 27.5 गलतियां)।

## पर्सनल असिस्टेंट (PA)
* **डिक्टेशन:** 500 शब्द (5 मिनट में, 100 WPM की गति से)।
* **ट्रांसक्रिप्शन समय:** कंप्यूटर पर टाइप करने के लिए 45 मिनट।
* **अधिकतम गलतियां:** कुल शब्दों का 5% (अधिकतम 25 गलतियां)।

> **विशेष लाभ:** अभ्यर्थियों को शॉर्टहैंड टेस्ट के लिए **दो अवसर** दिए जाएंगे और दोनों में से बेहतर प्रदर्शन को मान्यता दी जाएगी।

---

# सीनियर पर्सनल असिस्टेंट बनाम पर्सनल असिस्टेंट (SPA vs PA)

![Delhi High Court SPA vs PA Comparison](/images/delhi-high-court-spa-vs-pa.jpg)

| मानदंड | सीनियर पर्सनल असिस्टेंट (SPA) | पर्सनल असिस्टेंट (PA) |
|---|---:|---:|
| **स्नातक योग्यता** | अनिवार्य | अनिवार्य |
| **अंग्रेजी टाइपिंग** | 40 WPM | 40 WPM |
| **अंग्रेजी शॉर्टहैंड** | 110 WPM | 100 WPM |
| **पे लेवल** | Level 8 | Level 7 |
| **टाइपिंग टेस्ट** | क्वालिफाइंग | क्वालिफाइंग |
| **मुख्य लिखित परीक्षा** | 100 अंक | 100 अंक |
| **साक्षात्कार** | 15 अंक | 15 अंक |

---

# मुख्य वर्णनात्मक परीक्षा (Main Descriptive Exam)

* **कुल अंक:** 100 अंक
* **समय अवधि:** 120 मिनट (2 घंटे)
* **माध्यम:** अंग्रेजी
* **पाठ्यक्रम:**
  * निबंध लेखन (250 शब्द) – 40 अंक
  * पत्र लेखन – 15 अंक
  * व्याकरण एवं समझ (Comprehension) – 25 अंक
  * हिंदी से अंग्रेजी अनुवाद – 10 अंक
  * अंग्रेजी से हिंदी अनुवाद – 10 अंक
* **न्यूनतम अर्हक अंक:** सामान्य वर्ग के लिए 50 अंक और आरक्षित वर्गों के लिए 45 अंक।

---

# अंतिम मेरिट सूची (Final Merit Preparation)

अंतिम चयन सूची निम्नलिखित चरणों के अंकों को जोड़कर बनाई जाती है:
1. **स्टेज-2:** अंग्रेजी शॉर्टहैंड टेस्ट के अंक
2. **स्टेज-3:** मुख्य वर्णनात्मक परीक्षा (100 अंक)
3. **स्टेज-4:** साक्षात्कार (15 अंक)

*(टाइपिंग टेस्ट केवल क्वालिफाइंग है।)*

---

# आयु सीमा एवं छूट (Age Limit)

* **न्यूनतम आयु:** 18 वर्ष
* **अधिकतम आयु:** 32 वर्ष (01 जनवरी 2026 के अनुसार)
* **आयु छूट:** अनुसूचित जाति/जनजाति को 5 वर्ष, ओबीसी (NCL) को 3 वर्ष तथा दिव्यांग अभ्यर्थियों को 10 से 15 वर्ष की छूट।

---

# आवेदन शुल्क एवं ऑनलाइन आवेदन प्रक्रिया

* **सामान्य / ओबीसी / ईडब्ल्यूएस:** ₹1,500
* **एससी / एसटी / दिव्यांग:** ₹1,300
* **आवेदन प्रक्रिया:**
  1. दिल्ली हाईकोर्ट के आधिकारिक भर्ती पोर्टल [delhihighcourt.nic.in](https://delhihighcourt.nic.in) पर जाएं।
  2. मोबाइल और ईमेल से रजिस्ट्रेशन करें।
  3. फोटो, लाइव वेबकैम फोटो, बाएं हाथ के अंगूठे का निशान और हस्ताक्षर अपलोड करें।
  4. यदि दोनों पदों (SPA और PA) के लिए आवेदन करना है, तो दोनों के लिए **अलग-अलग फॉर्म और अलग-अलग शुल्क** का भुगतान करना होगा।
  5. आवेदन की अंतिम तिथि **05 अक्टूबर 2026** है।

कंप्यूटर टाइपिंग गति और कीबोर्ड नियंत्रण को बेहतर बनाने के लिए [मंगल फॉन्ट टाइपिंग टेस्ट](/mangal-font-typing-test), [स्टेप-बाय-स्टेप टाइपिंग लेसन्स](/learn) और [टाइपिंग गेम्स](/game) पर अभ्यास जारी रखें।
`
  },
  {
    slug: "khunti-forest-division-recruitment-2026-walk-in-interview",
    titleEn: "Khunti Forest Division Recruitment 2026: Walk-in Interview for 5 Posts, ₹30,000 Salary, Eligibility and How to Apply",
    excerptEn: "Complete guide to Khunti Forest Division Jharkhand Recruitment 2026 for Team Leader, RS-GIS Expert, Statistician, and Field Data Collector posts. ₹30,000 monthly salary, walk-in interview details, eligibility, and application procedure.",
    dateEn: "05 September, 2026",
    title: "खूंटी वन प्रमंडल भर्ती 2026: 5 पदों पर वॉक-इन इंटरव्यू, ₹30,000 वेतन, पात्रता व आवेदन प्रक्रिया",
    excerpt: "खूंटी वन प्रमंडल, झारखंड द्वारा वर्किंग प्लान प्रोजेक्ट के तहत टीम लीडर, RS-GIS एक्सपर्ट, सांख्यिकीविद् व फील्ड डेटा कलेक्टर के 5 पदों पर भर्ती। ₹30,000 मानदेय, वॉक-इन इंटरव्यू और आवेदन की पूरी जानकारी।",
    date: "05 सितंबर, 2026",
    author: "TypeHindi Team",
    category: "Exam Guide",
    contentEn: `
# Khunti Forest Division Recruitment 2026: Walk-in Interview for 5 Posts, ₹30,000 Salary, Eligibility and How to Apply

![Khunti Forest Division Recruitment 2026](/images/khunti-forest-division-recruitment-2026.jpg)

The **Khunti Forest Division, Jharkhand** has announced a short-term recruitment drive for technical team members under its Working Plan project. The recruitment is being conducted through a **Walk-in Interview** for a total of **5 positions**: Team Leader, RS-GIS Expert, Statistician and Field Data Collector.

The selected candidates will work on the preparation of the **Working Plan of Khunti Forest Division** in accordance with the **[National Working Plan Code (NWPC), 2023](https://forest.jharkhand.gov.in)**. The project is designed as a temporary, project-specific engagement and has an overall duration of **four months**.

All four categories of posts carry a **consolidated monthly remuneration of ₹30,000**, making this an interesting opportunity for candidates with backgrounds in forestry, ecology, statistics, wildlife biology, computer science, GIS and remote sensing.

The walk-in interview is scheduled for **15 September 2026 at 11:00 AM** at the Office of the Divisional Forest Officer, Khunti Forest Division, Khunti, Jharkhand. Candidates can also submit their applications by email, post or directly at the office before the specified deadline. 

---

# Khunti Forest Division Recruitment 2026: Overview

| Particular | Details |
|---|---|
| Organization | Office of the Divisional Forest Officer, Khunti Forest Division |
| Recruitment Type | Temporary / Project-Based Recruitment |
| Advertisement | Notice No. 02 |
| Notification Date | 1 September 2026 |
| Total Vacancies | 5 |
| Application Mode | Email / Post / Direct Submission |
| Selection Process | Walk-in Interview |
| Interview Date | 15 September 2026 |
| Interview Time | 11:00 AM |
| Last Application Time | 15 September 2026, 10:30 AM |
| Project Duration | 4 Months |
| Monthly Remuneration | ₹30,000 |
| Job Location | Khunti Forest Division, Jharkhand |

---

# Khunti Forest Division Vacancy Details

A total of **5 vacancies** have been announced.

| Post | Vacancies | Qualification | Monthly Remuneration |
|---|---:|---|---:|
| Team Leader | 1 | Postgraduate degree in Forestry, Ecology, Statistics, Wildlife Biology or allied discipline | ₹30,000 |
| RS-GIS Expert | 1 | Diploma or equivalent in Remote Sensing and GIS | ₹30,000 |
| Statistician | 1 | Graduation in Mathematics, Statistics or Computer Science with proficiency in statistical analysis software | ₹30,000 |
| Field Data Collector | 2 | Graduation in Forestry, Ecology, Statistics, Wildlife Biology or allied discipline | ₹30,000 |
| **Total** | **5** | | **₹30,000 per month** |

The recruitment notice identifies these four categories as members of the technical team for the Working Plan project. 

---

# 1. Team Leader

There is **1 vacancy** for Team Leader.

### Educational Qualification

Candidates should possess a **postgraduate degree or equivalent qualification** in one of the following areas:

* Forestry
* Ecology
* Statistics
* Wildlife Biology
* Allied discipline

The Team Leader will be part of the technical team working on the Working Plan of the Khunti Forest Division.

### Salary

The consolidated monthly remuneration is:

## ₹30,000 per month

---

# 2. RS-GIS Expert

There is **1 vacancy** for RS-GIS Expert.

RS-GIS refers to **Remote Sensing and Geographic Information Systems**, making this position particularly relevant to candidates with technical knowledge of GIS-based mapping and spatial data.

### Educational Qualification

Candidates should possess a:

**Diploma or equivalent qualification in Remote Sensing and GIS.**

### Salary

The consolidated monthly remuneration is:

## ₹30,000 per month

The work under the project includes preparation of thematic GIS layers using GIS and Remote Sensing techniques, making this role one of the most technically specialized positions in the recruitment.

---

# 3. Statistician

There is **1 vacancy** for Statistician.

### Educational Qualification

Candidates should have a **graduate degree or equivalent qualification** in:

* Mathematics
* Statistics
* Computer Science

Candidates should also have proficiency in **statistical analysis using relevant software**. Candidates familiar with rapid computer data entry through [TypeHindi Daily Practice Tool](/practice) and [Hindi InScript Keyboard Layout](/keyboard-layout) will find statistical data compilation seamless.

### Salary

The monthly consolidated remuneration is:

## ₹30,000 per month

The Statistician is expected to contribute to data processing, validation, analysis and reporting associated with the Working Plan project.

---

# 4. Field Data Collector

There are **2 vacancies** for Field Data Collector.

### Educational Qualification

Candidates should possess a **graduate degree or equivalent qualification** in:

* Forestry
* Ecology
* Statistics
* Wildlife Biology
* Allied discipline

### Salary

The consolidated monthly remuneration is:

## ₹30,000 per month

The Field Data Collector role is particularly important because a significant part of the Working Plan project involves field surveys, data collection and socio-economic assessment.

---

# What Is the Khunti Forest Working Plan Project?

The recruitment is connected with the preparation of the **Working Plan of Khunti Forest Division** according to the **National Working Plan Code, 2023**.

The project covers a wide range of activities involving forests, biodiversity, communities, GIS and environmental data.

The scope of work includes:

* Socio-economic surveys and assessments
* Soil surveys and assessments
* Biodiversity assessments
* Assessment of social, economic and cultural benefits
* Assessment of forest carbon stock and carbon sequestration
* Assessment of human-wildlife conflict and mitigation measures
* Preparation of thematic GIS layers
* Use of GIS and Remote Sensing techniques
* Preparation and finalization of technical reports
* Other work required under the National Working Plan Code

The geographical area of operation covers the administrative jurisdiction of the Khunti Forest Division, including Khunti district and five administrative blocks of Ranchi district. 

---

# Project Duration

The overall project duration is:

## Four Months

The engagement is temporary and specifically tied to the project.

The notification clearly states that the engagement does **not provide any right or claim to regular appointment, permanent employment or continuation beyond the project period**. 

This is an important point for candidates looking for permanent government employment.

This recruitment should be viewed as a **temporary contractual project opportunity**, not a permanent government post.

---

# What Will Selected Candidates Do?

The work will vary according to the individual's role, but the project broadly involves fieldwork, data collection, analysis, GIS work and documentation.

The project timeline includes activities such as:

### Field Training

Selected team members will undergo field training for data collection and enumeration according to the National Working Plan Code.

### Field Data Collection

The technical team will undertake and supervise field data collection and socio-economic surveys.

### Data Compilation and Validation

Collected field data must be compiled, validated and maintained in prescribed formats for analysis and reporting. Touch typing skills from [Interactive Hindi Typing Lessons](/learn) and [Mangal Font Hindi Typing Test](/mangal-font-typing-test) enable researchers to digitize field records efficiently.

### GIS and Remote Sensing

The team will prepare, process and update thematic maps and spatial layers using GIS and Remote Sensing techniques.

### Reports and Technical Documents

The team will compile data and prepare reports and other technical documents for the Working Plan.

### Records and Data Repositories

Records, registers and data repositories related to field activities and project outputs must also be maintained.

These activities are scheduled to continue throughout much of the four-month project period. 

---

# Is This a Permanent Government Job?

No.

This point should be understood before applying.

The recruitment is explicitly described as:

**Temporary and project-specific.**

It does not create any right to:

* Regular appointment
* Permanent employment
* Continuation beyond the project period

Therefore, candidates looking specifically for permanent government posts should treat this opportunity differently from regular recruitment conducted by the Staff Selection Commission, UPSC, Railways or State Government departments. 

---

# Is There Any Written Examination?

There is no written examination mentioned in the notice.

The recruitment is conducted through:

## Walk-in Interview

The interview is scheduled for:

**15 September 2026 at 11:00 AM**

Candidates who are interested in the positions should prepare for an interview-based selection process.

Since the project is technical in nature, candidates should be prepared to discuss their academic background, relevant skills and any experience connected with their selected position.

---

# Application Deadline

The application must reach the department by:

## 15 September 2026 at 10:30 AM

The walk-in interview itself begins at:

## 11:00 AM on 15 September 2026

Candidates should therefore not arrive at the last moment.

The notice specifically gives **10:30 AM** as the last time for submitting the application. 

---

# How to Apply for Khunti Forest Division Recruitment 2026

The application process is different from most online government recruitments.

Candidates have three submission options:

### 1. By Email

Candidates can send their application and documents to:

**[dfokhunti2@gmail.com](mailto:dfokhunti2@gmail.com)**

The application should clearly mention the post being applied for.

### 2. By Post

Candidates may send their application to:

**Office of the Divisional Forest Officer, Khunti Forest Division, Khunti, Kamanta, Khunti-Chaibasa Road, District-Khunti, Jharkhand – 835210**

### 3. Direct Submission

Candidates can also submit their application directly at the office.

The application must be submitted using the **prescribed pro forma attached to the notification**. 

---

# Documents Required

Candidates attending the walk-in interview must carry:

* Duly filled application form in the prescribed format
* Self-attested copies of educational qualification certificates
* Self-attested experience certificates, where applicable
* Original certificates and documents for verification
* Recent passport-size photograph
* Valid photo identity document

Candidates should carry the original documents because they may be required for verification during the interview process. 

---

# Where Is the Walk-in Interview Being Conducted?

The interview will be held at:

**Office of the Divisional Forest Officer, Khunti Forest Division**

**Khunti, Kamanta, Khunti-Chaibasa Road, District-Khunti, Jharkhand – 835210**

The notification also provides the following GPS coordinates for the venue:

**23.052181° N, 85.285582° E**

Candidates travelling from outside Khunti should plan their journey in advance.

---

# What Is the Selection Process?

The recruitment is based on the walk-in interview.

The broad process is:

**Application Submission**

↓

**Document Verification**

↓

**Walk-in Interview**

↓

**Selection**

↓

**Project Engagement**

The notice also makes it clear that merely possessing the prescribed qualification does not guarantee selection. The decision regarding selection and engagement rests with the Divisional Forest Officer, Khunti Forest Division. 

---

# Is Experience Required?

The recruitment notice provides an opportunity for candidates to submit their experience certificates, and the application form contains a field for experience in areas such as Working Plan Preparation, Research and Field Studies.

However, the vacancy table primarily specifies the **minimum educational qualifications** for each post.

Candidates should therefore carefully review their own background and carry experience certificates wherever they have relevant experience.

Experience in forestry surveys, research, field studies, GIS, remote sensing, statistics or related work can be particularly relevant to the responsibilities of the project.

---

# Is There an Age Limit?

The notice does not clearly specify a separate upper or lower age limit in the recruitment information provided.

Candidates should therefore rely on the official notice and application instructions rather than assuming an age criterion from other government recruitments.

---

# Khunti Forest Recruitment: Who Should Apply?

This recruitment is most suitable for candidates with specialized academic backgrounds.

### Team Leader

Best suited to candidates with postgraduate qualifications in:

**Forestry, Ecology, Statistics, Wildlife Biology or allied fields.**

### RS-GIS Expert

Suitable for candidates with:

**Remote Sensing and GIS qualifications.**

### Statistician

Suitable for candidates from:

**Mathematics, Statistics or Computer Science**

who are proficient in relevant statistical analysis software.

### Field Data Collector

Suitable for graduates from:

**Forestry, Ecology, Statistics, Wildlife Biology or allied fields.**

---

# What Skills Can Help Candidates?

Although the minimum qualifications differ by post, candidates with relevant practical skills may be better prepared for the project.

Useful skills can include:

* Field survey techniques
* Data collection
* Statistical analysis
* GIS
* Remote Sensing
* Mapping
* Biodiversity assessment
* Environmental research
* Report preparation
* Data management
* Computer applications

The exact relevance of each skill depends on the position being applied for.

---

# Important Terms and Conditions

Candidates should understand that the remuneration is **consolidated and all-inclusive**.

The notification states that there will be no additional:

* TA/DA
* HRA
* Accommodation
* Food expenses
* Medical expenses
* Other allowances

However, specifically authorized field travel may be reimbursed according to applicable departmental norms. 

Candidates also will not receive TA/DA for attending the walk-in interview.

---

# Can the Department Change the Recruitment?

Yes.

The Divisional Forest Officer, Khunti Forest Division reserves the right to:

* Increase or decrease the number of posts
* Modify the engagement process
* Suspend the recruitment
* Cancel the engagement process

The department can also modify the roles and responsibilities of selected candidates according to project requirements and progress. 

---

# Important Things to Carry to the Interview

Before leaving for the walk-in interview, candidates should make sure they have:

**✓** Completed application form

**✓** Original educational certificates

**✓** Self-attested photocopies

**✓** Experience certificates, if applicable

**✓** Recent passport-size photograph

**✓** Valid photo ID

**✓** Copies of relevant qualifications

**✓** A copy of the application for personal reference

Candidates should arrive well before **11:00 AM** because the application submission deadline is **10:30 AM**.

---

# How to Prepare for the Walk-in Interview

Because there is no written examination, candidates should focus their preparation on the role they are applying for.

## Team Leader

Revise:

* Forestry fundamentals
* Ecology
* Wildlife biology
* Working Plan concepts
* Field survey methods
* Research methodology

## RS-GIS Expert

Focus on:

* GIS fundamentals
* Remote sensing
* Spatial data
* Mapping
* Thematic layers
* GIS software
* Remote sensing applications

## Statistician

Revise:

* Statistics fundamentals
* Data analysis
* Statistical software
* Survey data
* Data validation
* Interpretation of results

## Field Data Collector

Prepare around:

* Field surveys
* Data collection
* Biodiversity
* Ecology
* Basic forestry
* Survey methodology
* Field documentation

Candidates can also sharpen their digital reporting speed and keyboard dexterity with [TypeHindi Interactive Typing Games](/game).

---

# Final Verdict

The **Khunti Forest Division Recruitment 2026** is a small but specialized recruitment opportunity offering **5 temporary project-based positions**, all carrying a consolidated remuneration of **₹30,000 per month**.

The vacancies include:

**1 Team Leader**

**1 RS-GIS Expert**

**1 Statistician**

**2 Field Data Collectors**

The recruitment is particularly relevant to candidates from **Forestry, Ecology, Wildlife Biology, Statistics, Mathematics, Computer Science, Remote Sensing and GIS** backgrounds.

The project focuses on preparing the Working Plan of Khunti Forest Division and includes field surveys, biodiversity assessment, socio-economic studies, GIS and Remote Sensing, data analysis, carbon assessment, human-wildlife conflict assessment and technical reporting.

There is **no written examination mentioned in the notice**. Candidates are selected through a **Walk-in Interview scheduled for 15 September 2026 at 11:00 AM**.

Applications can be submitted by **email, post or directly at the Khunti Forest Division office**, and the final application submission time is **10:30 AM on 15 September 2026**.

One major limitation is that this is **not a permanent government job**. The engagement is temporary, contractual and project-specific for four months, and it does not provide a claim to regular government employment.

For candidates who already have the required academic background and are looking for short-term professional experience in **forestry, GIS, statistics, ecology or field research**, however, this could be a useful opportunity.

**Specialized skills. Real field experience. ₹30,000 per month. Walk in and make your case.**
`,
    content: `
# खूंटी वन प्रमंडल भर्ती 2026: 5 पदों पर वॉक-इन इंटरव्यू, ₹30,000 वेतन, पात्रता व आवेदन प्रक्रिया

![Khunti Forest Division Recruitment 2026](/images/khunti-forest-division-recruitment-2026.jpg)

**खूंटी वन प्रमंडल, झारखंड** द्वारा वर्किंग प्लान (Working Plan) परियोजना के अंतर्गत तकनीकी टीम के गठन हेतु अल्पकालिक भर्ती की घोषणा की गई है। यह भर्ती **वॉक-इन इंटरव्यू (Walk-in Interview)** के माध्यम से कुल **5 पदों** के लिए आयोजित की जा रही है: टीम लीडर, RS-GIS एक्सपर्ट, सांख्यिकीविद् (Statistician) और फील्ड डेटा कलेक्टर।

चयनित अभ्यर्थी **[राष्ट्रीय वर्किंग प्लान कोड (NWPC), 2023](https://forest.jharkhand.gov.in)** के अनुसार खूंटी वन प्रमंडल की कार्य योजना तैयार करने में तकनीकी योगदान देंगे। यह परियोजना **4 महीने की अवधि** के लिए एक अस्थायी, परियोजना-विशिष्ट अनुबंध है।

सभी चार श्रेणियों के पदों के लिए **₹30,000 का एकमुश्त मासिक मानदेय** निर्धारित किया गया है, जो वानिकी, पारिस्थितिकी, सांख्यिकी, वन्यजीव जीवविज्ञान, कंप्यूटर साइंस, जीआईएस एवं रिमोट सेंसिंग पृष्ठभूमि वाले अभ्यर्थियों के लिए एक बेहतरीन अवसर है।

वॉक-इन इंटरव्यू **15 सितंबर 2026 को पूर्वाह्न 11:00 बजे** वन प्रमंडल पदाधिकारी कार्यालय, खूंटी वन प्रमंडल, खूंटी, झारखंड में आयोजित किया जाएगा। अभ्यर्थी निर्धारित समय से पहले ईमेल, डाक द्वारा या सीधे कार्यालय में उपस्थित होकर भी अपना आवेदन जमा कर सकते हैं।

---

# खूंटी वन प्रमंडल भर्ती 2026: मुख्य विवरण

| विवरण | जानकारी |
|---|---|
| संस्था | वन प्रमंडल पदाधिकारी कार्यालय, खूंटी वन प्रमंडल |
| भर्ती का प्रकार | अस्थायी / परियोजना-आधारित संविदा भर्ती |
| विज्ञापन संख्या | सूचना संख्या - 02 |
| अधिसूचना तिथि | 1 सितंबर 2026 |
| कुल रिक्तियां | 5 |
| आवेदन का माध्यम | ईमेल / डाक / सीधे कार्यालय में जमा |
| चयन प्रक्रिया | वॉक-इन इंटरव्यू |
| इंटरव्यू की तिथि | 15 सितंबर 2026 |
| इंटरव्यू का समय | पूर्वाह्न 11:00 बजे |
| आवेदन जमा करने का अंतिम समय | 15 सितंबर 2026, प्रातः 10:30 बजे |
| परियोजना अवधि | 4 माह |
| मासिक मानदेय | ₹30,000 |
| कार्य स्थल | खूंटी वन प्रमंडल, झारखंड |

---

# खूंटी वन प्रमंडल रिक्ति विवरण

कुल **5 रिक्तियों** की घोषणा की गई है।

| पद नाम | रिक्तियां | शैक्षणिक योग्यता | मासिक मानदेय |
|---|---:|---|---:|
| टीम लीडर | 1 | वानिकी, पारिस्थितिकी, सांख्यिकी, वन्यजीव जीवविज्ञान या संबद्ध विषय में स्नातकोत्तर डिग्री | ₹30,000 |
| RS-GIS एक्सपर्ट | 1 | रिमोट सेंसिंग और जीआईएस में डिप्लोमा या समकक्ष | ₹30,000 |
| सांख्यिकीविद् | 1 | गणित, सांख्यिकी या कंप्यूटर साइंस में स्नातक एवं सांख्यिकी विश्लेषण सॉफ्टवेयर में दक्षता | ₹30,000 |
| फील्ड डेटा कलेक्टर | 2 | वानिकी, पारिस्थितिकी, सांख्यिकी, वन्यजीव जीवविज्ञान या संबद्ध विषय में स्नातक | ₹30,000 |
| **कुल** | **5** | | **₹30,000 प्रति माह** |

भर्ती अधिसूचना में इन चारों श्रेणियों को वर्किंग प्लान परियोजना की तकनीकी टीम के सदस्यों के रूप में चिन्हित किया गया है।

---

# 1. टीम लीडर (Team Leader)

टीम लीडर के लिए **1 पद** रिक्त है।

### शैक्षणिक योग्यता

अभ्यर्थी के पास निम्नलिखित में से किसी एक क्षेत्र में **स्नातकोत्तर (PG) डिग्री या समकक्ष योग्यता** होनी चाहिए:

* वानिकी (Forestry)
* पारिस्थितिकी (Ecology)
* सांख्यिकी (Statistics)
* वन्यजीव जीवविज्ञान (Wildlife Biology)
* संबद्ध विषय

टीम लीडर खूंटी वन प्रमंडल की कार्य योजना पर कार्य करने वाली तकनीकी टीम का नेतृत्व करेंगे।

### वेतन / मानदेय

एकमुश्त मासिक मानदेय है:

## ₹30,000 प्रति माह

---

# 2. RS-GIS एक्सपर्ट (RS-GIS Expert)

RS-GIS एक्सपर्ट के लिए **1 पद** रिक्त है।

RS-GIS का तात्पर्य **रिमोट सेंसिंग और भौगोलिक सूचना प्रणाली** से है, जो इस पद को जीआईएस-आधारित मैपिंग और स्थानिक डेटा के तकनीकी ज्ञान वाले अभ्यर्थियों के लिए अत्यधिक प्रासंगिक बनाता है।

### शैक्षणिक योग्यता

अभ्यर्थी के पास होना चाहिए:

**रिमोट सेंसिंग और जीआईएस में डिप्लोमा या समकक्ष योग्यता।**

### वेतन / मानदेय

एकमुश्त मासिक मानदेय है:

## ₹30,000 प्रति माह

परियोजना के तहत कार्य में जीआईएस और रिमोट सेंसिंग तकनीकों का उपयोग करके विषयगत जीआईएस लेयर्स तैयार करना शामिल है।

---

# 3. सांख्यिकीविद् (Statistician)

सांख्यिकीविद् के लिए **1 पद** रिक्त है।

### शैक्षणिक योग्यता

अभ्यर्थी के पास निम्नलिखित में **स्नातक डिग्री या समकक्ष योग्यता** होनी चाहिए:

* गणित
* सांख्यिकी
* कंप्यूटर साइंस

अभ्यर्थियों को **संबंधित सॉफ्टवेयर का उपयोग करके सांख्यिकीय विश्लेषण में दक्षता** होनी चाहिए। जो अभ्यर्थी [TypeHindi डेली प्रैक्टिस टूल](/practice) और [हिंदी इनस्क्रिप्ट कीबोर्ड लेआउट](/keyboard-layout) पर अभ्यास करते हैं, वे सांख्यिकीय डेटा प्रविष्टि तेजी से कर सकते हैं।

### वेतन / मानदेय

एकमुश्त मासिक मानदेय है:

## ₹30,000 प्रति माह

सांख्यिकीविद् से वर्किंग प्लान प्रोजेक्ट से संबंधित डेटा प्रोसेसिंग, सत्यापन, विश्लेषण और रिपोर्टिंग में योगदान की अपेक्षा की जाती है।

---

# 4. फील्ड डेटा कलेक्टर (Field Data Collector)

फील्ड डेटा कलेक्टर के लिए **2 पद** रिक्त हैं।

### शैक्षणिक योग्यता

अभ्यर्थी के पास निम्नलिखित में **स्नातक डिग्री या समकक्ष योग्यता** होनी चाहिए:

* वानिकी
* पारिस्थितिकी
* सांख्यिकी
* वन्यजीव जीवविज्ञान
* संबद्ध विषय

### वेतन / मानदेय

एकमुश्त मासिक मानदेय है:

## ₹30,000 प्रति माह

फील्ड डेटा कलेक्टर की भूमिका विशेष रूप से महत्वपूर्ण है क्योंकि वर्किंग प्लान परियोजना का एक बड़ा हिस्सा फील्ड सर्वेक्षण, डेटा संग्रह और सामाजिक-आर्थिक मूल्यांकन से जुड़ा है।

---

# खूंटी वन वर्किंग प्लान प्रोजेक्ट क्या है?

यह भर्ती **राष्ट्रीय वर्किंग प्लान कोड, 2023** के अनुसार **खूंटी वन प्रमंडल की कार्य योजना (Working Plan)** तैयार करने से जुड़ी है।

परियोजना में वनों, जैव विविधता, समुदायों, जीआईएस और पर्यावरणीय डेटा से संबंधित गतिविधियों की एक विस्तृत श्रृंखला शामिल है।

कार्य के दायरे में शामिल हैं:

* सामाजिक-आर्थिक सर्वेक्षण और मूल्यांकन
* मृदा (मिट्टी) सर्वेक्षण और मूल्यांकन
* जैव विविधता मूल्यांकन
* सामाजिक, आर्थिक और सांस्कृतिक लाभों का मूल्यांकन
* वन कार्बन स्टॉक और कार्बन पृथक्करण का आकलन
* मानव-वन्यजीव संघर्ष और शमन उपायों का आकलन
* विषयगत जीआईएस परतों (Thematic GIS Layers) का निर्माण
* जीआईएस और रिमोट सेंसिंग तकनीकों का उपयोग
* तकनीकी रिपोर्ट तैयार करना और अंतिम रूप देना
* राष्ट्रीय वर्किंग प्लान कोड के तहत आवश्यक अन्य कार्य

कार्य का भौगोलिक क्षेत्र खूंटी वन प्रमंडल के प्रशासनिक क्षेत्राधिकार को कवर करता है, जिसमें खूंटी जिला और रांची जिले के पांच प्रशासनिक प्रखंड शामिल हैं।

---

# परियोजना अवधि (Project Duration)

कुल परियोजना अवधि है:

## चार माह (4 Months)

यह जुड़ाव अस्थायी है और विशेष रूप से परियोजना से बंधा हुआ है।

अधिसूचना में स्पष्ट रूप से कहा गया है कि यह अनुबंध **नियमित नियुक्ति, स्थायी रोजगार या परियोजना अवधि से आगे जारी रहने का कोई अधिकार या दावा प्रदान नहीं करता है**।

स्थायी सरकारी रोजगार की तलाश करने वाले अभ्यर्थियों के लिए यह एक महत्वपूर्ण बिंदु है।

इस भर्ती को एक **अस्थायी संविदात्मक परियोजना अवसर** के रूप में देखा जाना चाहिए, न कि एक स्थायी सरकारी पद के रूप में।

---

# चयनित अभ्यर्थी क्या कार्य करेंगे?

कार्य व्यक्तिगत भूमिका के अनुसार अलग-अलग होगा, लेकिन परियोजना में व्यापक रूप से फील्डवर्क, डेटा संग्रह, विश्लेषण, जीआईएस कार्य और दस्तावेजीकरण शामिल है।

परियोजना समयरेखा में गतिविधियां शामिल हैं:

### फील्ड प्रशिक्षण

चयनित टीम के सदस्य राष्ट्रीय वर्किंग प्लान कोड के अनुसार डेटा संग्रह और गणना के लिए फील्ड प्रशिक्षण से गुजरेंगे।

### फील्ड डेटा संग्रह

तकनीकी टीम फील्ड डेटा संग्रह और सामाजिक-आर्थिक सर्वेक्षण करेगी और उसकी देखरेख करेगी।

### डेटा संकलन और सत्यापन

विश्लेषण और रिपोर्टिंग के लिए निर्धारित प्रारूपों में एकत्र किए गए फील्ड डेटा को संकलित, सत्यापित और अनुरक्षित किया जाना चाहिए। कंप्यूटर पर तेजी से काम करने के लिए [स्टेप-बाय-स्टेप हिंदी टाइपिंग लेसन्स](/learn) और [मंगल फॉन्ट टाइपिंग टेस्ट](/mangal-font-typing-test) का अभ्यास बेहद मददगार रहता है।

### जीआईएस और रिमोट सेंसिंग

टीम जीआईएस और रिमोट सेंसिंग तकनीकों का उपयोग करके विषयगत मानचित्र और स्थानिक परतें तैयार, संसाधित और अद्यतन करेगी।

### रिपोर्ट और तकनीकी दस्तावेज

टीम कार्य योजना के लिए डेटा संकलित करेगी और रिपोर्ट तथा अन्य तकनीकी दस्तावेज तैयार करेगी।

### रिकॉर्ड और डेटा रिपॉजिटरी

फील्ड गतिविधियों और परियोजना आउटपुट से संबंधित रिकॉर्ड, रजिस्टर और डेटा रिपॉजिटरी भी बनाए रखी जानी चाहिए।

ये गतिविधियां चार महीने की परियोजना अवधि के अधिकांश समय तक जारी रहने वाली हैं।

---

# क्या यह एक स्थायी सरकारी नौकरी है?

नहीं।

आवेदन करने से पहले इस बिंदु को समझ लेना चाहिए।

भर्ती को स्पष्ट रूप से वर्णित किया गया है:

**अस्थायी और परियोजना-विशिष्ट।**

यह निम्नलिखित का कोई अधिकार नहीं बनाता है:

* नियमित नियुक्ति
* स्थायी रोजगार
* परियोजना अवधि से आगे जारी रहना

इसलिए, विशेष रूप से स्थायी सरकारी पदों की तलाश करने वाले अभ्यर्थियों को इस अवसर को एसएससी, यूपीएससी, रेलवे या राज्य सरकार के विभागों द्वारा आयोजित नियमित भर्तियों से अलग मानना चाहिए।

---

# क्या कोई लिखित परीक्षा है?

अधिसूचना में किसी लिखित परीक्षा का उल्लेख नहीं है।

भर्ती निम्नलिखित के माध्यम से आयोजित की जाती है:

## वॉक-इन इंटरव्यू (Walk-in Interview)

साक्षात्कार का समय निर्धारित है:

**15 सितंबर 2026 पूर्वाह्न 11:00 बजे**

पदों में रुचि रखने वाले अभ्यर्थियों को साक्षात्कार-आधारित चयन प्रक्रिया के लिए तैयारी करनी चाहिए।

चूंकि परियोजना तकनीकी प्रकृति की है, इसलिए अभ्यर्थियों को अपनी शैक्षणिक पृष्ठभूमि, प्रासंगिक कौशल और अपने चुने हुए पद से जुड़े किसी भी अनुभव पर चर्चा करने के लिए तैयार रहना चाहिए।

---

# आवेदन की अंतिम समय सीमा (Application Deadline)

आवेदन विभाग तक पहुंच जाना चाहिए:

## 15 सितंबर 2026 प्रातः 10:30 बजे तक

वॉक-इन इंटरव्यू स्वयं शुरू होगा:

## 15 सितंबर 2026 पूर्वाह्न 11:00 बजे

इसलिए अभ्यर्थियों को अंतिम क्षण में नहीं पहुंचना चाहिए।

सूचना में विशेष रूप से आवेदन जमा करने के लिए अंतिम समय **प्रातः 10:30 बजे** दिया गया है।

---

# खूंटी वन प्रमंडल भर्ती 2026 के लिए आवेदन कैसे करें

आवेदन प्रक्रिया अधिकांश ऑनलाइन सरकारी भर्तियों से भिन्न है।

अभ्यर्थियों के पास तीन आवेदन विकल्प हैं:

### 1. ईमेल द्वारा

अभ्यर्थी अपना आवेदन और दस्तावेज इस पते पर भेज सकते हैं:

**[dfokhunti2@gmail.com](mailto:dfokhunti2@gmail.com)**

आवेदन में स्पष्ट रूप से उस पद का उल्लेख होना चाहिए जिसके लिए आवेदन किया जा रहा है।

### 2. डाक द्वारा

अभ्यर्थी अपना आवेदन भेज सकते हैं:

**वन प्रमंडल पदाधिकारी कार्यालय, खूंटी वन प्रमंडल, कमंता, खूंटी-चाईबासा रोड, जिला-खूंटी, झारखंड – 835210**

### 3. सीधे कार्यालय में जमा

अभ्यर्थी अपना आवेदन सीधे कार्यालय में भी जमा कर सकते हैं।

आवेदन **अधिसूचना के साथ संलग्न निर्धारित प्रारूप (Pro Forma)** का उपयोग करके प्रस्तुत किया जाना चाहिए।

---

# आवश्यक दस्तावेज (Documents Required)

वॉक-इन इंटरव्यू में शामिल होने वाले अभ्यर्थियों को साथ ले जाना होगा:

* निर्धारित प्रारूप में विधिवत भरा हुआ आवेदन पत्र
* शैक्षणिक योग्यता प्रमाण पत्रों की स्व-सत्यापित प्रतियां
* स्व-सत्यापित अनुभव प्रमाण पत्र (जहां लागू हो)
* सत्यापन हेतु मूल प्रमाण पत्र एवं दस्तावेज
* हालिया पासपोर्ट आकार का फोटो
* वैध फोटो पहचान पत्र

अभ्यर्थियों को मूल दस्तावेज अवश्य ले जाने चाहिए क्योंकि साक्षात्कार प्रक्रिया के दौरान सत्यापन के लिए उनकी आवश्यकता होगी।

---

# वॉक-इन इंटरव्यू कहां आयोजित हो रहा है?

साक्षात्कार आयोजित किया जाएगा:

**वन प्रमंडल पदाधिकारी कार्यालय, खूंटी वन प्रमंडल**

**कमंता, खूंटी-चाईबासा रोड, जिला-खूंटी, झारखंड – 835210**

अधिसूचना में स्थल के लिए निम्नलिखित जीपीएस निर्देशांक भी प्रदान किए गए हैं:

**23.052181° N, 85.285582° E**

खूंटी से बाहर से आने वाले अभ्यर्थियों को अपनी यात्रा की योजना पहले से बना लेनी चाहिए।

---

# चयन प्रक्रिया क्या है?

भर्ती वॉक-इन इंटरव्यू पर आधारित है।

व्यापक प्रक्रिया है:

**आवेदन जमा करना**

↓

**दस्तावेज़ सत्यापन**

↓

**वॉक-इन इंटरव्यू**

↓

**अंतिम चयन**

↓

**परियोजना कार्यभार**

सूचना यह भी स्पष्ट करती है कि केवल निर्धारित योग्यता रखने से चयन की गारंटी नहीं होती है। चयन और नियुक्ति का अंतिम निर्णय वन प्रमंडल पदाधिकारी, खूंटी वन प्रमंडल के पास सुरक्षित है।

---

# क्या अनुभव अनिवार्य है?

भर्ती सूचना अभ्यर्थियों को अपने अनुभव प्रमाण पत्र प्रस्तुत करने का अवसर प्रदान करती है, और आवेदन पत्र में वर्किंग प्लान की तैयारी, अनुसंधान और फील्ड अध्ययन जैसे क्षेत्रों में अनुभव के लिए एक कॉलम शामिल है।

हालांकि, रिक्ति तालिका मुख्य रूप से प्रत्येक पद के लिए **न्यूनतम शैक्षणिक योग्यता** निर्दिष्ट करती है।

इसलिए अभ्यर्थियों को अपनी पृष्ठभूमि की सावधानीपूर्वक समीक्षा करनी चाहिए और जहां भी उनके पास प्रासंगिक अनुभव हो, अनुभव प्रमाण पत्र साथ ले जाने चाहिए।

वानिकी सर्वेक्षण, अनुसंधान, फील्ड अध्ययन, जीआईएस, रिमोट सेंसिंग, सांख्यिकी या संबंधित कार्य का अनुभव विशेष रूप से प्रासंगिक हो सकता है।

---

# क्या कोई आयु सीमा है?

प्रदान की गई भर्ती जानकारी में नोटिस अलग से ऊपरी या निचली आयु सीमा को स्पष्ट रूप से निर्दिष्ट नहीं करता है।

इसलिए अभ्यर्थियों को अन्य सरकारी भर्तियों के आधार पर आयु मानदंड मानने के बजाय आधिकारिक नोटिस और आवेदन निर्देशों पर भरोसा करना चाहिए।

---

# खूंटी वन भर्ती: किसे आवेदन करना चाहिए?

यह भर्ती विशिष्ट शैक्षणिक पृष्ठभूमि वाले अभ्यर्थियों के लिए सबसे उपयुक्त है।

### टीम लीडर

उन अभ्यर्थियों के लिए सबसे उपयुक्त जिनके पास स्नातकोत्तर योग्यता है:

**वानिकी, पारिस्थितिकी, सांख्यिकी, वन्यजीव जीवविज्ञान या संबद्ध क्षेत्र।**

### RS-GIS एक्सपर्ट

निम्नलिखित पृष्ठभूमि वाले अभ्यर्थियों के लिए उपयुक्त:

**रिमोट सेंसिंग और जीआईएस योग्यता।**

### सांख्यिकीविद्

निम्नलिखित विषयों के अभ्यर्थियों के लिए उपयुक्त:

**गणित, सांख्यिकी या कंप्यूटर साइंस**

जो प्रासंगिक सांख्यिकीय विश्लेषण सॉफ्टवेयर में कुशल हैं।

### फील्ड डेटा कलेक्टर

निम्नलिखित विषयों के स्नातकों के लिए उपयुक्त:

**वानिकी, पारिस्थितिकी, सांख्यिकी, वन्यजीव जीवविज्ञान या संबद्ध क्षेत्र।**

---

# कौन से कौशल अभ्यर्थियों की मदद कर सकते हैं?

यद्यपि न्यूनतम योग्यताएं पद के अनुसार भिन्न होती हैं, प्रासंगिक व्यावहारिक कौशल वाले अभ्यर्थी परियोजना के लिए बेहतर रूप से तैयार हो सकते हैं।

उपयोगी कौशल में शामिल हो सकते हैं:

* फील्ड सर्वेक्षण तकनीक
* डेटा संग्रह
* सांख्यिकीय विश्लेषण
* जीआईएस
* रिमोट सेंसिंग
* मैपिंग
* जैव विविधता मूल्यांकन
* पर्यावरण अनुसंधान
* रिपोर्ट तैयार करना
* डेटा प्रबंधन
* कंप्यूटर अनुप्रयोग

प्रत्येक कौशल की सटीक प्रासंगिकता उस पद पर निर्भर करती है जिसके लिए आवेदन किया जा रहा है।

---

# महत्वपूर्ण नियम और शर्तें

अभ्यर्थियों को समझना चाहिए कि मानदेय **एकमुश्त और सर्व-समावेशी (Consolidated & All-Inclusive)** है।

अधिसूचना में कहा गया है कि कोई अतिरिक्त नहीं होगा:

* टीए / डीए (TA/DA)
* एचआरए (HRA)
* आवास भत्ता
* भोजन व्यय
* चिकित्सा व्यय
* अन्य भत्ते

हालांकि, विशेष रूप से अधिकृत फील्ड यात्रा की प्रतिपूर्ति लागू विभागीय मानदंडों के अनुसार की जा सकती है।

वॉक-इन इंटरव्यू में शामिल होने के लिए अभ्यर्थियों को कोई टीए/डीए भी नहीं दिया जाएगा।

---

# क्या विभाग भर्ती में बदलाव कर सकता है?

हाँ।

वन प्रमंडल पदाधिकारी, खूंटी वन प्रमंडल के पास अधिकार सुरक्षित है:

* पदों की संख्या बढ़ाना या घटाना
* नियुक्ति प्रक्रिया में संशोधन करना
* भर्ती को स्थगित करना
* नियुक्ति प्रक्रिया को रद्द करना

विभाग परियोजना की आवश्यकताओं और प्रगति के अनुसार चयनित अभ्यर्थियों की भूमिकाओं और जिम्मेदारियों को भी संशोधित कर सकता है।

---

# इंटरव्यू में साथ ले जाने वाली महत्वपूर्ण चीजें

वॉक-इन इंटरव्यू के लिए निकलने से पहले अभ्यर्थियों को यह सुनिश्चित कर लेना चाहिए कि उनके पास है:

**✓** भरा हुआ आवेदन पत्र

**✓** मूल शैक्षणिक प्रमाण पत्र

**✓** स्व-सत्यापित फोटोकॉपी

**✓** अनुभव प्रमाण पत्र (यदि लागू हो)

**✓** हालिया पासपोर्ट आकार का फोटो

**✓** वैध फोटो आईडी

**✓** प्रासंगिक योग्यताओं की प्रतियां

**✓** व्यक्तिगत संदर्भ के लिए आवेदन की एक प्रति

अभ्यर्थियों को **पूर्वाह्न 11:00 बजे से काफी पहले** पहुंचना चाहिए क्योंकि आवेदन जमा करने की समय सीमा **प्रातः 10:30 बजे** है।

---

# वॉक-इन इंटरव्यू की तैयारी कैसे करें

चूंकि कोई लिखित परीक्षा नहीं है, इसलिए अभ्यर्थियों को अपनी तैयारी उस पद पर केंद्रित करनी चाहिए जिसके लिए वे आवेदन कर रहे हैं।

## टीम लीडर

दोहराएं:

* वानिकी के मूल सिद्धांत
* पारिस्थितिकी
* वन्यजीव जीवविज्ञान
* वर्किंग प्लान की अवधारणाएं
* फील्ड सर्वेक्षण के तरीके
* अनुसंधान पद्धति

## RS-GIS एक्सपर्ट

ध्यान केंद्रित करें:

* जीआईएस के मूल सिद्धांत
* रिमोट सेंसिंग
* स्थानिक डेटा (Spatial Data)
* मैपिंग और विषयगत परतें
* जीआईएस सॉफ्टवेयर अनुप्रयोग

## सांख्यिकीविद्

दोहराएं:

* सांख्यिकी के मूल सिद्धांत
* डेटा विश्लेषण और सांख्यिकीय सॉफ्टवेयर
* सर्वेक्षण डेटा सत्यापन
* परिणामों की व्याख्या

## फील्ड डेटा कलेक्टर

तैयारी करें:

* फील्ड सर्वेक्षण और डेटा संग्रह
* जैव विविधता और पारिस्थितिकी
* बुनियादी वानिकी और फील्ड प्रलेखन

अभ्यर्थी [TypeHindi इंटरैक्टिव टाइपिंग गेम्स](/game) के साथ अपने कीबोर्ड समन्वय को भी धार दे सकते हैं।

---

# अंतिम निष्कर्ष (Final Verdict)

**खूंटी वन प्रमंडल भर्ती 2026** एक छोटी लेकिन विशिष्ट भर्ती है, जो **5 अस्थायी परियोजना-आधारित पदों** की पेशकश करती है, जिसमें सभी के लिए **₹30,000 प्रति माह** का एकमुश्त मानदेय है।

रिक्तियों में शामिल हैं:

**1 टीम लीडर**

**1 RS-GIS एक्सपर्ट**

**1 सांख्यिकीविद्**

**2 फील्ड डेटा कलेक्टर**

यह भर्ती विशेष रूप से **वानिकी, पारिस्थितिकी, वन्यजीव जीवविज्ञान, सांख्यिकी, गणित, कंप्यूटर साइंस, रिमोट सेंसिंग और जीआईएस** पृष्ठभूमि वाले अभ्यर्थियों के लिए प्रासंगिक है।

परियोजना खूंटी वन प्रमंडल की कार्य योजना तैयार करने पर केंद्रित है और इसमें फील्ड सर्वेक्षण, जैव विविधता मूल्यांकन, सामाजिक-आर्थिक अध्ययन, जीआईएस, डेटा विश्लेषण, कार्बन मूल्यांकन और तकनीकी रिपोर्टिंग शामिल है।

**अधिसूचना में किसी लिखित परीक्षा का उल्लेख नहीं है**। अभ्यर्थियों का चयन **15 सितंबर 2026 को पूर्वाह्न 11:00 बजे निर्धारित वॉक-इन इंटरव्यू** के माध्यम से किया जाता है।

आवेदन **ईमेल, डाक या सीधे खूंटी वन प्रमंडल कार्यालय में जमा** किए जा सकते हैं, और अंतिम आवेदन जमा करने का समय **15 सितंबर 2026 को प्रातः 10:30 बजे** है।

एक प्रमुख सीमा यह है कि यह **स्थायी सरकारी नौकरी नहीं है**। यह अनुबंध चार महीने के लिए अस्थायी और परियोजना-विशिष्ट है, और यह नियमित सरकारी रोजगार का दावा प्रदान नहीं करता है।

जिन अभ्यर्थियों के पास पहले से ही आवश्यक शैक्षणिक पृष्ठभूमि है और वे **वानिकी, जीआईएस, सांख्यिकी, पारिस्थितिकी या फील्ड अनुसंधान** में अल्पकालिक पेशेवर अनुभव की तलाश कर रहे हैं, उनके लिए यह एक उपयोगी अवसर हो सकता है।

**विशिष्ट कौशल। वास्तविक फील्ड अनुभव। ₹30,000 प्रति माह। साक्षात्कार में शामिल हों और अपना पक्ष मजबूती से रखें।**
`
  },
  {
    slug: "mecl-recruitment-2026-stenographer-assistant-typing-jobs",
    titleEn: "MECL Non-Executive Recruitment 2026: Stenographer, Assistant and Typing Jobs, 122 Vacancies, Eligibility, Salary and Selection Process",
    excerptEn: "Complete guide to MECL Non-Executive Recruitment 2026 for 122 vacancies including Stenographer (English 40 WPM typing & 80 WPM shorthand), Assistant (Hindi), eligibility, and salary.",
    dateEn: "03 September, 2026",
    title: "MECL भर्ती 2026: स्टेनोग्राफर, सहायक और टाइपिंग पद, 122 रिक्तियां, पात्रता, वेतन और चयन प्रक्रिया",
    excerpt: "एमईसीएल गैर-कार्यकारी भर्ती 2026 (122 पद) जिसमें स्टेनोग्राफर (अंग्रेजी टाइपिंग 40 WPM व आशुलिपि 80 WPM), सहायक (हिंदी), योग्यता, वेतनमान और चयन प्रक्रिया की पूरी जानकारी।",
    date: "03 सितंबर, 2026",
    author: "TypeHindi Team",
    category: "Exam Guide",
    contentEn: `\n# MECL Non-Executive Recruitment 2026: Stenographer, Assistant and Typing Jobs, 122 Vacancies, Eligibility, Salary and Selection Process

![MECL Recruitment 2026](/images/mecl-recruitment-2026.jpg)

**Mineral Exploration and Consultancy Limited (MECL)** has announced Non-Executive Recruitment 2026 for a total of **122 vacancies across 16 posts**. The recruitment is particularly interesting for candidates looking for government-sector jobs involving stenography, typing, Hindi typing, office work, and computer-based skills.

Among the advertised positions, **Stenographer (English)** and **Assistant (Hindi)** are the two posts most directly connected with typing and language skills. The recruitment also includes Assistant posts in Materials, Accounts, IT, and HR, along with technical and other non-executive positions.

MECL is a **Miniratna-I Central Public Sector Enterprise (CPSE)** under the Ministry of Mines, Government of India. Candidates selected through this recruitment can be posted at MECL's corporate office, project sites, or other establishments across India or overseas, according to organizational requirements.

The online application window is scheduled from **12 September 2026 to 11 October 2026**.

---

## MECL Non-Executive Recruitment 2026: Overview

| Particular | Details |
|---|---|
| **Organization** | Mineral Exploration and Consultancy Limited (MECL) |
| **Ministry** | Ministry of Mines, Government of India |
| **Enterprise Category** | Miniratna-I CPSE |
| **Recruitment Type** | Non-Executive Recruitment 2026 |
| **Advertisement No.** | 03/Rectt./2026 |
| **Total Vacancies** | 122 |
| **Total Posts** | 16 |
| **Application Mode** | Online ([mecl.co.in](https://mecl.co.in)) |
| **Application Start Date** | 12 September 2026 |
| **Last Date to Apply** | 11 October 2026 |
| **Maximum Age Limit** | 30 years (Cut-off: 1 September 2026) |
| **Selection Framework** | Screening, Written Test, Document Verification, Skill / Trade Test |
| **Written Exam Center** | Nagpur |
| **Job Location** | MECL offices/projects across India or overseas |

---

## Is MECL Recruitment 2026 a Typing Job Recruitment?

For TypeHindi readers and typing aspirants, this is the most critical question:

**Yes, there are explicit typing and stenography posts in this recruitment.**

The most directly relevant positions are:
* **Stenographer (English):** 4 Vacancies (Requires 40 WPM English typing + 80 WPM shorthand)
* **Assistant (Hindi):** 1 Vacancy (Requires Hindi & English degree background and language proficiency)

The recruitment also includes several Assistant positions (Materials, Accounts, IT, HR). While these are not strict typing-test jobs, keyboard fluency on [TypeHindi Daily Practice Tool](/practice) gives candidates a strong competitive advantage in modern office administration.

---

## MECL Stenographer Recruitment 2026

The **Stenographer (English)** position is a **W-4 grade post** with a pay scale of **₹20,200 – ₹49,300**.

* **Vacancies:** 4 Backlog Vacancies (OBC-NCL: 3, ST: 1).
* **Essential Qualifications:**
  * Graduation degree in any stream from a recognized university.
  * Recognized certificate in **Shorthand at 80 words per minute (English)**.
  * Recognized certificate in **Typing at 40 words per minute (English)**.

### Why the MECL Stenographer Post Is Crucial for Typing Aspirants

Unlike general computer-based vacancies where typing is merely desirable, the MECL Stenographer post explicitly mandates qualifying speed certifications:

* **English Typing:** 40 WPM
* **English Shorthand:** 80 WPM

A stenographer's core workflow combines:
$$\\text{Listening / Dictation} \\longrightarrow \\text{Shorthand Notes} \\longrightarrow \\text{Transcription} \\longrightarrow \\text{Typing Accuracy}$$

To prepare effectively, candidates should build a comfortable speed buffer (45+ WPM) using [Step-by-Step Typing Lessons & Guidelines](/learn) and [Interactive Typing Games](/game) to maintain 98%+ accuracy under timed conditions.

---

## Assistant (Hindi): Another Relevant Post

The second position of strong interest to bilingual typists is **Assistant (Hindi)**.

* **Grade & Pay Scale:** W-4 Grade (₹20,200 – ₹49,300)
* **Vacancy:** 1 Backlog Vacancy (SC Category)
* **Eligibility:** Graduation degree with Hindi and English as main subjects, or degree in English with prescribed Advanced Hindi qualifications.

### How Hindi Typing Fits into the Assistant (Hindi) Role

While this post is primarily language-oriented rather than an LDC speed test, working as a Hindi Assistant in a Central PSU requires extensive bilingual correspondence, report formatting, and digital documentation.

Candidates mastering the [Hindi InScript Keyboard Layout](/keyboard-layout) and [Mangal Font Hindi Typing Test](/mangal-font-typing-test) will find their daily workflow significantly smoother when handling official translation, drafting, and central government circulars.

---

## Other Assistant Posts in MECL Recruitment 2026

MECL has advertised several other office and technical assistant positions:

| Post Name | Grade | Vacancies | Educational Requirements |
|---|---|---|---|
| **Assistant (Materials)** | W-4 | 16 | Graduation with Mathematics OR B.Com |
| **Assistant (Accounts)** | W-4 | 10 | B.Com from a recognized university |
| **Assistant (IT)** | W-4 | 3 | BCA / BCS / B.Sc (CS/IT) or Graduate with IT Diploma |
| **Assistant (HR)** | W-4 | 3 | BA / B.Com / B.Sc / BBA / BBM / BSW |
| **Stenographer (English)** | W-4 | 4 | Graduate + 80 WPM Shorthand & 40 WPM Typing |
| **Assistant (Hindi)** | W-4 | 1 | Graduate with Hindi & English subjects |

---

## Total Vacancies Breakdown (122 Posts)

| Post Name | Total Vacancies | Post Name | Total Vacancies |
|---|---|---|---|
| **Accountant (W-7)** | 6 | **Electrician (W-4)** | 7 |
| **Technician - Survey (W-4)** | 12 | **Machinist (W-4)** | 2 |
| **Technician - Sampling (W-4)** | 7 | **Technician - Drilling (W-4)** | 12 |
| **Technician - Laboratory (W-4)** | 2 | **Mechanic (W-4)** | 1 |
| **Assistant - Materials (W-4)** | 16 | **Mechanic-cum-Operator - Drilling (W-4)** | 30 |
| **Assistant - Accounts (W-4)** | 10 | **Junior Driver (W-3)** | 6 |
| **Stenographer - English (W-4)** | 4 | **Assistant - IT (W-4)** | 3 |
| **Assistant - Hindi (W-4)** | 1 | **Assistant - HR (W-4)** | 3 |
| **Grand Total** | **122 Vacancies** | | |

---

## MECL Non-Executive Salary Structure 2026

The pay scales for the non-executive positions are structured as follows:

* **W-7 Grade (Accountant):** ₹22,900 – ₹55,900
* **W-4 Grade (Stenographer, Assistants, Technicians, Mechanics):** ₹20,200 – ₹49,300
* **W-3 Grade (Junior Driver):** ₹19,600 – ₹47,900

*In addition to basic pay, selected candidates are entitled to Industrial Dearness Allowance (IDA), HRA, medical benefits, PF, gratuity, and project allowances as per MECL CPSE rules.*

---

## Selection Process for MECL Recruitment 2026

The selection framework follows a multi-stage evaluation:

1. **Stage 1: Document Screening:** Verification of online applications and uploaded certificates.
2. **Stage 2: Written Examination:** Conducted at **Nagpur**; forms the primary merit component.
3. **Stage 3: Document Verification:** Scrutiny of original certificates, category proof, and typing/shorthand credentials.
4. **Stage 4: Skill Test / Trade Test:** Mandatory for Stenographer and technical trade posts (qualifying in nature).
5. **Stage 5: Final Merit & Medical Fitness:** Merit list based on written test scores among candidates who qualify the skill/trade test.

---

## MECL Recruitment 2026: Important Dates & Fees

| Event | Date |
|---|---|
| **Crucial Date for Age & Qualification** | 1 September 2026 |
| **Online Application Start Date** | **12 September 2026** |
| **Last Date to Apply Online** | **11 October 2026** |
| **Written Exam Date** | To be notified on official portal |

### Application Fee:
* **General / OBC-NCL / EWS:** ₹500
* **SC / ST / PwD / Ex-Servicemen / Departmental Candidates:** **Exempted (₹0)**

---

## Final Takeaway & Preparation Strategy

The MECL Non-Executive Recruitment 2026 provides a prime PSU career opportunity for candidates combining stenography, typing, and administrative skills.

* **For Stenographers:** Ensure your English typing speed is solid at **40+ WPM** and shorthand is polished at **80 WPM**.
* **For Bilingual & Hindi Typists:** The Assistant (Hindi) and Assistant (HR/IT) posts offer stable Central PSU careers.
* **Next Steps:** Keep practicing daily on [TypeHindi.in](/) using our [Typing Speed Test](/test) and [InScript Keyboard Layout](/keyboard-layout) to stay exam-ready!
`,
    content: `\n# MECL भर्ती 2026: स्टेनोग्राफर, सहायक और टाइपिंग पद, 122 रिक्तियां, पात्रता, वेतन और चयन प्रक्रिया

![MECL Recruitment 2026](/images/mecl-recruitment-2026.jpg)

**मिनरल एक्सप्लोरेशन एंड कंसल्टेंसी लिमिटेड (MECL)** ने 16 विभिन्न पदों पर कुल **122 गैर-कार्यकारी (Non-Executive) रिक्तियों** के लिए भर्ती 2026 की अधिसूचना जारी की है। यह भर्ती स्टेनोग्राफी, टाइपिंग, हिंदी अनुवाद, कंप्यूटर एवं कार्यालयीन कार्यों से जुड़े सरकारी नौकरी के इच्छुक उम्मीदवारों के लिए एक बेहतरीन अवसर है।

विज्ञापित पदों में **स्टेनोग्राफर (अंग्रेजी)** और **सहायक (हिंदी)** दो ऐसे पद हैं जो सीधे भाषा और टाइपिंग दक्षता से जुड़े हैं। इसके अलावा सामग्री, लेखा, आईटी और मानव संसाधन (HR) में सहायक पद तथा तकनीकी पद शामिल हैं।

MECL भारत सरकार के खान मंत्रालय (Ministry of Mines) के अधीन एक **मिनीरत्न-I केंद्रीय सार्वजनिक क्षेत्र उद्यम (CPSE)** है। ऑनलाइन आवेदन की प्रक्रिया **12 सितंबर 2026 से 11 अक्टूबर 2026** तक चलेगी।

---

## एमईसीएल भर्ती 2026: संक्षिप्त विवरण

| विवरण | जानकारी |
|---|---|
| **संस्थान** | मिनरल एक्सप्लोरेशन एंड कंसल्टेंसी लिमिटेड (MECL) |
| **मंत्रालय** | खान मंत्रालय, भारत सरकार (Miniratna-I CPSE) |
| **विज्ञापन संख्या** | 03/Rectt./2026 |
| **कुल रिक्तियां** | 122 पद |
| **आवेदन मोड** | ऑनलाइन ([mecl.co.in](https://mecl.co.in)) |
| **आवेदन प्रारंभ तिथि** | 12 सितंबर 2026 |
| **आवेदन की अंतिम तिथि** | 11 अक्टूबर 2026 |
| **अधिकतम आयु सीमा** | 30 वर्ष (गणना तिथि: 01 सितंबर 2026) |
| **लिखित परीक्षा केंद्र** | नागपुर (Nagpur) |
| **चयन प्रक्रिया** | स्क्रीनिंग, लिखित परीक्षा, दस्तावेज़ सत्यापन, स्किल/ट्रेड टेस्ट |

---

## क्या यह टाइपिंग और स्टेनोग्राफी भर्ती है?

**हाँ, इस भर्ती में विशेष रूप से टाइपिंग और स्टेनोग्राफी के पद शामिल हैं।**

1. **स्टेनोग्राफर (अंग्रेजी):** 4 पद (बैकलॉग - OBC-NCL: 3, ST: 1)
   * **शैक्षणिक योग्यता:** किसी भी विषय में स्नातक (Graduation)।
   * **तकनीकी योग्यता:** अंग्रेजी शॉर्टहैंड में **80 शब्द प्रति मिनट (WPM)** और अंग्रेजी टाइपिंग में **40 शब्द प्रति मिनट (WPM)** का प्रमाण पत्र।

2. **सहायक (हिंदी):** 1 पद (बैकलॉग - SC: 1)
   * **शैक्षणिक योग्यता:** हिंदी और अंग्रेजी विषयों के साथ स्नातक।
   * **कार्यप्रणाली:** केंद्रीय उपक्रमों में हिंदी पत्राचार, अनुवाद एवं [मंगल फॉन्ट हिंदी टाइपिंग](/mangal-font-typing-test) के माध्यम से डिजिटल दस्तावेजीकरण।

अपनी गति और सटीकता को निखारने के लिए उम्मीदवार [TypeHindi टाइपिंग प्रैक्टिस टूल](/practice) और [हिंदी इनस्क्रिप्ट कीबोर्ड लेआउट](/keyboard-layout) का उपयोग कर सकते हैं।

---

## अन्य सहायक एवं तकनीकी पद (Assistant Posts)

* **सहायक (Materials):** 16 पद (गणित के साथ स्नातक या B.Com)
* **सहायक (Accounts):** 10 पद (B.Com)
* **सहायक (IT):** 3 पद (BCA / BCS / B.Sc IT / CS)
* **सहायक (HR):** 3 पद (BA / B.Com / B.Sc / BBA / BBM / BSW)
* **अकाउंटेंट (W-7):** 6 पद (₹22,900 – ₹55,900)
* **ड्रिलिंग/मैकेनिक/इलेक्ट्रीशियन/तकनीशियन:** 79 पद

---

## वेतनमान (Pay Scale)

* **W-7 ग्रेड (अकाउंटेंट):** ₹22,900 – ₹55,900
* **W-4 ग्रेड (स्टेनोग्राफर, सहायक, तकनीशियन):** ₹20,200 – ₹49,300
* **W-3 ग्रेड (जूनियर ड्राइवर):** ₹19,600 – ₹47,900
* *मूल वेतन के अतिरिक्त केंद्रीय सार्वजनिक क्षेत्र के नियमानुसार महंगाई भत्ता (IDA), मकान किराया भत्ता (HRA) व अन्य भत्ते देय होंगे।*

---

## चयन प्रक्रिया (Selection Process)

1. **लिखित परीक्षा (Written Test):** नागपुर में आयोजित की जाएगी और अंतिम मेरिट का मुख्य आधार होगी।
2. **स्किल/ट्रेड टेस्ट (Skill Test):** स्टेनोग्राफर पद के लिए शॉर्टहैंड और टाइपिंग स्किल टेस्ट अनिवार्य एवं क्वालिफाइंग प्रकृति का होगा।
3. **दस्तावेज़ सत्यापन एवं मेडिकल परीक्षण:** प्रमाण पत्रों की जांच उपरांत अंतिम चयन।

---

## महत्वपूर्ण तिथियां एवं आवेदन शुल्क

* **ऑनलाइन आवेदन की अंतिम तिथि:** **11 अक्टूबर 2026**
* **आवेदन शुल्क:** 
  * सामान्य / OBC-NCL / EWS: ₹500
  * SC / ST / PwD / Ex-Servicemen: **निःशुल्क (₹0)**

---

## निष्कर्ष (Conclusion)

MECL गैर-कार्यकारी भर्ती 2026 स्टेनोग्राफी और कार्यालयीन कंप्यूटर कौशल वाले अभ्यर्थियों के लिए एक सुरक्षित सार्वजनिक क्षेत्र करियर प्रदान करती है। अपनी टाइपिंग गति बढ़ाने के लिए [TypeHindi.in](/) पर नियमित अभ्यास करें और [टाइपिंग गेम्स](/game) के जरिए अपने रिफ्लेक्स मजबूत बनाएं।
`
  },
  {
    slug: "iit-tirupati-recruitment-2026-computer-it-typing-jobs",
    titleEn: "IIT Tirupati Recruitment 2026: Computer, IT and Typing Skills, Eligibility, Salary and Selection Process",
    excerptEn: "Complete overview of IIT Tirupati non-teaching recruitment 2026 for Hindi Translator, Junior Technical Superintendent, and Technician posts with computer, IT and typing skill requirements.",
    dateEn: "03 September, 2026",
    title: "IIT तिरुपति भर्ती 2026: कंप्यूटर, आईटी और टाइपिंग कौशल, योग्यता, वेतन और चयन प्रक्रिया",
    excerpt: "आईआईटी तिरुपति गैर-शिक्षण भर्ती 2026 (हिंदी अनुवादक, जूनियर टेक्निकल सुपरिंटेंडेंट, तकनीशियन) के लिए कंप्यूटर, आईटी, टाइपिंग कौशल, पात्रता, वेतन और चयन प्रक्रिया की पूरी जानकारी।",
    date: "03 सितंबर, 2026",
    author: "TypeHindi Team",
    category: "Exam Guide",
    contentEn: `\n# IIT Tirupati Recruitment 2026: Computer, IT and Typing Skills, Eligibility, Salary and Selection Process

![IIT Tirupati Recruitment 2026](/images/iit-tirupati-recruitment-2026.jpg)

Government jobs that involve computers, documentation, data handling and office work often attract candidates who are already preparing for typing tests. However, not every computer-oriented government vacancy is officially a typing post. The **IIT Tirupati Recruitment 2026** is a prime example.

The **Indian Institute of Technology Tirupati** has announced recruitment for several non-teaching positions, including **Hindi Translator**, **Junior Technical Superintendent (CSE & Network Security)**, **Junior Technician (Systems & CSE)** and other administrative and technical posts. The recruitment is being conducted on a direct recruitment basis, and applications are being accepted online. The last date for submission is **30 September 2026 up to 5:00 PM**.

For candidates practicing on [TypeHindi Daily Practice Arena](/practice) and preparing for computer work and government employment, some of these posts are worth understanding because they involve significant use of computers, documentation, software, technical systems and office applications.

At the same time, there is an important point to understand before applying:

> **Important Clarification:** This recruitment does not advertise a dedicated LDC, clerk, typist or data-entry post, and the official notification does not specify a separate typing-speed test for these positions. The relevance of typing here is primarily through computer-based work, documentation and software usage rather than a conventional typing-test vacancy.

---

## IIT Tirupati Recruitment 2026: Overview

| Particular | Details |
|---|---|
| **Organization** | Indian Institute of Technology Tirupati (IIT Tirupati) |
| **Recruitment Type** | Non-Teaching Staff Recruitment (Direct Recruitment) |
| **Advertisement No.** | IITT/STAFFREC/01/2026 |
| **Advertisement Date** | 31 August 2026 |
| **Application Mode** | Online ([IIT Tirupati Portal](https://iittp.ac.in)) |
| **Application Start Date** | 31 August 2026 |
| **Last Date to Apply** | 30 September 2026 (5:00 PM) |
| **Major Groups** | Group A, Group B and Group C |
| **Selection for Group B/C** | Objective Test, Descriptive Written Test, Skill / Trade Test |

---

## Is This a Typing Job Recruitment?

This is the first question a typing-job aspirant should ask.

The answer is: **not directly**.

The recruitment does not list conventional clerical posts such as:
* Lower Division Clerk (LDC)
* Upper Division Clerk (UDC)
* Junior Clerk / Typist
* Data Entry Operator (DEO)
* Junior Assistant

It also does not specify a conventional typing-speed cutoff (such as 30 WPM or 35 WPM).

However, several positions involve computer applications, technical documentation, office tools, web applications, databases and language software. That makes this recruitment highly relevant to individuals developing their keyboard fluency on [TypeHindi Step-by-Step Lessons](/learn), even though it is not classified as a traditional typing-test recruitment.

---

## Which IIT Tirupati Posts Are Most Relevant to Computer and Typing Skills?

Several positions stand out for candidates with computer, IT, and Hindi documentation backgrounds:

### 1. Hindi Translator (Group B)

The **Hindi Translator** post is a Group B position at **Pay Level 6** (Pay Scale: **₹35,400 to ₹1,12,400**). One vacancy is available under the UR category.

* **Essential Qualification:** Bachelor's degree with Hindi and English as main subjects, minimum 55% marks or equivalent CGPA, and two years of translation experience from English to Hindi and vice versa in Central/State Government offices or autonomous bodies.
* **Desirable Experience:**
  * Diploma or certificate course in translation.
  * Knowledge of operating Hindi application software packages on computer.
  * Experience translating technical and scientific documents.

#### Why Is This Relevant to Typing?

While Hindi Translator is not officially a typing-test post, day-to-day work requires extensive Hindi document preparation. Translators in premier central institutes routinely create, format, and edit bilingual notices, reports, and administrative files using Unicode fonts and official software.

For aspirants mastering the [Hindi InScript Keyboard Layout](/keyboard-layout) and [Mangal Font Hindi Typing](/mangal-font-typing-test), keyboard familiarity, typing accuracy, and speed with Hindi software are essential assets on the job.

---

### 2. Junior Technical Superintendent – Computer Science & Engineering (Group B)

There are **2 vacancies** (1 UR, 1 EWS) at **Pay Level 6** (₹35,400 – ₹1,12,400).

* **Educational Routes:**
  * BE / B.Tech in CSE / IT / Electronics, or M.Sc (CS/IT) / MCA with at least 55% marks and 2 years of relevant experience.
  * B.Sc in Computer Science / IT or BCA with at least 55% marks and 4 years of relevant experience.
  * Relevant Engineering Diploma with prescribed experience.
* **Desirable Technical Areas:**
  * Linux server administration, networking, virtualization, and cloud infrastructure.
  * Programming, data structures, algorithms, databases, Git, VS Code, and Vim.

While this is an advanced technical role, rapid keyboard navigation, command-line fluency, and fast error-free typing directly improve daily programming and system administration efficiency.

---

### 3. Junior Technical Superintendent – Network Security (Group B)

IIT Tirupati has advertised **1 vacancy** for Junior Technical Superintendent – Network Security at **Pay Level 6** (₹35,400 – ₹1,12,400).

* **Qualifications:** BE/B.Tech/M.Sc in CSE, IT, ECE, Software Sciences, or MCA / BCA with relevant experience.
* **Key Experience:** Cybersecurity, firewall rules, VPN configuration, security monitoring, Linux administration, and shell scripting.

---

### 4. Junior Technician – Systems (Group C)

This is a Group C position at **Pay Level 4** (Pay Scale: **₹25,500 to ₹81,100**).

* **Qualifications:** BE/B.Tech/M.Sc/MCA in CSE/IT/ECE, or B.Sc (CS/IT) / BCA, Diploma, or ITI in Computer Science / IT with relevant experience.
* **Desirable Experience:** Technical laboratory setup, software installation, website maintenance, and system troubleshooting.

---

### 5. Junior Technician – Computer Science & Engineering (Group C)

A backlog Group C position at **Pay Level 4** (₹25,500 – ₹81,100).

* **Desirable Skills:** Web systems, Linux, database queries, office documentation tools, Git, and technical lab management.

---

## Where Does Typing Fit Into These IIT Jobs?

| Category | Type 1: Typing-Test Jobs | Type 2: Computer-Oriented Jobs |
|---|---|---|
| **Example Posts** | LDC, UDC, Junior Clerk, DEO | Hindi Translator, Technical Asst, Systems Admin |
| **Typing Criteria** | Mandates qualifying WPM speed test | Evaluates trade & subject knowledge |
| **Exam Stage** | Explicit typing exam cutoff | Typing is a practical daily productivity asset |

The IIT Tirupati positions belong to **Type 2 (Computer-Oriented Jobs)**. Typing speed is not tested as an isolated cutoff score, but keyboard mastery directly powers your daily work output and technical documentation.

---

## Selection Process for IIT Tirupati Group B and C Posts

For Group B and Group C positions, the recruitment notification specifies a three-stage selection framework:

1. **Level I – Objective-Based Test:** Evaluates core subject knowledge, aptitude, and general awareness.
2. **Level II – Descriptive Written Test:** Evaluates in-depth domain knowledge, problem-solving, and written communication.
3. **Level III – Skill Test / Trade Test:** Assesses hands-on technical proficiency, software handling, or language translation skills relevant to the role.

> *Note: Specific schedules and testing patterns for each level will be communicated directly to shortlisted candidates via email and the recruitment portal.*

---

## Application Dates & Fee Details

| Detail | Information |
|---|---|
| **Notification Date** | 31 August 2026 |
| **Online Application Start** | 31 August 2026 |
| **Last Date for Submission** | **30 September 2026 (5:00 PM)** |
| **Official Website** | [iittp.ac.in](https://iittp.ac.in) |

### Application Fee Breakdown:

| Category / Group | Application Fee | Processing Fee | Total |
|---|---|---|---|
| **Group A Posts** | ₹500 | ₹200 | ₹700 |
| **Group B Posts** | ₹300 | ₹200 | ₹500 |
| **Group C Posts** | ₹200 | ₹200 | ₹400 |
| **SC / ST / PwBD / Female / ESM** | Exempted (₹0) | ₹200 | ₹200 |

---

## Why Strong Typing Skills Give You a Workplace Advantage

Even when an exam does not require an SSC-style typing test, building muscle memory on the keyboard offers immense professional benefits:

* **High Productivity:** Quickly drafting reports, technical guides, emails, and translations without looking down at keys.
* **Accuracy Under Pressure:** Avoiding typos when writing command-line scripts, database queries, and government correspondence.
* **Bilingual Versatility:** Switching smoothly between English and Hindi typing using tools like [TypeHindi InScript Practice](/practice) and [Interactive Typing Games](/game).

---

## Summary & Recommendations

* **If you are only targeting clerical typing-test posts (LDC/DEO):** This recruitment does not contain dedicated typing-speed test posts.
* **If you have an IT, BCA, B.Tech, or Hindi translation background:** These Group B and Group C positions offer excellent central government pay scales (Pay Level 4 & 6) and career growth at an Institute of National Importance.
* **Preparation Tip:** Continue sharpening your typing speed and keyboard accuracy on [TypeHindi.in](/) to stay prepared for both typing-mandatory exams and high-efficiency computer roles.
`,
    content: `\n# IIT तिरुपति भर्ती 2026: कंप्यूटर, आईटी और टाइपिंग कौशल, योग्यता, वेतन और चयन प्रक्रिया

![IIT Tirupati Recruitment 2026](/images/iit-tirupati-recruitment-2026.jpg)

कंप्यूटर, दस्तावेजीकरण (Documentation), डेटा हैंडलिंग और कार्यालयीन कार्यों से जुड़े सरकारी पद अक्सर उन उम्मीदवारों को आकर्षित करते हैं जो पहले से ही टाइपिंग परीक्षाओं की तैयारी कर रहे हैं। हालांकि, हर कंप्यूटर-आधारित सरकारी पद आधिकारिक रूप से टाइपिंग-टेस्ट पद नहीं होता। **आईआईटी तिरुपति भर्ती 2026 (IIT Tirupati Recruitment 2026)** इसका एक प्रमुख उदाहरण है।

**भारतीय प्रौद्योगिकी संस्थान तिरुपति (IIT Tirupati)** ने गैर-शिक्षण पदों (Non-Teaching Posts) पर सीधी भर्ती की घोषणा की है, जिसमें **हिंदी अनुवादक (Hindi Translator)**, **जूनियर टेक्निकल सुपरिंटेंडेंट (CSE और नेटवर्क सिक्योरिटी)**, **जूनियर तकनीशियन** और अन्य प्रशासनिक व तकनीकी पद शामिल हैं। ऑनलाइन आवेदन की अंतिम तिथि **30 सितंबर 2026 (शाम 5:00 बजे तक)** है।

यदि आप [TypeHindi टाइपिंग प्रैक्टिस](/practice) के माध्यम से अपनी कीबोर्ड गति और दक्षता बढ़ा रहे हैं, तो इन पदों की कार्यप्रणाली को समझना आपके लिए बेहद उपयोगी साबित होगा।

> **महत्वपूर्ण बिंदु:** इस भर्ती में एलडीसी (LDC), क्लर्क या डेटा एंट्री ऑपरेटर (DEO) का कोई समर्पित टाइपिंग पद नहीं है, और न ही इसके लिए अलग से टाइपिंग स्पीड टेस्ट निर्धारित है। यहाँ टाइपिंग कौशल का महत्व दैनिक कंप्यूटर संचालन, सॉफ्टवेयर उपयोग और दस्तावेजीकरण के लिए है।

---

## आईआईटी तिरुपति भर्ती 2026: मुख्य विवरण

| विवरण | जानकारी |
|---|---|
| **संस्थान** | भारतीय प्रौद्योगिकी संस्थान तिरुपति (IIT Tirupati) |
| **भर्ती का प्रकार** | गैर-शिक्षण कर्मचारी सीधी भर्ती (Direct Recruitment) |
| **विज्ञापन संख्या** | IITT/STAFFREC/01/2026 |
| **विज्ञापन तिथि** | 31 अगस्त 2026 |
| **आवेदन मोड** | ऑनलाइन ([iittp.ac.in](https://iittp.ac.in)) |
| **आवेदन की अंतिम तिथि** | 30 सितंबर 2026, सायं 5:00 बजे तक |
| **पद समूह** | ग्रुप A, ग्रुप B और ग्रुप C |
| **चयन प्रक्रिया (Group B/C)** | ऑब्जेक्टिव टेस्ट, वर्णनात्मक लिखित परीक्षा (Descriptive), स्किल/ट्रेड टेस्ट |

---

## क्या यह टाइपिंग जॉब भर्ती है?

सीधा उत्तर है: **प्रत्यक्ष रूप से नहीं**।

इस अधिसूचना में क्लर्क, एलडीसी, या डेटा एंट्री ऑपरेटर जैसे पद शामिल नहीं हैं, और न ही कोई निश्चित WPM स्पीड टेस्ट का उल्लेख है। 

हालांकि, कई पदों में कंप्यूटर सॉफ्टवेयर, हिंदी ऍप्लिकेशन्स, डेटाबेस, और तकनीकी दस्तावेज़ तैयार करने का कार्य शामिल है। इसलिए, जो अभ्यर्थी [हिंदी टाइपिंग पाठ और ट्यूटोरियल](/learn) से कीबोर्ड सीख रहे हैं, उनके लिए यह व्यावहारिक रूप से बेहद उपयोगी है।

---

## प्रमुख पद और कंप्यूटर/टाइपिंग कौशल की प्रासंगिकता

### 1. हिंदी अनुवादक (Hindi Translator - Group B)
* **वेतनमान:** पे लेवल 6 (₹35,400 – ₹1,12,400)
* **अनिवार्य योग्यता:** हिंदी और अंग्रेजी मुख्य विषयों के साथ स्नातक (न्यूनतम 55% अंक) और 2 वर्ष का अनुवाद अनुभव।
* **वांछनीय योग्यता:** कंप्यूटर पर हिंदी अनुप्रयोग सॉफ्टवेयर (Hindi Application Software Packages) चलाने का ज्ञान तथा वैज्ञानिक/तकनीकी अनुवाद का अनुभव।
* **टाइपिंग का महत्व:** यद्यपि टाइपिंग परीक्षा नहीं है, परंतु [हिंदी इनस्क्रिप्ट कीबोर्ड लेआउट](/keyboard-layout) और [मंगल फॉन्ट टाइपिंग](/mangal-font-typing-test) का ज्ञान दैनिक शासकीय अनुवाद व ई-फाइलिंग में बहुत सहायक होता है।

### 2. जूनियर टेक्निकल सुपरिंटेंडेंट – CSE (Group B)
* **वेतनमान:** पे लेवल 6 (₹35,400 – ₹1,12,400)
* **योग्यता:** B.Tech (CSE/IT) / MCA या B.Sc (IT) / BCA के साथ आवश्यक अनुभव।
* **प्रमुख क्षेत्र:** लिनक्स सर्वर, नेटवर्किंग, प्रोग्रामिंग, गिट, वीएस कोड और डेटाबेस प्रशासन।

### 3. जूनियर तकनीशियन – सिस्टम्स एवं CSE (Group C)
* **वेतनमान:** पे लेवल 4 (₹25,500 – ₹81,100)
* **योग्यता:** ITI / डिप्लोमा / BCA / B.Sc / B.Tech और प्रयोगशाला/सॉफ्टवेयर रखरखाव का अनुभव।

---

## कंप्यूटर नौकरियों में टाइपिंग का व्यावहारिक महत्व

सरकारी व संस्थागत डिजिटल कार्यप्रणाली में टाइपिंग दो प्रकार से काम आती है:

1. **टाइपिंग-टेस्ट जॉब्स (LDC / DEO):** जहाँ परीक्षा में निश्चित गति (30-35 WPM) उत्तीर्ण करना अनिवार्य होता है।
2. **कंप्यूटर-उन्मुख तकनीकी पद (IIT तकनीकी पद / अनुवादक):** जहाँ कोडिंग, कमांड-लाइन, ड्राफ्टिंग और अनुवाद में टाइपिंग स्पीड कार्यक्षमता को कई गुना बढ़ा देती है।

अपने रिफ्लेक्स और सटीकता को बेहतर बनाने के लिए आप [टाइपहैंडी इंटरैक्टिव गेम्स](/game) का उपयोग कर सकते हैं।

---

## आवेदन शुल्क एवं महत्वपूर्ण तिथियाँ

* **आवेदन की अंतिम तिथि:** 30 सितंबर 2026 (शाम 5:00 बजे)
* **आवेदन शुल्क:** 
  * ग्रुप A: ₹500 (+ ₹200 प्रोसेसिंग शुल्क)
  * ग्रुप B: ₹300 (+ ₹200 प्रोसेसिंग शुल्क)
  * ग्रुप C: ₹200 (+ ₹200 प्रोसेसिंग शुल्क)
  * आरक्षित वर्ग एवं महिला उम्मीदवार: आवेदन शुल्क से छूट (केवल ₹200 प्रोसेसिंग शुल्क देय)।

---

## निष्कर्ष (Key Takeaway)

आईआईटी तिरुपति भर्ती 2026 पारंपरिक एलडीसी टाइपिंग टेस्ट वाली भर्ती नहीं है, बल्कि यह उच्च तकनीकी और अनुवाद कौशल वाले पदों के लिए एक शानदार अवसर है। यदि आपके पास संबंधित योग्यता है, तो 30 सितंबर 2026 से पहले अवश्य आवेदन करें और अपनी कंप्यूटर व टाइपिंग क्षमता को [TypeHindi.in](/) पर लगातार निखारते रहें।
`
  },
  {
    slug: "ssc-cgl-typing-test-preparation-guide",
    titleEn: "SSC CGL Typing Test Preparation: Complete Guide to DEST, Speed, Accuracy and Practice Strategy",
    excerptEn: "A complete guide to the SSC CGL Data Entry Speed Test (DEST), covering typing speed, accuracy, rules, and a 30-day practice strategy to qualify.",
    dateEn: "30 August, 2026",
    title: "SSC CGL Typing Test Preparation: Complete Guide to DEST, Speed, Accuracy and Practice Strategy",
    excerpt: "A complete guide to the SSC CGL Data Entry Speed Test (DEST), covering typing speed, accuracy, rules, and a 30-day practice strategy to qualify.",
    date: "30 अगस्त, 2026",
    author: "TypeHindi Team",
    category: "Exam Guide",
    contentEn: `\n# SSC CGL Typing Test Preparation: Complete Guide to DEST, Speed, Accuracy and Practice Strategy


![SSC CGL Aspirant Typing Practice](/images/ssc-cgl-typing-hero.jpg)



The SSC Combined Graduate Level (CGL) examination is one of India's most competitive recruitment examinations for Group B and Group C government posts. Candidates preparing for SSC CGL usually devote most of their attention to Mathematics, Reasoning, English and General Awareness. However, many candidates underestimate an important qualifying component of Tier-II: the Data Entry Speed Test, commonly known as DEST.



The SSC CGL [typing test](/mangal-font-typing-test) is different from the traditional typing tests conducted for some other SSC examinations. Candidates are required to demonstrate their ability to enter text accurately on a computer within a specified time. For candidates targeting posts where higher DEST standards apply, proper typing preparation becomes even more important.



According to the SSC CGL 2026 notification, DEST is conducted for 15 minutes in Session-II of Tier-II. Candidates are required to type a passage containing approximately 2,000 key depressions. DEST is mandatory for all posts and is qualifying in nature, although SSC may prescribe higher qualifying standards for certain posts.



This article provides a detailed guide to SSC CGL [typing test](/mangal-font-typing-test)](/mangal-font-typing-test) preparation, including how DEST works, how to improve typing speed and accuracy, common mistakes, daily [[practice](/practice) routines and a structured preparation strategy.



## What Is the SSC CGL [Typing Test](/mangal-font-typing-test)?



The typing test in SSC CGL is officially called the **Data Entry Speed Test (DEST)**.



Unlike a conventional typing examination where candidates may simply be asked to achieve a particular words-per-minute score, SSC CGL DEST focuses on entering the provided passage on a computer according to the Commission's prescribed evaluation procedure.



The test forms part of SSC CGL Tier-II.



Under the current SSC CGL scheme, Session-II includes the Data Entry Speed Test and lasts for 15 minutes. The test involves a passage of approximately 2,000 key depressions.



Therefore, SSC CGL aspirants should not ignore typing preparation simply because DEST is qualifying in nature.



Failing to meet the qualifying standard can affect eligibility for the relevant stage of selection.



## Is SSC CGL DEST Mandatory?



Yes. According to the SSC CGL notification, DEST is mandatory for all posts, although it is qualifying in nature.



This means candidates should treat the typing test seriously.



A qualifying test does not necessarily mean that preparation can be ignored. Candidates must still demonstrate the required level of data-entry ability.



SSC may also set higher qualifying standards for certain posts. The notification specifically mentions posts such as Tax Assistant in CBIC, Tax Assistant in CBDT and UDC/SSA in the Central Bureau of Narcotics, along with certain posts where higher standards of computer proficiency are prescribed.



Therefore, candidates should always check the latest SSC notification and the specific requirements applicable to their preferred posts.



## How Does SSC CGL DEST Take Place?



Candidates should understand the examination format before beginning preparation.



During DEST, candidates are required to enter the provided passage on the computer.



The important elements of the current format include:



* DEST is conducted in Tier-II.

* It is conducted during Session-II.

* The duration is 15 minutes.

* The passage contains approximately 2,000 key depressions.

* DEST is mandatory for all posts.

* The test is qualifying in nature.

* Higher qualifying standards may apply to certain posts.



Because the test duration is limited, candidates must develop both speed and accuracy.



Typing extremely fast while making frequent mistakes is not an effective strategy. Similarly, typing very accurately but extremely slowly may create difficulty in completing sufficient text within the available time.



The goal should be controlled and accurate typing at a comfortable speed.



# Why SSC CGL Aspirants Should Start Typing [Practice](/practice) Early



One of the biggest mistakes candidates make is postponing typing preparation until after completing their written-exam preparation.



Typing is a practical skill.



It cannot always be developed effectively in a few days.



A candidate who practices regularly for several months will generally develop:



* Better keyboard familiarity

* Stronger finger memory

* Improved typing rhythm

* Higher speed

* Better accuracy

* Greater confidence during timed tests



Starting early also reduces pressure.



Instead of suddenly trying to increase typing performance shortly before Tier-II, candidates can improve gradually while continuing their regular SSC CGL preparation.



Even 20 to 30 minutes of regular typing practice can produce significant improvement over time.



# Understanding Typing Speed and Accuracy



Typing performance depends mainly on two factors:



## Typing Speed



Typing speed refers to how quickly a candidate can enter text.



Candidates often measure their performance in words per minute, commonly known as WPM.



However, SSC CGL DEST should be prepared according to the official examination requirements rather than relying only on a general WPM score.



Different websites may calculate typing speed differently.



Therefore, candidates should focus on:



* Continuous typing ability

* Accuracy

* Completing long passages

* Typing under a time limit

* Maintaining concentration for the entire test



## Typing Accuracy



Accuracy is equally important.



A candidate may type quickly but repeatedly make mistakes in:



* Spelling

* Punctuation

* Capital letters

* Numbers

* Spaces

* Word order



Poor accuracy can negatively affect overall performance.



Therefore, beginners should initially focus more on accuracy than maximum speed.



Once proper finger placement and keyboard familiarity improve, speed usually increases naturally.



# Speed vs Accuracy: What Should You Prioritize?



The best answer is both, but the order matters.



### Beginners should focus first on accuracy.



Trying to type extremely fast before learning correct keyboard technique often creates bad habits.



For example, candidates may:



* Look constantly at the keyboard

* Use only two fingers

* Press incorrect keys repeatedly

* Depend excessively on Backspace

* Lose concentration while typing



Instead, candidates should initially type slowly and correctly.



Once they consistently achieve good accuracy, they can gradually increase speed.



A practical progression can be:



**Stage 1: Learn the keyboard**



↓



**Stage 2: Improve accuracy**



↓



**Stage 3: Develop typing rhythm**



↓



**Stage 4: Increase speed**



↓



**Stage 5: Practice full 15-minute tests**



This approach is generally more effective than immediately chasing a high WPM score.



# Learn Touch Typing for SSC CGL



Touch typing means typing without continuously looking at the keyboard.



This is one of the most useful skills for candidates preparing for DEST.



When candidates constantly look down at the keyboard, they lose time moving their eyes between:



* The passage

* The keyboard

* The computer screen



Touch typing reduces this unnecessary movement.



Initially, learning touch typing can feel slow and uncomfortable.



Candidates may experience a temporary decrease in speed.



However, with consistent practice, muscle memory develops.



Eventually, the fingers begin to remember the location of commonly used keys.



## Benefits of Touch Typing



Touch typing can help candidates:



* Type faster

* Maintain concentration

* Reduce unnecessary eye movement

* Improve rhythm

* Type longer passages comfortably

* Perform better under examination pressure



Candidates should therefore try to gradually reduce their dependence on looking at the keyboard.



# Proper Typing Posture



Typing preparation is not only about finger speed.



Proper posture can significantly affect comfort during longer typing sessions.



Candidates should try to:



* Sit comfortably with a straight posture

* Keep both feet supported

* Position the keyboard comfortably

* Keep shoulders relaxed

* Avoid excessive wrist strain

* Position the monitor at a comfortable viewing level



Do not press keys with excessive force.



Typing should be smooth and controlled.



Candidates preparing for 15-minute continuous typing should develop the ability to remain comfortable throughout the test.



# How to Practice for SSC CGL DEST



The best preparation method is to gradually move from basic typing exercises to realistic timed tests.



## Step 1: Learn Keyboard Familiarity



Beginners should first become comfortable with:



* Alphabet keys

* Spacebar

* Shift key

* Enter key

* Backspace

* Full stop

* Comma

* Apostrophe

* Numbers



Do not immediately begin with difficult timed tests.



First learn where the keys are located.



## Step 2: Practice Basic Words



Practice common English words repeatedly.



Examples include:



* Government

* Department

* Candidate

* Examination

* Administration

* Information

* Development

* Employment

* Recruitment



Government-related passages often contain formal vocabulary, so candidates should become comfortable typing longer words.



## Step 3: Practice Full Sentences



After becoming comfortable with individual words, begin typing complete sentences.



Focus on:



* Capital letters

* Spaces

* Full stops

* Commas

* Sentence structure



## Step 4: Practice Paragraphs



Move to longer paragraphs.



This improves:



* Concentration

* Typing rhythm

* Endurance

* Accuracy



## Step 5: Take Timed Tests



Finally, begin taking full-length practice tests.



Candidates preparing for SSC CGL should regularly practice continuous typing sessions similar to the 15-minute DEST duration prescribed in the current notification.



# The Best Daily Practice Routine



A structured daily practice session can be more useful than random typing.



Here is a practical routine.



## Five Minutes: Warm-Up



Start with simple words and sentences.



Do not immediately begin at maximum speed.



The purpose is to:



* Relax your fingers

* Improve rhythm

* Prepare your hands



## Ten Minutes: Accuracy Practice



Type carefully.



Focus on avoiding mistakes.



Pay attention to:



* Incorrect letters

* Missing spaces

* Double spaces

* Punctuation mistakes

* Capitalization errors



## Ten Minutes: Speed Practice



Take a timed typing test.



Try to maintain a comfortable rhythm.



Do not rush unnecessarily.



## Ten Minutes: Error Analysis



Review your mistakes.



Ask yourself:



* Which letters do I frequently press incorrectly?

* Do I struggle with punctuation?

* Do I make mistakes with capital letters?

* Do I lose concentration after several minutes?

* Do I repeatedly use the wrong finger?



## Fifteen Minutes: Full DEST-Style Practice



Take one continuous typing test.



Practice without:



* Pausing

* Checking your phone

* Taking unnecessary breaks

* Restarting after mistakes



This develops examination stamina.



# Common Typing Mistakes SSC CGL Aspirants Should Avoid



## Looking at the Keyboard Constantly



This slows down typing.



Try to gradually reduce keyboard dependence.



## Typing Too Fast



Speed without control often leads to mistakes.



Maintain a comfortable rhythm.



## Using Only Two Fingers



Two-finger typing may work for casual computer use, but it can limit long-term improvement.



Learning better finger positioning can significantly improve typing efficiency.



## Ignoring Punctuation



Many candidates practice only simple words.



During actual typing, punctuation and capitalization can interrupt rhythm.



Practice them regularly.



## Practicing Only Short Tests



Typing for two minutes is very different from typing continuously for fifteen minutes.



SSC CGL candidates should regularly practice longer sessions.



## Panicking After One Mistake



One mistake does not mean the entire test is ruined.



Continue calmly.



Candidates often make more mistakes after becoming nervous about an earlier error.



# How to Improve Typing Speed



Typing speed improves gradually.



There is no reliable shortcut that instantly transforms a beginner into a fast typist.



However, these methods can help.



## Practice Every Day



Consistency is more important than occasional long practice sessions.



For example:



**30 minutes daily**



can be more effective than:



**Three hours once a week**



Regular repetition builds muscle memory.



## Practice Difficult Words



Identify words that slow you down.



For SSC preparation, practice longer formal words such as:



* Administration

* Government

* Examination

* Recruitment

* Qualification

* Organization

* Information

* Department

* Development

* Communication



## Improve Weak Keys



If you repeatedly make mistakes with particular letters, practice them separately.



For example, if certain combinations cause difficulty, create short exercises containing those combinations.



## Maintain Rhythm



Smooth typing is generally better than repeatedly accelerating and stopping.



Try to maintain a steady rhythm.



# How to Improve Accuracy



Accuracy requires deliberate practice.



Candidates can improve accuracy by:



* Typing slightly slower initially

* Reading carefully

* Maintaining concentration

* Practicing difficult words

* Reviewing mistakes

* Using proper finger placement



Do not simply repeat typing tests without analysing your errors.



Suppose you repeatedly type a particular word incorrectly.



Instead of hoping the mistake disappears automatically, practice that word repeatedly.



Targeted practice produces faster improvement.



# Practice Different Types of Passages



Do not practice only simple typing content.



SSC CGL aspirants should become comfortable with different styles of English.



Practice passages containing:



* Government-related vocabulary

* Formal English

* Long words

* Numbers

* Dates

* Punctuation

* Capital letters



This prevents candidates from becoming dependent on only one type of typing material.



# Build Typing Endurance



DEST requires continuous typing.



A candidate who can type quickly for two minutes may still struggle to maintain concentration for fifteen minutes.



Therefore, typing endurance is important.



Gradually increase practice duration.



For example:



**Week 1:** 5-minute tests



**Week 2:** 8-minute tests



**Week 3:** 10-minute tests



**Week 4:** 15-minute tests



Once comfortable, regularly practice full-duration tests.



# A 30-Day SSC CGL Typing Preparation Plan



## Days 1 to 7: Build the Foundation



Focus on:



* Keyboard familiarity

* Proper finger positioning

* Accuracy

* Basic English words



Do not worry excessively about speed.



## Days 8 to 14: Develop Speed



Begin:



* Timed typing

* Longer words

* Sentences

* Punctuation practice



Track your improvement.



## Days 15 to 21: Improve Consistency



Practice:



* Longer passages

* Numbers

* Capital letters

* Difficult vocabulary



Take regular timed tests.



## Days 22 to 30: DEST-Focused Preparation



Practice full 15-minute typing sessions.



Analyse every test.



Focus on your weaknesses.



By the final week, your goal should be consistency rather than experimenting with completely new typing techniques.



# How to Track Your Progress



Maintain a simple typing progress record.



You can write down:



| Day    |  Typing Speed |      Accuracy | Major Mistakes           |

| ------ | ------------: | ------------: | ------------------------ |

| Day 1  | Record result | Record result | Identify weakness        |

| Day 7  | Record result | Record result | Compare improvement      |

| Day 15 | Record result | Record result | Identify repeated errors |

| Day 30 | Record result | Record result | Evaluate readiness       |



Tracking performance helps candidates understand whether they are improving.



Do not judge your preparation based on a single test.



Look at your overall progress over several weeks.



# What to Do During the Actual SSC CGL DEST



During the examination:



## Read Instructions Carefully



Do not assume that every typing test follows exactly the same procedure.



Follow the instructions provided for the examination.



SSC states that detailed instructions regarding the skill test may be provided by the relevant Regional Offices, and the Commission determines the manner in which DEST is conducted.



## Stay Calm



Nervousness can affect typing rhythm.



Take a moment to settle before beginning.



## Focus on Accuracy



Do not immediately type at maximum speed.



Establish a comfortable rhythm.



## Do Not Panic After Mistakes



Continue typing.



Avoid losing concentration because of a single error.



## Manage the Entire Fifteen Minutes



The goal is consistent performance throughout the test.



Do not exhaust yourself during the first few minutes by typing uncontrollably fast.



# Final Tips for SSC CGL Typing Test Preparation



1. Start typing preparation early.

2. Understand the official DEST format.

3. Practice regularly.

4. Focus on accuracy before maximum speed.

5. Learn touch typing gradually.

6. Practice punctuation and capitalization.

7. Take continuous 15-minute practice tests.

8. Analyse repeated mistakes.

9. Practice formal English passages.

10. Maintain proper posture.

11. Do not panic during the examination.

12. Always check the latest SSC notification for official requirements.



# Conclusion



The SSC CGL Data Entry Speed Test may be qualifying in nature, but candidates should not underestimate its importance. According to the current SSC CGL notification, DEST is mandatory for all posts and is conducted for 15 minutes using a passage of approximately 2,000 key depressions. Higher qualifying standards may apply to certain posts.



The best way to prepare is through regular and structured practice.



Start by learning the keyboard properly. Focus on accuracy. Gradually improve speed. Practice longer passages and eventually take full 15-minute mock typing tests.



Remember that typing is a practical skill.



You do not need extraordinary speed on your first day. Consistent practice builds muscle memory, confidence, accuracy and endurance over time.



With proper preparation, regular practice and a calm approach during the examination, SSC CGL aspirants can become much more confident about facing DEST.   \n`,
    content: `\n# SSC CGL Typing Test Preparation: Complete Guide to DEST, Speed, Accuracy and Practice Strategy


![SSC CGL Aspirant Typing Practice](/images/ssc-cgl-typing-hero.jpg)



The SSC Combined Graduate Level (CGL) examination is one of India's most competitive recruitment examinations for Group B and Group C government posts. Candidates preparing for SSC CGL usually devote most of their attention to Mathematics, Reasoning, English and General Awareness. However, many candidates underestimate an important qualifying component of Tier-II: the Data Entry Speed Test, commonly known as DEST.



The SSC CGL [typing test](/mangal-font-typing-test) is different from the traditional typing tests conducted for some other SSC examinations. Candidates are required to demonstrate their ability to enter text accurately on a computer within a specified time. For candidates targeting posts where higher DEST standards apply, proper typing preparation becomes even more important.



According to the SSC CGL 2026 notification, DEST is conducted for 15 minutes in Session-II of Tier-II. Candidates are required to type a passage containing approximately 2,000 key depressions. DEST is mandatory for all posts and is qualifying in nature, although SSC may prescribe higher qualifying standards for certain posts.



This article provides a detailed guide to SSC CGL [typing test](/mangal-font-typing-test)](/mangal-font-typing-test) preparation, including how DEST works, how to improve typing speed and accuracy, common mistakes, daily [[practice](/practice) routines and a structured preparation strategy.



## What Is the SSC CGL [Typing Test](/mangal-font-typing-test)?



The typing test in SSC CGL is officially called the **Data Entry Speed Test (DEST)**.



Unlike a conventional typing examination where candidates may simply be asked to achieve a particular words-per-minute score, SSC CGL DEST focuses on entering the provided passage on a computer according to the Commission's prescribed evaluation procedure.



The test forms part of SSC CGL Tier-II.



Under the current SSC CGL scheme, Session-II includes the Data Entry Speed Test and lasts for 15 minutes. The test involves a passage of approximately 2,000 key depressions.



Therefore, SSC CGL aspirants should not ignore typing preparation simply because DEST is qualifying in nature.



Failing to meet the qualifying standard can affect eligibility for the relevant stage of selection.



## Is SSC CGL DEST Mandatory?



Yes. According to the SSC CGL notification, DEST is mandatory for all posts, although it is qualifying in nature.



This means candidates should treat the typing test seriously.



A qualifying test does not necessarily mean that preparation can be ignored. Candidates must still demonstrate the required level of data-entry ability.



SSC may also set higher qualifying standards for certain posts. The notification specifically mentions posts such as Tax Assistant in CBIC, Tax Assistant in CBDT and UDC/SSA in the Central Bureau of Narcotics, along with certain posts where higher standards of computer proficiency are prescribed.



Therefore, candidates should always check the latest SSC notification and the specific requirements applicable to their preferred posts.



## How Does SSC CGL DEST Take Place?



Candidates should understand the examination format before beginning preparation.



During DEST, candidates are required to enter the provided passage on the computer.



The important elements of the current format include:



* DEST is conducted in Tier-II.

* It is conducted during Session-II.

* The duration is 15 minutes.

* The passage contains approximately 2,000 key depressions.

* DEST is mandatory for all posts.

* The test is qualifying in nature.

* Higher qualifying standards may apply to certain posts.



Because the test duration is limited, candidates must develop both speed and accuracy.



Typing extremely fast while making frequent mistakes is not an effective strategy. Similarly, typing very accurately but extremely slowly may create difficulty in completing sufficient text within the available time.



The goal should be controlled and accurate typing at a comfortable speed.



# Why SSC CGL Aspirants Should Start Typing [Practice](/practice) Early



One of the biggest mistakes candidates make is postponing typing preparation until after completing their written-exam preparation.



Typing is a practical skill.



It cannot always be developed effectively in a few days.



A candidate who practices regularly for several months will generally develop:



* Better keyboard familiarity

* Stronger finger memory

* Improved typing rhythm

* Higher speed

* Better accuracy

* Greater confidence during timed tests



Starting early also reduces pressure.



Instead of suddenly trying to increase typing performance shortly before Tier-II, candidates can improve gradually while continuing their regular SSC CGL preparation.



Even 20 to 30 minutes of regular typing practice can produce significant improvement over time.



# Understanding Typing Speed and Accuracy



Typing performance depends mainly on two factors:



## Typing Speed



Typing speed refers to how quickly a candidate can enter text.



Candidates often measure their performance in words per minute, commonly known as WPM.



However, SSC CGL DEST should be prepared according to the official examination requirements rather than relying only on a general WPM score.



Different websites may calculate typing speed differently.



Therefore, candidates should focus on:



* Continuous typing ability

* Accuracy

* Completing long passages

* Typing under a time limit

* Maintaining concentration for the entire test



## Typing Accuracy



Accuracy is equally important.



A candidate may type quickly but repeatedly make mistakes in:



* Spelling

* Punctuation

* Capital letters

* Numbers

* Spaces

* Word order



Poor accuracy can negatively affect overall performance.



Therefore, beginners should initially focus more on accuracy than maximum speed.



Once proper finger placement and keyboard familiarity improve, speed usually increases naturally.



# Speed vs Accuracy: What Should You Prioritize?



The best answer is both, but the order matters.



### Beginners should focus first on accuracy.



Trying to type extremely fast before learning correct keyboard technique often creates bad habits.



For example, candidates may:



* Look constantly at the keyboard

* Use only two fingers

* Press incorrect keys repeatedly

* Depend excessively on Backspace

* Lose concentration while typing



Instead, candidates should initially type slowly and correctly.



Once they consistently achieve good accuracy, they can gradually increase speed.



A practical progression can be:



**Stage 1: Learn the keyboard**



↓



**Stage 2: Improve accuracy**



↓



**Stage 3: Develop typing rhythm**



↓



**Stage 4: Increase speed**



↓



**Stage 5: Practice full 15-minute tests**



This approach is generally more effective than immediately chasing a high WPM score.



# Learn Touch Typing for SSC CGL



Touch typing means typing without continuously looking at the keyboard.



This is one of the most useful skills for candidates preparing for DEST.



When candidates constantly look down at the keyboard, they lose time moving their eyes between:



* The passage

* The keyboard

* The computer screen



Touch typing reduces this unnecessary movement.



Initially, learning touch typing can feel slow and uncomfortable.



Candidates may experience a temporary decrease in speed.



However, with consistent practice, muscle memory develops.



Eventually, the fingers begin to remember the location of commonly used keys.



## Benefits of Touch Typing



Touch typing can help candidates:



* Type faster

* Maintain concentration

* Reduce unnecessary eye movement

* Improve rhythm

* Type longer passages comfortably

* Perform better under examination pressure



Candidates should therefore try to gradually reduce their dependence on looking at the keyboard.



# Proper Typing Posture



Typing preparation is not only about finger speed.



Proper posture can significantly affect comfort during longer typing sessions.



Candidates should try to:



* Sit comfortably with a straight posture

* Keep both feet supported

* Position the keyboard comfortably

* Keep shoulders relaxed

* Avoid excessive wrist strain

* Position the monitor at a comfortable viewing level



Do not press keys with excessive force.



Typing should be smooth and controlled.



Candidates preparing for 15-minute continuous typing should develop the ability to remain comfortable throughout the test.



# How to Practice for SSC CGL DEST



The best preparation method is to gradually move from basic typing exercises to realistic timed tests.



## Step 1: Learn Keyboard Familiarity



Beginners should first become comfortable with:



* Alphabet keys

* Spacebar

* Shift key

* Enter key

* Backspace

* Full stop

* Comma

* Apostrophe

* Numbers



Do not immediately begin with difficult timed tests.



First learn where the keys are located.



## Step 2: Practice Basic Words



Practice common English words repeatedly.



Examples include:



* Government

* Department

* Candidate

* Examination

* Administration

* Information

* Development

* Employment

* Recruitment



Government-related passages often contain formal vocabulary, so candidates should become comfortable typing longer words.



## Step 3: Practice Full Sentences



After becoming comfortable with individual words, begin typing complete sentences.



Focus on:



* Capital letters

* Spaces

* Full stops

* Commas

* Sentence structure



## Step 4: Practice Paragraphs



Move to longer paragraphs.



This improves:



* Concentration

* Typing rhythm

* Endurance

* Accuracy



## Step 5: Take Timed Tests



Finally, begin taking full-length practice tests.



Candidates preparing for SSC CGL should regularly practice continuous typing sessions similar to the 15-minute DEST duration prescribed in the current notification.



# The Best Daily Practice Routine



A structured daily practice session can be more useful than random typing.



Here is a practical routine.



## Five Minutes: Warm-Up



Start with simple words and sentences.



Do not immediately begin at maximum speed.



The purpose is to:



* Relax your fingers

* Improve rhythm

* Prepare your hands



## Ten Minutes: Accuracy Practice



Type carefully.



Focus on avoiding mistakes.



Pay attention to:



* Incorrect letters

* Missing spaces

* Double spaces

* Punctuation mistakes

* Capitalization errors



## Ten Minutes: Speed Practice



Take a timed typing test.



Try to maintain a comfortable rhythm.



Do not rush unnecessarily.



## Ten Minutes: Error Analysis



Review your mistakes.



Ask yourself:



* Which letters do I frequently press incorrectly?

* Do I struggle with punctuation?

* Do I make mistakes with capital letters?

* Do I lose concentration after several minutes?

* Do I repeatedly use the wrong finger?



## Fifteen Minutes: Full DEST-Style Practice



Take one continuous typing test.



Practice without:



* Pausing

* Checking your phone

* Taking unnecessary breaks

* Restarting after mistakes



This develops examination stamina.



# Common Typing Mistakes SSC CGL Aspirants Should Avoid



## Looking at the Keyboard Constantly



This slows down typing.



Try to gradually reduce keyboard dependence.



## Typing Too Fast



Speed without control often leads to mistakes.



Maintain a comfortable rhythm.



## Using Only Two Fingers



Two-finger typing may work for casual computer use, but it can limit long-term improvement.



Learning better finger positioning can significantly improve typing efficiency.



## Ignoring Punctuation



Many candidates practice only simple words.



During actual typing, punctuation and capitalization can interrupt rhythm.



Practice them regularly.



## Practicing Only Short Tests



Typing for two minutes is very different from typing continuously for fifteen minutes.



SSC CGL candidates should regularly practice longer sessions.



## Panicking After One Mistake



One mistake does not mean the entire test is ruined.



Continue calmly.



Candidates often make more mistakes after becoming nervous about an earlier error.



# How to Improve Typing Speed



Typing speed improves gradually.



There is no reliable shortcut that instantly transforms a beginner into a fast typist.



However, these methods can help.



## Practice Every Day



Consistency is more important than occasional long practice sessions.



For example:



**30 minutes daily**



can be more effective than:



**Three hours once a week**



Regular repetition builds muscle memory.



## Practice Difficult Words



Identify words that slow you down.



For SSC preparation, practice longer formal words such as:



* Administration

* Government

* Examination

* Recruitment

* Qualification

* Organization

* Information

* Department

* Development

* Communication



## Improve Weak Keys



If you repeatedly make mistakes with particular letters, practice them separately.



For example, if certain combinations cause difficulty, create short exercises containing those combinations.



## Maintain Rhythm



Smooth typing is generally better than repeatedly accelerating and stopping.



Try to maintain a steady rhythm.



# How to Improve Accuracy



Accuracy requires deliberate practice.



Candidates can improve accuracy by:



* Typing slightly slower initially

* Reading carefully

* Maintaining concentration

* Practicing difficult words

* Reviewing mistakes

* Using proper finger placement



Do not simply repeat typing tests without analysing your errors.



Suppose you repeatedly type a particular word incorrectly.



Instead of hoping the mistake disappears automatically, practice that word repeatedly.



Targeted practice produces faster improvement.



# Practice Different Types of Passages



Do not practice only simple typing content.



SSC CGL aspirants should become comfortable with different styles of English.



Practice passages containing:



* Government-related vocabulary

* Formal English

* Long words

* Numbers

* Dates

* Punctuation

* Capital letters



This prevents candidates from becoming dependent on only one type of typing material.



# Build Typing Endurance



DEST requires continuous typing.



A candidate who can type quickly for two minutes may still struggle to maintain concentration for fifteen minutes.



Therefore, typing endurance is important.



Gradually increase practice duration.



For example:



**Week 1:** 5-minute tests



**Week 2:** 8-minute tests



**Week 3:** 10-minute tests



**Week 4:** 15-minute tests



Once comfortable, regularly practice full-duration tests.



# A 30-Day SSC CGL Typing Preparation Plan



## Days 1 to 7: Build the Foundation



Focus on:



* Keyboard familiarity

* Proper finger positioning

* Accuracy

* Basic English words



Do not worry excessively about speed.



## Days 8 to 14: Develop Speed



Begin:



* Timed typing

* Longer words

* Sentences

* Punctuation practice



Track your improvement.



## Days 15 to 21: Improve Consistency



Practice:



* Longer passages

* Numbers

* Capital letters

* Difficult vocabulary



Take regular timed tests.



## Days 22 to 30: DEST-Focused Preparation



Practice full 15-minute typing sessions.



Analyse every test.



Focus on your weaknesses.



By the final week, your goal should be consistency rather than experimenting with completely new typing techniques.



# How to Track Your Progress



Maintain a simple typing progress record.



You can write down:



| Day    |  Typing Speed |      Accuracy | Major Mistakes           |

| ------ | ------------: | ------------: | ------------------------ |

| Day 1  | Record result | Record result | Identify weakness        |

| Day 7  | Record result | Record result | Compare improvement      |

| Day 15 | Record result | Record result | Identify repeated errors |

| Day 30 | Record result | Record result | Evaluate readiness       |



Tracking performance helps candidates understand whether they are improving.



Do not judge your preparation based on a single test.



Look at your overall progress over several weeks.



# What to Do During the Actual SSC CGL DEST



During the examination:



## Read Instructions Carefully



Do not assume that every typing test follows exactly the same procedure.



Follow the instructions provided for the examination.



SSC states that detailed instructions regarding the skill test may be provided by the relevant Regional Offices, and the Commission determines the manner in which DEST is conducted.



## Stay Calm



Nervousness can affect typing rhythm.



Take a moment to settle before beginning.



## Focus on Accuracy



Do not immediately type at maximum speed.



Establish a comfortable rhythm.



## Do Not Panic After Mistakes



Continue typing.



Avoid losing concentration because of a single error.



## Manage the Entire Fifteen Minutes



The goal is consistent performance throughout the test.



Do not exhaust yourself during the first few minutes by typing uncontrollably fast.



# Final Tips for SSC CGL Typing Test Preparation



1. Start typing preparation early.

2. Understand the official DEST format.

3. Practice regularly.

4. Focus on accuracy before maximum speed.

5. Learn touch typing gradually.

6. Practice punctuation and capitalization.

7. Take continuous 15-minute practice tests.

8. Analyse repeated mistakes.

9. Practice formal English passages.

10. Maintain proper posture.

11. Do not panic during the examination.

12. Always check the latest SSC notification for official requirements.



# Conclusion



The SSC CGL Data Entry Speed Test may be qualifying in nature, but candidates should not underestimate its importance. According to the current SSC CGL notification, DEST is mandatory for all posts and is conducted for 15 minutes using a passage of approximately 2,000 key depressions. Higher qualifying standards may apply to certain posts.



The best way to prepare is through regular and structured practice.



Start by learning the keyboard properly. Focus on accuracy. Gradually improve speed. Practice longer passages and eventually take full 15-minute mock typing tests.



Remember that typing is a practical skill.



You do not need extraordinary speed on your first day. Consistent practice builds muscle memory, confidence, accuracy and endurance over time.



With proper preparation, regular practice and a calm approach during the examination, SSC CGL aspirants can become much more confident about facing DEST.   \n`
  },
  {
    slug: "santhali-bhasha-ka-itihas-aur-kshetra",
    titleEn: "Where did the Santhali language originate and where is it spoken? – Complete Guide",
    excerptEn: "Santhali is one of the oldest tribal languages in India. Learn about its origin, who created the Ol Chiki script, and the regions in India and the world where this language is spoken.",
    dateEn: "June 15, 2026",
    title: "संथाली भाषा का निर्माण कहाँ हुआ था और यह भाषा कहाँ बोली जाती है? – पूरी जानकारी",
    excerpt: "संथाली भाषा भारत की प्राचीनतम आदिवासी भाषाओं में से एक है। जानें इसका उद्गम कहाँ हुआ, ओल चिकी लिपि किसने बनाई, और यह भाषा भारत व विश्व के किन क्षेत्रों में बोली जाती है।",
    date: "15 जून, 2026",
    author: "TypeHindi Team",
    category: "Basics",
    contentEn: `
![Santhali Language – India's Rich Tribal Heritage](/images/santhali-language-hero.png)

India is a country of diversities, and hundreds of languages and dialects are spoken here. Among these, one extremely ancient and rich language is **Santhali (Santhali / Santali)**. Santhali is the mother tongue of tribal communities in India, especially the **Santhal (Santal)** tribe. This language is spoken not only in India but also in Bangladesh and Nepal. In 2003, it was included in the **Eighth Schedule** of the Indian Constitution, giving it the status of an **official national language**. In this detailed article, we will find out **where Santhali language originated** and **where it is spoken**.

## Origin and History of Santhali Language

### How old is the Santhali language?

Santhali belongs to the **Munda** branch of the **Austro-Asiatic** language family. Linguists believe that Munda languages are among the **oldest languages** of the Indian subcontinent, which were probably spoken here **even before the arrival of Aryans and Dravidians**. This means the roots of Santhali are **thousands of years old**.

Santhali does not have a single fixed "origin place," as it is not a language created by a person or institution but has **developed naturally**. However, linguists connect its region of origin to the **Chota Nagpur Plateau** and surrounding areas. This region is spread across modern-day **Jharkhand, West Bengal, and Odisha**.

### Santhal Tribe – Carrier of the Language

The Santhal tribe is the **third largest tribal community** in India. Their population is estimated to be between **7 million and 10 million**. Santhal people have historically relied on agriculture, forest produce collection, and hunting. Their language, culture, and traditions have been passed down orally (Oral Tradition) from generation to generation.

Historically, Santhals lived in the **Rajmahal Hills of Bihar** and the dense forests of the **Chota Nagpur Plateau**. In the 18th and 19th centuries during British rule, many Santhal families settled in different parts of Assam, Bengal, and Odisha in search of work. This is why Santhali is spoken in such a wide geographical area today.

### Santhal Rebellion (1855-56) – Struggle for Language and Identity

The **Santhal Hul**, also known as the Santhal Rebellion, took place in 1855-56 against the oppression of British rule, landlords, and moneylenders. The rebellion was led by **Sidhu and Kanhu Murmu**. This rebellion was not only against economic exploitation but also carried the spirit of saving the Santhali language, culture, and identity. Even today, this rebellion remains a symbol of pride and resistance for the Santhal community.

## Ol Chiki Script – Santhali's Own Script

![Ol Chiki Script – Santhali's Indigenous Script](/images/ol-chiki-script-chart.png)

The most revolutionary event in the history of Santhali was the creation of the **Ol Chiki** script. Before this, Santhali did not have its own script. People used **Devanagari, Bengali, Odia, or Roman** scripts, which could not correctly represent the specific sounds of Santhali.

### Pandit Raghunath Murmu – Founder of Ol Chiki

**Pandit Raghunath Murmu (1905-1982)** invented the Ol Chiki script in 1925. He belonged to the Mayurbhanj district of Odisha. He realized that an **independent and scientific script** was needed to express the unique sounds of Santhali (such as glottal stops and nasal sounds).

Key features of Ol Chiki script:
- It has **30 letters** – 6 vowels and 24 consonants.
- It is written from **Left to Right**.
- The shape of each letter is **inspired by nature** – like mountains, rivers, birds, etc.
- This script is completely **phonetic**, meaning what is spoken is written.
- In 2005, Ol Chiki was included in **Unicode** (Unicode Block: U+1C50 to U+1C7F).

## Where is Santhali Spoken?

![Map of Santhali Speaking Regions](/images/santhali-speaking-regions.png)

The geographical spread of Santhali is very wide. It is primarily spoken in several states of **Eastern and Central India**, but speakers are also found in Bangladesh and Nepal.

### Major Indian States Where Santhali is Spoken:

**1. Jharkhand:**
Jharkhand is the **heartland** of Santhali. It is most widely spoken in the Santhal Pargana division – which includes Dumka, Deoghar, Godda, Sahibganj, Pakur, and Jamtara districts. The Jharkhand government has declared Santhali as one of the **official languages of the state**.

**2. West Bengal:**
In West Bengal, especially in **Bankura, Purulia, Medinipur, Birbhum, and Malda** districts, there is a large population of Santhali speakers. It is the main colloquial language in areas bordering the Rajmahal Hills.

**3. Odisha:**
A large Santhal population resides in the **Mayurbhanj, Keonjhar, Balasore, and Sundargarh** districts of Odisha. Mayurbhanj district, which is the birthplace of Pandit Raghunath Murmu, is a major center of Santhali language and culture.

**4. Bihar:**
Santhali-speaking communities are found in the **Bhagalpur, Katihar, and Banka** districts of Bihar. Historically, the Rajmahal region of Bihar has been a major habitat of the Santhal tribe.

**5. Assam:**
During the 19th century under the British rule, a large number of Santhals were brought to the **tea gardens of Assam** as laborers. Even today, Santhali-speaking communities live in many districts of Assam and keep their language and culture alive.

**6. Tripura:**
Santhals also settled in the tea gardens and agricultural areas of Tripura, where Santhali is used.

### Outside India:

**Bangladesh:**
The Santhal community resides in the **Rajshahi, Ranger, and Dinajpur** divisions of Bangladesh, numbering about **200,000 to 300,000** speakers.

**Nepal:**
The Santhal community is found in the **Terai** region of Nepal, especially in **Jhapa and Morang** districts.

### Numbers and Figures
According to the 2011 Indian census, the number of Santhali speakers in India is around **7.3 million**. If Bangladesh and Nepal are included, the total number exceeds **8 million**. Thus, Santhali is the most widely spoken language in the **Austro-Asiatic language family**.

## Constitutional and Educational Status of Santhali

### Included in the Eighth Schedule (2003)
In 2003, through the **92nd Constitutional Amendment**, Santhali was included in the Eighth Schedule of the Indian Constitution. This was a historic achievement because:
- It gave the right to use it in **official government work**.
- Candidates got the option to write exam papers in it for **Union Public Service Commission (UPSC)**.
- It opened the way for government assistance for the **development of education and literature** in Santhali.

### Santhali in Education
Today, Santhali is taught as a **medium or subject** in many schools in Jharkhand, West Bengal, and Odisha. Higher education in Santhali language and literature is available at **Sido Kanhu Murmu University (Dumka, Jharkhand)**.

## Santhali Language and the Digital World

With the inclusion of Ol Chiki script in Unicode, Santhali has made its place in the digital world:
- **Google** has added support for Santhali in many of its services.
- **Wikipedia** has its own version in Santhali.
- **Smartphone keyboards** like Gboard support typing in Ol Chiki script.
- On **TypeHindi.in**, we have also provided an [English to Santhali Translator](/translators/english-to-santhali) which allows you to type directly in Santhali (Ol Chiki) using an English keyboard.

## Conclusion

Santhali is not just a medium of colloquial communication; it is a symbol of **thousands of years of tribal culture, knowledge, and identity**. Originating from the soil of the Chota Nagpur Plateau, this language has spread to Jharkhand, West Bengal, Odisha, Bihar, Assam, Tripura, Bangladesh, and Nepal. The Ol Chiki script created by Pandit Raghunath Murmu gave this language a **written identity**, and Unicode has made it **immortal in the digital world**.

If you want to learn to type in Santhali or express your thoughts in Ol Chiki script, use [TypeHindi.in's Santhali Translator](/translators/english-to-santhali). Make your mother tongue digital and carry this rich heritage forward!
`,
    content: `
![संथाली भाषा – भारत की समृद्ध आदिवासी विरासत](/images/santhali-language-hero.png)

भारत विविधताओं का देश है और यहाँ सैकड़ों भाषाएँ और बोलियाँ बोली जाती हैं। इन भाषाओं में से एक अत्यंत प्राचीन और समृद्ध भाषा है **संथाली (Santhali / Santali)**। संथाली भाषा भारत के आदिवासी समुदायों, विशेष रूप से **संथाल (Santal)** जनजाति की मातृभाषा है। यह भाषा न केवल भारत में बल्कि बांग्लादेश और नेपाल में भी बोली जाती है। 2003 में इसे भारतीय संविधान की **आठवीं अनुसूची (Eighth Schedule)** में शामिल किया गया, जिससे इसे एक **आधिकारिक राष्ट्रीय भाषा** का दर्जा मिल गया। इस विस्तृत लेख में हम जानेंगे कि **संथाली भाषा का निर्माण कहाँ हुआ था** और **यह भाषा कहाँ-कहाँ बोली जाती है**।

## संथाली भाषा का उद्गम और इतिहास (Origin & History)

### संथाली भाषा कितनी पुरानी है?

संथाली भाषा **ऑस्ट्रो-एशियाटिक (Austro-Asiatic)** भाषा परिवार की **मुंडा (Munda)** शाखा से संबंधित है। भाषाविज्ञानियों (Linguists) का मानना है कि मुंडा भाषाएँ भारतीय उपमहाद्वीप की **सबसे प्राचीन भाषाओं** में से हैं, जो संभवतः **आर्यों और द्रविड़ों के आगमन से भी पहले** यहाँ बोली जाती थीं। इसका मतलब है कि संथाली भाषा की जड़ें **हज़ारों वर्ष पुरानी** हैं।

संथाली भाषा का कोई एक निश्चित "निर्माण स्थल" नहीं है, क्योंकि यह किसी व्यक्ति या संस्था द्वारा बनाई गई भाषा नहीं है बल्कि यह **प्राकृतिक रूप से विकसित** हुई है। हालांकि, भाषाविज्ञानी इसके उद्गम क्षेत्र को **छोटा नागपुर पठार (Chota Nagpur Plateau)** और उसके आसपास के क्षेत्रों से जोड़ते हैं। यह क्षेत्र आज के **झारखंड, पश्चिम बंगाल और ओडिशा** के सीमावर्ती इलाकों में फैला हुआ है।

### संथाल जनजाति – भाषा के वाहक

संथाल जनजाति भारत की **तीसरी सबसे बड़ी आदिवासी जनजाति** है। इनकी जनसंख्या लगभग **70 लाख से 1 करोड़** के बीच अनुमानित है। संथाल लोग मुख्य रूप से कृषि, वन उपज संग्रहण और शिकार पर निर्भर रहे हैं। उनकी भाषा, संस्कृति और परंपराएँ पीढ़ी-दर-पीढ़ी मौखिक रूप से (Oral Tradition) हस्तांतरित होती रही हैं।

ऐतिहासिक रूप से, संथाल लोग **बिहार के राजमहल पहाड़ियों (Rajmahal Hills)** और **छोटा नागपुर पठार** के घने जंगलों में निवास करते थे। 18वीं और 19वीं शताब्दी में ब्रिटिश शासन के दौरान, कई संथाल परिवार काम की तलाश में असम, बंगाल और ओडिशा के विभिन्न हिस्सों में बस गए। यही कारण है कि आज संथाली भाषा इतने विस्तृत भौगोलिक क्षेत्र में बोली जाती है।

### संथाल विद्रोह (1855-56) – भाषा और पहचान का संघर्ष

**संथाल हूल (Santal Hul)**, जिसे संथाल विद्रोह भी कहा जाता है, 1855-56 में ब्रिटिश शासन, ज़मींदारों और साहूकारों के अत्याचारों के विरुद्ध हुआ था। इस विद्रोह का नेतृत्व **सिद्धू और कान्हू मुर्मू** ने किया था। यह विद्रोह न केवल आर्थिक शोषण के विरुद्ध था, बल्कि इसमें संथाली भाषा, संस्कृति और पहचान को बचाने की भावना भी निहित थी। आज भी यह विद्रोह संथाल समुदाय के लिए गर्व और प्रतिरोध का प्रतीक है।

## ओल चिकी लिपि – संथाली भाषा की अपनी लिपि (Ol Chiki Script)

![ओल चिकी लिपि – संथाली भाषा की स्वदेशी लिपि](/images/ol-chiki-script-chart.png)

संथाली भाषा के इतिहास में सबसे क्रांतिकारी घटना थी **ओल चिकी (Ol Chiki)** लिपि का निर्माण। इससे पहले संथाली भाषा को लिखने के लिए कोई अपनी लिपि नहीं थी। लोग इसे लिखने के लिए **देवनागरी, बंगाली, ओडिया या रोमन** लिपि का उपयोग करते थे, जो संथाली भाषा की ध्वनियों को सही ढंग से प्रकट नहीं कर पाती थीं।

### पंडित रघुनाथ मुर्मू – ओल चिकी के जनक

**पंडित रघुनाथ मुर्मू (1905-1982)** ने 1925 में ओल चिकी लिपि का आविष्कार किया। वे ओडिशा के मयूरभंज जिले के रहने वाले थे। उन्होंने महसूस किया कि संथाली भाषा की विशिष्ट ध्वनियों (जैसे ग्लोटल स्टॉप, नेज़ल साउंड्स) को व्यक्त करने के लिए एक **स्वतंत्र और वैज्ञानिक लिपि** की आवश्यकता है।

ओल चिकी लिपि की मुख्य विशेषताएँ:
- इसमें **30 अक्षर** हैं – 6 स्वर (Vowels) और 24 व्यंजन (Consonants)।
- यह **बाएँ से दाएँ (Left to Right)** लिखी जाती है।
- प्रत्येक अक्षर की आकृति **प्रकृति से प्रेरित** है – जैसे पहाड़, नदी, पक्षी आदि।
- यह लिपि पूरी तरह से **ध्वन्यात्मक (Phonetic)** है, अर्थात जो बोला जाता है वही लिखा जाता है।
- 2005 में ओल चिकी को **यूनिकोड (Unicode)** में शामिल किया गया (Unicode Block: U+1C50 to U+1C7F)।

## संथाली भाषा कहाँ-कहाँ बोली जाती है? (Where is Santhali Spoken?)

![संथाली भाषा बोलने वाले क्षेत्रों का मानचित्र](/images/santhali-speaking-regions.png)

संथाली भाषा का भौगोलिक प्रसार बहुत विस्तृत है। यह मुख्य रूप से **पूर्वी और मध्य भारत** के कई राज्यों में बोली जाती है, लेकिन इसके बोलने वाले बांग्लादेश और नेपाल में भी पाए जाते हैं।

### भारत के प्रमुख राज्य जहाँ संथाली बोली जाती है:

**1. झारखंड (Jharkhand):**
झारखंड संथाली भाषा का **मुख्य गढ़ (Heartland)** है। यहाँ के संथाल परगना (Santhal Pargana) प्रमंडल – जिसमें दुमका, देवघर, गोड्डा, साहिबगंज, पाकुड़ और जामताड़ा जिले शामिल हैं – में संथाली सबसे अधिक बोली जाती है। झारखंड सरकार ने संथाली को **राज्य की आधिकारिक भाषाओं** में से एक का दर्जा दिया है।

**2. पश्चिम बंगाल (West Bengal):**
पश्चिम बंगाल में, विशेष रूप से **बांकुड़ा, पुरुलिया, मेदिनीपुर, बीरभूम और मालदा** जिलों में संथाली बोलने वालों की बड़ी आबादी है। राजमहल पहाड़ियों से लगे क्षेत्रों में यह प्रमुख बोलचाल की भाषा है।

**3. ओडिशा (Odisha):**
ओडिशा के **मयूरभंज, केंदुझर (Keonjhar), बालासोर और सुंदरगढ़** जिलों में बड़ी संख्या में संथाल आबादी निवास करती है। विशेष रूप से मयूरभंज जिला, जो ओल चिकी लिपि के निर्माता पंडित रघुनाथ मुर्मू की जन्मभूमि है, संथाली भाषा और संस्कृति का एक महत्वपूर्ण केंद्र है।

**4. बिहार (Bihar):**
बिहार के **भागलपुर, कटिहार और बांका** जिलों में संथाली बोलने वाले समुदाय पाए जाते हैं। ऐतिहासिक रूप से, बिहार का राजमहल क्षेत्र संथाल जनजाति का प्रमुख निवास स्थान रहा है।

**5. असम (Assam):**
19वीं सदी में ब्रिटिश शासन के दौरान, बड़ी संख्या में संथाल लोगों को असम के **चाय बागानों** में श्रमिक के रूप में लाया गया। आज भी असम के कई जिलों में संथाली बोलने वाले समुदाय रहते हैं और अपनी भाषा-संस्कृति को जीवित रखे हुए हैं।

**6. त्रिपुरा (Tripura):**
त्रिपुरा में भी चाय बागानों और कृषि क्षेत्रों में संथाल समुदाय बसा हुआ है और वहाँ संथाली भाषा का प्रयोग होता है।

### भारत के बाहर:

**बांग्लादेश (Bangladesh):**
बांग्लादेश के **राजशाही, रंगपुर और दिनाजपुर** डिवीज़न में संथाल समुदाय निवास करता है। यहाँ लगभग **2-3 लाख** संथाली भाषी लोग रहते हैं।

**नेपाल (Nepal):**
नेपाल के **तराई (Terai)** क्षेत्र, विशेष रूप से **झापा और मोरंग** जिलों में संथाल समुदाय पाया जाता है।

### संख्या और आँकड़े
2011 की भारतीय जनगणना के अनुसार, भारत में संथाली बोलने वालों की संख्या लगभग **73 लाख (7.3 मिलियन)** है। यदि बांग्लादेश और नेपाल को भी शामिल किया जाए, तो यह संख्या **80 लाख से अधिक** हो जाती है। इस प्रकार, संथाली **ऑस्ट्रो-एशियाटिक भाषा परिवार** की सबसे अधिक बोली जाने वाली भाषा है।

## संथाली भाषा का संवैधानिक और शैक्षणिक दर्जा

### आठवीं अनुसूची में शामिल (2003)
2003 में **92वें संविधान संशोधन** के माध्यम से संथाली को भारतीय संविधान की आठवीं अनुसूची में शामिल किया गया। यह एक ऐतिहासिक उपलब्धि थी क्योंकि इससे संथाली को:
- **सरकारी कामकाज** में उपयोग का अधिकार मिला।
- **लोक सेवा आयोग परीक्षाओं** में उत्तर लिखने का विकल्प मिला।
- **शिक्षा और साहित्य** के विकास के लिए सरकारी सहायता का मार्ग खुला।

### शिक्षा में संथाली
आज झारखंड, पश्चिम बंगाल और ओडिशा के कई स्कूलों में संथाली भाषा **माध्यम (Medium)** या **विषय (Subject)** के रूप में पढ़ाई जाती है। **सिदो-कान्हू मुर्मू विश्वविद्यालय (दुमका, झारखंड)** में संथाली भाषा और साहित्य में उच्च शिक्षा की सुविधा उपलब्ध है।

## संथाली भाषा और डिजिटल दुनिया

यूनिकोड में ओल चिकी लिपि के शामिल होने से संथाली भाषा ने डिजिटल दुनिया में भी अपनी जगह बनाई है:
- **गूगल (Google)** ने अपनी कई सेवाओं में संथाली भाषा का समर्थन जोड़ा है।
- **विकिपीडिया** पर संथाली भाषा का अपना संस्करण उपलब्ध है।
- **स्मार्टफोन कीबोर्ड्स** जैसे Gboard में ओल चिकी लिपि में टाइपिंग की सुविधा मिलती है।
- **TypeHindi.in** पर हमने भी <a href="/translators/english-to-santhali" target="_blank">English to Santhali Translator</a> उपलब्ध कराया है, जिससे आप अंग्रेजी कीबोर्ड से सीधे संथाली (ओल चिकी) में टाइप कर सकते हैं।

## निष्कर्ष

संथाली भाषा केवल एक बोलचाल का माध्यम नहीं है, बल्कि यह **हज़ारों वर्षों की आदिवासी संस्कृति, ज्ञान और पहचान** का प्रतीक है। छोटा नागपुर पठार की भूमि से उपजी यह भाषा आज झारखंड, पश्चिम बंगाल, ओडिशा, बिहार, असम, त्रिपुरा, बांग्लादेश और नेपाल तक फैली हुई है। पंडित रघुनाथ मुर्मू द्वारा निर्मित ओल चिकी लिपि ने इस भाषा को एक **लिखित पहचान** दी और यूनिकोड ने इसे **डिजिटल दुनिया** में अमर कर दिया।

यदि आप संथाली भाषा में टाइप करना सीखना चाहते हैं या अपने विचारों को ओल चिकी लिपि में व्यक्त करना चाहते हैं, तो <a href="/translators/english-to-santhali" target="_blank">TypeHindi.in के संथाली ट्रांसलेटर</a> का उपयोग करें। अपनी मातृभाषा को डिजिटल बनाएं और इस समृद्ध विरासत को आगे बढ़ाएं!
`,
  },
  {
    slug: "mangal-font-kya-hai",
    titleEn: "What is Mangal Font? (Mangal Font Kya Hai) – Complete Guide in English",
    excerptEn: "Mangal font is a Unicode Hindi font recognized by the Government of India. Learn what Mangal font is, how it works, how to install it, and its importance in government exams.",
    dateEn: "June 5, 2026",
    contentEn: `![Mangal Font – India's Standard Unicode Hindi Font](/images/mangal-font-hero.png)

If you are learning Hindi typing or preparing for a government exam (SSC, CPCT, UPSSSC), you must have heard the name **"Mangal Font"**. In today's digital age, this font has become the most important and standard font for Hindi typing. But still, many people have questions like **what is Mangal Font**, how it works, and how to use it. In this detailed article, we will understand everything related to it in depth.

## What is Mangal Font?

**Mangal** is a **Unicode**-based Hindi font developed by **Microsoft**. It comes **pre-installed** in the Windows operating system (Windows XP, 7, 8, 10, 11). This means that you do not need to install any separate software to use it.

Mangal font is designed to display the **Devanagari Script**. Since it follows the Unicode Standard, the text typed in it is displayed correctly on **every computer, mobile, and web browser**. Whether you send an email, type a message on WhatsApp, or search on Google – the text written in it will look exactly the same everywhere.

### Understanding Unicode in Simple Terms

To understand this, it is necessary to understand **Unicode** first. Unicode is an **International Standard** that provides a **Unique Code Point** for every character of every language in the world. For example, the Unicode for the Hindi letter "अ" is U+0905. This means that when you type "अ" in it, the computer saves it as U+0905. Now, no matter on which computer this file is opened, it will always appear as "अ" and never incorrect or garbled.

In older times, fonts like **KrutiDev** and **DevLys** were based on **ASCII** technology. In these fonts, Hindi letters were "drawn" in place of English letters. That's why when that font was not installed on another computer, the Hindi text would change into **Garbage Characters** of English.

## Mangal Font vs KrutiDev – Detailed Comparison

![Comparison between Mangal Font and KrutiDev Font](/images/mangal-vs-krutidev.png)

It is very important to understand the fundamental differences between the two fonts:

### 1. Technical Foundation
- **Unicode-based:** It is based on an international standard (Unicode Standard).
- **KrutiDev:** Based on ASCII – this is an older and limited technology.

### 2. Online Behavior
- **Web Friendly:** It looks perfectly correct on Google, Facebook, WhatsApp, and emails, and is easily searchable on the internet.
- **KrutiDev:** When sent over the internet, it often appears as English **Garbage Text** like "dfMy bafM;k".

### 3. Keyboard Layout
- **Keyboard Layout:** The **InScript** or **Remington GAIL** keyboard layouts are used for it.
- **KrutiDev:** Only the **Remington** layout works with it.

### 4. Government Recognition
- **Government Recognition:** It is **officially accepted** by the Government of India and all major recruiting bodies like SSC, IBPS, and Railways.
- **KrutiDev:** Still given in some older state-level exams, but its use is rapidly decreasing.

### 5. Future Relevance
- **Future Standard:** It is the standard of the modern era and all digital devices and websites support it.
- **KrutiDev:** It is a "Legacy" font that is gradually becoming obsolete.

## Why is Mangal Font Important in Government Exams?

Today, in almost all major government recruitment exams in India, the Hindi typing test is conducted in **Mangal Font (Unicode)** only:

- **SSC CGL (Staff Selection Commission - CGL):** Data Entry Speed Test (DEST) is conducted in it.
- **SSC CHSL (Staff Selection Commission - CHSL):** A speed of 35 WPM is expected in it.
- **CPCT (Madhya Pradesh Computer Proficiency Certification Test):** It is completely based on this.
- **UPSSSC (Uttar Pradesh Subordinate Services Selection Commission):** It is mandatory for Junior Assistant and other posts.
- **Railway Recruitment Board (RRB):** It is used for Clerk and Typist posts.

If **"Mangal Script"**, **"Unicode Font"**, or **"Mangal Font"** is written on your admit card or exam notification, it straight away means that you will have to type in this Unicode font.

## How to Start Typing in Mangal Font on Your Computer?

![Steps to set it up on Windows](/images/mangal-font-setup.png)

The good thing is that it is **already present in your Windows computer**. You just have to activate the Hindi keyboard layout:

### Setup on Windows 10 / 11 (Step-by-Step)
1. Open **Settings** – Search 'Settings' in the Start menu.
2. Click on **Time & Language**.
3. Select **Language** on the left side.
4. Click on **Add a language**.
5. Type **"Hindi"** in the search bar, select **Hindi**, and install it.
6. After installation, click on Hindi → **Options** → **Add a keyboard** → Select **Hindi Traditional (InScript)** or **Devanagari InScript**.

### Shortcut to Change Language
- Press **Windows + Space** to instantly switch between English and Hindi.
- The Language Indicator will appear in the taskbar showing "ENG" or "HIN".

Once the setup is complete, whenever you switch to the Hindi keyboard in any software (MS Word, Notepad, Chrome), you will **automatically be typing in Mangal font (Unicode)**.

## Which Keyboard Layout to Learn with it?

Mainly two keyboard layouts work with it:

### 1. InScript Layout
- It is the standard layout developed by the **Government of India (C-DAC)**.
- In this, all **Vowels are on the left side** and **Consonants are on the right side**.
- It is based on the **Phonetic Scientific** principle.
- **Biggest Advantage:** Once you learn InScript, you can type in Marathi, Bengali, Gujarati, and all Indian languages apart from Hindi.
- **Recommended:** For SSC, CPCT, and most government exams.

### 2. Remington GAIL Layout
- This is the Unicode version of the old typewriter's Remington layout.
- Those who have been typing in Remington (on KrutiDev) earlier can easily switch to it.

**TypeHindi.in's Advice:** If you are learning Hindi typing afresh, learn the **InScript** layout. It is faster, more scientific, and the safest option for the future.

## How to Increase Typing Speed?

Learning to type in it is not difficult, but **Regular Practice** and **Correct Technique** are essential to increase speed:

1. **Learn Touch Typing:** Form the habit of typing without looking at the keyboard. Mistakes will happen initially, but gradually your Muscle Memory will build up.
2. **Focus on the Home Row:** Your fingers should always rest on A, S, D, F and J, K, L, ;.
3. **Accuracy First, Speed Later:** First, learn to type without errors. When accuracy goes above 95%, then increase speed.
4. **Practice for 30 Minutes Daily:** Practicing daily in small sessions is much better than practicing for a long time once a week.
5. **Practice on TypeHindi.in:** Our platform is specially built for InScript typing. Here you can track your **WPM (Words Per Minute)**, **Accuracy**, and **Errors** in real-time.

## FAQs About Mangal Font

### Is this font free?
Yes, it is completely **Free**. It comes pre-installed with the Windows operating system.

### Do I need to install it separately?
**No.** If you have any version of Windows XP or later in your computer, it is already present. You just have to activate the Hindi keyboard layout.

### Can I practice online in this?
**Absolutely!** On TypeHindi.in, you can do online typing practice in the InScript layout. We have special paragraphs, mock tests, and typing games available.

### What is the difference between font and InScript?
**Mangal** is a **font** (which displays characters), whereas **InScript** is a **keyboard layout** (which tells which character is on which key). Both work together – you type with the InScript keyboard and the characters appear on the screen in it.

## Conclusion: Why Learn it?

It is a **necessity** of today's digital India. Whether you are preparing for a government job, working in Hindi in an office, or interested in blogging and content creation – knowing how to type in it is **mandatory**. It is based on Unicode, works on all platforms, and is recognized by the Government of India.

Start your typing journey today! Come to <a href="/" target="_blank">TypeHindi.in</a> and practice for free. Our platform has visual guides for the InScript keyboard, real-time stats tracking, and typing games that make your learning process easy and fun.`,
    title: "मंगल फॉन्ट क्या है? (Mangal Font Kya Hai) – पूरी जानकारी हिंदी में",
    excerpt: "मंगल फॉन्ट भारत सरकार द्वारा मान्यता प्राप्त यूनिकोड हिंदी फॉन्ट है। जानें मंगल फॉन्ट क्या है, यह कैसे काम करता है, इसे कैसे इंस्टॉल करें, और सरकारी परीक्षाओं में इसका क्या महत्व है।",
    date: "5 जून, 2026",
    author: "TypeHindi Team",
    category: "Basics",
    content: `
![मंगल फॉन्ट – भारत का मानक यूनिकोड हिंदी फॉन्ट](/images/mangal-font-hero.png)

अगर आप हिंदी टाइपिंग सीख रहे हैं या किसी सरकारी परीक्षा (SSC, CPCT, UPSSSC) की तैयारी कर रहे हैं, तो आपने **"मंगल फॉन्ट"** (Mangal Font) का नाम ज़रूर सुना होगा। आज के डिजिटल युग में, यह फॉन्ट हिंदी टाइपिंग का सबसे महत्वपूर्ण और मानक फॉन्ट बन चुका है। लेकिन अभी भी बहुत से लोगों के मन में यह सवाल रहता है कि **मंगल फॉन्ट क्या है** (Mangal Font Kya Hai), यह कैसे काम करता है, और इसे कैसे इस्तेमाल करें। इस विस्तृत लेख में हम इससे जुड़ी हर एक बात को गहराई से समझेंगे।

## मंगल फॉन्ट क्या है? (What is Mangal Font?)

**मंगल (Mangal)** एक **यूनिकोड (Unicode)** आधारित हिंदी फॉन्ट है जिसे **माइक्रोसॉफ्ट (Microsoft)** ने विकसित किया है। यह विंडोज ऑपरेटिंग सिस्टम (Windows XP, 7, 8, 10, 11) में पहले से ही **पूर्व-स्थापित (Pre-installed)** आता है। इसका मतलब यह है कि इसका उपयोग करने के लिए आपको कोई अलग से सॉफ्टवेयर इंस्टॉल करने की आवश्यकता नहीं है।

मंगल फॉन्ट **देवनागरी लिपि (Devanagari Script)** को प्रदर्शित करने के लिए बनाया गया है। चूँकि यह यूनिकोड मानक (Unicode Standard) का पालन करता है, इसलिए इसमें टाइप किया गया टेक्स्ट **हर कंप्यूटर, मोबाइल और वेब ब्राउज़र** पर सही ढंग से दिखाई देता है। चाहे आप ईमेल भेजें, व्हाट्सएप पर संदेश टाइप करें, या गूगल पर सर्च करें – इसमें लिखा हुआ टेक्स्ट हर जगह एक समान दिखेगा।

### यूनिकोड (Unicode) को सरल भाषा में समझें

इसे समझने के लिए पहले **यूनिकोड** को समझना ज़रूरी है। यूनिकोड एक **अंतरराष्ट्रीय मानक (International Standard)** है जो दुनिया की हर भाषा के हर अक्षर के लिए एक **अद्वितीय कोड नंबर (Unique Code Point)** प्रदान करता है। उदाहरण के लिए, हिंदी के अक्षर "अ" का यूनिकोड कोड U+0905 है। इसका मतलब है कि जब आप इसमें "अ" टाइप करते हैं, तो कंप्यूटर उसे U+0905 के रूप में सहेजता (Save) है। अब चाहे इस फाइल को किसी भी कंप्यूटर पर खोला जाए, वह "अ" ही दिखेगा, कभी भी गलत या अस्पष्ट (Garbled) नहीं होगा।

पुराने ज़माने में, **कृतिदेव (KrutiDev)** और **देवलिस (DevLys)** जैसे फॉन्ट्स **एएससीआईआई (ASCII)** तकनीक पर आधारित थे। इन फॉन्ट्स में अंग्रेज़ी के अक्षरों की जगह हिंदी के अक्षर "ड्रॉ" किए जाते थे। इसलिए जब वह फॉन्ट किसी दूसरे कंप्यूटर पर इंस्टॉल नहीं होता था, तो हिंदी टेक्स्ट अंग्रेज़ी के **अजीब अक्षरों (Garbage Characters)** में बदल जाता था।

## मंगल फॉन्ट बनाम कृतिदेव (Mangal Font vs KrutiDev) – विस्तृत तुलना

![मंगल फॉन्ट और कृतिदेव फॉन्ट की तुलना](/images/mangal-vs-krutidev.png)

यह समझना बहुत ज़रूरी है कि दोनों फॉन्ट्स के बीच मूलभूत (Fundamental) अंतर क्या हैं:

### 1. तकनीकी आधार (Technical Foundation)
- **यूनिकोड आधारित:** यह एक अंतरराष्ट्रीय मानक (Unicode Standard) पर आधारित है।
- **कृतिदेव:** एएससीआईआई (ASCII) पर आधारित – यह एक पुरानी और सीमित तकनीक है।

### 2. इंटरनेट पर व्यवहार (Online Behavior)
- **वेब फ्रेंडली:** यह गूगल, फेसबुक, व्हाट्सएप और ईमेल पर बिल्कुल सही दिखता है और इंटरनेट पर आसानी से सर्च हो जाता है।
- **कृतिदेव:** इंटरनेट पर भेजने पर अक्सर अंग्रेज़ी के **कचरा अक्षर (Garbage Text)** जैसे "dfMy bafM;k" दिखाई देते हैं।

### 3. कीबोर्ड लेआउट (Keyboard Layout)
- **कीबोर्ड लेआउट:** इसके लिए **इनस्क्रिप्ट (InScript)** या **रेमिंगटन गैल (Remington GAIL)** कीबोर्ड लेआउट का उपयोग किया जाता है।
- **कृतिदेव:** इसके साथ केवल **रेमिंगटन (Remington)** लेआउट काम करता है।

### 4. सरकारी मान्यता (Government Recognition)
- **सरकारी मान्यता:** यह भारत सरकार और SSC, IBPS, रेलवे जैसी सभी मुख्य भर्ती संस्थाओं द्वारा **अधिकारिक रूप से स्वीकृत** है।
- **कृतिदेव:** कुछ पुराने राज्य स्तरीय परीक्षाओं में अभी भी दिया जाता है, लेकिन इसका उपयोग तेजी से कम हो रहा है।

### 5. भविष्य की उपयोगिता (Future Relevance)
- **भविष्य का मानक:** यह आधुनिक युग का मानक है और सभी डिजिटल डिवाइसेज व वेबसाइट्स इसे सपोर्ट करती हैं।
- **कृतिदेव:** यह एक "विरासत (Legacy)" फॉन्ट है जो धीरे-धीरे अप्रचलित (Obsolete) हो रहा है।

## मंगल फॉन्ट सरकारी परीक्षाओं में क्यों ज़रूरी है?

आज भारत की लगभग सभी प्रमुख सरकारी भर्ती परीक्षाओं में हिंदी टाइपिंग टेस्ट **मंगल फॉन्ट (यूनिकोड)** में ही आयोजित किया जाता है:

- **SSC CGL (कर्मचारी चयन आयोग - सीजीएल):** डेटा एंट्री स्पीड टेस्ट (DEST) इसमें होता है।
- **SSC CHSL (कर्मचारी चयन आयोग - सीएचएसएल):** 35 WPM की गति इसमें अपेक्षित है।
- **CPCT (मध्य प्रदेश कंप्यूटर प्रवीणता प्रमाणपत्र परीक्षा):** यह पूरी तरह से इस पर आधारित है।
- **UPSSSC (उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग):** कनिष्ठ सहायक और अन्य पदों के लिए यह अनिवार्य है।
- **रेलवे भर्ती बोर्ड (RRB):** क्लर्क और टाइपिस्ट पदों में इसका उपयोग होता है।

यदि आपके एडमिट कार्ड या परीक्षा नोटिफिकेशन में **"Mangal Script"**, **"Unicode Font"** या **"Mangal Font"** लिखा हुआ है, तो इसका सीधा मतलब है कि आपको इसी यूनिकोड फॉन्ट में टाइपिंग करनी होगी।

## अपने कंप्यूटर पर मंगल फॉन्ट में टाइपिंग कैसे शुरू करें?

![Windows पर इससेटअप करने के चरण](/images/mangal-font-setup.png)

अच्छी बात यह है कि यह आपके **विंडोज कंप्यूटर में पहले से ही मौजूद** है। आपको बस हिंदी कीबोर्ड लेआउट को सक्रिय (Activate) करना है:

### Windows 10 / 11 पर सेटअप (Step-by-Step)
1. **Settings** (सेटिंग्स) खोलें – Start मेनू में 'Settings' सर्च करें।
2. **Time & Language** (समय और भाषा) पर क्लिक करें।
3. बायीं तरफ **Language** (भाषा) चुनें।
4. **Add a language** (एक भाषा जोड़ें) पर क्लिक करें।
5. सर्च बार में **"Hindi"** टाइप करें और **हिंदी** को चुनकर इंस्टॉल करें।
6. इंस्टॉल होने के बाद Hindi पर क्लिक करें → **Options** → **Add a keyboard** → **Hindi Traditional (InScript)** या **Devanagari InScript** चुनें।

### भाषा बदलने का शॉर्टकट
- **Windows + Space** दबाकर अंग्रेज़ी और हिंदी के बीच तुरंत बदलें।
- टास्कबार में भाषा का संकेतक (Language Indicator) दिखेगा जिसमें "ENG" या "HIN" लिखा होगा।

सेटअप पूरा होने के बाद, जब आप किसी भी सॉफ्टवेयर (MS Word, Notepad, Chrome) में हिंदी कीबोर्ड पर स्विच करेंगे, तो आप **स्वतः ही मंगल फॉन्ट (यूनिकोड)** में टाइप कर रहे होंगे।

## इसके साथ कौन सा कीबोर्ड लेआउट सीखें?

इसके साथ मुख्य रूप से दो कीबोर्ड लेआउट काम करते हैं:

### 1. इनस्क्रिप्ट (InScript) लेआउट
- यह **भारत सरकार (C-DAC)** द्वारा विकसित मानक लेआउट है।
- इसमें सभी **स्वर (Vowels) बायीं तरफ** और **व्यंजन (Consonants) दायीं तरफ** होते हैं।
- यह **वैज्ञानिक ध्वन्यात्मक (Phonetic Scientific)** सिद्धांत पर आधारित है।
- **सबसे बड़ा लाभ:** एक बार इनस्क्रिप्ट सीखने के बाद आप हिंदी के अलावा मराठी, बंगाली, गुजराती और सभी भारतीय भाषाओं में टाइप कर सकते हैं।
- **अनुशंसित (Recommended):** SSC, CPCT, और अधिकांश सरकारी परीक्षाओं के लिए।

### 2. रेमिंगटन गैल (Remington GAIL) लेआउट
- यह पुराने टाइपराइटर के रेमिंगटन लेआउट का यूनिकोड संस्करण है।
- जो लोग पहले से रेमिंगटन (कृतिदेव पर) में टाइप करते रहे हैं, वे इसमें आसानी से स्विच कर सकते हैं।

**TypeHindi.in की सलाह:** यदि आप नए सिरे से हिंदी टाइपिंग सीख रहे हैं, तो **इनस्क्रिप्ट (InScript)** लेआउट सीखें। यह अधिक तेज़, वैज्ञानिक और भविष्य के लिए सबसे सुरक्षित विकल्प है।

## टाइपिंग में गति कैसे बढ़ाएं?

इसमें टाइपिंग सीखना कठिन नहीं है, लेकिन गति बढ़ाने के लिए **नियमित अभ्यास (Regular Practice)** और **सही तकनीक (Correct Technique)** ज़रूरी है:

1. **टच टाइपिंग (Touch Typing) सीखें:** कीबोर्ड पर देखे बिना टाइप करने की आदत डालें। शुरुआत में गलतियाँ होंगी लेकिन धीरे-धीरे आपकी मांसपेशियों की स्मृति (Muscle Memory) बन जाएगी।
2. **होम रो (Home Row) पर ध्यान दें:** आपकी उंगलियाँ हमेशा A, S, D, F और J, K, L, ; पर टिकी रहनी चाहिए।
3. **सटीकता (Accuracy) पहले, गति बाद में:** पहले बिना गलती के टाइप करना सीखें। जब सटीकता 95% से ऊपर पहुँच जाए, तब गति बढ़ाएं।
4. **प्रतिदिन 30 मिनट अभ्यास करें:** रोज़ाना छोटे-छोटे सत्रों में अभ्यास करना हफ्ते में एक बार लंबा अभ्यास करने से कहीं बेहतर है।
5. **TypeHindi.in पर अभ्यास करें:** हमारा प्लेटफ़ॉर्म विशेष रूप से इनस्क्रिप्ट टाइपिंग के लिए बनाया गया है। यहाँ आप अपनी **WPM (Words Per Minute)**, **सटीकता (Accuracy)** और **त्रुटियाँ (Errors)** को रियल-टाइम में ट्रैक कर सकते हैं।

## मंगल फॉन्ट के बारे में आम प्रश्न (FAQ)

### क्या यह फॉन्ट फ्री है?
हाँ, यह पूरी तरह से **निःशुल्क (Free)** है। यह विंडोज ऑपरेटिंग सिस्टम के साथ प्री-इंस्टॉल्ड आता है।

### क्या मुझे इसे अलग से इंस्टॉल करना होगा?
**नहीं।** यदि आपके कंप्यूटर में Windows XP या उसके बाद का कोई भी वर्जन है, तो यह पहले से ही मौजूद है। आपको बस हिंदी कीबोर्ड लेआउट को एक्टिवेट करना है।

### क्या मैं इसमें ऑनलाइन अभ्यास कर सकता हूँ?
**बिल्कुल!** TypeHindi.in पर आप इनस्क्रिप्ट लेआउट में ऑनलाइन टाइपिंग प्रैक्टिस कर सकते हैं। हमारे पास विशेष पैराग्राफ, मॉक टेस्ट और टाइपिंग गेम्स उपलब्ध हैं।

### फॉन्ट और इनस्क्रिप्ट में क्या अंतर है?
**मंगल** एक **फॉन्ट** है (जो अक्षरों को दिखाता है), जबकि **इनस्क्रिप्ट** एक **कीबोर्ड लेआउट** है (जो बताता है कि कौन सा अक्षर किस कुंजी पर है)। दोनों मिलकर काम करते हैं – आप इनस्क्रिप्ट कीबोर्ड से टाइप करते हैं और इसमें अक्षर स्क्रीन पर दिखते हैं।

## निष्कर्ष: इसे क्यों सीखें?

यह आज के डिजिटल भारत की **आवश्यकता** है। चाहे आप सरकारी नौकरी की तैयारी कर रहे हों, ऑफिस में हिंदी में काम करते हों, या ब्लॉगिंग और कंटेंट क्रिएशन में रुचि रखते हों – इसमें टाइपिंग का ज्ञान होना **अनिवार्य** है। यह यूनिकोड पर आधारित है, सभी प्लेटफ़ॉर्म्स पर काम करता है, और भारत सरकार द्वारा मान्यता प्राप्त है।

अपनी टाइपिंग यात्रा आज ही शुरू करें! <a href="/" target="_blank">TypeHindi.in</a> पर आएं और मुफ्त में अभ्यास करें। हमारे प्लेटफ़ॉर्म पर इनस्क्रिप्ट कीबोर्ड का विज़ुअल गाइड, रियल-टाइम स्टैट्स ट्रैकिंग और टाइपिंग गेम्स उपलब्ध हैं जो आपकी सीखने की प्रक्रिया को आसान और मज़ेदार बनाते हैं।
`,
  },
  {
    slug: "iocl-apprentice-recruitment-2026",
    title: "Indian Oil Recruitment 2026: 335 Vacancies, Eligibility, Stipend, Selection Process and Apply Online",
    date: "12 \u0905\u0915\u094d\u091f\u0942\u092c\u0930, 2026",
    excerpt: "Indian Oil Corporation Limited (IOCL) Western Region invites applications for 335 Apprentice posts across ITI, Diploma, and Graduate streams. Check details and apply online.",
    content: "The **Indian Oil Corporation Limited (IOCL)**, Marketing Division, Western Region, has released Advertisement No. IOCL/MKTG/WR/APPR/2026-27 dated 5 October 2026 for the engagement of Trade, Technician and Graduate Apprentices under the Apprentices Act. The recruitment covers multiple locations across Maharashtra, Gujarat, Goa, Madhya Pradesh, Chhattisgarh, Dadra and Nagar Haveli, and Daman and Diu.\n\nAccording to the state-wise vacancy tables in the notification, the recruitment offers **335 apprenticeship seats** across four broad groups: Technician Apprentice, Trade Apprentice (ITI), Graduate Apprentice and Trade Apprentice\u2013Data Entry Operator. The opportunities include Mechanical, Electrical, Civil, Instrumentation, Electronics, Fitter, Electrician, Machinist, Graduate Apprentice and Data Entry Operator positions.\n\nCandidates with a full-time engineering diploma, ITI qualification, eligible bachelor's degree or prescribed Class 12 qualification can apply for the corresponding discipline. The apprenticeship training period is 12 months, and the stipend will be paid according to the applicable Apprentices Act and Apprenticeship Rules.\n\nThe online application process opened on 5 October 2026 at 10:00 AM, and the last date to register and apply is **4 November 2026 at 5:00 PM**. Applications must be submitted through the appropriate NAPS or NATS portal, depending on the apprenticeship category.\n\nThis article explains IOCL Apprentice Recruitment 2026 in detail, including vacancies, state-wise posts, educational qualifications, age limit, stipend, selection process, required documents, official links and step-by-step application instructions.\n\n## IOCL Apprentice Recruitment 2026 Overview\n\n| Particular | Details |\n| :--- | :--- |\n| **Organization** | Indian Oil Corporation Limited (IOCL) |\n| **Division** | Marketing Division, Western Region |\n| **Advertisement Number** | IOCL/MKTG/WR/APPR/2026-27 |\n| **Notification Date** | 5 October 2026 |\n| **Total Vacancies** | 335 Apprenticeship Seats |\n| **Apprentice Categories** | Trade, Technician and Graduate |\n| **Training Duration** | 12 Months |\n| **Age Limit** | 18\u201324 Years (Relaxation as per rules) |\n| **Application Mode** | Online |\n| **Application Start Date** | 5 October 2026, 10:00 AM |\n| **Last Date to Apply** | 4 November 2026, 5:00 PM |\n| **Selection Process** | Merit List, Document Verification and Medical Fitness |\n| **Written Examination** | No |\n| **Interview** | No |\n| **Job/Training Locations** | Maharashtra, Gujarat, MP, Goa, CG, DNH & Daman/Diu |\n| **Official Website** | iocl.com |\n\n*Important: These are apprenticeship training positions, not regular permanent IOCL jobs. The notification clearly states that completion of apprenticeship does not create a right to employment with IOCL or any other government agency.*\n\n## IOCL Apprentice Vacancy 2026: Category-Wise Trade Groups\n\nThe advertisement consolidates vacancy totals across the seven listed states and Union Territories:\n\n| Apprentice Category | Vacancies |\n| :--- | :--- |\n| **Technician Apprentice \u2013 Engineering Diploma** | 99 |\n| **Trade Apprentice \u2013 ITI Trades** | 40 |\n| **Graduate Apprentice** | 174 |\n| **Trade Apprentice \u2013 Data Entry Operator** | 22 |\n| **Total** | **335** |\n\n## IOCL Apprentice State-Wise Vacancy 2026\n\n| State/Union Territory | Technician Apprentice | ITI Trade Apprentice | Graduate Apprentice | Data Entry Operator | Total |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| **Maharashtra** | 33 | 8 | 100 | 8 | **149** |\n| **Gujarat** | 17 | 8 | 29 | 3 | **57** |\n| **Madhya Pradesh** | 17 | 8 | 29 | 3 | **57** |\n| **Goa** | 8 | 4 | 4 | 2 | **18** |\n| **Chhattisgarh** | 8 | 4 | 4 | 2 | **18** |\n| **Dadra and Nagar Haveli** | 8 | 4 | 4 | 2 | **18** |\n| **Daman and Diu** | 8 | 4 | 4 | 2 | **18** |\n| **Total** | **99** | **40** | **174** | **22** | **335** |\n\nCandidates must choose a training opportunity within the states and Union Territories covered by this advertisement. Selecting a location outside the notified Western Region will result in rejection.\n\n## IOCL Apprentice Recruitment 2026: Available Trades & Disciplines\n\n### 1. Technician Apprentice \u2013 Engineering Diploma\nRequires a 3-year regular full-time engineering diploma in:\n* Mechanical\n* Electrical\n* Instrumentation\n* Civil\n* Electrical and Electronics\n* Electronics\n\n### 2. Trade Apprentice \u2013 ITI\nRequires Matriculation and a recognized 2-year full-time ITI certificate in:\n* Fitter\n* Electrician\n* Electronics Mechanic\n* Instrument Mechanic\n* Machinist\n\n### 3. Graduate Apprentice\nRequires a regular full-time Bachelor's degree (BA, B.Com, B.Sc or BBA) from a recognized university.\n\n### 4. Trade Apprentice \u2013 Data Entry Operator\n* **Fresher:** Class 12 pass (below graduate level).\n* **Skill Certificate Holders:** Class 12 pass (below graduate level) along with a Domestic Data Entry Operator skill certificate issued under the National Skills Qualifications Framework.\n\n## IOCL Apprentice Educational Qualification 2026\n\n| Discipline | Essential Qualification | Minimum Marks (Gen/EWS/OBC) | Minimum Marks (SC/ST/PwBD) |\n| :--- | :--- | :--- | :--- |\n| **Technician Apprentice** | 3-Year regular Diploma in relevant Engineering branch | 50% | 45% |\n| **Trade Apprentice \u2013 ITI** | 10th pass + regular 2-year ITI in prescribed trade | As prescribed | As per rules |\n| **Graduate Apprentice** | Regular full-time BA, B.Com, B.Sc or BBA | 50% | 45% |\n| **DEO (Fresher)** | Class 12th pass (below graduate level) | 50% | 45% |\n| **DEO (Skill Certificate)** | Class 12th pass + Domestic DEO Skill Certificate | As prescribed | As per rules |\n\n*Full-Time Qualification Is Mandatory. Part-time or distance-learning qualifications are not accepted.*\n\n### Qualification Passing Window\n* **Graduate Apprentice:** 1 April 2023 to 30 September 2026\n* **Technician Apprentice (Diploma):** 1 April 2023 to 30 September 2026\n* **Trade Apprentice (ITI):** 1 April 2022 to 30 September 2026\n* **Trade Apprentice (DEO):** 1 April 2022 to 30 September 2026\n\n*Higher Qualification Restriction: Candidates possessing B.E., B.Tech, MBA, MCA, CA, ICWA, LLB or equivalent qualifications are NOT eligible.*\n\n## IOCL Apprentice Age Limit 2026\n\nAge is calculated as on **30 September 2026**.\n* **Minimum Age:** 18 Years\n* **Maximum Age:** 24 Years\n* **SC/ST Relaxation:** 5 Years (up to 29 years)\n* **OBC-NCL Relaxation:** 3 Years (up to 27 years)\n* **PwBD Relaxation:** Up to 10 to 15 Years (based on category)\n\n## IOCL Apprentice Selection Process 2026\n\nThe selection process is purely merit-based with **no written exam or interview**:\n1. **Online Registration:** On NAPS or NATS portal.\n2. **Merit List:** Prepared on the basis of marks obtained in the qualifying degree/diploma/ITI/12th.\n3. **Document Verification:** Production of original certificates and marksheets.\n4. **Pre-Engagement Medical Fitness Test:** Meeting IOCL medical parameters.\n5. **Engagement:** Issue of contract for 12 months.\n\n## How to Apply for IOCL Apprentice Recruitment 2026\n\nCandidates must register on the appropriate government apprenticeship portal first.\n\n* **For ITI & Data Entry Operator:** Register on [Apprenticeship India (NAPS)](https://www.apprenticeshipindia.gov.in/)\n* **For Diploma & Graduate Apprentice:** Register on [NATS Portal](https://nats.education.gov.in/student_register.php)\n\n### Step-by-Step Application Steps:\n* **Step 1:** Complete 100% profile on the respective portal (NAPS/NATS) with your educational, personal, and bank details.\n* **Step 2:** Search for Establishment:\n  * **NATS Establishment ID:** `WMHMCC000053`\n  * **NAPS Establishment ID:** `E01172700332`\n  * Name: `Indian Oil Corporation Limited (Marketing Division) \u2013 Western Region`\n* **Step 3:** Select the correct discipline code (101 to 114) matching your qualification.\n* **Step 4:** Choose your preferred training state/location within Maharashtra, Gujarat, Goa, MP, CG, DNH, or Daman & Diu.\n* **Step 5:** Submit application before **4 November 2026 at 5:00 PM**.\n* **Important Note:** A candidate can apply for **only one discipline code**. Multiple applications lead to cancellation.\n\n## Important Official Links\n\n| Purpose | Official Link |\n| :--- | :--- |\n| **IOCL Official Website** | [https://iocl.com/](https://iocl.com/) |\n| **Official Notification PDF** | [View Notification](https://iocl.com/admin/img/Apprenticeships/Files/9a19f255f8db433b8e3b10a3bced73e1.pdf) |\n| **NAPS Portal (ITI & DEO)** | [https://www.apprenticeshipindia.gov.in/](https://www.apprenticeshipindia.gov.in/) |\n| **NATS Portal (Diploma & Graduate)** | [https://nats.education.gov.in/student_register.php](https://nats.education.gov.in/student_register.php) |\n| **IOCL Apprenticeship Portal** | [https://iocl.com/apprenticeships](https://iocl.com/apprenticeships) |\n| **Application Deadline** | 4 November 2026, 5:00 PM |\n\n## Documents Required\n\n* 10th Class Certificate / Marksheet (DOB proof)\n* ITI / Diploma / Degree Marksheets and Certificates\n* 12th Certificate (for DEO) & Skill Certificate (if applicable)\n* Caste / EWS / PwBD Certificate in Central Government format\n* Valid OBC-NCL certificate (issued within 12 months of 30 Sept 2026)\n* Aadhaar Card & PAN Card\n* Bank Passbook / Cancelled Cheque\n\n## Common Mistakes to Avoid\n\n1. **Applying for Multiple Discipline Codes:** Only one code is allowed.\n2. **Using the Wrong Portal:** NAPS is strictly for ITI/DEO; NATS is for Diploma/Degree.\n3. **Out of Window Qualifications:** Check passing dates (2022/2023 to Sept 2026).\n4. **Hiding Higher Qualifications:** B.Tech/MBA candidates are barred; do not apply if overqualified.\n5. **Incomplete Portal Profile:** Ensure 100% completion before applying.\n\n## IOCL Apprentice Recruitment 2026 FAQs\n\n**How many vacancies are available?**\n\nA total of 335 apprenticeship seats are available across Western Region states.\n\n**What is the last date to apply?**\n\nThe last date to submit the application is 4 November 2026 at 5:00 PM.\n\n**What is the age limit?**\n\nThe age limit is 18 to 24 years as on 30 September 2026, with age relaxations for reserved categories.\n\n**What is the training duration?**\n\nThe apprenticeship training duration is 12 months.\n\n**Is there an exam or interview?**\n\nNo. Selection is purely merit-based on qualification marks, followed by document verification and medical checkup.\n\n**What is the stipend?**\n\nStipend is paid monthly according to the Apprentices Act and Apprenticeship Rules.\n\n**Which portal should ITI candidates use?**\n\nITI and Data Entry Operator candidates must use the Apprenticeship India (NAPS) portal.\n\n**Which portal should Diploma candidates use?**\n\nTechnician Diploma and Graduate candidates must use the NATS portal.\n\n**Can I apply for more than one trade?**\n\nNo. Applying for multiple discipline codes will result in rejection of all applications.\n\n**Will this lead to a permanent job in IOCL?**\n\nNo. Apprenticeship training does not guarantee or entitle candidates to permanent employment in IOCL.\n\n## Final Words\n\nThe IOCL Apprentice Recruitment 2026 offers a prime opportunity for ITI holders, Diploma engineers, and fresh graduates to gain valuable industry experience in Indian Oil's Western Region. Ensure you register on the appropriate portal, choose a single discipline code, and submit your application before 4 November 2026.\n",
    category: "Jobs",
    tags: ["IOCL", "Indian Oil", "Apprentice Recruitment 2026", "Govt Jobs 2026", "ITI Jobs", "Diploma Jobs"]
  },
  {
    slug: "income-tax-department-delhi-recruitment-2026",
    title: "Income Tax Department Delhi Recruitment 2026: 119 Sports Quota Vacancies for Tax Assistant, Stenographer and MTS",
    date: "17 \u0905\u0915\u094d\u091f\u0942\u092c\u0930, 2026",
    excerpt: "Income Tax Department Delhi Region invites applications for 119 Sports Quota posts across Tax Assistant, Stenographer Grade II, and MTS. Check eligibility, sport-wise disciplines, and apply online.",
    content: "The **Income Tax Department, Delhi Region**, under the Office of the Principal Chief Commissioner of Income Tax, has invited online applications from meritorious sportspersons for **119 vacancies** under Sports Quota Recruitment 2026. The recruitment offers opportunities for Tax Assistant, Stenographer Grade II and Multi-Tasking Staff (MTS) posts.\n\nThe recruitment notification, issued under F.No. P-342/Pr.CCIT/Sports Quota Recruitment/2026-27/10703, is dated 1 October 2026. Eligible male and female sportspersons with the prescribed educational qualifications and recognised sports achievements can apply for the relevant posts.\n\nThe recruitment includes 44 Tax Assistant vacancies, 9 Stenographer Grade II vacancies and 66 MTS vacancies. The minimum educational qualification ranges from Class 10 pass for MTS to graduation for Tax Assistant. Stenographer Grade II applicants must have passed Class 12 and satisfy the prescribed stenography skill requirements.\n\nThe online application process begins on **17 October 2026**, and the last date to apply is **10 November 2026 up to 11:59 PM**. Candidates must submit their applications online through the official Income Tax Department, Delhi Region website.\n\nThis article covers Income Tax Department Recruitment 2026 in detail, including post-wise vacancies, sports eligibility, educational qualifications, age limits, salary, selection process, skill tests, documents required and step-by-step application instructions.\n\n## Income Tax Department Delhi Recruitment 2026 Overview\n\n| Particular | Details |\n| :--- | :--- |\n| **Recruiting Organisation** | Income Tax Department, Delhi Region |\n| **Recruiting Authority** | Office of the Principal Chief Commissioner of Income Tax |\n| **Recruitment Name** | Sports Quota Recruitment 2026 |\n| **Advertisement Number** | F.No. P-342/Pr.CCIT/Sports Quota Recruitment/2026-27/10703 |\n| **Advertisement Date** | 1 October 2026 |\n| **Total Vacancies** | 119 |\n| **Posts** | Tax Assistant, Stenographer Grade II and MTS |\n| **Recruitment Category** | Meritorious Sports Quota |\n| **Tax Assistant Vacancies** | 44 |\n| **Stenographer Grade II Vacancies** | 9 |\n| **MTS Vacancies** | 66 |\n| **Application Mode** | Online |\n| **Application Start Date** | 17 October 2026 |\n| **Last Date to Apply** | 10 November 2026 (11:59 PM) |\n| **Age Limit** | 18\u201327 years (TA/Steno), 18\u201325 years (MTS) |\n| **Job Location** | Delhi Region |\n| **Official Website** | incometaxdelhi.gov.in |\n\n*Important: This recruitment is exclusively for eligible meritorious sportspersons who satisfy the sports-achievement requirements in the advertisement. Merely possessing the required educational qualification is not sufficient.*\n\n## Income Tax Department Vacancy 2026: Post-Wise Details\n\nA total of 119 vacancies have been announced across three posts:\n\n| Post Name | Vacancies | Pay Level | Pay Scale |\n| :--- | :--- | :--- | :--- |\n| **Tax Assistant** | 44 | Level 4 | \u20b925,500\u2013\u20b981,100 |\n| **Stenographer Grade II** | 9 | Level 4 | \u20b925,500\u2013\u20b981,100 |\n| **Multi-Tasking Staff (MTS)** | 66 | Level 1 | \u20b918,000\u2013\u20b956,900 |\n| **Total** | **119** | | |\n\n## Income Tax Sports Quota Vacancy 2026: Sport-Wise Distribution\n\nThe advertisement provides sport-wise vacancies for male and female candidates across 27 listed disciplines:\n\n| No. | Sport / Discipline | Men | Women | Total |\n| :--- | :--- | :--- | :--- | :--- |\n| 1 | Archery | 1 | 1 | 2 |\n| 2 | Athletics | 8 | 7 | 15 |\n| 3 | Badminton | 2 | 3 | 5 |\n| 4 | Basketball | 1 | 4 | 5 |\n| 5 | Billiards and Snooker | 2 | 1 | 3 |\n| 6 | Bodybuilding | 1 | 0 | 1 |\n| 7 | Boxing | 3 | 3 | 6 |\n| 8 | Chess | 1 | 1 | 2 |\n| 9 | Cricket | 4 | 0 | 4 |\n| 10 | Cycling | 2 | 1 | 3 |\n| 11 | Football | 6 | 0 | 6 |\n| 12 | Golf | 1 | 1 | 2 |\n| 13 | Gymnastics | 1 | 2 | 3 |\n| 14 | Hockey | 7 | 5 | 12 |\n| 15 | Judo | 1 | 1 | 2 |\n| 16 | Kabaddi | 5 | 4 | 9 |\n| 17 | Karate | 1 | 1 | 2 |\n| 18 | Para Sports | 3 | 3 | 6 |\n| 19 | Shooting | 1 | 1 | 2 |\n| 20 | Squash | 1 | 0 | 1 |\n| 21 | Swimming | 1 | 2 | 3 |\n| 22 | Table Tennis | 2 | 2 | 4 |\n| 23 | Tennis | 2 | 2 | 4 |\n| 24 | Triathlon | 1 | 0 | 1 |\n| 25 | Volleyball | 4 | 3 | 7 |\n| 26 | Weightlifting | 2 | 2 | 4 |\n| 27 | Wrestling | 3 | 2 | 5 |\n| | **Total** | **67** | **52** | **119** |\n\n*Note: Athletics has the highest allocation with 15 seats, followed by Hockey with 12 and Kabaddi with 9.*\n\n## Income Tax Department Recruitment 2026 Eligibility Criteria\n\n### 1. Tax Assistant Eligibility (44 Posts)\n* **Educational Qualification:** Bachelor's degree from a recognized university or equivalent.\n* **Skill Test Benchmark:** Data entry speed of **8,000 key depressions per hour (KDPH)** on computer.\n* **Sports Eligibility:** Must fulfill the meritorious sports achievement criteria.\n\n### 2. Stenographer Grade II Eligibility (9 Posts)\n* **Educational Qualification:** 12th class pass or equivalent from a recognized board or university.\n* **Skill Test Requirements:**\n  * **Dictation:** 10 minutes at 80 words per minute (WPM).\n  * **Transcription:** 50 minutes (English) or 65 minutes (Hindi) on computer.\n\n### 3. Multi-Tasking Staff (MTS) Eligibility (66 Posts)\n* **Educational Qualification:** Matriculation (Class 10 pass) or equivalent from a recognized board.\n* **Sports Eligibility:** Must fulfill the meritorious sports achievement criteria.\n\n## Income Tax Sports Quota Eligibility & Order of Preference\n\nThe sports achievement must have been acquired between **1 January 2020 and 15 October 2026**.\n\nThe selection prioritizes candidates according to the official order of preference:\n1. **First Preference:** Candidates who represented India in an international competition with clearance from the Department of Sports, Ministry of Youth Affairs and Sports.\n2. **Second Preference:** Candidates who represented a State or Union Territory in Senior or Junior National Championships conducted by recognized National Sports Federations, or in the National Games organized by the IOA, securing a medal up to 3rd place (Senior National receives preference over Junior).\n3. **Third Preference:** Candidates who represented a recognized university in Inter-University tournaments (AIU/IUSBF) or Khelo India University Games, securing a medal up to 3rd place.\n4. **Fourth Preference:** Candidates who represented a State/UT in Khelo India Youth Games (above 18 years), Khelo India Winter Games, or Khelo India Para Games, securing a medal up to 3rd place.\n5. **Fifth Preference:** Candidates who represented State Schools in national sports conducted by the SGFI, securing a medal up to 3rd place.\n6. **Sixth Preference:** Candidates who represented State/UT/University/School in the specified competitions without winning a medal.\n\n## Income Tax Department Age Limit 2026\n\nAge is calculated as on **31 August 2026**:\n\n| Post Name | Minimum Age | Maximum Age |\n| :--- | :--- | :--- |\n| **Tax Assistant** | 18 years | 27 years |\n| **Stenographer Grade II** | 18 years | 27 years |\n| **Multi-Tasking Staff (MTS)** | 18 years | 25 years |\n\n### Age Relaxation for Meritorious Sportspersons\n* **General / OBC Sportspersons:** Up to 5 years upper-age relaxation.\n* **SC / ST Sportspersons:** Up to 10 years upper-age relaxation.\n\n## Income Tax Department Salary 2026\n\n| Post Name | Pay Level | Pay Scale | Initial Basic Pay |\n| :--- | :--- | :--- | :--- |\n| **Tax Assistant** | Level 4 | \u20b925,500\u2013\u20b981,100 | \u20b925,500 |\n| **Stenographer Grade II** | Level 4 | \u20b925,500\u2013\u20b981,100 | \u20b925,500 |\n| **Multi-Tasking Staff (MTS)** | Level 1 | \u20b918,000\u2013\u20b956,900 | \u20b918,000 |\n\n*Applicable Central Government allowances (DA, HRA, Transport Allowance) apply. Selected candidates will be posted in the Delhi Region.*\n\n## Income Tax Department Recruitment 2026 Selection Process\n\nThe selection process for meritorious sportspersons comprises:\n1. **Application Scrutiny:** Verification of minimum educational qualifications and sports eligibility criteria.\n2. **Shortlisting by Order of Preference:** Evaluation based on the level of tournament, medals won, and recognized federation clearance.\n3. **Ground / Field Proficiency Test:** Trials or proficiency assessment conducted by the department.\n4. **Post-Specific Skill Test:**\n   * **Tax Assistant:** Data entry speed test of 8,000 KDPH.\n   * **Stenographer Grade II:** Shorthand dictation at 80 WPM and transcription test.\n5. **Document Verification & Final Merit List:** Verification of original sports certificates, academic records, and identity proof.\n\n## How to Apply for Income Tax Department Recruitment 2026\n\n* **Step 1: Visit Official Portal:** Go to the official website at [https://www.incometaxdelhi.gov.in/](https://www.incometaxdelhi.gov.in/) and navigate to the **Sports Recruitment** section.\n* **Step 2: Read Official Notification:** Review Advertisement No. `P-342/Pr.CCIT/Sports Quota Recruitment/2026-27/10703` to verify your discipline and tournament eligibility.\n* **Step 3: Online Registration:** Register on the portal with your active mobile number and email ID.\n* **Step 4: Select Post Preferences:** Choose your post preferences (Tax Assistant, Stenographer Grade II, or MTS) based on your educational qualifications.\n* **Step 5: Fill Sports Achievement Details:** Enter details of tournament, federation, medal won, participation dates (between 1 Jan 2020 and 15 Oct 2026), and event category.\n* **Step 6: Upload Sports & Academic Certificates:** Upload scanned copies of sports certificates issued in the prescribed Form 1 to Form 5, 10th/12th/Graduation marksheets, and photo ID.\n* **Step 7: Final Submission:** Verify all details and submit the application before **10 November 2026 at 11:59 PM**. Save the confirmation receipt.\n\n## Important Official Links\n\n| Purpose | Official Link |\n| :--- | :--- |\n| **Income Tax Delhi Official Website** | [https://www.incometaxdelhi.gov.in/](https://www.incometaxdelhi.gov.in/) |\n| **Official Notification PDF** | [View Notification](https://www.incometaxdelhi.gov.in/pdf/whatsnewfiles/101626131322Sports%20Quota%20Advertisement%20(Eng)%202026.pdf) |\n| **Online Application Portal** | [Income Tax Delhi Sports Recruitment](https://www.incometaxdelhi.gov.in/) |\n| **Application Start Date** | 17 October 2026 |\n| **Last Date to Apply** | 10 November 2026 (11:59 PM) |\n\n## Documents Required for Income Tax Sports Quota Recruitment 2026\n\n* Class 10 Certificate & Marksheet (Date of birth proof and MTS qualification)\n* Class 12 Certificate & Marksheet (Stenographer Grade II qualification)\n* Graduation Degree & Marksheets (Tax Assistant qualification)\n* Sports Achievement Certificates (Form 1 for International, Form 2 for National, Form 3 for Inter-University, Form 4 for School Games, Form 5 for National Physical Efficiency)\n* Government-issued Photo ID (Aadhaar, Voter ID, PAN Card)\n* Caste / Category Certificate (if claiming age relaxation)\n* Passport-size Photograph and Signature\n\n## Common Mistakes to Avoid While Applying\n\n1. **Applying Without Recognised Sports Credentials:** Only meritorious sportspersons with recognised national/international/university achievements are eligible.\n2. **Sports Outside the 2020\u20132026 Window:** Only achievements between 1 January 2020 and 15 October 2026 are valid.\n3. **Missing Skill Test Preparation:** Tax Assistant requires 8,000 KDPH typing, while Stenographer requires 80 WPM shorthand.\n4. **Submitting Multiple Forms:** Submit only one application with multiple post preferences. Duplicate applications will be rejected.\n5. **Leaving Application to the Last Day:** The portal closes strictly at 11:59 PM on 10 November 2026.\n\n## Income Tax Department Recruitment 2026 FAQs\n\n**How many vacancies are available in Income Tax Department Delhi Recruitment 2026?**\n\nThere are 119 vacancies under the Sports Quota: 44 for Tax Assistant, 9 for Stenographer Grade II, and 66 for Multi-Tasking Staff (MTS).\n\n**What is the last date to apply?**\n\nThe last date for online application submission is 10 November 2026 up to 11:59 PM.\n\n**Who is eligible to apply for this recruitment?**\n\nOnly meritorious sportspersons who have represented the country, state, university, or school in recognized championships between 1 January 2020 and 15 October 2026.\n\n**What is the educational qualification for Tax Assistant?**\n\nA Bachelor's degree from a recognized university and a data entry speed of 8,000 key depressions per hour (KDPH).\n\n**What is the educational qualification for Stenographer Grade II?**\n\nClass 12 pass and shorthand speed of 80 words per minute (WPM).\n\n**What is the educational qualification for MTS?**\n\nMatriculation (Class 10 pass) from a recognized board.\n\n**What is the age limit?**\n\n18 to 27 years for Tax Assistant and Stenographer Grade II, and 18 to 25 years for MTS as on 31 August 2026, with up to 5 years relaxation for general sportspersons and 10 years for SC/ST sportspersons.\n\n**What is the salary for the advertised posts?**\n\nTax Assistant & Stenographer Grade II carry Pay Level 4 (\u20b925,500\u2013\u20b981,100), while MTS carries Pay Level 1 (\u20b918,000\u2013\u20b956,900).\n\n**Is there a written exam?**\n\nNo conventional written exam is conducted. Selection is based on sports achievement assessment, ground trials, and post-specific skill tests (data entry / stenography).\n\n**Where will selected candidates be posted?**\n\nSelected candidates will be posted in the Income Tax Department, Delhi Region.\n\n## Final Words\n\nThe Income Tax Department Delhi Sports Quota Recruitment 2026 is an outstanding pathway for talented Indian athletes to build a distinguished career in Central Government service while representing the department in sports. Verify your tournament certificates within the 2020\u20132026 eligibility window, check your post preferences, and submit your online application on incometaxdelhi.gov.in before 10 November 2026.\n",
    category: "Jobs",
    tags: ["Income Tax Department", "Sports Quota Jobs", "Tax Assistant", "MTS Recruitment 2026", "Govt Jobs 2026", "Delhi Jobs"]
  }
];
