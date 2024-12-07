import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoSection from './CryptoSection';

const CryptoTracker = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: true,
          },
        });
        setCryptoData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div>;

  return (
    <div className="row">
      {cryptoData.map((coin) => (
        <div key={coin.id} className="col-lg-4 mb-5">
          <CryptoSection cryptodata={coin} />
        </div>
      ))}
    </div>
  );
};

export default CryptoTracker;
