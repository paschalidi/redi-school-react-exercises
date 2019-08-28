import React from 'react';
// We would like to create a React component that
// given as an property an Array of numbers,
// would return the totla amount of the score.
// The property given to this array would be `scores`

export function TotalScore(props) {
  let scores = props.scores; // this line is given by the exercise
  return <div>💰💰</div>;
}

export {TotalScore as default};
