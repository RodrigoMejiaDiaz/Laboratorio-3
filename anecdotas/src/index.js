import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(
    Math.floor(Math.random() * anecdotes.length)
  );
  const [good, setGood] = useState(new Uint8Array(6));
  const [mostVoted, setMostVoted] = useState(0);

  const handleButton = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const upGood = () => {
    const copy = { ...good };
    copy[selected] += 1;
    setGood(copy);
    if (good[selected] >= good[mostVoted]) {
      setMostVoted(selected);
    }
  };

  return (
    <div>
      <h2>Anécdota del día</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>has {good[selected]} votes</p>
      <button onClick={upGood}>Good</button>
      <button onClick={handleButton}>Next anecdote</button>
      <h2>Anécnota con más votos</h2>
      {props.anecdotes[mostVoted]}
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
