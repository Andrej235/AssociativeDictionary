import "./Archive.scss";
import { Suspense } from "react";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import Word from "../../Models/Word";
import WordsLoader from "../WordsSearchDisplay/WordsLoader";
import { toTitleCase } from "../../ToTitleCase";

export default function Archive() {
  const data = useLoaderData() as ReturnType<typeof WordsLoader>;
  const navigate = useNavigate();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={"words" in data ? data.words : []}>
        {(words: Word[]) => {
          return <div id="archive">{map(words)}</div>;
        }}
      </Await>
    </Suspense>
  );

  function map(words: Word[]) {
    const groupedWords = groupByFirstCharacter(
      words.map((x) => toTitleCase(x.name))
    );

    return Object.keys(groupedWords).map((key) => {
      return (
        <div key={key} className="group">
          <h1>{key.toUpperCase()}</h1>

          <div className="words">
            {groupedWords[key].map((word) => (
              <p
                key={word}
                onClick={() =>
                  navigate(
                    `/words/${
                      words.find((x) => toTitleCase(x.name) === word)?.id ?? 0
                    }`
                  )
                }
              >
                {word}
              </p>
            ))}
          </div>
        </div>
      );
    });
  }

  function groupByFirstCharacter<T extends string>(
    array: T[]
  ): Record<string, T[]> {
    return array.reduce((acc: Record<string, T[]>, val: T) => {
      const key = val.charAt(0).toLowerCase();
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(val);
      return acc;
    }, {});
  }
}
