import * as actionTypes from './actionTypes'

export const selectAnswered = () => {

    return {
        type: actionTypes.SELECT_ANSWERED,
    }
}

export const selectUnanswered = () => {

    return {
        type: actionTypes.SELECT_UNANSWERED,
    }
}
