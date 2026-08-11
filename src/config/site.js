/**
 * Central site configuration.
 *
 * All download buttons read `microsoftStoreUrl` from here — change it in one
 * place. Until the real Microsoft Store listing exists, the value is empty and
 * the UI shows a clearly marked "Store listing coming soon" note instead of a
 * fake link.
 */
export const SITE_CONFIG = {
  name: "JishAtlas",
  company: "JishWorks",
  version: "0.1 Alpha",
  tagline: "AI-powered file organization for Windows",

  /** Primary download destination (Microsoft Store). TODO: fill in when published. */
  microsoftStoreUrl: "",

  /** Direct EXE download destination (GitHub releases). */
  exeReleaseUrl: "https://github.com/jishnudutta/JishAtlas/releases/tag/v0.1.0-alpha",

  /** Optional GitHub repo URL. Only rendered when set. Example: "https://github.com/jishworks/jishatlas" */
  githubUrl: "",

  /** Developer / company website (external). */
  jishWorksUrl: "https://jishworks.in",

  /** Author name, shown in the developer section and footer. */
  author: "Jishnu Dutta",

  /** Personal GitHub profile of the author (distinct from the app repo). */
  authorGitHubUrl: "https://github.com/jishnudutta",

  /** Deployment origin, used for canonical links. Leave empty until known. */
  siteUrl: "",

  platforms: ["Windows"],
  openSource: true,
};

export const DOCS_NAV = [
  { group: "Introduction", links: [{ slug: "introduction", label: "Introduction" }] },
  {
    group: "Getting Started",
    links: [
      { slug: "installation", label: "Installation" },
      { slug: "quick-start", label: "Quick Start" },
    ],
  },
  {
    group: "AI",
    links: [
      { slug: "ai-backends", label: "AI Backends" },
      { slug: "content-analysis", label: "Content Analysis" },
    ],
  },
  {
    group: "Organization",
    links: [
      { slug: "organization", label: "Organization Modes" },
      { slug: "projects", label: "Project Detection" },
      { slug: "passthrough-directories", label: "Passthrough Directories" },
    ],
  },
  { group: "Safety", links: [{ slug: "safety", label: "Safety & Preview" }] },
  {
    group: "Reference",
    links: [
      { slug: "configuration", label: "Configuration" },
      { slug: "troubleshooting", label: "Troubleshooting" },
    ],
  },
];
