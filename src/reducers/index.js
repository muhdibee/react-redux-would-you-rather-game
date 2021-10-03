import { combineReducers }   from 'redux';
import authedUserReducer from './authedUserReducer';
import isAnsweredReducer from './isAnsweredReducer';
import questionsReducer from './questionsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    authedUser: authedUserReducer,
    users: usersReducer,
    questions: questionsReducer,
    isAnswered: isAnsweredReducer,
})

export default rootReducer