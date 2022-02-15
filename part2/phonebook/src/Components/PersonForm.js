const PersonForm = ({
  addContact,
  newName,
  handleOnChangeName,
  handleOnChangeNumber,
  newNumber,
}) => {
  return (
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
  );
};

export default PersonForm;
