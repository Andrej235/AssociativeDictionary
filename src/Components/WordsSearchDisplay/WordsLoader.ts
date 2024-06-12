import { defer } from "react-router-dom";
import Word from "../../Models/Word";

const baseApiURL: string = "https://associativedictionary.azurewebsites.net/api";

export default async function WordsLoader() {
  return defer({
    words: fetch(`${baseApiURL}/words`, { method: "GET" }).then(
      (res) => res.json() as Promise<Word[]>
    ),
  });
}
