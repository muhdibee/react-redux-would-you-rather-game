import * as actionTypes from '../actions/actionTypes'


const usersReducer = (state = {}, action) => {
    switch(action.type){
        case actionTypes.GET_USERS:
            return {
                ...state, ...action.users
            }
        default: return state;
    }
}

export default usersReducer