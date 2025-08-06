import { useState } from 'react'
import './App.css'
import React from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Components/Hero';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
       <Navbar/>
       <div className="max-w-6xl mx-auto px-4">
         <section id="home">
          <Hero/>
         </section>
       </div>
       <Footer/>
    </div>
  );

};

export default App;
