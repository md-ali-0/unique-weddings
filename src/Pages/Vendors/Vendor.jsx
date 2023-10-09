import { useParams, useLoaderData } from "react-router-dom";
import { FiStar } from "react-icons/fi";

const Vendor = () => {

    const { id } = useParams()
    const vendors = useLoaderData();
    const vendor = vendors.find(vendor => vendor.id == id)
    const { vendor_name, image, price, description , rating} = vendor
    return (
        <div>
            <div className="container mx-auto">
                <h3 className="text-3xl text-slate-700 text-center font-bold py-3">Vendor Details</h3>
                <div className="p-10">
                    <img className="w-full rounded-lg" src={image} alt="" />
                    <div className="shadow-lg border-2 rounded-lg p-3 my-5">
                        <h3 className="text-3xl text-slate-800 font-bold">{vendor_name}</h3>
                        <div className='flex justify-between items-center border p-2 m-2'>
                            <p className='text-xl text-pink-500 rounded w-fit bg-pink-200 py-2 px-3 my-2'>Price: {price}</p>
                            <span className='bg-green-700 text-white p-3 flex gap-2'>
                                <FiStar className='text-white' size={20}></FiStar>
                                Rating : {rating}
                            </span>
                        </div>
                        <p className="text-xl text-gray-800 py-5 px-3">{description}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Vendor;