// Please create a component to display basic details
// of a given list of scores:

// Number of received scores
// First score
// Second score
// You can assume each list contains, at least, two elements.

// 💰💰 https://www.w3schools.com/js/js_arrays.asp

// **solved**
export function ScoreDetails(props) {
  return (
    <div>
      <div className="total">Total: {props.scores.length}</div>
      <div className="first">First: {props.scores[0]}</div>
      <div className="second">Second: {props.scores[1]}</div>
    </div>
  );
}
