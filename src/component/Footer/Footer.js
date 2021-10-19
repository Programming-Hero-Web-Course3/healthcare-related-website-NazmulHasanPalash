import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-style m-5">
                <h3 >Health <span className="heading-style">Care</span></h3>
                <div className="container">

                    <div className="row my-5">
                        <div className="col">
                            <h5 className="span-style">Department</h5>
                            <p>Cardiology Department</p>
                            <p>Medicine Department</p>
                            <p>Physical Department</p>
                            <p>Surgery Department</p>
                            <p>Dermatology Department</p>
                            <p>Child specialist</p>
                        </div>
                        <div className="col-5">
                            <h5 className="span-style">Services</h5>
                            <p>Specialize Therapy & Support</p>
                            <p>Diagnosis & Investigation</p>
                            <p>Medical Treatment & Surgical</p>
                            <p>Dental Hygiene </p>
                            <p>Skin Rejuvenation </p>
                            <p>Root Canals</p>
                        </div>
                        <div className="col">
                            <h1>Medical <span className="span-style">Center<i className="fas fa-plus"></i></span></h1>
                            <p>Health care (also health-care or healthcare) is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people. Health care is delivered by health professionals and allied health fields.</p>
                        </div>
                    </div>
                    <div><i className="fab fa-facebook-square m-3"></i><i className="fab fa-instagram m-3"></i><i className="fab fa-twitter-square m-3"></i><i className="far fa-envelope m-3"></i></div>
                    <p>Copyright @2021 | Medical center</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;