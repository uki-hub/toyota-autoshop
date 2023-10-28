import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Index from "./pages/index.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/product-page.tsx";
import HomePage from "./pages/home-page.tsx";
import Footer from "./components/UI/footer.tsx";
import Backdrop from "./components/UI/backdrop.tsx";
import SearchPage from "./pages/search-page.tsx";
import CartPage from "./pages/cart-page.tsx";
import NotificationPage from "./pages/notification-page.tsx";
import MePage from "./pages/me-page.tsx";
import CheckoutPage from "./pages/checkout-page.tsx";

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
        element: <SearchPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/notification",
        element: <NotificationPage />,
      },
      {
        path: "/me",
        element: <MePage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
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
