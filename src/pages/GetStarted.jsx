import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import DownloadCTA, { StoreNote } from "../components/DownloadCTA";
import Callout from "../components/Callout";
import { SITE_CONFIG } from "../config/site";

export default function GetStarted() {
  return (
    <>
      <PageMeta
        title="Get Started — JishAtlas"
        description="From download to your first organized folder — a five-step guide to JishAtlas."
      />

      <section className="pt-[clamp(3rem,6vw,4.5rem)]" aria-labelledby="gs-title">
        <div className="container">
          <div className="section-head mb-[1.6rem]" data-reveal>
            <p className="kicker">Get started</p>
            <h1 id="gs-title">Get started with JishAtlas</h1>
            <p style={{ fontSize: "1.1rem" }}>From download to your first organized folder.</p>
          </div>
          <div className="cta-row">
            <DownloadCTA />
            <Link className="btn secondary" to="/docs/introduction">
              View Documentation
            </Link>
          </div>
          <div className="mt-[0.9rem]">
            <StoreNote compact />
          </div>
        </div>
      </section>

      <section className="section tight" aria-label="Steps">
        <div className="container">
          {/* STEP 1 */}
          <div className="grid grid-cols-[auto_1fr] gap-[1.4rem] border-b border-line py-[1.6rem] first:pt-2 max-[640px]:grid-cols-1 max-[640px]:gap-[0.9rem]" data-reveal style={{ "--reveal-delay": "40ms" }}>

            <span className="flex size-[52px] shrink-0 items-center justify-center rounded bg-accent-soft font-mono text-[1.4rem] font-semibold text-accent-strong max-[640px]:size-11 max-[640px]:text-[1.1rem]">
              1
            </span>
            <div>
              <h3 className="mb-[0.4rem] text-[1.2rem]">Download</h3>
              <p className="mb-[0.9rem] text-ink-2">
                Click <strong>Download for Windows</strong>. JishAtlas opens through the Microsoft
                Store — install it like any other app. The Store version is signed, so you won't
                see the unsigned-app warning.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="grid grid-cols-[auto_1fr] gap-[1.4rem] border-b border-line py-[1.6rem] max-[640px]:grid-cols-1 max-[640px]:gap-[0.9rem]" data-reveal style={{ "--reveal-delay": "100ms" }}>

            <span className="flex size-[52px] shrink-0 items-center justify-center rounded bg-accent-soft font-mono text-[1.4rem] font-semibold text-accent-strong max-[640px]:size-11 max-[640px]:text-[1.1rem]">
              2
            </span>
            <div>
              <h3 className="mb-[0.4rem] text-[1.2rem]">Choose your AI backend</h3>
              <p className="mb-[0.9rem] text-ink-2">
                On first launch, pick <strong>Local AI</strong> or <strong>Gemini</strong>:
              </p>
              <div className="grid-2 mt-[0.4rem]">
                <div className="card rounded-lg border border-line bg-surface p-[1.4rem] shadow-sm">
                  <h3 className="mb-[0.55rem] flex items-center gap-[0.6rem]">Local AI</h3>
                  <p className="m-0 text-[0.95rem] text-ink-2">
                    Runs on your computer, offline. File info stays on your machine. The model
                    downloads automatically the first time.
                  </p>
                </div>
                <div className="card rounded-lg border border-line bg-surface p-[1.4rem] shadow-sm">
                  <h3 className="mb-[0.55rem] flex items-center gap-[0.6rem]">Gemini</h3>
                  <p className="m-0 text-[0.95rem] text-ink-2">
                    Cloud-based, needs internet and an API key. Analysis data is sent to Google's
                    servers — handy when local hardware is limited.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="grid grid-cols-[auto_1fr] gap-[1.4rem] border-b border-line py-[1.6rem] max-[640px]:grid-cols-1 max-[640px]:gap-[0.9rem]" data-reveal style={{ "--reveal-delay": "160ms" }}>

            <span className="flex size-[52px] shrink-0 items-center justify-center rounded bg-accent-soft font-mono text-[1.4rem] font-semibold text-accent-strong max-[640px]:size-11 max-[640px]:text-[1.1rem]">
              3
            </span>
            <div>
              <h3 className="mb-[0.4rem] text-[1.2rem]">Select a folder</h3>
              <p className="mb-[0.9rem] text-ink-2">
                Choose the folder you want to organize — your Downloads folder is a great first
                candidate. JishAtlas scans it, detects projects, and flags protected directories.
              </p>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="grid grid-cols-[auto_1fr] gap-[1.4rem] border-b border-line py-[1.6rem] max-[640px]:grid-cols-1 max-[640px]:gap-[0.9rem]" data-reveal style={{ "--reveal-delay": "220ms" }}>

            <span className="flex size-[52px] shrink-0 items-center justify-center rounded bg-accent-soft font-mono text-[1.4rem] font-semibold text-accent-strong max-[640px]:size-11 max-[640px]:text-[1.1rem]">
              4
            </span>
            <div>
              <h3 className="mb-[0.4rem] text-[1.2rem]">Review the plan</h3>
              <p className="mb-[0.9rem] text-ink-2">Every proposed change is listed before anything happens:</p>
              <div className="m-[0.4rem_0_0.9rem] overflow-x-auto whitespace-nowrap rounded bg-code-bg px-[1.1rem] py-4 font-mono text-[0.85rem] leading-[1.8] text-code-fg">
                <span className="text-code-muted">From:</span> Downloads/weather_api.py
                <br />
                <span className="text-code-muted">To:</span> Programming/Python/weather_api.py
              </div>
              <p className="mb-[0.9rem] text-ink-2">
                You can approve everything, or drop individual changes you don't like. Nothing is
                applied yet.
              </p>
            </div>
          </div>

          {/* STEP 5 */}
          <div className="grid grid-cols-[auto_1fr] gap-[1.4rem] border-b border-line py-[1.6rem] max-[640px]:grid-cols-1 max-[640px]:gap-[0.9rem]" data-reveal style={{ "--reveal-delay": "280ms" }}>

            <span className="flex size-[52px] shrink-0 items-center justify-center rounded bg-accent-soft font-mono text-[1.4rem] font-semibold text-accent-strong max-[640px]:size-11 max-[640px]:text-[1.1rem]">
              5
            </span>
            <div>
              <h3 className="mb-[0.4rem] text-[1.2rem]">Apply</h3>
              <p className="mb-[0.9rem] text-ink-2">Two modes:</p>
              <div className="grid-2 mt-[0.4rem]">
                <div className="card rounded-lg border border-line bg-surface p-[1.4rem] shadow-sm">
                  <h3 className="mb-[0.55rem] flex items-center gap-[0.6rem]">Organized Copy</h3>
                  <p className="m-0 text-[0.95rem] text-ink-2">
                    Creates a new organized folder and leaves the original completely untouched.
                  </p>
                </div>
                <div className="card rounded-lg border border-line bg-surface p-[1.4rem] shadow-sm">
                  <h3 className="mb-[0.55rem] flex items-center gap-[0.6rem]">Organize in Place</h3>
                  <p className="m-0 text-[0.95rem] text-ink-2">
                    Restructures the folder directly — no duplication, but the original layout is replaced.
                  </p>
                </div>
              </div>
              <Callout kind="tip" title="First time?">
                <p>
                  Use <strong>Organized Copy</strong>. You get the organized result and keep the
                  original until you're confident.
                </p>
              </Callout>
            </div>
          </div>

          {/* DONE */}
          <div className="mt-[2.5rem] rounded-lg border border-line bg-surface p-[clamp(2.2rem,5vw,3.4rem)_clamp(1.5rem,4vw,3rem)] text-center shadow-sm" data-reveal style={{ "--reveal-delay": "120ms" }}>

            <h2 className="mb-[0.7rem]">That's it.</h2>
            <p className="mx-auto mb-[1.6rem] max-w-[34rem] text-ink-2">
              From messy to organized in about five minutes. v{SITE_CONFIG.version} is an early
              alpha — more capabilities are planned for future releases.
            </p>
            <div className="cta-row justify-center">
              <DownloadCTA />
              <Link className="btn secondary" to="/docs/quick-start">
                Read the quick start
              </Link>
            </div>
            <div className="mt-4">
              <StoreNote />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
