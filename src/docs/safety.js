export default {
  slug: "safety",
  title: "Safety & Validation",
  description: "The concrete safety checks JishAtlas performs — before, during, and after applying a plan.",
  sections: [
    {
      id: "core-principle",
      title: "AI suggests. You decide.",
      blocks: [
        {
          type: "p",
          text: "The AI backend never touches your files. It produces a suggestion — a list of proposed moves and renames. JishAtlas validates that suggestion, and you approve it, before any filesystem change happens.",
        },
        {
          type: "steps",
          steps: [
            { title: "Scan", body: "JishAtlas reads the folder structure, projects, and passthrough directories." },
            { title: "AI suggestion", body: "The backend proposes an organization plan. It has no access to your files — only names, paths, and summaries." },
            { title: "Validation", body: "JishAtlas checks the plan's paths, project boundaries, and destination safety before anything is copied." },
            { title: "Preview", body: "Every proposed change is shown to you in a review list." },
            { title: "User approval", body: "You answer a single yes/no prompt. The default answer is No." },
            { title: "Apply", body: "Only the approved plan is applied — and in-place mode verifies the result before removing anything." },
          ],
        },
      ],
    },
    {
      id: "validation",
      title: "What gets validated",
      blocks: [
        {
          type: "list",
          items: [
            "Every planned source path must resolve inside the folder being organized — paths that would escape it are rejected and counted as errors.",
            "Every destination must resolve inside the organized folder — nothing is ever written outside it.",
            "Projects are only moved as single units, and only when their path exactly matches the detected project roots.",
            "Passthrough directories are never planned into or reorganized.",
            "A result missing its path, target folder, or name is skipped and counted as an error, not guessed.",
            "The AI is instructed to keep destinations unique and never change file extensions — JishAtlas verifies what it can and shows you the full plan to catch the rest.",
          ],
        },
        {
          type: "callout",
          kind: "note",
          title: "Organized Copy",
          text: "Organized-copy mode leaves the original folder completely untouched, which is the safest way to try JishAtlas the first time.",
        },
      ],
    },
    {
      id: "in-place-safety",
      title: "How in-place mode protects you",
      blocks: [
        {
          type: "p",
          text: "In-place mode is built around a copy-then-swap sequence with three independent safety nets:",
        },
        {
          type: "list",
          items: [
            "Any error during the copy aborts the whole operation — the original is never modified.",
            "Before anything is swapped, JishAtlas hashes every file in the original (SHA-256) and verifies each one exists in the copy, matched by content rather than by path. If even one file is missing, it aborts.",
            "The original folder is only renamed to a .jishatlas_backup folder after the verified copy is complete, and that backup is only deleted after the swap succeeds. On failure it restores the original and tells you where your files are.",
          ],
        },
      ],
    },
    {
      id: "honest-limits",
      title: "An honest note",
      blocks: [
        {
          type: "p",
          text: "No tool can guarantee zero mistakes — AI can propose a plan that doesn't fit, and any reorganization carries some risk. JishAtlas reduces that risk by validating, verifying, and previewing, but it does not create permanent backups you can restore from later.",
        },
        {
          type: "callout",
          kind: "warning",
          title: "Keep backups",
          text: "Keep backups of important data. Review plans carefully before confirming, especially with in-place organization.",
        },
      ],
    },
  ],
};
