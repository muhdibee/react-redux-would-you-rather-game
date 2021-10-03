import React, { Component } from 'react'
import { connect } from 'react-redux';

class Question extends Component {

    render(){

        const { authedUser, users, questions } = this.props;
        const questionsId = Object.keys(questions);
        console.log("authedUser:", authedUser)
        const answeredQuestionsId = Object.keys(users[authedUser].answers);
        console.log( "answeredQuestionsId:", answeredQuestionsId )
        // const answeredQuestions = Object.entries( users[authedUser].answers )



        return (
                <div>
                    {/* {
                        questionsId.map((questionsId) => {
                            if(answeredQuestionsId.includes(questionsId))
                            return (
                                <div>
                                    <h6>{questions[questionsId].optionOne.text}</h6>
                                    <p></p>
                                 </div>
                            )
                        })
                    }
 */}
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

function mapStateToProps (state) {
    return {
        authedUser: state.authedUser,
        users: state.users,
        questions: state.questions,
    }
}

export default connect(mapStateToProps)(Question);