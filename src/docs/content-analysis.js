export default {
  slug: "content-analysis",
  title: "Content Analysis",
  description: "File sample limits and backend-specific content processing.",
  sections: [
    {
      id: "scan",
      title: "Scan behavior",
      blocks: [
        {
          type: "list",
          items: [
            "JishAtlas attempts to read each file as UTF-8 and reads at most 1,200 characters.",
            "Binary, non-UTF-8, and unreadable files have no content sample; their paths and filenames remain in the plan input.",
            "Local AI mode summarizes readable samples with Qwen during the scan. This may download and load the model before plan generation.",
            "Gemini mode sends the readable text samples directly to Google along with paths and folder/project information. It does not run local summarization first.",
          ],
        },
      ],
    },
    {
      id: "limits",
      title: "Limits",
      blocks: [
        {
          type: "p",
          text: "JishAtlas does not extract text from images, PDFs, or archives. These files are planned using their names and relative paths.",
        },
      ],
    },
  ],
};
