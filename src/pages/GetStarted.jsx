import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { ExeDownloadCTA } from "../components/DownloadCTA";
import StepList from "../components/StepList";
import { SmartScreenNotice } from "../components/DownloadCTA";

const STEPS = [
  {
    title: "Enter a folder path",
    body: "At launch, enter the full path to an existing folder, for example C:\\Users\\You\\Downloads. Enter k to manage the Gemini API key or q to quit.",
  },
  {
    title: "Choose an AI backend",
    body: "Select Local AI or Gemini. Gemini requires an API key and sends readable text samples to Google's API.",
  },
  {
    title: "Scan and plan",
    body: "JishAtlas scans files, detects projects, then asks the selected backend to produce an organization plan.",
  },
  {
    title: "Review the plan",
    body: "Check the proposed paths and filenames. The plan is confirmed as a whole; individual items cannot be toggled.",
  },
  {
    title: "Choose a mode and confirm",
    body: "Create an organized copy or organize in place. The confirmation defaults to No.",
  },
];

export default function GetStarted() {
  return (
    <>
      <PageMeta
        title="Get Started — JishAtlas"
        description="Run JishAtlas: select a folder, choose an AI backend, review the plan, and confirm how to apply it."
      />

      <section className="section" aria-labelledby="gs-title">
        <div className="container max-w-[800px]">
          <div className="section-head mb-[1.6rem]" data-reveal>
            <p className="kicker">Get started</p>
            <h1 id="gs-title">Run JishAtlas</h1>
            <p>JishAtlas is a terminal application. Its workflow is:</p>
          </div>

          <StepList steps={STEPS} />

          <div className="mt-8 flex flex-wrap items-start gap-4">
            <ExeDownloadCTA />
            <Link className="btn secondary" to="/docs/quick-start">
              Quick start documentation
            </Link>
          </div>
          <SmartScreenNotice className="mt-4 max-w-[36rem]" />
        </div>
      </section>
    </>
  );
}
