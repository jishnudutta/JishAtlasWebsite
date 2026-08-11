import { SITE_CONFIG } from "../config/site";
import Button from "./Button";
import { DownloadIcon } from "./icons";

/**
 * The one place that knows how to build the primary download action.
 * Uses SITE_CONFIG.microsoftStoreUrl — never a hardcoded URL.
 */
export default function DownloadCTA({
  label = "Download for Windows",
  variant = "primary",
  size,
  className = "",
}) {
  const { microsoftStoreUrl } = SITE_CONFIG;

  if (microsoftStoreUrl) {
    return (
      <Button
        href={microsoftStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant={variant}
        size={size}
        className={className}
        aria-label={`${label} — opens the Microsoft Store listing`}
      >
        <DownloadIcon size={16} />
        {label}
      </Button>
    );
  }

  // No Store URL configured yet: render a clearly marked placeholder instead
  // of inventing a link.
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      disabled
      title="The Microsoft Store listing is coming soon"
    >
      <DownloadIcon size={16} />
      {label}
    </Button>
  );
}

/** Small note shown near CTAs while the Store listing isn't live yet. */
export function StoreNote({ compact = false }) {
  if (SITE_CONFIG.microsoftStoreUrl) return null;
  if (compact) {
    return (
      <p className="font-mono text-[0.76rem] text-ink-3">
        <span className="inline-flex items-center gap-[0.35rem] rounded border border-[#f0dfc0] bg-warn-soft px-2 py-[0.15rem] font-medium text-warn">
          ● Store listing coming soon
        </span>
      </p>
    );
  }
  return (
    <p className="font-mono text-[0.76rem] text-ink-3">
      <span className="inline-flex items-center gap-[0.35rem] rounded border border-[#f0dfc0] bg-warn-soft px-2 py-[0.15rem] font-medium text-warn">
        ● Microsoft Store listing coming soon
      </span>{" "}
      — the download button will link here once JishAtlas is published.
    </p>
  );
}
