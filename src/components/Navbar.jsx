import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { SITE_CONFIG } from "../config/site";
import DownloadCTA from "./DownloadCTA";
import { FolderIcon, GitHubIcon, MenuIcon, XIcon } from "./icons";

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/get-started", label: "Get Started" },
  { to: "/docs/introduction", label: "Docs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-[100] border-b border-line bg-bg/88 backdrop-blur-[10px]">
      <div className="mx-auto flex h-[60px] max-w-[1180px] items-center gap-6 px-6">
        <Link to="/" className="logo inline-flex items-center gap-[0.55rem] text-[1.05rem] font-bold tracking-[-0.01em] text-ink no-underline hover:text-ink hover:no-underline" aria-label="JishAtlas home">
          <span className="inline-flex size-[26px] items-center justify-center rounded-[7px] bg-accent text-white">
            <FolderIcon size={15} />
          </span>
          JishAtlas
          <span className="ml-[0.15rem] rounded border border-line-strong px-[5px] py-px font-mono text-[0.62rem] font-medium text-ink-3">
            {SITE_CONFIG.version}
          </span>
        </Link>

        <nav className="ml-4 flex items-center gap-1 max-[860px]:hidden" aria-label="Main">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                "rounded-[6px] px-[0.8rem] py-[0.45rem] text-[0.95rem] font-medium text-ink-2 hover:bg-bg-soft hover:text-ink hover:no-underline " +
                (isActive ? "bg-accent-soft text-accent-strong" : "")
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          {SITE_CONFIG.githubUrl && (
            <a
              className="inline-flex items-center gap-[0.4rem] text-[0.9rem] text-ink-2 hover:text-ink hover:no-underline max-[860px]:hidden"
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="JishAtlas on GitHub"
            >
              <GitHubIcon size={17} />
              GitHub
            </a>
          )}
          <div className="max-[860px]:hidden">
            <DownloadCTA label="Download for Windows" size="sm" />
          </div>
          <button
            className="ml-auto hidden size-[42px] items-center justify-center rounded-[6px] border border-line-strong bg-transparent text-ink hover:bg-bg-soft max-[860px]:inline-flex"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`border-t border-line bg-surface px-6 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-3 ${open ? "block animate-[fade-in_0.18s_ease]" : "hidden"}`}
        aria-label="Mobile"
      >
        {NAV.map((n) => (
          <NavLink
            key={n.to}
            to={n.to}
            end={n.end}
            className={({ isActive }) =>
              "block border-b border-line px-2 py-[0.8rem] font-medium text-ink last:border-b-0 " +
              (isActive ? "text-accent-strong" : "")
            }
          >
            {n.label}
          </NavLink>
        ))}
        <DownloadCTA label="Download for Windows" className="mt-[0.9rem] block" />
      </nav>
    </header>
  );
}
