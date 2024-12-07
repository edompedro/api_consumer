import React from 'react';

const CryptoSection = ({ cryptodata }) => {
  if (!cryptodata) return <p>Loading Crypto data...</p>;
  console.log(cryptodata);

  return (
    <div className="card">
      <div className="card-header bg-warning text-dark">
      <strong>{cryptodata.name}</strong>
      </div>
      <div className="card-body">
        <p><strong>Current Price:</strong> ${cryptodata.current_price}</p>
        <p><strong>Market Cap:</strong> ${cryptodata.market_cap.toLocaleString()}</p>
        <p><strong>24h High:</strong> ${cryptodata.high_24h}</p>
        <p><strong>24h Low:</strong> ${cryptodata.low_24h}</p>
        <button 
          className="btn btn-primary mt-3" 
          onClick={() => window.location.href='/CryptoSparkline'}
        >
          View Sparkline
        </button>
      </div>
    </div>
  );
};

export default CryptoSection;
