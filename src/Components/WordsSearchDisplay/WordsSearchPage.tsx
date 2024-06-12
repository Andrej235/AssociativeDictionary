import { Suspense } from "react";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import Word from "../../Models/Word";
import Search from "../Search/Search";
import WordsLoader from "./WordsLoader";
import { toTitleCase } from "../../ToTitleCase";

export default function WordsSearchPage() {
  const data = useLoaderData() as ReturnType<typeof WordsLoader>;
  const navigate = useNavigate();

  return (
    <Suspense fallback={null}>
      <Await resolve={"words" in data ? data.words : []}>
        {(words: Word[]) => {
          return (
            <Search
              possibleWords={words.map((x) => x.name)}
              onSelectWord={(selectedWord) => {
                navigate(
                  `/words/${
                    words.find(
                      (x) => toTitleCase(x.name) === toTitleCase(selectedWord)
                    )?.id ?? 0
                  }`
                );
              }}
            />
          );
        }}
      </Await>
    </Suspense>
  );
}
