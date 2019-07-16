import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";

import "./styles.css";
const files = [
  { filename: "01" },
  { filename: "02" },
  { filename: "03" },
  { filename: "04" },
  { filename: "05" },
  { filename: "06" },
  { filename: "07", props: { firstName: "Anna", lastName: "Pavlikova" } },
  {
    filename: "08",
    props: { person: { name: "A react wizz", score: 100 } }
  },
  { filename: "09", props: { scores: [10, 20] } },
  { filename: "10", props: { scores: [10, 20] } }
];

const pages = files.reduce(
  (p, { filename, props }, index, fullArray) => {
    const exercise = require(`./exercises/${filename}`);
    console.log(filename);
    Object.assign(exercise, {
      previous: fullArray[index - 1],
      next: fullArray[index + 1]
    });
    p[filename] = {
      exercise,
      filename,
      renderComponentWithProps: props
    };
    return p;
  },
  {}
);

console.log(pages);

class ErrorCatcher extends React.Component {
  static getDerivedStateFromProps() {
    // if the props change then let's try rendering again...
    return { error: null };
  }
  state = { error: null };
  componentDidCatch(error, info) {
    console.log(error, info);
    this.setState({ error });
  }
  render() {
    const { error } = this.state;
    const { children, ...props } = this.props;
    return (
      <div {...props}>
        {error ? "There was an error. Edit the code and try again." : children}
      </div>
    );
  }
}

function NavigationFooter({ exerciseId, type }) {
  const current = pages[exerciseId];
  const { previous, next } = current.exercise;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gridColumn: "span"
      }}
    >
      <div style={{ flex: 1 }}>
        {previous ? (
          <Link to={`/${previous.filename}`}>
            {previous.filename}{" "}
            <span role="img" aria-label="previous">
              👈
            </span>
          </Link>
        ) : null}
      </div>
      <div style={{ flex: 1, textAlign: "center" }}>
        <Link to="/">
          Home{" "}
          <span role="img" aria-label="home">
            🏡
          </span>{" "}
        </Link>
      </div>
      <div style={{ flex: 1, textAlign: "center" }}>
        {next ? (
          <Link to={`/${next.filename}`}>
            <span role="img" aria-label="next">
              👉
            </span>{" "}
            {next.filename}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

function ComponentContainer({ label, match, ...props }) {
  const { exerciseId } = match.params;
  const {
    exercise: { default: Exercise },
    renderComponentWithProps
  } = pages[exerciseId];

  console.log(Exercise);
  return (
    <div>
      <NavigationFooter exerciseId={exerciseId} type="page" />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2 style={{ textAlign: "center" }}>{label}</h2>
        <div
          style={{
            flex: 1,
            padding: 20,
            border: "1px solid",
            display: "grid",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ErrorCatcher {...props}>
            <Exercise {...renderComponentWithProps} />
          </ErrorCatcher>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React Component Patterns</h1>
      <div>
        {Object.values(pages).map(({ filename }) => {
          return (
            <div key={filename} style={{ margin: 10 }}>
              {filename}. {}
              <Link to={`/${filename}`}>
                Look into the details{" "}
                <span role="img" aria-label="uni">
                  🦄
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route
            path={`/:exerciseId`}
            exact={true}
            component={ComponentContainer}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
