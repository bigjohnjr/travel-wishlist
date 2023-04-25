import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WishList from "./components/WishList";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
import { Country } from "./types";
import axios from "axios";
import "./App.css";

function App() {
  const [wishList, setWishList] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country[]>([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  // search query
  const handleSearch = async (searchQuery: string) => {
    try {
      if (searchQuery == "") {
        return;
      }
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${searchQuery}`
      );
      console.log(response.data);
      setSelectedCountry(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectCountry = (country: Country) => {
    setSelectedCountry([country]);
  };

  return (
    <div className="App">
      <div className="left-box">
        <SearchBar
          onSearch={handleSearch}
          setButtonClicked={setButtonClicked}
        />
        <CountryList
          countries={selectedCountry}
          onCountrySelect={handleSelectCountry}
        />
        {buttonClicked && selectedCountry.length > 0 ? (
          <CountryDetails details={selectedCountry} />
        ) : null}
      </div>
      <div className="right-box">
        <WishList wishList={wishList} />
      </div>
    </div>
  );
}

export default App;
