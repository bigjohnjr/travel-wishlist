import { Country } from "../types";

interface WishListProps {
  wishList: Country[];
}

function WishList({ wishList }: WishListProps) {
  return (
    <div>
      <h2>WishList</h2>
      <ul>
        {wishList.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}

export default WishList;
