// CarList.js
import React from 'react';
import CarCard from './CarCard';

function CarList({ cars }) {
  return (
    <div className="car-list">
      {cars.map((car) => (
        <CarCard key={car.key} car={car} />
      ))}
    </div>
  );
}

export default CarList;
