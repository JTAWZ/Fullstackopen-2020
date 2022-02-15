import React, { useEffect, useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const addContact = (event) => {
    event.preventDefault();
    const nameExist = persons.filter(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    const contactExist = persons.filter(
      (person) => person.number.toLowerCase() === newNumber.toLowerCase()
    );

    if (nameExist.length > 0) {
      window.alert(`${newName} is already added to phone book`);
    } else if (contactExist.length > 0) {
      window.alert(`${newNumber} is already added to phone book`);
    } else {
      const personObj = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      setPersons(persons.concat(personObj));
      setSearchResult(searchResult.concat(personObj));
      setNewName("");
      setNewNumber("");
    }
  };

  const displayContactBySearch = (search) => {
    console.log("display search value", search);
    setSearchText(search);
    const searchName = persons.filter((person) =>
      person.name.toLowerCase().includes(search)
    );
    console.log("check search name", searchName.length);

    setSearchResult(searchName);
  };

  const handleOnChangeName = (event) => {
    console.log("check name input", event.target.value);
    setNewName(event.target.value);
  };

  const handleOnChangeNumber = (event) => {
    console.log("check number input", event.target.value);
    setNewNumber(event.target.value);
  };

  useEffect(() => {
    setSearchResult([...persons]);
  }, []);
  return (
    <div>
      <div>
        <h2>Phonebook</h2>
        filter shown with:
        <input
          type="text"
          placeholder="Enter name"
          value={searchText}
          onChange={(e) => displayContactBySearch(e.target.value.toLowerCase())}
        />
      </div>
      <form onSubmit={addContact}>
        <h2>Add a new</h2>

        <div>
          name:
          <input
            type="text"
            placeholder="Enter Name"
            value={newName}
            onChange={handleOnChangeName}
          />
        </div>

        <div>
          number:
          <input
            type="number"
            placeholder="Enter Number"
            value={newNumber}
            onChange={handleOnChangeNumber}
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {searchResult.map((result) => (
        <p key={result.id}>
          {result.name} {result.number}
        </p>
      ))}

      {/* <div>debug: {newName}</div> */}
    </div>
  );
};

export default App;
