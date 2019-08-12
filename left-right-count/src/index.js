import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Counter = ({ left, right }) => {
  return (
    <div>
      <h1> {left} </h1>
      <h1> {right} </h1>
    </div>
  );
};

const Button = ({ text, onClick }) => {
  return (
    <div>
      <Button onClick={onClick}> {text} </Button>
    </div>
  );
};

const App = props => {
  const [clicks, setCounter] = useState({ left: 0, right: 0 });
  const left_click = () => {
    return () => {
      const new_clicks = {
        ...clicks,
        left: (clicks.left += 1)
      };
      setCounter(new_clicks);
    };
  };

  const right_click = () => {
    return () => {
      const new_clicks = {
        ...clicks,
        right: (clicks.right += 1)
      };
      setCounter(new_clicks);
    };
  };
  return (
    <div>
      <Counter left={clicks.left} right={clicks.right} />
      <Button onClick={('<=', left_click)}> left </Button>
      <Button onClick={('=>', right_click)}> right </Button>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
