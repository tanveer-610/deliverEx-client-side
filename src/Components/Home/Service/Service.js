
import { Container } from 'react-bootstrap';

import useService from '../../../hooks/useHooks';

import SingleService from './SingleService/SingleService';
const Service = () => {
    const services = useService();
    return (
        <Container className="my-3 pt-5" id="services">
            <h2 className="text-center customized-text-color pt-4">Our All Services</h2>
            <hr />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(singleService => <SingleService key={singleService._id} singleService={singleService} ></SingleService>)
                }
            </div>
        </Container>
    );
};

export default Service;