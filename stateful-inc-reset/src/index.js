import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Counter = ({ counter }) => {
  return <div>{counter} </div>;
};

const Button = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}> {text} </button>
    </div>
  );
};

const App = props => {
  const [counter, setCounter] = useState(0);

  const setValue = value => {
    return () => setCounter(value);
  };

  return (
    <div>
      <Counter counter={counter} />
      <Button onClick={setValue(counter + 1)} text="Inc" />
      <Button onClick={setValue(0)} text="reset" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
