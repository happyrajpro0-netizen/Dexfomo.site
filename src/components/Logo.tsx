import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number; // size in pixels for the mark (e.g. 36, 40, 48)
  showText?: boolean;
  priority?: boolean;
}

export default function Logo({
  className = "",
  size = 36,
  showText = true,
  priority = false,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Mark with preserved aspect ratio & object-fit: contain */}
      <div
        className="relative shrink-0 rounded-lg overflow-hidden bg-surface-200 border border-brand-500/30 p-1 flex items-center justify-center shadow-md shadow-brand-500/10 group-hover:border-brand-accent/50 transition-colors"
        style={{ width: size, height: size }}
      >
        <Image
          src="/assets/dexfomo-mark.svg"
          alt="Dexfomo Logo"
          width={size}
          height={size}
          priority={priority}
          className="w-full h-full object-contain"
          style={{ objectFit: "contain" }}
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-brand-accent transition-colors">
              DEXFOMO
            </span>
            <span className="rounded bg-brand-500/10 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-semibold text-brand-400 border border-brand-500/20">
              ALPHA
            </span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono tracking-wide hidden sm:inline-block">
            dexfomo.site
          </span>
        </div>
      )}
    </div>
  );
}
