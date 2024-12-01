import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage';
import PostSinglePage from './Pages/PostSinglePage';
import ContactPage from './Pages/ContactPage';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Components/LoginComponents';
import 'remixicon/fonts/remixicon.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/postsinglepage' element={<PostSinglePage />} />
        <Route path='/Contact' element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
