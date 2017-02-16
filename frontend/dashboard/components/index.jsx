import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
// import d3Wrapper from './d3_wrapper';
import {Bar} from 'react-chartjs';
import * as actions from '../actions';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.addQuestion(this.state.question);
        hashHistory.push('/results');
    }

    handleChange(e) {
        this.setState({question: e.target.value});
    }
    
    render() {     

        return(
            <div className="dashboard">
                <div className="hl2-wrap">
                    <h1 className="hl2">What is your question?</h1>
                </div>
                <textarea className="input textarea" type="text" onChange={(e) => this.handleChange(e)}></textarea>
                <button onClick={this.handleClick} className="btn btn-primary">Post</button>
            </div>
        );
                // <Bar data={data} width="600" height="250" />
    }
}

const mapStateToProps = state => {
  let {results, question} = state.dashboard;
  return { results, question };
};

const mapDispatchToProps = dispatch => ({
    addQuestion: payload => dispatch(actions.addQuestion(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);