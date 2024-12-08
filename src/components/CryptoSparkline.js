import React from 'react';
import { useLocation } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar os componentes necessários para o Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CryptoSparkline = () => {
  const location = useLocation();
  const { data } = location.state || {};

  if (!data) {
    return <p>No data available</p>;
  }

  // Labels para os 7 dias
  const labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];

  // Estrutura de dados para o gráfico
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Coin Price Variance ($)',
        data: data,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.4, // Curva suave
      },
    ],
  };

  // Opções para o gráfico
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
      <div className="text-center mt-4">
        <button className="btn btn-secondary" onClick={() => window.history.back()}>
          Back
        </button>
      </div>
    </>
  );
};

export default CryptoSparkline;
