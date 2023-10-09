import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiStar, FiMapPin } from "react-icons/fi";


const VenueCard = ({ venue }) => {
    const { id, venue_name, location, image, rating } = venue;
    return (
        <div>
            <Link to={`/venues/${id}`}>
                <div className="relative w-full h-[260px] rounded-xl bg-cover bg-center-center" style={{ backgroundImage: `url(${image})` }}>
                    <p className='absolute rounded-md top-5 left-5 bg-primary text-white flex justify-center items-center gap-2 p-2'> <FiMapPin size={20}></FiMapPin> {location}</p>
                    <p className='absolute rounded-md top-5 right-5 bg-green-700 text-white flex justify-center items-center gap-2 p-2'> <FiStar size={20}></FiStar> {rating} </p>
                    <div className='absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <h2 className='text-center rounded-md  font-medium text-xl bg-blue-400 bg-opacity-50 py-2 px-3'>{venue_name}</h2>
                    </div>

                </div>
            </Link>
        </div>
    );
};

VenueCard.propTypes = {
    venue: PropTypes.object.isRequired,
}
export default VenueCard;