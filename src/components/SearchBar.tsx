import { useState } from "react";
import "./searchbar.css";
import { Country } from "../types";
import WishList from "./WishList";

interface SearchBarProps {
  // updateWishList: (updateFn: (currentWishList: Country[]) => Country[]) => void;
  onSearch: (searchQuery: string) => Promise<void>;
  setButtonClicked: (clicked: boolean) => void;
}

function SearchBar({ onSearch, setButtonClicked }: SearchBarProps) {
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<Country[]>([]);

  // const addToWishList = (country: Country) => {
  //   updateWishList((currentWishList) => [...currentWishList, country]);
  // };

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

      {/* <CountryList countries={selectedCountry} />

      {buttonClicked && selectedCountry.length > 0 ? (
        <CountryDetails
          onAddToWishList={addToWishList}
          details={selectedCountry}
        />
      ) : null} */}
    </>
  );
}

export default SearchBar;
