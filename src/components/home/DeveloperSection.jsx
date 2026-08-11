import { SITE_CONFIG } from "../../config/site";
import { ExternalIcon, GitHubIcon } from "../icons";

export default function DeveloperSection() {
  return (
    <section className="section tight" aria-labelledby="developer-heading">
      <div className="container">
        <div className="mx-auto max-w-[40rem] text-center">
          <p className="kicker">Developer</p>
          <h2 id="developer-heading" className="mb-[0.8rem]">
            Built by JishWorks
          </h2>
          <p className="text-ink-2">
            {SITE_CONFIG.name} is built by {SITE_CONFIG.author} under {SITE_CONFIG.company}, an
            independent software and hardware development project focused on building useful tools
            and experimenting with technology.
          </p>
          <div className="cta-row justify-center">
            <a
              className="btn secondary"
              href={SITE_CONFIG.jishWorksUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit {SITE_CONFIG.company}
              <ExternalIcon size={16} />
            </a>
          </div>
          <p className="small mt-[1.1rem] text-ink-3">
            More from {SITE_CONFIG.author}:{" "}
            <a
              href={SITE_CONFIG.authorGitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-ink-3 hover:text-accent"
            >
              <GitHubIcon size={14} />
              github.com/jishnudutta
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
