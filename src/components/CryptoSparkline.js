import React from 'react';
import { Line } from 'react-chartjs-2';

const CryptoSparkline = ({ data }) => {
  // Labels for the 7 days
  const labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];

  // Chart.js data structure
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Coin Price Variance ($)',
        data: data,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.4, // Smooth curve
      },
    ],
  };

  // Chart.js options for styling
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Days',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price ($)',
        },
        beginAtZero: false,
      },
    },
  };

  return (
    <>
    <div className="container my-4">
    <h1 className="text-center text-primary mb-4">7-Day Coin Price Variance</h1>
  </div>
    <div className="card">
      <div className="card-body">
        <Line data={chartData} options={options} />
      </div>
    </div>
    </>
  );
};

export default CryptoSparkline;
