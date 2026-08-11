import { FileIcon, FolderIcon, ShieldIcon } from "../icons";

const EXAMPLES = [
  "School work",
  "Documents",
  "Code",
  "Images",
  "Projects",
  "Archives",
  "Random files",
];

const CARDS = [
  {
    icon: <FileIcon size={18} />,
    title: "Understand",
    body: "Analyze filenames, locations, and available file content to figure out what each file is.",
  },
  {
    icon: <FolderIcon size={18} />,
    title: "Organize",
    body: "Suggest logical folders and useful filenames — a plan you can read before anything runs.",
  },
  {
    icon: <ShieldIcon size={18} />,
    title: "Protect",
    body: "Detect projects and protected directories so nothing important gets broken apart.",
  },
];

export default function IntroSection() {
  return (
    <section className="section" aria-labelledby="intro-heading">
      <div className="container">
        <div className="section-head">
          <p className="kicker">The problem</p>
          <h2 id="intro-heading">
            Your files get messy. <br />
            That's normal.
          </h2>
          <p>
            Downloads folders collect everything: coursework, code, photos, PDFs, half-finished
            projects, and things you saved “for later” a year ago. It happens to everyone.
          </p>
          <div className="chip-row mt-[1.2rem]">
            {EXAMPLES.map((e) => (
              <span className="chip plain" key={e}>
                {e}
              </span>
            ))}
          </div>
        </div>

        <p className="principle-line mb-[1.6rem] font-mono text-[1.05rem] font-semibold text-accent-strong">
          JishAtlas makes sense of the mess.
        </p>

        <div className="grid-3">
          {CARDS.map((c) => (
            <div className="card hoverable rounded-lg border border-line bg-surface p-[1.4rem_1.4rem_1.5rem] shadow-sm transition-[border-color,box-shadow,transform] duration-150 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-md" key={c.title}>
              <h3 className="mb-[0.55rem] flex items-center gap-[0.6rem]">
                <span className="shrink-0 text-accent">{c.icon}</span>
                {c.title}
              </h3>
              <p className="m-0 text-[0.95rem] text-ink-2">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
