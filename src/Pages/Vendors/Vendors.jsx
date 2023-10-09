import { useLoaderData } from "react-router-dom";
import VendorCard from "./VendorCard";

const Vendors = () => {
    const vendors = useLoaderData();
    return (
        <div className="container mx-auto">
            <h3 className="text-[#4a4a4a] text-3xl font-medium text-center my-5">Our Services</h3>
            <div className="grid grid-col-1 md:grid-cols-3 gap-10 py-5">

                {
                    vendors.map((vendor, idx) => <VendorCard key={idx} vendor={vendor}></VendorCard>)
                }
            </div>
        </div>
    );
};

export default Vendors;