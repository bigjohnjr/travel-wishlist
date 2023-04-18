import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WishList from "./components/WishList";
import { Country } from "./types";
import "./App.css";

function App() {
  const [wishList, setWishList] = useState<Country[]>([]);

  return (
    <div className="App">
      <div className="left-box">
        <SearchBar setWishList={setWishList} />
      </div>
      <div className="right-box">
        <WishList wishList={wishList} />
      </div>
    </div>
  );
}

export default App;
