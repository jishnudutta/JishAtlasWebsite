import { Link } from "react-router-dom";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav className="mb-[1.6rem] flex flex-wrap items-center gap-[0.4rem] font-mono text-[0.78rem] text-ink-3" aria-label="Breadcrumb">
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <span key={i} className="inline-flex items-center gap-[0.4rem]">
            {last ? (
              <span aria-current="page">{it.label}</span>
            ) : (
              <>
                <Link to={it.to} className="text-ink-3 hover:text-accent hover:no-underline">
                  {it.label}
                </Link>
                <span className="text-line-strong" aria-hidden="true">
                  /
                </span>
              </>
            )}
          </span>
        );
      })}
    </nav>
  );
}
