import { useState } from "react";

const OPTIONS = {
  local: {
    tag: "Offline",
    title: "Local AI",
    blurb: "Runs on your computer. No internet, no cloud.",
    detail: [
      "Runs on your computer — offline.",
      "File information used for analysis stays on your computer.",
      "The model is downloaded automatically when needed, then stored locally and reused.",
      "Requires local hardware capable of running the model.",
    ],
  },
  gemini: {
    tag: "Cloud",
    tagCls: "cloud",
    title: "Google Gemini",
    blurb: "Cloud-based. Useful when local hardware is limited.",
    detail: [
      "Cloud-based — internet required.",
      "The information required for analysis is sent to Google's servers.",
      "Requires a Gemini API key.",
      "Useful when local hardware is limited or you already have a key.",
    ],
  },
};

export default function AIBackendSelector() {
  const [active, setActive] = useState("local");
  const opt = OPTIONS[active];

  return (
    <section className="section" aria-labelledby="ai-heading">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="kicker">AI backends</p>
          <h2 id="ai-heading">Pick where the thinking happens</h2>
          <p>
            Both backends produce an organization plan. The difference is where your file
            information goes — so the choice is a privacy decision.
          </p>
        </div>

        <div className="mb-[1.2rem] grid grid-cols-2 gap-4 max-[640px]:grid-cols-1" role="group" aria-label="Choose AI backend" data-reveal style={{ "--reveal-delay": "60ms" }}>

          {Object.entries(OPTIONS).map(([key, o]) => (
            <button
              key={key}
              className="cursor-pointer rounded-lg border border-line bg-surface px-[1.4rem] py-[1.3rem] text-left font-sans transition-[border-color,box-shadow] duration-150 hover:border-line-strong aria-pressed:border-accent aria-pressed:ring-1 aria-pressed:ring-accent aria-pressed:shadow-sm"
              aria-pressed={active === key}
              onClick={() => setActive(key)}
            >
              <span className="mb-[0.4rem] flex items-center gap-[0.6rem] text-[1.05rem] font-bold text-ink">
                {o.title}
                <span className={`rounded px-[0.45rem] py-[0.12rem] font-mono text-[0.68rem] font-medium ${o.tagCls ? "bg-bg-soft text-ink-3" : "bg-accent-soft text-accent-strong"}`}>
                  {o.tag}
                </span>
              </span>
              <p className="m-0 text-[0.92rem] text-ink-2">{o.blurb}</p>
            </button>
          ))}
        </div>

        <div className="animate-[fade-in_0.2s_ease] rounded border border-line border-l-[3px] border-l-accent bg-surface px-[1.25rem] py-[1.1rem] text-[0.95rem] text-ink-2" key={active} aria-live="polite">
          <strong>{opt.title}:</strong>
          <ul className="mt-2 list-disc pl-[1.2rem]">
            {opt.detail.map((d, i) => (
              <li key={i} className="mb-[0.3rem]">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
