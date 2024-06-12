import {
  LoaderFunctionArgs,
  ParamParseKey,
  Params,
  defer,
} from "react-router-dom";
import Word from "../../Models/Word";

const baseApiURL: string = "https://associativedictionary.azurewebsites.net/api";

interface SingleExerciseLoaderArguments extends LoaderFunctionArgs {
  params: Params<ParamParseKey<":id">>;
}

export default async function FullWordLoader({
  params: { id },
}: SingleExerciseLoaderArguments) {
  if (!id) throw new Error("No id provided");

  return defer({
    word: fetch(`${baseApiURL}/words/${id}`, { method: "GET" }).then(
      (res) => res.json() as Promise<Word>
    ),
  });
}
