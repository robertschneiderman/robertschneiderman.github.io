export const addQuestion = payload => ({
    type: 'ADD_QUESTION',
    payload
});

export const addRandomVoter = payload => ({
    type: 'ADD_RANDOM_VOTER',
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