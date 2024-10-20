import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useMovies } from "../contexts/MovieContext";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics = () => {
  const movies = useMovies();
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (movies.length) {
      const completionCounts = movies.reduce((acc, movie) => {
        const completeDate = new Date(movie.complete);
        const yearMonth = `${completeDate.getFullYear()}-${(
          completeDate.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}`;

        if (!acc[yearMonth]) {
          acc[yearMonth] = 0;
        }
        acc[yearMonth]++;
        return acc;
      }, {});

      const labels = Object.keys(completionCounts).sort();
      const data = labels.map((label) => completionCounts[label]);

      setChartData({
        labels,
        datasets: [
          {
            label: "学習完了数",
            data,
            backgroundColor: "teal",
            borderColor: "darkslategray",
            borderWidth: 1,
          },
        ],
      });
    }
  }, [movies]);

  return (
    <div className="analytics">
      <div className="chart">
        <h1 className="chart__title">動画学習データ</h1>
        <Bar
          className="chart__body"
          data={chartData}
          options={{
            indexAxis: "y",
            scales: {
              x: {
                beginAtZero: true,
                ticks: {
                  stepSize: 1,
                },
              },
            },
            plugins: {
              legend: {
                display: true,
                position: "bottom",
              },
            },
          }}
        />
      </div>
      <Link className="btn green show-movies" to="/movies">
          動画一覧を見る
      </Link>
    </div>
  );
};

export default Analytics;
