import { useEffect, useRef, useState } from "react";
import FileTree from "../FileTree";
import { FolderIcon } from "../icons";

const MESSY = {
  name: "Downloads",
  children: [
    { name: "holiday.jpg", type: "file" },
    { name: "project", type: "dir", children: [
      { name: "package.json", type: "file" },
      { name: "src", type: "dir", children: [{ name: "app.js", type: "file" }] },
      { name: "README.md", type: "file" },
    ]},
    { name: "python.py", type: "file" },
    { name: "school.pdf", type: "file" },
    { name: "game.cpp", type: "file" },
    { name: "notes.txt", type: "file" },
    { name: "react.jsx", type: "file" },
  ],
};

const ORGANIZED = {
  name: "Downloads",
  children: [
    { name: "Photos", type: "dir", children: [{ name: "holiday.jpg", type: "file" }] },
    { name: "project", type: "dir", badge: "protected", badgeTone: "safe", children: [
      { name: "package.json", type: "file" },
      { name: "src", type: "dir", children: [{ name: "app.js", type: "file" }] },
      { name: "README.md", type: "file" },
    ]},
    { name: "Programming", type: "dir", children: [
      { name: "Python", type: "dir", children: [{ name: "python.py", type: "file" }] },
      { name: "C++", type: "dir", children: [{ name: "game.cpp", type: "file" }] },
      { name: "React", type: "dir", children: [{ name: "react.jsx", type: "file" }] },
    ]},
    { name: "School", type: "dir", children: [
      { name: "school.pdf", type: "file" },
      { name: "notes.txt", type: "file" },
    ]},
  ],
};

const LOG = {
  scanning: [
    "Scanning folder…",
    "142 files · 23 folders",
    "4 projects detected",
    "7 protected directories",
  ],
  analyzing: [
    "Analyzing names and content…",
    "Inferring file types…",
    "Asking AI for an organization plan…",
    "Validating plan…",
  ],
};

export default function OrganizationDemo() {
  const [stage, setStage] = useState("idle"); // idle | scanning | analyzing | done
  const [progress, setProgress] = useState(0);
  const runId = useRef(0);

  const reduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => () => runId.current++, []);

  const run = () => {
    const id = ++runId.current;
    setStage("scanning");
    setProgress(0);
    const delay = (ms) => (reduced ? 0 : ms);
    const later = (ms, fn) => setTimeout(fn, delay(ms));
    later(400, () => runId.current === id && setProgress(20));
    later(800, () => runId.current === id && setProgress(40));
    later(1200, () => runId.current === id && setProgress(60));
    later(1500, () => runId.current === id && setStage("analyzing"));
    later(1750, () => runId.current === id && setProgress(75));
    later(2050, () => runId.current === id && setProgress(90));
    later(2400, () => runId.current === id && setProgress(100));
    later(2600, () => runId.current === id && setStage("done"));
  };

  const reset = () => {
    runId.current++;
    setStage("idle");
    setProgress(0);
  };

  const running = stage === "scanning" || stage === "analyzing";
  const dot = stage === "done" ? "bg-ok" : running ? "bg-accent animate-[pulse_1.4s_ease_infinite]" : "bg-line-strong";

  return (
    <section className="section" aria-labelledby="demo-heading">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Live demo</p>
          <h2 id="demo-heading">See JishAtlas in action</h2>
          <p>
            A simulated folder, organized the way JishAtlas works. No files from your computer are
            touched — this runs entirely in your browser.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-md">
          <div className="flex flex-wrap items-center gap-3 border-b border-line bg-bg-soft px-[1.2rem] py-[0.9rem]">
            <span className="mr-auto font-mono text-[0.78rem] text-ink-3">Downloads — simulated demo</span>
            {stage !== "idle" && (
              <button className="btn secondary sm" type="button" onClick={reset}>
                Reset demo
              </button>
            )}
            <button className="btn primary sm" type="button" onClick={run} disabled={running || stage === "done"}>
              <FolderIcon size={14} />
              {stage === "done" ? "Organized" : "Organize this folder"}
            </button>
          </div>

          <div className="grid grid-cols-2 max-[960px]:grid-cols-1">
            <div className="min-w-0 px-[1.4rem] pb-[1.5rem] pt-[1.3rem]">
              <span className="mb-[0.9rem] inline-flex items-center gap-2 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-ink-3">
                <span className="size-2 rounded-full bg-line-strong" />
                Before
              </span>
              <FileTree tree={MESSY} collapsible />
            </div>

            <div className="min-w-0 border-l border-line px-[1.4rem] pb-[1.5rem] pt-[1.3rem] max-[960px]:border-l-0 max-[960px]:border-t">
              <span className="mb-[0.9rem] inline-flex items-center gap-2 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-ink-3">
                <span className={`size-2 rounded-full ${dot}`} />
                After
              </span>
              {stage === "idle" && (
                <div className="min-h-[9rem] font-mono text-[0.82rem] leading-[1.8] text-ink-2">
                  The organized result will appear here. Press “Organize this folder” to run the
                  simulated scan, analysis, and planning.
                </div>
              )}
              {running && (
                <div className="min-h-[9rem] font-mono text-[0.82rem] leading-[1.8] text-ink-2" aria-live="polite">
                  {LOG[stage].map((l, i) => (
                    <div key={i}>
                      <span className="text-accent">› </span>
                      {l}
                    </div>
                  ))}
                  <div className="mt-[0.9rem] h-[6px] overflow-hidden rounded-full border border-line bg-bg-soft" aria-hidden="true">
                    <div className="h-full rounded-full bg-accent transition-[width] duration-300" style={{ width: `${progress}%` }} />
                  </div>
                </div>
              )}
              {stage === "done" && (
                <div aria-live="polite">
                  <FileTree tree={ORGANIZED} collapsible />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
