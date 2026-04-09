import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms and Conditions - TypeHindi",
  description: "Terms and conditions for using TypeHindi.in Hindi typing practice website.",
};

export default function TermsPage() {
  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms and Conditions" }]} />

      <h1 className="heading-1 mb-6">नियम और शर्तें (Terms and Conditions)</h1>

      <div className="prose max-w-none text-gray-600 dark:text-gray-300 space-y-4">
        <p><strong>अंतिम अद्यतन:</strong> अप्रैल 2025</p>

        <h2 className="heading-2">स्वीकृति (Acceptance)</h2>
        <p>
          TypeHindi.in वेबसाइट का उपयोग करके आप इन नियमों और शर्तों से बाध्य होने के लिए सहमत होते हैं। यदि आप इन शर्तों से सहमत नहीं हैं तो कृपया इस वेबसाइट का उपयोग न करें।
        </p>

        <h2 className="heading-2">सेवा का विवरण (Service Description)</h2>
        <p>
          TypeHindi.in एक निःशुल्क ऑनलाइन हिंदी टाइपिंग अभ्यास प्लेटफॉर्म है। यह वेबसाइट निम्नलिखित सेवाएँ प्रदान करती है:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>हिंदी टाइपिंग अभ्यास (Practice Mode)</li>
          <li>InScript कीबोर्ड लेआउट सीखना (Learning Mode)</li>
          <li>टाइपिंग टेस्ट (Test Mode)</li>
          <li>टाइपिंग गेम (Game Mode)</li>
        </ul>

        <h2 className="heading-2">उपयोग के नियम (Rules of Use)</h2>
        <p>आप सहमत हैं कि:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>आप इस वेबसाइट का उपयोग केवल वैध उद्देश्यों के लिए करेंगे।</li>
          <li>आप वेबसाइट के सामान्य संचालन में बाधा नहीं डालेंगे।</li>
          <li>आप किसी स्वचालित प्रणाली (बॉट) का उपयोग करके वेबसाइट तक पहुँच नहीं बनाएँगे।</li>
          <li>आप वेबसाइट की सामग्री को बिना अनुमति के पुनः वितरित नहीं करेंगे।</li>
        </ul>

        <h2 className="heading-2">बौद्धिक संपदा (Intellectual Property)</h2>
        <p>
          TypeHindi.in पर उपलब्ध सभी सामग्री, जिसमें पाठ, ग्राफिक्स, लोगो, सॉफ्टवेयर कोड और डिज़ाइन शामिल है, TypeHindi.in की बौद्धिक संपदा है या लाइसेंस के तहत उपयोग की जाती है। पूर्व लिखित अनुमति के बिना इस सामग्री का पुनरुत्पादन, वितरण या संशोधन वर्जित है।
        </p>

        <h2 className="heading-2">डेटा संग्रहण (Data Collection)</h2>
        <p>
          इस वेबसाइट द्वारा एकत्र किए जाने वाले डेटा के बारे में विस्तृत जानकारी के लिए कृपया हमारी <a href="/privacy-policy" className="text-primary-600 hover:text-primary-700 dark:text-primary-400">गोपनीयता नीति</a> देखें।
        </p>

        <h2 className="heading-2">विज्ञापन (Advertising)</h2>
        <p>
          TypeHindi.in विज्ञापन प्रदर्शित कर सकता है। ये विज्ञापन तृतीय पक्ष विज्ञापन नेटवर्क (जैसे Google AdSense) द्वारा प्रदान किए जाते हैं। विज्ञापनों की सामग्री या लिंक किए गए उत्पादों/सेवाओं के लिए TypeHindi.in जिम्मेदार नहीं है।
        </p>

        <h2 className="heading-2">दायित्व की सीमा (Limitation of Liability)</h2>
        <p>
          TypeHindi.in किसी भी प्रकार की प्रत्यक्ष, अप्रत्यक्ष, आकस्मिक, परिणामी या दंडात्मक क्षति के लिए उत्तरदायी नहीं होगा जो इस वेबसाइट के उपयोग से उत्पन्न हो सकती है।
        </p>

        <h2 className="heading-2">सेवा में परिवर्तन (Changes to Service)</h2>
        <p>
          हम किसी भी समय बिना पूर्व सूचना के इस वेबसाइट की सेवाओं, सुविधाओं या सामग्री में परिवर्तन करने, उन्हें अस्थायी रूप से बंद करने या स्थायी रूप से समाप्त करने का अधिकार सुरक्षित रखते हैं।
        </p>

        <h2 className="heading-2">शासी कानून (Governing Law)</h2>
        <p>
          ये नियम और शर्तें भारत के कानूनों के अधीन हैं और इनकी व्याख्या भारतीय कानूनों के अनुसार की जाएगी।
        </p>

        <h2 className="heading-2">संपर्क (Contact)</h2>
        <p>
          इन नियमों और शर्तों से संबंधित प्रश्नों के लिए कृपया <a href="/contact" className="text-primary-600 hover:text-primary-700 dark:text-primary-400">संपर्क पृष्ठ</a> पर जाएँ।
        </p>
      </div>
    </div>
  );
}
