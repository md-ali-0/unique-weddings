import { Link, useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import ServiceCard from "../Services/ServiceCard";

const Home = () => {
    const services = useLoaderData();
    return (
        <>
            <Slider></Slider>
            <main className="container mx-auto py-5">
                <section>
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
            </main>
        </>
    );
};

export default Home;