export default {
  slug: "organization",
  title: "Organization Modes",
  description: "Copy mode and in-place mode behavior.",
  sections: [
    {
      id: "copy",
      title: "Create an organized copy",
      blocks: [
        {
          type: "list",
          items: [
            "Creates a new sibling directory named <folder>_Organised.",
            "If that directory already exists, creates a numbered alternative; existing output is not replaced.",
            "Copies files to planned destinations and copies detected projects as whole directories.",
            "Leaves the selected source directory unchanged.",
          ],
        },
      ],
    },
    {
      id: "in-place",
      title: "Organize in place",
      blocks: [
        {
          type: "steps",
          steps: [
            { title: "Copy", body: "Builds an organized sibling copy using the approved plan." },
            { title: "Check", body: "Stops if copying reports errors. Otherwise hashes readable files in the source and checks the copy for matching contents." },
            { title: "Swap", body: "Renames the source to a .jishatlas_backup path, then renames the organized copy to the original path." },
            { title: "Cleanup", body: "Deletes the backup after a successful swap. If swapping fails, JishAtlas attempts to restore the source." },
          ],
        },
        {
          type: "callout",
          kind: "warning",
          title: "Backup",
          text: "In-place mode removes the temporary backup after a successful swap. Keep a separate backup of important data.",
        },
      ],
    },
    {
      id: "naming",
      title: "Destinations and names",
      blocks: [
        {
          type: "p",
          text: "The plan can select a relative destination folder and a new filename. Detected projects keep their original folder name and internal layout. JishAtlas rejects source or destination paths that resolve outside the relevant root.",
        },
      ],
    },
  ],
};
