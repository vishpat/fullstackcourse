import React from 'react';

const Course = ({ course }) => {
  const total = course.parts.reduce((total, part) => total + part.exercises, 0);
  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map(part => (
        <li key={part.id}>
          {part.name} {part.exercises}{' '}
        </li>
      ))}
      <h1> Total exercises: {total} </h1>
    </div>
  );
};
export default Course;
