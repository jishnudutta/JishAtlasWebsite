export default {
  slug: "projects",
  title: "Project Detection",
  description: "Project root detection and whole-directory handling.",
  sections: [
    {
      id: "detection",
      title: "Detection",
      blocks: [
        {
          type: "p",
          text: "JishAtlas scores directories using known project files, directory names, and file patterns. A directory with a score of 100 or higher is treated as a project root. Detection runs for each selected folder and cannot currently be configured in the app.",
        },
        {
          type: "code",
          lang: "text",
          title: "Examples of high-confidence markers",
          code: ".git\npackage.json\npyproject.toml\nCargo.toml\ngo.mod\npom.xml\n*.sln\n*.csproj\n*.uproject",
        },
      ],
    },
    {
      id: "handling",
      title: "Handling",
      blocks: [
        {
          type: "list",
          items: [
            "The detected root is sent to the selected AI backend as one planning item.",
            "The plan may change the project's parent folder only.",
            "Copy mode copies the directory as a unit; in-place mode moves that copy into the planned location.",
            "Files within the project are not individually planned or renamed.",
          ],
        },
      ],
    },
  ],
};
