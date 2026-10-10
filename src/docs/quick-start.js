export default {
  slug: "quick-start",
  title: "Quick Start",
  description: "Run an organization and review its plan.",
  sections: [
    {
      id: "run",
      title: "Run JishAtlas",
      blocks: [
        {
          type: "steps",
          steps: [
            { title: "Enter a full folder path", body: "At the folder prompt, enter a path such as C:\\Users\\You\\Downloads. Enter k to change the Gemini key or q to quit." },
            { title: "Choose a backend", body: "Select Local AI or Gemini. Gemini prompts for a key when none is configured." },
            { title: "Wait for scan and analysis", body: "JishAtlas scans the directory, detects projects, then requests a plan from the selected backend." },
            { title: "Review the plan", body: "Check the proposed source and destination paths. The plan is shown before any changes are applied." },
            { title: "Choose an apply mode", body: "Create an organized copy or organize in place. The default is organized copy." },
            { title: "Confirm", body: "Answer Yes to apply the plan. The default is No." },
          ],
        },
      ],
    },
    {
      id: "results",
      title: "Results",
      blocks: [
        {
          type: "list",
          items: [
            "Organized copy creates a new sibling directory named <folder>_Organised. If it already exists, JishAtlas selects a numbered name instead of overwriting it.",
            "In-place mode builds and verifies the organized copy before replacing the selected directory.",
            "The plan is confirmed as a whole; individual changes cannot be toggled.",
          ],
        },
      ],
    },
  ],
};
