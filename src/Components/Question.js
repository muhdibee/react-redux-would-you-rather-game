import React, { Component } from 'react'
import { connect } from 'react-redux';

class Question extends Component {

    render(){

        const {questions} = this.props;
        const questionId = this.props.questionId;

        return (
            <div className = 'wrapper'>
                {
                    <div className = 'card'>
                        <div className = ' col-12 bg-light card-title center'>{console.log('From Question component', questionId)}
                            {/* <img className="question-avatar col-12" alt='User-Avatar' src={'https://media.istockphoto.com/photos/businesswoman-portrait-on-white-picture-id615279718?k=20&m=615279718&s=612x612&w=0&h=D0gAjhLC0XgxWyi19zRC4HXSl2g81bytiIwezQn9ZgQ='} /> */}
                            <strong className='text-light'>Asked by {questions[questionId].author}</strong>
                        </div>
                            <div className= 'card-body'>
                                <p className='center'>Would you rather?</p>
                                <p>...{questions[questionId].optionOne.text}...</p>
                            </div>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps (state, {id}) {
    return {
        questions: state.questions,
        questionId: id
    }
}

export default connect(mapStateToProps)(Question);