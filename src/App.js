import React from 'react';
import Home from './Pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { CoinDetails } from './Pages/CoinDetails';

const App = () => {

  return <Routes>
    <Route
     path='/' element={<Home />} />
    <Route path='/coin/:id' element={<CoinDetails />} />
  </Routes>
}

export default App;
