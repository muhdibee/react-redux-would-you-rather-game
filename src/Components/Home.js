import React from 'react';
import {connect} from 'react-redux'
import { selectUnanswered, selectAnswered } from '../actions/isAnswered';
import Poll from './Poll';
import Question from './Question';
import WelcomePage from './WelcomePage';

const FilterQuestion = ({dispatch}) => {
    return (
        <div className="container">
            <div className= 'row'>
                <div className= 'QuestionTypes'>
                    <span className='QuestionTypeSpan' onClick={()=> dispatch(selectUnanswered())}>Unanswered Questions </span>
                    <span>|</span>
                    <span className='QuestionTypeSpan' onClick={()=> dispatch(selectAnswered())}>Answered Questions</span>
                </div>
            </div>
        </div>
    )
}

class Home extends React.Component {

    render() {

        const { authedUser, users, questionsId, isAnswered, dispatch} = this.props;

        if (authedUser) {
            const answeredQuestionsId = Object.keys(users[authedUser].answers);

                return (
                    <div>
                        <FilterQuestion dispatch={dispatch} />
                        <div className= 'row'>
                            <div className = 'questions col-12 col-md-8 col-lg-6 my-3'>
                                {
                                    isAnswered
                                    ? ( <div>
                                            <h4 className="text-center text-success"><i>ANSWERED QUESTIONS</i></h4>
                                            <ul>
                                                {
                                                    questionsId.map((questionId) => {

                                                        if(answeredQuestionsId.includes(questionId)){
                                                            return(
                                                                <li key ={questionId}>
                                                                    <Poll className="question" questionId = {questionId} />
                                                                </li>
                                                            )
                                                        }else return null
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    )
                                    :(
                                        <div>
                                            <h4 className="text-center text-success"><i>UNANSWERED QUESTIONS</i></h4>
                                            <ul>
                                                {
                                                    questionsId.map((questionId) => {

                                                        if(answeredQuestionsId.includes(questionId)) return null
                                                        else return (
                                                            <li key={questionId}>
                                                                <Question className="question" questionId = {questionId} />
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
        }
        else return(
            <div className='center'>
                <h5 className="text-center text-success text-opacity-50">Please login to continue.</h5><br/>
                <WelcomePage />
            </div>
        )
    }
}

function mapStateToProps (state) {
    const questions = state.questions;
    return {
        authedUser: state.authedUser,
        users: state.users,
        questions: questions,
        questionsId: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        isAnswered: state.isAnswered,
    }
}

export default connect(mapStateToProps)(Home);