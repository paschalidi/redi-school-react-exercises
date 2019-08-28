import React from 'react';
// We would like to create a React component that
// given as an property an Array of numbers,
// would return the totla amount of the score.
// The property given to this array would be `scores`

// **solved**
export function TotalScore(props) {
  let scores = props.scores; // this line is given by the excersise
  const total = scores.reduce((a, b) => a + b, 0);
  return <div>The total score is: {total}</div>;
}

export {TotalScore as default};
