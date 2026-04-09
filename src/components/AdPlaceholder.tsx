interface AdPlaceholderProps {
  position: "top" | "bottom" | "sidebar";
  className?: string;
}

export function AdPlaceholder({ position, className = "" }: AdPlaceholderProps) {
  return (
    <div 
      className={`my-8 flex min-h-[100px] w-full items-center justify-center rounded-xl bg-gray-100/10 p-4 text-xs font-medium text-gray-400 dark:bg-gray-800/20 ${className}`}
      id={`ad-${position}`}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="opacity-50">ADVERTISEMENT</span>
        {/* AdSense data tags for verification and ads */}
        <ins 
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-4896208582090133"
          data-ad-slot="auto"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
