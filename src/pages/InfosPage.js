import React, { useState } from 'react';
import CryptoTracker from '../components/CryptoTracker';
import 'bootstrap/dist/css/bootstrap.min.css';
import News from '../components/News';

function InfosPage() {
  const [view, setView] = useState('crypto');

  return (
    <div className="container my-4">
      <h1 className="text-center text-primary mb-4">Real-Time Tracker</h1>
      <div className="text-center mb-4">
        <button className="btn btn-primary mx-2" onClick={() => setView('crypto')}>Crypto Information</button>
        <button className="btn btn-secondary mx-2" onClick={() => setView('news')}>News Information</button>
      </div>
      {view === 'crypto' ? <CryptoTracker /> : <News />}
    </div>
  );
}

export default InfosPage;


