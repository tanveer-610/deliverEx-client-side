import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../../Assets/Images/about.png'
import './About.css'
const About = () => {

    return (
        <Container className="my-3 pt-5" id="about">
            <div className="p-4">
                <h2 className="text-center customized-text-color">ABOUT US</h2>
                <hr />
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-12 pt-2">

                        <p>deliverEX is world’s most trusted on-demand last mile logistics network offering tech-enabled one stop delivery solutions. Since its inception in 2014, our vision has been to become the operating system for e-commerce in Bangladesh including the whole world, through a combination of world-class infrastructure, logistics operations of the highest quality and cutting-edge technology capabilities.</p>
                        <p>We take care of order fulfillment, collection, transport, tracking and delivery of parcels. We are the first in Bangladesh to have created a unique network with home delivery and Store Pickup & Return services which enhances customer experience and rationalizes costs.</p>

                        <div className="my-4">
                            <div className="d-flex align-items-center my-2">
                                <i className="fas fa-2x fa-shipping-fast text-muted"></i>
                                <div className="px-4">
                                    <h5 className="customized-text-color">Fastest Delivery</h5>
                                    <p className="text-muted">We have fasted delivery system in the world</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center my-2">
                                <i className="fas fa-2x fa-shield-alt text-muted"></i>
                                <div className="px-4">
                                    <h5 className="customized-text-color">Secured Service</h5>
                                    <p className="text-muted">We give 100% surety for delivering product  </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center my-2">
                                <i className="fas fa-2x fa-truck-moving text-muted"></i>
                                <div className="px-4">
                                    <h5 className="customized-text-color">World wide Shipping</h5>
                                    <p className="text-muted">You can send your product easily to anywhere. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <img src={img} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;