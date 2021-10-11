import React, { Component } from 'react'
import { connect } from 'react-redux';

class SelectedPoll extends Component {

    render(){

        const { authedUser, users, questions, pollId } = this.props;
        // const questionsId = Object.keys(questions);
        const answeredQuestionsId = Object.keys(users[authedUser].answers);
        // console.log("authedUser", authedUser)

        return (

            <div className = 'card'>
                <div className = ' col-12 bg-success card-title question-card-title'>
                    <img className="question-avatar col-12" alt='User-Avatar' src={users[questions[pollId].author].avatarURL} />
                    <strong className='text-light'>Asked by {users[questions[pollId].author].name}</strong>
                </div>
                <div className= 'card-body'>
                    <p className='center'>Would you rather?</p>
                    <p>{questions[pollId].optionOne.text}.</p>
                    <p>{questions[pollId].optionTwo.text}.</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state, {pollId}) {
    return {
        authedUser: state.authedUser,
        users: state.users,
        questions: state.questions,
        pollId: pollId,
    }
}

export default connect(mapStateToProps)(SelectedPoll);