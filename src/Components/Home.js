import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import handleInitialData from '../actions/shared';
import Navigationbar from './NavigationBar';
import Question from './Question';

class Home extends React.Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {

        const {questions,authedUser} = this.props;
        const questionsId = Object.keys(questions);
        if (authedUser) {
            return (
                <div className = 'wrapper'>{console.log("Array Questions", questions, )}
                    <div className = 'container'>
                        <div className= 'row'>
                            <div className= 'QuestionTypes'>{console.log('authedUser:', authedUser )}
                                <span className='QuestionTypeSpan'>Unanswerd Questions </span> <span>|</span><span className='QuestionTypeSpan'>Answerd Questions</span>
                            </div>
                        </div>
                        <div className= 'row'>
                            <ul className = 'questions col-12 col-md-8 col-lg-6 my-3'>
                                {
                                    questionsId.map((questionId) => {
                                        return (
                                            <li key = {questionId}>
                                                <Question id = {questionId}/>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }

        else return (
            <div>
                {/* <Navigationbar /> */}
                <h2 className="text-center text-sucess mb-2">ERROR: Please <Link to ='/'>select</Link>  a user to continue.</h2>
                <h6 className="text-center text-sucess">Click <Link to ='/'>here</Link> to go back.</h6>
            </div>
        )

    }
}

function mapStateToProps(state) {
    return {
        questions: state.questions,
        authedUser: state.authedUser
    }
}

export default connect(mapStateToProps)(Home);