import { Link } from "react-router-dom";
import VendorCard from "../Vendors/VendorCard";
import { useEffect, useState } from "react";

const VendorsSection = () => {
    const [vendors, setVendors] = useState([]);
    useEffect(() => {
        fetch('./vendors.json')
            .then(res => res.json())
            .then(data => setVendors(data))
    }, [])
    return (
        <section className="px-3 py-10">
            <h3 className="text-[#4a4a4a] text-3xl font-medium text-center">Featured Vendors</h3>
            <div className="grid grid-col-1 md:grid-cols-2 gap-10 py-5">

                {
                    vendors.slice(0, 4).map((vendor, idx) => <VendorCard key={idx} vendor={vendor}></VendorCard>)
                }
            </div>
            <div className="flex justify-center items-center">
                <Link to='/vendors' className="bg-white border-primary border text-primary rounded py-2 px-3 mr-2">View All</Link>
            </div>
        </section>
    );
};

export default VendorsSection;