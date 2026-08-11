import { useState } from "react";
import { ChevronIcon, FileIcon, FolderIcon } from "./icons";

const BADGE = {
  warn: "ml-2 rounded border border-[#f0dfc0] bg-warn-soft px-[6px] py-px text-[0.68rem] font-medium uppercase tracking-[0.06em] text-warn",
  safe: "ml-2 rounded border border-[#cfe7d8] bg-ok-soft px-[6px] py-px text-[0.68rem] font-medium uppercase tracking-[0.06em] text-ok",
};

function NodeRow({ node, collapsible }) {
  const [open, setOpen] = useState(node.open !== false);
  const isDir = node.type === "dir" || !!node.children;
  const badgeCls = BADGE[node.badgeTone || "warn"];

  if (isDir) {
    return (
      <li role="treeitem" aria-expanded={collapsible ? open : undefined}>
        <button
          className="-ml-1 inline-flex cursor-pointer items-center gap-2 rounded px-1 py-0 hover:bg-bg-soft disabled:cursor-default disabled:hover:bg-transparent"
          type="button"
          onClick={() => collapsible && setOpen(!open)}
          aria-expanded={collapsible ? open : undefined}
          disabled={!collapsible}
        >
          <span
            className={`inline-flex w-[14px] shrink-0 justify-center text-ink-3 transition-transform duration-150 ${collapsible && open ? "rotate-90" : ""}`}
            aria-hidden="true"
          >
            {collapsible && <ChevronIcon size={12} />}
          </span>
          <span className="inline-flex shrink-0 text-accent">
            <FolderIcon size={15} />
          </span>
          <span className={`${node.skipped ? "text-ink-3 line-through decoration-line-strong" : "text-ink"}`}>
            {node.name}
          </span>
          {node.badge && <span className={badgeCls}>{node.badge}</span>}
        </button>
        {open && node.children && (
          <ul className="ft-children m-0 ml-[0.42rem] list-none border-l border-line p-0 pl-[1.45rem]" role="group">
            {node.children.map((c, i) => (
              <NodeRow key={i} node={c} collapsible={collapsible} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li role="treeitem">
      <span className="-ml-1 inline-flex cursor-default items-center gap-2 rounded px-1 py-0">
        <span className="inline-flex w-[14px] shrink-0 justify-center text-ink-3" aria-hidden="true" />
        <span className="inline-flex shrink-0 text-ink-3">
          <FileIcon size={14} />
        </span>
        <span className={`${node.skipped ? "text-ink-3 line-through decoration-line-strong" : "text-ink"}`}>
          {node.name}
        </span>
        {node.badge && <span className={badgeCls}>{node.badge}</span>}
      </span>
    </li>
  );
}

/**
 * tree: { name?, children: [...] } — children entries are
 * { name, type?: "dir"|"file", children?, open?, skipped?, badge?, badgeTone? }
 * collapsible: allow collapsing folders (default false)
 */
export default function FileTree({ tree, collapsible = false, root }) {
  const nodes = Array.isArray(tree) ? tree : tree.children || [];
  const name = tree?.name || root;
  return (
    <div
      className="overflow-x-auto whitespace-nowrap rounded border border-line bg-surface px-[1.1rem] py-4 font-mono text-[0.83rem] leading-[1.75]"
      role="tree"
      aria-label={name ? `File tree: ${name}` : "File tree"}
    >
      {name && <p className="mb-[0.35rem] font-medium text-ink">{name}/</p>}
      <ul className="m-0 list-none p-0" role="group">
        {nodes.map((n, i) => (
          <NodeRow key={i} node={n} collapsible={collapsible} />
        ))}
      </ul>
    </div>
  );
}
