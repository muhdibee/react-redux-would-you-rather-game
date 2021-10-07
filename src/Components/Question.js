import React, { Component } from 'react'
import { connect } from 'react-redux';

class Question extends Component {

    render(){

        const { authedUser, users, questions, questionId, key} = this.props;
        const questionsId = Object.keys(questions);
        const answeredQuestionsId = Object.keys(users[authedUser].answers);
        console.log("authedUser", authedUser)
        console.log("users", users);
        console.log("questionsId", questionsId)
        console.log("answeredQuestionsId", answeredQuestionsId)



        return (
                
                <li key={key}>
                    <div className = 'card'>
                        <div className = ' col-12 bg-success card-title question-card-title'>
                            <img className="question-avatar col-12" alt='User-Avatar' src={users[questions[questionId].author].avatarURL} />
                            <strong className='text-light'>Asked by {users[questions[questionId].author].name}</strong>
                        </div>
                        <div className= 'card-body'>
                            <p className='center'>Would you rather?</p>
                            <p>{questions[questionId].optionOne.text}...</p>
                        </div>
                    </div>
                </li>
        )
    }
}

function mapStateToProps (state, {questionId, key}) {
    return {
        authedUser: state.authedUser,
        users: state.users,
        questions: state.questions,
        questionId: questionId,
        key: key,
    }
}

export default connect(mapStateToProps)(Question);