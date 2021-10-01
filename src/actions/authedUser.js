import * as actionTypes from './actionTypes'

 const getAuthedUser = (authedUser) => {

    return {
        type: actionTypes.GET_AUTHEDUSER,
        authedUser: authedUser,
    }
}

export default getAuthedUser;