export default {
  slug: "introduction",
  title: "Process Overview",
  description: "The JishAtlas scan, planning, review, and apply pipeline.",
  sections: [
    {
      id: "workflow",
      title: "Workflow",
      blocks: [
        {
          type: "steps",
          steps: [
            { title: "Select folder", body: "Enter the full path to an existing directory." },
            { title: "Select backend", body: "Choose Local AI or Gemini. Local AI summarizes readable text during scanning; Gemini uses text samples directly." },
            { title: "Scan", body: "JishAtlas records files and folders, excludes configured passthrough directories, and detects project roots." },
            { title: "Generate plan", body: "The selected backend returns a JSON plan of file destinations, optional filenames, and project destinations." },
            { title: "Review", body: "JishAtlas validates the plan and displays proposed changes. No files have been changed yet." },
            { title: "Apply", body: "Choose organized copy or in-place mode, then confirm. The default confirmation is No." },
          ],
        },
      ],
    },
    {
      id: "runtime",
      title: "Runtime",
      blocks: [
        {
          type: "list",
          items: [
            "JishAtlas is a Windows terminal application; it does not provide a desktop GUI.",
            "Local AI uses Qwen through llama.cpp. Gemini uses the Google GenAI API.",
            "Detected projects are planned and copied as whole directories.",
            "Text samples are limited to 1,200 characters per file. Binary or unreadable files are organized using paths and filenames.",
          ],
        },
      ],
    },
  ],
};
