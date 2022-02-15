import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "90180595" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addContact = (event) => {
    event.preventDefault();
    const nameExist = persons.filter(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    const contactExist = persons.filter(
      (person) => person.number.toLowerCase() === newNumber.toLowerCase()
    );

    console.log("check person exist", nameExist, contactExist);
    if (nameExist.length > 0) {
      window.alert(`${newName} is already added to phone book`);
    } else if (contactExist.length > 0) {
      window.alert(`${newNumber} is already added to phone book`);
    } else {
      const personObj = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(personObj));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleOnChangeName = (event) => {
    console.log("check name input", event.target.value);
    setNewName(event.target.value);
  };

  const handleOnChangeNumber = (event) => {
    console.log("check number input", event.target.value);
    setNewNumber(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name:{" "}
          <input
            type="text"
            placeholder="Enter Name"
            value={newName}
            onChange={handleOnChangeName}
          />
        </div>

        <div>
          number:{" "}
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
      {persons.map((person, index) => (
        <p key={index}>
          {person.name} {person.number}
        </p>
      ))}

      {/* <div>debug: {newName}</div> */}
    </div>
  );
};

export default App;
