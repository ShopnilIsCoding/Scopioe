
import therapy from '../../assets/images/therapy.png';
import zebra from '../../assets/images/zebra.svg';

const Banner = () => {
  return (
    <div className="bg-white p-3 rounded-[10px]">
      <div className="flex flex-col lg:grid lg:grid-cols-4 lg:gap-4 lg:auto-rows-min">
        {/* Div 1 */}
        <div className="p-4 lg:col-span-2 lg:row-span-1">
          <p className="font-medium lg:text-xl mb-2">I'm Looking for Massage Therapist Near...</p>
          <p className='text-xs lg:text-sm'>
            In using this site, I agree to be bound by the{' '}
            <span className="text-dark font-medium underline">Terms of Service</span> and{' '}
            <span className="text-dark font-medium underline">Privacy Policy</span>
          </p>
        </div>

        {/* Therapy Image Div - Div 2 */}
        <div className="relative p-4 lg:col-start-3 lg:col-end-5 lg:row-span-2 flex justify-end items-center lg:h-auto">
          <img src={therapy} className='lg:absolute z-10' alt="therapy image goes here" />
          <img src={zebra} className="absolute -z-0 left-0" />
        </div>

        {/* Zip Search Div - Div 3 */}
        <div className="flex bg-[#EEF2F5] p-1 lg:col-span-2 lg:col-start-1 lg:col-end-3 lg:row-start-2 items-center rounded-xl">
          <input
            type="text"
            placeholder="ZIP code or city name"
            className="input w-full bg-[#EEF2F5]"
          />
          <button className="btn bg-dark cursor-pointer px-6 text-white">Go</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
