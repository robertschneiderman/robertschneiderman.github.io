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
            question: '',
            focus: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    handleClick() {
        this.props.addQuestion(this.state.question);
        hashHistory.push('/results');
    }

    handleChange(e) {
        this.setState({question: e.target.value});
    }

    onFocus(e) {
        this.setState({focused: true});
    }

    onBlur(e) {
        this.setState({focused: false});
    }    
    
    render() {     

                // <div className="hl2-wrap">
                //     <h1 className="hl2">What is your question?</h1>
                // </div>
        let {question, focused} = this.state;
        let placeholder = (question && !focused) ? '' : 'What is your Question?';
        return(
            <div className="dashboard">
				<div className="input input--hoshi">
					<input onFocus={this.onFocus} onBlur={this.onBlur} onChange={(e) => this.handleChange(e)} className="input__field input__field--hoshi" type="text" id="input-4" />
					<label className="input__label input__label--hoshi input__label--hoshi-color-1" for="input-4">
                        <span className="input__label-content input__label-content--hoshi">{placeholder}</span>
					</label>
				</div>
                <div className="c-btn">
                    <button onClick={this.handleClick} className="btn btn-primary">Post</button>
                </div>
            </div>
        );
                // <textarea className="input textarea" type="text" onChange={(e) => this.handleChange(e)}></textarea>
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