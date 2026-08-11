export default {
  slug: "projects",
  title: "Project Detection",
  description: "How JishAtlas finds projects with a scoring system and why it treats them as single units.",
  sections: [
    {
      id: "how-detection-works",
      title: "How detection works",
      blocks: [
        {
          type: "p",
          text: "JishAtlas scores every directory in the folder. Each directory accumulates points from three kinds of evidence, and any directory reaching a score of 100 is treated as a project root:",
        },
        {
          type: "list",
          items: [
            "Marker files — well-known project files with confidence weights (a .git folder or package.json alone is worth 100).",
            "Marker directories — structural folders like src, tests, Assets, or Source that add weight.",
            "Project file patterns — *.sln, *.csproj, *.vbproj, *.fsproj, *.xcodeproj, *.xcworkspace, and *.uproject each count as 100.",
          ],
        },
        {
          type: "code",
          lang: "text",
          title: "High-confidence markers (score 100)",
          code: ".git\npackage.json\npyproject.toml\nCargo.toml\ngo.mod\npom.xml\npubspec.yaml\ncomposer.json\nPackage.swift\n*.sln / *.csproj / *.vbproj / *.fsproj\n*.xcodeproj / *.xcworkspace / *.uproject",
        },
        {
          type: "p",
          text: "Lower-weight markers build up a score from several clues — a folder with CMakeLists.txt, a Makefile, and a src directory together crosses the threshold even if no single file alone would.",
        },
      ],
    },
    {
      id: "single-unit",
      title: "Projects move as one unit",
      blocks: [
        { type: "filetree", tree: { name: "MyProject", children: [
          { name: "src", type: "dir", children: [{ name: "main.py", type: "file" }] },
          { name: "tests", type: "dir", children: [{ name: "test_main.py", type: "file" }] },
          { name: "package.json", type: "file" },
          { name: "README.md", type: "file" },
        ]}},
        {
          type: "p",
          text: "When a directory is detected as a project, it's handed to the AI as an indivisible unit. The plan may only move the whole project to a different parent folder — the AI is explicitly forbidden from renaming, moving, or modifying anything inside it.",
        },
        {
          type: "list",
          items: [
            "JishAtlas moves the project as one unit — never file by file.",
            "It does not reorganize the project's internal structure.",
            "Files inside a project are never individually renamed or relocated.",
            "The project keeps its original folder name.",
          ],
        },
        {
          type: "callout",
          kind: "note",
          title: "Authoritative list",
          text: "The detected project roots are authoritative. The AI may only classify something as a project if its path exactly matches the detected list — it cannot invent projects from filenames or contents.",
        },
      ],
    },
    {
      id: "automatic",
      title: "Detection is automatic",
      blocks: [
        {
          type: "p",
          text: "Project detection runs automatically during the scan, before you choose an AI backend. There is no on/off switch and no manual list to edit in v0.1 — the markers above are fixed.",
        },
        {
          type: "p",
          text: "You still see the effects in the review step: detected projects appear as a single move (marked 📦) rather than as a pile of file-level changes.",
        },
      ],
    },
  ],
};
