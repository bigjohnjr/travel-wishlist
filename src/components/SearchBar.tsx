import { useState } from "react";
import "./searchbar.css";
import { Country } from "../types";

interface SearchBarProps {
  onSearch: (searchQuery: string) => Promise<void>;
  setButtonClicked: (clicked: boolean) => void;
  input: string;
  setInput: (value: string) => void;
}

function SearchBar({
  onSearch,
  setButtonClicked,
  input,
  setInput,
}: SearchBarProps) {
  const [suggestions, setSuggestions] = useState<Country[]>([]);

  const onChangeHandler = (search: string) => {
    setInput(search);
    setButtonClicked(false);

    if (search.length > 0) {
      onSearch(search);
    } else {
      setSuggestions([]);
    }
  };

  function handleClick(e: any) {
    e.preventDefault();
    const inputValue = (document.getElementById(
      "countryInput"
    ) as HTMLInputElement).value;
    if (inputValue !== "") {
      setButtonClicked(true);
      console.log("HandleClick", setButtonClicked);
      onSearch(inputValue);
    }
  }

  return (
    <>
      <input
        id="countryInput"
        value={input}
        onChange={(e) => onChangeHandler(e.target.value)}
        type="text"
      />

      <button onClick={handleClick} type="submit">
        Search
      </button>
    </>
  );
}

export default SearchBar;
