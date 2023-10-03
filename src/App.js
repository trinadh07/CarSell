// App.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import carData from './components/CarData';
import CarList from './components/CarList';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';

function App() {
  const [cars, setCars] = useState(carData);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterData,setfilterData]=useState([]);
  const carsPerPage = 6;
  useEffect(() => {
    const startIndex = (currentPage - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    let filteredCars = carData;

    if (searchTerm) {
      filteredCars = carData.filter((car) =>
        car.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setfilterData(filteredCars);
    setCars(filteredCars.slice(startIndex, endIndex));
  }, [currentPage, searchTerm]);


  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  return (
    <div className="App">
      <h1>Car Search</h1>
      <SearchBar onSearch={handleSearch} />
      <CarList cars={cars} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filterData.length / carsPerPage)}
        onPageChange={(newPage) => setCurrentPage(newPage)}
      />
    </div>
  );
}

export default App;
