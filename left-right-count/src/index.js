import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Counter = ({ left, right, data }) => {
  const data_str = data.join(' ');
  return (
    <div>
      <h1> {left} </h1>
      <h1> {right} </h1>
      <h1> {data_str} </h1>
    </div>
  );
};

const Button = ({ text, onClick }) => {
  return (
    <div>
      <button onClick={onClick}> {text} </button>
    </div>
  );
};

const App = props => {
  const [clicks, setCounter] = useState({ left: 0, right: 0, data: [] });
  const left_click = () => {
    const new_clicks = {
      ...clicks,
      left: (clicks.left += 1),
      data: clicks.data.concat('L')
    };
    setCounter(new_clicks);
  };

  const right_click = () => {
    const new_clicks = {
      ...clicks,
      right: (clicks.right += 1),
      data: clicks.data.concat('R')
    };
    setCounter(new_clicks);
  };
  return (
    <div>
      <Counter left={clicks.left} right={clicks.right} data={clicks.data} />
      <Button onClick={left_click} text="left" />
      <Button onClick={right_click} text="right" />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
