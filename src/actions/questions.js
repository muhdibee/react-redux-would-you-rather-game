import { _saveQuestion, _saveQuestionAnswer } from '../util/_DATA'
import * as actionTypes from './actionTypes'

export const getQuestions = (questions) => {

    return {
        type: actionTypes.GET_QUESTIONS,
        questions: questions
    }
}

export const saveQuestion = (question) => {
    return {
        type: actionTypes.SAVE_QUESTION,
        question: question
    }
}

export const saveQuestionFunc = (question) => {
    return (dispatch) => {
        return _saveQuestion(question)
        .then((question) => dispatch(saveQuestion(question)))
    }
}

export const saveQuestionAnswer = () => {
    return {
        type: actionTypes.SAVE_QUESTION_ANSWER,
    }
}

export const handleSaveQuestionAnswer = (submitValue) => {
    return (dispatch) => {
        return _saveQuestionAnswer(submitValue)
        .then(() => dispatch(saveQuestionAnswer()))
    }
}