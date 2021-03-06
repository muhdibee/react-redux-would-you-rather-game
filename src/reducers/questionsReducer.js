import * as actionTypes from '../actions/actionTypes'


const questionsReducer = (state = {}, action) => {
    switch(action.type){
        case actionTypes.GET_QUESTIONS:
            return {
                ...state, ...action.questions
            }
        case actionTypes.SAVE_QUESTION:
            return {
                ...state, [action.question.id]: action.question
            }
        case actionTypes.SAVE_QUESTION_ANSWER:
            return {
                ...state, [action.payload.qid]: {
                    ...state[action.payload.qid], [action.payload.answer]: {
                        ...state[action.payload.qid][action.payload.answer], votes: state[action.payload.qid][action.payload.answer].votes.concat([action.payload.authedUser])
                    }
                }
            }

        default: return state;
    }
}

export default questionsReducer;
