export function Logo({ className = "", iconSize = 40, textSize = "text-xl", onClick, showName = true }: { className?: string, iconSize?: number, textSize?: string, onClick?: () => void, showName?: boolean }) {
  return (
    <div className={`flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 ${className}`} onClick={onClick}>
      <img loading="lazy" decoding="async" src="/scaro_technologies .webp"
        alt="Scaro Technologie Logo"
        style={{ height: iconSize, width: iconSize }}
        className="object-cover rounded-full shrink-0 drop-shadow-md bg-white border border-slate-100"
      />
      {showName && (
        <span className={`${textSize} text-[var(--primary-maroon)] dark:text-white font-black uppercase tracking-tighter drop-shadow-sm`}>
          Scaro Technologie
        </span>
      )}
    </div>
  );
}
