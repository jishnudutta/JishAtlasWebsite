import FileTree from "../FileTree";

const SKIPPED = [".git", "node_modules", "__pycache__", ".venv", "venv", "build", "dist", ".vscode", ".idea"];

const TREE = {
  name: "MyProject",
  children: [
    { name: ".git", type: "dir", badge: "skipped" },
    { name: "node_modules", type: "dir", badge: "skipped" },
    { name: "__pycache__", type: "dir", badge: "skipped" },
    { name: ".venv", type: "dir", badge: "skipped" },
    { name: "src", type: "dir", children: [{ name: "app.py", type: "file" }] },
    { name: "pyproject.toml", type: "file" },
  ],
};

export default function PassthroughSection() {
  return (
    <section className="section" aria-labelledby="passthrough-heading">
      <div className="container">
        <div className="grid-2 items-center">
          <FileTree tree={TREE} collapsible />
          <div>
            <p className="kicker">Passthrough directories</p>
            <h2 id="passthrough-heading">Some folders are left alone</h2>
            <p>
              Generated, cached, and versioned directories keep their exact path. Moving or
              renaming them would break the tools that rely on them — so JishAtlas skips them
              entirely.
            </p>
            <div className="chip-row mt-[1.1rem]">
              {SKIPPED.map((m) => (
                <span className="chip plain" key={m}>
                  {m}
                </span>
              ))}
            </div>
            <p className="small mt-4 text-ink-2">
              Anything you mark as protected is treated the same way — untouched in the plan and in
              practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
