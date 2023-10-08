import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Index from "@/pages";
import About from "@/pages/about";

export default function Router() {
  const router = createBrowserRouter([
    { path: "/", element: <Index /> },
    { path: "/about", element: <About /> },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
