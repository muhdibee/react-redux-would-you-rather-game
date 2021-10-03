import * as api from '../util/_DATA'
import getQuestions from './questions'
import getUsers from './users'

const handleInitialData = () => {
    return (dispatch, getState) => {
        return api.getInitialData()
               .then(({users, questions}) => {
                    dispatch(getUsers(users));
                    dispatch(getQuestions(questions))
            })
    }
}

export default handleInitialData;