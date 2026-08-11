import { ArrowRightIcon } from "./icons";

/**
 * Renders a styled link or button. Pass `href` for a link, otherwise it's a
 * `<button>`.
 */
export default function Button({
  href,
  children,
  variant = "primary",
  size,
  className = "",
  arrow = false,
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 min-h-[44px] px-[1.25rem] py-[0.55rem] " +
    "font-sans text-[0.95rem] font-semibold leading-[1.2] rounded cursor-pointer no-underline " +
    "transition-[background-color,border-color,color,transform,box-shadow] duration-150 " +
    "active:translate-y-px [&>svg]:shrink-0 " +
    "disabled:cursor-not-allowed disabled:bg-accent/55 disabled:text-white disabled:shadow-none " +
    "disabled:hover:bg-accent/55";
  const variants = {
    primary: "bg-accent text-white shadow-sm hover:bg-accent-hover hover:text-white",
    secondary:
      "bg-surface text-ink border border-line-strong hover:border-ink-3 hover:text-ink hover:bg-bg-soft",
  };
  const sizes = {
    sm: "min-h-[38px] px-[0.9rem] py-[0.4rem] text-[0.875rem] rounded-sm",
    block: "w-full",
  };
  const cls = [base, variants[variant], size && sizes[size], className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {children}
      {arrow && <ArrowRightIcon size={16} />}
    </>
  );
  if (href) {
    return (
      <a className={cls} href={href} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button className={cls} type="button" {...rest}>
      {content}
    </button>
  );
}
