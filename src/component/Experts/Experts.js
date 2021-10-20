import React from 'react';

const Experts = () => {
    return (
        <div id="expertId">
            <div className="m-5 w-75 mx-auto">
                <h1>Expert<span className="text-primary"> Doctors</span></h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 ">
                    <div className="col shadow-lg  p-1 rounded-3 ">
                        <div className="card">
                            <img src="https://image.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr Riny</h5>
                                <p className="card-text">Cardiology Department</p>
                            </div>
                        </div>
                    </div>
                    <div className="col shadow-lg  p-1 rounded-3">
                        <div className="card">
                            <img src="https://image.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr Alex</h5>
                                <p className="card-text">Medicine Department</p>
                            </div>
                        </div>
                    </div>
                    <div className="col shadow-lg  p-1 rounded-3">
                        <div className="card">
                            <img src="https://image.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr Roy</h5>
                                <p className="card-text">Physical Department</p>
                            </div>
                        </div>
                    </div>
                    <div className="col shadow-lg  p-1 rounded-3">
                        <div className="card">
                            <img src="https://as2.ftcdn.net/v2/jpg/02/60/04/09/1000_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr Danial</h5>
                                <p className="card-text">Surgery Department</p>
                            </div>
                        </div>
                    </div>
                    <div className="col shadow-lg  p-1 rounded-3">
                        <div className="card">
                            <img src="https://as1.ftcdn.net/v2/jpg/03/08/95/96/1000_F_308959677_9dsUpeKnj2wWy42Vr8ofYNeKoazLXgSX.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr Anila</h5>
                                <p className="card-text"> Dermatology Department</p>
                            </div>
                        </div>
                    </div>
                    <div className="col shadow-lg  p-1 rounded-3 ">
                        <div className="card">
                            <img src="https://as2.ftcdn.net/v2/jpg/03/05/41/27/1000_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr Ryan</h5>
                                <p className="card-text">Child specialist</p>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 w-75 about-style mx-auto">
                        <h1>Our<span className="span-style">Promise</span></h1>

                        <div className="row g-0">
                            <div className="col-md-6 text-style">
                                <div className="card-body ">
                                    <h5 className="span-style">Trust Us To Be There To Help All & Make Things Well Again</h5>
                                    <p className="card-text">The fundamental purpose of health care is to enhance quality of life by enhancing health. Commercial businesses focus on creating financial profit to support their valuation and remain viable. Health care must focus on creating social profit to fulfill its promise to society.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src="https://image.freepik.com/free-photo/doctor-with-co-workers-analyzing-x-ray_1098-581.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experts;