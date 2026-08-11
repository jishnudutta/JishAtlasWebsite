import Callout from "../Callout";
import { CheckIcon } from "../icons";

const FLOW = [
  "Scan",
  "AI suggestion",
  "Validation",
  "Preview",
  "User approval",
  "Apply",
];

const CHECKS = [
  "Projects are protected — they move as one unit",
  "Passthrough directories are preserved",
  "Destination paths are validated before anything moves",
  "Changes can be previewed as a full list",
  "Organized-copy mode leaves the original folder untouched",
];

const Arrow = () => (
  <span className="shrink-0 text-ink-3" aria-hidden="true">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  </span>
);

export default function SafetySection() {
  return (
    <section className="section bg-bg-soft" aria-labelledby="safety-heading">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Safety first</p>
          <h2 id="safety-heading">AI suggests. You decide.</h2>
          <p>
            The AI creates an organization plan. JishAtlas validates that plan before applying
            changes — and applies them only after you approve.
          </p>
        </div>

        <div className="mb-[1.8rem] mt-[1.2rem] flex flex-wrap items-center gap-2" aria-label="Organization pipeline">
          {FLOW.map((f, i) => (
            <span key={f} className="contents">
              <span className={`inline-flex items-center gap-2 rounded-[6px] border bg-surface px-[0.85rem] py-2 text-[0.92rem] font-semibold text-ink ${i === 1 || i === 2 ? "border-accent bg-accent-soft" : "border-line-strong"}`}>
                <span className="rounded bg-accent-soft px-[0.4rem] py-[0.1rem] font-mono text-[0.7rem] text-accent-strong">
                  {i + 1}
                </span>
                {f}
              </span>
              {i < FLOW.length - 1 && <Arrow />}
            </span>
          ))}
        </div>

        <div className="grid-2">
          <ul className="checklist m-0 grid list-none gap-[0.6rem] p-0">
            {CHECKS.map((c) => (
              <li key={c} className="flex items-start gap-[0.65rem] text-[0.95rem] text-ink-2">
                <span className="mt-1 shrink-0 text-ok">
                  <CheckIcon size={16} />
                </span>
                {c}
              </li>
            ))}
          </ul>
          <Callout kind="note" title="What this means for you">
            <p>
              JishAtlas is careful by design, but no tool is risk-free. Always review the plan and
              keep backups of important data — especially before in-place organization.
            </p>
          </Callout>
        </div>
      </div>
    </section>
  );
}
