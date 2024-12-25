import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

import Layout from './layouts/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/Aboutpage.jsx';
import Services from './pages/Servicespage.jsx';
import Contact from './pages/Contactpage.jsx';
import Whyuspage from './pages/Whyuspage.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/index.html" element={<Home />} />
      <Route path="/about.html" element={<About />} />
      <Route path="/services.html" element={<Services />} />
      <Route path="/why-us.html" element={<Whyuspage />} />
      <Route path="/contact.html" element={<Contact />} />
      </Route>
  </Routes>
</Router>
);