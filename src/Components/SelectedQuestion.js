import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAnswered } from '../actions/isAnswered';
import { handleSaveQuestionAnswer } from '../actions/questions';
import WelcomePage from './WelcomePage';

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

    afterSubmit() {
        const {history, id, dispatch} = this.props;
        history.push(`/polls/${id}`)
        dispatch(selectAnswered())
    }

    handleSubmit() {
        const {authedUser, id, dispatch} = this.props;
        const answer = this.state.answer;
        const submitValue = {authedUser, qid:id, answer}
        if (this.state.answer !== ""){
            dispatch(handleSaveQuestionAnswer(submitValue))
            .then(() => this.afterSubmit())
        }
    }

    render(){

        const {authedUser, users, questions, id:questionId} = this.props;
        const questionsId = Object.keys(questions)

        if(authedUser){
            if (questionsId.includes(questionId)){
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
                                            <img className="question-avatar col-12" alt='User-Avatar' src={users[questions[questionId].author].avatarURL} />
                                            <h6 style={{display:"inline"}} className='text-light'>{users[questions[questionId].author].name} asks.</h6>
                                        </div>
                                        <div className= 'card-body'>
                                            <div className=''>
                                            <h4>Would you rather?</h4><br/>
                                                <div className='selected-question-form bg-light'  onChange={this.handleChange }>
                                                    <h6><input className='link-hover' type='radio' name= 'answer' value={`${Object.keys(questions[questionId])[3]}`} />&nbsp;&nbsp;{ questions[questionId].optionOne.text}</h6> OR
                                                    <h6><input className='link-hover' type='radio' name= 'answer' value={`${Object.keys(questions[questionId])[4]}`} />&nbsp;&nbsp;{ questions[questionId].optionTwo.text}</h6><br/>
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
            }else return(
                <div className='center'>
                    <h5 className="text-center text-opacity-50">404 ERROR: the page <i className="text-danger"> &nbsp;/questions/{questionId}</i> does not exist.</h5><br/>
                </div>
            )
        } else return(
            <div className='center'>
                <h5 className="text-center text-success text-opacity-50">Please login to continue.</h5><br/>
                <WelcomePage />
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