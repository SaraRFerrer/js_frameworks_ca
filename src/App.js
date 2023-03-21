import React from 'react';
import './App.css';
import './app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout';
import Home from './pages/home';
import Contact from './pages/contact';
import RouteNotFound from './pages/notFound';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/cart';
import ProductPage from './pages/product';
import Checkout from './pages/checkout';


function App() {
  return (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="product/:id" element={<ProductPage />} />
      <Route path="*" element={<RouteNotFound />} />
    </Route>
  </Routes>
    
  );
}

export default App;
