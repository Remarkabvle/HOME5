import React from 'react';
// import Header from './Header';
import './App.css'; // Optional, for additional global styles
// import Header from './components/header/Header';
// import HeroSection from './components/hero/HeroSection';
import Navbar from './components/header/Header';
import Hero from './components/hero/HeroSection';
import ProductList from './components/ProductList/ProductList';


const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Hero/>
        <ProductList/>
      </main>
    </div>
  );
};

export default App;
