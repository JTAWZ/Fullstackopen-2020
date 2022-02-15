const Filter = ({ displayContactBySearch }) => {
  return (
    <>
      filter shown with:
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => displayContactBySearch(e.target.value.toLowerCase())}
      />
    </>
  );
};

export default Filter;
