import { Country } from "../types";
import "./countrydetails.css";

interface CountryDetailsProps {
  details: Country[];
  onAddToWishList: (country: Country) => void;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({
  details,
  onAddToWishList,
}) => {
  const countrydetails = details.map((detail) => {
    const handleClick = (e: any, country: Country) => {
      e.preventDefault();
      onAddToWishList(country);
    };
    return (
      <div className="country-data-wrapper">
        <h2 className="country-data__name">{detail.name.common}</h2>
        <div className="country-data__main-details">
          <div className="country-data__capital">
            <span className="strong">Capital:</span> {detail.capital}
          </div>
          <div className="country-data__region">
            <span className="strong">Region:</span> {detail.region}
          </div>
        </div>
        <div className="country-data__image">
          <img src={detail.flags.png} alt={detail.flags.alt} />
        </div>
        <ul>
          {detail.currencies && Object.values(detail.currencies).length > 0 && (
            <li className="country-data__currency">
              <span className="strong">Currency: </span>
              {Object.values(detail.currencies).map((currency: any) => (
                <span key={currency.name}>{currency.name}</span>
              ))}
            </li>
          )}
          <li>
            <span className="strong">Population:</span> {detail.population}
          </li>
        </ul>
        <button onClick={(e) => handleClick(e, detail)} id="wishListButton">
          Add to Wishlist
        </button>
      </div>
    );
  });

  return (
    <>
      <div className="country-details-container">{countrydetails}</div>
    </>
  );
};

export default CountryDetails;
