import { Link } from 'react-router-dom';
import ServiceCard from '../Services/ServiceCard';
import { useEffect, useState } from 'react';

const ServicesSection = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('./vendors.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <section className="px-3 py-10">
            <h3 className="text-[#4a4a4a] text-3xl font-medium text-center">Our Services</h3>
            <div className="grid grid-col-1 md:grid-cols-3 gap-10 py-5">

                {
                    services.slice(0, 6).map((service, idx) => <ServiceCard key={idx} service={service}></ServiceCard>)
                }
            </div>
            <div className="flex justify-center items-center">
                <Link to='/services' className="bg-white border-primary border text-primary rounded py-2 px-3 mr-2">View All</Link>
            </div>
        </section>
    );
};
export default ServicesSection;