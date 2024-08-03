import Banner from "../components/Shared/Banner";
import TherapistSlider from "../components/Shared/therapists/TherapistsSlider";


const Home = () => {
    return (
        <div className="flex-1 flex flex-col items-center lg:p-7 pt-7 bg-[#EEF2F5] poppins">
            <Banner></Banner>
            <TherapistSlider></TherapistSlider>
            
        </div>
    );
};

export default Home;