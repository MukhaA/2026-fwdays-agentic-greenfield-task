# user-stats Specification

## Purpose
TBD - created by archiving change github-battle-mvp. Update Purpose after archive.
## Requirements
### Requirement: Profile rendering
`/stats/[username]` SHALL fetch the user's data and render profile info: avatar,
name, login, bio, and a meta line with location, joined year, and follower /
following counts, plus links. (FR-STATS-01)

#### Scenario: Profile shown
- **WHEN** the stats page loads for an existing user
- **THEN** the avatar, name, login, bio, and a meta line with location, joined year, and follower/following counts are rendered

### Requirement: Fifteen metric cards
All fifteen metrics SHALL be rendered as labelled cards with their values.
(FR-STATS-02)

#### Scenario: All metrics rendered
- **WHEN** the stats page loads
- **THEN** fifteen labelled metric cards are shown, each with its computed value

### Requirement: Staggered card reveal
Cards SHALL animate in on load with a staggered fade/slide that respects
`prefers-reduced-motion`. (FR-STATS-03, NFR-A11Y-03)

#### Scenario: Motion enabled
- **WHEN** the stats page loads with motion allowed
- **THEN** cards reveal with a staggered fade/slide

#### Scenario: Reduced motion
- **WHEN** `prefers-reduced-motion` is set
- **THEN** cards appear instantly with no animation

### Requirement: Shareable stats URL
The username SHALL live in the route path so the view is a shareable URL, and
deep-linking to `/stats/{u}` SHALL load directly. (FR-STATS-04)

#### Scenario: Deep link
- **WHEN** a visitor opens `/stats/octocat` directly
- **THEN** the stats for `octocat` load without any prior landing interaction

### Requirement: Skeleton loading
The loading state SHALL show a skeleton with the same footprint as the loaded layout,
producing no layout shift on data arrival. (FR-STATS-05)

#### Scenario: No layout shift
- **WHEN** the stats page is loading
- **THEN** a skeleton matching the loaded footprint shows, and content replaces it without shifting layout

### Requirement: Language breakdown chart
The stats view SHALL render a language-breakdown chart showing the share of repos per
primary `language`. (FR-LANG-01)

#### Scenario: Chart rendered
- **WHEN** the stats page loads for a user with repos
- **THEN** a language-breakdown chart of repo share per primary language is shown

### Requirement: Language ranking and exclusions
Languages SHALL be ranked by count, a "count / share" tooltip SHALL be available, and
repos with a null language SHALL be excluded. (FR-LANG-02)

#### Scenario: Ranked with nulls excluded
- **WHEN** the chart is built from repos including some with null language
- **THEN** null-language repos are excluded and languages are ordered by descending count

#### Scenario: Tooltip
- **WHEN** a visitor hovers a language segment
- **THEN** a count / share tooltip is shown

### Requirement: Language colors and contrast
Language legend/segments SHALL use GitHub's own per-language colors (as color dots per
the design system), other chart accents SHALL use the DS accent/track tokens, and the
chart SHALL meet WCAG AA in both themes. (FR-LANG-03, NFR-A11Y-02)

#### Scenario: Per-language colors
- **WHEN** the language chart renders
- **THEN** each language uses its GitHub color and the chart meets WCAG AA contrast in light and dark themes

### Requirement: Recent activity chart
The stats view SHALL render a bar chart of the four 90-day activity metrics —
commits, pull requests, issues, and releases — with each bar's height scaled to
the largest value and its count labelled. Bars SHALL use the design-system accent
on the track token (TC-STACK-05) and respect `prefers-reduced-motion`.

#### Scenario: Activity bars
- **WHEN** the stats page loads
- **THEN** a bar chart shows commits, pull requests, issues, and releases with their 90-day counts

### Requirement: Reach and influence chart
The stats view SHALL render horizontal bars for stars, forks, watchers, and
followers, each bar scaled relative to the largest of the four values, with the
value shown alongside.

#### Scenario: Reach bars
- **WHEN** the stats page loads
- **THEN** horizontal bars for stars, forks, watchers, and followers are shown, scaled to the largest value

### Requirement: Repository composition chart
The stats view SHALL render a single stacked bar splitting original vs forked
repositories, using the two brand accents, with a legend and the total public
repo count.

#### Scenario: Repo split
- **WHEN** the stats page loads
- **THEN** a stacked bar shows the original-vs-forked share with a legend and the total repo count

#### Scenario: No repositories
- **WHEN** the user has no public repositories
- **THEN** the composition bar renders without error (empty/zero state)

