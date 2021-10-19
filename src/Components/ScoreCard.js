import React from 'react';
import { connect } from 'react-redux';

class ScoreCard extends React.Component {

    render() {
        const {users, score:sortedScore} = this.props;
        const usersId = Object.keys(users);

        return (
            <li key={sortedScore} className="my-3">
                {
                    usersId.map((userId) => {
                        const answeredQuestions = Object.keys(users[userId].answers).length
                        const createdQuestions = users[userId].questions.length
                        const score = answeredQuestions + createdQuestions;

                        if (score === sortedScore){
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
                                                            <h6 className="dinline col-8">Answered questions</h6> <h6 className="dinline col">{answeredQuestions}</h6>
                                                        </div>
                                                        <hr style={{border: "1px ridge"}}/>
                                                        <div className= "dblock text-left justify-content-between">
                                                            <h6 className="dinline col-8">Created questions</h6> <h6 className="dinline col mr-auto">{createdQuestions}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 col-lg-3">
                                                <div className="card">
                                                    <div className="card-title text-white" style={{backgroundColor: "#1f9d6a"}}>Score</div>
                                                    <div className="card-body">
                                                        <div className=" col-6 center py-1 my-2 text-white" style={{borderRadius: "50%", backgroundColor: "#1f9d6a" }}>{score}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        }
                    })
                }

            </li>
        )


    }
}

function mapStateToProps (state, {score}) {
    return {
        users:state.users,
        score: score
    }
}

export default connect(mapStateToProps)(ScoreCard);
