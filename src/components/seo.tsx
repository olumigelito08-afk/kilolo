import { useEffect } from "react";

export type Meta =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string };

function upsert(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Applies a page's title and meta tags to the document head. */
export function useSeo(meta?: Meta[]) {
  useEffect(() => {
    if (!meta) return;
    for (const item of meta) {
      if ("title" in item) document.title = item.title;
      else if ("name" in item) upsert("name", item.name, item.content);
      else upsert("property", item.property, item.content);
    }
  }, [meta]);
}
