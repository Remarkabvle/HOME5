import React from 'react';
// import Header from './Header';
import './App.css'; // Optional, for additional global styles
import Header from './components/header/Header';
import HeroSection from './components/hero/HeroSection';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
    </div>
  );
};

export default App;
