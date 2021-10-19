import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = (props) => {
    const { serviceId } = useParams();
    console.log(serviceId);
    return (
        <div>
            <h2>Appointment:{serviceId}</h2>
            <div className="col card-style shadow-lg m-5 p-3 rounded-3 ">
                <div className="card h-100">
                    <div>
                        <img src="" className="card-img-top  h-50" alt="..." />
                    </div>
                    <div className="card-body-style">
                        <div className="card-body">
                            <h5 className="card-title">{ }</h5>
                            <p className="card-text">{ }</p>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Booking;