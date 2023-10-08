import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Index from "@/pages";
import CreateProduct from "@/pages/products/create-product";
import DetailProduct from "@/pages/products/detail-product";
import CreateProductNew from "@/pages/products";
import Login from "@/pages/auth/login";
// import { useToken } from "@/utils/state/contexts/token-context";
// import { useSelector } from "react-redux/es/hooks/useSelector";
import { setAxiosConfig } from "@/utils/api/axiosWithConfig";

export default function Router() {
  useEffect(() => {
    setAxiosConfig("", "https://65221ef5a4199548356db19f.mockapi.io/api/v1");
  }, []);

  const router = createBrowserRouter([
    { path: "/", element: <Index /> },
    {
      path: "/create-prouducts",
      element: <CreateProductNew />,
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
