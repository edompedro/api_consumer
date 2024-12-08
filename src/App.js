import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CryptoSparkline from "./components/CryptoSparkline";
import InfosPage from "./pages/InfosPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InfosPage />} />
        <Route path="/CryptoSparkline" element={<CryptoSparkline />} />
      </Routes>
    </Router>
  );
}

export default App;
