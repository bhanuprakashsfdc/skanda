import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

// Importing pages and components
import Layout from './layouts/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/Aboutpage.jsx';
/* import Services from './pages/Servicespage.jsx'; */
import Contact from './pages/Contactpage.jsx';
import Whyuspage from './pages/Whyuspage.jsx';
import PestControlService from './components/PestControlService/PestControlService.jsx'; // New Component for pest control services

// Importing city data
import cities from './data/locations'; // Assuming cities array is already available

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/about.html" element={<About />} />
       {/*  <Route path="/services.html" element={<Services />} /> */}
        <Route path="/why-us.html" element={<Whyuspage />} />
        <Route path="/contact.html" element={<Contact />} />

        {/* Dynamic routes for Pest Control Services in each city */}
        {cities.map(city => {
          const formattedCity = city.toLowerCase().replace(/ /g, '-');
          return (
            <Route
              key={city}
              path={`/pest-control-services-in-${formattedCity}.html`}
              element={<PestControlService city={city} />}
            />
          );
        })}
      </Route>
    </Routes>
  </Router>
);
