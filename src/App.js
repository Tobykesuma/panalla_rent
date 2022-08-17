import React from 'react';
import './App.css';
// Navbar //
import Navbar from './components/Navbar/Navbar';
import Contact from './page/Contact/Contact';
// import Services from './page/Services/Services';


function App() {
  return (
    <>
      <Navbar />
      {/* <Services /> */}
      <Contact />
    </>
  );
}

export default App;
