import React from 'react';
import './App.css';
// Navbar //
import Navbar from './components/Navbar/Navbar';
import Contact from './page/Contact/Contact';
import Testimonials from './page/Testimonials/Testimonials';
// import Services from './page/Services/Services';


function App() {
  return (
    <>
      <Navbar />
      {/* <Services /> */}
      <Contact />
      <Testimonials />
    </>
  );
}

export default App;
