export default {
  slug: "introduction",
  title: "Introduction",
  description: "What JishAtlas is, who it's for, how it works, and what it deliberately does not do.",
  sections: [
    {
      id: "what-is-jishatlas",
      title: "What is JishAtlas?",
      blocks: [
        {
          type: "p",
          text: "JishAtlas is a Windows terminal application that helps you organize messy folders. You point it at a folder, it scans the contents, an AI backend proposes a clean structure — folders, subfolders, and better file names — and JishAtlas validates that plan before doing anything. Nothing changes until you review the plan and approve it.",
        },
        {
          type: "p",
          text: "The AI creates an organization plan. JishAtlas validates that plan and applies it only after you confirm. You stay in control of every change.",
        },
        {
          type: "p",
          text: "The interface is a terminal window with a small splash screen, progress status, and a simple menu. There is no graphical desktop UI in v0.1 — every choice is a numbered menu or a prompt.",
        },
        { type: "callout", kind: "tip", title: "The short version", text: "JishAtlas suggests. You decide." },
      ],
    },
    {
      id: "who-its-for",
      title: "Who it's for",
      blocks: [
        {
          type: "list",
          items: [
            "People whose Downloads folder has become a second home for everything.",
            "Students juggling coursework, notes, and PDFs.",
            "Developers with mixed folders of projects and loose files.",
            "Anyone who wants a tidy structure but doesn't want to spend an afternoon sorting.",
          ],
        },
        { type: "p", text: "It's not a file manager replacement. JishAtlas organizes, then gets out of the way." },
      ],
    },
    {
      id: "how-it-works",
      title: "How it works",
      blocks: [
        {
          type: "p",
          text: "The program runs a fixed pipeline on every organization. In order:",
        },
        {
          type: "steps",
          steps: [
            { title: "Pick a folder", body: "You type the path to the folder to organize. JishAtlas verifies it exists and is a folder before continuing." },
            { title: "Scan", body: "JishAtlas walks the folder structure, reads the contents of text files, and flags passthrough directories like .git and node_modules." },
            { title: "Detect projects", body: "A scoring system looks for project markers (package.json, pyproject.toml, *.sln, …) so projects can be treated as single units." },
            { title: "Choose an AI backend", body: "You pick Local AI (offline Qwen model) or Gemini (cloud). The rest of the pipeline is the same either way." },
            { title: "Generate a plan", body: "The backend returns a JSON plan: a target folder and optional new name for every file, plus a target parent for each detected project." },
            { title: "Review", body: "Every proposed change is printed as a From → To list. Nothing is applied yet." },
            { title: "Choose a mode and confirm", body: "Pick Organized Copy or Organize in Place, then answer a single yes/no question. The default answer is No." },
            { title: "Apply", body: "JishAtlas applies the approved plan and prints a summary with the number of files, projects, and any errors." },
          ],
        },
        {
          type: "p",
          text: "For content analysis, JishAtlas uses a small local Qwen model to summarize each text file during the scan. In practice this means the model downloads on your first run, before you even pick a backend — see Content Analysis for the details.",
        },
      ],
    },
    {
      id: "what-it-can-organize",
      title: "What it can organize",
      blocks: [
        {
          type: "list",
          items: [
            "School work, documents, and PDFs",
            "Code files and scripts",
            "Images and photos",
            "Projects (detected as single units)",
            "Archives and random loose files",
          ],
        },
        {
          type: "p",
          text: "JishAtlas organizes anything it can name and locate. For files it can't read (binary or non-UTF-8 content), it still uses the filename and location — it just has less to work with.",
        },
      ],
    },
    {
      id: "what-it-does-not-do",
      title: "What it does not do",
      blocks: [
        {
          type: "list",
          items: [
            "It does not reorganize the internals of detected projects.",
            "It does not touch passthrough directories like .git, node_modules, or build.",
            "It does not read images, PDFs, or other binary files for content.",
            "It does not upload your files anywhere when using Local AI.",
            "It does not apply changes without your explicit confirmation.",
            "It does not create automatic backups you can restore from later — in-place mode deletes the original only after a complete, verified copy exists.",
          ],
        },
        {
          type: "callout",
          kind: "warning",
          title: "Keep backups",
          text: "JishAtlas is careful, but no tool replaces your own backups. Keep copies of anything important before a large reorganization.",
        },
      ],
    },
    {
      id: "changelog",
      title: "Release notes",
      blocks: [
        {
          type: "list",
          items: [
            "v0.1 Alpha — Initial Windows release",
            "Local AI support (automatic Qwen model download)",
            "Google Gemini support",
            "Project detection (scoring-based)",
            "Passthrough / protected directories",
            "File content analysis (local summarization)",
            "Organization plan with preview",
            "Organized-copy and in-place modes",
            "File rename suggestions",
          ],
        },
        { type: "p", text: "More capabilities are planned for future releases." },
      ],
    },
  ],
};
