
import React from 'react';
import Car from './Car';

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      <div className="car-card-container">
        {cars.map((car) => (
          <div key={car.id} className="car-cards">
            <Car car={car} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
