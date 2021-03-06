import axios from "axios";
import React, { useEffect, useState } from "react";
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("check data", response.data);
      setPersons(response.data);
      setSearchResult(response.data);
    });
  }, []);

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
    const searchName = persons.filter((person) =>
      person.name.toLowerCase().includes(search)
    );

    setSearchResult(searchName);
  };

  const handleOnChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleOnChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <div>
        <h2>Phonebook</h2>
        <Filter displayContactBySearch={displayContactBySearch} />
      </div>
      <PersonForm
        addContact={addContact}
        newName={newName}
        newNumber={newNumber}
        handleOnChangeName={handleOnChangeName}
        handleOnChangeNumber={handleOnChangeNumber}
      />
      <h2>Numbers</h2>
      <Persons searchResult={searchResult} />

      {/* <div>debug: {newName}</div> */}
    </div>
  );
};

export default App;
