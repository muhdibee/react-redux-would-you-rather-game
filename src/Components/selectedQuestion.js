import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { _saveQuestionAnswer } from '../util/_DATA';
import SelectedPoll from './SelectedPoll';

class SelectedQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: "",
            selectedPoll: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        this.setState({
            answer: e.target.value,
        })
        // console.log("answer",answer)
    }

    handleSubmit() {
        let {authedUser, id, history} = this.props;
        const answer = this.state.answer;
        console.log("answer:",answer )
        console.log("answer TypeOf:", typeof answer )
        const submitValue = {authedUser, id, answer}
        if (this.state.answer !== ""){
            console.log("Submit value:", submitValue);
            _saveQuestionAnswer (submitValue);
            // this.setState({selectedPoll: true})
        }
    }


    render(){

        const { authedUser, users, questions, id} = this.props;

        // if(this.state.selectedPoll === true) {
        //     return <Redirect to='/poll/:pollId' Component={() => <SelectedPoll pollId ={id} />} />
        // }
        return (
            <div className="container">
                <div className= 'row'>
                    <nav className='' aria-aria-label='breadcrumb'>
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
                                    <strong className='text-light'>{users[questions[id].author].name} asks.</strong>
                                </div>
                                <div className= 'card-body'>
                                    <div className=''>
                                    <h6>Would you rather?</h6><br/>
                                        <div className='selected-question-form bg-light'  onChange={this.handleChange }>
                                            <input type='radio' name= 'answer' value={`${Object.keys(questions[id])[3]}`} /> {questions[id].optionOne.text} <br/>
                                            <input type='radio' name= 'answer' value={`${Object.keys(questions[id])[4]}`} /> {questions[id].optionTwo.text} <br/><br/>
                                            <button className='btn submit-btn' type='submit' onClick={this.handleSubmit}>Submit</button>
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

export default connect(mapStateToProps)(SelectedQuestion);