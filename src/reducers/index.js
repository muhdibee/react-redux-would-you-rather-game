import { combineReducers }   from 'redux';
import authedUserReducer from './authedUserReducer';
import QuestionsReducer from './QuestionsReducer';

const rootReducer = combineReducers({
    authedUser: authedUserReducer, questions: QuestionsReducer
})

export default rootReducer