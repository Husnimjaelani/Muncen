import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Offcanvas from './Components/Offcanvas';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <Router>
      <Navbar toggleOffcanvas={toggleOffcanvas} />
      <Offcanvas isOpen={isOffcanvasOpen} onClose={toggleOffcanvas} />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
