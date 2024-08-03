import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import 'animate.css';

const NewListing = () => {
  const [therapies, setTherapies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setTherapies(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTherapies = therapies.filter(therapy => 
    therapy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    therapy.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="new-listing p-4 poppins">
      <h2 className="text-center text-2xl font-bold mb-6">New Therapy Listings</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title or location"
          value={searchTerm}
          onChange={handleSearchChange}
          className="input input-bordered w-full max-w-lg mx-auto"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTherapies.map(therapy => (
          <div key={therapy.id} className="card bg-base-100 shadow-xl animate__animated animate__fadeIn">
            <figure>
              <img src={therapy.image} alt={therapy.title} className="w-full h-48 object-cover"/>
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg font-semibold">{therapy.title}</h3>
              <p>{therapy.description}</p>
              <p className="text-lg font-bold">{therapy.price}</p>
              <p>{therapy.time}</p>
              <div className="flex items-center mt-2">
                <FaMapMarkerAlt className="mr-2 text-red-500"/>
                <span>{therapy.location}</span>
              </div>
              <div className="card-actions justify-end mt-4">
                <button className="btn bg-light hover:bg-dark text-white">Explore Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewListing;
