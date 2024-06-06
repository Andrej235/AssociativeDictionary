import { Await, useLoaderData, useNavigate } from "react-router-dom";
import "./App.scss";
import AppLoader from "./AppLoader";
import Word from "./Models/Word";
import { Suspense } from "react";
import Search from "./Components/Search/Search";

function App() {
  const data = useLoaderData() as ReturnType<typeof AppLoader>;
  const navigate = useNavigate();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={"words" in data ? data.words : []}>
        {(words: Word[]) => {
          return (
            <Search
              possibleWords={words.map((x) => x.name)}
              onSelectWord={(selectedWord) =>
                navigate(
                  `word/${
                    words.find((word) => word.name === selectedWord)?.id ?? 0
                  }`
                )
              }
            />
          );
        }}
      </Await>
    </Suspense>
  );
}

export default App;
