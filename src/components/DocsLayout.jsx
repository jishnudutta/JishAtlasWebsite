import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { DOCS_NAV } from "../config/site";
import { DOC_MAP, DOC_ORDER } from "../docs/docs";
import DocsSearch from "./DocsSearch";
import Breadcrumbs from "./Breadcrumbs";
import Toc from "./Toc";

export default function DocsLayout({ children }) {
  const { slug } = useParams();
  const doc = DOC_MAP[slug] || DOC_MAP.introduction;
  const idx = DOC_ORDER.indexOf(doc.slug);
  const prev = idx > 0 ? DOC_MAP[DOC_ORDER[idx - 1]] : null;
  const next = idx < DOC_ORDER.length - 1 ? DOC_MAP[DOC_ORDER[idx + 1]] : null;
  const group = DOCS_NAV.find((g) => g.links.some((l) => l.slug === doc.slug));

  // Desktop shows the sidebar open by default; mobile keeps it collapsible.
  const [forcedOpen, setForcedOpen] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 861px)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 861px)");
    const onChange = (e) => setForcedOpen(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="container">
      <div className="grid grid-cols-[250px_minmax(0,1fr)_200px] items-start gap-10 py-10 pb-16 max-[1080px]:grid-cols-[230px_minmax(0,1fr)] max-[860px]:grid-cols-1 max-[860px]:pt-6">
        <aside
          className="sticky top-[84px] max-h-[calc(100vh-108px)] overflow-y-auto pr-2 max-[860px]:static max-[860px]:max-h-none max-[860px]:overflow-visible max-[860px]:rounded max-[860px]:border max-[860px]:border-line max-[860px]:bg-surface max-[860px]:p-4"
          aria-label="Documentation"
        >
          <details open={forcedOpen || undefined}>
            <summary className="btn secondary sm block">Documentation menu</summary>
            <DocsSearch />
            {DOCS_NAV.map((g) => (
              <div className="mb-[1.4rem]" key={g.group}>
                <h5 className="mb-[0.45rem] font-mono text-[0.7rem] font-semibold uppercase tracking-[0.09em] text-ink-3">
                  {g.group}
                </h5>
                <ul className="m-0 grid list-none gap-px p-0">
                  {g.links.map((l) => (
                    <li key={l.slug}>
                      <NavLink
                        to={`/docs/${l.slug}`}
                        className={({ isActive }) =>
                          "block rounded-[6px] border-l-2 border-transparent px-[0.6rem] py-[0.42rem] text-[0.92rem] text-ink-2 hover:bg-bg-soft hover:text-ink hover:no-underline " +
                          (isActive ? "border-accent bg-accent-soft font-semibold text-accent-strong" : "")
                        }
                      >
                        {l.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </details>
        </aside>

        <div className="min-w-0 max-w-[780px]">
          <Breadcrumbs
            items={[
              { label: "Docs", to: "/docs/introduction" },
              ...(group ? [{ label: group.group, to: `/docs/${group.links[0].slug}` }] : []),
              { label: doc.title },
            ]}
          />
          {children}
          <nav className="mt-[3.5rem] flex justify-between gap-4 border-t border-line pt-[1.6rem]" aria-label="Documentation pagination">
            {prev ? (
              <Link to={`/docs/${prev.slug}`} className="group max-w-[46%]">
                <span className="mb-[0.2rem] block font-mono text-[0.7rem] text-ink-3">← Previous</span>
                <span className="font-semibold text-ink group-hover:text-accent">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link to={`/docs/${next.slug}`} className="group max-w-[46%] text-right">
                <span className="mb-[0.2rem] block font-mono text-[0.7rem] text-ink-3">Next →</span>
                <span className="font-semibold text-ink group-hover:text-accent">{next.title}</span>
              </Link>
            ) : null}
          </nav>
        </div>

        <Toc sections={doc.sections} />
      </div>
    </div>
  );
}
