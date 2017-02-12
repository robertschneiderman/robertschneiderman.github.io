import React from 'react';
import Header from './header';

class App extends React.Component {

  render() {
    return(
      <div className="appyyyyy">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;