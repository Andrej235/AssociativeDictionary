import { Suspense } from "react";
import "./FullWordDisplay.scss";
import { Await, useLoaderData } from "react-router-dom";
import FullWordLoader from "./FullWordLoader";
import Word from "../../Models/Word";
import { toTitleCase } from "../../ToTitleCase";

export default function FullWordDisplay() {
  const data = useLoaderData() as ReturnType<typeof FullWordLoader>;

  return (
    <Suspense fallback={null}>
      <Await resolve={"word" in data ? data.word : null}>
        {(word: Word | null) => {
          if (!word) return <h1>Word not found</h1>;

          return (
            <div className="full-word-display">
              <h1>Asocijacije za "{toTitleCase(word.name)}" su:</h1>

              <div className="word-associations">
                {word.associations
                  .sort((a, b) => b.count - a.count)
                  .map((association) => (
                    <p key={association.name}>
                      {toTitleCase(association.name)} - {association.count}
                    </p>
                  ))}
              </div>
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
}
