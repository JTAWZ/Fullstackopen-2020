import React from "react";

const Countries = ({ searchResult }) => {
  const displaySearchResults = () => {
    if (searchResult.length > 1 && searchResult.length <= 10) {
      return (
        <>
          {searchResult.map((result) => (
            <React.Fragment key={result.cca2}>
              <p>{result.name.common}</p>
            </React.Fragment>
          ))}
        </>
      );
    } else if (searchResult.length === 1) {
      return (
        <>
          <h1>{searchResult[0].name.common}</h1>
          <p>Capital: {searchResult[0].capital}</p>
          <p>Area: {searchResult[0].area}</p>
          <h2>languagues:</h2>
          {/* <Languages Languages={searchResult[0].languages} /> */}
          <ul>
            <li>{JSON.stringify(searchResult[0].languages)}</li>
          </ul>
          <img src={searchResult[0].flags.png} alt="country flag" />
        </>
      );
    }
  };
  return <>{displaySearchResults()}</>;
};

const Languages = (languages) => {
  const newLanguage = Object.values(languages);

  return (
    <>
      {newLanguage.map((value, index) => (
        <ul key={index}>
          <li>{JSON.stringify(value)}</li>
        </ul>
      ))}
    </>
  );
};

export default Countries;
