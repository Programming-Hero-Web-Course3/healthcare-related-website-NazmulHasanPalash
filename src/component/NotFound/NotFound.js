import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div >
            <h1>Page <span className="header-style">Error 404</span> </h1>
            <div className="error-style">
                <img src="https://image.freepik.com/free-vector/error-404-glitch-background_23-2148081767.jpg" alt="" />
            </div>
        </div>
    );
};

export default NotFound;