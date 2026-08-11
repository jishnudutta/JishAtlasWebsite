import { Link } from "react-router-dom";
import { SITE_CONFIG } from "../config/site";
import { FolderIcon } from "./icons";

export default function Footer() {
  const gh = SITE_CONFIG.githubUrl;
  return (
    <footer className="mt-12 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[1.4fr_1fr_1fr] gap-10 px-6 pb-8 pt-12 max-[860px]:grid-cols-2 max-[640px]:grid-cols-1">
        <div className="max-[860px]:col-span-full max-[640px]:col-auto">
          <Link to="/" className="logo inline-flex items-center gap-[0.55rem] text-[1.05rem] font-bold tracking-[-0.01em] text-ink no-underline hover:text-ink hover:no-underline" aria-label="JishAtlas home">
            <span className="inline-flex size-[26px] items-center justify-center rounded-[7px] bg-accent text-white">
              <FolderIcon size={15} />
            </span>
            JishAtlas
          </Link>
          <p className="mt-[0.8rem] max-w-[26rem] text-[0.95rem] text-ink-2">
            {SITE_CONFIG.tagline}. The AI creates the plan — you decide what gets applied.
          </p>
        </div>

        <div>
          <h4 className="mb-[0.9rem] text-[0.8rem] font-bold uppercase tracking-[0.06em] text-ink-3">
            Product
          </h4>
          <ul className="m-0 grid list-none gap-2 p-0">
            <li>
              <Link to="/" className="text-[0.95rem] text-ink-2 hover:text-accent">
                Home
              </Link>
            </li>
            <li>
              <Link to="/get-started" className="text-[0.95rem] text-ink-2 hover:text-accent">
                Get Started
              </Link>
            </li>
            <li>
              <Link to="/docs/introduction" className="text-[0.95rem] text-ink-2 hover:text-accent">
                Docs
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-[0.95rem] text-ink-2 hover:text-accent">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {gh && (
          <div>
            <h4 className="mb-[0.9rem] text-[0.8rem] font-bold uppercase tracking-[0.06em] text-ink-3">
              Resources
            </h4>
            <ul className="m-0 grid list-none gap-2 p-0">
              <li>
                <a href={gh} target="_blank" rel="noopener noreferrer" className="text-[0.95rem] text-ink-2 hover:text-accent">
                  GitHub
                </a>
              </li>
              <li>
                <a href={`${gh}/releases`} target="_blank" rel="noopener noreferrer" className="text-[0.95rem] text-ink-2 hover:text-accent">
                  Releases
                </a>
              </li>
              <li>
                <a href={`${gh}/issues`} target="_blank" rel="noopener noreferrer" className="text-[0.95rem] text-ink-2 hover:text-accent">
                  Issues
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-3 px-6 pb-[calc(1.1rem+env(safe-area-inset-bottom))] pt-[1.1rem] font-mono text-[0.78rem] text-ink-3">
          <span>
            © 2026 {SITE_CONFIG.company} · {SITE_CONFIG.name} is open source
          </span>
          <span>
            Built by {SITE_CONFIG.author}
          </span>
          <span>
            v{SITE_CONFIG.version} · Windows
          </span>
        </div>
      </div>
    </footer>
  );
}
