import { Await, useLoaderData } from "react-router-dom";
import "./App.scss";
import AppLoader from "./AppLoader";
import Word from "./Models/Word";
import { Suspense } from "react";
import Search from "./Components/Search/Search";

function App() {
  const data = useLoaderData() as ReturnType<typeof AppLoader>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={"words" in data ? data.words : []}>
        {(words: Word[]) => {
          return <Search possibleWords={words.map((x) => x.name)} />;
        }}
      </Await>
    </Suspense>
  );
}

export default App;
