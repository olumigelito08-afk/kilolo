import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

export function useReveal() {
  const path = useLocation().pathname;

  useEffect(() => {
    const showContent = () => {
      const elements = [...document.querySelectorAll<HTMLElement>(".reveal")];
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
        elements.forEach((element) => element.classList.add("is-visible"));
        return () => undefined;
      }

      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          }),
        { threshold: 0.04, rootMargin: "0px 0px 160px" },
      );

      elements.forEach((element) => observer.observe(element));
      return () => observer.disconnect();
    };

    const frame = requestAnimationFrame(showContent);
    return () => cancelAnimationFrame(frame);
  }, [path]);
}
