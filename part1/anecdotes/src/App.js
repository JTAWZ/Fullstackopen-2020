import React, { useState } from "react";

const StatisticLine = (props) => {
  return (
    <>
      <p>
        {props.text}:{props.value}
      </p>
    </>
  );
};

const Statistics = ({ statistics }) => {
  const calAvg = () => {
    const avgResult = (statistics[0] - statistics[2]) / statistics[3];
    return avgResult.toFixed(1);
  };

  const calPositive = () => {
    const result = (statistics[0] * 100) / statistics[3];
    if (isNaN(result)) return 0;
    return result.toFixed(2) + "%";
  };
  return (
    <>
      <StatisticLine text="good" value={statistics[0]} />
      <StatisticLine text="neutral" value={statistics[1]} />
      <StatisticLine text="bad" value={statistics[2]} />
      <StatisticLine text="all" value={statistics[3]} />
      <StatisticLine text="average" value={calAvg()} />
      <StatisticLine text="positive" value={calPositive()} />
    </>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};
const App = () => {
  // save clicks of each button to its own state
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    Array.apply(null, new Array(anecdotes.length)).map(
      Number.prototype.valueOf,
      0
    )
  );

  const handleGood = () => {
    return setGood(good + 1), setTotal(total + 1);
  };
  const handleNeutral = () => {
    return setNeutral(neutral + 1), setTotal(total + 1);
  };
  const handleBad = () => {
    return setBad(bad + 1), setTotal(total + 1);
  };

  const generateRandomAnnecdotes = () => {
    const num = anecdotes.length;
    const result = Math.floor(Math.random() * num);
    return setSelected(result);
  };

  const handleAnecdoteVotes = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const calculateHighestVote = Math.max(...votes);
  const displayAnecdoteMostVote = votes.indexOf(Math.max(...votes));

  return (
    <>
      <h1>Anecdote of the day</h1>
      <h4>{anecdotes[selected]}</h4>
      <h4>has {votes[selected]} votes</h4>
      <Button
        onClick={() => {
          generateRandomAnnecdotes();
        }}
        text="next anecdotes"
      />

      <Button
        onClick={() => {
          handleAnecdoteVotes();
        }}
        text="vote"
      />

      <h1>Anecdote with most vote</h1>
      <h4>has {anecdotes[displayAnecdoteMostVote]} votes</h4>
      <h4>{calculateHighestVote}</h4>
      <h1>give feedback</h1>

      <Button
        onClick={() => {
          handleGood();
        }}
        text="good"
      />
      <Button
        onClick={() => {
          handleNeutral();
        }}
        text="neutral"
      />
      <Button
        onClick={() => {
          handleBad();
        }}
        text="bad"
      />
      <h1>statistics</h1>
      {total === 0 ? (
        "no feedback given"
      ) : (
        <Statistics statistics={[good, neutral, bad, total]} />
      )}
    </>
  );
};

export default App;
