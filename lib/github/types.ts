// Minimal shapes for the raw GitHub REST payloads we consume. Only the fields
// the metrics depend on are typed; the API returns much more.

/** `GET /users/{u}` */
export interface RawUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  location: string | null;
  blog: string | null;
  company: string | null;
  html_url: string;
  followers: number;
  following: number;
  public_gists: number;
  public_repos: number;
  created_at: string;
}

/** One item of `GET /users/{u}/repos` */
export interface RawRepo {
  name: string;
  fork: boolean;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  /** Repository size in KB. */
  size: number;
}

/** One item of `GET /users/{u}/events` */
export interface RawEvent {
  type: string | null;
  created_at: string;
}
