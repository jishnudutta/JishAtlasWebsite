export default {
  slug: "ai-backends",
  title: "AI Backends",
  description: "Model, data flow, and requirements for each analysis backend.",
  sections: [
    {
      id: "local-ai",
      title: "Local AI",
      blocks: [
        {
          type: "list",
          items: [
            "Model: Qwen3-1.7B-Q4_K_M.gguf, loaded with llama.cpp.",
            "The model downloads from Hugging Face on first use and is stored in %LOCALAPPDATA%\\JishAtlas\\models\\.",
            "Readable text samples are summarized locally; planning also runs locally.",
            "Internet access is needed to download the model, but not for later analysis once it is installed.",
          ],
        },
      ],
    },
    {
      id: "gemini",
      title: "Gemini",
      blocks: [
        {
          type: "list",
          items: [
            "Model: gemini-3.1-flash-lite.",
            "Requires internet access and a Gemini API key.",
            "The request includes relative file paths, folder and project information, and up to 1,200 characters of readable text per file.",
            "Files themselves are not uploaded. The text samples are sent to Google's API.",
          ],
        },
        {
          type: "p",
          text: "Choose a backend each run. Both backends use the same plan validation, review, and apply workflow.",
        },
      ],
    },
  ],
};
