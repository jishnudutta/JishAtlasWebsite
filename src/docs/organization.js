export default {
  slug: "organization",
  title: "Organization Modes",
  description: "Organized Copy vs. Organize in Place — what each mode actually does, under the hood.",
  sections: [
    {
      id: "two-modes",
      title: "Two ways to organize",
      blocks: [
        { type: "table", head: ["", "Organized Copy", "Organize in Place"], rows: [
          ["Original folder", "Left untouched", "Replaced by a verified copy"],
          ["Result", "A new <folder>_Organised folder beside the original", "The folder itself is restructured"],
          ["How it works", "Files are copied into a new folder", "Copy is built and verified first, then swapped into place"],
          ["Safety", "Highest — nothing is moved or renamed in the original", "Original is only removed after a complete, hash-verified copy exists"],
          ["Disk usage", "Duplicates data", "Temporarily duplicates, then removes the original"],
        ]},
        {
          type: "callout",
          kind: "tip",
          title: "Recommendation",
          text: "First-time users should use Organized Copy. Once you're comfortable with the plans JishAtlas produces, in-place organization is available for folders you want restructured directly.",
        },
      ],
    },
    {
      id: "organized-copy",
      title: "Organized Copy",
      blocks: [
        {
          type: "p",
          text: "JishAtlas creates a new folder named <original>_Organised next to the original and copies your files into it according to the approved plan — including a copy of the original file metadata (copy2). The original folder keeps its exact layout: nothing is moved, renamed, or deleted in place. You compare, then keep or delete the original yourself.",
        },
        {
          type: "list",
          items: [
            "Individual files are copied into their suggested folders with their suggested names.",
            "Detected projects are copied as whole units, keeping their original names.",
            "Passthrough directories (like node_modules or .git) are copied over exactly as they are, so nothing they contain is lost or reorganized.",
          ],
        },
        {
          type: "callout",
          kind: "note",
          title: "Rebuilt from scratch",
          text: "If an _Organised folder already exists from a previous run, JishAtlas deletes it and rebuilds from scratch. It never merges new results into stale content.",
        },
      ],
    },
    {
      id: "in-place",
      title: "Organize in Place",
      blocks: [
        {
          type: "p",
          text: "In-place mode uses the same organized-copy machinery first, then swaps folders. The sequence is deliberately conservative:",
        },
        {
          type: "steps",
          steps: [
            { title: "Build the organized copy", body: "The same copy step as Organized Copy runs first, reporting any errors it hits." },
            { title: "Abort on any error", body: "If the copy reported any errors, JishAtlas stops and prints \u201cThe original folder has NOT been modified.\u201d" },
            { title: "Verify completeness", body: "Every file in the original is hashed (SHA-256) and matched against the copy by content — not by path, since files may have been renamed. If anything is missing, it aborts and the original stays untouched." },
            { title: "Swap", body: "The original folder is renamed to <folder>.jishatlas_backup, and the organized copy is renamed into the original's place." },
            { title: "Remove the backup", body: "Only after the swap has fully succeeded is the backup folder deleted. If anything fails mid-swap, JishAtlas tries to restore the original and tells you where your files are." },
          ],
        },
        {
          type: "callout",
          kind: "warning",
          title: "Back up first",
          text: "In-place organization replaces your real folder. JishAtlas verifies the copy before swapping and keeps a temporary .jishatlas_backup folder, but it does not keep permanent backups. Keep your own backup of important data before running it.",
        },
      ],
    },
    {
      id: "renaming",
      title: "File renaming",
      blocks: [
        {
          type: "p",
          text: "The plan can include a suggested new name for each file (for example, notes.txt → physics_notes.txt). The rules given to the AI are strict:",
        },
        {
          type: "list",
          items: [
            "The file extension is never changed.",
            "Source code and text files get lowercase_with_underscores names.",
            "Every final destination must be unique.",
            "Renames are listed in the review screen like any other change.",
          ],
        },
        { type: "code", lang: "text", title: "A rename suggestion", code: "notes.txt  →  physics_notes.txt" },
        {
          type: "p",
          text: "A file that has no suggested name keeps its original name and is only moved to its suggested folder.",
        },
      ],
    },
  ],
};
