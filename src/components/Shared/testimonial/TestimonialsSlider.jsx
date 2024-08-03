// src/TestimonialsSlider.js
import Slider from 'react-slick';
import { testimonials } from '../../../assets/images/testimonial/testimonial';
import Testimonial from './Testimonial';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    vertical: true,
    arrows: false, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    
  };

  return (
    <div className='lg:w-1/2'>
      <h2 className="text-xl font-bold my-4 ">Featured Testimonial</h2>
      <div className=' bg-white h-full mb-3n'>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-2">
            <Testimonial testimonial={testimonial} />
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
}

export default TestimonialsSlider;
