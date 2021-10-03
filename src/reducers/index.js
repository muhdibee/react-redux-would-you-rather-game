import { combineReducers }   from 'redux';
import authedUserReducer from './authedUserReducer';
import questionsReducer from './questionReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    authedUser: authedUserReducer,
    users: usersReducer,
    questions: questionsReducer
})

export default rootReducer