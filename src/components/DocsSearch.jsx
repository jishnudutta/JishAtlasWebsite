import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchDocs } from "../docs/docs";
import { SearchIcon } from "./icons";

export default function DocsSearch() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState([]);
  const wrapRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setResults(searchDocs(q));
  }, [q]);

  useEffect(() => {
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const go = (r) => {
    setOpen(false);
    setQ("");
    navigate(`/docs/${r.slug}${r.id ? `#${r.id}` : ""}`);
  };

  return (
    <div className="relative mb-[1.4rem]" ref={wrapRef}>
      <SearchIcon size={15} className="pointer-events-none absolute left-[10px] top-1/2 -translate-y-1/2 text-ink-3" />
      <input
        type="search"
        role="searchbox"
        placeholder="Search docs…"
        aria-label="Search documentation"
        className="min-h-[40px] w-full rounded border border-line-strong bg-surface px-3 py-2 pl-[2.1rem] font-sans text-[0.92rem] text-ink focus:border-accent focus:outline-2 focus:outline-accent max-[480px]:text-[16px]"
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && results.length) go(results[0]);
          if (e.key === "Escape") setOpen(false);
        }}
      />
      {open && q.trim() && (
        <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 max-h-[320px] overflow-y-auto rounded border border-line-strong bg-surface shadow-md" role="listbox" aria-label="Search results">
          {results.length === 0 && <div className="px-3 py-3 text-[0.85rem] text-ink-3">No results for “{q}”.</div>}
          {results.map((r, i) => (
            <a
              key={i}
              role="option"
              href={`/docs/${r.slug}${r.id ? `#${r.id}` : ""}`}
              className="block border-b border-line px-3 py-[0.6rem] text-ink hover:bg-bg-soft hover:no-underline last:border-b-0"
              onClick={(e) => {
                e.preventDefault();
                go(r);
              }}
            >
              <span className="text-[0.9rem] font-semibold">{r.title}</span>
              <span className="mt-[0.1rem] block text-[0.78rem] text-ink-3">{r.snippet}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
