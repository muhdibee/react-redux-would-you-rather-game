import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigationbar extends Component {
    render() {

        return (
            <div className='mb-2 nav-wrapper'>
                <div className='nav-container container py-3'>
                    <span><h3 className='text-white'>Would You Rather</h3></span>
                    <nav className='text-white top-nav ms-auto pe-0 ps-0'>
                        <ul className='nav-links'>
                            <li className='nav-link'><NavLink to='/Home' activeClassName='active' className='text-white nav-link'> Home</NavLink></li>
                            <li className='nav-link'><NavLink to='/NewQuestion' activeClassName='active' className='text-white nav-link'> New Question</NavLink></li>
                            <li className='nav-link'><NavLink to='/leaderBoard' activeClassName='active' className='text-white nav-link'>Leader  Board</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>

        )
    }
}

export default Navigationbar;