import React, { useState } from "react";

const Statistics = ({ statistics }) => {
  const calAvg = () => {
    return (statistics[0] - statistics[2]) / statistics[3];
  };

  const calPositive = () => {
    const result = (statistics[0] * 100) / statistics[3];
    if (isNaN(result)) return 0;
    return result;
  };
  return (
    <>
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
      <p>all:{statistics[3]}</p>
      <p>average:{calAvg()}</p>
      <p>positive:{calPositive()}%</p>
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
  const [total, setTotal] = useState(0);

  const handleGood = () => {
    return setGood(good + 1), setTotal(total + 1);
  };
  const handleNeutral = () => {
    return setNeutral(neutral + 1), setTotal(total + 1);
  };
  const handleBad = () => {
    return setBad(bad + 1), setTotal(total + 1);
  };

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
