import { faClipboardCheck, faGlobe, faHandHoldingUsd, faLightbulb, faMapMarked, faTruckPickup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import Iframe from 'react-iframe';

const MapAndFAQ = () => {
    const light = <FontAwesomeIcon icon={faLightbulb} />
    const world = <FontAwesomeIcon icon={faGlobe} />
    const map = <FontAwesomeIcon icon={faMapMarked} />
    const code = <FontAwesomeIcon icon={faClipboardCheck} />
    const deliver = <FontAwesomeIcon icon={faTruckPickup} />
    const cash = <FontAwesomeIcon icon={faHandHoldingUsd} />
    return (
        <div id="faqAndMap" className="my-3 pt-4">
            <Container className="my-5 rounded rounded-3 p-5 shadow-lg">
                <Row>
                    <Col xs={12} lg={6}>
                        {/* Map Location  */}
                        <Container className="h-100 ">
                            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.764105804355!2d79.88578791470516!3d6.918780295000899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259970a17f6f3%3A0x4ea278a4758943f4!2sDeliveryEx%20by%20Casons!5e0!3m2!1sen!2sbd!4v1635774749066!5m2!1sen!2sbd" className="h-100 w-100 border border-2 rounded rounded-3" allowfullscreen="" loading="lazy"></Iframe>
                        </Container>
                    </Col>
                    <Col xs={12} lg={6}>
                        {/* FAQ  */}
                        <h4 className="mb-3 custom-header-color2 customized-text-color text-center">Frequently Asked Ques</h4>
                        <Accordion className="rounded">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Can I deliver all type of product? </Accordion.Header>
                                <Accordion.Body>
                                    <h5><span className="customized-text-color">{light}</span> One Stop Solution</h5>
                                    <p className="text-muted ps-4">
                                        We understand how to make logistics work for our merchant partners. Our job is to let our partners focus on their core business while we take care of the rest.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Can i deliver product to the outside of the country?</Accordion.Header>
                                <Accordion.Body>
                                    <h5><span className="customized-text-color">{world}</span> Worldwide Coverage</h5>
                                    <p className="text-muted ps-4">
                                        Yes, you can. We have a dedicated delivery channel of 350+ delivery agents in Dhaka and Chattogram. Also we have 1500+ delivery agents across the world. We have partnered with 500+ franchises all over the world as well.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How can I believe that our product will be delivered in right way?</Accordion.Header>
                                <Accordion.Body>
                                    <h5><span className="customized-text-color">{map}</span> Full Tracking</h5>
                                    <p className="text-muted ps-4">
                                        Merchants have full access of tracking every step of the delivery. We provide end to end real time tracking facilities through email, sms and QR code.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>What you will provide for ensuring security for any customer?</Accordion.Header>
                                <Accordion.Body>
                                    <h5><span className="customized-text-color">{code}</span> Delivery confirmation with OTP</h5>
                                    <p className="text-muted ps-4">
                                        Two factor authentications - OTP verification is implemented at the time of delivery to ensure an additional layer of security to the delivered package.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>How much time you take to deliver? </Accordion.Header>
                                <Accordion.Body>
                                    <h5><span className="customized-text-color">{deliver}</span> Fastest Service</h5>
                                    <p className="text-muted ps-4">
                                        Our team works round the clock to ensure fastest delivery and minimize cancellation ratio so that we, as a business partner, can ensure our customer’s growth.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>What is your payment Method?</Accordion.Header>
                                <Accordion.Body>
                                    <h5><span className="customized-text-color">{cash}</span> Cash on Delivery (COD)</h5>
                                    <p className="text-muted ps-4">
                                        We collect cash from your customer and transfer it to you on time through a formal banking channel, and of course with all the detailed supporting information.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default MapAndFAQ;