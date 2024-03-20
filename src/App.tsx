import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './services/api/AuthContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Works from './pages/Works';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


const socialMediaIcons = [
  require('./assets/facebook_icon.png'),
  require('./assets/inst_icon.png'),
  require('./assets/linkedin_icon.png'),
  require('./assets/twitter_icon.png'),
];

const App = () => {
  return (
    <Router>
       <AuthProvider>
      <div>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <Footer socialMediaIcons={socialMediaIcons} />
      </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
