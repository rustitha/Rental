import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBox from './components/SearchBox';
import PaymentMethod from './components/PaymentMethod';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchBox />} />
        <Route path="/payment" element={<PaymentMethod />} />
      </Routes>
    </Router>
  );
}

export default App;
