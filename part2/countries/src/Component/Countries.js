import React from "react";

const Countries = ({ searchResult }) => {
  const displaySearchResults = () => {
    if (searchResult.length > 1 && searchResult <= 10) {
      return (
        <>
          {searchResult.map((result) => (
            <p>{result.name.common}</p>
          ))}
        </>
      );
    } else if (searchResult.length === 1) {
      return (
        <>
          {searchResult.map((result) => (
            <>
              <h1>{result.name.common}</h1>
              <p>{result.capital}</p>
              <p>{result.area}</p>
              <h2>languagues:</h2>
              <ul>
                <li>{result.languages}</li>
              </ul>
              <img src={result.flag} alt="country flag" />
            </>
          ))}
        </>
      );
    }
  };
  return <>{displaySearchResults}</>;
};

export default Countries;
