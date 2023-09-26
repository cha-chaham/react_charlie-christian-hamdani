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
import { useToken } from "@/utils/state/contexts/token-context";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Router() {
  const isLoggedIn = useSelector((state) => state.data.isLoggedIn);
  console.log(isLoggedIn);
  const router = createBrowserRouter([
    { path: "/", element: <Index /> },
    {
      path: "/create-prouducts",
      element: isLoggedIn ? <CreateProduct /> : <Navigate to="/login" />,
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
