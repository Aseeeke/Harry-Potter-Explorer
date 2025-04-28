import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "./routeConfig";
import Loader from "@/widgets/Spinner"; // your global spinner or fallback

export const AppRoutes: React.FC = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routeConfig.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  </Suspense>
);
