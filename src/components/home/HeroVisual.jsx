import { useEffect, useState } from "react";
import { FolderIcon } from "../icons";

const BEFORE = [
  { text: "Downloads/", cls: "ok" },
  { text: "├─ python.py", cls: "file" },
  { text: "├─ holiday.jpg", cls: "file" },
  { text: "├─ school.pdf", cls: "file" },
  { text: "├─ react.jsx", cls: "file" },
  { text: "├─ notes.txt", cls: "file" },
  { text: "└─ game.cpp", cls: "file" },
];

const ANALYZING = [
  { text: "JishAtlas", cls: "cmd" },
  { text: "Scanning folder…", cls: "dim" },
  { text: "142 files · 23 folders · 4 projects · 7 protected", cls: "dim" },
  { text: "Analyzing names and content…", cls: "dim" },
  { text: "Building organization plan…", cls: "dim" },
];

const AFTER = [
  { text: "Downloads/", cls: "ok" },
  { text: "├─ Programming/", cls: "ok" },
  { text: "│  ├─ Python/", cls: "ok" },
  { text: "│  │  └─ python.py", cls: "file" },
  { text: "│  ├─ React/", cls: "ok" },
  { text: "│  │  └─ react.jsx", cls: "file" },
  { text: "│  └─ C++/", cls: "ok" },
  { text: "│     └─ game.cpp", cls: "file" },
  { text: "├─ School/", cls: "ok" },
  { text: "│  ├─ school.pdf", cls: "file" },
  { text: "│  └─ notes.txt", cls: "file" },
  { text: "└─ Photos/", cls: "ok" },
  { text: "   └─ holiday.jpg", cls: "file" },
];

const LINE_MS = { before: 160, analyzing: 300, after: 130 };
const HOLD_MS = { before: 500, analyzing: 700 };

function Line({ l }) {
  return (
    <div style={{ whiteSpace: "pre" }}>
      {l.cls === "cmd" && <span className="text-code-accent">$ </span>}
      <span className={l.cls === "file" ? "text-code-fg" : l.cls === "ok" ? "text-code-green" : "text-code-muted"}>
        {l.text}
      </span>
    </div>
  );
}

export default function HeroVisual() {
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [phase, setPhase] = useState(reduced ? "after" : "before"); // before | analyzing | after
  const [shown, setShown] = useState(reduced ? Infinity : 0);

  // Line-by-line reveal: advance one line per tick, then move to the next phase.
  useEffect(() => {
    if (reduced) return;
    const lines = phase === "before" ? BEFORE : phase === "analyzing" ? ANALYZING : AFTER;
    if (shown < lines.length) {
      const t = setTimeout(() => setShown(shown + 1), LINE_MS[phase]);
      return () => clearTimeout(t);
    }
    if (phase !== "after") {
      const t = setTimeout(() => {
        setPhase(phase === "before" ? "analyzing" : "after");
        setShown(0);
      }, HOLD_MS[phase]);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [phase, shown, reduced]);

  const run = () => {
    if (reduced) {
      setPhase("after");
      return;
    }
    setPhase("before");
    setShown(0);
  };

  const lines = phase === "before" ? BEFORE : phase === "analyzing" ? ANALYZING : AFTER;
  const visible = lines.slice(0, shown); // shown is Infinity under reduced motion → full tree
  const status = phase === "before" ? "before" : phase === "analyzing" ? "analyzing" : "after";

  return (
    <div>
      <div className="overflow-hidden rounded-lg bg-code-bg shadow-lg">
        <div className="flex items-center gap-[0.45rem] border-b border-white/10 bg-white/[0.04] px-[0.9rem] py-[0.65rem]">
          <span className="flex gap-[6px]">
            <i className="size-[11px] rounded-full bg-[#e5605f]" />
            <i className="size-[11px] rounded-full bg-[#e2b93d]" />
            <i className="size-[11px] rounded-full bg-[#4cc36c]" />
          </span>
          <span className="ml-[0.4rem] font-mono text-[0.78rem] tracking-[0.03em] text-code-muted">
            Downloads — {status}
          </span>
        </div>
        <div className="overflow-x-auto px-[1.2rem] py-[1.1rem] pb-[1.25rem] font-mono text-[0.82rem] leading-[1.72] text-code-fg">
          {phase === "analyzing" && !reduced && <span className="cursor" aria-hidden="true" />}
          {visible.map((l, i) => (
            <Line key={i} l={l} />
          ))}
        </div>
      </div>
      <div className="mt-[0.85rem] flex flex-wrap items-center justify-between gap-3">
        <p className="m-0 flex items-center gap-2 font-mono text-[0.74rem] text-ink-3">
          <span className="size-[7px] rounded-full bg-accent" aria-hidden="true" />
          Simulated demo — JishAtlas only ever touches folders you choose.
        </p>
        <button className="btn secondary sm" type="button" onClick={run}>
          <FolderIcon size={13} />
          Organize this folder
        </button>
      </div>
    </div>
  );
}
