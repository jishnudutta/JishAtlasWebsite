import introduction from "./introduction";
import installation from "./installation";
import quickStart from "./quick-start";
import aiBackends from "./ai-backends";
import contentAnalysis from "./content-analysis";
import organization from "./organization";
import projects from "./projects";
import passthroughDirectories from "./passthrough-directories";
import safety from "./safety";
import configuration from "./configuration";
import troubleshooting from "./troubleshooting";

export const DOCS = [
  introduction,
  installation,
  quickStart,
  aiBackends,
  contentAnalysis,
  organization,
  projects,
  passthroughDirectories,
  safety,
  configuration,
  troubleshooting,
];

export const DOC_MAP = Object.fromEntries(DOCS.map((d) => [d.slug, d]));

/** Flattened reading order (used for prev/next pagination). */
export const DOC_ORDER = DOCS.map((d) => d.slug);

/* ---------- search ---------- */

function blockText(b) {
  switch (b.type) {
    case "p":
      return b.text || "";
    case "list":
      return (b.items || []).join(" ");
    case "callout":
      return `${b.title || ""} ${b.text || ""}`;
    case "code":
      return b.code || "";
    case "steps":
      return (b.steps || []).map((s) => `${s.title} ${s.body || ""}`).join(" ");
    case "table":
      return (b.rows || []).flat().join(" ");
    case "filetree":
      return treeText(b.tree);
    case "faq":
      return (b.items || []).map((it) => `${it.title} ${it.body || ""}`).join(" ");
    default:
      return "";
  }
}

function treeText(tree) {
  if (!tree || !tree.name) return "";
  const walk = (n) => [n.name, ...(n.children || []).flatMap(walk)].join(" ");
  return walk(tree);
}

const INDEX = DOCS.map((doc) => ({
  slug: doc.slug,
  title: doc.title,
  description: doc.description,
  sections: (doc.sections || []).map((s) => {
    const text = (s.blocks || []).map(blockText).join(" ");
    return { id: s.id, title: s.title, text, lower: text.toLowerCase() };
  }),
}));

export function searchDocs(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/);
  const results = [];
  for (const doc of INDEX) {
    const titleHit = doc.title.toLowerCase().includes(q);
    if (titleHit) {
      results.push({ slug: doc.slug, id: null, title: doc.title, snippet: doc.description });
      continue;
    }
    for (const s of doc.sections) {
      const hay = `${s.title.toLowerCase()} ${s.lower}`;
      if (terms.every((t) => hay.includes(t))) {
        results.push({
          slug: doc.slug,
          id: s.id,
          title: doc.title,
          snippet: `${s.title}${s.text ? " — " + s.text.slice(0, 90) : ""}`,
        });
      }
    }
  }
  return results.slice(0, 10);
}
