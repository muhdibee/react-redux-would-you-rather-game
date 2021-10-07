import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import userAvatar from '../util/images/pngwing1.com';

class Navigationbar extends Component {

    render() {

        const { authedUser, users, questions, questionId, history} = this.props;

        function logout(e){
            e.preventDefault();
            history.push('/welcomePage')
        }

        return (
            <div className='mb-4 nav-wrapper text-success'>
                <div className='nav-container container py-3'>
                    <div className='row'>
                        <span className='col-10 col-md-8 col-lg-6'><h3><Link to='/' className='text-success logo link-hover'>Would You Rather</Link></h3></span>
                        <nav className='text-success ml-auto mr-2'>
                            <ul className='top-nav-ul'>
                                <li className='nav-link'><NavLink to='/home' activeClassName='nav-active' className='text-success nav-link'> Home</NavLink></li>
                                <li className='nav-link'><NavLink to='/newQuestion' activeClassName='nav-active' className='text-success nav-link'> New Question</NavLink></li>
                                <li className='nav-link'><NavLink to='/leaderBoard' activeClassName='nav-active' className='text-success nav-link'>Leader  Board</NavLink></li>
                            </ul>
                        </nav>
                        {
                            authedUser ?
                            <span className="">
                                <div className = "center"><img src={users[authedUser].avatarURL} alt="user avatar" style={{width:"60px", height: "60px", borderRadius:"50%"}} /></div>
                                <i>{users[authedUser].id}</i>
                                <Link className="text-success nav-link" onclick = {(e) => logout(e)}> - Logout</Link>
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