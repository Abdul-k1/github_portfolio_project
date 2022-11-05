import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="error-page">
            <h1>This is an Error Page</h1>
            <Link to="/">
                <button className="home-btn">Go to Homepage</button>
            </Link>
        </div>
    )
}

export default Error;