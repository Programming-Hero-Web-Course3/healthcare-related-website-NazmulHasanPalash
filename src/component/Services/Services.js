import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="serviceId">
            <h2 className=" mt-5">Our <span className="heading-style"> services</span> </h2>
            <div className="service-container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mx-auto">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>
                    )
                }
            </div>

        </div>
    );
};

export default Services;