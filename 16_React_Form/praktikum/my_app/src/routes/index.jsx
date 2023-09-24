import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Index from "@/pages";
import CreateProduct from "@/pages/products/create-product";
import DetailProduct from "@/pages/products/detail-product";
import Login from "@/pages/auth/login";
import { useToken } from "@/utils/contexts/token-context";

export default function Router() {
  const { token } = useToken();
  const router = createBrowserRouter([
    { path: "/", element: <Index /> },
    {
      path: "/create-prouducts",
      element: token ? <CreateProduct /> : <Navigate to="/login" />,
    },
    { path: "/product/:id", element: <DetailProduct /> },
    { path: "/login", element: <Login /> },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
