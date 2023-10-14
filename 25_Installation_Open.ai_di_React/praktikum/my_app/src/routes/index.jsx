import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Index from "@/pages";
import OpenAI from "@/pages/openai";
import DetailProduct from "@/pages/products/detail-product";
import CreateProductNew from "@/pages/products";
import Login from "@/pages/auth/login";
import { setAxiosConfig } from "@/utils/api/axiosWithConfig";
import { useToken } from "@/utils/state/contexts/token-context";
import Swal from "@/utils/swal";

export default function Router() {
  const { token } = useToken();
  useEffect(() => {
    setAxiosConfig("", "https://65221ef5a4199548356db19f.mockapi.io/api/v1");
  }, []);

  const router = createBrowserRouter([
    { path: "/", element: <Index /> },
    {
      path: "/create-products",
      element: token === "" ? <Login /> : <CreateProductNew />,
    },
    { path: "/product/:id", element: <DetailProduct /> },
    { path: "/login", element: token === "" ? <Login /> : <Navigate to="/" /> },
    {
      path: "/openai",
      element: <OpenAI />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
