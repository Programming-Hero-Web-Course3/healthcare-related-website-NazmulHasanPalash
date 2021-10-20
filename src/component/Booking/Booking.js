import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Booking.css'

const Booking = () => {
    const { serviceId } = useParams();
    console.log(serviceId);
    const [serviceList, setServiceList] = useState([]);
    const [selectService, setSelectService] = useState({});
    useEffect(() => {
        fetch("/serviceDetails.json")
            .then(res => res.json())
            .then(data => setServiceList(data.service))
    }, [])
    useEffect(() => {
        const getService = serviceList.find
            (service => service.id == serviceId)
        setSelectService(getService)
    }, [serviceList])



    return (
        <div className="shop-container">


            <div>
                <div id="carouselExampleIndicators" className="carousel slide  w-75 mx-auto banner-style my-5" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://image.freepik.com/free-photo/my-daughter-isn-t-afraid-pay-visit-here_329181-7634.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://image.freepik.com/free-photo/successful-medical-team_329181-9252.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://image.freepik.com/free-photo/ordinary-busy-day-surgeon_329181-19717.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <h1>Get<span className="text-primary mt-5 "> Appointment</span></h1>
            <div className="card mb-3 appointment-style w-75 mx-auto my-3">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={selectService?.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6 body-style">
                        <div className="card-body my-5  ">

                            <h5 className="card-title name-style">Appointment: {selectService?.name}</h5>
                            <h5 className="card-title">Service number: {serviceId}</h5>
                            <p className="card-text title-style">Description:{selectService?.description}</p>
                            <Link to="/appointment">
                                <button className="btn btn-primary"> Get Appointment</button>

                            </Link>
                        </div>
                    </div>
                </div>
            </div >


            <div className="m-5">
                <h1 className="text-primary">Doctor</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 ">
                    <div className="col shadow-lg ">
                        <div className="card doctor-style">
                            <img src="https://image.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr Riny</h5>
                                <p className="card-text">Cardiology Department</p>
                            </div>
                        </div>
                    </div>
                    <div className="col shadow-lg">
                        <div className="card doctor-style">
                            <img src="https://image.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr Alex</h5>
                                <p className="card-text">Medicine Department</p>
                            </div>
                        </div>
                    </div>
                    <div className="col shadow-lg ">
                        <div className="card doctor-style">
                            <img src="https://image.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr Roy</h5>
                                <p className="card-text">Physical Department</p>
                            </div>
                        </div>
                    </div>
                    <div className="col shadow-lg ">
                        <div className="card doctor-style">
                            <img src="https://as2.ftcdn.net/v2/jpg/02/60/04/09/1000_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr Danial</h5>
                                <p className="card-text">Surgery Department</p>
                            </div>
                        </div>
                    </div>
                    <div className="col shadow-lg ">
                        <div className="card doctor-style">
                            <img src="https://as1.ftcdn.net/v2/jpg/03/08/95/96/1000_F_308959677_9dsUpeKnj2wWy42Vr8ofYNeKoazLXgSX.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr Anila</h5>
                                <p className="card-text"> Dermatology Department</p>
                            </div>
                        </div>
                    </div>
                    <div className="col shadow-lg ">
                        <div className="card doctor-style">
                            <img src="https://as2.ftcdn.net/v2/jpg/03/05/41/27/1000_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr Ryan</h5>
                                <p className="card-text">Child specialist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div >


    );

};

export default Booking;