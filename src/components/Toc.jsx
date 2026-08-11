import { useEffect, useState } from "react";
import { ChevronIcon } from "./icons";

export default function Toc({ sections = [], mobile = false }) {
  const [active, setActive] = useState(mobile ? "" : sections[0]?.id || "");

  useEffect(() => {
    if (!("IntersectionObserver" in window) || mobile) return;
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id);
        });
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections, mobile]);

  if (!sections.length) return null;

  const links = (
    <ul className="m-0 list-none border-l border-line p-0">
      {sections.map((s) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className={`-ml-px block border-l-2 border-transparent px-[0.9rem] py-[0.32rem] leading-[1.4] text-ink-3 hover:text-ink hover:no-underline ${
              active === s.id ? "border-accent font-semibold text-accent-strong" : ""
            }`}
          >
            {s.title}
          </a>
        </li>
      ))}
    </ul>
  );

  // Mobile: collapsible panel that sits above the article content.
  if (mobile) {
    return (
      <details className="group mb-[1.4rem] rounded-lg border border-line bg-surface">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-[1.15rem] py-[0.9rem] text-[0.92rem] font-semibold text-ink [&::-webkit-details-marker]:hidden">
          On this page
          <span className="shrink-0 text-ink-3 transition-transform duration-[0.18s] group-open:rotate-90" aria-hidden="true">
            <ChevronIcon size={16} />
          </span>
        </summary>
        <div className="px-3 pb-3 text-[0.85rem]">{links}</div>
      </details>
    );
  }

  return (
    <nav
      className="sticky top-[84px] max-h-[calc(100vh-108px)] overflow-y-auto text-[0.85rem] max-[1080px]:hidden"
      aria-label="On this page"
    >
      <h6 className="mb-[0.6rem] font-mono text-[0.7rem] font-semibold uppercase tracking-[0.09em] text-ink-3">
        On this page
      </h6>
      {links}
    </nav>
  );
}
