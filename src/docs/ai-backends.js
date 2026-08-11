export default {
  slug: "ai-backends",
  title: "AI Backends",
  description: "Local AI and Gemini — the exact models, requirements, privacy behavior, and when to use each.",
  sections: [
    {
      id: "two-options",
      title: "Two backends, one app",
      blocks: [
        {
          type: "p",
          text: "JishAtlas plans the organization using an AI backend, and you choose which one at a prompt each time you run it. There is no stored preference — every run asks. The rest of the flow — scanning, validation, preview, applying — is identical either way.",
        },
        { type: "table", head: ["", "Local AI", "Gemini"], rows: [
          ["Model", "Qwen3-1.7B (local, quantized)", "gemini-3.1-flash-lite (cloud)"],
          ["Where it runs", "On your computer", "Google's servers"],
          ["Internet", "Not required for analysis", "Required"],
          ["File info used", "Stays on your computer", "Names, paths, and local summaries sent to Google"],
          ["Setup", "Automatic ~1 GB model download", "API key required"],
          ["Best when", "You want analysis to stay local", "Local hardware is limited"],
        ]},
        {
          type: "callout",
          kind: "note",
          title: "Both backends share the same scan",
          text: "The folder scan, project detection, and content summarization always run locally — before you even pick a backend. The backend only decides who writes the organization plan.",
        },
      ],
    },
    {
      id: "local-ai",
      title: "Local AI",
      blocks: [
        {
          type: "list",
          items: [
            "Runs entirely on your computer. Offline.",
            "Uses a quantized Qwen3-1.7B model, loaded through llama.cpp.",
            "The model is downloaded automatically the first time you run JishAtlas (~1 GB), stored under %LOCALAPPDATA%\\JishAtlas\\models\\, and reused afterward.",
            "File information used for analysis stays on your computer.",
            "Requires local hardware capable of running the model — mainly RAM and CPU.",
          ],
        },
        {
          type: "p",
          text: "Local AI output is constrained by a JSON schema: the model is forced to return a valid JSON plan with exactly the fields JishAtlas expects, which removes a whole class of parse errors.",
        },
      ],
    },
    {
      id: "gemini",
      title: "Google Gemini",
      blocks: [
        {
          type: "list",
          items: [
            "Cloud-based. Internet required.",
            "Uses Google's gemini-3.1-flash-lite model, with JSON output requested.",
            "Requires a Gemini API key, entered on first use and stored locally in a .env file.",
            "Useful when local hardware is limited or you already have a key.",
          ],
        },
        {
          type: "callout",
          kind: "warning",
          title: "Privacy",
          text: "With Gemini, JishAtlas sends file names, paths, and the locally generated content summaries to Google. Raw file contents are never sent — text files are summarized by the local Qwen model during the scan first. Choose Local AI if you don't want any file information leaving your computer.",
        },
      ],
    },
    {
      id: "switching",
      title: "Choosing per run",
      blocks: [
        {
          type: "p",
          text: "JishAtlas asks for the backend at the start of every run (1 = Local AI, the default; 2 = Gemini). If you pick Gemini and no API key is configured, it prompts for one before contacting Google.",
        },
        {
          type: "p",
          text: "Plans are always validated and previewed before anything is applied, regardless of which backend created them.",
        },
      ],
    },
  ],
};
