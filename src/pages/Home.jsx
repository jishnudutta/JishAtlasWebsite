import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import DownloadCTA, { StoreNote } from "../components/DownloadCTA";
import { SITE_CONFIG } from "../config/site";
import HeroVisual from "../components/home/HeroVisual";
import IntroSection from "../components/home/IntroSection";
import HowItWorks from "../components/home/HowItWorks";
import OrganizationDemo from "../components/home/OrganizationDemo";
import SafetySection from "../components/home/SafetySection";
import AIBackendSelector from "../components/home/AIBackendSelector";
import ProjectProtection from "../components/home/ProjectProtection";
import PassthroughSection from "../components/home/PassthroughSection";
import LocalAIModel from "../components/home/LocalAIModel";
import DeveloperSection from "../components/home/DeveloperSection";

export default function Home() {
  return (
    <>
      <PageMeta
        title="JishAtlas — AI-Powered File Organization for Windows"
        description="JishAtlas uses AI to help organize messy folders while keeping you in control of every change. Free and open source for Windows."
      />

      {/* HERO */}
      <section className="pt-[clamp(3.5rem,7vw,5.5rem)]" aria-labelledby="hero-heading">
        <div className="container">
          <div className="grid grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center gap-[clamp(2rem,5vw,4rem)] max-[960px]:grid-cols-1">
            <div>
              <h1 id="hero-heading" className="mb-[1.2rem]" data-reveal>

                Organize your files.
                <span className="block text-accent-strong">Let AI handle the mess.</span>
              </h1>
              <p className="mb-[1.6rem] max-w-[32rem] text-[clamp(1.05rem,1.6vw,1.2rem)] text-ink-2" data-reveal style={{ "--reveal-delay": "70ms" }}>

                JishAtlas analyzes your files and suggests a clean, logical organization while
                keeping you in control of every change.
              </p>
              <div className="cta-row mb-[1.6rem]" data-reveal style={{ "--reveal-delay": "140ms" }}>

                <DownloadCTA />
                <Link className="btn secondary" to="/docs/introduction">
                  View Documentation
                </Link>
              </div>
              <div className="mb-[0.9rem]" data-reveal style={{ "--reveal-delay": "210ms" }}>
                <StoreNote compact />
              </div>
              <div className="chip-row" data-reveal style={{ "--reveal-delay": "280ms" }}>

                <span className="chip">
                  <span className="size-[7px] rounded-full bg-accent" />
                  v{SITE_CONFIG.version}
                </span>
                <span className="chip">
                  <span className="size-[7px] rounded-full bg-accent" />
                  Windows
                </span>
                <span className="chip">
                  <span className="size-[7px] rounded-full bg-accent" />
                  Open Source
                </span>
              </div>
            </div>
            <div className="max-[960px]:mt-4" data-reveal style={{ "--reveal-delay": "100ms" }}>
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      <IntroSection />

      <HowItWorks />

      <OrganizationDemo />

      <SafetySection />

      <AIBackendSelector />

      <ProjectProtection />

      <PassthroughSection />

      <LocalAIModel />

      {/* FINAL CTA */}
      <section className="section" aria-labelledby="cta-heading">
        <div className="container">
          <div className="rounded-lg border border-line bg-surface p-[clamp(2.2rem,5vw,3.4rem)_clamp(1.5rem,4vw,3rem)] text-center shadow-sm" data-reveal>

            <h2 id="cta-heading" className="mb-[0.7rem]">
              Ready to organize your files?
            </h2>
            <p className="mx-auto mb-[1.6rem] max-w-[34rem] text-ink-2">
              Download JishAtlas for Windows and turn a messy folder into something you can find
              things in.
            </p>
            <div className="cta-row justify-center">
              <DownloadCTA />
              <Link className="btn secondary" to="/docs/introduction">
                Read the docs
              </Link>
            </div>
            <div className="mt-[1.1rem]">
              <StoreNote />
            </div>
          </div>
        </div>
      </section>

      <DeveloperSection />
    </>
  );
}
