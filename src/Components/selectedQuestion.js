import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUnanswered, selectAnswered } from '../actions/isAnswered';
import { handleSaveQuestionAnswer } from '../actions/questions';
import { _saveQuestionAnswer } from '../util/_DATA';

class SelectedQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        this.setState({
            answer: e.target.value,
        })
    }

    handleSubmit() {
        let {authedUser, id, history} = this.props;
        const answer = this.state.answer;
        const submitValue = {authedUser, qid:id, answer}
        if (this.state.answer !== ""){
            _saveQuestionAnswer(submitValue)
            .then(history.push(`/polls/${id}`))
        }
    }

    render(){

        const {users, questions, id} = this.props;

        return (
            <div className="container">
                <div className= 'row'>
                    <nav >
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
                                    <h6 style={{display:"inline"}} className='text-light'>{users[questions[id].author].name} asks.</h6>
                                </div>
                                <div className= 'card-body'>
                                    <div className=''>
                                    <h4>Would you rather?</h4><br/>
                                        <div className='selected-question-form bg-light'  onChange={this.handleChange }>
                                            <h6><input className='link-hover' type='radio' name= 'answer' value={`${Object.keys(questions[id])[3]}`} />&nbsp;&nbsp;{ questions[id].optionOne.text}</h6> OR
                                            <h6><input className='link-hover' type='radio' name= 'answer' value={`${Object.keys(questions[id])[4]}`} />&nbsp;&nbsp;{ questions[id].optionTwo.text}</h6><br/>
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