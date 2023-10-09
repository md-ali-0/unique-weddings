import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { id, service_name, image, price } = service

    return (
        <div className="rounded-lg shadow-lg px-3 md:px-0">
            <img className='w-full rounded-t-lg' src={image} alt="" />
            <div className='p-5 space-y-2'>
                <h3 className='text-slate-700 text-center text-xl font-medium my-2'>{service_name}</h3>
                <p className='bg-white text-center text-primary'>{price}</p>
                <div className='flex justify-center'>
                    <Link to={`/service/${id}`} className=' text-white bg-primary hover:bg-primary focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>View Details</Link>
                </div>
            </div>

        </div>
    );
};
ServiceCard.propTypes = {
    service: PropTypes.object.isRequired,
}
export default ServiceCard;