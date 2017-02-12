import React from 'react';
import HeaderMain from './header_main';

class App extends React.Component {

  render() {
    let style;
    let {location} = this.props;
    let pathname = location.pathname;
    if (pathname === '/signin' || pathname === '/signup') style = {backgroundColor: '#eee'};
    return(
      <div className="appyyyyy">
        {(pathname !== '/') ? <HeaderMain style={style}/> : ''}
        {this.props.children}
      </div>
    );
  }
}

export default App;