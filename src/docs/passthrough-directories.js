export default {
  slug: "passthrough-directories",
  title: "Passthrough Directories",
  description: "Directories excluded from scanning and copied without reorganization.",
  sections: [
    {
      id: "built-in-list",
      title: "Built-in list",
      blocks: [
        {
          type: "code",
          lang: "text",
          code: ".git\nnode_modules\n__pycache__\n.venv\nvenv\nbuild\ndist\n.vscode\n.vs\nobj\n.idea",
        },
        {
          type: "p",
          text: "Matching directories are excluded from the scan by directory name, at any depth. Their contents are not sent to the AI backend.",
        },
      ],
    },
    {
      id: "copy-behavior",
      title: "Copy behavior",
      blocks: [
        {
          type: "list",
          items: [
            "Organized-copy mode copies passthrough directories to the output without reorganizing their contents.",
            "A passthrough directory inside a detected project is included in the whole-project copy.",
            "The list is fixed; custom exclusions are not currently supported.",
          ],
        },
      ],
    },
  ],
};
