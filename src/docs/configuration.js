export default {
  slug: "configuration",
  title: "Configuration",
  description: "Everything JishAtlas stores — the Gemini key in .env, the model folder — and the environment variables it reads.",
  sections: [
    {
      id: "what-is-configured",
      title: "What JishAtlas stores",
      blocks: [
        {
          type: "p",
          text: "JishAtlas keeps configuration minimal. There is no settings screen — the choices you make (AI backend, organization mode) are asked fresh on every run. The only things JishAtlas persists are the Gemini API key and the downloaded local model.",
        },
        {
          type: "list",
          items: [
            "Gemini API key — stored in a .env file, set the first time you use the Gemini backend.",
            "Local model — stored under %LOCALAPPDATA%\\JishAtlas\\models\\, downloaded once and reused.",
          ],
        },
      ],
    },
    {
      id: "gemini-key",
      title: "Gemini API key",
      blocks: [
        {
          type: "p",
          text: "When you choose Gemini and no key is configured yet, JishAtlas asks you to paste one (typed as a hidden password prompt) and saves it to a .env file.",
        },
        {
          type: "steps",
          steps: [
            { title: "Create a key", body: "In the Google AI Studio / Gemini API console, create a project and an API key." },
            { title: "Paste it into JishAtlas", body: "Choose Gemini at the backend prompt. If no key is set, JishAtlas asks for it and saves it to .env." },
            { title: "Keep it private", body: "An API key is a credential. Don't paste it into code, chats, or screenshots." },
          ],
        },
        { type: "code", lang: "text", title: "The .env file", code: "GEMINI_API_KEY=your_key_here" },
        {
          type: "callout",
          kind: "warning",
          title: "Never share keys",
          text: "The .env file is plain text, next to where you run JishAtlas. Don't commit it to version control or share it. If you think a key leaked, revoke it in the Google console and create a new one.",
        },
      ],
    },
    {
      id: "model-storage",
      title: "Local model storage",
      blocks: [
        {
          type: "p",
          text: "The local model is downloaded on first run and stored on your computer. It is a separate download — it is not bundled inside the JishAtlas executable.",
        },
        { type: "code", lang: "text", title: "Model directory", code: "%LOCALAPPDATA%\\JishAtlas\\models\\" },
        {
          type: "p",
          text: "The model is a quantized Qwen3-1.7B file. If the file is missing or corrupted, the next run re-downloads it automatically.",
        },
      ],
    },
    {
      id: "env-vars",
      title: "Environment variables",
      blocks: [
        {
          type: "p",
          text: "JishAtlas reads two environment variables:",
        },
        { type: "table", head: ["Variable", "Used for"], rows: [
          ["GEMINI_API_KEY", "The Gemini backend reads the key from this variable first; the .env file is the fallback."],
          ["LOCALAPPDATA", "Base location for the JishAtlas app-data folder, which contains the models directory. Falls back to the user's home folder if unset."],
        ]},
        {
          type: "p",
          text: "You can set GEMINI_API_KEY in your environment instead of using the .env file — JishAtlas checks the environment first.",
        },
      ],
    },
  ],
};
