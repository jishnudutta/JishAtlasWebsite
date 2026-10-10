export default {
  slug: "installation",
  title: "Installation",
  description: "Download the Windows executable or run JishAtlas from source.",
  sections: [
    {
      id: "windows",
      title: "Windows executable",
      blocks: [
        {
          type: "p",
          text: "Download JishAtlas.exe from the GitHub Releases page and run it. Python is not required. The application opens in a terminal window.",
        },
        {
          type: "p",
          text: "Local AI downloads its model from Hugging Face on first use. This requires internet access and additional disk space. Gemini requires an API key and internet access.",
        },
      ],
    },
    {
      id: "source",
      title: "Run from source",
      blocks: [
        {
          type: "p",
          text: "Requires Python 3.13 or later. Dependencies are declared in pyproject.toml.",
        },
        {
          type: "code",
          lang: "powershell",
          title: "Install and run",
          code: "git clone https://github.com/jishnudutta/JishAtlas.git\ncd JishAtlas\nuv sync\nuv run python main.py",
        },
      ],
    },
  ],
};
