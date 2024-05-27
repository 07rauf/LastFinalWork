import About from './components/About';
import Home from './components/Home';
import Orders from './components/Orders'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Head from './components/Head';
import Midle from './components/Midle'; 
import './TotalCss/total.css'
import React, { useState, useEffect } from 'react';

function App() {
  const [searchBrand, setSearchBrand] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  const handleCheckout = () => {
    setOrders(cartItems);
    setCartItems([]); 
  };

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  return (  
    <div>
      <Router>
        <Nav setSearchBrand={setSearchBrand} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/orders" element={ <Orders orders={orders} />} />
        </Routes>
      </Router>
       <Head />
       <Midle cartItems={cartItems} setCartItems={setCartItems} handleCheckout={handleCheckout} searchBrand={searchBrand} products={products} />
    </div>
  );
}

export default App;
