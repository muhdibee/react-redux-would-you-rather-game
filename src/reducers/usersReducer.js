import * as actionTypes from '../actions/actionTypes'


const usersReducer = (state = {}, action) => {
    switch(action.type){
        case actionTypes.GET_USERS:
            return {
                ...state, ...action.users
            }

        case actionTypes.SAVE_QUESTION_ANSWER:
            // return {
            //     ...state,
            // }
            return {
                ...state, [action.payload[action.payload.authedUser]]: {
                    ...state[action.payload[action.payload.authedUser]], answers: {
                        ...state[action.payload.authedUser].answers, [action.payload.qid]: action.payload.answer
                    }
                }
            }
        default: return state;
    }
}

export default usersReducer