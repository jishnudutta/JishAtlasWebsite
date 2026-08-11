export default function StepList({ steps = [] }) {
  return (
    <ol className="my-[1.4rem] m-0 grid list-none gap-4 p-0">
      {steps.map((s, i) => (
        <li key={i} className="grid grid-cols-[auto_1fr] items-start gap-4">
          <span
            className="mt-[2px] flex size-[34px] shrink-0 items-center justify-center rounded-full bg-accent-soft font-mono text-[0.8rem] font-semibold text-accent-strong"
            aria-hidden="true"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h4 className="mb-1 text-[1.02rem]">{s.title}</h4>
            {s.body && <p className="m-0 text-[0.95rem] text-ink-2">{s.body}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
