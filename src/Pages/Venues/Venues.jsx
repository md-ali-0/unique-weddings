import { useLoaderData } from "react-router-dom";
import VenueCard from "./VenueCard";

const Venues = () => {
    const venues = useLoaderData();
    return (
        <div className="container mx-auto">
            <h3 className="text-[#4a4a4a] text-3xl font-medium text-center my-5">Our Venues</h3>
            <div className="grid grid-col-1 md:grid-cols-2 gap-10 py-5">
                {
                    venues.map((venue, idx) => <VenueCard key={idx} venue={venue}></VenueCard>)
                }
            </div>
        </div>
    );
};

export default Venues;