import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import {getAuthedUser} from '../actions/authedUser';
import handleInitialData from '../actions/shared';
import Home from './Home';

class WelcomePage extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }


    render() {
        const {authedUser} = this.props;

        const setUser =(e) =>{
            const authedUser = e.target.value;
            this.props.dispatch(getAuthedUser(authedUser));
        }

        if (authedUser) {
            return <Redirect to ='/home' component={ Home }/>
        }

        return (
            <div className= 'container'>
                <div className='row justify-content-center'>
                    <div className=' align-self-center col col-md-5'>
                        <div className='card m-0'>
                            <div className='card-title welcome-card-title'>
                                <span><h5 className='p-2 text-center text-white'>Welcome To Would You Rather Game</h5></span>
                            </div>
                            <div className=' card-body' >
                                <div className="center">
                                    <img alt="Welcome-page" className="would-you-rather-image img-fluid mb-1" src="https://parade.com/wp-content/uploads/2019/12/Would-You-Rather_Questions.jpg"/>
                                        <i className="select-User text-success">Login...</i> <br/>
                                        <select className='center welcome-form-select mb-1' value={authedUser} onChange={(e) => setUser(e)}>
                                            <option className="text-white" disabled value =''>Select a User...</option>
                                            <option value ="sarahedo" >Sarah Edo</option>
                                            <option value ="tylermcginnis">Tyler McGinnis</option>
                                            <option value ="muhammad">Muhammad Ibrahim</option>
                                        </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {

    return {
        authedUser: state.authedUser,
    }
}

export default withRouter(connect(mapStateToProps)(WelcomePage));