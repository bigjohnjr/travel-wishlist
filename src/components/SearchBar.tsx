import { useState, useEffect } from "react";
import "./searchbar.css";
import axios from "axios";
import { Country } from "../types";
import CountryList from "./CountryList";
import CountryDetails from "./CountryDetails";
import WishList from "./WishList";

interface SearchBarProps {
  setWishList: (updateFn: (currentWishList: Country[]) => Country[]) => void;
}

function SearchBar({ setWishList }: SearchBarProps) {
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country[]>([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  const addToWishList = (country: Country) => {
    setWishList((currentWishList) => [...currentWishList, country]);
  };

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        if (!buttonClicked && search == "") {
          return;
        }
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${search}`
        );
        console.log("Response", response.data);
        setSelectedCountry(response.data);
        // return response.data;
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountry();
  }, [search, buttonClicked, suggestions]);

  const onChangeHandler = (search: string) => {
    let matches: Country[] = [];
    if (search.length > 0) {
      matches = selectedCountry.filter((country) => {
        const regex = new RegExp(`${search}`, "gi");
        return country.name.common.match(regex);
      });
    }
    console.log(matches);
    setInput(search);
    setSuggestions(matches);
    setSearch(search);
    setButtonClicked(false);
  };

  function handleClick(e: any) {
    e.preventDefault();
    const inputValue = (document.getElementById(
      "countryInput"
    ) as HTMLInputElement).value;
    if (selectedCountry.length > 0) {
      setSearch(inputValue);
    }
    setButtonClicked(true);
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

      <CountryList countries={selectedCountry} />

      {buttonClicked && selectedCountry.length > 0 ? (
        <CountryDetails
          onAddToWishList={addToWishList}
          details={selectedCountry}
        />
      ) : null}
    </>
  );
}

export default SearchBar;
