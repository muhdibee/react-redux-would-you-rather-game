import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class selectedQuestion extends Component {

    render(){

        const { authedUser, users, questions, id} = this.props;
        // const questionsId = Object.keys(questions);
        console.log ("id:", id)

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
                                        <form className='selected-question-form bg-light'>
                                            <input type='radio' name= 'answer' value={`${questions[id].optionOne.text}`} /> {questions[id].optionOne.text} <br/>
                                            <input type='radio' name= 'answer' value={`${questions[id].optionTwo.text}`} /> {questions[id].optionTwo.text} <br/><br/>
                                            <button className=' btn '>Submit</button>
                                        </form>

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
    const { id } = props.match.params;

    return {
        authedUser: state.authedUser,
        users: state.users,
        questions: state.questions,
        id: id,
    }
}

export default connect(mapStateToProps)(selectedQuestion);