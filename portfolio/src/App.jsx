import { useState } from 'react'
import './App.css'
import React from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
       <Navbar/>
       <Footer/>
    </div>
  );

};

export default App;
