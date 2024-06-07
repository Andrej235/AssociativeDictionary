import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FullWordLoader from "./Components/FullWord/FullWordLoader.ts";
import FullWordDisplay from "./Components/FullWord/FullWordDisplay.tsx";
import WordsSearchPage from "./Components/WordsSearchDisplay/WordsSearchPage.tsx";
import WordsLoader from "./Components/WordsSearchDisplay/WordsLoader.ts";
import Archive from "./Components/Archive/Archive.tsx";
import AboutPage from "./Components/About/AboutPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <WordsSearchPage />,
        loader: WordsLoader,
      },
      {
        path: "/words",
        element: <Archive />,
        loader: WordsLoader,
      },
      {
        path: "/words/:id",
        element: <FullWordDisplay />,
        loader: FullWordLoader,
      },
      {
        path: "about",
        element: <AboutPage />,
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
