import { useState } from "react";

const STEPS = [
  {
    id: "scan",
    label: "Scan",
    title: "Scan",
    body: "JishAtlas reads the folder structure, detects projects, and flags protected directories.",
    panel: (
      <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-[0.7rem]">
        {[
          ["142", "files"],
          ["23", "folders"],
          ["4", "projects"],
          ["7", "protected dirs"],
        ].map(([n, l]) => (
          <div className="rounded-[6px] border border-line bg-bg-soft px-[0.85rem] py-[0.7rem]" key={l}>
            <span className="block font-mono text-[1.25rem] font-semibold text-ink">{n}</span>
            <span className="text-[0.82rem] text-ink-3">{l}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "understand",
    label: "Understand",
    title: "Understand",
    body: "Filenames, locations, and available content are analyzed to guess what each file is.",
    panel: (
      <div className="whitespace-nowrap overflow-x-auto rounded-[6px] border border-line bg-bg-soft px-4 py-[0.9rem] font-mono text-[0.85rem] text-ink">
        Analyzing files…<br />
        weather_api.py<br />
        school_notes.txt<br />
        holiday_photo.jpg<br />
        package.json
      </div>
    ),
  },
  {
    id: "organize",
    label: "Organize",
    title: "Organize",
    body: "The AI backend proposes an organization plan — target folders and rename suggestions.",
    panel: (
      <div className="whitespace-nowrap overflow-x-auto rounded-[6px] border border-line bg-bg-soft px-4 py-[0.9rem] font-mono text-[0.85rem] text-ink">
        Creating organization plan…<br />
        <span className="text-code-green">Programming/Python</span><br />
        <span className="text-code-green">School</span><br />
        <span className="text-code-green">Photos</span><br />
        <span className="text-code-green">Projects</span>
      </div>
    ),
  },
  {
    id: "review",
    label: "Review",
    title: "Review",
    body: "Every proposed move and rename is shown to you. Nothing is applied yet.",
    panel: (
      <div className="whitespace-nowrap overflow-x-auto rounded-[6px] border border-line bg-bg-soft px-4 py-[0.9rem] font-mono text-[0.85rem] text-ink">
        Review suggested changes
        <div className="flex flex-wrap items-center gap-2 font-mono text-[0.85rem]">
          <span className="text-ink-3">weather_api.py</span>
          <span className="text-accent">→</span>
          <span className="font-medium text-ok">Programming/Python</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 font-mono text-[0.85rem]">
          <span className="text-ink-3">notes.txt</span>
          <span className="text-accent">→</span>
          <span className="font-medium text-ok">physics_notes.txt</span>
        </div>
      </div>
    ),
  },
  {
    id: "apply",
    label: "Apply",
    title: "Apply",
    body: "Approve the plan and JishAtlas applies the changes — in a copy, or in place.",
    panel: (
      <div className="whitespace-nowrap overflow-x-auto rounded-[6px] border border-line bg-bg-soft px-4 py-[0.9rem] font-mono text-[0.85rem] text-ink">
        <span className="text-code-green">Organization complete</span><br />
        142 files processed · <span className="text-code-green">0 errors</span>
      </div>
    ),
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <section className="section bg-bg-soft" aria-labelledby="how-heading">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="kicker">How it works</p>
          <h2 id="how-heading">Five steps, you approve the last one</h2>
        </div>

        <div className="mb-[1.6rem] grid grid-cols-5 gap-[0.6rem] max-[960px]:grid-cols-3 max-[640px]:grid-cols-2" role="group" aria-label="How it works steps" data-reveal style={{ "--reveal-delay": "60ms" }}>
          {STEPS.map((s, i) => (
            <button
              key={s.id}
              className="group cursor-pointer rounded bg-surface px-[0.6rem] py-[0.85rem] text-center font-sans hover:border-line-strong aria-pressed:border-accent aria-pressed:bg-accent-soft aria-pressed:shadow-sm border border-line"
              aria-pressed={active === i}
              onClick={() => setActive(i)}
            >
              <span className="mb-1 block font-mono text-[0.7rem] text-ink-3 group-aria-pressed:text-accent-strong">
                0{i + 1}
              </span>
              <span className="text-[0.95rem] font-semibold text-ink">{s.label}</span>
            </button>
          ))}
        </div>

        <div className="min-h-[160px] animate-[fade-in_0.25s_ease] rounded-lg border border-line bg-surface p-6" key={step.id}>
          <h3 className="mb-[0.7rem] flex items-center gap-[0.6rem]">
            <span className="rounded-[6px] bg-accent-soft px-2 py-[0.15rem] font-mono text-[0.75rem] text-accent-strong">
              0{active + 1}
            </span>
            {step.title}
          </h3>
          <p className="text-ink-2">{step.body}</p>
          {step.panel}
        </div>
      </div>
    </section>
  );
}
