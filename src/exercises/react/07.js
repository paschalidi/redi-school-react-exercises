import React from 'react';
// We want to create a React component
// that will show the first name and the last name of a user.
// The properties that this component takes when its
// being user will be `firstName` and `lastName`.

export function DisplayFirstAndLastName(props) {
  return (
    <div>
      <div className="firstName"></div>
      <div className="lastName"></div>
    </div>
  );
}

export {DisplayFirstAndLastName as default};
