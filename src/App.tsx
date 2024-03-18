import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
//import Footer from './components/Footer';
import Home from './pages/Home';
import Works from './pages/Works';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
  const location = useLocation();
  const isSignInPage = location.pathname.toLowerCase() === '/login';
  const isSignUpPage = location.pathname.toLowerCase() === '/signup';

  return (
    <>
      {isSignInPage || isSignUpPage ? null : <NavBar />}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arts" element={<Works />} />
          <Route path="/support" element={<Blog />} />
          <Route path="/about" element={<Contact />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
