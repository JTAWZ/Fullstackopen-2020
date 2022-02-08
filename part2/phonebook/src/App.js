import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("enter name here");

  // const addName = (event) => {
  //   setPersons({name:event.target.value)};
  // };
  const addName = (event) => {
    event.preventDefault();
    const nameExist = persons.filter(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (nameExist.length > 0) {
      window.alert(`${newName} is already added to phone book`);
      // console.log("check name 1", nameExist.length);
    } else {
      // console.log("check name 2", nameExist.length);
      const personObj = {
        name: newName,
      };
      setPersons(persons.concat(personObj));
      setNewName("");
    }
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

      {/* <div>debug: {newName}</div> */}
    </div>
  );
};

export default App;
