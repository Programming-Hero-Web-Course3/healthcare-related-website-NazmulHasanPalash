import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, id, img, description } = service;
    // console.log(service);

    return (
        <div className="service">
            <div className="col card-style shadow-lg m-5 p-3 rounded-3 ">
                <div className="card h-100">
                    <div>
                        <img src={img} className="card-img-top  h-50" alt="..." />
                    </div>
                    <div className="card-body-style">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>

                        </div>
                        <Link to={`/booking/${id}/${name}/${description}`}>
                            <button className="btn btn-style m-5 p-2">Appointment: {name.toLowerCase()}</button>


                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;