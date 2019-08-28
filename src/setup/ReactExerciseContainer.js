import React from 'react';
import {reactPages} from './reactPages';
import {Navigation} from './Navigation';
import {ErrorCatcher} from './ErrorCatcher';

export function ReactExerciseContainer({label, match, ...props}) {
  const {exerciseId} = match.params;
  const {
    exercise: {default: Exercise},
    renderComponentWithProps
  } = reactPages[parseInt(exerciseId - 1, 10)];

  return (
    <div>
      <Navigation exerciseId={exerciseId} />

      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h2 style={{textAlign: 'center'}}>{label}</h2>
        <div
          style={{
            flex: 1,
            padding: 20,
            border: '1px solid',
            display: 'grid',
            alignItems: 'center',
            justifyContent: 'center'
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
