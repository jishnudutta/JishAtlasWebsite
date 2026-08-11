import { useState } from "react";
import { ChevronIcon } from "./icons";

function Item({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`accordion my-[0.6rem] rounded border border-line bg-surface [&+&]:mt-[0.75rem] ${open ? "open" : ""}`}>
      <button
        className="flex w-full cursor-pointer items-center justify-between gap-4 rounded bg-transparent px-[1.15rem] py-4 text-left font-sans text-base font-semibold text-ink hover:bg-bg-soft"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        <span className={`shrink-0 text-ink-3 transition-transform duration-[0.18s] ${open ? "rotate-90" : ""}`}>
          <ChevronIcon size={16} />
        </span>
      </button>
      <div className="accordion-panel">
        <div>
          <div className="px-[1.15rem] pb-[1.1rem] text-[0.95rem] text-ink-2 [&_p:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ items = [] }) {
  return (
    <div>
      {items.map((it, i) => (
        <Item key={i} title={it.title} defaultOpen={it.defaultOpen}>
          {it.body}
        </Item>
      ))}
    </div>
  );
}
