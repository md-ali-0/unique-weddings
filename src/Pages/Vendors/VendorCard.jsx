import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiStar, FiDollarSign } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 400,
    delay: 0,
    once: true,
    mirror: false,
    offset: 20,
    animatedClassName: 'aos-animate',
    anchorPlacement: 'top-bottom',
    easing: 'ease',
  });

const VendorCard = ({ vendor }) => {
    const { id, vendor_name, image, rating, price } = vendor
    return (
        <div data-aos="fade-right" className="rounded-lg shadow-lg px-3 md:px-0">
            <Link to={`/vendors/${id}`}>
            <img className='w-auto mx-auto m-2 mt-5 shadow-lg rounded' src={image} alt="" />
            <div className='p-5 space-y-2'>
                <h3 className='text-slate-700 text-center text-xl font-medium my-2'>{vendor_name}</h3>

                <div className='flex justify-between items-center border p-3'>
                    <p className='bg-pink-200 bg-opacity-80 text-pink-500 border border-pink-500 p-3 flex gap-2'> <FiDollarSign size={20}></FiDollarSign> {price}</p>
                    <span className='bg-blue-100 border-blue-600 border  text-blue-600  p-3 flex gap-2'>
                        <FiStar className='text-blue-600' size={20}></FiStar>
                        {rating}
                    </span>
                </div>
            </div>
            </Link>
        </div>
    );
};
VendorCard.propTypes = {
    vendor: PropTypes.object.isRequired,
}
export default VendorCard;