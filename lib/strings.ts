// Centralized UI copy (NFR-I18N-01). No runtime i18n library in the MVP — every
// user-facing string lives here so the label set is a single source of truth.
//
// Voice (DESIGN.md): calm, literate, sentence case; address the reader as "you";
// errors are plain and specific; a tie is "a draw".

import type { MetricKey } from "./types";

export const strings = {
  brand: {
    name: "GitHub Battle",
    tagline:
      "The aggregate picture GitHub never shows you — explore one developer's stat sheet, or battle two head to head across fifteen live metrics.",
    footerCredit: "Data from the GitHub REST API",
    githubApiUrl: "https://docs.github.com/en/rest",
  },

  landing: {
    modeStats: "View stats",
    modeBattle: "Battle",
    statsInputLabel: "GitHub username",
    battleInputLabelA: "First username",
    battleInputLabelB: "Second username",
    inputPlaceholder: "GitHub username",
    exploreAction: "Explore",
    fightAction: "Fight",
    validating: "Checking…",
    errorEmpty: "Enter a username", // FR-LAND-07
    errorNotFound: "User not found", // FR-LAND-05
  },

  nav: {
    home: "Home",
  },

  theme: {
    toDark: "Switch to dark theme",
    toLight: "Switch to light theme",
  },

  states: {
    notFoundTitle: "User not found", // FR-DATA-06
    notFoundBody: (login: string) =>
      `No GitHub account for @${login}. Check the spelling and try again.`,
    notFoundBodyGeneric: "That GitHub account no longer exists.",
    rateLimitTitle: "GitHub rate limit reached, try again later", // FR-DATA-05
    rateLimitBody:
      "GitHub's unauthenticated API allows 60 requests per hour per IP. Wait a little, then try again.",
    genericErrorTitle: "Something went wrong",
    genericErrorBody: "That data couldn't be loaded. Try again in a moment.",
    back: "Back to home",
    retry: "Try again",
  },

  stats: {
    languagesTitle: "Languages",
    languagesUnit: "languages",
    noLanguages: "No public repositories with a detected language.",
    reposUnit: "repos",
  },

  battle: {
    eyebrow: "Head to head",
    versus: "vs",
    winnerPrefix: "Winner",
    draw: "It's a draw", // FR-SCORE-03
    sideErrorPrefix: "Couldn't load",
  },

  a11y: {
    homeLink: "GitHub Battle — home",
    languageSegment: (name: string, count: number, pct: number) =>
      `${name}: ${count} ${count === 1 ? "repo" : "repos"}, ${Math.round(pct * 100)}%`,
  },
} as const;

/** Human labels for the fifteen metrics (sentence case per DESIGN.md). */
export const metricLabels: Record<MetricKey, string> = {
  totalStars: "Total stars",
  totalForks: "Total forks",
  followers: "Followers",
  originalRepos: "Original repos",
  languageDiversity: "Languages",
  accountAgeYears: "Account age",
  commitActivity: "Commits (90d)",
  prActivity: "Pull requests (90d)",
  issueActivity: "Issues (90d)",
  releases: "Releases (90d)",
  publicGists: "Public gists",
  totalWatchers: "Watchers",
  codeVolumeKb: "Code volume",
  following: "Following",
  forkedRepos: "Forked repos",
};
