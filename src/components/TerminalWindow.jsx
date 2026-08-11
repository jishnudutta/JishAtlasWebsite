/**
 * lines: array of strings or { text, cls } where cls is
 * "cmd" | "dim" | "ok" | "warn" | "err" | "in" (no prompt prefix).
 */
const CLS = {
  cmd: "text-code-fg",
  dim: "text-code-muted",
  ok: "text-code-green",
  warn: "text-code-orange",
  err: "text-code-red",
};

export default function TerminalWindow({ title = "terminal", lines = [], caption }) {
  return (
    <div className="overflow-hidden rounded-lg bg-code-bg shadow-lg" role="img" aria-label={caption || `Terminal: ${title}`}>
      <div className="flex items-center gap-[0.45rem] border-b border-white/10 bg-white/[0.04] px-[0.9rem] py-[0.65rem]">
        <span className="flex gap-[6px]">
          <i className="size-[11px] rounded-full bg-[#e5605f]" />
          <i className="size-[11px] rounded-full bg-[#e2b93d]" />
          <i className="size-[11px] rounded-full bg-[#4cc36c]" />
        </span>
        <span className="ml-[0.4rem] font-mono text-[0.78rem] tracking-[0.03em] text-code-muted">{title}</span>
      </div>
      <div className="overflow-x-auto px-[1.2rem] py-[1.1rem] pb-[1.25rem] font-mono text-[0.82rem] leading-[1.72] text-code-fg">
        {lines.map((l, i) => {
          if (typeof l === "string") {
            return (
              <div key={i}>
                <span className="text-code-accent">$ </span>
                <span className="text-code-fg">{l}</span>
              </div>
            );
          }
          const { text, cls } = l;
          return (
            <div key={i}>
              {cls !== "in" && <span className="text-code-accent">$ </span>}
              <span className={CLS[cls] || "text-code-fg"}>{text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
