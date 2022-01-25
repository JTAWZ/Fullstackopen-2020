import React from "react";
import Notes from "./component/Note";

const App = ({ notes }) => {
  // const listOfNote = notes.map((note) => <li key={note.id}>{note.content}</li>);
  // const listofNotes = notes.map(function (note) {
  //   return <li key={note.id}>{note.content}</li>;
  // });
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Notes key={note.id} notes={note} />
          // <li key={note.id}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
