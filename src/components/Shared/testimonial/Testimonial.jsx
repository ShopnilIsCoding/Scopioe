import { FaLocationDot } from "react-icons/fa6";


const Testimonial = ({ testimonial }) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-[#E7E7E7]">
      <div className="flex items-center space-x-4">
        <img src={testimonial.image}  className=" " />
        <div>
          <p className="flex items-center gap-1 text-[#5C635A]"> <FaLocationDot /> {testimonial.address}</p>
          <h3 className="text-lg font-semibold">{testimonial.title} <span className="text-dark">{testimonial.owner}</span></h3>
          <p className="text-[#5C635A]">{testimonial.description}<a href="#" className="text-light underline">Read More</a></p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
