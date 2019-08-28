import React from 'react';
// Please create a component to display basic details
// of a given list of scores:

// Number of received scores
// First score
// Second score
// You can assume each list contains, at least, two elements.

// 💰💰 https://www.w3schools.com/js/js_arrays.asp

export function ScoreDetails(props) {
  return (
    <div>
      <div className="total"></div>
      <div className="first"></div>
      <div className="second"></div>
    </div>
  );
}

export {ScoreDetails as default};
