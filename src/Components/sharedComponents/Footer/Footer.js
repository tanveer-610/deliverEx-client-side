import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../../Assets/Images/logo.png'
import './Footer.css'
const Footer = () => {

    const home = <FontAwesomeIcon icon={faHome} />
    const email = <FontAwesomeIcon icon={faEnvelope} />
    const phone = <FontAwesomeIcon icon={faPhone} />

    //Send complain by email
    const sendMsg = () => {
        var msgBody = document.getElementById('msg-id').value;
        window.open('mailto:deliverEX@gmail.com?subject=subject&body=' + msgBody);
    }
    return (
        <div className="bg-dark py-4">
            <Container className="mb-4">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-lg-4">
                        <h4 className="text-white ">UseFull Links</h4>
                        <p><a className="footer-link text-decoration-none" href="#about">About Us</a></p>
                        <p><a className="footer-link text-decoration-none" href="#services">Services</a></p>
                        <p><a className="footer-link text-decoration-none" href="#faqAndMap">FAQ & MAP</a></p>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <div className="text-center mb-4">
                            <p>
                                <img src={img} width="50px" height="40px" alt="" />
                            </p>
                            <h2><span className="text-white">deliver</span><span className="text-danger">EX</span></h2>
                        </div>
                        <div className="input-group mb-3">
                            <input id="msg-id" type="text" className="form-control" placeholder="Write your Complain" aria-label="Write your Complain" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-danger" type="button" id="button-addon2" onClick={() => sendMsg()}>Send</button>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4 ps-5">
                        <h4 className="text-white text-center mb-2">Contact Us</h4>
                        <div className="address text-white">
                            <div className="d-flex align-items-center"><span className="customized-text-color fs-3 me-2">{home}</span> <span> Kolatoli, Cox Bazar, Bangladesh</span></div>
                            <div className="d-flex align-items-center"><span className="customized-text-color fs-3 me-2">{phone}</span> <span> +22301253, 639115632</span></div>
                            <div className="d-flex align-items-center"><span className="customized-text-color fs-3 me-2">{email}</span> <span> deliverEX@gmail.com</span></div>
                        </div>
                        <hr className="bg-light" />
                        <div className="useFullLinks text-center">
                            <a href="https://www.facebook.com/deliverEX" target="_blank" rel="noreferrer" className="mx-2 text-decoration-none text-white"> <i className="fab fa-2x fa-facebook-square"></i></a>
                            <a href="mailto:deliverEX@gmail.com" target="_blank" rel="noreferrer" className="mx-2 text-decoration-none text-white"> <i className="fas fa-2x fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </Container>
            <p className="text-center text-muted">&copy; All rights reserved By deliverEX</p>
        </div>

    );
};

export default Footer;