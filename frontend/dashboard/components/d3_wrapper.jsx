import React from 'react';
import { connect } from 'react-redux';
import { d3Chart } from './d3_chart';

// 'use strict';
class Chart extends React.Component {

  constructor(props){
    super(props);
    this.title = 'Vote Count';
    this.data = this.props.data;
    this.idx = 0;
  }

  componentDidMount(){
    let chartData = this.props.data;    
    this.chartContainer = document.querySelector('#chart-container');
    d3Chart.update(this.chartContainer, chartData, this.title);    
  }

  componentWillUnmount(){
    d3Chart.remove();
  }

  componentWillMount() {
    let chartData = this.props.data;
    d3Chart.update(this.chartContainer, chartData, this.title);      
  }

  componentWillReceiveProps(newProps){
    console.log(newProps);
    if ( !newProps.data ) { return; }
    let chartData = newProps.data;
    d3Chart.update(this.chartContainer, chartData, this.title);
  }

  render(){

    return (
      <div id='chart-container' className='chart-container'></div>
    );
  }
}

const mapStateToProps = state => {
  const results = state.dashboard.results;
  return { data: results };
};

export default connect(
  mapStateToProps,
  {}
)(Chart);
