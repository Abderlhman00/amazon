import React, { Component, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RingLoader from 'react-spinners/RingLoader';
// -------------Components-------------------
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Checkout from './component/Checkout/Checkout';


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    //  BEM

    <BrowserRouter>
      {loading ? (
        <div className="preloaderr">
          <RingLoader
            color={'#edda0c'}
            loading={loading}
            height={100}
            margin={10}
          />
        </div>
      ) : (
        <>

          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
