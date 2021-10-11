import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter, Redirect, Route } from 'react-router-dom';
import { removeAuthedUser } from '../actions/authedUser';
import LeaderBoard from './LeaderBoard';
import WelcomePage from './WelcomePage';

class Navigationbar extends Component {

    render() {

        const { authedUser, users, questions, questionId, dispatch, history} = this.props;

        function logout(e){
            dispatch(removeAuthedUser());
            return (
                history.push('/')
                )
            }

        return (
            <div className='mb-3 nav-wrapper text-success'>
                <div className='nav-container container py-3'>
                    <div className='row'>
                        <span className='col-10 col-md-8 col-lg-4'><h4><Link to='/' exact className='text-success logo link-hover'>Would You Rather</Link></h4></span>
                        <nav className='text-success ml-auto mr-auto pt-5  top-nav'>
                            <ul className='top-nav-ul'>
                                <li className='nav-link'><NavLink to='/home' activeClassName='nav-active' className='text-success nav-link'> Home</NavLink></li>
                                <li className='nav-link'><NavLink to='/newQuestion' activeClassName='nav-active' className='text-success nav-link'> New Question</NavLink></li>
                                <li className='nav-link'><NavLink to='/leaderBoard' activeClassName='nav-active' className='text-success nav-link'>Leader  Board</NavLink></li>
                            </ul>
                        </nav>
                        {
                            authedUser ?
                            <span className="mb-1">
                                <div className = "center"><img src={users[authedUser].avatarURL} alt="user avatar" style={{width:"50px", height: "50px", borderRadius:"50%"}} /></div>
                                <i>{users[authedUser].name}</i>
                                <i className="text-succes logout" onClick = {(e) => logout(e)}> - Logout</i>
                            </span>
                            : ""
                        }
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps (state, {questionId}) {
    return {
        authedUser: state.authedUser,
        users: state.users,
        questions: state.questions,
        questionId: questionId,

    }
}

export default withRouter(connect(mapStateToProps)(Navigationbar));