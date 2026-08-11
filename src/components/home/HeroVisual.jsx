import { useEffect, useState } from "react";

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
  const [state, setState] = useState(reduced ? "after" : "before");

  useEffect(() => {
    if (reduced) return;
    const t1 = setTimeout(() => setState("analyzing"), 1100);
    const t2 = setTimeout(() => setState("after"), 2900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [reduced]);

  const lines = state === "before" ? BEFORE : state === "analyzing" ? ANALYZING : AFTER;
  const status = state === "before" ? "before" : state === "analyzing" ? "analyzing" : "after";

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
        <div className="overflow-x-auto px-[1.2rem] py-[1.1rem] pb-[1.25rem] font-mono text-[0.82rem] leading-[1.72] text-code-fg" aria-live="polite">
          {state === "analyzing" && <span className="cursor" aria-hidden="true" />}
          {lines.map((l, i) => (
            <Line key={i} l={l} />
          ))}
        </div>
      </div>
      <p className="mt-[0.8rem] flex items-center gap-2 font-mono text-[0.74rem] text-ink-3">
        <span className="size-[7px] rounded-full bg-accent" aria-hidden="true" />
        Simulated demo — JishAtlas only ever touches folders you choose.
      </p>
    </div>
  );
}
