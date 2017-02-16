import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import * as d3 from 'd3';
import * as actions from '../actions';
import D3Wrapper from './d3_wrapper';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
        this.handleVote = this.handleVote.bind(this);
    }

    handleBackClick() {
        hashHistory.push('dashboard');
    }

    handleVote(vote) {
        if (this.state.selected !== vote) {
            if (this.state.selected) this.props.removeVote(this.state.selected);
            this.setState({selected: vote});
            this.props.addVote(vote);
        }
    }

    render() {
        let { results, question } = this.props;
                // <h1>{question}</h1>
        return(
            <div className="results">
                <a onClick={e => this.handleBackClick(e)}>Back</a>
                <div className="hdg">
                    <h2 className="hdg--text">Do you approve of the new president?</h2>
                </div> 
                <D3Wrapper />
                <div className="c c-small fb jcsa">
                    <button className="btn btn-small" onClick={this.handleVote.bind(this, '0')} >Yes</button>
                    <button className="btn btn-small" onClick={this.handleVote.bind(this, '1')} >No</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    let {question, results} = state.dashboard;
    return {
        question,
        results
    };
};

const mapDispatchToProps = dispatch => ({
    addVote: payload => dispatch(actions.addVote(payload)),
    removeVote: payload => dispatch(actions.removeVote(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);