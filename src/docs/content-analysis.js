export default {
  slug: "content-analysis",
  title: "Content Analysis",
  description: "Exactly what JishAtlas reads from your files, how summaries are made, and where they go.",
  sections: [
    {
      id: "what-it-does",
      title: "What content analysis does",
      blocks: [
        {
          type: "p",
          text: "Filenames alone can be misleading (IMG_2041.jpg says nothing). To organize better, JishAtlas also looks inside files for readable text during the scan, summarizes it, and includes those summaries in the organization plan request.",
        },
        {
          type: "p",
          text: "This is best-effort analysis. It improves guesses; it does not guarantee perfect categorization.",
        },
      ],
    },
    {
      id: "how-it-works",
      title: "How it works",
      blocks: [
        {
          type: "steps",
          steps: [
            { title: "Read as text", body: "JishAtlas tries to read each file as UTF-8 text. Files that fail to decode (images, PDFs, archives, compiled binaries) are skipped — no content is available for them." },
            { title: "Summarize locally", body: "For readable text files, a small local Qwen model condenses the first 2,000 characters into a single sentence. This always runs on your computer, with the local model, regardless of backend." },
            { title: "Send to the planner", body: "The summary travels with the file's name and path into the organization plan request — to the local model, or to Gemini if you chose it." },
          ],
        },
      ],
    },
    {
      id: "what-it-reads",
      title: "What JishAtlas can read",
      blocks: [
        {
          type: "list",
          items: [
            "Plain-text files (txt, md, csv, logs, …)",
            "Source code and configuration files",
            "Markup and structured text files",
            "Anything that decodes as UTF-8 text",
          ],
        },
        {
          type: "p",
          text: "The analysis is limited to the first 2,000 characters of each file, summarized in one sentence. It does not read binary formats, images, PDFs, or archives — those are organized by filename and location only.",
        },
        {
          type: "callout",
          kind: "warning",
          title: "Experimental",
          text: "Content analysis is experimental in v0.1 Alpha. It only handles UTF-8 text, only reads the first 2,000 characters, and the summary quality depends on the local model. Don't expect deep understanding of complex files.",
        },
      ],
    },
    {
      id: "privacy",
      title: "Where content goes",
      blocks: [
        {
          type: "list",
          items: [
            "Local AI: everything — scanning, summarizing, and planning — stays on your computer.",
            "Gemini: file names, paths, and the locally generated summaries are sent to Google. Raw file contents are never sent; only the one-sentence summaries the local model produces.",
            "Either way, JishAtlas never uploads files themselves.",
          ],
        },
      ],
    },
  ],
};
