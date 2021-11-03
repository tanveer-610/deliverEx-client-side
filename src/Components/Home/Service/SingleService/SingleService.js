import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const { _id, name, img, price, description } = props.singleService;
    const dollar = <FontAwesomeIcon icon={faDollarSign} />
    return (
        <div className="col shadow-lg p-3 rounded rounded-3">
            <div className="card h-100">
                <img src={img} className="card-img-top rounded rounded-3" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <hr />
                    <p className="card-text text-muted">{description}</p>
                    <p className="customized-text-color">Price : {dollar} {price} </p>
                </div>
                <div className="card-footer text-center">
                    <Link to={`/placeOrder/${_id}`}><button className="btn btn-outline-dark">Purchase Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;