import React from 'react';
import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';
import WelcomePage from './WelcomePage';

class LeaderBoard extends React.Component {
    render() {

        const {authedUser, users } = this.props;
        const usersId = Object.keys(users);
        const allScores = []

        usersId.map((userId) => {
            const answeredQuestions = Object.keys(users[userId].answers).length
            const createdQuestions = users[userId].questions.length
            const score =answeredQuestions+createdQuestions;
            allScores.push(score)
        });
        allScores.sort((a,b)=> b-a)


        if (authedUser) {
            return (
                <div className="">
                    <div className='card-wrapper col-10 col-md-8 col-lg-6 center'>
                        <ul>
                            {allScores.map((score) => <ScoreCard score={score} />)}
                        </ul>
                    </div>

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