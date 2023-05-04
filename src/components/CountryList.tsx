import { useState, useEffect } from "react";
import { Country } from "../types";
import "./countrylist.css";

interface CountryListProps {
  countries: Country[];
  onCountrySelect: (country: Country) => void;
  setInput: (value: string) => void;
}

function CountryList({
  countries,
  onCountrySelect,
  setInput,
}: CountryListProps) {
  const countryList = countries.map((country: Country) => (
    <div
      className="dropdown-option"
      onClick={() => {
        onCountrySelect(country);
        setInput(country.name.common);
      }}
    >
      {country.name.common}
    </div>
  ));
  return <div>{countryList}</div>;
}

export default CountryList;
