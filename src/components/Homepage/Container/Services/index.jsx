import React from 'react';
import './index.css';
import {Homeservices} from '../../../../data';

function Services() {
    return (
        <div className="services">
            <h2>更多服务</h2>
            <div className="line"></div>
            <div className="flexbox servicecontent">
                {Homeservices.map(service=>{
                    return (
                        <div className="service" key={service.id}>
                            <div className="servicenum">
                                <span>{service.id}</span>
                            </div>
                            <h2>{service.h2}</h2>
                            <h3>{service.h3}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Services