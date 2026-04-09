import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { AdPlaceholder } from "../../components/AdPlaceholder";

export const metadata: Metadata = {
  title: "About TypeHindi - Free Hindi Typing Practice Platform",
  description: "Learn about TypeHindi.in - a free online Hindi typing practice platform for students preparing for SSC, CGL, CHSL and other government exams.",
};

export default function AboutPage() {
  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <AdPlaceholder position="top" />

      <h1 className="heading-1 mb-6">TypeHindi के बारे में (About TypeHindi)</h1>

      <div className="prose max-w-none text-gray-600 dark:text-gray-300 space-y-4">
        <h2 className="heading-2">हमारा मिशन (Our Mission)</h2>
        <p>
          TypeHindi.in एक निःशुल्क ऑनलाइन हिंदी टाइपिंग अभ्यास प्लेटफॉर्म है जो विद्यार्थियों और कार्यालय कर्मचारियों को InScript कीबोर्ड लेआउट पर हिंदी टाइपिंग सीखने और उसमें दक्षता प्राप्त करने में सहायता करता है। हमारा उद्देश्य हिंदी टाइपिंग को सरल, सुलभ और प्रभावी बनाना है।
        </p>

        <h2 className="heading-2 mt-6">हम क्या प्रदान करते हैं (What We Offer)</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>अभ्यास मोड (Practice Mode):</strong> विभिन्न कठिनाई स्तरों (सरल, मध्यम, कठिन) पर अनेक हिंदी अनुच्छेदों के साथ टाइपिंग अभ्यास। वास्तविक समय में WPM, सटीकता और त्रुटि ट्रैकिंग।</li>
          <li><strong>सीखने का मोड (Learning Mode):</strong> चरणबद्ध पाठ्यक्रम — स्वर, व्यंजन, मात्राएँ और संयुक्त अक्षर। इंटरैक्टिव कीबोर्ड के साथ प्रत्येक कुंजी का दृश्य मार्गदर्शन।</li>
          <li><strong>टेस्ट मोड (Test Mode):</strong> SSC और अन्य सरकारी परीक्षाओं के पैटर्न पर आधारित टाइमड टेस्ट। विस्तृत परिणाम रिपोर्ट।</li>
          <li><strong>गेम मोड (Game Mode):</strong> मनोरंजक टाइपिंग गेम जो आपकी टाइपिंग गति बढ़ाने में सहायक है।</li>
          <li><strong>दैनिक चुनौती (Daily Challenge):</strong> प्रतिदिन नई चुनौती के साथ अपनी प्रगति को ट्रैक करें।</li>
        </ul>

        <h2 className="heading-2 mt-6">किसके लिए उपयोगी? (Who Is This For?)</h2>
        <p>TypeHindi.in निम्नलिखित के लिए विशेष रूप से उपयोगी है:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>SSC CGL, CHSL, MTS परीक्षा के अभ्यर्थी</li>
          <li>रेलवे भर्ती परीक्षा के अभ्यर्थी</li>
          <li>सरकारी कार्यालय कर्मचारी जो हिंदी में कार्य करते हैं</li>
          <li>हिंदी पत्रकार और लेखक</li>
          <li>कोई भी व्यक्ति जो हिंदी टाइपिंग सीखना चाहता है</li>
        </ul>

        <h2 className="heading-2 mt-6">तकनीकी विशेषताएँ (Technical Features)</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>पूर्णतः क्लाइंट-साइड — कोई सर्वर कॉल नहीं, सब कुछ आपके ब्राउज़र में चलता है</li>
          <li>कोई लॉगिन या पंजीकरण आवश्यक नहीं</li>
          <li>आपका डेटा आपके ब्राउज़र में सुरक्षित रहता है (localStorage)</li>
          <li>तेज़ लोडिंग और उत्तरदायी डिज़ाइन</li>
          <li>मोबाइल और टैबलेट पर भी उपलब्ध</li>
          <li>डार्क मोड सपोर्ट</li>
        </ul>

        <h2 className="heading-2 mt-6">संपर्क करें (Contact Us)</h2>
        <p>
          यदि आपके कोई सुझाव, प्रतिक्रिया या प्रश्न हैं तो कृपया हमारे <a href="/contact" className="text-primary-600 hover:text-primary-700 dark:text-primary-400">संपर्क पृष्ठ</a> पर जाएँ। हम आपकी प्रतिक्रिया की सराहना करते हैं और लगातार अपने प्लेटफॉर्म को बेहतर बनाने का प्रयास करते हैं।
        </p>
      </div>

      <AdPlaceholder position="bottom" />
    </div>
  );
}
