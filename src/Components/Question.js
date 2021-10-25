import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Question extends Component {

    render(){

        const { users, questions, questionId: Id} = this.props;

        return (
            <div className = 'card'>
                <div className = ' col-12 bg-success card-title question-card-title'>
                    <img className="question-avatar col-12" alt='User-Avatar' src={users[questions[Id].author].avatarURL} />
                    <h6 style={{display:"inline"}} className='text-light'>Asked by {users[questions[Id].author].name}</h6>
                </div>
                <div className= 'card-body'>
                    <h6 className='center'>Would you rather?</h6>
                    <ul><li className='center'>{questions[Id].optionOne.text}...</li></ul><br/>
                    <Link className="text-dark" to ={`/questions/${Id}`}>
                        <button className='text-success mx-4 link-hover' style={{width:"90%",  border: "1px #1f9d6a ridge"}}>View Question</button>
                    </Link>
                </div>
            </div>
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

export default connect(mapStateToProps)(Question);