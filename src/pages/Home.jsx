import Banner from "../components/Shared/Banner";
import Cities from "../components/Shared/cities/Cities";
import TestimonialsSlider from "../components/Shared/testimonial/TestimonialsSlider";
import TherapistSlider from "../components/Shared/therapists/TherapistsSlider";


const Home = () => {
    return (
        <div className="flex-1 overflow-x-hidden flex flex-col items-center lg:p-7 pt-7 bg-[#EEF2F5] poppins">
            <Banner></Banner>
            <TherapistSlider></TherapistSlider>
            <div className="flex gap-2 p-3 lg:flex-row flex-col">
            <TestimonialsSlider></TestimonialsSlider>
            <Cities></Cities>
            </div>
            
        </div>
    );
};

export default Home;