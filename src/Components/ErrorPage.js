import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage({location}) {

    return (
        <div className='' >
            <div className='center col-12 col-md-6'>
                <h2 >Error 404: page not found</h2>
                <h5>No Page match for <code> {location.pathname}</code></h5>
                <h5>Got to <Link to='/'>Home</Link></h5>
            </div>
        </div>
    )
}