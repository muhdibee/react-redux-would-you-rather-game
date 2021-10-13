import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { selectUnanswered, selectAnswered } from '../actions/isAnswered';
import Question from './Question';
import WelcomePage from './WelcomePage';

class Home extends React.Component {

    render() {

        const { authedUser, users, questions, isAnswered, dispatch} = this.props;

        if (authedUser) {
            const questionsId = Object.keys(questions);
            const answeredQuestionsId = Object.keys(users[authedUser].answers);
            console.log("authedUser", authedUser)
            console.log("users", users);
            console.log("questionsId", questionsId)
            console.log("answeredQuestionsId", answeredQuestionsId)

                    return (
                        <div className = 'wrapper'>
                            <div className = 'container'>
                                <div className= 'row'>
                                    <div className= 'QuestionTypes'>
                                        <span className='QuestionTypeSpan' onClick={()=> dispatch(selectUnanswered())}>Unanswered Questions </span>
                                        <span>|</span>
                                        <span className='QuestionTypeSpan' onClick={()=> dispatch(selectAnswered())}>Answered Questions</span>
                                    </div>
                                </div>
                                <div className= 'row'>
                                    <ul className = 'questions col-12 col-md-8 col-lg-6 my-3'>
                                        {
                                            isAnswered
                                            ? ( <div>
                                                    <h4 className="text-center text-success"><i>ANSWERED QUESTIONS</i></h4>
                                                    {
                                                        questionsId.map((questionId) => {
                                                            if(answeredQuestionsId.includes(questionId)){
                                                                return(
                                                                    <Link className="text-dark logo link-hover " to ={`/questions/${questionId}`}>
                                                                        <Question className="question" keyId={questionId} questionId = {questionId} />
                                                                    </Link>
                                                                )
                                                            }else {
                                                                return null
                                                            }


                                                        })
                                                    }
                                                </div>
                                            )
                                            :(
                                                <div>
                                                    <h4 className="text-center text-success"><i>UNANSWERED QUESTIONS</i></h4>
                                                    {
                                                        questionsId.map((questionId) => {
                                                            if(answeredQuestionsId.includes(questionId)) return null
                                                            else return (
                                                                <Link className="text-dark logo link-hover " to ={`/questions/${questionId}`}>
                                                                    <Question className="question" keyId={questionId} questionId = {questionId} />
                                                                </Link>
                                                            )
                                                            })
                                                    }
                                                </div>
                                            )
                                        }
                                    </ul>
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
    return {
        authedUser: state.authedUser,
        users: state.users,
        questions: state.questions,
        isAnswered: state.isAnswered,
    }
}

export default connect(mapStateToProps)(Home);