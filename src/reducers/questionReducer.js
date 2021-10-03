import * as actionTypes from '../actions/actionTypes'


const questionsReducer = (state = {}, action) => {
    switch(action.type){
        case actionTypes.GET_QUESTIONS:
            return {
                ...state, ...action.questions
            }
        default: return state;
    }
}

export default questionsReducer;