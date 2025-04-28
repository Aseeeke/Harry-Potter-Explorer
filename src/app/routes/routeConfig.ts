import React from "react";

export enum AppRoute {
  HOME = "Home",
  CHARACTERS = "Characters",
  NOT_FOUND = "notFound",
}

export const RoutePath: Record<AppRoute, string> = {
  [AppRoute.HOME]: "/",
  [AppRoute.CHARACTERS]: "/characters",
  [AppRoute.NOT_FOUND]: "*",
};

export interface RouteConfig {
  path: string;
  Component: React.LazyExoticComponent<React.ComponentType<unknown>>;
}

export const routeConfig: RouteConfig[] = [
  {
    path: RoutePath[AppRoute.HOME],
    Component: React.lazy(() => import("@/pages/HomePage")),
  },
  {
    path: RoutePath[AppRoute.CHARACTERS],
    Component: React.lazy(() => import("@/pages/CharactersPage")),
  },
  {
    path: RoutePath[AppRoute.NOT_FOUND],
    Component: React.lazy(() => import("@/pages/NotFoundPage")),
  },
];
