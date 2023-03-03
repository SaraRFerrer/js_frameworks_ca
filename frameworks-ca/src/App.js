import React from 'react';
import './App.css';
import Layout from './components/layout';
import Home from './pages/home';
import Contact from './pages/contact';
import RouteNotFound from './pages/notFound';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
    
  );
}

export default App;
