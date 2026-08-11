import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Adds `.is-visible` to every `[data-reveal]` element as it scrolls into view.
 * Re-runs on route change so dynamically mounted pages get revealed too.
 * With prefers-reduced-motion (or no IntersectionObserver), reveals instantly.
 */
export default function RevealObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]:not(.is-visible)");
    if (!els.length) return;

    const reveal = (el) => el.classList.add("is-visible");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      els.forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
