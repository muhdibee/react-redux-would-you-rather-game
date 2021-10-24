import React from 'react';
import { connect } from 'react-redux';

class ScoreCard extends React.Component {

    render() {

        const {users, userId, nOfAnswers, nOfQuestions, score} = this.props;

        return (
            <div className = 'card shadow-lg '>
                <div className = ' col-12 bg-success card-title question-card-title '>
                    <img className="question-avatar col-12" alt='User-Avatar' src={users[userId].avatarURL} />
                    <h5 style={{display:"inline"}} className='text-light'>{users[userId].name}</h5>
                </div>
                <div className= 'card-body'>
                    <div className="row shadow-lg">
                        <div className="col-8 col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className= "dblock text-left justify-content-between">
                                        <h6 className="dinline col-8">Answered questions:</h6> <h6 className="dinline col">{nOfAnswers}</h6>
                                    </div>
                                    <hr style={{border: "1px ridge"}}/>
                                    <div className= "dblock text-left justify-content-between">
                                        <h6 className="dinline col-8">Created questions:</h6>&nbsp;&nbsp;&nbsp;&nbsp; <h6 className="dinline col mr-auto">{nOfQuestions}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-lg-3">
                            <div className="card">
                                <h6 className="card-title text-white" style={{backgroundColor: "#1f9d6a"}}>Score</h6>
                                <div className="card-body">
                                    <div className=" col-6 center py-1 my-2 text-success" style={{border: "1px #1f9d6a ridge", borderRadius: "50%", backgroundColor: "", fontWeight:"bold" }}>{score}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state, { userId, nOfAnswers, nOfQuestions, score }) {
    return {
        users:state.users,
        userId: userId,
        nOfAnswers: nOfAnswers,
        nOfQuestions: nOfQuestions,
        score: score
    }
}

export default connect(mapStateToProps)(ScoreCard);
