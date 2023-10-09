import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiStar } from "react-icons/fi";

const VendorCard = ({ vendor }) => {
    const { id, service_name, image, rating, price } = vendor
    return (
        <div className="rounded-lg shadow-lg px-3 md:px-0">
            <Link to={`/vendor/${id}`}>
            <img className='w-auto mx-auto m-2 mt-5 shadow-lg rounded' src={image} alt="" />
            <div className='p-5 space-y-2'>
                <h3 className='text-slate-700 text-center text-xl font-medium my-2'>{service_name}</h3>

                <div className='flex justify-between items-center border p-3'>
                    <p className='bg-white text-primary'>Price: {price}</p>
                    <span className='bg-green-700 text-white p-3 flex gap-2'>
                        <FiStar className='text-white' size={20}></FiStar>
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