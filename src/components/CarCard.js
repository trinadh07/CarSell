// CarCard.js
import React from 'react';

function CarCard({ car }) {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.title} />
      <h3>{car.title} {car.start_production}</h3>
      <h3>Class:{car.class}</h3>
      <button>BUY</button>
    </div>
  );
}

export default CarCard;
