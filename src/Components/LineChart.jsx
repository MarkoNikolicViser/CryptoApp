import React from 'react';
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
import { Line } from 'react-chartjs-2';
import { HelperFunction } from '../Helper/HelperFunction';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    x: {
      // max: 5,
      // min: 0,
      ticks: {
        stepSize: 5
      }
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
    },
  },
};

export const LineChart = ({ dataChart, days }) => {
  const { DateConversion } = HelperFunction()

  const data = {
    labels: dataChart.prices.map(m => DateConversion(m[0])),
    datasets: [
      {
        label: `Price in euros for last ${days} day/s`,
        data: dataChart.prices.map(m => m[1]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return <Line options={options} data={data} />
}
