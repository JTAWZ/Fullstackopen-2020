import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <WeatherInformation result={result} />
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
const Img = ({ img }) => {
  return <img src={img} alt="flag" width="100px" />;
};
const WeatherInformation = ({ result }) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const lat = result.capitalInfo.latlng[0];
  const lng = result.capitalInfo.latlng[1];
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  console.log("display lat long result", lat, lng);

  const weathericon = JSON.stringify(weather.weather.icon);
  return (
    <>
      {Object.keys(weather).length === 0 || weather.error ? (
        <h2>'Error'</h2>
      ) : (
        <>
          <h2>Weather in {result.capital}</h2>
          {/* <strong>{weather.weather[0].main}</strong> */}
          <strong>{JSON.stringify(weather)}</strong>
          <p>Temprature: {JSON.stringify(weather.main.temp)}° Celsius</p>
          <Img img={`http://openweathermap.org/img/wn/${weathericon}@2x.png`} />
          <p>Wind: {JSON.stringify(weather.wind.speed)} m/s</p>
        </>
      )}
    </>
  );
};

export default Countries;
