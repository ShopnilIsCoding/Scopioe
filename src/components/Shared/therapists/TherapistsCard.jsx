/* eslint-disable react/prop-types */
import { FaLocationDot } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";

const TherapistsCard = ({ therapist }) => {
  return (
    <div className="bg-white p-4 rounded-lg border flex flex-col min-h-[400px] border-[#E7E7E7]">
      <img src={therapist.image} alt={therapist.name} className="w-full rounded-t-lg" />
      <div className="p-4 flex-1">
        <h3 className="font-bold text-lg mb-2">{therapist.name}</h3>
        <p className="text-[#5C635A] mb-2 flex items-center gap-1"> <FaLocationDot />{therapist.address}</p>
        <p className="text-[#5C635A] flex items-center gap-1"><FaCar />{therapist.service}</p>
      </div>
      <button className="bg-dark text-white w-full py-2 rounded-b-lg">See Details</button>
    </div>
  );
};

export default TherapistsCard;
