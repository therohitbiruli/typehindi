import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-[#475569] dark:text-gray-400 font-medium">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {index > 0 && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 dark:text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
              </svg>
            )}
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-[#174EA6] dark:hover:text-primary-400 underline-offset-2 hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#17243A] dark:text-gray-200 font-bold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
