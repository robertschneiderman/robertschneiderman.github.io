import React from 'react';
import Navbar from './navbar';

class App extends React.Component {

  render() {
    let style = (this.props.location.pathname === '/') ? {backgroundColor: '#6CB2DD'} : {backgroundColor: '#fbfbfc'};
    return(
      <div className="app" style={style}>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default App;