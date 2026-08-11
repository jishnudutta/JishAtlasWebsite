import { useState } from "react";
import { CopyIcon } from "./icons";

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const KEYWORDS =
  "const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|import|export|from|default|new|class|extends|async|await|try|catch|finally|throw|typeof|instanceof|in|of|true|false|null|undefined|def|elif|not|and|or|with|as|except|pass|None|True|False|lambda|SET|ECHO|REM";

/** Comment styles enabled per language (avoids `;` eating JS for-loops). */
function commentPart(lang) {
  const parts = [];
  if (["sh", "bash", "py", "python", "ini", "conf", "env"].includes(lang)) parts.push("#[^\\n]*");
  if (["ini", "conf", "env"].includes(lang)) parts.push(";[^\\n]*");
  if (["js", "ts", "jsx", "tsx", "json", "css", "c", "cpp", "java"].includes(lang)) {
    parts.push("\\/\\/[^\\n]*");
  }
  return parts.join("|");
}

function buildRegex(lang) {
  const cmt = commentPart(lang);
  const parts = ['(?<str>"(?:[^"\\\\\\n]|\\\\.)*"|\'(?:[^\'\\\\\\n]|\\\\.)*\'|`(?:[^`\\\\\\n]|\\\\.)*`)'];
  if (cmt) parts.push(`(?<cmt>${cmt})`);
  parts.push(`(?<kw>\\b(?:${KEYWORDS})\\b)`, "(?<num>\\b\\d+(?:\\.\\d+)?\\b)");
  return new RegExp(parts.join("|"), "g");
}

function highlightLine(line, lang) {
  const re = buildRegex(lang);
  const out = [];
  let last = 0;
  let m;
  while ((m = re.exec(line)) !== null) {
    if (m.index > last) out.push(esc(line.slice(last, m.index)));
    const g = m.groups || {};
    const cls = g.str ? "tok-s" : g.cmt ? "tok-c" : g.num ? "tok-n" : "tok-k";
    out.push(`<span class="${cls}">${esc(m[0])}</span>`);
    last = m.index + m[0].length;
  }
  out.push(esc(line.slice(last)));
  return out.join("");
}

export default function CodeBlock({ code, lang = "text", title }) {
  const [copied, setCopied] = useState(false);
  const plain = ["", "text", "plain", "txt"].includes(lang);
  const html = plain
    ? esc(code)
    : code
        .split("\n")
        .map((l) => highlightLine(l, lang))
        .join("\n");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  return (
    <div className="relative my-[1.4rem] overflow-hidden rounded-lg bg-code-bg">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-[0.9rem] py-[0.45rem] font-mono text-[0.72rem] uppercase tracking-[0.06em] text-code-muted">
        <span>{title || lang || "code"}</span>
        <button
          className={`inline-flex cursor-pointer items-center gap-[0.35rem] rounded border border-white/15 bg-transparent px-[0.55rem] py-[0.2rem] font-mono text-[0.7rem] text-code-muted transition-[color,border-color] duration-150 hover:border-white/30 hover:text-code-fg ${
            copied ? "border-[rgba(158,206,106,0.5)] text-code-green" : ""
          }`}
          onClick={copy}
          type="button"
        >
          <CopyIcon size={12} />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="m-0 overflow-x-auto px-[1.15rem] py-[1.05rem] text-[0.83rem] leading-[1.7] text-code-fg [tab-size:4]">
        <code dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  );
}
