import Slider from "./Slider";
import ServicesSection from "./ServicesSection";
import VendorsSection from "./VendorsSection";
import VenuesSection from "./VenuesSection";

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <main className="container mx-auto py-5">
                <ServicesSection></ServicesSection>
                <VendorsSection></VendorsSection>
                <VenuesSection></VenuesSection>
            </main>
        </>
    );
};

export default Home;