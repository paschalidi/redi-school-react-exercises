import React from 'react';
// By popular demand, we'd like to introduce
// a new view into the platform to displaying the
// average score of a given user.

// **solved**
export function Player(props) {
  return (
    <div>
      <p className="name">Name: {props.person.name}</p>
      <p className="score">Score: {props.person.score}</p>
    </div>
  );
}

export {Player as default};
