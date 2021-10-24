import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SelectedPoll extends Component {
    constructor(props) {
        super(props);
        const { authedUser, users, id} = this.props;
        const vote = users[authedUser].answers[id];
        this.state = {
            vote: vote
        }
    }

    render(){
        const {vote} = this.state;
        const { users, questions, id} = this.props;
        const allVotes = questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length;

        const VotedDiv = ({text, voteRate, allVotes}) => {
            const percentage = Math.round((voteRate/allVotes)*100);
            return (
                <div>
                    <div>
                        <h6 className="" style= {{ display: "inline", marginRight: "10px" }}>Would you rather {text}?</h6>
                        {/* <i className="fa fa-check-circle text-success"> your vote</i> */}
                        <i className="text-success" > your vote</i>
                    </div>
                    <div className="progress" style={{marginTop: "10px"}}>
                        <div className="progress-bar bg-success" role="progressbar" style={{width: `${percentage}%`}} aria-valuenow="" aria-valuemin="0" aria-valuemax="100">{percentage}%</div>
                    </div>
                    <h6>{voteRate} out of {allVotes} Votes</h6>
                </div>
            )
        }

        const NotVotedDiv = ({text, voteRate, allVotes}) =>{
            const percentage = Math.round((voteRate/allVotes)*100);
            return(
                <div>
                    <h6>Would you rather {text}?</h6>
                    <div className="progress" style={{marginTop: "10px"}}>
                        <div className="progress-bar bg-success" role="progressbar" style={{width:`${percentage}%`}} aria-valuenow="" aria-valuemin="0" aria-valuemax="100">{percentage}%</div>
                    </div>
                    <h6>{voteRate} out of {allVotes} Votes</h6>
                </div>
            )
        }


        return (
            <div className="container">
                <div className= 'row'>
                    <nav>
                        <ol className='breadcrumb bg-light'>
                            <li className='breadcrumb-item '><Link to='/home' >Home</Link></li>
                            <li className='breadcrumb-item active'>Question</li>
                        </ol>
                    </nav>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='card-wrapper col-10 col-md-8 col-lg-6 center'>
                            <div className = 'card'>
                                <div className = ' col-12 bg-success card-title question-card-title'>
                                    <img className="question-avatar col-12" alt='User-Avatar' src={users[questions[id].author].avatarURL} />
                                    <h6 className='text-light' style={{display:"inline"}}>Asked By {users[questions[id].author].name}</h6>
                                </div>
                                <div className= 'card-body'>
                                    <div className='container'>
                                    <h4>Results:</h4><br/>
                                        <div className='results'>
                                            <div className="col-12 mb-2 center " style={{ border: "1px #1f9d6a ridge", padding: "2%",}}>
                                                {
                                                    vote === "optionOne"?
                                                    <VotedDiv text={questions[id].optionOne.text} voteRate={questions[id].optionOne.votes.length} allVotes={allVotes}/>
                                                    :<NotVotedDiv text={questions[id].optionOne.text} voteRate={questions[id].optionOne.votes.length} allVotes={allVotes}/>
                                                }
                                            </div>

                                            <div className="col-12 mt-2 center" style={{border: "1px #1f9d6a ridge", padding: "2%",}}>
                                                {
                                                    vote === "optionTwo"?
                                                    <VotedDiv text={questions[id].optionTwo.text} voteRate={questions[id].optionTwo.votes.length} allVotes={allVotes}/>
                                                    :<NotVotedDiv text={questions[id].optionTwo.text} voteRate={questions[id].optionTwo.votes.length} allVotes={allVotes}/>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state, props) {
    const {id} = props.match.params;

    return {
        authedUser: state.authedUser,
        users: state.users,
        questions: state.questions,
        id: id,
    }
}

export default connect(mapStateToProps)(SelectedPoll);