import * as actionTypes from './actionTypes'

const getQuestions = (questions) => {

    return {
        type: actionTypes.GET_QUESTIONS,
        questions: questions
    }
}

export default getQuestions;