import React from 'react';
import {connect} from 'react-redux'
// import { Link } from 'react-router-dom';
import handleInitialData from '../actions/shared';
import Question from './Question';

class Home extends React.Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {

        const { authedUser, users, questions} = this.props;
        const answeredQuestionsId = Object.keys(users[authedUser].answers);
        console.log("authedUser", authedUser)
        console.log("users", users)
        console.log("questions", questions)
        console.log("answeredQuestionsId", answeredQuestionsId)


        return (
            <div></div>
        )

        // if (authedUser) {
        //         if(isAnsweredQuestions){
        //             return (
        //                 <div className = 'wrapper'>
        //                     <div className = 'container'>
        //                         <div className= 'row'>{console.log('authedUser:', authedUser )}
        //                             <div className= 'QuestionTypes'>{console.log('users:', users )}
        //                                 <span className='QuestionTypeSpan'>Unanswerd Questions </span> <span>|</span><span className='QuestionTypeSpan'>Answerd Questions</span>
        //                             </div>
        //                         </div>
        //                         <div className= 'row'>
        //                             <ul className = 'questions col-12 col-md-8 col-lg-6 my-3'>
        //                                 {
        //                                    questionsId.map((questionId) => {
        //                                     if(answeredQuestionsId.includes(questionsId))
        //                                         return (
        //                                             <div>
        //                                                 <h6>{questions[questionsId].optionOne.text}</h6>
        //                                                 <p></p>
        //                                             </div>
        //                                         )
        //                                    })
        //                                 }
        //                                 {/* <Question /> */}
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 </div>
        //             )
        //         }
        // }
        // else return (
        //     <div>
        //         <h2 className="text-center text-success text-opacity-50 mb-2">ERROR: Please <Link to ='/'>select</Link>  a user to continue.</h2>
        //         <h6 className="text-center text-success text-opacity-50">Click <Link to ='/'>here</Link> to go back.</h6>
        //     </div>
        // )

    }
}

function mapStateToProps (state) {
    return {
        authedUser: state.authedUser,
        users: state.users,
        questions: state.questions,
    }
}


export default connect(mapStateToProps)(Home);