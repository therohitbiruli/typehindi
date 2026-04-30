import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { AdPlaceholder } from "../../components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Hindi Typing Resources - SSC, LDC, Stenographer | TypeHindi",
  description: "Official Hindi typing resources, SSC Stenographer skill test notices, LDC typing rules, and downloadable InScript keyboard charts.",
};

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: "आधिकारिक परीक्षा सूचनाएं (Official Exam Notices)",
      links: [
        { name: "SSC Stenographer Grade C & D Examination Details", url: "https://ssc.gov.in/" },
        { name: "SSC CHSL (LDC/JSA) Typing Test Guidelines", url: "https://ssc.gov.in/" },
        { name: "UPSSSC Junior Assistant Typing Test Rules", url: "http://upsssc.gov.in/" },
        { name: "MP CPCT Official Website", url: "https://cpct.mp.gov.in/" },
      ]
    },
    {
      title: "कीबोर्ड लेआउट और चार्ट्स (Keyboard Layouts & Charts)",
      links: [
        { name: "Download InScript Keyboard Layout (PDF)", url: "#" },
        { name: "Remington Gail Keyboard Chart", url: "#" },
        { name: "Unicode Character Map for Hindi", url: "#" },
      ]
    },
    {
      title: "सॉफ्टवेयर और टूल्स (Software & Tools)",
      links: [
        { name: "BhashaIndia - Microsoft Hindi Input Tools", url: "https://www.microsoft.com/en-in/bhashaindia/downloads.aspx" },
        { name: "Google Input Tools (Offline Version)", url: "https://www.google.com/inputtools/try/" },
        { name: "Hindi Font Converter (KrutiDev to Unicode)", url: "#" },
      ]
    }
  ];

  return (
    <div className="container-main py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />

      <AdPlaceholder position="top" />

      <h1 className="heading-1 mb-4">हिंदी टाइपिंग संसाधन (Hindi Typing Resources)</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
        स्टेनोग्राफर, एलडीसी और अन्य सरकारी परीक्षाओं की तैयारी के लिए महत्वपूर्ण आधिकारिक लिंक, कीबोर्ड चार्ट और आवश्यक सॉफ्टवेयर यहाँ प्राप्त करें।
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {resourceCategories.map((category, idx) => (
          <div key={idx} className="card h-full">
            <h2 className="text-xl font-bold mb-4 text-primary-600 dark:text-primary-400 border-b border-gray-100 dark:border-gray-800 pb-2">
              {category.title}
            </h2>
            <ul className="space-y-3">
              {category.links.map((link, lIdx) => (
                <li key={lIdx}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 flex items-start gap-2 group"
                  >
                    <span className="mt-1 text-gray-400 group-hover:text-primary-500">🔗</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="bg-primary-50 dark:bg-primary-900/10 rounded-2xl p-8 border border-primary-100 dark:border-primary-800/30">
        <h2 className="text-2xl font-bold mb-4">स्टेनोग्राफर और एलडीसी के लिए विशेष सुझाव</h2>
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p>
            सरकारी परीक्षाओं में सफलता केवल टाइपिंग स्पीड पर निर्भर नहीं करती, बल्कि इस बात पर भी निर्भर करती है कि आप परीक्षा के विशेष नियमों (जैसे Backspace की अनुमति है या नहीं, Error Calculation कैसे होती है) से कितने परिचित हैं। 
          </p>
          <p>
            हम अनुशंसा करते हैं कि आप नियमित रूप से संबंधित भर्ती बोर्ड (जैसे SSC, State PSC) की आधिकारिक वेबसाइट चेक करते रहें क्योंकि टाइपिंग और स्किल टेस्ट के नियम समय-समय पर अपडेट किए जाते हैं। 
          </p>
        </div>
      </section>

      <AdPlaceholder position="bottom" />
    </div>
  );
}
