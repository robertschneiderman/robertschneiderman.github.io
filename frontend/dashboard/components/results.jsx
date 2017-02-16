import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import axios from 'axios';
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
    
    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomVoter() {
        // $.ajax({
        //     url: 'https://randomuser.me/api/',
        //     dataType: 'json',
        //     success: function(data) {
        //         console.log(data);
        //     }
        // });        

        axios.get('https://randomuser.me/api/')
        .success(data => {
            console.log(data);
        });
    }

    randomVoting() {
        let count = 10;
        const st = (time, tick) => {
            setTimeout(() => {
                let vote = this.randomNumber(0, 1);
                this.props.addVote();
                this.props.addVoter(this.randomNumber(0, 1));
                --tick;
                debugger;
                if (tick > 0) {
                    st(this.randomNumber(2000, 5000), tick);
                }
            }, time);
        };
        st(this.randomNumber(2000, 5000), count);
    }

    render() {
        let { results, question } = this.props;
                // <h1>{question}</h1>
        this.randomVoting();
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