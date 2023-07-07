import './App.css';
import Landingpage from './components/Landingpage';
import Role from'./components/Role';
import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import logo from './assets/logo.png';
import Profile from './components/InfluencerProfile/Profile'
import Details from './components/InfluencerProfile/Details'
// import About from './pages/About';
// import Feature from './pages/Feature';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Feature</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        {/* Page content */}
        <Routes>
          <Route path="/" element={<Landingpage/>} />
          <Route path="/role" element={<Role/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/details" element={<Details/>} />
          {/* <Route path="/profile" component={</} /> */}
          {/* <Route path="/about" component={About} />
          <Route path="/feature" component={Feature} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

