import React from 'react';

export class ErrorCatcher extends React.Component {
  static getDerivedStateFromProps() {
    // if the props change then let's try rendering again...
    return {error: null};
  }
  state = {error: null};
  componentDidCatch(error, info) {
    console.log(error, info);
    this.setState({error});
  }
  render() {
    const {error} = this.state;
    const {children, ...props} = this.props;
    return (
      <div {...props}>
        {error ? 'There was an error. Edit the code and try again.' : children}
      </div>
    );
  }
}
