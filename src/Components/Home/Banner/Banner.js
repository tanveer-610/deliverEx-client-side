import React from 'react';
import { Container } from 'react-bootstrap';
import img from "../../../Assets/Images/logo.png"
import './Banner.css'
const Banner = () => {
    return (
        <Container>
            <div className="row mt-5 align-items-center">

                <div className="banner-detail col-lg-6">
                    <div className="h-100 w-75 mx-auto d-flex align-items-center justify-content-center">
                        <div className="banner-description px-4 py-3 rounded rounded-3 text-center">
                            <img src={img} alt="deliverEX-logo" width="55px" height="45px" />
                            <h1 className="mb-3"><span className="text-white">deliver</span><span className="text-danger">EX</span></h1>
                            <p className="text-white mb-3">To best support your ever-changing logistic needs, we are evolving our transport services</p>
                            <a className="text-decoration-none d-inline-block px-3 py-2 text-white mb-3" href="#services">Explore Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6"></div>
            </div>
        </Container>
    );
};

export default Banner;