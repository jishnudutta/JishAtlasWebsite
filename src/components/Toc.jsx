import { useEffect, useState } from "react";

export default function Toc({ sections = [] }) {
  const [active, setActive] = useState(sections[0]?.id || "");

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
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
  }, [sections]);

  if (!sections.length) return null;

  return (
    <nav
      className="sticky top-[84px] max-h-[calc(100vh-108px)] overflow-y-auto text-[0.85rem] max-[1080px]:hidden"
      aria-label="On this page"
    >
      <h6 className="mb-[0.6rem] font-mono text-[0.7rem] font-semibold uppercase tracking-[0.09em] text-ink-3">
        On this page
      </h6>
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
    </nav>
  );
}
