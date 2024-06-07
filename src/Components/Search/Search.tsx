import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./Search.scss";
import { Trie } from "./Trie";
import distance from "./DamerauLevenshteinDistance";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Flip from "gsap/dist/Flip";
import InputField from "../InputField/InputField";
gsap.registerPlugin(Flip);

interface SearchProps {
  possibleWords: string[];
  onSelectWord?: (word: string) => void;
  wrapperRef?: React.RefObject<HTMLDivElement>;
}

function Search({ possibleWords, onSelectWord, wrapperRef: ref }: SearchProps) {
  const suggestionWrapperRef = useRef<HTMLDivElement>(null);
  const trie = useMemo(() => Trie.from(possibleWords), [possibleWords]);

  const { contextSafe } = useGSAP();
  const sortAnimation = useCallback(
    contextSafe((oldState: Flip.FlipState) => {
      Flip.from(oldState, {
        duration: 0.5,
        ease: "power1.inOut",
      });
    }),
    [contextSafe]
  );

  const [autocompleteResults, setAutocompleteResults] = useState<{
    words: string[];
    state: Flip.FlipState | null;
  }>({
    words: possibleWords,
    state: null,
  });

  useEffect(() => {
    if (!autocompleteResults.state) return;

    sortAnimation(autocompleteResults.state);
  }, [autocompleteResults]);

  function sortByDistance(words: string[], query: string) {
    const priorityWords: { word: string; priority: number }[] = words.map(
      (x) => ({
        word: x,
        priority: distance(x, query),
      })
    );

    const sortedPriorityWords = priorityWords.sort(
      (a, b) => a.priority - b.priority
    );

    const distanceBasedSuggestions = sortedPriorityWords.map((x) => x.word);

    return distanceBasedSuggestions;
  }

  function createAutoCompleteResults(query: string) {
    if (query === "") return;

    const oldWordState = Flip.getState(".word");
    const enteredQuery = query.toLowerCase();

    const trieSuggestions = trie.suggest(enteredQuery);
    const distanceBasedSuggestions = sortByDistance(
      possibleWords,
      enteredQuery
    );

    const suggestions = [
      ...new Set([...trieSuggestions, ...distanceBasedSuggestions]),
    ];

    setAutocompleteResults({
      words: suggestions.slice(0, 20),
      state: oldWordState,
    });
  }

  return (
    <div id="search-container" ref={ref}>
      <InputField
        iconName="search"
        id="search-bar"
        onChange={(e) => createAutoCompleteResults(e.target.value)}
        onEnter={() => {
          onSelectWord?.(autocompleteResults.words[0]);
          setAutocompleteResults({
            words: possibleWords,
            state: null,
          });

          return true; //Clears the search bar / input field
        }}
        placeholder="Pretrazite reci..."
      />

      <div id="autocomplete-container" ref={suggestionWrapperRef}>
        {autocompleteResults.words.map((word) => (
          <div key={word} id={"word-" + word} className="word">
            <p
              onClick={() => {
                onSelectWord?.(word);
                setAutocompleteResults({
                  words: possibleWords,
                  state: null,
                });
              }}
            >
              {titleCase(word)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function titleCase(text: string) {
  return text
    .split(" ")
    .map((word) => {
      if (word.length === 0) return word;

      return (
        word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
      );
    })
    .join(" ");
}

export default Search;
