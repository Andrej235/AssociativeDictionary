import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLoader from "./AppLoader.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: AppLoader,
  },
  {
    path: "word/:id",
    element: <div>Word</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
