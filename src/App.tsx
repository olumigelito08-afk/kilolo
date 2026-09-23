import { Outlet } from "@tanstack/react-router";
import { ScrollManager } from "@/components/scroll-manager";

export default function App() {
  return (
    <>
      <ScrollManager />
      <Outlet />
    </>
  );
}
