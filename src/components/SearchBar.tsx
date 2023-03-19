import { useState, useEffect } from "react";
import axios from "axios";

function SearchBar() {
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/all`);
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountry();
  }, [search]);

  return (
    <div>
      <input value="" type="text" />
      <button type="submit">Search</button>
    </div>
  );
}

export default SearchBar;
