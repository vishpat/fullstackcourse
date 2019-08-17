import React from 'react';

const Form = ({ addNote, note }) => {
  return (
    <div>
      <form onSubmit={addNote}>
        <input value={note} /> <button type="submit">save</button>
      </form>
    </div>
  );
};

export default Form;
