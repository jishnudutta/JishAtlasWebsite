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
  showNote = true,
}) {
  const { microsoftStoreUrl } = SITE_CONFIG;

  const button = microsoftStoreUrl ? (
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
  ) : (
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

  if (!showNote) return button;

  return (
    <div className="inline-flex flex-col items-start gap-1.5">
      {button}
      <StoreNote compact />
    </div>
  );
}

/**
 * Secondary standalone EXE download option.
 * Directs users to official GitHub release.
 */
export function ExeDownloadCTA({
  label = "Download EXE directly",
  subtext = "Standalone Windows executable",
  variant = "secondary",
  size,
  className = "",
}) {
  const { exeReleaseUrl } = SITE_CONFIG;

  return (
    <Button
      href={exeReleaseUrl}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      className={`flex-col items-start gap-0.5 py-2.5 px-4 text-left ${className}`}
      aria-label={`${label} — ${subtext}`}
    >
      <div className="flex items-center gap-2 font-semibold">
        <DownloadIcon size={16} />
        <span>{label}</span>
      </div>
      {subtext && (
        <span className="text-[0.76rem] font-normal opacity-80">
          {subtext}
        </span>
      )}
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
          ● Microsoft Store listing coming soon
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

/** Informational note regarding Windows SmartScreen warnings for direct EXE downloads. */
export function SmartScreenNotice({ className = "" }) {
  return (
    <div className={`rounded-md border border-line bg-surface p-3.5 text-[0.84rem] text-ink-2 ${className}`}>
      <p className="m-0 leading-relaxed">
        <strong className="text-ink">Windows SmartScreen notice:</strong> Because JishAtlas is a new application, Windows may temporarily show a SmartScreen warning. If you downloaded the EXE from the official JishAtlas GitHub release, select <strong>More info → Run anyway</strong> to continue.
      </p>
    </div>
  );
}

