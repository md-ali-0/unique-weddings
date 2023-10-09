import { useParams, useLoaderData } from "react-router-dom";
import { FiStar, FiMapPin } from "react-icons/fi";

const Venue = () => {

    const { id } = useParams()
    const Venues = useLoaderData();
    const venue = Venues.find(venue => venue.id == id)
    const { venue_name, image, location, description , rating} = venue
    return (
        <div>
            <div className="container mx-auto">
                <h3 className="text-3xl text-slate-700 text-center font-bold py-3">Venue Details</h3>
                <div className="p-10">
                    <img className="w-full rounded-lg" src={image} alt="" />
                    <div className="shadow-lg border rounded-lg p-3 my-5">
                        <h3 className="text-3xl text-slate-800 font-bold">{venue_name}</h3>
                        <div className='flex justify-between items-center border p-2 m-2'>
                            <p className='bg-primary text-white flex justify-center items-center gap-2 p-2'><FiMapPin size={20}></FiMapPin> {location}</p>
                            <p className='bg-green-700 text-white flex justify-center items-center gap-2 p-2'><FiStar size={20}></FiStar> {rating} </p>
                        </div>
                        <p className="text-xl text-gray-800 py-5 px-3">{description}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Venue;