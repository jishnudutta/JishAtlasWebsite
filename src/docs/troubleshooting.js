export default {
  slug: "troubleshooting",
  title: "Troubleshooting",
  description: "Common problems, the exact error messages JishAtlas prints, and how to fix them.",
  sections: [
    {
      id: "common-problems",
      title: "Common problems",
      blocks: [
        {
          type: "p",
          text: "Expand an item below for the likely cause and fix. If your problem isn't listed, open an issue on the project's GitHub repository.",
        },
        {
          type: "faq",
          items: [
            {
              title: "Local AI model download fails",
              body: "JishAtlas prints \u201cModel download failed\u201d. Check your internet connection and that you have ~1 GB of free disk space. The model is downloaded from Hugging Face into %LOCALAPPDATA%\\JishAtlas\\models\\. A partially downloaded file is detected and the download is retried on the next run.",
            },
            {
              title: "Gemini errors: invalid API key",
              body: "JishAtlas prints \u201cAI request failed\u201d or \u201cGemini returned invalid JSON\u201d. Check the key: it must be exact, with no extra spaces. If you set it earlier, look in the .env file (or the GEMINI_API_KEY environment variable) and correct it. Create a fresh key in the Google AI Studio console if needed and verify billing/quota is enabled.",
            },
            {
              title: "Windows shows a SmartScreen warning",
              body: "New, unsigned, or low-reputation applications can trigger a Windows warning. That's Windows doing its job, not a problem with your machine — don't disable Windows security features to bypass it. The recommended path is installing through the Microsoft Store, which avoids this warning entirely.",
            },
            {
              title: "Organization aborts with \u201cThe original folder has NOT been modified\u201d",
              body: "This is JishAtlas protecting you. It means the copy step hit errors, or the completeness check found files missing from the organized copy. Read the lines above the message — they list which items failed (for example \u201cpath escapes the folder being organized\u201d or a copy error). Fix the cause and run again.",
            },
            {
              title: "A .jishatlas_backup folder was left behind",
              body: "In-place mode renames the original to <folder>.jishatlas_backup while swapping in the organized copy, and removes it afterwards. If a run failed mid-swap or Windows couldn't delete the folder, the backup remains — JishAtlas prints \u201cYour files are safe in: …\u201d. Check it contains everything you expect, then delete it manually once you're satisfied.",
            },
            {
              title: "File copy errors during apply",
              body: "JishAtlas prints \u201cFailed to copy …\u201d with a reason. Common causes: a file is locked by another program, the destination path is invalid, or the target drive is full. In Organized Copy mode the original is never modified, so a failed copy is safe to retry. Close the locking program and try again.",
            },
            {
              title: "Model loading errors",
              body: "A partially downloaded or corrupted model file can fail to load. Delete the model files under %LOCALAPPDATA%\\JishAtlas\\models\\ and let JishAtlas download the model again. Ensure your hardware meets the model's requirements (mainly RAM and CPU).",
            },
            {
              title: "Folder prompt errors",
              body: "JishAtlas prints \u201cFolder does not exist\u201d or \u201cPath is not a folder\u201d when the path you typed is wrong or points to a file. Type the full path (for example C:\\Users\\You\\Downloads) and try again — the prompt accepts a path as typed, so quoted or relative paths may need adjusting.",
            },
            {
              title: "Gemini or Local AI returned invalid JSON",
              body: "If the AI response can't be parsed as the expected JSON plan, JishAtlas stops with that message. With Local AI this is rare because output is grammar-constrained; with Gemini it can happen on a bad response. Retry the run — and for Gemini, check your key and quota.",
            },
          ],
        },
      ],
    },
    {
      id: "smart-screen-details",
      title: "About the SmartScreen warning",
      blocks: [
        {
          type: "p",
          text: "If you run an unsigned build (for example, a developer build from GitHub), Windows may warn that the file isn't from a verified publisher. This is expected for new software that hasn't built reputation yet. The safest choice is the Microsoft Store installation, which is signed and verified.",
        },
        {
          type: "callout",
          kind: "warning",
          title: "Keep security on",
          text: "Don't disable SmartScreen or Defender to run the app. Use the Store version instead.",
        },
      ],
    },
  ],
};
