import * as api from '../util/_DATA'
import getQuestions from './questions'

const handleInitialData = () => {
    return (dispatch, getState) => {
        return(
            api._getQuestions()
            .then((questions) => dispatch(getQuestions(questions)))
        )
    }
}

export default handleInitialData;