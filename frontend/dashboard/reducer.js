import React, {Component} from 'react';
import merge from 'lodash/merge';
import {router, hashHistory} from 'react-router';

let defaultState = {
    question: null,
    results: [2, 0],
    voters: []
};

const dashboardReducer = (state = defaultState, action) => {
    let newState = merge({}, state);
    switch (action.type) {
        case 'ADD_QUESTION':
            newState.question = action.payload;
            return newState;
        case 'ADD_VOTE':
            newState.results[parseInt(action.payload)] += 1;
            return newState;
        case 'REMOVE_VOTE':
            newState.results[parseInt(action.payload)] -= 1;
            return newState;                        
        case 'ADD_RANDOM_VOTER':
            newState.voters.push(action.payload);
            return newState;            
        default:
            return state;
    }
};

export default dashboardReducer;