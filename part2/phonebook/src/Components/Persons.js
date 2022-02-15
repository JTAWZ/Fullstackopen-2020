const Person = ({ result }) => {
  return (
    <p>
      {result.name} {result.number}
    </p>
  );
};

const Persons = ({ searchResult }) => {
  return (
    <>
      {searchResult.map((result) => (
        <Person key={result.id} result={result} />
      ))}
    </>
  );
};

export default Persons;
