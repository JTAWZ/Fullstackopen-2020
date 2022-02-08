import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("enter name here");

  // const addName = (event) => {
  //   setPersons({name:event.target.value)};
  // };
  const addName = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const personObj = {
      name: newName,
    };
    setPersons(persons.concat(personObj));
    setNewName("");
  };

  const handleOnChange = (event) => {
    console.log("check input", event.target.value);
    setNewName(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input type="text" value={newName} onChange={handleOnChange} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => (
        <p key={index}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
