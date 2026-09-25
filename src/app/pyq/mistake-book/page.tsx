import { Breadcrumb } from "../../../components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "My PYQ Mistake Book | TypeHindi",
  description: "Review and learn from your incorrect PYQ attempts.",
};

export default function MistakeBookPage() {
  return (
    <div className="container-main py-8 min-h-[70vh]">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "PYQs", href: "/pyq" },
          { label: "Mistake Book" },
        ]}
      />

      <header className="mt-8 mb-10 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 leading-tight text-red-600 dark:text-red-400">
          My PYQ Mistake Book
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
          Automatically tracks questions you got wrong so you can practice them again.
        </p>
      </header>

      {/* For architecture sake, empty state */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800 shadow-sm max-w-3xl mx-auto mt-8">
        <div className="w-20 h-20 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
          !
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">No Mistakes Yet!</h2>
        <p className="text-slate-500 max-w-md mx-auto mb-8">
          You haven't made any mistakes on your tests yet. Keep up the great work! Any questions you answer incorrectly during an online test will automatically appear here.
        </p>
        <Link href="/pyq" className="btn-primary px-6 py-2.5 rounded-xl font-bold">
          Take a Test
        </Link>
      </div>
    </div>
  );
}
