import * as actionTypes from './actionTypes'

export const getAuthedUser = (authedUser) => {

    return {
        type: actionTypes.GET_AUTHEDUSER,
        authedUser: authedUser,
    }
}

export const removeAuthedUser = (authedUser) => {

    return {
        type: actionTypes.REMOVE_AUTHEDUSER,
    }
}