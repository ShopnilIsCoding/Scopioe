
const Cities = () => {
    const cities = [
        'Atlanta, GA', 'Indianapolis, IN', 'Philadelphia, PA', 'Boston, MA',
        'Jacksonville, FL', 'Queens, NY', 'Chicago, IL', 'Kansas City, MO',
        'Raleigh, NC', 'El Paso, TX', 'Miami, FL', 'Tucson, AZ',
        'Fresno, CA', 'Nashville, TN', 'Upland, CA', 'Houston, TX',
        'Oklahoma City, OK', 'Washington, D.C.'
      ];
      
    return (
        <div className="lg:w-1/2 w-full">
            <h2 className="text-xl font-bold my-4">Popular Cities</h2>
 <div className="bg-white  h-full mb-3 p-4 rounded-lg ">
      
      <div>
        {Array.from({ length: Math.ceil(cities.length / 3) }).map((_, rowIndex) => (
          <div key={rowIndex} className={`grid grid-cols-3 gap-4 ${rowIndex !== Math.ceil(cities.length / 3) - 1 ? 'border-b border-[#E7E7E7] pb-6 mb-6' : ''}`}>
            {cities.slice(rowIndex * 3, rowIndex * 3 + 3).map((city, index) => (
              <a key={index} href="#" className="text-dark underline">{city}</a>
            ))}
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default Cities;