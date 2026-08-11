import FileTree from "../FileTree";
import { ShieldIcon } from "../icons";

const MARKERS = [".git", "package.json", "pyproject.toml", "Cargo.toml", "go.mod", "CMakeLists.txt", "*.sln", "*.csproj"];

const PROJECT = {
  name: "MyProject",
  children: [
    { name: "src", type: "dir", children: [{ name: "main.py", type: "file" }] },
    { name: "tests", type: "dir", children: [{ name: "test_main.py", type: "file" }] },
    { name: "package.json", type: "file" },
    { name: "README.md", type: "file" },
  ],
};

export default function ProjectProtection() {
  return (
    <section className="section bg-bg-soft" aria-labelledby="projects-heading">
      <div className="container">
        <div className="grid-2 items-center">
          <div data-reveal>
            <p className="kicker">Project protection</p>
            <h2 id="projects-heading">Your projects stay together</h2>
            <p>
              JishAtlas detects common project structures by their marker files and treats each
              detected project as a single unit.
            </p>
            <div className="chip-row my-[1.1rem] mb-[1.6rem]">
              {MARKERS.map((m) => (
                <span className="chip plain" key={m}>
                  {m}
                </span>
              ))}
            </div>
            <ul className="checklist m-0 grid list-none gap-[0.6rem] p-0">
              <li className="flex items-start gap-[0.65rem] text-[0.95rem] text-ink-2">
                <span className="mt-1 shrink-0 text-ok">
                  <ShieldIcon size={16} />
                </span>
                JishAtlas moves the project as one unit — never file by file.
              </li>
              <li className="flex items-start gap-[0.65rem] text-[0.95rem] text-ink-2">
                <span className="mt-1 shrink-0 text-ok">
                  <ShieldIcon size={16} />
                </span>
                It does not reorganize the project's internal structure.
              </li>
            </ul>
          </div>
          <div data-reveal style={{ "--reveal-delay": "100ms" }}>
            <FileTree tree={PROJECT} collapsible />
          </div>
        </div>
      </div>
    </section>
  );
}
