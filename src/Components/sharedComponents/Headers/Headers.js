import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from "../../../Assets/Images/logo.png"
import useAuth from '../../../hooks/useAuth';
import './Headers.css'
const Headers = () => {
    const { user, logOut } = useAuth();
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand as={NavLink} to="/home" className="fw-bold">
                        <img
                            alt=""
                            src={img}
                            className="d-inline-block align-top"
                        />{' '}
                        <span className="text-Primary">deliver</span><span className="text-danger">EX</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end my-2 ">
                        <div>
                            {
                                user.email ?
                                    <div className="d-flex flex-wrap">
                                        <Nav.Link className="navLinks" as={NavLink} to="/home">Home</Nav.Link>
                                        <Nav.Link className="navLinks" as={NavLink} to="/myOrder">My Orders</Nav.Link>
                                        <Nav.Link className="navLinks" as={NavLink} to="/manageAllOrder">Manage Orders</Nav.Link>
                                        <Nav.Link className="navLinks" as={NavLink} to="/addNewService">Add Service</Nav.Link>
                                        <div className="d-flex align-items-center">
                                            <span className="mx-2 text-white">{user.displayName}</span>
                                            <button onClick={logOut} className="btn btn-outline-danger">Log Out</button>
                                        </div>
                                    </div>
                                    :
                                    <Nav.Link as={NavLink} to="/login" className="login-btn navLinks">Log In</Nav.Link>
                            }
                        </div>

                    </Navbar.Collapse>
                </Container >
            </Navbar >
        </Container >
    );
};

export default Headers;