import { useEffect, useRef, useState } from "react";
import { useLocation } from "@tanstack/react-router";

/**
 * Scrolls to the top of the page when:
 *   (1) navigating to a different page (pathname or hash changes),
 *   (2) clicking a link to the SAME page the user is already on, or
 *   (3) on initial page load / refresh.
 *
 * Does NOT interfere with manual scrolling (wheel, scrollbar, keyboard, etc.).
 * When the URL contains a `#hash`, scrolls to that matching element instead of top.
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation();
  const [samePageClick, setSamePageClick] = useState(0);
  const mountedRef = useRef(false);

  useEffect(() => {
    const currentPath = pathname;

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;

      try {
        const absolute = new URL(anchor.href, document.baseURI);
        if (absolute.origin !== window.location.origin) return;
        if (absolute.pathname !== currentPath) return;
        setSamePageClick((c) => c + 1);
      } catch {
        /* ignore malformed URLs */
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
    }

    const frame = requestAnimationFrame(() => {
      if (hash) {
        const id = decodeURIComponent(hash.slice(1));
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView();
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, samePageClick]);

  return null;
}
