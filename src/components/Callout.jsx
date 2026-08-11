const TITLES = { note: "Note", warning: "Warning", tip: "Tip" };

const KINDS = {
  note: "border-l-accent [&_.callout-title]:text-accent-strong",
  warning: "border-l-warn bg-warn-soft [&_.callout-title]:text-warn",
  tip: "border-l-ok bg-ok-soft [&_.callout-title]:text-ok",
};

export default function Callout({ kind = "note", title, children }) {
  return (
    <div className={`my-[1.4rem] rounded border border-line border-l-[3px] p-[1rem_1.15rem] text-[0.95rem] [&_p]:my-0 ${KINDS[kind]}`}>
      <div className="callout-title mb-[0.35rem] flex items-center gap-2 text-[0.9rem] font-bold">
        {title || TITLES[kind]}
      </div>
      <div>{children}</div>
    </div>
  );
}
