import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class LeaderBoard extends React.Component {
    render() {

        const { authedUser, users, questions, isAnswered, dispatch} = this.props;


        if (authedUser) {
            return <div>LeaderBoard Page</div>
        }
        else return <h6 className="text-center text-success text-opacity-50">Please Select a User to login. Click <Link to ='/'>here</Link> to login.</h6>
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