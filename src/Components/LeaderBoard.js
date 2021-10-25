import React from 'react';
import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';
import WelcomePage from './WelcomePage';

class LeaderBoard extends React.Component {
    render() {

        const {authedUser, users } = this.props;
        const usersId = Object.keys(users).sort((a,b) => ((users[b].questions+Object.keys(users[b].answers).length) - (users[b].questions+Object.keys(users[b].answers).length)))

        if (authedUser) {

            return (
                <div className='card-wrapper col-10 col-md-8 col-lg-6 center'>
                    <ul>
                        {
                            usersId.map((userId) => {
                                const nOfAnswers = Object.keys(users[userId].answers).length;
                                const nOfQuestions = users[userId].questions.length;
                                const score = nOfAnswers+nOfQuestions;
                                return (
                                    <li key={userId}>
                                        <ScoreCard userId= {userId} nOfAnswers= {nOfAnswers} nOfQuestions= {nOfQuestions} score={score}/>
                                    </li>
                                )
                            })
                        }
                    </ul>
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
        users: state.users
    }
}

export default connect(mapStateToProps)(LeaderBoard);