import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Index from "./pages/index.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/product-page.tsx";
import HomePage from "./pages/home-page.tsx";
import Footer from "./components/UI/footer.tsx";
import Backdrop from "./components/UI/backdrop.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product",
        element: <label>notthing</label>,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/category",
        element: <label>category</label>,
      },
      {
        path: "/search",
        element: <label>search</label>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
    <Backdrop />
  </React.StrictMode>
);
