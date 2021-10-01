import * as actionTypes from '../actions/actionTypes'

const authedUserReducer = (state = '', action) => {
    switch (action.type) {
        case actionTypes.GET_AUTHEDUSER:
            return action.authedUser
        default: return state;
    }
}

export default authedUserReducer