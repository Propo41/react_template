import { Navigate, useRoutes } from "react-router-dom";
import Users from "pages/Users";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Users name={"dummy"} />,
    },

    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
