import CodeBlock from "../CodeBlock";

const FLOW = ["First launch", "Select Local AI", "JishAtlas downloads the model", "Model stored locally", "Future runs reuse it"];

const Arrow = () => (
  <span className="shrink-0 text-ink-3" aria-hidden="true">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  </span>
);

export default function LocalAIModel() {
  return (
    <section className="section bg-bg-soft" aria-labelledby="model-heading">
      <div className="container">
        <div className="grid-2 items-center">
          <div>
            <p className="kicker">Local AI model</p>
            <h2 id="model-heading">One download, then it's yours</h2>
            <p>
              The first time you choose Local AI, JishAtlas downloads the model automatically. It's
              stored on your computer and reused on later runs.
            </p>
            <div className="mb-[1.8rem] mt-[1.2rem] flex flex-wrap items-center gap-2" aria-label="Local AI first-run flow">
              {FLOW.map((f, i) => (
                <span key={f} className="contents">
                  <span className="inline-flex items-center gap-2 rounded-[6px] border border-line-strong bg-surface px-[0.85rem] py-2 text-[0.92rem] font-semibold text-ink">
                    <span className="rounded bg-accent-soft px-[0.4rem] py-[0.1rem] font-mono text-[0.7rem] text-accent-strong">
                      {i + 1}
                    </span>
                    {f}
                  </span>
                  {i < FLOW.length - 1 && <Arrow />}
                </span>
              ))}
            </div>
            <p className="small text-ink-2">
              The model is a separate download — it is not bundled inside the executable.
            </p>
          </div>
          <CodeBlock lang="text" title="Model directory" code={'%LOCALAPPDATA%\\JishAtlas\\models\\'} />
        </div>
      </div>
    </section>
  );
}
