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
