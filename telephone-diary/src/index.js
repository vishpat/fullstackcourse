import ReactDOM from 'react-dom';
import './index.css';
import React, { useState } from 'react';
import uuid from 'uuid';

const App = () => {
  const [note, setNote] = useState({ id: '', name: '' });
  const [notes, setNotes] = useState([{ id: '', name: '' }]);

  const addNote = event => {
    event.preventDefault();
    const newNodes = notes.concat(note);
    setNotes(newNodes);
    setNote({ id: '', name: '' });
  };

  const handleNoteChange = event => {
    const noteID = uuid.v4();
    const note = { id: noteID, name: event.target.value };
    setNote(note);
  };

  return (
    <div>
      <form onSubmit={addNote}>
        <input value={note.name} onChange={handleNoteChange} /> <button type="submit">save</button>
      </form>

      {notes.map(note => (
        <li key={note.id}>
          {note.name} {note.id}
        </li>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
