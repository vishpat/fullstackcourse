import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  const [counter, setCounter] = useState(0);
  const setValue = value => {
    return () => setCounter(value);
  };

  return (
    <div>
      {counter}
      <button onClick={setValue(counter + 1)}> Inc </button>
      <button onClick={setValue(0)}> reset </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
