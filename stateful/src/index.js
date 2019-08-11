import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}> Inc </button>
      <button onClick={() => setCounter(0)}> reset </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
