import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {Home} from './setup/Home';
import {ReactExerciseContainer} from './setup/ReactExerciseContainer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route
            path={`/react/:exerciseId`}
            exact={true}
            component={ReactExerciseContainer}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
