import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Poll extends Component {

    render(){
        const { users, questions, questionId } = this.props;

        return (
            <li key={questionId}>
                <div className = 'card'>
                    <div className = ' col-12 bg-success card-title question-card-title'>
                        <img className="question-avatar col-12" alt='User-Avatar' src={users[questions[questionId].author].avatarURL} />
                        <strong className='text-light'>Asked by {users[questions[questionId].author].name}</strong>
                    </div>
                    <div className= 'card-body'>
                        <h6 className='center'>Would you rather?</h6>
                        <li className='center'>{questions[questionId].optionOne.text}...</li><br/>
                        <Link className="text-dark" to ={`/polls/${questionId}`}>
                            <button className='text-success mx-4 link-hover' style={{width:"90%",  border: "1px #1f9d6a ridge"}}>View Poll</button>
                        </Link>
                    </div>
                </div>
            </li>
        )
    }
}


function mapStateToProps (state, {questionId}) {
    return {
        authedUser: state.authedUser,
        users: state.users,
        questions: state.questions,
        questionId: questionId,
    }
}

export default connect(mapStateToProps)(Poll);