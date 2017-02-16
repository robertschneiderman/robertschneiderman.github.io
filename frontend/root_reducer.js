import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import dashboard from './dashboard/reducer';

const appReducer = combineReducers({
  dashboard
});

const rootReducer = (state, action) => {
  if (action.type === 'SIGNOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;