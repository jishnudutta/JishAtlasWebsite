export default {
  slug: "installation",
  title: "Installation",
  description: "Install JishAtlas on Windows and get your AI backend ready on first run.",
  sections: [
    {
      id: "from-the-microsoft-store",
      title: "From the Microsoft Store",
      blocks: [
        {
          type: "p",
          text: "The Microsoft Store is the recommended way to install JishAtlas. It handles updates and avoids Windows' warning about unsigned executables entirely.",
        },
        {
          type: "steps",
          steps: [
            { title: "Click Download for Windows", body: "The button on this site opens the JishAtlas listing in the Microsoft Store." },
            { title: "Install", body: "Click Get (or Install) in the Store and wait for the download to finish." },
            { title: "Launch", body: "Open JishAtlas from Start or the Store. It opens in a terminal window with a short splash screen." },
          ],
        },
        {
          type: "callout",
          kind: "note",
          title: "It's a terminal app",
          text: "JishAtlas runs inside a console window. The whole flow — folder selection, plan review, and applying changes — happens through typed prompts and menus. There is no graphical window in v0.1.",
        },
      ],
    },
    {
      id: "first-run-model",
      title: "First run: the local model",
      blocks: [
        {
          type: "p",
          text: "The first time you organize a folder, JishAtlas downloads a small Qwen model (Qwen3-1.7B, quantized) from Hugging Face. The download is roughly 1 GB and happens once — after that, the model is reused on every run.",
        },
        {
          type: "p",
          text: "In practice this happens on your first run, whichever backend you choose: JishAtlas uses the local model to summarize text files during the scan, and the scan runs before backend selection. A folder with no readable text files wouldn't trigger the summarizer — in that case the model downloads the first time Local AI planning is used.",
        },
        { type: "code", lang: "text", title: "Model storage", code: "%LOCALAPPDATA%\\JishAtlas\\models\\" },
        {
          type: "p",
          text: "The model is stored on your computer and reused on later runs. It is not bundled inside the executable, and the executable itself stays small.",
        },
        {
          type: "callout",
          kind: "warning",
          title: "Download required",
          text: "If the model can't be downloaded (no internet, or not enough disk space), JishAtlas stops with an error. The model download needs internet access even if you plan to use the offline Local AI backend afterward.",
        },
      ],
    },
    {
      id: "first-run-gemini",
      title: "First run: Gemini",
      blocks: [
        {
          type: "p",
          text: "If you choose Gemini as the AI backend and no API key is configured yet, JishAtlas asks you to paste one. The key is stored in a local .env file — see Configuration for where it lives and how to change it.",
        },
        {
          type: "callout",
          kind: "warning",
          title: "Cloud usage",
          text: "With Gemini, file names, paths, and the locally generated content summaries are sent to Google's servers. Raw file contents are never sent — see Content Analysis. Use Local AI if you want analysis to stay on your computer.",
        },
      ],
    },
    {
      id: "requirements",
      title: "Requirements",
      blocks: [
        {
          type: "list",
          items: [
            "Windows (the packaged executable; a 64-bit system is expected for the bundled build)",
            "Roughly 1 GB of free disk space for the local model",
            "For Local AI: enough RAM and CPU to run a small LLM comfortably",
            "For Gemini: an internet connection and a valid Gemini API key",
          ],
        },
        {
          type: "p",
          text: "You do not need to install Python. The Store build is a self-contained executable.",
        },
      ],
    },
    {
      id: "running-from-source",
      title: "Running from source",
      blocks: [
        {
          type: "p",
          text: "Developers can run JishAtlas directly from Python. It requires Python 3.13 or newer. The dependencies are declared in pyproject.toml and include llama-cpp-python, google-genai, huggingface-hub, rich, python-dotenv, and requests.",
        },
        { type: "code", lang: "bash", title: "Run from source", code: "python -m venv .venv\n.venv\\Scripts\\activate\npip install .\npython main.py" },
      ],
    },
  ],
};
