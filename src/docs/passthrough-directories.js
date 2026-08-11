export default {
  slug: "passthrough-directories",
  title: "Passthrough Directories",
  description: "The built-in list of directories JishAtlas always skips — and exactly how they're handled.",
  sections: [
    {
      id: "the-list",
      title: "The built-in list",
      blocks: [
        {
          type: "p",
          text: "JishAtlas comes with a fixed set of directories that are never analyzed or reorganized. They're pruned from the scan before anything else happens, so JishAtlas doesn't even walk inside them:",
        },
        {
          type: "code",
          lang: "text",
          title: "Passthrough directories",
          code: ".git\nnode_modules\n__pycache__\n.venv\nvenv\nbuild\ndist\n.vscode\n.vs\nobj\n.idea",
        },
        {
          type: "p",
          text: "These are generated, cached, or versioned data that must keep its exact path. Moving or renaming them breaks the tools that rely on them.",
        },
      ],
    },
    {
      id: "behavior",
      title: "How they're handled",
      blocks: [
        {
          type: "list",
          items: [
            "During the scan they're removed from the walk, so JishAtlas never lists their contents or summarizes files inside them.",
            "Their paths are recorded as passthrough, and the AI is never asked to place anything inside them.",
            "In Organized Copy mode, each passthrough directory is copied over exactly as it is — nothing inside is renamed, moved, or reorganized.",
            "In in-place mode, they're preserved through the folder swap automatically.",
          ],
        },
        { type: "filetree", tree: { name: "MyProject", children: [
          { name: ".git", type: "dir", badge: "skipped", badgeTone: "safe" },
          { name: "node_modules", type: "dir", badge: "skipped", badgeTone: "safe" },
          { name: "src", type: "dir", children: [{ name: "app.js", type: "file" }] },
          { name: "package.json", type: "file" },
        ]}},
        {
          type: "callout",
          kind: "note",
          title: "Nested passthrough directories",
          text: "Passthrough directories inside a detected project travel with the project as one unit — they're never pulled out or reorganized on their own.",
        },
      ],
    },
    {
      id: "protected-folders",
      title: "About protected directories",
      blocks: [
        {
          type: "p",
          text: "In v0.1 the passthrough list is built in and fixed — there is no UI for marking your own directories as protected. If JishAtlas ever suggests moving something you want to keep put, the way to prevent it today is to review the plan and not confirm it.",
        },
        {
          type: "p",
          text: "Detected projects are the one exception to this: they're treated as protected during organization by design, and their layout stays exactly as it is.",
        },
      ],
    },
  ],
};
