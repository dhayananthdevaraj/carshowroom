import React from 'react';
import './App.css';
import Header from './components/Header';
import { carsData } from './carsData';
import CarList from './components/CarList';

function App() {
  return (
    <div className="app">
      <Header />
      <CarList cars={carsData} />
    </div>
  );
}

export default App;
