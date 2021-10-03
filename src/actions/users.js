import * as actionTypes from './actionTypes'

const getUsers = (users) => {

    return {
        type: actionTypes.GET_USERS,
        users: users,
    }
}

export default getUsers;