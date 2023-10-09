import { useEffect, useState } from "react";
import VenueCard from "../Venues/VenueCard";

const VenuesSection = () => {
    const [venues, setVenues] = useState([]);
    useEffect(() => {
        fetch('./venues.json')
            .then(res => res.json())
            .then(data => setVenues(data))
    }, [])
    return (
        <section className="px-3 py-10">
            <h3 className="text-[#4a4a4a] text-3xl font-medium text-center"> Venues</h3>
            <div className="grid grid-col-1 md:grid-cols-2 gap-10 py-5">

                {
                    venues.slice(0, 4).map((venue, idx) => <VenueCard key={idx} venue={venue}></VenueCard>)
                }
            </div>
        </section>
    );
};

export default VenuesSection;