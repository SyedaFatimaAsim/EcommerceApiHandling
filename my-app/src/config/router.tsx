// App.tsx
import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import ProductDetailPage from '../Pages/ProductDetailPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/product/:id" element={<ProductDetailPage/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
