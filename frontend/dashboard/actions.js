export const addQuestion = payload => ({
    type: 'ADD_QUESTION',
    payload
});

export const addVote = payload => ({
    type: 'ADD_VOTE',
    payload
});

export const removeVote = payload => ({
    type: 'REMOVE_VOTE',
    payload
});