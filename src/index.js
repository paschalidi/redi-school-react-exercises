import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";

import "./styles.css";
const files = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];

const pages = files.reduce((p, filename, index, fullArray) => {
  const exercise = require(`./exercises/${filename}`);
  Object.assign(exercise, {
    previous: fullArray[index - 1],
    next: fullArray[index + 1],
    isolatedPath: `/isolated/exercises/${filename}`
  });
  p[filename] = {
    exercise,
    title: filename,
    filename
  };
  return p;
}, {});

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
  let suffix = "";
  let Usage = current.exercise;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gridColumn: "span"
      }}
    >
      <div style={{ flex: 1 }}>
        {Usage.previous ? (
          <Link to={`/${Usage.previous}${suffix}`}>
            {pages[Usage.previous].title}{" "}
            <span role="img" aria-label="previous">
              👈
            </span>
          </Link>
        ) : null}
      </div>
      <div style={{ flex: 1, textAlign: "center" }}>
        <Link to="/">Home</Link>
      </div>
      <div style={{ flex: 1, textAlign: "center" }}>
        {Usage.next ? (
          <Link to={`/${Usage.next}${suffix}`}>
            <span role="img" aria-label="next">
              👉
            </span>{" "}
            {pages[Usage.next].title}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

function ComponentContainer({ label, match, ...props }) {
  const { exerciseId } = match.params;
  const {
    exercise: { default: Exercise }
  } = pages[exerciseId];

  console.log(Exercise);
  return (
    <div>
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
            <Exercise />
          </ErrorCatcher>
        </div>
      </div>
      <NavigationFooter exerciseId={exerciseId} type="page" />
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
              <Link to={`/${filename}`}>Look into the details 🦄</Link>
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
