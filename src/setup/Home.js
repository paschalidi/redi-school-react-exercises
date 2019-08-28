import React from 'react';
import {reactPages} from './reactPages';
import {Link} from 'react-router-dom';

export function Home() {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>React Components Training 1</h1>
      <div>
        {reactPages.map(({filename}) => {
          return (
            <div key={filename} style={{margin: 10}}>
              <Link to={`/react/${filename}`}>Training {filename}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
