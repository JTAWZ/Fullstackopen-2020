const Filter = ({ filterCountriesBySearch }) => {
  return (
    <>
      find countries:
      <input
        type="text"
        placeholder="Enter Country"
        onChange={(e) => filterCountriesBySearch(e.target.value.toLowerCase())}
      />
    </>
  );
};

export default Filter;
