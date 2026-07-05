import Image from "next/image";
import type { UserStats } from "@/lib/types";
import { METRICS } from "@/lib/metrics/catalog";
import { strings } from "@/lib/strings";
import { LanguageDonut } from "./LanguageDonut";

// Single-user stats view: profile, fifteen metric cards (staggered reveal), and
// the language breakdown (FR-STATS-01/02/03, FR-LANG-01). A server component —
// the reveal is pure CSS, so it needs no client JS and respects reduced motion.
export function StatsView({ stats }: { stats: UserStats }) {
  const { metrics, languages } = stats;

  return (
    <div className="mx-auto w-full max-w-content px-6 py-10">
      <ProfileHeader stats={stats} />

      <section aria-label="Metrics" className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
        {METRICS.map((def, i) => (
          <div
            key={def.key}
            className="ds-fade-up bg-surface px-4 py-[18px]"
            style={{ animationDelay: `${i * 0.04}s` }}
          >
            <div className="font-sans text-caption text-text-muted">{def.label}</div>
            <div className="mt-2.5 font-serif text-[32px] leading-none">
              {def.format(metrics[def.key])}
            </div>
          </div>
        ))}
      </section>

      <section aria-label={strings.stats.languagesTitle} className="mt-10">
        <h2 className="mb-5 font-serif text-h2">{strings.stats.languagesTitle}</h2>
        <LanguageDonut languages={languages} />
      </section>
    </div>
  );
}

function ProfileHeader({ stats }: { stats: UserStats }) {
  const { profile } = stats;
  return (
    <header className="flex flex-col items-start gap-6 border-b border-border pb-7 sm:flex-row">
      <Image
        src={profile.avatarUrl}
        alt=""
        width={88}
        height={88}
        className="size-[88px] shrink-0 rounded-full border border-border"
        unoptimized
      />
      <div className="flex-1">
        <h1 className="font-serif text-h1 leading-tight">{profile.name ?? profile.login}</h1>
        <a
          href={profile.htmlUrl}
          target="_blank"
          rel="noreferrer"
          className="font-sans text-small text-text-muted underline decoration-border underline-offset-4 transition-colors hover:text-text"
        >
          @{profile.login}
        </a>
        {profile.bio && (
          <p className="mt-3 max-w-2xl font-sans text-body text-text">{profile.bio}</p>
        )}
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-sans text-small text-text-muted">
          {profile.location && <span>{profile.location}</span>}
          {profile.company && <span>{profile.company}</span>}
          {profile.blog && (
            <a
              href={profile.blog}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-border underline-offset-4 transition-colors hover:text-text"
            >
              {profile.blog.replace(/^https?:\/\//, "")}
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
