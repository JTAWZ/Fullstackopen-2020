//The props that are passed to the component are now directly destructured into the variables name and age (part 2).
const Hello = ({ name, age }) => {
  // Assign variable to props
  // const name = props.name;
  // const age = props.age;

  //const { age, name } = props; //destructing of variable part 1 ( basic)

  // if the objects we are destructing have values
  // props = {
  //   name: "Jason",
  //   age: 30,
  // };

  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you are probably born in {bornYear()}</p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
