import React from 'react';

var Expire = React.createClass({
  getDefaultProps: function() {
    return {delay: 1000};
  },
  getInitialState: function(){
    return {visible: true};
  },
  componentWillReceiveProps: function(nextProps) {
    // reset the timer if children are changed
    if (nextProps.children !== this.props.children) {
      this.setTimer();
      this.setState({visible: true});
    }
  },
  componentDidMount: function() {
      this.setTimer();
  },
  setTimer: function() {
    // clear any existing timer
    this._timer != null ? clearTimeout(this._timer) : null;

    // hide after `delay` milliseconds
    this._timer = setTimeout(function(){
      this.setState({visible: false});
      this._timer = null;
    }.bind(this), this.props.delay);
  },
  componentWillUnmount: function() {
    clearTimeout(this._timer);
  },
  render: function() {
    return this.state.visible 
           ? <div>{this.props.children}</div>
           : <span />;
  }
});

export default Expire;