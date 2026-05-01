import Link from "next/link";
import { PracticeTool } from "../components/PracticeTool";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Practice Tool */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-950 pt-6 md:pt-8 pb-12">
        <div className="container-main relative z-10">

          
          <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-6 sm:p-10 shadow-2xl shadow-primary-500/10 border border-gray-100 dark:border-gray-800">
            <PracticeTool />
          </div>
        </div>
      </section>

      {/* Detailed Description Section (1000-word equivalent content) */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-main">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">सफलता के लिए आवश्यक सब कुछ</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              TypeHindi आपको एक पेशेवर हिंदी टाइपिस्ट बनने में मदद करने के लिए उपकरणों का एक संपूर्ण सूट (suite) प्रदान करता है।
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Practice Module */}
            <div className="space-y-6">
              <div className="h-16 w-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 text-3xl mb-6 shadow-sm">
                ⌨️
              </div>
              <h3 className="text-2xl font-bold">1. टाइपिंग अभ्यास (Practice Module)</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                हमारे प्लेटफॉर्म का मुख्य हिस्सा, अभ्यास मॉड्यूल, इनस्क्रिप्ट कीबोर्ड लेआउट में महारत हासिल करने वाले व्यक्तियों के लिए सावधानीपूर्वक डिज़ाइन किया गया है। 
                चाहे आप शुरुआत कर रहे हों या एक उन्नत टाइपिस्ट हों, यह अनुभाग कठिनाई स्तरों—सरल, मध्यम और कठिन—के आधार पर अनगिनत कस्टम पैराग्राफ प्रदान करता है।
                <br /><br />
                हमारा वास्तविक समय का टाइपिंग इंजन बिना किसी रुकावट के आपके कीस्ट्रोक्स, गति (WPM), और सटीकता को ट्रैक करता है। 
                यह सही अक्षरों को दिखाता है और तुरंत आपको त्रुटियों के प्रति सचेत करता है, जिससे स्पर्श-टाइपिंग (touch-typing) की अच्छी आदतें बनती हैं। यह सरकारी प्रतियोगी परीक्षाओं की तैयारी कर रहे छात्रों और कार्यालय के पेशेवरों के लिए एकदम सही प्रशिक्षण स्थल है।
              </p>
              <Link href="/practice" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                टाइपिंग अभ्यास शुरू करें →
              </Link>
            </div>

            {/* Learn Section */}
            <div className="space-y-6">
              <div className="h-16 w-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-3xl mb-6 shadow-sm">
                📚
              </div>
              <h3 className="text-2xl font-bold">2. मूल बातें सीखें (Learn the Basics)</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                यदि आपने पहले कभी हिंदी में टाइप नहीं किया है, तो सीधा अभ्यास करना कठिन हो सकता है। 
                इसलिए हमने 'सीखें' (Learn) अनुभाग बनाया है। यह निर्देशित पाठ्यक्रम इनस्क्रिप्ट कीबोर्ड लेआउट को आसान, चरण-दर-चरण पाठों में विभाजित करता है।
                <br /><br />
                आप 'होम रो' (Home Row) सीखने से शुरुआत करेंगे। इसके बाद निर्देशित पाठों में ऊपरी, निचली पंक्तियों और शिफ्ट कुंजियों (Shift Keys) का अभ्यास कराया जाता है। 
                हम मात्राओं (vowels) और जटिल संयुक्त अक्षरों (Sanyuktakshar) के लिए विशेष पाठ भी प्रदान करते हैं, जिन्हें शुरुआत में सीखना अक्सर चुनौतीपूर्ण होता है। 
                इस तरह आप बिना देखे टाइप करने (Touch Typing) की सही तकनीक सीख सकते हैं।
              </p>
              <Link href="/learn" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                सीखना प्रारंभ करें →
              </Link>
            </div>

            {/* Game Section */}
            <div className="space-y-6">
              <div className="h-16 w-16 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 text-3xl mb-6 shadow-sm">
                🎮
              </div>
              <h3 className="text-2xl font-bold">3. इंटरैक्टिव टाइपिंग गेम</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                सीखना उबाऊ नहीं होना चाहिए। हमारा टाइपिंग गेम आपके अभ्यास की दिनचर्या में मज़ा और रोमांच भर देता है। 
                इसमें स्क्रीन के ऊपर से शब्द गिरते हैं, और जमीन पर गिरने से पहले आपको उन्हें सही ढंग से टाइप करना होता है।
                <br /><br />
                जैसे-जैसे आपका स्कोर बढ़ता है, शब्दों के गिरने की गति तेज हो जाती है, जो आपके प्रतिक्रिया समय (reaction time) को चुनौती देती है। 
                अब आप शब्द, प्रतीक (symbols) या पूरे वाक्यों के साथ अभ्यास करने का विकल्प चुन सकते हैं। आपके पास 3 जीवन (lives) होते हैं। यह तनाव कम करने के साथ-साथ आपकी कीबोर्ड पर उंगलियों की गति को तेजी से सुधारने का एक शानदार तरीका है।
              </p>
              <Link href="/game" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
                गेम खेलें →
              </Link>
            </div>

            {/* Typing Test */}
            <div className="space-y-6">
              <div className="h-16 w-16 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 text-3xl mb-6 shadow-sm">
                ⏱️
              </div>
              <h3 className="text-2xl font-bold">4. मानकीकृत टाइपिंग टेस्ट</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                जब आप दबाव में अपनी वास्तविक गति का मूल्यांकन करने के लिए तैयार हों, तो हमारा टाइपिंग टेस्ट आपको परीक्षा जैसा माहौल प्रदान करता है। 
                आप 1 से 10 मिनट की समयावधि चुन सकते हैं। इसमें दिए गए पैराग्राफ में विभिन्न विषयों और समाचारों के अंश होते हैं ताकि आपको वास्तविक दुनिया की टाइपिंग का अनुभव मिल सके।
                <br /><br />
                टेस्ट पूरा होने पर आपको एक विस्तृत रिपोर्ट कार्ड मिलता है। यह आपके कुल WPM, शुद्ध WPM और सटीकता प्रतिशत (Accuracy Percentage) को दर्शाता है। 
                चूंकि टेस्ट के दौरान समय सीमा होती है, यह आपकी टाइपिंग गति का अंतिम बेंचमार्क है और यह प्रमाणित करता है कि आप अपनी पेशेवर परीक्षाओं के लिए तैयार हैं।
              </p>
              <Link href="/test" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                टेस्ट दें →
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why TypeHindi is the Best Section */}
      <section className="py-24 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">TypeHindi हिंदी टाइपिंग सीखने के लिए सर्वश्रेष्ठ क्यों है?</h2>
            
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 space-y-6">
              <p>
                आज के प्रतिस्पर्धी युग में, विशेष रूप से भारत में सरकारी नौकरियों के लिए, हिंदी टाइपिंग एक अनिवार्य कौशल बन गया है। SSC CGL, CHSL, MTS, Stenographer, और विभिन्न राज्य स्तरीय LDC (Lower Division Clerk) परीक्षाओं में सफलता प्राप्त करने के लिए न केवल गति बल्कि सटीकता भी अत्यंत महत्वपूर्ण है। TypeHindi.in को इन्ही आवश्यकताओं को ध्यान में रखकर विकसित किया गया है।
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1. वैज्ञानिक और उपयोगकर्ता के अनुकूल इंटरफ़ेस</h3>
              <p>
                हमारा प्लेटफ़ॉर्म आधुनिक वेब तकनीकों पर आधारित है जो आपको बिना किसी अंतराल (lag) के एक सुचारू अनुभव प्रदान करता है। इंटरैक्टिव कीबोर्ड मार्गदर्शन आपको प्रत्येक कीस्ट्रोक के लिए सही उंगली की स्थिति बताता है, जो स्पर्श-टाइपिंग (Touch Typing) सीखने का सबसे प्रभावी तरीका है।
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">2. परीक्षा-उन्मुख अभ्यास सामग्री</h3>
              <p>
                TypeHindi पर उपलब्ध सभी अनुच्छेद (paragraphs) वास्तविक सरकारी परीक्षा पत्रों और आधिकारिक सूचनाओं से प्रेरित हैं। हमने स्टेनोग्राफर और एलडीसी परीक्षाओं के लिए विशेष रूप से कानूनी, प्रशासनिक और सामान्य ज्ञान आधारित सामग्री शामिल की है, ताकि आप परीक्षा के माहौल से पहले ही परिचित हो सकें।
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">3. विस्तृत प्रदर्शन विश्लेषण (Analytics)</h3>
              <p>
                हम केवल आपकी गति (WPM) नहीं दिखाते, बल्कि हम आपकी शुद्ध गति (Net Speed), कुल त्रुटियाँ, और सटीकता प्रतिशत का भी गहन विश्लेषण प्रदान करते हैं। यह आपको अपनी कमजोरियों को पहचानने और उन पर काम करने में मदद करता है। हमारा 'Daily Challenge' आपको हर दिन बेहतर बनने के लिए प्रेरित करता है।
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">4. इनस्क्रिप्ट (InScript) कीबोर्ड पर विशेष ध्यान</h3>
              <p>
                भारत सरकार ने इनस्क्रिप्ट को मानक कीबोर्ड लेआउट घोषित किया है। TypeHindi पूरी तरह से इनस्क्रिप्ट लेआउट को समर्पित है, जिससे यह सुनिश्चित होता है कि आप वही सीख रहे हैं जो परीक्षाओं में माँगा जाता है। यूनिकोड आधारित होने के कारण, यहाँ सीखा गया कौशल हर डिजिटल प्लेटफ़ॉर्म पर काम आता है।
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">5. पूर्णतः सुरक्षित और निःशुल्क</h3>
              <p>
                TypeHindi का उपयोग करने के लिए आपको किसी पंजीकरण या लॉगिन की आवश्यकता नहीं है। आपका डेटा आपके ब्राउज़र में ही रहता है। हम एक विज्ञापन-समर्थित मॉडल पर काम करते हैं ताकि हम इस उच्च गुणवत्ता वाली सेवा को हमेशा के लिए आपके लिए निःशुल्क रख सकें।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900">
        <div className="container-main max-w-4xl">
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-3">हिंदी टाइपिंग सीखने में कितने दिन लगते हैं?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                यदि आप मन लगाकर प्रतिदिन 1-2 घंटे अभ्यास करते हैं, तो आप लगभग 15 से 20 दिनों में कीबोर्ड के सभी अक्षरों को धीरे-धीरे बिना देखे टाइप करना सीख सकते हैं। लेकिन एक अच्छी टाइपिंग स्पीड (30-40 WPM) प्राप्त करने के लिए आपको 2 से 3 महीने का नियमित अभ्यास चाहिए।
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-3">सरकारी परीक्षाओं के लिए कौन सा कीबोर्ड लेआउट सबसे अच्छा है?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                SSC, CGL, CHSL, और अन्य सरकारी परीक्षाओं के लिए 'इनस्क्रिप्ट' (InScript) कीबोर्ड लेआउट सबसे अच्छा और प्रामाणिक माना जाता है क्योंकि यह भारत सरकार द्वारा निर्धारित मानक है। TypeHindi भी मुख्य रूप से इनस्क्रिप्ट लेआउट पर आधारित है।
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-3">मेरी टाइपिंग स्पीड (WPM) कैसे बढ़ेगी?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                टाइपिंग स्पीड बढ़ाने का सबसे बेहतर तरीका लगातार और अनुशासित अभ्यास है। बैकस्पेस (Backspace) का कम से कम उपयोग करें, कीबोर्ड को देखे बिना टाइप करने (Touch Typing) की आदत डालें, और शुरुआत में अपनी गति के बजाय सटीकता (Accuracy) पर ध्यान केंद्रित करें।
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
