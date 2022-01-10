import React, { useState } from "react";

const Statistics = ({ statistics }) => {
  return (
    <>
      <h1>statistics</h1>
      <p>
        good:
        {statistics[0]}
      </p>
      <p>
        neutral:
        {statistics[1]}
      </p>
      <p>
        bad:
        {statistics[2]}
      </p>
    </>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <>
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

      <Statistics statistics={[good, neutral, bad]} />
    </>
  );
};

export default App;
