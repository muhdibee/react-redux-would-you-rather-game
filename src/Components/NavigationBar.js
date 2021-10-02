import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navigationbar extends Component {
    render() {

        return (
            <div className='mb-4 nav-wrapper text-success'>
                <div className='nav-container container py-3'>
                    <div className='row'>
                        <span className='col-6 col-md-8 col-lg-6'><h3><Link to='/' exact className='text-success logo'>Would You Rather</Link></h3></span>
                        <nav className='text-success ml-auto '>
                            <ul className='top-nav-ul'>
                                <li className='nav-link'><NavLink to='/home' activeClassName='active' className='text-success nav-link'> Home</NavLink></li>
                                <li className='nav-link'><NavLink to='/newQuestion' activeClassName='active' className='text-success nav-link'> New Question</NavLink></li>
                                <li className='nav-link'><NavLink to='/leaderBoard' activeClassName='active' className='text-success nav-link'>Leader  Board</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        )
    }
}

export default Navigationbar;