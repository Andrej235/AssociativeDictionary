import { Suspense } from "react";
import "./FullWordDisplay.scss";
import { Await, useLoaderData } from "react-router-dom";
import FullWordLoader from "./FullWordLoader";
import Word from "../../Models/Word";

export default function FullWordDisplay() {
  const data = useLoaderData() as ReturnType<typeof FullWordLoader>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={"word" in data ? data.word : null}>
        {(word: Word | null) => {
          if (!word) return <h1>Word not found</h1>;

          return <div className="full-word-display">{word.name}</div>;
        }}
      </Await>
    </Suspense>
  );
}
