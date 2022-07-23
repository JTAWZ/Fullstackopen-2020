import React, { useState } from "react";

const Countries = ({ searchResult }) => {
  console.log("check search results", searchResult);
  if (searchResult.length > 9) {
    return <h1>There are too many searches, please try again</h1>;
  } else {
    return (
      <>
        {searchResult.map((result) => {
          return (
            <DisplaySearchResults
              details={result}
              single={searchResult.length === 1 ? true : false}
              key={result.cca2}
            />
          );
        })}
      </>
    );
  }
};

const DisplaySearchResults = ({ details, single }) => {
  const [displayMore, setDisplayMore] = useState(false);
  const handleShow = () => {
    setDisplayMore(!displayMore);
  };
  console.log("check details", details);
  console.log("check single", single);
  return (
    <>
      {single ? (
        <CountryInfomation result={details} />
      ) : (
        <>
          <p>
            {details.name.common} <button onClick={handleShow}>show</button>
          </p>
          {displayMore && <CountryInfomation result={details} />}
        </>
      )}
    </>
  );
};

const CountryInfomation = ({ result }) => {
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
