import Link from "next/link";
import { PracticeTool } from "../components/PracticeTool";
import { blogs } from "../data/blogs";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Practice Tool */}
      <section className="bg-white dark:bg-gray-900 pt-6 md:pt-8 pb-12 border-b border-gray-200 dark:border-gray-800">
        <div className="container-main">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">ऑनलाइन हिंदी टाइपिंग टेस्ट और अभ्यास</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">SSC, CPCT और अन्य परीक्षाओं के लिए इनस्क्रिप्ट लेआउट में हिंदी टाइपिंग का अभ्यास करें।</p>
          </div>
          <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded p-4 shadow-sm">
            <PracticeTool />
          </div>
        </div>
      </section>

      {/* Detailed Description Section (1000-word equivalent content) */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-main">
          <header className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">सफलता के लिए आवश्यक सब कुछ</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              टाइपहिंदी आपको एक पेशेवर हिंदी टाइपिस्ट बनने में मदद करने के लिए उपकरणों का एक संपूर्ण सूट प्रदान करता है।
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Practice Module */}
            <div className="space-y-6">
              <div className="h-16 w-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 text-3xl mb-6 shadow-sm">
                ⌨️
              </div>
              <h3 className="text-2xl font-bold">1. टाइपिंग अभ्यास</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                हमारे प्लेटफॉर्म का मुख्य हिस्सा, अभ्यास मॉड्यूल, इनस्क्रिप्ट कीबोर्ड लेआउट में महारत हासिल करने वाले व्यक्तियों के लिए सावधानीपूर्वक डिज़ाइन किया गया है। 
                चाहे आप शुरुआत कर रहे हों या एक उन्नत टाइपिस्ट हों, यह अनुभाग कठिनाई स्तरों—सरल, मध्यम और कठिन—के आधार पर अनगिनत कस्टम पैराग्राफ प्रदान करता है।
                <br /><br />
                हमारा वास्तविक समय का टाइपिंग इंजन बिना किसी रुकावट के आपके कीस्ट्रोक्स, गति और सटीकता को ट्रैक करता है। 
                यह सही अक्षरों को दिखाता है और तुरंत आपको त्रुटियों के प्रति सचेत करता है, जिससे बिना देखे टाइप करने की अच्छी आदतें बनती हैं। यह सरकारी प्रतियोगी परीक्षाओं की तैयारी कर रहे छात्रों और कार्यालय के पेशेवरों के लिए एकदम सही प्रशिक्षण स्थल है।
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
              <h3 className="text-2xl font-bold">2. मूल बातें सीखें</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                यदि आपने पहले कभी हिंदी में टाइप नहीं किया है, तो सीधा अभ्यास करना कठिन हो सकता है। 
                इसलिए हमने 'सीखें' (Learn) अनुभाग बनाया है। यह निर्देशित पाठ्यक्रम इनस्क्रिप्ट कीबोर्ड लेआउट को आसान, चरण-दर-चरण पाठों में विभाजित करता है।
                <br /><br />
                आप 'होम रो' सीखने से शुरुआत करेंगे। इसके बाद निर्देशित पाठों में ऊपरी, निचली पंक्तियों और शिफ्ट कुंजियों का अभ्यास कराया जाता है। 
                हम मात्राओं और जटिल संयुक्त अक्षरों के लिए विशेष पाठ भी प्रदान करते हैं, जिन्हें शुरुआत में सीखना अक्सर चुनौतीपूर्ण होता है। 
                इस तरह आप बिना देखे टाइप करने की सही तकनीक सीख सकते हैं।
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
                जैसे-जैसे आपका स्कोर बढ़ता है, शब्दों के गिरने की गति तेज हो जाती है, जो आपके प्रतिक्रिया समय को चुनौती देती है। 
                अब आप शब्द, प्रतीक या पूरे वाक्यों के साथ अभ्यास करने का विकल्प चुन सकते हैं। आपके पास 3 जीवन होते हैं। यह तनाव कम करने के साथ-साथ आपकी कीबोर्ड पर उंगलियों की गति को तेजी से सुधारने का एक शानदार तरीका है।
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
                टेस्ट पूरा होने पर आपको एक विस्तृत रिपोर्ट कार्ड मिलता है। यह आपके कुल शब्द प्रति मिनट, शुद्ध शब्द प्रति मिनट और सटीकता प्रतिशत को दर्शाता है। 
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2">टाइपहिंदी टाइपिंग सीखने के लिए सर्वश्रेष्ठ क्यों है?</h2>
            
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 space-y-6">
              <p>
                आज के प्रतिस्पर्धी युग में, विशेष रूप से भारत में सरकारी नौकरियों के लिए, हिंदी टाइपिंग एक अनिवार्य कौशल बन गया है। SSC CGL, CHSL, MTS, स्टेनोग्राफर, और विभिन्न राज्य स्तरीय LDC परीक्षाओं में सफलता प्राप्त करने के लिए न केवल गति बल्कि सटीकता भी अत्यंत महत्वपूर्ण है। टाइपहिंदी को इन्ही आवश्यकताओं को ध्यान में रखकर विकसित किया गया है।
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1. वैज्ञानिक और उपयोगकर्ता के अनुकूल इंटरफ़ेस</h3>
              <p>
                हमारा प्लेटफ़ॉर्म आधुनिक वेब तकनीकों पर आधारित है जो आपको बिना किसी अंतराल के एक सुचारू अनुभव प्रदान करता है। इंटरैक्टिव कीबोर्ड मार्गदर्शन आपको प्रत्येक कीस्ट्रोक के लिए सही उंगली की स्थिति बताता है, जो बिना देखे टाइप करने सीखने का सबसे प्रभावी तरीका है।
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">2. परीक्षा-उन्मुख अभ्यास सामग्री</h3>
              <p>
                TypeHindi पर उपलब्ध सभी अनुच्छेद (paragraphs) वास्तविक सरकारी परीक्षा पत्रों और आधिकारिक सूचनाओं से प्रेरित हैं। हमने स्टेनोग्राफर और एलडीसी परीक्षाओं के लिए विशेष रूप से कानूनी, प्रशासनिक और सामान्य ज्ञान आधारित सामग्री शामिल की है, ताकि आप परीक्षा के माहौल से पहले ही परिचित हो सकें।
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">3. विस्तृत प्रदर्शन विश्लेषण</h3>
              <p>
                हम केवल आपकी गति नहीं दिखाते, बल्कि हम आपकी शुद्ध गति, कुल त्रुटियाँ, और सटीकता प्रतिशत का भी गहन विश्लेषण प्रदान करते हैं। यह आपको अपनी कमजोरियों को पहचानने और उन पर काम करने में मदद करता है। हमारा 'दैनिक लक्ष्य' आपको हर दिन बेहतर बनने के लिए प्रेरित करता है।
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">4. इनस्क्रिप्ट कीबोर्ड पर विशेष ध्यान</h3>
              <p>
                भारत सरकार ने इनस्क्रिप्ट को मानक कीबोर्ड लेआउट घोषित किया है। टाइपहिंदी पूरी तरह से इनस्क्रिप्ट लेआउट को समर्पित है, जिससे यह सुनिश्चित होता है कि आप वही सीख रहे हैं जो परीक्षाओं में माँगा जाता है। यूनिकोड आधारित होने के कारण, यहाँ सीखा गया कौशल हर डिजिटल प्लेटफ़ॉर्म पर काम आता है।
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">5. पूर्णतः सुरक्षित और निःशुल्क</h3>
              <p>
                टाइपहिंदी का उपयोग करने के लिए आपको किसी पंजीकरण या लॉगिन की आवश्यकता नहीं है। आपका डेटा आपके ब्राउज़र में ही रहता है। हम एक विज्ञापन-समर्थित मॉडल पर काम करते हैं ताकि हम इस उच्च गुणवत्ता वाली सेवा को हमेशा के लिए आपके लिए निःशुल्क रख सकें।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Massive SEO Content Section */}
      <section className="py-12 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="container-main">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">हिंदी टाइपिंग टूल का अवलोकन</h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>सबसे व्यापक ऑनलाइन हिंदी टाइपिंग टेस्ट प्लेटफॉर्म पर आपका स्वागत है। यह सॉफ़्टवेयर प्रामाणिक इनस्क्रिप्ट (InScript) लेआउट का उपयोग करता है, जिसे भारत सरकार द्वारा SSC, CHSL, CGL और राज्य पुलिस परीक्षाओं सहित सभी आधिकारिक कार्यों और परीक्षाओं के लिए अनिवार्य किया गया है।</p>
                <p>अपनी टाइपिंग सुधारने के लिए आप इस टूल का उपयोग कैसे कर सकते हैं:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>अपना समय और कठिनाई स्तर चुनें:</strong> 1, 5 या 10 मिनट के टेस्ट में से चुनें। आपको यथार्थवादी अभ्यास देने के लिए अनुच्छेद वास्तविक परीक्षा पत्रों से लिए गए हैं।</li>
                  <li><strong>बिल्कुल वैसा ही टाइप करें जैसा आप देखते हैं:</strong> हमारा रियल-टाइम इंजन हर कीस्ट्रोक को मान्य करता है। हरा रंग सही अक्षरों को दर्शाता है, जबकि लाल रंग त्रुटियों को दर्शाता है।</li>
                  <li><strong>अपने प्रदर्शन को ट्रैक करें:</strong> टेस्ट के अंत में, मानक परीक्षा नियमों के आधार पर आपके WPM (शब्द प्रति मिनट) और सटीकता प्रतिशत की गणना की जाती है।</li>
                </ul>
                <p>हमारे टूल को किसी सॉफ़्टवेयर इंस्टॉलेशन या फ़ॉन्ट डाउनलोड की आवश्यकता नहीं है। यह आपके ब्राउज़र में तुरंत काम करता है और आपके सर्वश्रेष्ठ स्कोर को सुरक्षित रखता है।</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">हिंदी अक्षर कैसे टाइप करें (इनस्क्रिप्ट)?</h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>इनस्क्रिप्ट (InScript) कीबोर्ड लेआउट भारतीय मानक ब्यूरो (BIS) द्वारा मानकीकृत है। यह भारतीय लिपियों की ध्वन्यात्मक प्रकृति पर आधारित एक तार्किक लेआउट है। लिप्यंतरण (transliteration) टूल के विपरीत जहाँ आप हिंदी प्राप्त करने के लिए अंग्रेजी में टाइप करते हैं, इनस्क्रिप्ट हिंदी अक्षरों को सीधे कुंजियों से जोड़ता है।</p>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-4">स्वर और मात्राएँ</h3>
                <p>स्वर कीबोर्ड के बाईं ओर मैप किए गए हैं। कुंजी को सीधे दबाने से 'मात्रा' मिलती है, और SHIFT + कुंजी दबाने से स्वतंत्र स्वर मिलता है।</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>a</strong> = ो / <strong>A</strong> = ओ</li>
                  <li><strong>s</strong> = े / <strong>S</strong> = ए</li>
                  <li><strong>d</strong> = ् (Halant) / <strong>D</strong> = अ</li>
                  <li><strong>f</strong> = ि / <strong>F</strong> = इ</li>
                  <li><strong>g</strong> = ु / <strong>G</strong> = उ</li>
                </ul>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-4">व्यंजन</h3>
                <p>व्यंजन कीबोर्ड के दाईं ओर मैप किए गए हैं। उन्हें उनकी ध्वन्यात्मक श्रेणियों (कंठ्य, तालव्य, दंत्य, आदि) के अनुसार तार्किक रूप से व्यवस्थित किया गया है।</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>k</strong> = क / <strong>K</strong> = ख</li>
                  <li><strong>i</strong> = ग / <strong>I</strong> = घ</li>
                  <li><strong>;</strong> = च / <strong>:</strong> = छ</li>
                  <li><strong>p</strong> = ज / <strong>P</strong> = झ</li>
                  <li><strong>l</strong> = त / <strong>L</strong> = थ</li>
                </ul>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-4">संयुक्त अक्षर</h3>
                <p>संयुक्त अक्षर टाइप करने के लिए हलंत (्) कुंजी का उपयोग करें, जो 'd' पर स्थित है।</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>क्ष = क + ् + ष (k + d + &lt;)</li>
                  <li>त्र = त + ् + र (l + d + j)</li>
                  <li>ज्ञ = ज + ् + ञ (p + d + {'}'})</li>
                  <li>श्र = श + ् + र (M + d + j)</li>
                  <li>पूर्ण विराम (।) = SHIFT + . (&gt;)</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">हिंदी टाइपिंग क्यों सीखें?</h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>आज के डिजिटल परिदृश्य में भारत में हिंदी टाइपिंग एक आवश्यक कौशल है। डिजिटल प्रशासन की दिशा में सरकार के प्रयासों के साथ, सभी आधिकारिक दस्तावेज, परिपत्र और संचार हिंदी में संसाधित किए जाते हैं।</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>सरकारी नौकरियाँ:</strong> SSC LDC, UDC, कोर्ट क्लर्क और राज्य लोक सेवा आयोग की नौकरियों के लिए यह एक अनिवार्य आवश्यकता है।</li>
                  <li><strong>डेटा एंट्री और फ्रीलांसिंग:</strong> मीडिया, अनुवाद और सामग्री निर्माण उद्योगों में तेज हिंदी टाइपिस्टों की भारी मांग है।</li>
                  <li><strong>उत्पादकता:</strong> धीमे लिप्यंतरण सॉफ़्टवेयर पर निर्भर रहने के बजाय, मूल इनस्क्रिप्ट टाइपिंग 40+ WPM से अधिक गति पर पेशेवर, त्रुटि-मुक्त दस्तावेज़ निर्माण की अनुमति देती है।</li>
                </ul>
              </div>
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
                SSC, CGL, CHSL, और अन्य सरकारी परीक्षाओं के लिए 'इनस्क्रिप्ट' कीबोर्ड लेआउट सबसे अच्छा और प्रामाणिक माना जाता है क्योंकि यह भारत सरकार द्वारा निर्धारित मानक है। टाइपहिंदी भी मुख्य रूप से इनस्क्रिप्ट लेआउट पर आधारित है।
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-3">मेरी टाइपिंग स्पीड (WPM) कैसे बढ़ेगी?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                टाइपिंग स्पीड बढ़ाने का सबसे बेहतर तरीका लगातार और अनुशासित अभ्यास है। बैकस्पेस का कम से कम उपयोग करें, कीबोर्ड को देखे बिना टाइप करने की आदत डालें, और शुरुआत में अपनी गति के बजाय सटीकता पर ध्यान केंद्रित करें।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="container-main">
          <header className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">नवीनतम लेख और मार्गदर्शिकाएँ</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              टाइपिंग स्पीड बढ़ाने और सरकारी परीक्षाओं की तैयारी के लिए हमारे विशेषज्ञों द्वारा लिखे गए ज्ञानवर्धक लेख पढ़ें।
            </p>
          </header>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {blogs.slice(0, 6).map((blog) => (
              <Link 
                key={blog.slug} 
                href={`/learn/${blog.slug}`}
                className="group flex flex-col h-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded overflow-hidden hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="p-4 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <span className="text-xs text-gray-500">{blog.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors leading-tight">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-6 flex-grow">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center text-primary-600 dark:text-primary-400 font-bold text-sm">
                    पूरा लेख पढ़ें <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-bold hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all shadow-sm"
            >
              सभी लेख देखें
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
