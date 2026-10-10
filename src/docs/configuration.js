export default {
  slug: "configuration",
  title: "Configuration",
  description: "Gemini API key, local model location, and context size.",
  sections: [
    {
      id: "gemini-key",
      title: "Gemini API key",
      blocks: [
        {
          type: "p",
          text: "Set the key from backend menu option 3 or enter k at the folder prompt. JishAtlas masks the key while entering it.",
        },
        {
          type: "table",
          head: ["Run type", "Key file"],
          rows: [
            ["From source", ".env in the current working directory"],
            ["Packaged executable", "%LOCALAPPDATA%\\JishAtlas\\.env"],
          ],
        },
        {
          type: "p",
          text: "The file contains a plain-text credential. Keep it private. The GEMINI_API_KEY environment variable can also provide a key.",
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
            "Model file: Qwen3-1.7B-Q4_K_M.gguf.",
            "Storage directory: %LOCALAPPDATA%\\JishAtlas\\models\\ (falls back to the user's home directory if LOCALAPPDATA is unset).",
            "JISHATLAS_CONTEXT_TOKENS sets the context size from 4,096 to 40,960 tokens; the default is 32,768.",
          ],
        },
        {
          type: "p",
          text: "Source runs load the project .env file. Packaged runs read settings from the process environment; the Gemini key is stored separately in the app-data .env file.",
        },
      ],
    },
  ],
};
