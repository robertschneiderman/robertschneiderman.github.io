import React, { Component } from 'react';

class Signout extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return(
      <div className="c-hl">
        <h1 className="hl">Sorry to see you go...</h1>
      </div>
    );
  }
}

export default Signout;