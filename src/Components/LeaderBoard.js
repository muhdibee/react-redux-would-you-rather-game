import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import WelcomePage from './WelcomePage';

class LeaderBoard extends React.Component {
    render() {

        const { authedUser, users, questions, isAnswered, dispatch} = this.props;


        if (authedUser) {
            return <div>LeaderBoard Page</div>
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

export default connect(mapStateToProps)(LeaderBoard);