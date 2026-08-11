export default {
  slug: "quick-start",
  title: "Quick Start",
  description: "From launch to your first organized folder — the exact order of prompts JishAtlas walks you through.",
  sections: [
    {
      id: "overview",
      title: "Overview",
      blocks: [
        {
          type: "p",
          text: "JishAtlas is a guided terminal flow. You answer prompts in order, and it never touches your files until the final confirmation. The whole flow takes a few minutes on a typical folder.",
        },
        {
          type: "p",
          text: "Every organization run follows the same order: launch, pick a folder, scan, choose a backend, review the plan, pick a mode, confirm, apply.",
        },
      ],
    },
    {
      id: "steps",
      title: "Step by step",
      blocks: [
        {
          type: "steps",
          steps: [
            { title: "Launch JishAtlas", body: "A splash screen runs for a few seconds, then it asks for the folder to organize." },
            { title: "Enter the folder path", body: "Type the full path (for example C:\\Users\\You\\Downloads). JishAtlas verifies the folder exists and is a directory — otherwise it stops and tells you why." },
            { title: "Wait for the scan", body: "JishAtlas walks the folder, detects projects, and summarizes text files. On the very first run this downloads the local Qwen model (~1 GB) first." },
            { title: "Choose the AI backend", body: "1 for Local AI (offline, the default) or 2 for Gemini (cloud, needs an API key). The rest of the flow is identical either way." },
            { title: "Review the plan", body: "After the AI responds, every proposed change is printed as a From → To list — moves and renames, project moves included. Nothing has been applied yet." },
            { title: "Choose the organization mode", body: "1 for Organize in Place, or 2 for Create Organized Copy (the default and recommended choice)." },
            { title: "Confirm", body: "JishAtlas asks \u201cApply these changes?\u201d — a single yes/no question. The default answer is No, so an accidental Enter never applies anything." },
            { title: "Read the summary", body: "If you confirm, changes are applied and JishAtlas prints a summary: files organized, folders created, projects moved, passthrough copied, and errors (if any)." },
          ],
        },
        {
          type: "callout",
          kind: "tip",
          title: "First time?",
          text: "Use Organized Copy and try it on a folder that isn't precious. The original folder stays completely untouched, so there's nothing to lose.",
        },
      ],
    },
    {
      id: "reviewing-a-plan",
      title: "Reading the plan",
      blocks: [
        {
          type: "p",
          text: "The review step prints one panel per change. A typical file entry looks like:",
        },
        { type: "code", lang: "text", title: "Proposed change", code: "📄 weather_api.py\n\nFrom\n  Downloads/weather_api.py\n\nTo\n  Programming/Python/weather_api.py" },
        {
          type: "p",
          text: "Detected projects are shown with a 📦 marker and move as one unit — their contents are never listed file by file.",
        },
        {
          type: "callout",
          kind: "note",
          title: "One confirm for the whole plan",
          text: "In v0.1 the confirmation is a single yes/no for the entire plan — there is no per-change toggle. Review the list before you confirm, and if anything looks wrong, answer No and adjust the folder or retry.",
        },
      ],
    },
    {
      id: "after",
      title: "After applying",
      blocks: [
        {
          type: "list",
          items: [
            "Organized Copy creates a folder named <original>_Organised next to the original and copies files into it. The original is left untouched.",
            "Organize in Place builds the organized copy first, verifies it contains every file (by content hash), swaps it into the original's place, and only then removes the old folder.",
            "If anything fails, JishAtlas stops and tells you — the original folder is not modified when an error occurs.",
          ],
        },
      ],
    },
  ],
};
