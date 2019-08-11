import React from 'react';
import ReactDOM from 'react-dom';

const Header = props => {
  return (
    <div>
      <h1> {props.course.name} </h1>
    </div>
  );
};

const Part = props => {
  return (
    <div>
      <p>
        {props.name} {props.count}
      </p>
    </div>
  );
};

const Content = props => {
  return (
    <div>
      {props.course.parts.map(part => (
        <p>
          <Part name={part.name} count={part.exercises} />
        </p>
      ))}
    </div>
  );
};

const Total = props => {
  let sum = 0;
  props.course.parts.forEach(element => {
    sum += element.exercises;
  });

  return (
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
