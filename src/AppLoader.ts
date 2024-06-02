import { defer } from "react-router-dom";

export default async function AppLoader() {
  return defer({
    words: fetch("/words", { method: "GET" }).then((res) => res.json()),
  });
}
