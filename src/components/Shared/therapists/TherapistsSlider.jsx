import { useEffect, useState } from 'react';
import { MdOutlineNavigateNext } from "react-icons/md";
import TherapistsCard from './TherapistsCard';

const TherapistSlider = () => {
  const [therapists, setTherapists] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch the data from the JSON file
    fetch('/therapists.json')
      .then(response => response.json())
      .then(data => setTherapists(data));
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % therapists.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + therapists.length) % therapists.length);
  };

  const visibleSlides = () => {
    if (window.innerWidth >= 1024) {
      return 4;
    } else {
      return 2;
    }
  };

  const slidesToShow = visibleSlides();

  const displayedTherapists = therapists.slice(currentIndex, currentIndex + slidesToShow).concat(
    therapists.slice(0, Math.max(0, (currentIndex + slidesToShow) - therapists.length))
  );

  return (
    <>
      <h2 className="text-2xl font-medium my-4">Featured Therapist</h2>
      <div className='relative lg:px-16 lg:py-8 bg-white'>
        <div className='flex p-4  gap-2 overflow-hidden'>
          {displayedTherapists.map((therapist, index) => (
            <div key={index} className="  lg:w-1/3 w-1/2">
              <TherapistsCard therapist={therapist} />
            </div>
          ))}
        </div>
        <button className='next absolute  right-1 top-[50%] translate-y-[-50%] rounded-full lg:p-3 bg-light hover:bg-dark' onClick={nextSlide}>
          <MdOutlineNavigateNext />
        </button>
        <button className='prev absolute  left-1 rotate-180 top-[50%] translate-y-[-50%] rounded-full lg:p-3 bg-light hover:bg-dark' onClick={prevSlide}>
          <MdOutlineNavigateNext />
        </button>
      </div>
    </>
  );
};

export default TherapistSlider;
