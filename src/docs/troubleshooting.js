export default {
  slug: "troubleshooting",
  title: "Troubleshooting",
  description: "Common startup, backend, and apply errors.",
  sections: [
    {
      id: "issues",
      title: "Common issues",
      blocks: [
        {
          type: "faq",
          items: [
            {
              title: "Folder does not exist",
              body: "Enter the full path to an existing directory. Paths may be entered with or without surrounding double quotes.",
            },
            {
              title: "Local model download or load fails",
              body: "Check internet access for the initial download and available disk space in %LOCALAPPDATA%\\JishAtlas\\models\\. If the model file is incomplete or damaged, remove it and retry.",
            },
            {
              title: "Gemini request fails",
              body: "Check the API key, internet connection, and Google API quota. Replace the key from backend menu option 3 or enter k at the folder prompt.",
            },
            {
              title: "In-place mode stops before replacement",
              body: "Review the copy errors or missing-file report. The original directory is retained when copying or verification fails.",
            },
            {
              title: "A .jishatlas_backup directory remains",
              body: "The directory is retained if a folder swap or backup cleanup fails. Check its contents before removing it manually.",
            },
          ],
        },
      ],
    },
  ],
};
