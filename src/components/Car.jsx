import React from 'react';

const Car = ({ car }) => {
  return (
    <div className="car-card">
      <img className="car-image" src={car.image} alt={`${car.make} ${car.model}`} />
      <h3 className="car-title">{car.make} {car.model}</h3>
      <p className="car-detail">Year: {car.year}</p>
      <p className="car-detail">Price: ${car.price}</p>
    </div>
  );
};

export default Car;
