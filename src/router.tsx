import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import { ScrollManager } from "@/components/scroll-manager";
import Home from "@/pages/index";
import About from "@/pages/about";
import ClientsPartners from "@/pages/clients-partners";
import Contact from "@/pages/contact";
import HseQuality from "@/pages/hse-quality";
import Privacy from "@/pages/privacy";
import Products from "@/pages/products";
import Projects from "@/pages/projects";
import Quote from "@/pages/quote";
import Services from "@/pages/services";
import Terms from "@/pages/terms";
import NotFound from "@/pages/not-found";
import { ErrorPage } from "@/components/error-page";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <ScrollManager />
      <Outlet />
    </>
  ),
  notFoundComponent: () => <NotFound />,
  errorComponent: () => <ErrorPage />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const clientsPartnersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/clients-partners",
  component: ClientsPartners,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const hseQualityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/hse-quality",
  component: HseQuality,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy",
  component: Privacy,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: Products,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: Projects,
});

const quoteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quote",
  component: Quote,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: Services,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms",
  component: Terms,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  clientsPartnersRoute,
  contactRoute,
  hseQualityRoute,
  privacyRoute,
  productsRoute,
  projectsRoute,
  quoteRoute,
  servicesRoute,
  termsRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: false,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
