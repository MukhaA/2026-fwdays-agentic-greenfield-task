import type { CSSProperties } from "react";

// Shimmering placeholder. Compose these to mirror a loaded layout's footprint so
// data arrival causes no layout shift (FR-STATS-05). Uses the ds-shimmer keyframe.
export function Skeleton({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`rounded-sm ${className}`}
      style={{
        background:
          "linear-gradient(90deg, var(--surface-track) 25%, var(--border) 37%, var(--surface-track) 63%)",
        backgroundSize: "200% 100%",
        animation: "ds-shimmer 1.4s ease-in-out infinite",
        ...style,
      }}
    />
  );
}

// Loading placeholder for the stats page — same profile + 15-cell grid footprint
// as the loaded view (FR-STATS-05).
export function StatsSkeleton() {
  return (
    <div className="mx-auto w-full max-w-content px-6 py-10">
      <div className="flex items-start gap-6 border-b border-border pb-7">
        <Skeleton className="size-[88px] rounded-full" />
        <div className="flex-1 space-y-3 pt-1">
          <Skeleton className="h-7 w-56" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
      <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="space-y-3 bg-surface px-4 py-[18px]">
            <Skeleton className="h-3 w-[55%]" />
            <Skeleton className="h-6 w-[45%]" />
          </div>
        ))}
      </div>
    </div>
  );
}
