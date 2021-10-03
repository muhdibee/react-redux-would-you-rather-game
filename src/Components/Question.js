import React, { Component } from 'react'
import { connect } from 'react-redux';

class Question extends Component {

    render(){

        const { authedUser, users, questions, questionId, type} = this.props;
        const questionsId = Object.keys(questions);
        const answeredQuestionsId = Object.keys(users[authedUser].answers);
        console.log("authedUser", authedUser)
        console.log("users", users);
        console.log("questionsId", questionsId)
        console.log("answeredQuestionsId", answeredQuestionsId)



        return (
                <div>
                    <h6>{questions[questionId].optionOne.text}</h6>
                 </div>
            // <div className = 'wrapper'>
            //     <ul>
            //         {
            //             questionsId.map((questionid) => {
            //                 if (true){
            //                     <li>
            //                         <div className = 'card'>
            //                             <div className = ' col-12 bg-light card-title center'>
            //                                 {/* <img className="question-avatar col-12" alt='User-Avatar' src={'https://media.istockphoto.com/photos/businesswoman-portrait-on-white-picture-id615279718?k=20&m=615279718&s=612x612&w=0&h=D0gAjhLC0XgxWyi19zRC4HXSl2g81bytiIwezQn9ZgQ='} /> */}
            //                                 <strong className='text-light'>Asked by {questions[questionsId].author}</strong>
            //                             </div>
            //                             <div className= 'card-body'>
            //                                 <p className='center'>Would you rather?</p>
            //                                 <p>{questions[questionsId].optionOne.text}...</p>
            //                             </div>
            //                         </div>
            //                     </li>

            //                 }
            //                 else {<div>none</div>}
            //             })
            //         }
            //     </ul>
            // </div>
        )
    }
}

function mapStateToProps (state, {questionId, type}) {
    return {
        authedUser: state.authedUser,
        users: state.users,
        questions: state.questions,
        questionId: questionId,
        type: type,
    }
}

export default connect(mapStateToProps)(Question);