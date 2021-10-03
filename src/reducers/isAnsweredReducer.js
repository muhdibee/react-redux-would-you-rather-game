import * as actionTypes from '../actions/actionTypes'


const isAnsweredReducer = (state = false, action) => {
    switch(action.type){
        case actionTypes.SELECT_UNANSWERED:
            return false;
        case actionTypes.SELECT_ANSWERED:
            return true
        default: return state;
    }
}

export default isAnsweredReducer;