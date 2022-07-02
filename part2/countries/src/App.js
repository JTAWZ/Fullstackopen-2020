import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./Component/Filter";
import Countries from "./Component/Countries";
const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const getCountries = () => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  };

  const filterCountriesBySearch = (search) => {
    const searchCountries = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(search);
    });

    setSearchResult(searchCountries);
  };
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <Filter filterCountriesBySearch={filterCountriesBySearch} />
      <Countries searchResult={searchResult} />
    </div>
  );
};

export default App;
