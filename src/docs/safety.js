export default {
  slug: "safety",
  title: "Validation and Apply Checks",
  description: "Checks performed before and during filesystem changes.",
  sections: [
    {
      id: "plan-validation",
      title: "Plan validation",
      blocks: [
        {
          type: "list",
          items: [
            "AI output is parsed and normalized against the scanned files and detected project roots.",
            "Source and destination paths are checked to prevent paths escaping their root directories.",
            "Missing, nonexistent, or invalid results are skipped and counted as errors.",
            "The complete plan is displayed before the user confirms. Confirmation defaults to No.",
          ],
        },
      ],
    },
    {
      id: "apply-checks",
      title: "Apply checks",
      blocks: [
        {
          type: "list",
          items: [
            "Copy mode leaves the source directory unchanged and reports files missing from the output.",
            "In-place mode stops if copy errors occur.",
            "Before in-place replacement, readable source files are checked against the output using SHA-256 hashes.",
            "The original is renamed to a temporary backup before the organized copy is swapped into place. If the swap fails, JishAtlas attempts to restore the original.",
          ],
        },
        {
          type: "callout",
          kind: "warning",
          title: "Maintain separate backups",
          text: "The temporary in-place backup is deleted after a successful swap. Keep an independent backup of important data.",
        },
      ],
    },
  ],
};
