import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const FeedBackLabel = ({ name, value }) => {
  return (
    <div>
      <h1>
        {name} : {value}
      </h1>
    </div>
  );
};

const StatsLabel = ({ all, good }) => {
  if (all > 0) {
    return (
      <div>
        <FeedBackLabel name="all" value={all} />
        <FeedBackLabel name="avg" value={all / 3} />
        <FeedBackLabel name="positive" value={(good / all) * 100} />
      </div>
    );
  }

  return (
    <div>
      <h1> No stats yet </h1>
    </div>
  );
};

const FeedBackButton = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}> {text} </button>
    </div>
  );
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

  return (
    <div>
      <h1> Provide Feedback</h1>
      <FeedBackLabel name="good" value={good} />
      <FeedBackLabel name="bad" value={bad} />
      <FeedBackLabel name="neutral" value={neutral} />
      <StatsLabel good={good} all={all} />
      <FeedBackButton onClick={handleGoodClick} text="Good" />
      <FeedBackButton onClick={handleBadClick} text="Bad" />
      <FeedBackButton onClick={handleNeutralClick} text="Neutral" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
