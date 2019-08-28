import React from 'react';
import {reactPages} from './reactPages';
import {Link} from 'react-router-dom';

export function Navigation({exerciseId}) {
  const current = reactPages[parseInt(exerciseId - 1, 10)];

  const {previous, next} = current.exercise;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gridColumn: 'span'
      }}
    >
      <div style={{flex: 1}}>
        {previous ? (
          <Link to={`/react/${previous.filename}`}>
            {previous.filename}{' '}
            <span role="img" aria-label="previous">
              👈
            </span>
          </Link>
        ) : null}
      </div>
      <div style={{flex: 1, textAlign: 'center'}}>
        <Link to="/">
          Home{' '}
          <span role="img" aria-label="home">
            🏡
          </span>{' '}
        </Link>
      </div>
      <div style={{flex: 1, textAlign: 'center'}}>
        {next ? (
          <Link to={`/react/${next.filename}`}>
            <span role="img" aria-label="next">
              👉
            </span>{' '}
            {next.filename}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
