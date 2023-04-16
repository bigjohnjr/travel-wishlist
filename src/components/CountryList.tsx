import { useState, useEffect } from "react";
import { Country } from '../types';
import "./countrylist.css";

interface CountryListProps {
    countries: Country[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  const countryList = countries.map((country: Country) => (
    <div className="dropdown-option">{country.name.common}</div>
  ));

  return (
    <div>{countryList}</div>
  )
}

export default CountryList;