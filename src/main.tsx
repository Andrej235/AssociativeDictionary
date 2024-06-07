import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLoader from "./AppLoader.ts";
import FullWordLoader from "./Components/FullWord/FullWordLoader.ts";
import FullWordDisplay from "./Components/FullWord/FullWordDisplay.tsx";
import WordsSearchPage from "./Components/WordsSearchDisplay/WordsSearchPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: AppLoader,
    children: [
      {
        path: "/",
        element: <WordsSearchPage />,
        loader: AppLoader,
      },
      {
        path: "/words",
        element: <div children="Archive" />,
        loader: AppLoader,
      },
      {
        path: "/words/:id",
        element: <FullWordDisplay />,
        loader: FullWordLoader,
      },
      {
        path: "about",
        element: <div children="About" />,
      },
    ],
  },
]);

//TODO: Implement navigation menu from 'FitnessTracker' repo and some random animations from 'Scroll' repo
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
