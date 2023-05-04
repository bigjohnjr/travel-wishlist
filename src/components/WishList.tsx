import { useState, useEffect } from "react";
import { Country } from "../types";
import "./wishlist.css";

interface WishListProps {
  wishList: Country[];
}

function WishList({ wishList }: WishListProps) {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  const handlePageNumber = (pageNumber: number) => {
    setCurrentPageNumber(pageNumber);
  };

  const countriesPerPage = 4;
  const totalPages = Math.ceil(wishList.length / countriesPerPage);
  const startIndex = currentPageNumber * countriesPerPage;
  const endIndex = startIndex + countriesPerPage;
  const displayedCountries = wishList.slice(startIndex, endIndex);

  return (
    <div className="wishlist">
      <h2>WishList</h2>
      <ul>
        {wishList.map((country) => (
          <li>
            <h4>{country.name.common}</h4>
            <img src={country.flags.png} alt={country.flags.alt}></img>
          </li>
        ))}
      </ul>
      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageNumber(index)}
              className={
                index === currentPageNumber
                  ? "pagination-btn active"
                  : "pagination-btn"
              }
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default WishList;
