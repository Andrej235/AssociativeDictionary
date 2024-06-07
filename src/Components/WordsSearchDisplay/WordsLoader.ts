import { defer } from "react-router-dom";
import Word from "../../Models/Word";

const baseApiURL: string = "http://localhost:5119/api";

export default async function WordsLoader() {
  return defer({
    words: fetch(`${baseApiURL}/words`, { method: "GET" }).then(
      (res) => res.json() as Promise<Word[]>
    ),
  });
}
