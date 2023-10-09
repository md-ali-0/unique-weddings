import { useParams, useLoaderData } from "react-router-dom";

const Service = () => {
    const { id } = useParams()
    const services = useLoaderData();
    const service = services.find(service => service.id == id)
    const { service_name, image, price, description } = service
    return (
        <div className="container mx-auto">
            <h3 className="text-3xl text-slate-700 text-center font-bold py-3">Service Details</h3>
            <div className="p-10">
                <img className="w-full rounded-lg" src={image} alt="" />
                <div className="shadow-lg border-2 rounded-lg p-3 my-5">
                    <h3 className="text-3xl text-slate-800 font-bold">{service_name}</h3>
                    <p className="text-xl text-pink-500 rounded w-fit bg-pink-200 py-2 px-3 my-2">{price}</p>
                    <p className="text-xl text-gray-800">{description}</p>
                </div>

            </div>
        </div>
    );
};

export default Service;