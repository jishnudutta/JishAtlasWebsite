import Callout from "./Callout";
import CodeBlock from "./CodeBlock";
import FileTree from "./FileTree";
import StepList from "./StepList";
import Accordion from "./Accordion";

function Blocks({ blocks }) {
  return blocks.map((b, i) => {
    switch (b.type) {
      case "p":
        return <p key={i}>{b.text}</p>;
      case "list":
        if (b.ordered) {
          return (
            <ol key={i}>
              {b.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ol>
          );
        }
        return (
          <ul key={i}>
            {b.items.map((it, j) => (
              <li key={j}>{it}</li>
            ))}
          </ul>
        );
      case "callout":
        return (
          <Callout key={i} kind={b.kind} title={b.title}>
            <p>{b.text}</p>
          </Callout>
        );
      case "code":
        return <CodeBlock key={i} code={b.code} lang={b.lang} title={b.title} />;
      case "filetree":
        return <FileTree key={i} tree={b.tree} collapsible={b.collapsible} />;
      case "steps":
        return <StepList key={i} steps={b.steps} />;
      case "table":
        return (
          <div className="my-[1.4rem] overflow-x-auto rounded border border-line" key={i}>
            <table className="w-full border-collapse bg-surface text-[0.92rem] [&_tr:last-child_td]:border-b-0">
              <thead>
                <tr>
                  {b.head.map((h, j) => (
                    <th
                      key={j}
                      className="border-b border-line bg-bg-soft px-4 py-[0.7rem] text-left font-mono text-[0.74rem] font-semibold uppercase tracking-[0.06em] text-ink-3"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((row, j) => (
                  <tr key={j}>
                    {row.map((cell, k) => (
                      <td key={k} className="border-b border-line px-4 py-[0.7rem] text-left align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "faq":
        return (
          <Accordion
            key={i}
            items={b.items.map((it) => ({ title: it.title, body: <p>{it.body}</p> }))}
          />
        );
      default:
        return null;
    }
  });
}

export default function DocsContent({ doc }) {
  return (
    <article>
      <h1 className="mb-2">{doc.title}</h1>
      <p className="mb-[2.2rem] text-[1.08rem] text-ink-2">{doc.description}</p>
      {doc.sections.map((s) => (
        <section key={s.id} id={s.id}>
          <h2>{s.title}</h2>
          <Blocks blocks={s.blocks} />
        </section>
      ))}
    </article>
  );
}
