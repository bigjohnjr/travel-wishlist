import { useState, useEffect } from "react";
import { Country } from "../types";
import "./countrylist.css";

interface CountryListProps {
  countries: Country[];
  onCountrySelect: (country: Country) => void;
}

function CountryList({ countries, onCountrySelect }: CountryListProps) {
  const countryList = countries.map((country: Country) => (
    <div className="dropdown-option">{country.name.common}</div>
  ));
  return <div>{countryList}</div>;
}

export default CountryList;
