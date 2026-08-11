import { useRef, useState } from "react";

export default function Tabs({ tabs = [], initial = 0 }) {
  const [active, setActive] = useState(initial);
  const refs = useRef([]);

  const onKey = (e, i) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
    if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = tabs.length - 1;
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <div className="my-[1.4rem]">
      <div className="flex gap-1 overflow-x-auto border-b border-line" role="tablist" aria-label={tabs.map((t) => t.label).join(", ")}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => (refs.current[i] = el)}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={active === i}
            aria-controls={`panel-${t.id}`}
            className="-mb-px cursor-pointer appearance-none whitespace-nowrap rounded-t-[6px] border-b-2 border-transparent bg-transparent px-4 py-[0.65rem] font-sans text-[0.92rem] font-semibold text-ink-3 hover:text-ink aria-selected:border-accent aria-selected:text-ink"
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`panel-${t.id}`}
          aria-labelledby={`tab-${t.id}`}
          hidden={active !== i}
          className="px-1 pb-1 pt-[1.2rem]"
        >
          {typeof t.content === "function" ? t.content() : t.content}
        </div>
      ))}
    </div>
  );
}
