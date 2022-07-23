import React, { useState } from "react";

const Countries = ({ searchResult }) => {
  const [displayMore, setDisplayMore] = useState(false);
  console.log("check search results", searchResult);
  const displaySearchResults = () => {
    if (searchResult.length > 1 && searchResult.length <= 10) {
      return (
        <>
          {searchResult.map((result) => (
            <React.Fragment key={result.cca2}>
              <p>
                {result.name.common}
                <button>Show</button>
              </p>
            </React.Fragment>
          ))}
        </>
      );
    } else if (searchResult.length === 1) {
      return <CountryInfomation searchResult={searchResult} />;
    }
  };
  return <>{displaySearchResults()}</>;
};

const CountryInfomation = ({ searchResult }) => {
  const display = searchResult.map((result) => {
    return (
      <React.Fragment key={result.cca2}>
        <h1>{result.name.common}</h1>
        <p>Capital: {result.capital}</p>
        <p>Area: {result.area}</p>
        <h2>Languagues:</h2>
        <Languages languages={result.languages} />
        <img src={result.flags.png} alt="country flag" />
      </React.Fragment>
    );
  });
  return display;
};

const Languages = ({ languages }) => {
  console.log("check languages", languages);
  const displayLanguage = Object.values(languages).map((value, index) => {
    return (
      <ul key={index}>
        <li>{value}</li>
      </ul>
    );
  });
  return displayLanguage;
};

export default Countries;
