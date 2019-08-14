import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const StatsLabel = ({ name, value }) => {
  return (
    <tr>
      <td>{name}</td> <td>{value} </td>
    </tr>
  );
};

const FeedBackButton = ({ onClick, text }) => {
  return <button onClick={onClick}> {text} </button>;
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(all + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  if (all > 0) {
    return (
      <div>
        <h1> Provide Feedback</h1>
        <FeedBackButton onClick={handleGoodClick} text="Good" />
        <FeedBackButton onClick={handleBadClick} text="Bad" />
        <FeedBackButton onClick={handleNeutralClick} text="Neutral" />
        <h1> Statistics</h1>
        <table>
          <StatsLabel name="good" value={good} />
          <StatsLabel name="bad" value={bad} />
          <StatsLabel name="neutral" value={neutral} />
          <StatsLabel name="all" value={all} />
          <StatsLabel name="average" value={all / 3} />
          <StatsLabel name="positive" value={(good / all) * 100.0} />
        </table>
      </div>
    );
  }

  return (
    <div>
      <h1> Provide Feedback</h1>
      <FeedBackButton onClick={handleGoodClick} text="Good" />
      <FeedBackButton onClick={handleBadClick} text="Bad" />
      <FeedBackButton onClick={handleNeutralClick} text="Neutral" />
      <h1> No stats yet</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
