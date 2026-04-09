import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Disclaimer - TypeHindi",
  description: "Disclaimer for TypeHindi.in Hindi typing practice website.",
};

export default function DisclaimerPage() {
  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]} />

      <h1 className="heading-1 mb-6">अस्वीकरण (Disclaimer)</h1>

      <div className="prose max-w-none text-gray-600 dark:text-gray-300 space-y-4">
        <p><strong>अंतिम अद्यतन:</strong> अप्रैल 2025</p>

        <h2 className="heading-2">सामान्य अस्वीकरण (General Disclaimer)</h2>
        <p>
          TypeHindi.in पर उपलब्ध सभी सामग्री, जानकारी, सॉफ्टवेयर, उत्पाद और सेवाएँ &quot;जैसा है&quot; (as is) आधार पर प्रदान की जाती हैं बिना किसी प्रकार की वारंटी या गारंटी के। हम इस वेबसाइट पर प्रदान की गई जानकारी की सटीकता, पूर्णता, विश्वसनीयता या उपयुक्तता के संबंध में कोई प्रतिनिधित्व या वारंटी नहीं देते।
        </p>

        <h2 className="heading-2">शैक्षिक उद्देश्य (Educational Purpose)</h2>
        <p>
          TypeHindi.in पूर्णतः शैक्षिक और अभ्यास उद्देश्यों के लिए है। यहाँ प्रदान किए गए अभ्यास अनुच्छेद सामान्य ज्ञान और सरकारी परीक्षा पैटर्न पर आधारित हैं और इन्हें केवल टाइपिंग अभ्यास के लिए उपयोग किया जाना चाहिए। हम किसी विशेष परीक्षा परिणाम की गारंटी नहीं देते।
        </p>

        <h2 className="heading-2">परिणामों की गारंटी नहीं (No Guarantee of Results)</h2>
        <p>
          यद्यपि हम उच्च गुणवत्ता का अभ्यास अनुभव प्रदान करने का प्रयास करते हैं, टाइपिंग गति और सटीकता में सुधार व्यक्ति के अभ्यास, समर्पण और प्रयास पर निर्भर करता है। हम किसी विशेष WPM गति प्राप्त करने या किसी परीक्षा में उत्तीर्ण होने की गारंटी नहीं देते।
        </p>

        <h2 className="heading-2">बाहरी लिंक (External Links)</h2>
        <p>
          हमारी वेबसाइट पर तृतीय पक्ष वेबसाइटों के लिंक हो सकते हैं। इन बाहरी वेबसाइटों की सामग्री, गोपनीयता नीतियों या प्रथाओं पर हमारा कोई नियंत्रण नहीं है और हम इनके लिए कोई जिम्मेदारी स्वीकार नहीं करते।
        </p>

        <h2 className="heading-2">तकनीकी अस्वीकरण (Technical Disclaimer)</h2>
        <p>
          हम वेबसाइट की निर्बाध, त्रुटि-रहित या सुरक्षित संचालन की गारंटी नहीं दे सकते। तकनीकी समस्याएँ, ब्राउज़र संगतता मुद्दे या अन्य कारणों से सेवा में बाधा आ सकती है। यह वेबसाइट localStorage का उपयोग करती है जो ब्राउज़र डेटा साफ़ करने पर मिट सकता है।
        </p>

        <h2 className="heading-2">दायित्व की सीमा (Limitation of Liability)</h2>
        <p>
          किसी भी परिस्थिति में TypeHindi.in, इसके संचालक या योगदानकर्ता इस वेबसाइट के उपयोग से उत्पन्न होने वाली किसी भी प्रत्यक्ष, अप्रत्यक्ष, आकस्मिक, विशेष या परिणामी क्षति के लिए उत्तरदायी नहीं होंगे।
        </p>

        <h2 className="heading-2">संपर्क (Contact)</h2>
        <p>
          इस अस्वीकरण से संबंधित प्रश्नों के लिए कृपया <a href="/contact" className="text-primary-600 hover:text-primary-700 dark:text-primary-400">संपर्क पृष्ठ</a> पर जाएँ।
        </p>
      </div>
    </div>
  );
}
