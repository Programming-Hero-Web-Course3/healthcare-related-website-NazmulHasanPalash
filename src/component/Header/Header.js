import React from 'react';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);

    return (
        <div>
            <div className="w-100 mx-auto">
                <div className="img-style">
                    <img src="https://wp.xpeedstudio.com/medizco/wp-content/themes/medizco-development/assets/images/banner/page-banner-img.jpg" alt="" />
                </div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid ">
                            <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                                <a className="navbar-brand" href="/home"><h1>Medical <span className="span-style">Center<i className="fas fa-plus"></i></span></h1></a>
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 link-style">
                                    <li className="nav-item">
                                        <HashLink className="nav-link active" aria-current="page" to="/home#home">Home</HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link active" to="/home#serviceId">Service</HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link active" to="/home#expertId">Doctors</HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link active" to="/about">About</HashLink>
                                    </li>

                                    {user?.email ? <li className="nav-item ">
                                        <button onClick={logOut} type="button" className="btn btn-light mx-5">Log out</button>

                                    </li> :
                                        <li className="nav-item">
                                            <HashLink className="nav-link active" aria-current="page" to="/login">Login</HashLink>

                                        </li>}
                                    <li className="nav-item ms-5">
                                        <a className="nav-link" href="#login"> Sign in as {user?.displayName}</a>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </nav>

                </div>



            </div>
        </div >
    );
};

export default Header;