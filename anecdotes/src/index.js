import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const AnecdoteButton = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}> {text} </button>
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

const App = props => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);
  const [maxVoteIndex, setMaxVoteIndex] = useState(0);

  const handleVote = () => {
    const new_votes = [...votes];
    new_votes[selected] += 1;
    setVotes(new_votes);

    const current_max_votes = votes[maxVoteIndex];
    if (votes[selected] > current_max_votes) {
      console.log('Updating maxVoteIndex to', selected);
      setMaxVoteIndex(selected);
    }
  };

  const handleAnecdoteButtonClick = () => {
    const anecdote_count = anecdotes.length;
    const selected = Math.floor(Math.random() * anecdote_count);
    setSelected(selected);
  };

  return (
    <div>
      <AnecdoteButton onClick={handleAnecdoteButtonClick} text="next Anecdote" />
      <AnecdoteButton onClick={handleVote} text="Vote !!!" />

      <h1> votes : {votes[selected]} </h1>
      <h1> {anecdotes[selected]}</h1>
      <h1> Most popular anecdote </h1>
      <h1> {anecdotes[maxVoteIndex]} </h1>
    </div>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
