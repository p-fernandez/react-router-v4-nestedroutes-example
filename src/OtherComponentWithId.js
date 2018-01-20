import React from 'react';

const OtherComponent = ({ match }) => ({
  render() {
    return (
      <div className="OtherComponent">
        <h1>OtherComponentWithId {match.params.id}</h1>
      </div>
    );
  }
});

export default OtherComponent;
