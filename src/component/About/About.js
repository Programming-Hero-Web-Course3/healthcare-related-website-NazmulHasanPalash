import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <h1><span className="span-style my-3">About</span> us</h1>
            <div className="card mb-3  w-75 about-style mx-auto">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src="https://image.freepik.com/free-photo/portrait-doctor_144627-39390.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="span-style">We Provide Essential Services For Your Health Care</h5>
                            <p className="card-text">Basic health services means those health services, including as a minimum, but not limited to, emergency care, inpatient hospital and physician care, ambulatory physician care, and outpatient and preventive medical services.</p>

                            <p><i className="fas fa-phone-square-alt"></i>  24 Hours Emergency Assistance Call Us</p>
                            <p><i className="fas fa-heartbeat"></i>       We are committed to providing healthcare service</p>
                            <p><i className="fas fa-hospital-user"></i> Really know the true needs and expectations of patients</p>


                        </div>
                    </div>
                </div>
            </div>
            <div className="m-5">
                <h1>Meet With Our<span className="span-style"> Doctors</span></h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 ">
                    <div className="col shadow-lg  p-3 rounded-3 ">
                        <div className="card">
                            <img src="https://image.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr Riny</h5>
                                <p className="card-text">Cardiology Department</p>
                            </div>
                        </div>
                    </div>
                    <div className="col shadow-lg  p-3 rounded-3">
                        <div className="card">
                            <img src="https://image.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr Alex</h5>
                                <p className="card-text">Medicine Department</p>
                            </div>
                        </div>
                    </div>
                    <div className="col shadow-lg  p-3 rounded-3">
                        <div className="card">
                            <img src="https://image.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr Roy</h5>
                                <p className="card-text">Physical Department</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


            <div className="card mb-3 w-75 about-style mx-auto">
                <div className="row g-0">
                    <div className="col-md-8 text-style">
                        <div className="card-body ">
                            <h5 className="span-style">Trust Us To Be There To Help All & Make Things Well Again</h5>
                            <p className="card-text">The fundamental purpose of health care is to enhance quality of life by enhancing health. Commercial businesses focus on creating financial profit to support their valuation and remain viable. Health care must focus on creating social profit to fulfill its promise to society.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="https://image.freepik.com/free-photo/doctor-with-co-workers-analyzing-x-ray_1098-581.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
            <h1> Our<span className="span-style"> Services</span></h1>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <img src="https://kit.baliniz.com/medicalife/wp-content/uploads/sites/10/2021/05/medical-council.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="span-style">Best Medical Network Directory For Physicians and Clients</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://kit.baliniz.com/medicalife/wp-content/uploads/sites/10/2021/05/disability-and-healthcare.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="span-style">Primary health care is very important in our life</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://kit.baliniz.com/medicalife/wp-content/uploads/sites/10/2021/05/psychologist-and-patient-talking-in-clinic-mental-health-concept.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="span-style">6 types of treatment Your Mental Health when you are sick</h5>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;