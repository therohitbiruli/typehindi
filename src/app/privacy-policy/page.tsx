import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy - TypeHindi",
  description: "Privacy policy for TypeHindi.in. Learn how we handle your data and protect your privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />

      <h1 className="heading-1 mb-6">गोपनीयता नीति (Privacy Policy)</h1>

      <div className="prose max-w-none text-gray-600 dark:text-gray-300 space-y-4">
        <p><strong>अंतिम अद्यतन:</strong> अप्रैल 2025</p>

        <h2 className="heading-2">परिचय (Introduction)</h2>
        <p>
          TypeHindi.in (&quot;हम&quot;, &quot;हमारा&quot;, &quot;वेबसाइट&quot;) आपकी गोपनीयता का सम्मान करता है। यह गोपनीयता नीति बताती है कि जब आप हमारी वेबसाइट का उपयोग करते हैं तो हम कौन सी जानकारी एकत्र करते हैं, इसका उपयोग कैसे करते हैं और इसकी सुरक्षा कैसे करते हैं।
        </p>

        <h2 className="heading-2">हम कौन सी जानकारी एकत्र करते हैं (Information We Collect)</h2>
        <h3 className="heading-3">स्थानीय संग्रहण (Local Storage)</h3>
        <p>
          TypeHindi.in आपके ब्राउज़र के localStorage में निम्नलिखित डेटा सहेजता है:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>आपकी सर्वश्रेष्ठ टाइपिंग गति (Best WPM)</li>
          <li>अंतिम टेस्ट स्कोर</li>
          <li>थीम प्राथमिकताएँ (लाइट/डार्क मोड)</li>
        </ul>
        <p>
          यह डेटा केवल आपके ब्राउज़र में संग्रहीत रहता है और हमारे किसी सर्वर पर नहीं भेजा जाता। आप अपने ब्राउज़र सेटिंग्स से कभी भी यह डेटा हटा सकते हैं।
        </p>

        <h3 className="heading-3">संपर्क फॉर्म (Contact Form)</h3>
        <p>
          जब आप हमारा संपर्क फॉर्म भरते हैं, तो आपका नाम, ईमेल पता और संदेश Formspree.io सेवा के माध्यम से हमें प्रेषित होता है। यह जानकारी केवल आपके संदेश का उत्तर देने के उद्देश्य से उपयोग की जाती है।
        </p>

        <h3 className="heading-3">कुकीज़ और ट्रैकिंग (Cookies & Tracking)</h3>
        <p>
          हम कार्यात्मक कुकीज़ का उपयोग थीम प्राथमिकताओं को सहेजने के लिए कर सकते हैं। हमारे विज्ञापन साझेदार (Google AdSense) अपनी कुकीज़ का उपयोग प्रासंगिक विज्ञापन दिखाने के लिए कर सकते हैं। Google AdSense की गोपनीयता नीति के बारे में अधिक जानकारी के लिए Google की वेबसाइट देखें।
        </p>

        <h2 className="heading-2">डेटा सुरक्षा (Data Security)</h2>
        <p>
          हम आपके डेटा की सुरक्षा के लिए उचित तकनीकी और संगठनात्मक उपाय करते हैं। चूंकि अधिकांश डेटा आपके ब्राउज़र में स्थानीय रूप से संग्रहीत होता है, इसलिए इसकी सुरक्षा आपके डिवाइस की सुरक्षा पर निर्भर करती है।
        </p>

        <h2 className="heading-2">तृतीय पक्ष सेवाएँ (Third-Party Services)</h2>
        <p>हम निम्नलिखित तृतीय पक्ष सेवाओं का उपयोग कर सकते हैं:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Google AdSense:</strong> विज्ञापन प्रदर्शन के लिए</li>
          <li><strong>Formspree:</strong> संपर्क फॉर्म प्रोसेसिंग के लिए</li>
          <li><strong>Google Fonts:</strong> वेब फॉन्ट लोडिंग के लिए</li>
        </ul>

        <h2 className="heading-2">बच्चों की गोपनीयता (Children&apos;s Privacy)</h2>
        <p>
          हमारी वेबसाइट सभी आयु वर्ग के लिए उपयुक्त है। हम जानबूझकर 13 वर्ष से कम आयु के बच्चों से व्यक्तिगत जानकारी एकत्र नहीं करते।
        </p>

        <h2 className="heading-2">नीति में परिवर्तन (Changes to This Policy)</h2>
        <p>
          हम समय-समय पर इस गोपनीयता नीति को अद्यतन कर सकते हैं। परिवर्तन इस पृष्ठ पर प्रकाशित किए जाएंगे। कृपया नियमित रूप से इस पृष्ठ की जाँच करें।
        </p>

        <h2 className="heading-2">संपर्क (Contact)</h2>
        <p>
          इस गोपनीयता नीति से संबंधित प्रश्नों के लिए कृपया <a href="/contact" className="text-primary-600 hover:text-primary-700 dark:text-primary-400">संपर्क पृष्ठ</a> पर जाएँ।
        </p>
      </div>
    </div>
  );
}
