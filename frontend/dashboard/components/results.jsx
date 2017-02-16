import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import axios from 'axios';
import * as d3 from 'd3';
import * as actions from '../actions';
import D3Wrapper from './d3_wrapper';
import Voters from './voters';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
        this.handleVote = this.handleVote.bind(this);
    }

    componentDidMount() {
        this.randomVoting();        
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

    cFL(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }    

    addRandomVoter(vote) {
        axios.get('https://randomuser.me/api/')
        .then(data => {
            let result = data.data.results[0];
            this.props.addRandomVoter({
                name: `${this.cFL(result.name.first)} ${this.cFL(result.name.last)}`,
                picture: result.picture.thumbnail,
                dob: result.dob,
                vote
            });
        });
    }

    randomVoting() {
        let count = 10;
        const st = (time, tick) => {
            setTimeout(() => {
                let vote = this.randomNumber(0, 1);
                // debugger;
                this.props.addVote(vote);
                this.addRandomVoter(vote);
                tick -= 1;
                if (tick > 0) {
                    st(this.randomNumber(300, 2000), tick);
                }
            }, time);
        };
        st(this.randomNumber(300, 2000), count);
    }

    render() {
        let { results, question, voters } = this.props;
                // <h1>{question}</h1>
        return(
            <div className="c c-results results">
                <a className="link-abs" onClick={e => this.handleBackClick(e)}>&lt;Back</a>
                <div className="graph">
                    <div className="hdg">
                        <h2 className="hdg--text">Do you approve of the new president?</h2>
                    </div> 
                    <D3Wrapper />
                    <div className="c c-small fb jcsa">
                        <button className="btn btn-small btn-yes" onClick={this.handleVote.bind(this, '0')} >Yes</button>
                        <button className="btn btn-small btn-no" onClick={this.handleVote.bind(this, '1')} >No</button>
                    </div>
                </div>
                <Voters voters={voters} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    let {question, results, voters} = state.dashboard;
    return {
        question,
        results,
        voters
    };
};

const mapDispatchToProps = dispatch => ({
    addRandomVoter: payload => dispatch(actions.addRandomVoter(payload)),
    addVote: payload => dispatch(actions.addVote(payload)),
    removeVote: payload => dispatch(actions.removeVote(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);