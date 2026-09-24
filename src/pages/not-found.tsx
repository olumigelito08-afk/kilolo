import { useSeo } from "@/components/seo";
import { ErrorPage } from "@/components/error-page";

export default function NotFound() {
  useSeo([{ title: "Page not found | Supreme Energy" }]);
  return <ErrorPage />;
}
