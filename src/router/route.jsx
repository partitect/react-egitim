import { lazy } from "react";
import { useRoutes } from "react-router-dom";
export const HomeScreen = lazy(() => import("../pages/home"));
export const ProfileScreen = lazy(() => import("../pages/profile"));

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
      index: true,
    },
    {
      path: "/profile",
      element: <ProfileScreen />,
    },
  ]);

  return routes;
}
