import ReactDOM from 'react-dom';
import './index.css';
import React, { useState } from 'react';

const App = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = event => {
    event.preventDefault();
    const newNodes = notes.concat(note);
    setNotes(newNodes);
    setNote('');
  };

  const handleNoteChange = event => {
    setNote(event.target.value);
  };

  return (
    <div>
      <form onSubmit={addNote}>
        <input value={note} onChange={handleNoteChange} /> <button type="submit">save</button>
      </form>

      {notes.map(note => (
        <li key={notes.indexOf(note)}> {note}</li>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
