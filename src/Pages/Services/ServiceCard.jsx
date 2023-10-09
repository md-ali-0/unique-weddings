import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 200,
    delay: 0,
    once: true,
    offset: 20,
    mirror: false,
    animatedClassName: 'aos-animate',
    anchorPlacement: 'top-bottom',
    easing: 'ease',
  });

const ServiceCard = ({ service }) => {
    const { id, service_name, image, short_description, price } = service

    return (
        <div data-aos="fade-up" className="rounded-lg shadow-lg px-3 md:px-0">
            <img className='w-full rounded-t-lg' src={image} alt="" />
            <div className='p-5 space-y-2'>
                <h3 className='text-slate-700 text-center text-xl font-medium my-2'>{service_name}</h3>
                <p className='bg-white text-center text-primary'>{price}</p>
                <p className='text-center text-sm'>{short_description}</p>
                <div className='flex justify-center'>
                    <Link to={`/services/${id}`} className=' text-white bg-primary hover:bg-primary focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>View Details</Link>
                </div>
            </div>

        </div>
    );
};
ServiceCard.propTypes = {
    service: PropTypes.object.isRequired,
}
export default ServiceCard;