import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { SITE_CONFIG } from "../config/site";
import { GitHubIcon } from "../components/icons";

const agents = [
  {
    number: "01",
    name: "Local AI",
    model: "Qwen3 · 1.7B",
    mode: "ON DEVICE",
    title: "Keep analysis on your computer.",
    description:
      "JishAtlas runs Qwen3 locally through llama.cpp. Readable text samples are summarized on your computer, and the organization plan is generated there too.",
    points: [
      "File contents stay on your computer during analysis",
      "Works offline after the model is downloaded",
      "Uses your computer’s CPU and available memory",
    ],
    theme: "border-accent/30 bg-accent-soft/50",
    badge: "bg-white text-accent-strong",
  },
  {
    number: "02",
    name: "Google Gemini",
    model: "Gemini 3.1 Flash-Lite",
    mode: "CLOUD API",
    title: "Use Google’s hosted model.",
    description:
      "Gemini analyzes the folder details sent by JishAtlas and returns an organization plan. It requires an internet connection and your Gemini API key.",
    points: [
      "Relative paths and folder/project details are sent",
      "Up to 1,200 characters of readable text per file are sent",
      "The files themselves are not uploaded",
    ],
    theme: "border-line bg-surface",
    badge: "bg-bg-soft text-ink-2",
  },
];

function AgentCard({ agent }) {
  return (
    <article className={`rounded-lg border p-6 shadow-sm md:p-8 ${agent.theme}`}>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs text-ink-3">AGENT {agent.number}</span>
        <span className={`rounded border border-line px-2.5 py-1 font-mono text-[0.68rem] font-medium tracking-wide ${agent.badge}`}>
          {agent.mode}
        </span>
      </div>
      <p className="mb-2 font-mono text-xs text-ink-3">{agent.model}</p>
      <h2 className="mb-3 text-[1.55rem]">{agent.name}</h2>
      <h3 className="mb-3 text-base font-semibold">{agent.title}</h3>
      <p className="mb-6 text-[0.95rem] leading-7 text-ink-2">{agent.description}</p>
      <ul className="m-0 grid list-none gap-3 border-t border-line pt-5 pl-0">
        {agent.points.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-6 text-ink-2">
            <span className="mt-[0.15rem] font-semibold text-accent" aria-hidden="true">✓</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Agents() {
  return (
    <>
      <PageMeta
        title="AI Agents — JishAtlas"
        description="Compare JishAtlas Local AI and Google Gemini backends, including how each handles your file data."
      />
      <section className="section pb-8" aria-labelledby="agents-heading">
        <div className="container">
          <p className="kicker">Two ways to build your plan</p>
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div>
              <h1 id="agents-heading" className="max-w-[44rem]">Choose the AI that fits your workflow.</h1>
              <p className="mb-0 max-w-[42rem] text-[1.05rem] leading-7 text-ink-2">
                JishAtlas supports a private local model and Google Gemini. Both produce a plan for you to review before any files are moved.
              </p>
            </div>
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary w-fit"
            >
              <GitHubIcon size={17} /> View repository
            </a>
          </div>
        </div>
      </section>

      <section className="section soft pt-8" aria-label="Available AI backends">
        <div className="container">
          <div className="grid-2">
            {agents.map((agent) => <AgentCard key={agent.number} agent={agent} />)}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-line bg-surface p-5">
            <p className="m-0 max-w-[42rem] text-sm leading-6 text-ink-2">
              Select a backend for each run. The same validation, plan review, and apply workflow is used with either option.
            </p>
            <Link to="/docs/ai-backends" className="btn secondary">Read backend details</Link>
          </div>
        </div>
      </section>
    </>
  );
}
