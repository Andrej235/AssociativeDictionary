import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLoader from "./AppLoader.ts";
import FullWordLoader from "./Components/FullWord/FullWordLoader.ts";
import FullWordDisplay from "./Components/FullWord/FullWordDisplay.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: AppLoader,
  },
  {
    path: "word/:id",
    element: <FullWordDisplay />,
    loader: FullWordLoader,
  },
]);

//TODO: Implement navigation menu from 'FitnessTracker' repo and some random animations from 'Scroll' repo
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
