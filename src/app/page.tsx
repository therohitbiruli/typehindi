import Link from "next/link";
import { PracticeTool } from "../components/PracticeTool";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* 🌟 Premium Hero Section */}
      <section className="bg-slate-950 text-white pt-20 pb-32 border-b border-slate-900 relative overflow-hidden">
        {/* Blurred background image with scale to hide edge artifacts */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 blur-md scale-105 pointer-events-none"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        ></div>
        
        {/* Gradient dark overlay for readability and premium look */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950 pointer-events-none"></div>

        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        
        {/* Glow element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container-main px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Glowing top badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300 text-xs font-semibold mb-6 animate-pulse">
              ✨ सर्वश्रेष्ठ हिंदी टाइपिंग प्लेटफॉर्म
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-indigo-200 leading-tight">
              टाइपिंग से संबंधित सभी उपकरण <br/>
              <span className="bg-gradient-to-r from-primary-400 to-indigo-400 bg-clip-text text-transparent">एक ही स्थान पर</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              निःशुल्क और उपयोग में आसान हिंदी टाइपिंग टूल्स की एक व्यापक सूची। 100% सटीक WPM ट्रैकर, लाइव कीबोर्ड गाइड्स और आकर्षक टाइपिंग गेम्स के साथ अपनी गति बढ़ाएं।
            </p>

            {/* Hero CTA buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/practice" className="px-8 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold text-sm transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/35 hover:-translate-y-0.5">
                अभ्यास शुरू करें (Start Practice)
              </Link>
              <Link href="/game" className="px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all border border-slate-800 hover:-translate-y-0.5">
                टाइपिंग गेम्स खेलें (Play Games)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 Tools Floating Grid */}
      <div className="container-main max-w-6xl px-4 -mt-20 relative z-10 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <Link href="/practice" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-primary-500/40 dark:hover:border-primary-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              ⌨️
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">टाइपिंग अभ्यास</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">InScript Layout speed building practice with keystroke indicators</p>
          </Link>

          <Link href="/test" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              ⏱️
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">टाइपिंग टेस्ट</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Evaluate your typing proficiency with realistic exam conditions</p>
          </Link>

          <Link href="/learn" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              📚
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">टाइपिंग ट्यूटर (सीखें)</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Step-by-step interactive lessons to master the InScript layout</p>
          </Link>

          <Link href="/game" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-purple-500/40 dark:hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              🎮
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">टाइपिंग गेम</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Fun and addictive typing games to build speed and muscle memory</p>
          </Link>

          <Link href="/mangal-font-typing-test" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-rose-500/40 dark:hover:border-rose-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              🅰️
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">मंगल फॉन्ट</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Practice Mangal font typing specifically formatted for exams</p>
          </Link>

          <Link href="/test" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              📜
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">CPCT टेस्ट</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Simulate the Computer Proficiency Certification Test pattern</p>
          </Link>

          <Link href="/learn" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-sky-500/40 dark:hover:border-sky-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              🔍
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">कीबोर्ड लेआउट</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Visual layouts and guides for InScript and Remington layouts</p>
          </Link>

          <Link href="/translators" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-violet-500/40 dark:hover:border-violet-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              🌐
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">ट्रांसलेटर (Translators)</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Instantly translate English or other regional texts into Hindi</p>
          </Link>

          <Link href="/blog" className="bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-slate-800/80 p-6 hover:shadow-xl hover:border-slate-500/40 dark:hover:border-slate-500/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              📰
            </div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1.5">ब्लॉग (लेख)</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-[220px]">Latest news, government exam patterns, and typing tips</p>
          </Link>

        </div>
      </div>

      <section className="pb-20">
        <div className="container-main max-w-6xl px-4 space-y-10">
          
          {/* Main Hindi Typing Practice Container */}
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 shadow-xl shadow-primary-500/5 border-2 border-slate-250 dark:border-slate-800">
             <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
               <span className="w-2.5 h-6 rounded-full bg-primary-600"></span>
               हिंदी टाइपिंग टेस्ट और अभ्यास (Hindi Typing Test)
             </h2>
             <PracticeTool />
          </div>

          {/* Text Dense Content mimicking TypingBaba */}
          <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800/80 shadow-sm p-6 md:p-10 space-y-10">
            
            <div className="border-b border-blue-200 dark:border-gray-800 pb-2 mb-4">
               <h2 className="text-2xl font-normal text-red-600 inline-block">TypeHindi</h2><span className="text-2xl font-normal text-blue-800 dark:text-blue-400">.in</span>
            </div>

            <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed space-y-3">
              <p className="text-red-600 dark:text-red-400 font-medium">प्रिय उपयोगकर्ताओं,</p>
              <p>TypeHindi.in पर आप सभी का स्वागत है, जहाँ हमने आपकी दैनिक कार्य आवश्यकताओं के लिए विभिन्न <i>टाइपिंग-संबंधित उपकरणों</i> को सावधानीपूर्वक संकलित और एकत्रित किया है। इस डिजिटल युग में, तेज और सटीक टाइपिंग कौशल का महत्व बहुत अधिक है। चाहे आप एक छात्र हों, किसी सरकारी कार्यालय में काम करने वाले अधिकारी हों, या एक स्वतंत्र व्यक्ति जो अपने टाइपिंग कौशल को निखारना चाहता हो, आप बिल्कुल निराश नहीं होंगे। जो बात <strong className="text-gray-800 dark:text-gray-200">TypeHindi</strong> को अन्य वेबसाइटों से अलग बनाती है, वह हमारा दृष्टिकोण है। हमने इस वेबसाइट को एक बहुत ही सरल डिज़ाइन और आसान नेविगेशन के साथ बनाया है, जिससे वेबसाइट के हर पेज से हर <strong className="text-gray-800 dark:text-gray-200">टाइपिंग टूल</strong> तक पहुँचा जा सकता है。</p>
            </div>

            <div>
              <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-3 border-b border-gray-100 dark:border-gray-800 pb-2">टाइपिंग कौशल क्यों मायने रखता है? (Why Typing Skills Matter?)</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                आज के इस आधुनिक युग में, चाहे आप कुछ भी कर रहे हों, आपको कभी न कभी कीबोर्ड पर काम करना ही पड़ता है। यदि आपको टाइपिंग नहीं आती है, तो कीबोर्ड पर कुंजियों (keys) को खोजने में आपका काफी समय बर्बाद होगा। टाइपिंग कौशल काम या घर पर आपकी उत्पादकता (productivity) में काफी सुधार करते हैं, आपका ध्यान बढ़ाते हैं, गलतियों को कम करते हैं और आपका बहुमूल्य समय बचाते हैं।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-3 border-b border-gray-100 dark:border-gray-800 pb-2">ऑनलाइन टाइपिंग क्यों सीखें?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                किसी अकादमी में टाइपिंग इंस्ट्रक्टर से <Link href="/learn" className="text-blue-600 dark:text-blue-400 hover:underline">टाइपिंग सीखने</Link> में आपका कीमती समय और ऊर्जा बर्बाद होती है, जिसका उपयोग आप अन्य कार्यों के लिए कर सकते हैं। अपने घर के आराम से <Link href="/learn" className="text-blue-600 dark:text-blue-400 hover:underline">ऑनलाइन टाइपिंग सीखने</Link> से आपको किसी भी समय और अपनी गति से सीखने की सुविधा मिलती है, जो इस प्रतिस्पर्धी दुनिया में एक बहुत बड़ा फायदा है।
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-3 border-b border-gray-100 dark:border-gray-800 pb-2">TypeHindi.in द्वारा प्रदान किए जाने वाले टूल</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">ये TypeHindi.in द्वारा प्रदान किए जाने वाले मुख्य उपकरण हैं।</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-normal text-gray-800 dark:text-gray-200 mb-2">टाइपिंग उपकरण</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-[13px] leading-relaxed">
                    ये टाइपिंग टूल अन्य टाइपिंग वेबसाइटों की तुलना में सबसे उन्नत हैं। यहाँ हमने एक ही स्थान पर इतनी सारी सुविधाएँ प्रदान की हैं कि आपको अपने काम के लिए कहीं और जाने की आवश्यकता नहीं है। हमारे उपकरणों का उपयोग करके आप अपनी हिंदी टाइपिंग स्पीड को आसानी से ट्रैक और बेहतर कर सकते हैं।
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-normal text-gray-800 dark:text-gray-200 mb-2">ऑनलाइन कीबोर्ड</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-[13px] leading-relaxed">
                    ये कीबोर्ड टूल उन उपयोगकर्ताओं के लिए डिज़ाइन किए गए हैं जो अपनी भाषा के कीबोर्ड लेआउट से परिचित नहीं हैं। उदाहरण के लिए, यदि आप हिंदी कीबोर्ड लेआउट नहीं जानते हैं, लेकिन सीधे देवनागरी में टाइप करना चाहते हैं, तो यह टूल आपके लिए है। यहाँ हमने एक <Link href="/mangal-font-typing-test" className="text-blue-600 dark:text-blue-400 hover:underline">ऑनलाइन हिंदी कीबोर्ड</Link> प्रदान किया है जिसे देखकर आप बहुत कुशलता से टाइप कर सकते हैं।
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-normal text-gray-800 dark:text-gray-200 mb-2">टाइपिंग ट्यूटर (सीखें)</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-[13px] leading-relaxed">
                    ये ट्यूटर इंटरनेट पर मिलने वाले सबसे व्यापक टाइपिंग ट्यूटर्स में से एक हैं। हर प्रकार का शिक्षार्थी, चाहे वह नौसिखिया हो या उन्नत, इस टूल का उपयोग करके संतुष्ट होगा। इसे इतने सरल तरीके से डिज़ाइन किया गया है कि टाइपिंग के सभी बुनियादी नियम आपको आसानी से समझ आ जाएंगे।
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-normal text-gray-800 dark:text-gray-200 mb-2">टाइपिंग टेस्ट</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-[13px] leading-relaxed">
                    टाइपिंग टेस्ट उन उपयोगकर्ताओं के लिए डिज़ाइन किए गए हैं जो टाइपिंग में कुशल हो गए हैं लेकिन अपने कौशल का परीक्षण करना चाहते हैं। वेबसाइट पर मुख्य रूप से <Link href="/test" className="text-blue-600 dark:text-blue-400 hover:underline">हिंदी टाइपिंग टेस्ट</Link> और <Link href="/mangal-font-typing-test" className="text-blue-600 dark:text-blue-400 hover:underline">मंगल फॉन्ट टाइपिंग टेस्ट</Link> उपलब्ध हैं। हमने अभ्यास मोड (Practice Mode) और परीक्षा मोड (Exam Mode) दोनों प्रदान किए हैं।
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-normal text-gray-800 dark:text-gray-200 mb-2">टाइपिंग गेम</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-[13px] leading-relaxed">
                    यहाँ हमने हिंदी और अंग्रेजी उपयोगकर्ताओं के लिए एक लोकप्रिय <Link href="/game" className="text-blue-600 dark:text-blue-400 hover:underline">वर्ड-फॉलिंग (शब्द-पतन) गेम</Link> दिया है। यह गेम शानदार तरीके से आपके टाइपिंग कौशल को बढ़ाता है और मनोरंजन भी प्रदान करता है। इस गेम का मुख्य उद्देश्य स्क्रीन पर गिरते हुए शब्दों को जमीन पर छूने से पहले सही ढंग से टाइप करके नष्ट करना है।
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-normal text-gray-800 dark:text-gray-200 mb-2">फ़ॉन्ट कन्वर्टर्स</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-[13px] leading-relaxed">
                    हिंदी उपयोगकर्ताओं के लिए कई फ़ॉन्ट कन्वर्टर दिए गए हैं, जैसे कि क्रुतिदेव से यूनिकोड (KrutiDev to Unicode), चाणक्य से यूनिकोड, और इसके विपरीत। आप आसानी से अपनी पुरानी फाइलों को आधुनिक फॉन्ट में बदल सकते हैं।
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-light text-gray-800 dark:text-gray-200 mb-3 border-b border-gray-100 dark:border-gray-800 pb-2">अक्सर पूछे जाने वाले प्रश्न (FAQ)</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-red-600 dark:text-red-400 font-bold">Q:</span> <span className="text-gray-800 dark:text-gray-200">क्या TypeHindi का उपयोग निःशुल्क है?</span><br />
                  <span className="text-blue-700 dark:text-blue-400 font-bold">A:</span> <span className="text-gray-600 dark:text-gray-400">बिल्कुल। हम आपसे किसी भी चीज़ के लिए कोई शुल्क नहीं लेते हैं। इसका उपयोग करना पूरी तरह से निःशुल्क है।</span>
                </div>
                <div>
                  <span className="text-red-600 dark:text-red-400 font-bold">Q:</span> <span className="text-gray-800 dark:text-gray-200">बिना देखे टाइपिंग (Touch Typing) सीखने में कितना समय लगता है?</span><br />
                  <span className="text-blue-700 dark:text-blue-400 font-bold">A:</span> <span className="text-gray-600 dark:text-gray-400">यह इस बात पर निर्भर करता है कि आप कितने घंटे अभ्यास करते हैं। उदाहरण के लिए, यदि आप रोज़ाना 15-30 मिनट अभ्यास करते हैं, तो आपको 2-4 सप्ताह में काफी सुधार देखने को मिलेगा।</span>
                </div>
                <div>
                  <span className="text-red-600 dark:text-red-400 font-bold">Q:</span> <span className="text-gray-800 dark:text-gray-200">क्या मैं इस वेबसाइट का उपयोग आधिकारिक सरकारी टाइपिंग टेस्ट की तैयारी के लिए कर सकता हूँ?</span><br />
                  <span className="text-blue-700 dark:text-blue-400 font-bold">A:</span> <span className="text-gray-600 dark:text-gray-400">हाँ, इस वेबसाइट ने SSC, रेलवे, हाई कोर्ट आदि जैसी हर सरकारी परीक्षा के टाइपिंग टेस्ट के लिए सुविधाएँ प्रदान की हैं। हमने WPM और सटीकता की गणना के लिए उन्हीं तरीकों का उपयोग किया है जो वास्तविक परीक्षाओं में उपयोग किए जाते हैं।</span>
                </div>
                <div>
                  <span className="text-red-600 dark:text-red-400 font-bold">Q:</span> <span className="text-gray-800 dark:text-gray-200">क्या मेरे बच्चे इस वेबसाइट पर अभ्यास कर सकते हैं?</span><br />
                  <span className="text-blue-700 dark:text-blue-400 font-bold">A:</span> <span className="text-gray-600 dark:text-gray-400">निश्चित रूप से, इस टाइपिंग वेबसाइट का डिज़ाइन बहुत ही सरल है ताकि हर उम्र का उपयोगकर्ता इसका लाभ उठा सके।</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 p-4 border-l-4 border-l-red-500 dark:border-l-red-600 bg-gray-50 dark:bg-gray-800">
              <h3 className="text-lg font-light text-gray-800 dark:text-gray-200 mb-2">हमारे उपयोगकर्ताओं की प्रतिक्रिया</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p><strong className="text-gray-800 dark:text-gray-200">"केवल दो महीनों में मेरी स्पीड 30 WPM से 70 WPM हो गई। इस साइट ने टाइपिंग सीखना आसान और मजेदार बना दिया!"</strong> — नेहा के., कॉलेज छात्रा</p>
                <p><strong className="text-gray-800 dark:text-gray-200">"प्रोग्रेस ट्रैकिंग ने मुझे मेरे सरकारी टाइपिंग टेस्ट की तैयारी में बहुत मदद की। मैंने अच्छे अंकों से परीक्षा पास की!"</strong> — राकेश टी., नौकरी तलाशने वाला</p>
                <p><strong className="text-gray-800 dark:text-gray-200">"हमारी पूरी क्लास इस प्लेटफॉर्म का उपयोग करती है। यह उपयोग में आसान है और छात्रों को जोड़े रखता है।"</strong> — प्रिया डी., स्कूल शिक्षिका</p>
              </div>
            </div>
            
            <div className="border-t border-gray-100 dark:border-gray-800 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
              हमारी वेबसाइट पर आने के लिए धन्यवाद...... 🎯
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
