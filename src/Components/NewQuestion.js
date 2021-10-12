import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { _saveQuestion } from '../util/_DATA';
import WelcomePage from './WelcomePage';

class NewQuestion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            optionOne: '',
            optionTwo: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const {optionOne, optionTwo} = this.state;
        const { authedUser } = this.props;
        const question = {optionOne, optionTwo, authedUser}
        console.log("Submitting:", question );
        _saveQuestion ({optionOne, optionTwo, authedUser});

        console.log('form values:', {
            optionOne: optionOne,
            optionTwo: optionTwo,
        })
    }

    render() {

        const { authedUser, users } = this.props;

        if (authedUser) {
            return (
                <div className='row'>
                    <div className='col'>
                        <div className='card-wrapper col-10 col-md-8 col-lg-6 center'>
                            <div className = 'card'>
                                <div className = ' col-12 bg-success card-title question-card-title'>
                                    <img className="question-avatar col-12" alt='User-Avatar' src={users[authedUser].avatarURL} />
                                    <strong className='text-light'>{users[authedUser].name} </strong>
                                </div>
                                <div className= 'card-body'>
                                    <h5>Create New Question</h5><br/>
                                    <form onSubmit={(e)=> this.handleSubmit(e)} className='bg-light'>
                                        <h6>Would you rather..</h6>
                                        <input type='text' className='new-ques-input' onChange={(e)=> this.setState({optionOne: e.target.value})} value={this.state.optionOne} placeholder='Enter option one text here '/><br/>
                                        <p><h6>OR</h6></p>
                                        <input type='text' className='new-ques-input ' onChange={(e)=> this.setState({optionTwo: e.target.value})} value={this.state.optionTwo} placeholder='Enter option Two text here'/><br/>
                                        <input type='submit' className='btn submit-btn' />
                                    </form>
                                </div>
                            </div>
                        </div>
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
        users: state.users,
    }
}

export default connect(mapStateToProps)(NewQuestion);